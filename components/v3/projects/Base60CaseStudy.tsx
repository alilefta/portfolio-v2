import type { V3Project } from "@/lib/projects";
import { CaseStudyShell } from "./case-study/CaseStudyShell";
import { Base60Prologue } from "./Base60Prologue";
import { Base60CompatibilityChapter } from "./Base60CompatibilityChapter";
import { Base60OperationsChapter } from "./Base60OperationsChapter";
import { Base60ConclusionChapter } from "./Base60ConclusionChapter";

type Base60CaseStudyProps = {
  project: V3Project;
  structuredData?: unknown;
};

export function Base60CaseStudy({
  project,
  structuredData,
}: Base60CaseStudyProps) {
  return (
    <CaseStudyShell structuredData={structuredData}>
      <Base60Prologue project={project} />
      <Base60CompatibilityChapter />
      <Base60OperationsChapter />
      <Base60ConclusionChapter />
    </CaseStudyShell>
  );
}
