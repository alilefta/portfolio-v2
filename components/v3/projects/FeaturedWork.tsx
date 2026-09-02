import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import {
  getFeaturedProjects,
  type FeaturedProject,
} from "@/lib/projects";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { Label } from "@/components/v3/ui/Label";

function getProjectImage(project: FeaturedProject) {
  const { screenshots } = project.metadata;

  if (screenshots.theme === "none") return null;

  const theme = screenshots.theme === "dark" ? "dark" : "light";
  return `/images/projects/${project.imagesDir}/${project.imagesDir}-${theme}.${screenshots.ext}`;
}

type SupportingProjectProps = {
  project: FeaturedProject;
  index: string;
  tone: "yellow" | "coral";
  kicker: string;
  status: string;
  description: string;
  artifactLabel: string;
  artifactValue: string;
  imageAlt: string;
  openLabel: string;
};

function SupportingProject({
  project,
  index,
  tone,
  kicker,
  status,
  description,
  artifactLabel,
  artifactValue,
  imageAlt,
  openLabel,
}: SupportingProjectProps) {
  const imagePath = getProjectImage(project);
  const isYellow = tone === "yellow";

  return (
    <article
      className={
        isYellow
          ? "flex min-h-[34rem] flex-col overflow-hidden bg-v3-yellow p-[clamp(1.25rem,3vw,2rem)] text-[#171714]"
          : "flex min-h-[34rem] flex-col overflow-hidden bg-v3-coral p-[clamp(1.25rem,3vw,2rem)] text-[#24100b]"
      }
    >
      <div className="v3-technical flex items-start justify-between gap-4 opacity-65">
        <span>
          {index} / {kicker}
        </span>
        <span>{status}</span>
      </div>

      <h3 className="mt-7 font-v3-display text-[clamp(2.5rem,5vw,4rem)] leading-[0.9] font-bold tracking-[-0.06em]">
        {project.metadata.title}
      </h3>
      <p className="mt-4 max-w-xl font-v3-text text-sm leading-relaxed opacity-70">
        {description}
      </p>

      <div className="relative mt-auto pt-12">
        {imagePath ? (
          <div className="relative aspect-[16/9] overflow-hidden bg-[#111] shadow-[9px_10px_0_rgb(23_23_20/0.18)]">
            <Image
              src={imagePath}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        ) : (
          <div className="flex aspect-[16/9] items-center justify-center border border-current/30 font-v3-text text-sm">
            {artifactLabel}
          </div>
        )}

        <div className="absolute end-3 top-4 rotate-2 bg-v3-surface-dark px-3 py-2.5 text-[#f5f1e8] shadow-[5px_6px_0_rgb(23_23_20/0.18)]">
          <strong className="block font-v3-display text-xl leading-none tracking-[-0.04em]">
            {artifactValue}
          </strong>
          <span className="v3-technical mt-1 block text-white/55">
            {artifactLabel}
          </span>
        </div>
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-7 inline-flex min-h-11 w-fit items-center gap-2 border-b-2 border-current font-v3-text text-sm font-bold"
      >
        {openLabel} <ArrowUpRight className="size-4" aria-hidden="true" />
      </Link>
    </article>
  );
}

