import { getBlogPosts } from "@/lib/blog";
import { blogUrl, absoluteImage } from "@/lib/blog-seo";
import { type Locale, locales } from "@/i18n/config";

function escapeXml(value: string) { return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;"); }

export async function GET(_: Request, { params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params; const active = locales.includes(locale as Locale) ? (locale as Locale) : "en"; const posts = getBlogPosts(active); const items = posts.map((post) => `<item><title>${escapeXml(post.metadata.title)}</title><link>${blogUrl(active, post.slug)}</link><guid isPermaLink="true">${blogUrl(active, post.slug)}</guid><pubDate>${new Date(`${post.metadata.publishedAt}T00:00:00Z`).toUTCString()}</pubDate><description>${escapeXml(post.metadata.summary)}</description><enclosure url="${escapeXml(absoluteImage(post.metadata.coverImage))}" type="image/jpeg" /></item>`).join("");
  const xml = `<?xml version="1.0" encoding="UTF-8" ?><rss version="2.0"><channel><title>Ali Lefta — Engineering essays</title><link>${blogUrl(active)}</link><description>Field notes and technical essays about dependable software.</description><language>${active}</language><atom:link href="${blogUrl(active)}/feed.xml" rel="self" type="application/rss+xml" xmlns:atom="http://www.w3.org/2005/Atom" />${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600" } });
}
