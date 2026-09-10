import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { defaultLocale, locales, type Locale } from "@/i18n/config";
import { parseBlogPostMetadata, type BlogPostMetadata } from "./blog-schema";

export interface BlogPost {
  slug: string;
  locale: Locale;
  metadata: BlogPostMetadata;
  content: string;
}

const contentDirectory = path.join(process.cwd(), "content/blog");

function localeDirectory(locale: Locale) {
  return locale === defaultLocale ? contentDirectory : path.join(contentDirectory, locale);
}

function readPosts(locale: Locale): BlogPost[] {
  const directory = localeDirectory(locale);
  if (!fs.existsSync(directory)) return [];

  const seen = new Set<string>();
  return fs
    .readdirSync(directory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      if (seen.has(slug)) throw new Error(`Duplicate ${locale} blog slug: ${slug}`);
      seen.add(slug);
      const { data, content } = matter(fs.readFileSync(path.join(directory, fileName), "utf8"));

      return {
        slug,
        locale,
        metadata: parseBlogPostMetadata(data, `${locale}/${fileName}`),
        content,
      };
    });
}

function sortPosts(posts: BlogPost[]) {
  return posts.sort(
    (a, b) =>
      new Date(`${b.metadata.publishedAt}T00:00:00Z`).getTime() -
      new Date(`${a.metadata.publishedAt}T00:00:00Z`).getTime(),
  );
}

export function getBlogPosts(locale: Locale = defaultLocale): BlogPost[] {
  return sortPosts(readPosts(locale));
}

export function getPost(slug: string, locale: Locale = defaultLocale): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getHomepageBlogPosts(locale: Locale = defaultLocale): BlogPost[] {
  return getBlogPosts(locale)
    .filter((post) => post.metadata.homepageFeatured)
    .sort(
      (a, b) =>
        (a.metadata.homepageOrder ?? Number.MAX_SAFE_INTEGER) -
        (b.metadata.homepageOrder ?? Number.MAX_SAFE_INTEGER),
    )
    .slice(0, 3);
}

export function getAvailableBlogLocales(): Locale[] {
  return locales.filter((locale) => getBlogPosts(locale).length > 0);
}

export function hasLocalizedPost(slug: string, locale: Locale) {
  return Boolean(getPost(slug, locale));
}

export function getBlogTopicPosts(locale: Locale, topic: string) {
  return getBlogPosts(locale).filter((post) => post.metadata.category === topic);
}

export function getBlogTopics(locale: Locale = defaultLocale) {
  return Array.from(new Set(getBlogPosts(locale).map((post) => post.metadata.category)));
}

export type { BlogPostMetadata };
