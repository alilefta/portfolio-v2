import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { CategorySlug } from "./taxonomy";

export interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    category?: CategorySlug;
    tags?: string[];
    readTime: string;
    coverImage?: string;
  };
  content: string; //mdx content
}

const contentDirectory = path.join(process.cwd(), "/content/blog");

// 2. Function to get all posts (for the list page)
export function getBlogPosts(): BlogPost[] {
  // Create directory if it doesn't exist to prevent errors
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);

  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Parse metadata section
      const { data, content } = matter(fileContents);

      return {
        slug,
        metadata: data as BlogPost["metadata"],
        content,
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1;
    }
    return 1;
  });
}

// 3. Function to get a single post (for the [slug] page)
export function getPost(slug: string): BlogPost | undefined {
  const posts = getBlogPosts();
  return posts.find((post) => post.slug === slug);
}
