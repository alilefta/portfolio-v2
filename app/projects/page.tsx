import { FilterProjectsByEnvironments } from "@/components/projects/FilterProjectsByEnvironment";
import { FilterProjectsByTech } from "@/components/projects/FilterProjectsByTech";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { filtersSchema } from "@/lib/db/environments_tech/schema";
import { ProjectSummaryCard } from "@/components/ProjectSummaryCard";
import { Code2, Database, Globe, Layers } from "lucide-react";
import { getFilteredProjects } from "@/lib/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Case studies of production-grade systems. From Enterprise Dental Lab Management to Cloud-based SaaS platforms. Built with precision.",
};
interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}
export default async function ProjectsPage({ searchParams }: PageProps) {
  const params = await searchParams;

  const { data, error } = filtersSchema.safeParse(params);

  if (error) {
    notFound();
  }

  if (!data) {
    redirect("/projects?environment=All&technology=All");
  }
  const { environment, technology } = data;

  const { projects, filteredCount, totalCount, hasSelectedFilters } =
    await getFilteredProjects(environment, technology);

  return (
    <div className="mx-auto min-h-dvh max-w-7xl pt-20 lg:px-0">
      {/* 1. HERO SECTION: The "Industrial Aurora" */}
      <section className="relative w-full border-b border-zinc-200/60 dark:border-zinc-800/60">
        {/* Background Layer 1: The Grid (Sits ON TOP of bg-aurora) */}
        <div className="pointer-events-none absolute inset-0 z-0">
          {/* Subtle grid pattern that lets the aurora shine through */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
          {/* A fade-out mask at the bottom so the grid integrates smoothly */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-black/50" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-8 py-16 lg:px-8 lg:py-24">
          {/* Breadcrumbs moved inside Hero for better alignment */}
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Projects</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Left Column: Title & Mission */}
            <div className="flex flex-col justify-center lg:col-span-8">
              {/* Metadata Badge */}
              <div className="mb-6 flex items-center gap-3">
                <div className="flex items-center gap-2 rounded-full border border-zinc-200/50 bg-white/40 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur-md dark:border-zinc-700/50 dark:bg-zinc-900/40 dark:text-zinc-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                  </span>
                  <span className="font-mono tracking-tight">
                    SYSTEM: ONLINE
                  </span>
                </div>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  {"// v2.0.0"}
                </span>
              </div>

              <h1 className="mb-6 text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl dark:text-zinc-100">
                Built for{" "}
                <span className="text-zinc-400 dark:text-zinc-600">Scale.</span>
                <br />
                Engineered for{" "}
                <span className="text-blue-600 dark:text-blue-500">Speed.</span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                A collection of high-performance applications, from dental lab
                management systems to cryptographic research tools. No filler,
                just production code.
              </p>

              {/* Tech Stack Indicator */}
              <div className="mt-8 flex items-center gap-4 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5 rounded-md bg-zinc-100 px-2 py-1 dark:bg-zinc-800/50">
                  <Code2 className="h-3.5 w-3.5" /> TypeScript
                </span>
                <span className="flex items-center gap-1.5 rounded-md bg-zinc-100 px-2 py-1 dark:bg-zinc-800/50">
                  <Database className="h-3.5 w-3.5" /> PostgreSQL
                </span>
                <span className="flex items-center gap-1.5 rounded-md bg-zinc-100 px-2 py-1 dark:bg-zinc-800/50">
                  <Layers className="h-3.5 w-3.5" /> .NET Core
                </span>
              </div>
            </div>

            {/* Right Column: "Glass Cards" */}
            <div className="hidden flex-col gap-4 lg:col-span-4 lg:flex lg:justify-center">
              {/* Metric 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/40 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-white/60 dark:border-zinc-800/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                    Total Projects
                  </span>
                  <Layers className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-blue-500" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                    {totalCount}
                  </span>
                  <span className="text-xs text-zinc-500">Shipped</span>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-white/20 bg-white/40 p-6 shadow-lg backdrop-blur-sm transition-all hover:border-emerald-500/30 hover:bg-white/60 dark:border-zinc-800/50 dark:bg-zinc-900/20 dark:hover:bg-zinc-900/40">
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                    Focus
                  </span>
                  <Globe className="h-4 w-4 text-zinc-400 transition-colors group-hover:text-emerald-500" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                    SaaS
                  </span>
                  <span className="text-xs text-zinc-500">
                    & Desktop Systems
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 2. FILTERS SECTION: Frosted Glass */}
      <section
        className="sticky top-[60.8px] z-30 border-b border-zinc-200/50 bg-white/60 backdrop-blur-xl lg:top-[66.4px] dark:border-zinc-800/50 dark:bg-black/60"
        id="filters"
      >
        <div className="mx-auto max-w-7xl px-8 py-4 lg:py-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            {/* Left Side: The Filters */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center">
              <FilterProjectsByEnvironments
                currentEnvironment={environment}
                currentTechnology={technology}
              />
              <FilterProjectsByTech
                currentEnvironment={environment}
                currentTechnology={technology}
              />
            </div>

            {/* Right Side: Counts & Clear */}
            <div className="flex items-center gap-4 text-sm font-medium">
              {totalCount !== filteredCount && (
                <span className="text-zinc-500">
                  {filteredCount} / {totalCount}
                </span>
              )}
              {hasSelectedFilters && (
                <Link
                  href="/projects"
                  className="text-red-500 hover:text-red-600 dark:text-red-400"
                >
                  Reset
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section
        className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
        id="projects-grid"
      >
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectSummaryCard
              key={project.slug}
              project={project}
              orientation="vertical"
              interactive={false}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredCount === 0 && hasSelectedFilters && (
          <div className="py-24 text-center">
            <p className="text-lg text-zinc-500">
              No projects found matching your filters.
            </p>
            <Link
              href={"/projects"}
              className="mt-4 text-sm text-zinc-900 underline underline-offset-4 hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
            >
              Clear all filters
            </Link>
          </div>
        )}
      </section>
    </div>
  );
}
