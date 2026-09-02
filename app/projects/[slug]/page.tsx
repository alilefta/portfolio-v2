import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, LayoutTemplate, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { getProject, getProjects, getV3Project } from "@/lib/projects";
import { CustomMDX } from "@/mdx-components";
import { LegacyProjectsShell } from "@/components/projects/LegacyProjectsShell";
import { DOMAIN_URL } from "@/lib/info";
import { getLocale } from "next-intl/server";
import { buildProjectStructuredData } from "@/lib/project-seo";
import { resolveCaseStudyDefinition } from "@/components/v3/projects/case-study/registry";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function getLegacyImagePath(
  project: NonNullable<ReturnType<typeof getProject>>,
) {
  const { screenshots } = project.metadata;
  if (screenshots.theme === "none") return null;

  const fileName =
    screenshots.theme === "dark"
      ? screenshots.dark_screenshot_url
      : screenshots.light_screenshot_url;
  return fileName
    ? `/images/projects/${project.imagesDir}/${fileName}`
    : null;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) return {};

  const caseStudy = project.metadata.case_study;
  const canonicalPath = `/projects/${slug}`;
  const url = `${DOMAIN_URL}${canonicalPath}`;
  const title = caseStudy
    ? `${project.metadata.title} — ${caseStudy.status === "experiment" ? "Research Engineering" : "Product Engineering"} Case Study`
    : project.metadata.title;
  const description = caseStudy?.proposition ?? project.metadata.description;
  const legacyImage = getLegacyImagePath(project);
  const image = caseStudy?.hero.src ?? legacyImage;
  const imageAlt = caseStudy?.hero.alt ?? project.metadata.title;
  const locale = await getLocale();

  return {
    title: { absolute: `${title} | Ali Lefta` },
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: "article",
      locale: locale === "ar" ? "ar_IQ" : "en_US",
      url,
      title,
      description,
      images: image
        ? [
            {
              url: image,
              alt: imageAlt,
              ...(caseStudy ? { width: 1919, height: 1023 } : {}),
            },
          ]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) notFound();

  const v3Project = getV3Project(slug);

  if (v3Project) {
    const locale = await getLocale();
    const definition = resolveCaseStudyDefinition(
      v3Project.metadata.case_study.composition,
    );
    const structuredData = buildProjectStructuredData(
      v3Project,
      slug,
      locale,
      definition.schema,
    );

    return await definition.render({ project: v3Project, structuredData });
  }

  // Helper to determine image path
  const imagePath = getLegacyImagePath(project);
  const caseStudy = project.metadata.case_study;
  const structuredData = caseStudy
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "SoftwareApplication",
            "@id": `${DOMAIN_URL}/projects/${slug}#software`,
            name: project.metadata.title,
            url: `${DOMAIN_URL}/projects/${slug}`,
            description: caseStudy.proposition,
            applicationCategory: "BusinessApplication",
            operatingSystem: caseStudy.platform.join(", "),
            featureList: caseStudy.capabilities,
            image: new URL(caseStudy.hero.src, DOMAIN_URL).toString(),
            datePublished: project.metadata.date ?? project.metadata.publishedAt,
            inLanguage: (await getLocale()) === "ar" ? "ar" : "en",
            author: { "@id": `${DOMAIN_URL}/#person` },
          },
          {
            "@type": "BreadcrumbList",
            "@id": `${DOMAIN_URL}/projects/${slug}#breadcrumbs`,
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Projects",
                item: `${DOMAIN_URL}/projects`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: project.metadata.title,
                item: `${DOMAIN_URL}/projects/${slug}`,
              },
            ],
          },
        ],
      }
    : undefined;

  const isDeployed = project.metadata.status.type === "deployed";

  return (
    <LegacyProjectsShell>
      <div className="min-h-screen bg-white dark:bg-black">
        {structuredData ? (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
            }}
          />
        ) : null}
        {/* 1. HERO SECTION: Full Width & Immersive */}
        <section className="relative w-full border-b border-zinc-200 bg-zinc-50/50 pt-28 pb-12 dark:border-zinc-800 dark:bg-zinc-900/20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Breadcrumb */}
            <div className="mb-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{project.metadata.title}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="grid gap-12 lg:grid-cols-12">
              {/* Title & Summary */}
              <div className="flex flex-col justify-center lg:col-span-7">
                {/* Project Status Badge */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md ${
                      isDeployed
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900/50 dark:bg-emerald-900/20 dark:text-emerald-400"
                        : "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900/50 dark:bg-amber-900/20 dark:text-amber-400"
                    }`}
                  >
                    <span className="relative flex h-2 w-2">
                      <span
                        className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${
                          isDeployed ? "bg-emerald-400" : "bg-amber-400"
                        }`}
                      ></span>
                      <span
                        className={`relative inline-flex h-2 w-2 rounded-full ${
                          isDeployed ? "bg-emerald-500" : "bg-amber-500"
                        }`}
                      ></span>
                    </span>
                    <span>
                      {isDeployed ? "Production Ready" : "In Development"}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                    {`// ${project.metadata.environment}`}
                  </span>
                </div>

                <h1 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl lg:text-6xl dark:text-zinc-100">
                  {project.metadata.title}
                </h1>
                <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {project.metadata.description}
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap gap-4">
                  {project.metadata.live_preview && (
                    <Button asChild className="gap-2 rounded-full">
                      <Link
                        href={project.metadata.live_preview}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Globe className="h-4 w-4" /> Live Demo
                      </Link>
                    </Button>
                  )}
                  {project.metadata.github_url && (
                    <Button
                      asChild
                      variant="outline"
                      className="gap-2 rounded-full border-zinc-200 dark:border-zinc-800"
                    >
                      <Link
                        href={project.metadata.github_url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Github className="h-4 w-4" /> View Source
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* Featured Image (Floated Right or Below) */}
              <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-2xl lg:col-span-5 dark:border-zinc-800 dark:bg-zinc-900">
                {/* Decorative Browser Bar */}
                <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-white px-4 py-3 dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                </div>
                <div className="relative aspect-video w-full bg-zinc-50 dark:bg-zinc-900">
                  {imagePath ? (
                    <Image
                      src={imagePath}
                      alt={project.metadata.title}
                      fill
                      sizes="(min-width: 1024px) 42vw, 100vw"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-zinc-300 dark:text-zinc-700">
                      <LayoutTemplate className="h-12 w-12 opacity-50" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. MAIN CONTENT GRID */}
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* SIDEBAR (Sticky on Desktop) - 4 Columns */}
            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-8 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/30">
                {/* Project Specs */}
                <div>
                  <h3 className="mb-4 text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100">
                    Specifications
                  </h3>
                  <dl className="space-y-4 text-sm">
                    <div className="flex justify-between border-b border-zinc-100 pb-2 dark:border-zinc-800">
                      <dt className="text-zinc-500">Timeline</dt>
                      <dd className="font-medium text-zinc-900 dark:text-zinc-200">
                        {/* Handle deployed vs undeployed date logic */}
                        {project.metadata.status.type === "deployed"
                          ? project.metadata.status.deployement_year
                          : project.metadata.status.expected_deployment}
                      </dd>
                    </div>
                    <div className="flex justify-between border-b border-zinc-100 pb-2 dark:border-zinc-800">
                      <dt className="text-zinc-500">Platform</dt>
                      <dd className="font-medium text-zinc-900 dark:text-zinc-200">
                        {project.metadata.environment}
                      </dd>
                    </div>
                    <div className="flex justify-between border-b border-zinc-100 pb-2 dark:border-zinc-800">
                      <dt className="text-zinc-500">License</dt>
                      <dd className="font-medium text-zinc-900 capitalize dark:text-zinc-200">
                        {project.metadata.privacy.replace("_", " ")}
                      </dd>
                    </div>
                  </dl>
                </div>

                {/* Tech Stack Chips */}
                <div>
                  <h3 className="mb-4 text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.metadata.tech_stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 transition-colors hover:border-zinc-300 dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-zinc-300"
                      >
                        {tech.replaceAll("_", " ")}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Business Impact (If exists) */}
                {project.metadata.additional_info?.business_impact && (
                  <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-900 dark:bg-blue-900/20 dark:text-blue-200">
                    <p className="mb-1 font-semibold">Business Impact</p>
                    <p className="opacity-90">
                      {project.metadata.additional_info.business_impact}
                    </p>
                  </div>
                )}
              </div>
            </aside>

            {/* CONTENT BODY - 8 Columns */}
            <div className="lg:col-span-8">
              <div className="prose prose-zinc prose-lg dark:prose-invert max-w-none">
                {/* This renders your MDX case study */}
                <CustomMDX source={project.content} />
              </div>

              {/* Back to Projects */}
              <div className="mt-16 border-t border-zinc-200 pt-8 dark:border-zinc-800">
                <Link
                  href="/projects"
                  className="group flex w-fit items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-zinc-900 dark:hover:text-zinc-200"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  Back to Selected Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LegacyProjectsShell>
  );
}
