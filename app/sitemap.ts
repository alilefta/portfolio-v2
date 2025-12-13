import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { getProjects } from "@/lib/projects";
import { DOMAIN_URL } from "@/lib/info";
import { getLabNotes } from "@/lib/notes";

// Helper function: Tries to parse the date, falls back to today if invalid
function safeDate(dateStr: string | undefined): Date {
  if (!dateStr) return new Date(); // Fallback if missing

  const parsedDate = new Date(dateStr);

  // Check if the date is "Invalid Date"
  if (isNaN(parsedDate.getTime())) {
    console.warn(
      `⚠️ Invalid sitemap date found: "${dateStr}". Using current date.`,
    );
    return new Date();
  }

  return parsedDate;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DOMAIN_URL; // No trailing slash is safer

  // 1. Static Routes
  const routes = ["", "/blog", "/projects", "/contact", "/blog/notes"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    }),
  );

  // 2. Dynamic Blog Posts
  const posts = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    // Use the helper here
    lastModified: safeDate(post.metadata.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 3. Dynamic Projects
  const projects = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    // Use the helper here (Checks project.metadata.date first)
    lastModified: safeDate(
      project.metadata.date || project.metadata.publishedAt,
    ),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // 3. Dynamic Projects
  const notes = getLabNotes().map((note) => ({
    url: `${baseUrl}/blog/notes/${note.slug}`,
    // Use the helper here (Checks note.metadata.date first)
    lastModified: safeDate(note.metadata.date || note.metadata.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...routes, ...posts, ...projects, ...notes];
}
