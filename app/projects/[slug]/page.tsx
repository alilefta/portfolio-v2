import { Badge } from "@/components/ui/custom/Badge";
import { Smile } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
// import { getLocale } from "next-intl/server";
import { getProject, getProjects } from "@/lib/projects";
import { CustomMDX } from "@/mdx-components";
interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 1. Static Site Generation (SSG)
// This tells Next.js to build these pages at build time, making them instant.
export async function generateStaticParams() {
  const projects = getProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// 2. Dynamic SEO Metadata
// export async function generateMetadata({ params }: PageProps) {
//   const { slug } = await params;
//   const project = getProject(slug);

//   if (!project) {
//     return;
//   }

//   const { title, description, screenshots: featuredImage } = project.metadata;

//   return {
//     title: title, // Result: "Oscar Lab System | Ali Mohsin"
//     description: description,
//     openGraph: {
//       title: title,
//       description: description,
//       type: "article",
//       url: `https://ali-mohsin.dev/projects/${slug}`,
//       images: [
//         {
//           url: featuredImage || "/images/og-default.jpg", // TODO
//           width: 1200,
//           height: 630,
//           alt: title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: title,
//       description: description,
//       images: [featuredImage || "/images/og-default.jpg"],
//     },
//   };
// }

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  // const locale = await getLocale();

  return (
    <div className="mx-auto min-h-dvh max-w-7xl px-8 py-12 pt-18 lg:px-0">
      <Breadcrumb className="mt-8">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/projects">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{project.metadata.title}</BreadcrumbPage>
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
          <div className="mb-12 grid gap-4 md:grid-cols-12 md:gap-12">
            <div className="col-span-12 lg:col-span-4">
              <h5 className="mb-4 text-sm text-zinc-500 dark:text-zinc-400">
                Work
              </h5>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <h1 className="mb-6 max-w-3xl text-4xl leading-tight font-light tracking-tighter text-wrap text-zinc-900 capitalize md:text-6xl lg:text-7xl dark:text-white">
                {project.metadata.title}
              </h1>
              <p className="text-foreground/70 max-w-2xl font-serif text-sm md:text-lg">
                {project.metadata.description}
              </p>
            </div>
          </div>

          {/* tech stack */}
          <div className="mb-12 grid grid-cols-12 gap-4 lg:gap-12">
            <div className="col-span-12 lg:col-span-4"></div>
            <div className="col-span-12 flex items-center gap-4 lg:col-span-8">
              {project.metadata.tech_stack.map((tech) => (
                <Badge key={`${project.slug}_${tech}`} variant={"outline"}>
                  {tech.replaceAll("_", " ")}
                </Badge>
              ))}
            </div>
          </div>

          {/* Gallary here */}
          <div className="mb-12 grid grid-cols-12 gap-4 lg:gap-12">
            <div className="col-span-12 lg:col-span-4"></div>
            <div className="col-span-12 lg:col-span-8">
              {project.metadata.screenshots.theme !== "none" ? (
                <Image
                  src={
                    project.metadata.screenshots.theme === "dark"
                      ? `/images/projects/${project.imagesDir}/${project.imagesDir}-dark.${project.metadata.screenshots.ext}`
                      : `/images/projects/${project.imagesDir}/${project.imagesDir}-light.${project.metadata.screenshots.ext}`
                  }
                  width={800}
                  height={800}
                  alt={project.metadata.title}
                />
              ) : (
                <div className="text-foreground/40 flex h-full w-full flex-col items-center justify-center gap-6">
                  <Smile className="" size={40} />
                  <h2 className="text-3xl tracking-tight">Comming soon</h2>
                </div>
              )}
            </div>
          </div>

          {/* Features */}
          {/* Architecture and decisions */}
          {/* MDX Content for case study */}

          <div className="grid grid-cols-12 gap-4 lg:gap-12">
            <div className="col-span-12 lg:col-span-4"></div>
            <div className="col-span-12 lg:col-span-8">
              <CustomMDX source={project.content} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
