import { MoveUpLeft, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/custom/Button";

import Link from "next/link";
import { ProjectSummaryCard } from "@/components/ProjectSummaryCard";
import { getProjects } from "@/lib/projects";
import { getLocale, getTranslations } from "next-intl/server";

export default async function SelectedWork() {
  const t = await getTranslations("HomePage.SelectedWork");
  const selectedWork = getProjects();
  const local = await getLocale();

  // Take only top 3 or 4 for the homepage if you have many
  const displayProjects = selectedWork.slice(0, 3);
  return (
    <section
      id="selected-work"
      className="mx-auto mt-12 flex max-w-7xl flex-col gap-4 px-6 py-8 lg:px-8 lg:py-12"
    >
      <div className="col-span-12 mb-12 flex items-end justify-between">
        <div>
          <h3 className="mb-2 text-4xl font-bold tracking-tighter lg:text-6xl">
            {t("Title_Selected")}{" "}
            <span className="text-foreground/50">{t("Title_Work")}</span>
          </h3>
          <p className="text-foreground/40 mx-auto max-w-3xl text-lg font-light lg:text-xl">
            {t("Subtitle")}
          </p>
        </div>
        <div>
          <Button asChild variant={"ghost"}>
            <Link
              href={"/projects"}
              className="text-foreground flex items-center gap-2"
            >
              <span>{t("ViewAll")}</span>
              {local === "ar" ? (
                <MoveUpLeft size={18} />
              ) : (
                <MoveUpRight size={18} />
              )}
            </Link>
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {displayProjects.map((project) => (
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
