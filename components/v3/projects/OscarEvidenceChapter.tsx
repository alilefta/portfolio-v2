import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { DossierTransition } from "@/components/v3/projects/case-study/DossierTransition";
import type { V3Project } from "@/lib/projects";
import { CaseStudyGallery } from "@/components/v3/projects/CaseStudyGallery";
import { resolveProjectGallery } from "@/lib/project-gallery";

type OscarEvidenceChapterProps = {
  project: V3Project;
};

const visibleProof = ["Navigation", "Action", "Overview", "Scope"] as const;
const evidenceLimits = ["Impact", "Accuracy", "Depth", "Commercial"] as const;
const captureItems = [
  "Dashboard",
  "CaseLifecycle",
  "Finance",
  "Reports",
  "Recovery",
  "Delivery",
] as const;
const protocolItems = ["DemoData", "Consistency", "Redaction", "Caption"] as const;

export async function OscarEvidenceChapter({
  project,
}: OscarEvidenceChapterProps) {
  const t = await getTranslations("V3.Oscar.Evidence");
  const galleryItems = await resolveProjectGallery(project);

  return (
    <>
      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-coral">{t("Intro.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-white/40">03 / ARTIFACT 001</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-balance">
                {t("Intro.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-white/60">
                {t("Intro.Description")}
              </p>
            </div>
          </div>

          <div className="mt-14">
            <CaseStudyGallery
              items={galleryItems}
              label={t("Gallery.Label")}
              previousLabel={t("Gallery.Previous")}
              nextLabel={t("Gallery.Next")}
              slideLabel={t("Gallery.Slide")}
            />
            <div className="mt-4 flex items-center justify-between gap-4 border-x border-b border-white/20 px-5 py-4">
              <span className="v3-technical font-bold text-v3-coral">FIG. 04</span>
              <span className="v3-technical text-v3-yellow">{t("Artifact.Status")}</span>
            </div>
          </div>

          <div className="mt-10 grid border border-white/20 lg:grid-cols-2">
            <article className="border-b border-white/20 p-[clamp(1.5rem,4vw,3.5rem)] lg:border-b-0 lg:border-e">
              <p className="v3-technical text-v3-yellow">A / {t("Inspection.ProvesLabel")}</p>
              <h3 className="mt-6 font-v3-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.05em]">
                {t("Inspection.ProvesTitle")}
              </h3>
              <ul className="mt-10">
                {visibleProof.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[auto_1fr] gap-4 border-t border-white/15 py-5 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-2 size-2 rotate-45 bg-v3-yellow" aria-hidden="true" />
                    <div>
                      <h4 className="font-v3-display text-lg font-bold">
                        {t(`Inspection.Proves.${item}.Title`)}
                      </h4>
                      <p className="mt-2 font-v3-text text-sm leading-6 text-white/50">
                        {t(`Inspection.Proves.${item}.Description`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-v3-coral p-[clamp(1.5rem,4vw,3.5rem)] text-[#24100b]">
              <p className="v3-technical text-black/50">B / {t("Inspection.LimitsLabel")}</p>
              <h3 className="mt-6 font-v3-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.05em]">
                {t("Inspection.LimitsTitle")}
              </h3>
              <ul className="mt-10">
                {evidenceLimits.map((item) => (
                  <li
                    key={item}
                    className="grid grid-cols-[auto_1fr] gap-4 border-t border-black/20 py-5 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-2 size-2 rotate-45 bg-[#24100b]" aria-hidden="true" />
                    <div>
                      <h4 className="font-v3-display text-lg font-bold">
                        {t(`Inspection.Limits.${item}.Title`)}
                      </h4>
                      <p className="mt-2 font-v3-text text-sm leading-6 text-black/60">
                        {t(`Inspection.Limits.${item}.Description`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 border-b border-v3-line pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-blue">{t("Registry.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-v3-muted">01 AVAILABLE / 05 REQUIRED</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">
                {t("Registry.Title")}
              </h2>
              <p className="v3-body mt-6 max-w-3xl text-v3-muted">
                {t("Registry.Description")}
              </p>
            </div>
          </div>

          <ol className="mt-10 border-t border-v3-line">
            {captureItems.map((item, index) => {
              const available = item === "Dashboard";

              return (
                <li
                  key={item}
                  className="grid gap-5 border-b border-v3-line py-7 md:grid-cols-[5rem_0.8fr_1.2fr_auto] md:items-start md:gap-8"
                >
                  <span className="v3-technical text-v3-muted">
                    E-{String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-v3-display text-2xl font-bold tracking-[-0.035em]">
                    {t(`Registry.Items.${item}.Title`)}
                  </h3>
                  <p className="font-v3-text text-sm leading-7 text-v3-muted">
                    {t(`Registry.Items.${item}.Purpose`)}
                  </p>
                  <span
                    className={
                      available
                        ? "w-fit border border-v3-blue bg-v3-blue px-3 py-2 v3-technical text-white"
                        : "w-fit border border-v3-line bg-v3-paper px-3 py-2 v3-technical text-v3-muted"
                    }
                  >
                    {t(available ? "Registry.Available" : "Registry.Required")}
                  </span>
                </li>
              );
            })}
          </ol>

          <aside className="mt-12 grid border-[3px] border-[#171714] bg-v3-yellow text-[#171714] lg:grid-cols-[0.5fr_1.5fr]">
            <div className="border-b-2 border-[#171714] p-7 lg:border-b-0 lg:border-e-2">
              <p className="v3-label text-black/55">{t("Protocol.Eyebrow")}</p>
              <h3 className="mt-6 font-v3-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.05em]">
                {t("Protocol.Title")}
              </h3>
            </div>
            <ol className="grid sm:grid-cols-2">
              {protocolItems.map((item, index) => (
                <li
                  key={item}
                  className="min-h-40 border-b border-black/25 p-6 sm:border-e sm:[&:nth-last-child(-n+2)]:border-b-0 sm:[&:nth-child(even)]:border-e-0"
                >
                  <span className="v3-technical text-black/45">
                    P-{String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-7 font-v3-text text-sm font-bold leading-6">
                    {t(`Protocol.Items.${item}`)}
                  </p>
                </li>
              ))}
            </ol>
          </aside>
        </Container>
      </Section>

      <DossierTransition
        eyebrow={t("Next.Eyebrow")}
        title={t("Next.Title")}
        tone="blue"
      />
    </>
  );
}
