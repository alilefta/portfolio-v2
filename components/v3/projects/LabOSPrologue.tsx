import Link from "next/link";
import { ArrowDownRight, ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Button } from "@/components/v3/ui/Button";
import { CaseStudyGallery, type CaseStudyGalleryItem } from "@/components/v3/projects/CaseStudyGallery";
import type { V3Project } from "@/lib/projects";

type LabOSPrologueProps = {
  project: V3Project;
};

export async function LabOSPrologue({ project }: LabOSPrologueProps) {
  const t = await getTranslations("V3.LabOS.Prologue");
  const caseStudy = project.metadata.case_study;
  const galleryItems: CaseStudyGalleryItem[] = [
    {
      id: "interface-exploration",
      src: caseStudy.hero.src,
      alt: caseStudy.hero.alt,
      caption: caseStudy.hero.caption ?? t("FigureCaption"),
      proves: t("Gallery.Proves"),
      width: 1518,
      height: 1022,
    },
  ];
  const dossier = ["Status", "Role", "Platform", "Access"] as const;

  return (
    <>
      <section className="overflow-hidden bg-v3-blue text-white">
        <Container className="py-[clamp(2rem,6vw,5rem)]">
          <Link href="/projects" className="inline-flex min-h-11 items-center gap-2 font-v3-text text-sm font-bold text-white/70 hover:text-white">
            <ArrowLeft className="size-4 rtl:rotate-180" aria-hidden="true" />
            {t("Back")}
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(28rem,1.18fr)] lg:items-center lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="size-2.5 rotate-12 bg-v3-yellow" aria-hidden="true" />
                <p className="v3-label text-white/65">{t("Eyebrow")}</p>
              </div>
              <p className="mt-8 font-v3-display text-[clamp(4rem,11vw,9rem)] font-bold leading-[0.72] tracking-[-0.09em]">
                LabOS<span className="text-v3-yellow">.</span>
              </p>
              <h1 className="mt-10 max-w-3xl font-v3-display text-[clamp(2.5rem,5.2vw,5rem)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">
                {t("Title")}
              </h1>
              <p className="v3-body mt-7 max-w-2xl text-white/70">{t("Proposition")}</p>
              <Button asChild size="large" className="mt-8 border-v3-yellow bg-v3-yellow text-[#171714] shadow-[7px_8px_0_rgb(23_23_20/0.28)] hover:bg-white">
                <Link href="#case-study-start">
                  {t("Enter")} <ArrowDownRight aria-hidden="true" />
                </Link>
              </Button>
            </div>

            <div className="relative mx-auto w-full max-w-3xl lg:rotate-1">
              <div aria-hidden="true" className="absolute -inset-4 -rotate-2 bg-v3-yellow lg:-inset-6" />
              <div className="relative bg-[#101311] p-2">
                <CaseStudyGallery
                  items={galleryItems}
                  label={t("Gallery.Label")}
                  previousLabel={t("Gallery.Previous")}
                  nextLabel={t("Gallery.Next")}
                  slideLabel={t("Gallery.Slide")}
                  eager
                />
              </div>
              <div className="absolute -bottom-6 end-5 rotate-2 bg-v3-coral px-4 py-3 font-v3-text text-sm font-bold text-[#24100b] shadow-[6px_7px_0_rgb(23_23_20/0.25)]">
                {t("ArtifactNote")}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="case-study-start" className="bg-v3-surface-dark text-[#f5f1e8]">
        <Container>
          <dl className="grid border-x border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {dossier.map((item, index) => (
              <div key={item} className="min-h-40 border-b border-white/15 p-6 sm:border-e lg:border-b-0 lg:last:border-e-0">
                <dt className="v3-technical text-v3-yellow">{String(index + 1).padStart(2, "0")} / {t(`${item}.Label`)}</dt>
                <dd className="mt-5 font-v3-display text-xl font-bold tracking-[-0.035em]">{t(`${item}.Value`)}</dd>
                <p className="mt-2 font-v3-text text-sm text-white/50">{t(`${item}.Note`)}</p>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="bg-v3-paper text-v3-ink">
        <Container className="py-[clamp(4rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[10rem_minmax(0,1fr)]">
            <p className="v3-label text-v3-coral">{t("Cue.Eyebrow")}</p>
            <div>
              <h2 className="v3-heading max-w-4xl text-balance">{t("Cue.Title")}</h2>
              <p className="v3-body mt-7 max-w-3xl text-v3-muted">{t("Cue.Description")}</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
