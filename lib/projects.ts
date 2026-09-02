import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { z } from "zod";
import type { ProjectMetadata } from "./project-schema";
import type { ProjectCaseStudy } from "./project-schema";
import { parseProjectMetadata } from "./project-schema";
import {
  EnvironmentsFilter,
  TechnologiesFilter,
} from "./db/environments_tech/schema";

export interface Project {
  slug: string;
  metadata: ProjectMetadata;
  content: string;
  imagesDir: string;
}

const featuredMetadataSchema = z.object({
  featured: z.literal(true),
  featuredOrder: z.number().int().positive(),
  homepage_key: z.enum(["oscar", "labora", "cryptography"]),
});

export type FeaturedProject = Project & {
  metadata: Project["metadata"] & z.infer<typeof featuredMetadataSchema>;
};

export type V3Project = Project & {
  metadata: Project["metadata"] & { case_study: ProjectCaseStudy };
};

const contentDirectory = path.join(process.cwd(), "/content/projects");

// 2. Function to get all posts (for the list page)
export function getProjects(): Project[] {
  // Create directory if it doesn't exist to prevent errors
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(contentDirectory);

  const allProjects = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(contentDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Parse metadata section
      const { data, content } = matter(fileContents);
      const metadata = parseProjectMetadata(data, fileName);

      let imagesDir = slug;

      if (slug.endsWith("-en")) imagesDir = slug.replace("-en", "");
      if (slug.endsWith("-ar")) imagesDir = slug.replace("-ar", "");

      return {
        slug,
        metadata,
        content,
        imagesDir,
      };
    });

  // Sort posts by date (newest first)
  return allProjects.sort((a, b) => {
    // Convert the strict ISO dates to timestamps
    const dateA = new Date(
      a.metadata.date ?? a.metadata.publishedAt ?? "",
    ).getTime();
    const dateB = new Date(
      b.metadata.date ?? b.metadata.publishedAt ?? "",
    ).getTime();

    // Handle invalid dates gracefully (push to bottom)
    if (isNaN(dateA)) return 1;
    if (isNaN(dateB)) return -1;

    // Newest/Future projects first
    return dateB - dateA;
  });
}

export function getProject(slug: string): Project | undefined {
  const projects = getProjects();
  return projects.find((project) => project.slug === slug);
}

export function getV3Project(slug: string): V3Project | undefined {
  const project = getProject(slug);

  if (!project?.metadata.case_study) return undefined;

  return project as V3Project;
}

export function getFeaturedProjects(): FeaturedProject[] {
  const featuredProjects = getProjects()
    .filter((project) => project.metadata.featured === true)
    .map((project) => {
      const featuredMetadata = featuredMetadataSchema.parse(project.metadata);

      return {
        ...project,
        metadata: {
          ...project.metadata,
          ...featuredMetadata,
        },
      };
    })
    .sort(
      (first, second) =>
        first.metadata.featuredOrder - second.metadata.featuredOrder,
    );

  const featuredKeys = new Set(
    featuredProjects.map((project) => project.metadata.homepage_key),
  );

  if (featuredKeys.size !== featuredProjects.length) {
    throw new Error("Featured projects must use unique homepage_key values.");
  }

  return featuredProjects;
}

export async function getFilteredProjects(
  environment: EnvironmentsFilter,
  technology: TechnologiesFilter,
) {
  const allProjects = getProjects();
  let filteredProjects = allProjects;
  let hasSelectedFilters = false;

  if (environment !== "All") {
    hasSelectedFilters = true;
    filteredProjects = filteredProjects.filter(
      (project) => project.metadata.environment === environment,
    );
  }

  if (technology !== "All") {
    hasSelectedFilters = true;

    filteredProjects = filteredProjects.filter((project) =>
      project.metadata.tech_stack.includes(technology),
    );
  }

  return {
    projects: filteredProjects,
    filteredCount: filteredProjects.length,
    totalCount: allProjects.length,
    hasSelectedFilters,
  };
}
