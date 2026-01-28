import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import BlogHero from "@/components/blog/BlogHero";
import PostList from "@/components/blog/PostList";
import FocusSpotlight from "@/components/blog/FocusSpotlight";
import LabNotesScroll from "@/components/blog/LabNotesScroll";
import AuthorCTA from "@/components/blog/AuthorCTA";
import SystemStatus from "@/components/blog/SystemStatus";
import { BlogPost, getBlogPosts } from "@/lib/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Log", // Becomes: "Engineering Log | Ali Lefta"
  description:
    "Technical deep dives into System Architecture, Database Scaling, .NET optimization, and Next.js performance. A digital garden of engineering problems solved.",
};

const FEATURED_POST: BlogPost = {
  slug: "architecting-dental-systems",
  metadata: {
    title: "Architecting Scalable Dental Lab Systems",
    summary:
      "How I transitioned from 0.1mm physical precision to pixel-perfect system architecture for enterprise healthcare.",
    publishedAt: "Dec 02, 2025",
    readTime: "8 min read",
    category: "backend",
    coverImage: "/images/projects/oscar-lab-system/oscar-lab-system-dark.png", // Using one of your existing images as placeholder
  },
  content: "", //raw mdx content
};

const RECENT_POST: BlogPost = {
  slug: "nextjs-optimization",
  metadata: {
    title: "Optimizing Next.js for Low Bandwidth Networks",
    summary:
      "Strategies for high-performance rendering in regions with unstable connections.",
    publishedAt: "Nov 28, 2025",
    readTime: "5 min read",
    category: "backend",
  },
  content: "",
};

// Mock data
const archive_posts: BlogPost[] = [
  {
    slug: "handling_offline_sync_in_desktop_applications",
    metadata: {
      title: "Handling Offline Sync in Desktop Applications",
      summary:
        "Strategies for SQLite and Cloud sync conflicts using C# and .NET.",
      publishedAt: "Dec 02, 2024",
      category: "architecture",
      tags: ["C#", "WPF", "Offline-First"],
      readTime: "8 mins",
    },
    content: "",
  },
  {
    slug: "migrating_from_dental_tech_to_full stack",
    metadata: {
      title: "Migrating from Dental Tech to Full Stack",
      summary:
        "The mental shifts required when moving from physical fabrication to abstract logic.",
      publishedAt: "Nov 15, 2024",
      category: "career",
      tags: ["Career", "Personal"],
      readTime: "4 mins",
    },
    content: "",
  },
  {
    slug: "why_i_chose_postgresql_for_labora_saas",
    metadata: {
      title: "Why I Chose PostgreSQL for Labora SaaS",
      summary:
        "Comparing NoSQL vs Relational data models for complex multi-tenant lab systems.",
      publishedAt: "Oct 28, 2024",
      category: "database",
      tags: ["PostgreSQL", "System Design"],
      readTime: "5 mins",
    },
    content: "",
  },
];

export default async function BlogPage() {
  const posts = getBlogPosts();

  // Separate the newest post for the Hero section
  // (Assuming the first one is the "Featured" or "Newest")
  const featuredPost = posts[0];
  const recentPost = posts[1];
  const archivePosts = posts.slice(2); // The rest go in the list
  return (
    <div className="mx-auto min-h-dvh w-full max-w-7xl pt-18">
      <Breadcrumb className="mt-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Blog</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Hero */}
      <BlogHero featured={featuredPost} recent={recentPost} />
      <PostList posts={archivePosts} />
      <FocusSpotlight />
      <LabNotesScroll />
      <AuthorCTA />
      <SystemStatus />
    </div>
  );
}
