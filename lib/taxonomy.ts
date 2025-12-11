import {
  Database,
  LayoutGrid,
  Server,
  Code,
  Terminal,
  Brain,
  Cog,
} from "lucide-react";

export const ALL_CATEGORIES = [
  { slug: "architecture", title: "System Architecture", icon: LayoutGrid },
  { slug: "backend", title: "Backend Engineering", icon: Server },
  { slug: "dental-tech", title: "Dental Technology", icon: Cog },
  { slug: "database", title: "Databases", icon: Database },
  { slug: "frontend", title: "Frontend & UI", icon: Code },
  { slug: "devops", title: "DevOps & CI/CD", icon: Terminal },
  { slug: "ai", title: "AI & Data", icon: Brain },
  { slug: "career", title: "Career & Soft Skills", icon: null },
] as const;

// Type helper to extract slugs
export type CategorySlug = (typeof ALL_CATEGORIES)[number]["slug"];

// Helper to get display title from slug
export function getCategoryTitle(slug: string) {
  const category = ALL_CATEGORIES.find((c) => c.slug === slug);
  return category ? category.title : slug; // Fallback to slug if not found
}

// Helper to check validity (useful for MDX parsing)
export function isValidCategory(slug: string): boolean {
  return ALL_CATEGORIES.some((c) => c.slug === slug);
}
