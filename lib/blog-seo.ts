import type { BlogPost } from "@/lib/blog";
import { DOMAIN_URL, SOCIAL_IMAGE_URL } from "@/lib/info";
import type { Locale } from "@/i18n/config";

export function blogUrl(locale: Locale, slug?: string) {
  return `${DOMAIN_URL}/${locale}/blog${slug ? `/${slug}` : ""}`;
}

export function absoluteImage(src?: string) {
  return src ? new URL(src, DOMAIN_URL).toString() : SOCIAL_IMAGE_URL;
}

export function localizedAlternates(slug: string, locales: Locale[]) {
  return Object.fromEntries(locales.map((locale) => [locale, blogUrl(locale, slug)]));
}

export function buildArticleJsonLd(post: BlogPost, locale: Locale) {
  const url = blogUrl(locale, post.slug);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    url,
    headline: post.metadata.title,
    description: post.metadata.summary,
    datePublished: post.metadata.publishedAt,
    dateModified: post.metadata.publishedAt,
    image: absoluteImage(post.metadata.coverImage),
    author: { "@id": `${DOMAIN_URL}/#person` },
    publisher: { "@id": `${DOMAIN_URL}/#person` },
    mainEntityOfPage: url,
    inLanguage: locale,
    articleSection: post.metadata.category,
    keywords: post.metadata.tags,
  };
}

export function buildCollectionJsonLd(locale: Locale, topic: string | undefined, name: string, description: string, posts: BlogPost[]) {
  const url = topic ? `${blogUrl(locale)}/topics/${topic}` : blogUrl(locale);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    url,
    name,
    description,
    inLanguage: locale,
    isPartOf: { "@id": `${DOMAIN_URL}/#website` },
    mainEntity: { "@type": "ItemList", itemListElement: posts.map((post, index) => ({ "@type": "ListItem", position: index + 1, url: blogUrl(locale, post.slug), name: post.metadata.title })) },
  };
}

export function buildBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })) };
}
