import Link from "next/link";
import { ArrowDownRight, ArrowLeft, Hammer, TriangleAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Button } from "@/components/v3/ui/Button";
import {
  CaseStudyGallery,
} from "@/components/v3/projects/CaseStudyGallery";
import type { V3Project } from "@/lib/projects";
import { resolveProjectGallery } from "@/lib/project-gallery";

type Base60PrologueProps = {
  project: V3Project;
};

export async function Base60Prologue({ project }: Base60PrologueProps) {
  const t = await getTranslations("V3.Base60.Prologue");
  const dossier = ["Status", "Role", "Platform", "Evidence"] as const;
  const galleryItems = await resolveProjectGallery(project);

  return (
    <>
      <section className="relative overflow-hidden bg-[#090d10] text-[#f5f1e8]">
        <div
          aria-hidden="true"
          className="absolute inset-0 [background-image:linear-gradient(to_right,#ffb22e_1px,transparent_1px),linear-gradient(to_bottom,#ffb22e_1px,transparent_1px)] [background-size:5rem_5rem] opacity-[0.16]"
        />
        <div
          aria-hidden="true"
          className="absolute -end-[16rem] top-24 size-[36rem] rounded-full border-[7rem] border-[#ffb22e]/10"
        />

        <Container className="relative py-[clamp(2rem,6vw,5rem)]">
          <Link
            href="/projects"
            className="font-v3-text inline-flex min-h-11 items-center gap-2 text-sm font-bold text-white/60 transition-colors hover:text-[#ffb22e]"
          >
            <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
            {t("Back")}
          </Link>

          <div className="mt-9 grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(26rem,1.28fr)] lg:items-end lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <Hammer className="size-4 text-[#ffb22e]" aria-hidden="true" />
                <p className="v3-label text-[#ffb22e]">{t("Eyebrow")}</p>
              </div>
              <p
                className="font-v3-display mt-8 text-[clamp(5rem,14vw,11rem)] leading-[0.7] font-bold tracking-[-0.1em]"
                aria-hidden="true"
              >
                60<span className="text-[#ffb22e]">.</span>
              </p>
              <h1 className="font-v3-display mt-10 max-w-4xl text-[clamp(2.75rem,5.8vw,5.8rem)] leading-[0.91] font-bold tracking-[-0.065em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Title")}
              </h1>
              <p className="v3-body mt-7 max-w-2xl text-white/65">
                {t("Proposition")}
              </p>
              <Button
                asChild
                size="large"
                className="mt-8 border-[#ffb22e] bg-[#ffb22e] text-[#11100d] shadow-[7px_8px_0_rgb(223_101_75/0.8)] hover:bg-white"
              >
                <Link href="#case-study-start">
                  {t("Enter")} <ArrowDownRight aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="relative w-full lg:mb-2">
              <div
                aria-hidden="true"
                className="absolute -inset-3 translate-x-3 translate-y-3 border-2 border-[#ffb22e]/70 sm:-inset-5"
              />
              <div className="relative bg-[#11161a] p-2 shadow-[16px_18px_0_rgb(255_178_46/0.34)]">
                <CaseStudyGallery
                  items={galleryItems}
                  label={t("Gallery.Label")}
                  previousLabel={t("Gallery.Previous")}
                  nextLabel={t("Gallery.Next")}
                  slideLabel={t("Gallery.Slide")}
                  eager
                />
              </div>
              <div className="bg-v3-coral font-v3-text absolute end-4 -bottom-6 max-w-64 rotate-1 px-4 py-3 text-sm leading-snug font-bold text-[#24100b] shadow-[6px_7px_0_rgb(255_178_46/0.58)]">
                {t("ArtifactNote")}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="case-study-start" className="text-v3-ink bg-[#f3eee2]">
        <Container className="py-[clamp(3.5rem,7vw,6rem)]">
          <div className="mb-8 grid gap-5 border-s-4 border-[#ffb22e] bg-[#fff8e8] p-5 md:grid-cols-[auto_minmax(0,1fr)] md:items-start">
            <TriangleAlert
              className="text-v3-coral size-6"
              aria-hidden="true"
            />
            <div>
              <p className="v3-label text-v3-coral">{t("BoundaryLabel")}</p>
              <p className="font-v3-text text-v3-muted mt-2 max-w-4xl text-sm leading-6">
                {t("Boundary")}
              </p>
            </div>
          </div>

          <dl className="border-v3-line grid border-s border-t sm:grid-cols-2 lg:grid-cols-4">
            {dossier.map((item, index) => (
              <div
                key={item}
                className="border-v3-line min-h-44 border-e border-b p-6"
              >
                <dt className="font-v3-mono text-[0.68rem] font-bold tracking-[0.15em] text-[#9a5a00] uppercase">
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

      <section className="relative overflow-hidden bg-[#ffb22e] text-[#15120d]">
        <div
          aria-hidden="true"
          className="bg-v3-coral/25 absolute inset-y-0 end-[18%] w-28 -skew-x-12"
        />
        <Container className="relative grid min-h-[48svh] gap-8 py-[clamp(4rem,9vw,8rem)] lg:grid-cols-[10rem_minmax(0,1fr)] lg:items-center lg:gap-16">
          <div>
            <p className="v3-label">{t("Cue.Eyebrow")}</p>
            <p className="font-v3-mono mt-3 text-xs tracking-[0.15em] text-black/45 uppercase">
              01—06
            </p>
          </div>
          <div>
            <h2 className="font-v3-display max-w-5xl text-[clamp(3rem,6.6vw,6.8rem)] leading-[0.91] font-bold tracking-[-0.065em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
              {t("Cue.Title")}
            </h2>
            <p className="v3-body mt-7 max-w-3xl text-black/65">
              {t("Cue.Description")}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
