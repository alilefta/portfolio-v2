import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Environment, Technology } from "./db/environments_tech/types";
import {
  EnvironmentsFilter,
  TechnologiesFilter,
} from "./db/environments_tech/schema";

export interface Project {
  slug: string;
  metadata: {
    title: string;
    description: string;
    tech_stack: Technology[];
    additional_info?: {
      business_impact?: string;
    };
    environment: Environment;
    github_url?: string;
    live_preview?: string;
    year?: string;

    publishedAt?: string;
    date: string;
    status:
      | {
          type: "deployed";
          deployement_year: string;
        }
      | {
          type: "undeployed";
          expected_deployment: string;
        };
    is_future_project?: boolean;
    privacy: "open_source" | "close_source";
    screenshots: {
      theme: "dark" | "light" | "both" | "none";
      dark_screenshot_url?: string;
      light_screenshot_url?: string;
      ext: "png" | "webp" | "jpg" | "jpeg";
    };

    badge_tag_1?: string;
    badge_tag_2?: string;
  };
  content: string;
  imagesDir: string;
}

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

      let imagesDir = slug;

      if (slug.endsWith("-en")) imagesDir = slug.replace("-en", "");
      if (slug.endsWith("-ar")) imagesDir = slug.replace("-ar", "");

      return {
        slug,
        metadata: data as Project["metadata"],
        content,
        imagesDir,
      };
    });

  // Sort posts by date (newest first)
  return allProjects.sort((a, b) => {
    // Convert the strict ISO dates to timestamps
    const dateA = new Date(a.metadata.date).getTime();
    const dateB = new Date(b.metadata.date).getTime();

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
