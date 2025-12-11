import { MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/custom/Button";

import Link from "next/link";
import { ProjectSummaryCard } from "@/components/ProjectSummaryCard";
import { getProjects } from "@/lib/projects";

export default function SelectedWork() {
  const selectedWork = getProjects();
  return (
    <section
      id="selected-work"
      className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 px-6 py-8 lg:px-8 lg:py-12"
    >
      <div className="col-span-12 mb-12 flex items-end justify-between">
        <div>
          <h3 className="mb-2 text-4xl tracking-tighter lg:text-6xl">
            Selected <span className="text-foreground/50">Work</span>
          </h3>
          <p className="text-foreground/40 mx-auto max-w-3xl text-lg lg:text-xl">
            From concept to production—real projects solving real problems.
          </p>
        </div>
        <div>
          <Button asChild variant={"ghost"}>
            <Link
              href={"/projects"}
              className="text-foreground flex items-center gap-2"
            >
              <span>All Projects</span>
              <MoveUpRight size={18} />
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {selectedWork.map((project) => (
          <ProjectSummaryCard
            key={project.slug}
            project={project}
            orientation="horizontal"
            interactive={true}
          />
        ))}
      </div>
    </section>
  );
}
