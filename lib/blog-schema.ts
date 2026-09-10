import { z } from "zod";
import { blogCategorySlugs } from "./taxonomy";

export const blogPostMetadataSchema = z
  .object({
    title: z.string().trim().min(1).max(160),
    summary: z.string().trim().min(1).max(320),
    publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Use YYYY-MM-DD."),
    category: z.enum(blogCategorySlugs),
    readTime: z.string().trim().min(1).max(40),
    coverImage: z.string().startsWith("/images/").optional(),
    coverAlt: z.string().trim().min(1).max(240).optional(),
    homepageFeatured: z.boolean().optional(),
    homepageOrder: z.number().int().positive().optional(),
    tags: z.array(z.string().trim().min(1).max(40)).max(12).optional(),
  })
  .superRefine((metadata, context) => {
    const date = new Date(`${metadata.publishedAt}T00:00:00Z`);
    if (Number.isNaN(date.getTime())) {
      context.addIssue({
        code: "custom",
        path: ["publishedAt"],
        message: "Use a valid calendar date.",
      });
    }

    if (metadata.coverImage && !metadata.coverAlt) {
      context.addIssue({
        code: "custom",
        path: ["coverAlt"],
        message: "coverAlt is required when coverImage is provided.",
      });
    }
  });

export type BlogPostMetadata = z.infer<typeof blogPostMetadataSchema>;

export function parseBlogPostMetadata(input: unknown, sourceName: string) {
  const result = blogPostMetadataSchema.safeParse(input);
  if (result.success) return result.data;

  const details = result.error.issues
    .map((issue) => `- ${issue.path.join(".") || "frontmatter"}: ${issue.message}`)
    .join("\n");

  throw new Error(`Invalid blog metadata in ${sourceName}:\n${details}`);
}
