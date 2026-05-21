import { MoveUpLeft, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/custom/Button";
import Link from "next/link";
import { ProjectSummaryCard } from "@/components/ProjectSummaryCard";
import { getProjects } from "@/lib/projects";
import { getLocale, getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default async function SelectedWork() {
  const t = await getTranslations("HomePage.SelectedWork");
  const selectedWork = getProjects();
  const locale = await getLocale();
  const isRTL = locale === "ar";

  // Take only top 3 for the homepage
  const displayProjects = selectedWork.slice(0, 3);

  return (
    <section
      id="selected-work"
      className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32"
    >
      {/* Section Header */}
      <AnimateOnScroll animation="fade-up">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-foreground/40 font-mono text-sm uppercase tracking-widest">
              {t("Title_Selected")}
            </span>
            <h2 className="text-foreground text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("Title_Work")}
            </h2>
          </div>

          <Button asChild variant="ghost" className="w-fit">
            <Link
              href="/projects"
              className="text-foreground/70 hover:text-foreground flex items-center gap-2"
            >
              <span>{t("ViewAll")}</span>
              {isRTL ? <MoveUpLeft size={16} /> : <MoveUpRight size={16} />}
            </Link>
          </Button>
        </div>
      </AnimateOnScroll>

      <p className="text-foreground/50 mb-12 max-w-2xl text-lg">
        {t("Subtitle")}
      </p>

      {/* Projects List */}
      <div className="flex flex-col gap-8">
        {displayProjects.map((project, index) => (
          <AnimateOnScroll
            key={project.slug}
            animation="fade-up"
            delay={index * 150}
          >
            <ProjectSummaryCard
              project={project}
              orientation="horizontal"
              interactive={true}
            />
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  );
}
