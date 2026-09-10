import test from "node:test";
import assert from "node:assert/strict";
import { getBlogPosts, getBlogTopics } from "@/lib/blog";
import { parseBlogPostMetadata } from "@/lib/blog-schema";
import { buildArticleJsonLd } from "@/lib/blog-seo";

test("blog frontmatter rejects invalid category and missing cover alt", () => {
  assert.throws(() => parseBlogPostMetadata({ title: "x", summary: "y", publishedAt: "2026-01-01", category: "invalid", readTime: "2 min" }, "fixture.mdx"), /category/);
  assert.throws(() => parseBlogPostMetadata({ title: "x", summary: "y", publishedAt: "2026-01-01", category: "frontend", readTime: "2 min", coverImage: "/images/example.png" }, "fixture.mdx"), /coverAlt/);
});

test("published blog posts have unique slugs and deterministic featured ordering", () => {
  const posts = getBlogPosts("en");
  assert.equal(new Set(posts.map((post) => post.slug)).size, posts.length);
  assert.deepEqual(posts.map((post) => post.metadata.publishedAt), [...posts].sort((a, b) => b.metadata.publishedAt.localeCompare(a.metadata.publishedAt)).map((post) => post.metadata.publishedAt));
  const featured = posts.filter((post) => post.metadata.homepageFeatured).sort((a, b) => (a.metadata.homepageOrder ?? 999) - (b.metadata.homepageOrder ?? 999));
  assert.deepEqual(getBlogPosts("en").filter((post) => post.metadata.homepageFeatured).sort((a, b) => (a.metadata.homepageOrder ?? 999) - (b.metadata.homepageOrder ?? 999)).slice(0, 3).map((post) => post.slug), featured.slice(0, 3).map((post) => post.slug));
});

test("topics are populated categories and structured data uses canonical article URL", () => {
  const topics = getBlogTopics("en");
  assert.ok(topics.length > 0);
  const post = getBlogPosts("en")[0];
  const json = buildArticleJsonLd(post, "en");
  assert.equal(json["@type"], "Article");
  assert.match(json.url, new RegExp(`/en/blog/${post.slug}$`));
  assert.equal(getBlogPosts("ar").length, 0);
});
