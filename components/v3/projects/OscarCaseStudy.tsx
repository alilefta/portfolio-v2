import type { V3Project } from "@/lib/projects";
import { OscarArchitectureChapter } from "./OscarArchitectureChapter";
import { OscarConclusionChapter } from "./OscarConclusionChapter";
import { OscarEvidenceChapter } from "./OscarEvidenceChapter";
import { OscarPrologue } from "./OscarPrologue";
import { OscarWorkflowChapter } from "./OscarWorkflowChapter";
import { CaseStudyShell } from "./case-study/CaseStudyShell";

type OscarCaseStudyProps = {
  project: V3Project;
  structuredData?: unknown;
};

export function OscarCaseStudy({
  project,
  structuredData,
}: OscarCaseStudyProps) {
  return (
    <CaseStudyShell structuredData={structuredData}>
      <OscarPrologue project={project} />
      <OscarWorkflowChapter />
      <OscarArchitectureChapter />
      <OscarEvidenceChapter project={project} />
      <OscarConclusionChapter />
    </CaseStudyShell>
  );
}
