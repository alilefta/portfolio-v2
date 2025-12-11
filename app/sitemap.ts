import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog"; // Your existing function
import { getProjects } from "@/lib/projects"; // Your existing function

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "http://localhost:3000/"; // REPLACE this

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
    lastModified: new Date(post.metadata.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // 3. Dynamic Projects
  const projects = getProjects().map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.metadata.date),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...routes, ...posts, ...projects];
}
