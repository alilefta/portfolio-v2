import type { V3Project } from "@/lib/projects";
import { CaseStudyShell } from "./case-study/CaseStudyShell";
import { LabOSPrologue } from "./LabOSPrologue";
import { LabOSWorkflowChapter } from "./LabOSWorkflowChapter";
import { LabOSArchitectureChapter } from "./LabOSArchitectureChapter";
import { LabOSEvidenceChapter } from "./LabOSEvidenceChapter";
import { LabOSOwnershipChapter } from "./LabOSOwnershipChapter";
import { LabOSConclusionChapter } from "./LabOSConclusionChapter";

type LabOSCaseStudyProps = {
  project: V3Project;
  structuredData?: unknown;
};

export async function LabOSCaseStudy({ project, structuredData }: LabOSCaseStudyProps) {
  return (
    <CaseStudyShell structuredData={structuredData}>
      <LabOSPrologue project={project} />
      <LabOSWorkflowChapter />
      <LabOSArchitectureChapter />
      <LabOSEvidenceChapter project={project} />
      <LabOSOwnershipChapter />
      <LabOSConclusionChapter />
    </CaseStudyShell>
  );
}
