import type { MetadataRoute } from "next";
import { getBlogPosts, getBlogTopics } from "@/lib/blog";
import { getProjects } from "@/lib/projects";
import { DOMAIN_URL } from "@/lib/info";
import { getLabNotes } from "@/lib/notes";

function safeDate(dateStr: string | undefined): Date | undefined {
  if (!dateStr) return undefined;

  const parsedDate = new Date(dateStr);

  if (isNaN(parsedDate.getTime())) {
    return undefined;
  }

  return parsedDate;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DOMAIN_URL;

  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/projects`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/en/blog`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/en/blog/notes`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/en/blog/feed.xml`, changeFrequency: "daily", priority: 0.3 },
    { url: `${baseUrl}/contact`, changeFrequency: "yearly", priority: 0.7 },
  ];

  const posts = getBlogPosts("en").map((post) => ({
    url: `${baseUrl}/en/blog/${post.slug}`,
    lastModified: safeDate(post.metadata.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const projects = getProjects().map((project) => ({
    ...(() => {
      const caseStudy = project.metadata.case_study;
      const images = caseStudy
        ? Array.from(
            new Set([caseStudy.hero.src, caseStudy.thumbnail.src]),
          ).map((src) => new URL(src, baseUrl).toString())
        : undefined;
      return { images };
    })(),
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: safeDate(
      project.metadata.date || project.metadata.publishedAt,
    ),
    changeFrequency: "monthly" as const,
    priority: project.metadata.case_study ? 0.9 : 0.7,
  }));

  const notes = getLabNotes().map((note) => ({
    url: `${baseUrl}/en/blog/notes/${note.slug}`,
    lastModified: safeDate(note.metadata.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const topics = getBlogTopics("en").map((topic) => ({ url: `${baseUrl}/en/blog/topics/${topic}`, changeFrequency: "weekly" as const, priority: 0.6 }));
  const arabicPosts = getBlogPosts("ar").map((post) => ({ url: `${baseUrl}/ar/blog/${post.slug}`, lastModified: safeDate(post.metadata.publishedAt), changeFrequency: "monthly" as const, priority: 0.6 }));
  const arabicTopics = getBlogTopics("ar").map((topic) => ({ url: `${baseUrl}/ar/blog/topics/${topic}`, changeFrequency: "weekly" as const, priority: 0.5 }));
  const arabicFeed = getBlogPosts("ar").length ? [{ url: `${baseUrl}/ar/blog/feed.xml`, changeFrequency: "daily" as const, priority: 0.2 }] : [];

  return [...routes, ...posts, ...projects, ...notes, ...topics, ...arabicPosts, ...arabicTopics, ...arabicFeed];
}
