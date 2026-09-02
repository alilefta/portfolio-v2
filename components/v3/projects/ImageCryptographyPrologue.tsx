import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowLeft, ShieldAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Button } from "@/components/v3/ui/Button";
import type { V3Project } from "@/lib/projects";

type ImageCryptographyPrologueProps = {
  project: V3Project;
};

export async function ImageCryptographyPrologue({
  project,
}: ImageCryptographyPrologueProps) {
  const t = await getTranslations("V3.ImageCryptography.Prologue");
  const caseStudy = project.metadata.case_study;
  const dossier = ["Status", "Role", "Method", "Boundary"] as const;

  return (
    <>
      <section className="relative overflow-hidden bg-[#0b0d0c] text-[#f5f1e8]">
        <div
          aria-hidden="true"
          className="absolute inset-0 [background-image:linear-gradient(to_right,#f5f1e8_1px,transparent_1px),linear-gradient(to_bottom,#f5f1e8_1px,transparent_1px)] [background-size:4rem_4rem] opacity-[0.11]"
        />
        <div
          aria-hidden="true"
          className="border-v3-blue/45 absolute -end-28 top-20 size-80 rounded-full border-[3rem] sm:size-[30rem]"
        />

        <Container className="relative py-[clamp(2rem,6vw,5rem)]">
          <Link
            href="/projects"
            className="font-v3-text hover:text-v3-yellow inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white/65 transition-colors"
          >
            <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
            {t("Back")}
          </Link>

          <div className="mt-10 grid gap-12 xl:grid-cols-[minmax(0,0.78fr)_minmax(34rem,1.22fr)] xl:items-end xl:gap-14">
            <div className="relative z-10">
              <div className="flex items-center gap-4">
                <span className="bg-v3-coral h-px w-12" aria-hidden="true" />
                <p className="v3-label text-v3-coral">{t("Eyebrow")}</p>
              </div>

              <p
                className="font-v3-mono text-v3-yellow mt-9 text-[clamp(4.4rem,12vw,10rem)] leading-[0.72] font-bold tracking-[-0.09em]"
                aria-hidden="true"
              >
                5D
              </p>
              <h1 className="font-v3-display mt-10 max-w-4xl text-[clamp(2.7rem,5.7vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.065em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Title")}
              </h1>
              <p className="v3-body mt-7 max-w-2xl text-white/65">
                {t("Proposition")}
              </p>

              <Button
                asChild
                size="large"
                className="border-v3-coral bg-v3-coral mt-8 text-[#24100b] shadow-[7px_8px_0_rgb(245_209_67/0.9)] hover:bg-white"
              >
                <Link href="#case-study-start">
                  {t("Enter")}
                  <ArrowDownRight aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <figure className="relative w-full xl:mb-3">
              <div
                className="border-v3-yellow absolute -inset-3 translate-x-3 translate-y-3 border-2 sm:-inset-5"
                aria-hidden="true"
              />
              <div className="relative border-2 border-white/70 bg-black p-2 shadow-[16px_18px_0_rgb(36_80_255/0.8)]">
                <div className="relative aspect-[1309/806] overflow-hidden bg-black">
                  <Image
                    src={caseStudy.hero.src}
                    alt={caseStudy.hero.alt}
                    fill
                    loading="eager"
                    fetchPriority="high"
                    sizes="(min-width: 1280px) 56vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="font-v3-mono flex min-h-14 items-center justify-between gap-4 px-2 pt-2 text-[0.68rem] tracking-[0.13em] text-white/50 uppercase">
                  <span>{t("FigureCaption")}</span>
                  <span aria-hidden="true">PLATE / 01</span>
                </figcaption>
              </div>
              <div className="bg-v3-yellow font-v3-text absolute end-4 -bottom-6 max-w-[15rem] -rotate-1 px-4 py-3 text-sm leading-snug font-bold text-[#171714] shadow-[6px_7px_0_rgb(36_80_255/0.65)]">
                {t("ArtifactNote")}
              </div>
            </figure>
          </div>
        </Container>
      </section>

      <section id="case-study-start" className="bg-v3-paper text-v3-ink">
        <Container className="py-[clamp(3rem,6vw,5rem)]">
          <div className="border-v3-coral bg-v3-coral/10 mb-7 flex items-start gap-3 border-s-4 p-4 sm:max-w-3xl">
            <ShieldAlert
              className="text-v3-coral mt-0.5 size-5 shrink-0"
              aria-hidden="true"
            />
            <p className="font-v3-text text-v3-muted text-sm leading-6">
              {t("ResearchBoundary")}
            </p>
          </div>

          <dl className="border-v3-line grid border-s border-t sm:grid-cols-2 lg:grid-cols-4">
            {dossier.map((item, index) => (
              <div
                key={item}
                className="border-v3-line min-h-44 border-e border-b p-6"
              >
                <dt className="font-v3-mono text-v3-blue text-[0.68rem] font-bold tracking-[0.15em] uppercase">
                  {String(index + 1).padStart(2, "0")} / {t(`${item}.Label`)}
                </dt>
                <dd className="font-v3-display mt-7 text-xl leading-tight font-bold tracking-[-0.035em] rtl:tracking-normal">
                  {t(`${item}.Value`)}
                </dd>
                <p className="font-v3-text text-v3-muted mt-2 text-sm leading-6">
                  {t(`${item}.Note`)}
                </p>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-v3-blue relative overflow-hidden text-white">
        <div
          aria-hidden="true"
          className="bg-v3-yellow/70 absolute inset-y-0 end-[12%] w-px rotate-[17deg]"
        />
        <Container className="relative grid min-h-[50svh] gap-10 py-[clamp(4rem,9vw,8rem)] lg:grid-cols-[10rem_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <p className="v3-label text-v3-yellow">{t("Cue.Eyebrow")}</p>
            <p className="font-v3-mono mt-3 text-xs tracking-[0.15em] text-white/45 uppercase">
              01—04
            </p>
          </div>
          <div>
            <h2 className="font-v3-display max-w-5xl text-[clamp(3rem,6.6vw,6.8rem)] leading-[0.91] font-bold tracking-[-0.065em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
              {t("Cue.Title")}
            </h2>
            <p className="v3-body mt-7 max-w-3xl text-white/65">
              {t("Cue.Description")}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
