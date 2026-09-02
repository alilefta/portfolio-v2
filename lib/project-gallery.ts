import { getTranslations } from "next-intl/server";
import type { V3Project } from "@/lib/projects";

export type ResolvedProjectGalleryItem = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  proves: string;
  width: number;
  height: number;
};

/** Resolve typed frontmatter media with locale-specific evidence copy. */
export async function resolveProjectGallery(
  project: V3Project,
): Promise<ResolvedProjectGalleryItem[]> {
  const caseStudy = project.metadata.case_study;

  if (caseStudy.gallery?.length) {
    return Promise.all(
      caseStudy.gallery.map(async (item) => {
        const copy = await getTranslations(
          `V3.CaseStudies.${project.slug}.Gallery.${item.copyKey}`,
        );

        return {
          id: item.id,
          src: item.src,
          alt: copy("Alt"),
          caption: copy("Caption"),
          proves: copy("Proves"),
          width: item.width,
          height: item.height,
        };
      }),
    );
  }

  const t = await getTranslations("V3.Standard");
  return [
    {
      id: "hero",
      src: caseStudy.hero.src,
      alt: caseStudy.hero.alt,
      caption: caseStudy.hero.caption ?? t("Gallery.HeroCaption"),
      proves: t("Gallery.HeroProves"),
      width: 16,
      height: 9,
    },
  ];
}
