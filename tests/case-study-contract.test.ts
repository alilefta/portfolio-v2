import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { test } from "node:test";
import en from "../messages/en.json";
import ar from "../messages/ar.json";
import {
  caseStudyCompositionValues,
  parseProjectMetadata,
} from "../lib/project-schema";
import { getProjects, getV3Project } from "../lib/projects";
import { buildProjectStructuredData } from "../lib/project-seo";
import { DOMAIN_URL } from "../lib/info";

const baseMetadata = {
  title: "Contract fixture",
  description: "A fixture used to verify the project metadata contract.",
  tech_stack: ["TypeScript"],
  environment: "Web",
  status: { type: "undeployed", expected_deployment: "In development" },
  privacy: "close_source",
  screenshots: {
    theme: "light",
    light_screenshot_url: "contract-fixture/overview.webp",
    ext: "webp",
  },
  case_study: {
    version: 3,
    proposition: "A clear product proposition.",
    status: "active",
    role: ["Product engineering"],
    platform: ["Web application"],
    capabilities: ["Workflow modeling"],
    confidentiality: "public",
    hero: {
      src: "/images/projects/contract-fixture/overview.webp",
      alt: "Contract fixture overview",
    },
    thumbnail: {
      src: "/images/projects/contract-fixture/overview.webp",
      alt: "Contract fixture thumbnail",
    },
    outcomes: [],
  },
};

type GalleryCopy = { Alt: string; Caption: string; Proves: string };
type CaseStudyMessages = Record<
  string,
  { Gallery?: Record<string, GalleryCopy> } | undefined
>;

test("case-study registry source is exhaustive", () => {
  const registrySource = readFileSync(
    "components/v3/projects/case-study/registry.tsx",
    "utf8",
  );
  assert.match(
    registrySource,
    /satisfies Record<CaseStudyComposition, CaseStudyDefinition>/,
  );
  for (const composition of caseStudyCompositionValues) {
    const escaped = composition.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    assert.match(registrySource, new RegExp(`['\"]?${escaped}['\"]?\\s*:`));
  }
});

test("case-study composition defaults to standard and rejects unknown values", () => {
  const parsed = parseProjectMetadata(baseMetadata, "contract-fixture");
  assert.equal(parsed.case_study?.composition, "standard");

  assert.throws(
    () =>
      parseProjectMetadata(
        {
          ...baseMetadata,
          case_study: { ...baseMetadata.case_study, composition: "unknown" },
        },
        "invalid-composition",
      ),
    /case_study\.composition/,
  );
});

test("gallery metadata validates paths, dimensions, ids, and copy keys", () => {
  const parsed = parseProjectMetadata(
    {
      ...baseMetadata,
      case_study: {
        ...baseMetadata.case_study,
        gallery: [
          {
            id: "overview-01",
            src: "/images/projects/contract-fixture/overview.webp",
            width: 1600,
            height: 900,
            copyKey: "Overview",
          },
        ],
      },
    },
    "valid-gallery",
  );
  assert.equal(parsed.case_study?.gallery?.[0].copyKey, "Overview");

  for (const invalidGallery of [
    [{ ...parsed.case_study!.gallery![0], id: "Not valid" }],
    [{ ...parsed.case_study!.gallery![0], src: "/uploads/overview.webp" }],
    [{ ...parsed.case_study!.gallery![0], width: 0 }],
  ]) {
    assert.throws(
      () =>
        parseProjectMetadata(
          { ...baseMetadata, case_study: { ...baseMetadata.case_study, gallery: invalidGallery } },
          "invalid-gallery",
        ),
      /case_study\.gallery/,
    );
  }
});

test("all frontmatter galleries have localized copy and real media", () => {
  for (const project of getProjects()) {
    const caseStudy = project.metadata.case_study;
    if (!caseStudy?.gallery) continue;

    for (const item of caseStudy.gallery) {
      assert.ok(existsSync(`public${item.src}`), `${project.slug}: missing ${item.src}`);

      for (const messages of [en, ar]) {
        const caseStudyMessages = messages.V3.CaseStudies as CaseStudyMessages;
        const copy = caseStudyMessages[project.slug]?.Gallery?.[item.copyKey];
        assert.ok(copy, `${project.slug}: missing localized copy for ${item.copyKey}`);
        assert.equal(typeof copy.Alt, "string");
        assert.equal(typeof copy.Caption, "string");
        assert.equal(typeof copy.Proves, "string");
      }
    }
  }
});

test("project structured data includes software and breadcrumb graph nodes", () => {
  const project = getV3Project("freelancer-command-center-en");
  assert.ok(project);

  const structuredData = buildProjectStructuredData(
    project,
    project.slug,
    "en",
    { applicationCategory: "BusinessApplication" },
  );
  const software = structuredData["@graph"].find(
    (node) => node["@type"] === "SoftwareApplication",
  );
  const breadcrumbs = structuredData["@graph"].find(
    (node) => node["@type"] === "BreadcrumbList",
  );

  assert.equal(structuredData["@context"], "https://schema.org");
  assert.equal(software?.url, `${DOMAIN_URL}/projects/freelancer-command-center-en`);
  assert.equal(software?.applicationCategory, "BusinessApplication");
  assert.equal(software?.inLanguage, "en");
  assert.ok(Array.isArray(software?.featureList));
  assert.ok(Array.isArray(breadcrumbs?.itemListElement));
});
