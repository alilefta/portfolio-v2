import type { V3Project } from "@/lib/projects";
import { CaseStudyShell } from "./case-study/CaseStudyShell";
import { ImageCryptographyPrologue } from "./ImageCryptographyPrologue";
import { ImageCryptographyMethodChapter } from "./ImageCryptographyMethodChapter";
import { ImageCryptographyEvidenceChapter } from "./ImageCryptographyEvidenceChapter";
import { ImageCryptographyProductChapter } from "./ImageCryptographyProductChapter";
import { ImageCryptographyConclusionChapter } from "./ImageCryptographyConclusionChapter";

type ImageCryptographyCaseStudyProps = {
  project: V3Project;
  structuredData?: unknown;
};

export function ImageCryptographyCaseStudy({
  project,
  structuredData,
}: ImageCryptographyCaseStudyProps) {
  return (
    <CaseStudyShell structuredData={structuredData}>
      <ImageCryptographyPrologue project={project} />
      <ImageCryptographyMethodChapter />
      <ImageCryptographyEvidenceChapter project={project} />
      <ImageCryptographyProductChapter />
      <ImageCryptographyConclusionChapter />
    </CaseStudyShell>
  );
}
