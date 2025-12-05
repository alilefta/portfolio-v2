import { FilterProjectsByEnvironments } from "@/components/projects/FilterProjectsByEnvironment";
import { FilterProjectsByTech } from "@/components/projects/FilterProjectsByTech";
import { Badge } from "@/components/ui/custom/Badge";
import { getFilteredProjects } from "@/lib/projects-actions";
import { ProjectSummary } from "@/lib/types/common";
import { ExternalLink, Github, MoveUpRight, Search, Smile } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";
export const metadata = {
  title: "Projects",
  description: "Selected work from concept to production",
};

interface PageProps {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}
export default async function ProjectsPage({ searchParams }: PageProps) {
  const { environment, technology, q } = await searchParams;
  const { projects, filteredCount, totalCount, hasSelectedFilters } =
    await getFilteredProjects(environment, technology);
  return (
    <div className="mx-auto min-h-dvh max-w-7xl px-8 py-12 pt-18 lg:px-0">
      <Breadcrumb className="mt-8">
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
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-zinc-200 px-6 py-24 lg:px-8 lg:py-32 dark:border-zinc-800">
        {/* Subtle background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-200/5 blur-[120px] dark:bg-blue-900/10" />
        </div>
        <div className="mb-4 grid w-full grid-cols-12">
          <Badge variant={"outline"} className="col-start-5 ml-5 w-fit">
            Projects
          </Badge>
        </div>

        <div className="w-full">
          <div className="grid grid-cols-12 gap-12">
            <div className="col-span-12 mt-4 lg:col-span-4">
              <h5 className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
                Work
              </h5>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h1 className="mb-6 max-w-3xl text-5xl leading-tight font-light tracking-tighter text-zinc-900 capitalize md:text-6xl lg:text-7xl dark:text-white">
                Selected Work
              </h1>
              <p className="text-foreground/70 max-w-2xl font-serif text-lg">
                From concept to production—real projects solving real problems.
                Each one built with precision, shipped with care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section
        className="dark:bg-foreground/0 sticky top-0 z-20 rounded-2xl border-b border-zinc-200 bg-zinc-50/80 backdrop-blur-sm dark:border-zinc-800"
        id="filters"
      >
        <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8 lg:py-6">
          <div className="grid grid-cols-12 gap-4 lg:gap-2">
            {/* Search */}
            <div className="col-span-12 lg:col-span-4">
              <div className="relative">
                <Search className="absolute top-3 left-3 h-4 w-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  //   value={""}
                  //   onChange={(e) => {
                  //     // setSearchQuery(e.target.value);
                  //   }}
                  className="w-full rounded-lg border border-zinc-200 bg-white py-2.5 pr-4 pl-10 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-zinc-400 focus:outline-none dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:focus:border-zinc-700"
                />
              </div>
            </div>

            {/* Environment Filter */}
            <FilterProjectsByEnvironments />

            {/* Technology Filter */}
            <FilterProjectsByTech />
          </div>
          <div className="mt-4 flex items-center gap-2.5 lg:mt-2.5">
            {/* Results count */}
            {totalCount !== filteredCount && (
              <div className="text-foreground/50 text-xs">
                Showing {filteredCount} of {totalCount} projects
              </div>
            )}

            {hasSelectedFilters && (
              <div>
                <Link href={`/projects`} className="text-xs">
                  Clear Filters
                </Link>
              </div>
            )}
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Empty State */}
        {filteredCount === 0 && hasSelectedFilters && (
          <div className="py-24 text-center">
            <p className="text-foreground/50 text-lg">
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

function ProjectCard({ project }: { project: ProjectSummary }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700">
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800">
        {project.screenshots.theme !== "none" ? (
          <Image
            src={
              project.screenshots.theme === "dark"
                ? `/images/projects/${project.slug}/${project.slug}_dark.${project.screenshots.ext}`
                : `/images/projects/${project.slug}/${project.slug}_light.${project.screenshots.ext}`
            }
            width={800}
            height={800}
            alt={project.title}
          />
        ) : (
          <div className="text-foreground/40 flex h-full w-full flex-col items-center justify-center gap-6">
            <Smile className="" size={40} />
            <h2 className="text-3xl tracking-tight">Comming soon</h2>
          </div>
        )}

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <span
            className={`rounded-full px-3 py-1 text-xs font-medium ${
              project.status.type === "deployed" ||
              project.status.type === "undeployed"
                ? "bg-emerald-500/20 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-400"
                : "bg-blue-500/20 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400"
            }`}
          >
            {project.status.type === "deployed" ? "Deployed" : "In Development"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Year */}
        <div className="mb-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
          {project.year}
        </div>

        {/* Title */}
        <h3 className="mb-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>

        {/* Description */}
        <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech_stack.map((tag) => (
            <span
              key={tag}
              className="rounded-lg border border-zinc-200 bg-zinc-50 px-2 py-1 text-xs text-zinc-700 dark:border-zinc-800 dark:bg-zinc-800/50 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4">
          <a
            href={`/projects/${project.slug}`}
            className="group/link inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition-colors hover:text-zinc-700 dark:text-white dark:hover:text-zinc-300"
          >
            View Details
            <MoveUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>

          {project.github_url && (
            <a
              href={project.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              <Github className="h-5 w-5" />
            </a>
          )}

          {project.live_preview && (
            <a
              href={project.live_preview}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
