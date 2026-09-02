import { z } from "zod";

export const caseStudyCompositionValues = [
  "standard",
  "oscar",
  "labos",
  "base60",
  "image-cryptography",
] as const;

export type CaseStudyComposition = (typeof caseStudyCompositionValues)[number];

const caseStudyCompositionSchema = z.enum(caseStudyCompositionValues);

const deployedStatusSchema = z.object({
  type: z.literal("deployed"),
  deployement_year: z.string().min(1),
});

const undeployedStatusSchema = z.object({
  type: z.literal("undeployed"),
  expected_deployment: z.string().min(1),
});

const projectMediaSchema = z.object({
  src: z.string().min(1),
  alt: z.string().min(1),
  caption: z.string().min(1).optional(),
});

const caseStudyGalleryItemSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  src: z.string().startsWith("/images/projects/"),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  copyKey: z.string().min(1),
});

const projectOutcomeSchema = z.object({
  value: z.string().min(1),
  label: z.string().min(1),
  evidence: z.string().min(1).optional(),
  confidence: z.enum(["verified", "owner-verified", "estimate"]),
});

export const projectCaseStudySchema = z.object({
  version: z.literal(3),
  composition: caseStudyCompositionSchema.default("standard"),
  proposition: z.string().min(1),
  status: z.enum(["shipped", "active", "experiment"]),
  role: z.array(z.string().min(1)).min(1),
  platform: z.array(z.string().min(1)).min(1),
  duration: z.string().min(1).optional(),
  client: z.string().min(1).optional(),
  capabilities: z.array(z.string().min(1)).min(1),
  confidentiality: z.enum(["public", "limited", "private"]),
  hero: projectMediaSchema,
  thumbnail: projectMediaSchema,
  gallery: z.array(caseStudyGalleryItemSchema).optional(),
  outcomes: z.array(projectOutcomeSchema),
});

export const projectMetadataSchema = z
  .object({
    title: z.string().min(1),
    description: z.string().min(1),
    tech_stack: z.array(z.string().min(1)).min(1),
    environment: z.string().min(1),
    github_url: z.string().min(1).optional(),
    live_preview: z.string().min(1).optional(),
    year: z.string().optional(),
    publishedAt: z.string().optional(),
    date: z.string().optional(),
    status: z.union([deployedStatusSchema, undeployedStatusSchema]),
    is_future_project: z.boolean().optional(),
    privacy: z.enum(["open_source", "close_source"]),
    screenshots: z.object({
      theme: z.enum(["dark", "light", "both", "none"]),
      dark_screenshot_url: z.string().optional(),
      light_screenshot_url: z.string().optional(),
      ext: z.enum(["png", "webp", "jpg", "jpeg"]),
    }),
    additional_info: z
      .object({ business_impact: z.string().optional() })
      .optional(),
    badge_tag_1: z.string().optional(),
    badge_tag_2: z.string().optional(),
    featured: z.boolean().optional(),
    featuredOrder: z.number().int().positive().optional(),
    homepage_key: z.enum(["oscar", "labora", "cryptography"]).optional(),
    case_study: projectCaseStudySchema.optional(),
  })
  .passthrough();

export type ProjectMetadata = z.infer<typeof projectMetadataSchema>;
export type ProjectCaseStudy = z.infer<typeof projectCaseStudySchema>;
export type CaseStudyGalleryItem = z.infer<typeof caseStudyGalleryItemSchema>;

export function parseProjectMetadata(
  input: unknown,
  sourceName: string,
): ProjectMetadata {
  const result = projectMetadataSchema.safeParse(input);

  if (result.success) return result.data;

  const details = result.error.issues
    .map((issue) => `- ${issue.path.join(".") || "frontmatter"}: ${issue.message}`)
    .join("\n");

  throw new Error(`Invalid project metadata in ${sourceName}:\n${details}`);
}
