import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Label } from "@/components/v3/ui/Label";
import { getProjects, type Project } from "@/lib/projects";
import { SiteHeader } from "@/components/v3/layout/SiteHeader";
import { SiteFooter } from "@/components/v3/layout/SiteFooter";

function getProjectImage(project: Project) {
  const { screenshots } = project.metadata;
  if (screenshots.theme === "none") return null;

  const theme = screenshots.theme === "dark" ? "dark" : "light";
  return `/images/projects/${project.imagesDir}/${project.imagesDir}-${theme}.${screenshots.ext}`;
}

function getStatusKey(project: Project) {
  if (project.metadata.homepage_key === "cryptography") return "Research" as const;
  if (project.metadata.status.type === "deployed") return "Shipped" as const;
  return "InDevelopment" as const;
}

function getProjectDescription(project: Project, copy: (key: string) => string) {
  if (project.metadata.homepage_key === "oscar") return copy("Oscar.Summary");
  if (project.metadata.homepage_key === "labora") return copy("Labora.Description");
  if (project.metadata.homepage_key === "cryptography") return copy("Cryptography.Description");
  return project.metadata.description;
}

function ProjectArchiveCard({
  project,
  index,
  featured = false,
  copy,
  archive,
}: {
  project: Project;
  index: number;
  featured?: boolean;
  copy: (key: string) => string;
  archive: (key: "Open" | "Role" | "Platform" | "Status" | "Shipped" | "InDevelopment" | "Research" | "Other") => string;
}) {
  const imagePath = project.metadata.case_study?.hero.src ?? getProjectImage(project);
  const statusKey = getStatusKey(project);
  const status = archive(statusKey);

  return (
    <article
      className={
        featured
          ? "grid gap-8 border-y-2 border-v3-ink py-7 lg:grid-cols-[10rem_minmax(0,1fr)_minmax(17rem,0.72fr)] lg:items-center"
          : "group flex h-full flex-col border-t border-v3-line pt-5"
      }
      aria-labelledby={`archive-project-${project.slug}`}
    >
      <p className="v3-technical text-v3-coral">
        {String(index).padStart(2, "0")} / {featured ? "FLAGSHIP" : "PROJECT"}
      </p>

      <div className={featured ? "min-w-0" : "mt-5"}>
        <div className="flex items-start justify-between gap-4">
          <h2
            id={`archive-project-${project.slug}`}
            className={
              featured
                ? "font-v3-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.85] font-bold tracking-[-0.07em]"
                : "font-v3-display text-[clamp(2rem,4vw,3.2rem)] leading-[0.9] font-bold tracking-[-0.06em]"
            }
          >
            {project.metadata.title}
          </h2>
          <span className="v3-technical shrink-0 text-v3-muted">{status}</span>
        </div>
        <p className="v3-body mt-4 max-w-2xl text-v3-muted">
          {getProjectDescription(project, copy)}
        </p>

        <dl className="mt-6 grid max-w-xl grid-cols-2 gap-x-5 gap-y-4 border-t border-v3-line pt-4 text-sm sm:grid-cols-3">
          <div>
            <dt className="v3-technical text-v3-muted">{archive("Role")}</dt>
            <dd className="mt-1 font-v3-text font-bold">
              {project.metadata.case_study?.role?.[0] ?? project.metadata.tech_stack.slice(0, 2).join(" · ")}
            </dd>
          </div>
          <div>
            <dt className="v3-technical text-v3-muted">{archive("Platform")}</dt>
            <dd className="mt-1 font-v3-text font-bold">
              {project.metadata.case_study?.platform?.[0] ?? project.metadata.environment}
            </dd>
          </div>
          <div>
            <dt className="v3-technical text-v3-muted">{archive("Status")}</dt>
            <dd className="mt-1 font-v3-text font-bold text-v3-blue">{status}</dd>
          </div>
        </dl>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 border-b-2 border-v3-ink font-v3-text text-sm font-bold transition-colors hover:border-v3-blue hover:text-v3-blue"
        >
          {archive("Open")} <ArrowUpRight className="size-4" aria-hidden="true" />
        </Link>
      </div>

      <div className={featured ? "relative" : "relative mt-7"}>
        {imagePath ? (
          <div className="relative aspect-[16/9] overflow-hidden bg-v3-surface-dark shadow-[8px_9px_0_rgb(23_23_20/0.13)] transition-transform duration-200 group-hover:-translate-y-1">
            <Image
              src={imagePath}
              alt={project.metadata.case_study?.hero.alt ?? project.metadata.title}
              fill
              sizes={featured ? "(min-width: 1024px) 28vw, 100vw" : "(min-width: 768px) 45vw, 100vw"}
              className="object-cover object-top"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center border border-v3-line bg-v3-surface font-v3-text text-sm text-v3-muted">
            {archive("Other")}
          </div>
        )}
        {featured ? (
          <span className="absolute -bottom-3 end-3 bg-v3-yellow px-3 py-2 v3-technical text-[#171714] shadow-[4px_5px_0_rgb(23_23_20/0.16)]">
            {archive("Shipped")}
          </span>
        ) : null}
      </div>
    </article>
  );
}

export async function ProjectArchive() {
  const tHome = await getTranslations("V3.Home.SelectedWork");
  const tArchive = await getTranslations("V3.Home.Archive");
  const projects = getProjects().sort((a, b) => {
    const featuredA = a.metadata.featuredOrder ?? Number.MAX_SAFE_INTEGER;
    const featuredB = b.metadata.featuredOrder ?? Number.MAX_SAFE_INTEGER;
    if (featuredA !== featuredB) return featuredA - featuredB;
    return a.metadata.title.localeCompare(b.metadata.title);
  });
  const [flagship, ...supporting] = projects;
  if (!flagship) return null;

  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden bg-v3-paper text-v3-ink">
      <section className="bg-v3-blue text-white">
        <Container className="py-[clamp(3.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[10rem_minmax(0,1fr)_18rem] lg:items-end">
            <Label signal="yellow" className="text-white">{tArchive("Eyebrow")}</Label>
            <h1 className="v3-display max-w-5xl text-balance">{tArchive("Title")}</h1>
            <p className="v3-technical max-w-xs text-white/70 lg:text-end">{tArchive("Introduction")}</p>
          </div>
        </Container>
      </section>

      <Container className="py-[clamp(3rem,7vw,6rem)]">
        <ProjectArchiveCard
          project={flagship}
          index={1}
          featured
          copy={tHome}
          archive={tArchive}
        />

        <div className="mt-20 flex items-end justify-between gap-5 border-b-2 border-v3-ink pb-5">
          <div>
            <p className="v3-label text-v3-coral">02—{String(projects.length).padStart(2, "0")}</p>
            <h2 className="mt-3 font-v3-display text-4xl font-bold tracking-[-0.06em] sm:text-5xl">{tArchive("AllWork")}</h2>
          </div>
          <p className="v3-technical hidden max-w-xs text-end text-v3-muted sm:block">{tArchive("More")}</p>
        </div>

        <div className="mt-8 grid gap-x-8 gap-y-14 md:grid-cols-2">
          {supporting.map((project, index) => (
            <ProjectArchiveCard
              key={project.slug}
              project={project}
              index={index + 2}
              copy={tHome}
              archive={tArchive}
            />
          ))}
        </div>
        <p className="v3-technical mt-12 border-t border-v3-line pt-5 text-v3-muted sm:hidden">{tArchive("More")}</p>
      </Container>
      </main>
      <SiteFooter />
    </>
  );
}
