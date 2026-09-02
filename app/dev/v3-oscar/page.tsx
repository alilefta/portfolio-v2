import { redirect } from "next/navigation";
import { OscarCaseStudy } from "@/components/v3/projects/OscarCaseStudy";
import { getV3Project } from "@/lib/projects";

export const metadata = {
  title: "Oscar V3 Case Study Preview",
  robots: { index: false, follow: false },
};

export default function OscarV3Preview() {
  if (process.env.NODE_ENV === "production") {
    redirect("/projects/oscar-lab-system-en");
  }

  const project = getV3Project("oscar-lab-system-en");

  if (!project) {
    throw new Error("Oscar requires validated V3 case-study metadata.");
  }

  return <OscarCaseStudy project={project} />;
}
