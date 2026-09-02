import type { ReactNode } from "react";
import { Base60CaseStudy } from "../Base60CaseStudy";
import { ImageCryptographyCaseStudy } from "../ImageCryptographyCaseStudy";
import { LabOSCaseStudy } from "../LabOSCaseStudy";
import { OscarCaseStudy } from "../OscarCaseStudy";
import { StandardCaseStudy } from "../StandardCaseStudy";
import type { ProjectSchemaOptions, ProjectStructuredData } from "@/lib/project-seo";
import type { V3Project } from "@/lib/projects";
import type { CaseStudyComposition } from "@/lib/project-schema";

export type CaseStudyRendererProps = {
  project: V3Project;
  structuredData: ProjectStructuredData;
};

export type CaseStudyRenderer = (
  props: CaseStudyRendererProps,
) => ReactNode | Promise<ReactNode>;

export type CaseStudyDefinition = {
  render: CaseStudyRenderer;
  schema: ProjectSchemaOptions;
};

export const caseStudyRegistry = {
  standard: {
    render: StandardCaseStudy,
    schema: { applicationCategory: "BusinessApplication" },
  },
  oscar: {
    render: OscarCaseStudy,
    schema: {
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows",
      isAccessibleForFree: false,
    },
  },
  labos: {
    render: LabOSCaseStudy,
    schema: { applicationCategory: "BusinessApplication" },
  },
  base60: {
    render: Base60CaseStudy,
    schema: { applicationCategory: "ShoppingApplication", operatingSystem: "Web" },
  },
  "image-cryptography": {
    render: ImageCryptographyCaseStudy,
    schema: { applicationCategory: "EducationalApplication", operatingSystem: "Windows" },
  },
} satisfies Record<CaseStudyComposition, CaseStudyDefinition>;

export function resolveCaseStudyDefinition(
  composition: CaseStudyComposition | undefined,
): CaseStudyDefinition {
  const key = composition ?? "standard";
  const definition = caseStudyRegistry[key];

  if (!definition) {
    throw new Error(
      `Unknown case-study composition "${String(key)}". Add it to caseStudyCompositionValues and caseStudyRegistry.`,
    );
  }

  return definition;
}
