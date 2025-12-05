import { z } from "zod";

export const environments = ["all", "web", "desktop", "cloud"] as const;
export const technologies = [
  "all",
  "nextjs",
  "react",
  "node",
  "csharp",
  "python",
] as const;

export const projectsQuerySchema = z.object({
  environment: z.enum(environments).default("all"),
  technology: z.enum(technologies).default("all"),
});
