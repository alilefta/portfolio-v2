import { Badge } from "@/components/ui/custom/Badge";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFloatingBar,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
} from "@/components/ui/custom/card";
import { ProjectSummary } from "@/lib/types/common";
import { Button } from "./ui/custom/Button";
import { MoveUpRight, Smile } from "lucide-react";

export function ProjectSummaryCard({
  project,
  orientation,
  interactive = false,
}: {
  project: ProjectSummary;
  orientation: "vertical" | "horizontal";
  interactive?: boolean;
}) {
  return (
    <Card key={project.id} interactive={interactive} orientation={orientation}>
      <CardImage className="border-foreground/20 bg-foreground/20 relative aspect-video w-full overflow-hidden border-b dark:border-white/5 dark:bg-black/20">
        {project.screenshots !== undefined ? (
          project.screenshots.theme !== "none" ? (
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
          )
        ) : (
          <div className="text-foreground/40 flex h-full w-full flex-col items-center justify-center gap-6">
            <Smile className="" size={40} />
            <h2 className="text-3xl tracking-tight">Comming soon</h2>
          </div>
        )}

        {/* The Overlay (Dark Mode Only - Adds depth) */}
        <div className="pointer-events-none absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.5)]"></div>

        {project.badge_tag_1 || project.badge_tag_2 ? (
          <CardFloatingBar position="top">
            {project.badge_tag_1 && (
              <Badge variant="surface" intent="success">
                <span className="mr-2 h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                {project.badge_tag_1}
              </Badge>
            )}
            {project.badge_tag_2 && (
              <Badge variant="glass">{project.badge_tag_2}</Badge>
            )}
          </CardFloatingBar>
        ) : null}
      </CardImage>

      {orientation === "vertical" ? (
        <>
          <CardHeader>
            <div className="mb-8 flex items-center justify-between">
              {/* Project Type Label */}
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
                {project.environment}
              </span>

              {project.status.type === "deployed" && (
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
                  {project.status.deployement_year}
                </span>
              )}
            </div>

            <CardTitle className="mb-2">{project.title}</CardTitle>
            <CardDescription className="max-w-3xl">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="py-2 md:py-2">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <Badge variant="outline" key={`${project.id}_${tech}`}>
                  {tech.replace("_", " ")}
                </Badge>
              ))}
            </div>

            {project.additional_info &&
              project.additional_info.business_impact && (
                <div className="border-foreground/10 rounded-xl border px-6 py-4">
                  <span className="mb-2 text-xs tracking-wider text-zinc-600 dark:text-zinc-400">
                    Real Business Impact
                  </span>
                  <h5 className="text-foreground/90 text-sm tracking-tight">
                    {project.additional_info.business_impact}
                  </h5>
                </div>
              )}

            {project.status.type === "undeployed" && (
              <div className="border-foreground/10 rounded-xl border px-6 py-4">
                <span className="mb-2 text-xs tracking-wider text-zinc-600 dark:text-zinc-400">
                  Expected status
                </span>
                <h5 className="text-foreground/90 text-sm tracking-tight">
                  {project.status.expected_deployment}
                </h5>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            {project.status.type === "deployed" ? (
              <>
                <Button asChild variant={"ghost"}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-sm text-zinc-900 decoration-blue-500 decoration-2 underline-offset-4 hover:underline dark:text-white"
                  >
                    <span>View Case Study</span>
                    <MoveUpRight size={16} />
                  </Link>
                </Button>
                <Button
                  variant={"ghost"}
                  className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.97 8.205 11.522.6.11.82-.26.82-.577v-2.162c-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .31.21.69.825.57C20.565 21.97 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm">
                Coming Soon
              </Button>
            )}
          </CardFooter>
        </>
      ) : (
        <div className="flex h-auto flex-col md:justify-between">
          <CardHeader>
            <div className="mb-8 flex items-center justify-between">
              {/* Project Type Label */}
              <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase dark:text-zinc-400">
                {project.environment}
              </span>

              {project.status.type === "deployed" && (
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
                  {project.status.deployement_year}
                </span>
              )}
            </div>

            <CardTitle className="mb-2">{project.title}</CardTitle>
            <CardDescription className="max-w-3xl">
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent className="py-2 md:py-2">
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech_stack.map((tech) => (
                <Badge variant="outline" key={`${project.id}_${tech}`}>
                  {tech.replace("_", " ")}
                </Badge>
              ))}
            </div>

            {project.additional_info &&
              project.additional_info.business_impact && (
                <div className="border-foreground/10 rounded-xl border px-6 py-4">
                  <span className="mb-2 text-xs tracking-wider text-zinc-600 dark:text-zinc-400">
                    Real Business Impact
                  </span>
                  <h5 className="text-foreground/90 text-sm tracking-tight">
                    {project.additional_info.business_impact}
                  </h5>
                </div>
              )}

            {project.status.type === "undeployed" && (
              <div className="border-foreground/10 rounded-xl border px-6 py-4">
                <span className="mb-2 text-xs tracking-wider text-zinc-600 dark:text-zinc-400">
                  Expected status
                </span>
                <h5 className="text-foreground/90 text-sm tracking-tight">
                  {project.status.expected_deployment}
                </h5>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            {project.status.type === "deployed" ? (
              <>
                <Button asChild variant={"ghost"}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-sm text-zinc-900 decoration-blue-500 decoration-2 underline-offset-4 hover:underline dark:text-white"
                  >
                    <span>View Case Study</span>
                    <MoveUpRight size={16} />
                  </Link>
                </Button>
                <Button
                  variant={"ghost"}
                  className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-white"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.97 8.205 11.522.6.11.82-.26.82-.577v-2.162c-3.338.725-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.238 1.838 1.238 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .31.21.69.825.57C20.565 21.97 24 17.31 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </Button>
              </>
            ) : (
              <Button variant="outline" size="sm">
                Coming Soon
              </Button>
            )}
          </CardFooter>
        </div>
      )}
    </Card>
  );
}