export async function FeaturedWork() {
  const t = await getTranslations("V3.Home.SelectedWork");
  const projects = getFeaturedProjects();
  const projectByKey = new Map(
    projects.map((project) => [project.metadata.homepage_key, project]),
  );
  const oscar = projectByKey.get("oscar");
  const labora = projectByKey.get("labora");
  const cryptography = projectByKey.get("cryptography");

  if (!oscar || !labora || !cryptography) {
    throw new Error(
      "The V3 homepage requires Oscar, Labora, and Cryptography featured projects.",
    );
  }

  const oscarImage = getProjectImage(oscar);

  return (
    <Section id="selected-work" tone="surface">
      <Container>
        <header className="grid gap-7 border-b-2 border-v3-ink pb-10 lg:grid-cols-[10rem_minmax(0,1fr)_17rem] lg:items-end">
          <Label signal="blue">{t("Eyebrow")}</Label>
          <h2 className="v3-heading max-w-4xl text-balance">{t("Title")}</h2>
          <p className="v3-technical max-w-xs text-v3-muted lg:text-end">
            {t("Introduction")}
          </p>
        </header>

        <article aria-labelledby="oscar-feature-title">
          <div className="grid gap-5 border-b border-v3-line py-6 md:grid-cols-[10rem_minmax(0,1fr)_auto] md:items-end">
            <p className="v3-technical text-v3-coral">01 / {t("Oscar.Kicker")}</p>
            <h3
              id="oscar-feature-title"
              className="font-v3-display text-[clamp(3.5rem,8vw,6.5rem)] leading-[0.82] font-bold tracking-[-0.075em]"
            >
              {oscar.metadata.title}
            </h3>
            <div className="md:text-end">
              <p className="v3-technical text-v3-muted">{t("StatusLabel")}</p>
              <p className="mt-1 font-v3-text text-sm font-bold text-v3-blue">
                {t("Oscar.Status")}
              </p>
            </div>
          </div>

          <div className="grid border-b border-v3-line lg:grid-cols-[15rem_minmax(0,1fr)]">
            <aside className="border-b border-v3-line py-6 lg:border-e lg:border-b-0 lg:pe-7">
              <dl>
                {[
                  [t("RoleLabel"), t("Oscar.Role")],
                  [t("PlatformLabel"), t("Oscar.Platform")],
                  [t("OwnershipLabel"), t("Oscar.Ownership")],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border-t border-v3-line py-4 first:border-t-0 first:pt-0"
                  >
                    <dt className="v3-technical text-v3-muted">{label}</dt>
                    <dd className="mt-1.5 font-v3-text text-sm font-bold">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-3 flex flex-wrap gap-2">
                {oscar.metadata.tech_stack.slice(0, 4).map((technology) => (
                  <span
                    key={technology}
                    className="v3-technical border border-v3-line px-2 py-1 text-v3-muted"
                  >
                    {technology.replaceAll("_", " ")}
                  </span>
                ))}
              </div>
            </aside>

            <div className="py-7 lg:ps-9">
              {oscarImage ? (
                <figure>
                  <div className="relative aspect-[16/8.4] overflow-hidden bg-[#101311]">
                    <Image
                      src={oscarImage}
                      alt={t("Oscar.ImageAlt")}
                      fill
                      sizes="(min-width: 1024px) 68vw, 100vw"
                      className="object-cover object-top"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.08)_1px,transparent_1px)] bg-[size:4.25rem_4.25rem] opacity-20"
                    />
                    <figcaption className="absolute bottom-4 start-4 max-w-sm bg-v3-coral px-4 py-3 font-v3-text text-xs leading-relaxed text-[#24100b]">
                      {t("Oscar.ImageCaption")}
                    </figcaption>
                  </div>
                </figure>
              ) : null}

              <div className="grid gap-8 pt-8 lg:grid-cols-[minmax(0,1fr)_17rem] lg:items-start">
                <div>
                  <p className="font-v3-text text-lg leading-relaxed">
                    <strong>{t("Oscar.SummaryLead")}</strong>{" "}
                    {t("Oscar.Summary")}
                  </p>
                  <Link
                    href={`/projects/${oscar.slug}`}
                    className="mt-6 inline-flex min-h-11 items-center gap-2 border-b-2 border-v3-ink font-v3-text text-sm font-bold"
                  >
                    {t("OpenCase")} {" "}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
                <aside className="border-s-2 border-v3-coral ps-5">
                  <p className="v3-technical text-v3-muted">
                    {t("Oscar.EvidenceLabel")}
                  </p>
                  <p className="mt-2 font-v3-display text-2xl leading-tight font-bold tracking-[-0.04em]">
                    {t("Oscar.Evidence")}
                  </p>
                </aside>
              </div>
            </div>
          </div>
        </article>

        <div className="mt-16 grid gap-3 lg:grid-cols-[1.08fr_0.92fr]">
          <SupportingProject
            project={labora}
            index="02"
            tone="yellow"
            kicker={t("Labora.Kicker")}
            status={t("Labora.Status")}
            description={t("Labora.Description")}
            artifactValue={t("Labora.ArtifactValue")}
            artifactLabel={t("Labora.ArtifactLabel")}
            imageAlt={t("Labora.ImageAlt")}
            openLabel={t("OpenProject")}
          />
          <SupportingProject
            project={cryptography}
            index="03"
            tone="coral"
            kicker={t("Cryptography.Kicker")}
            status={t("Cryptography.Status")}
            description={t("Cryptography.Description")}
            artifactValue={t("Cryptography.ArtifactValue")}
            artifactLabel={t("Cryptography.ArtifactLabel")}
            imageAlt={t("Cryptography.ImageAlt")}
            openLabel={t("OpenProject")}
          />
        </div>

        <div className="mt-10 flex justify-end">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 font-v3-text text-sm font-bold text-v3-blue underline decoration-2 underline-offset-4"
          >
            {t("ViewAll")} <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
