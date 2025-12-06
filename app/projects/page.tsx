import { FilterProjectsByEnvironments } from "@/components/projects/FilterProjectsByEnvironment";
import { FilterProjectsByTech } from "@/components/projects/FilterProjectsByTech";
import { Badge } from "@/components/ui/custom/Badge";
import { getFilteredProjects } from "@/lib/projects-actions";
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
import { Search } from "lucide-react";
export const metadata = {
  title: "Projects",
  description: "Selected work from concept to production",
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
            <FilterProjectsByEnvironments
              currentEnvironment={environment}
              currentTechnology={technology}
            />

            {/* Technology Filter */}
            <FilterProjectsByTech
              currentEnvironment={environment}
              currentTechnology={technology}
            />
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
            <ProjectSummaryCard
              key={project.id}
              project={project}
              orientation="vertical"
              interactive={false}
            />
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
