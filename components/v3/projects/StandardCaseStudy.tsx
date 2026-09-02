import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { CustomMDX } from "@/mdx-components";
import type { V3Project } from "@/lib/projects";
import type { ProjectStructuredData } from "@/lib/project-seo";
import { resolveProjectGallery } from "@/lib/project-gallery";
import { CaseStudyGallery } from "./CaseStudyGallery";
import { CaseStudyShell } from "./case-study/CaseStudyShell";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";
import { OutcomePanel } from "./case-study/OutcomePanel";
import { ProjectNavigation } from "./case-study/ProjectNavigation";

type StandardCaseStudyProps = {
  project: V3Project;
  structuredData: ProjectStructuredData;
};

export async function StandardCaseStudy({
  project,
  structuredData,
}: StandardCaseStudyProps) {
  const t = await getTranslations("V3.Standard");
  const caseStudy = project.metadata.case_study;
  const galleryItems = await resolveProjectGallery(project);
  const outcome = caseStudy.outcomes[0];

  return (
    <CaseStudyShell structuredData={structuredData}>
      <Section tone="blue" spacing="none" className="overflow-hidden">
        <Container className="py-[clamp(4rem,9vw,8rem)]">
          <Link
            href="/projects"
            className="font-v3-text inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden="true">←</span>
            {t("Hero.Back")}
          </Link>

          <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(28rem,1.1fr)] lg:items-center lg:gap-16">
            <div>
              <p className="v3-label text-v3-yellow">{t("Hero.Eyebrow")}</p>
              <h1 className="font-v3-display mt-6 max-w-4xl text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.9] font-bold tracking-[-0.06em] text-balance">
                {project.metadata.title}
              </h1>
              <p className="font-v3-text mt-8 max-w-2xl text-lg leading-8 text-white/70">
                {caseStudy.proposition}
              </p>
              <Link
                href="#case-study-start"
                className="font-v3-text mt-9 inline-flex min-h-11 items-center gap-2 border border-v3-yellow bg-v3-yellow px-5 py-3 text-sm font-bold text-[#171714] shadow-[7px_8px_0_rgb(23_23_20/0.28)] transition-colors hover:bg-white"
              >
                {t("Hero.Enter")}
                <ArrowDownRight aria-hidden="true" />
              </Link>
            </div>

            <figure className="relative mx-auto w-full max-w-3xl lg:rotate-1">
              <div className="absolute -inset-4 -rotate-2 bg-v3-yellow lg:-inset-6" aria-hidden="true" />
              <div className="relative border-[3px] border-[#171714] bg-[#101311] p-2 shadow-[14px_16px_0_rgb(23_23_20/0.3)]">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#101311]">
                  <Image
                    src={caseStudy.hero.src}
                    alt={caseStudy.hero.alt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 54vw, 100vw"
                    className="object-contain object-top"
                  />
                </div>
                <figcaption className="font-v3-text flex min-h-14 items-center px-2 pt-2 text-sm leading-6 text-white/55">
                  {caseStudy.hero.caption ?? t("Gallery.HeroCaption")}
                </figcaption>
              </div>
            </figure>
          </div>
        </Container>
      </Section>

      <section id="case-study-start" className="bg-v3-yellow text-[#171714]">
        <Container className="py-[clamp(3rem,7vw,6rem)]">
          <p className="v3-label text-black/55">{t("Meta.Eyebrow")}</p>
          <dl className="mt-7 grid border-y-2 border-[#171714] sm:grid-cols-2 lg:grid-cols-4">
            {[
              [t("Meta.Status"), t(`Status.${caseStudy.status}`)],
              [t("Meta.Role"), caseStudy.role.join(" · ")],
              [t("Meta.Platform"), caseStudy.platform.join(" · ")],
              [t("Meta.Confidentiality"), t(`Confidentiality.${caseStudy.confidentiality}`)],
            ].map(([label, value]) => (
              <div key={label} className="border-b border-[#171714]/30 p-5 last:border-b-0 sm:border-e sm:last:border-e-0 sm:last:border-b-0 lg:border-b-0">
                <dt className="v3-technical text-black/55">{label}</dt>
                <dd className="font-v3-display mt-4 text-xl font-bold leading-tight tracking-[-0.03em]">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 border-b-2 border-[#171714] pb-7">
            <p className="v3-technical text-black/55">{t("Meta.Capabilities")}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {caseStudy.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="border border-[#171714]/35 px-3 py-2 font-v3-text text-sm font-semibold"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <Section tone="paper" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20">
            <div>
              <p className="v3-label text-v3-coral">{t("Evidence.Eyebrow")}</p>
              <h2 className="font-v3-display mt-5 text-[clamp(2.7rem,5vw,5rem)] leading-[0.95] font-bold tracking-[-0.05em] text-balance">
                {t("Evidence.Title")}
              </h2>
              <p className="v3-body mt-6 max-w-md text-v3-muted">{t("Evidence.Description")}</p>
            </div>
            <CaseStudyGallery
              items={galleryItems}
              label={t("Gallery.Label")}
              previousLabel={t("Gallery.Previous")}
              nextLabel={t("Gallery.Next")}
              slideLabel={t("Gallery.Slide")}
              eager
            />
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="none">
        <Container reading className="py-[clamp(4.5rem,9vw,8rem)]">
          <p className="v3-label text-v3-blue">{t("Narrative.Eyebrow")}</p>
          <h2 className="font-v3-display mt-5 text-[clamp(2.7rem,5vw,5rem)] leading-[0.95] font-bold tracking-[-0.05em] text-balance">
            {t("Narrative.Title")}
          </h2>
          <div className="mt-12">
            <CustomMDX source={project.content} />
          </div>
        </Container>
      </Section>

      <Section tone="coral" spacing="none">
        <Container className="py-[clamp(4.5rem,8vw,7rem)]">
          <OutcomePanel
            resultLabel={t("Outcome.Label")}
            resultLead={outcome?.value ?? t("Outcome.PendingValue")}
            resultAccent=""
            description={outcome?.evidence ?? caseStudy.proposition}
            confidence={{
              label: t("Outcome.ConfidenceLabel"),
              value: outcome?.confidence
                ? t(`Outcome.Confidence.${outcome.confidence}`)
                : t("Outcome.PendingValue"),
              note: t("Outcome.ConfidenceNote"),
            }}
            boundary={{
              label: t("Outcome.BoundaryLabel"),
              value: t(`Confidentiality.${caseStudy.confidentiality}`),
              note: t("Outcome.BoundaryNote"),
            }}
          />
        </Container>
      </Section>

      <ProjectNavigation
        label={t("Navigation.Label")}
        previous={{
          href: "/projects",
          label: t("Navigation.PreviousLabel"),
          title: t("Navigation.PreviousTitle"),
        }}
        next={{
          href: "/contact",
          label: t("Navigation.NextLabel"),
          title: t("Navigation.NextTitle"),
        }}
      />
    </CaseStudyShell>
  );
}
