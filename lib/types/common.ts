import z from "zod";
import { Environment, Technology } from "../db/environments_tech/types";

/** Defines the structure for a technology or tool in the Tech Stack Matrix. */
export interface TechStackItem {
  name: string;
  context?: string; // Describes HOW the technology is used, not the proficiency level.
}

/** Defines the structure for an abstract skill item in the Skills Matrix. */
export interface SkillItem {
  name: string;
  description: string; // Elaborates on the skill or the method used.
}

export interface ProjectSummary {
  id: string;
  title: string;
  slug: string;
  description: string;
  tech_stack: Technology[];
  additional_info?: {
    business_impact?: string;
  };
  environment: Environment;
  github_url?: string;
  live_preview?: string;
  year?: string;
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
}

export const Project = z.object();

export interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    category?: string;
    tags?: string[];
    readTime: string;
    imageUrl?: string;
  };
  content: string; // The raw MDX content
}
