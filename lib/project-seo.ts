import { DOMAIN_URL } from "@/lib/info";
import type { V3Project } from "@/lib/projects";

export type ProjectSchemaOptions = {
  applicationCategory: string;
  operatingSystem?: string;
  isAccessibleForFree?: boolean;
};

export type ProjectStructuredData = {
  "@context": "https://schema.org";
  "@graph": Array<Record<string, unknown>>;
};

export function buildProjectStructuredData(
  project: V3Project,
  slug: string,
  locale: string,
  options: ProjectSchemaOptions,
): ProjectStructuredData {
  const caseStudy = project.metadata.case_study;
  const url = `${DOMAIN_URL}/projects/${slug}`;
  const isArabic = locale === "ar";

  const software: Record<string, unknown> = {
    "@type": "SoftwareApplication",
    "@id": `${url}#software`,
    name: project.metadata.title,
    url,
    description: caseStudy.proposition,
    applicationCategory: options.applicationCategory,
    operatingSystem: options.operatingSystem ?? caseStudy.platform.join(", "),
    featureList: caseStudy.capabilities,
    image: new URL(caseStudy.hero.src, DOMAIN_URL).toString(),
    datePublished: project.metadata.date ?? project.metadata.publishedAt,
    inLanguage: isArabic ? "ar" : "en",
    author: { "@id": `${DOMAIN_URL}/#person` },
  };

  if (options.isAccessibleForFree !== undefined) {
    software.isAccessibleForFree = options.isAccessibleForFree;
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      software,
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: isArabic ? "المشاريع" : "Projects",
            item: `${DOMAIN_URL}/projects`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: project.metadata.title,
            item: url,
          },
        ],
      },
    ],
  };
}
