import { ShieldAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import {
  CaseStudyGallery,
} from "@/components/v3/projects/CaseStudyGallery";
import { DossierTransition } from "@/components/v3/projects/case-study/DossierTransition";
import type { V3Project } from "@/lib/projects";
import { resolveProjectGallery } from "@/lib/project-gallery";

const metrics = [
  { key: "Entropy", value: "7.99910408", unit: "bits" },
  { key: "NPCR", value: "99.631", unit: "%" },
  { key: "UACI", value: "34.5036", unit: "%" },
  { key: "Horizontal", value: "−0.00228", unit: "r" },
  { key: "Vertical", value: "−0.01008", unit: "r" },
  { key: "PSNR", value: "≈ 8.63", unit: "dB" },
  { key: "SSIM", value: "1.0", unit: "SSIM" },
  { key: "Time", value: "0.7–0.8", unit: "sec" },
] as const;

const readings = ["Randomness", "Sensitivity", "Recovery", "Runtime"] as const;
const limitations = ["Dataset", "Reproduction", "Audit"] as const;

export async function ImageCryptographyEvidenceChapter({
  project,
}: {
  project: V3Project;
}) {
  const t = await getTranslations("V3.ImageCryptography.Evidence");
  const galleryItems = await resolveProjectGallery(project);

  return (
    <>
      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-coral">{t("Intro.Eyebrow")}</p>
              <p className="v3-technical mt-4 text-white/40">
                02 / REPORTED RESULTS
              </p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] leading-[0.92] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Intro.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-white/60">
                {t("Intro.Description")}
              </p>
            </div>
          </div>

          <aside className="mt-14 grid gap-4 border border-white/20 bg-white/5 p-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
            <p className="v3-label text-v3-yellow">
              {t("Intro.BoundaryLabel")}
            </p>
            <p className="font-v3-text text-sm leading-7 text-white/60">
              {t("Intro.Boundary")}
            </p>
          </aside>
        </Container>
      </Section>

      <Section tone="surface" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="border-v3-line grid gap-8 border-b pb-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-blue">{t("Metrics.Eyebrow")}</p>
              <p className="v3-technical text-v3-muted mt-4">
                08 REPORTED SIGNALS
              </p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Metrics.Title")}
              </h2>
              <p className="v3-body text-v3-muted mt-7 max-w-3xl">
                {t("Metrics.Description")}
              </p>
            </div>
          </header>

          <dl className="border-v3-line mt-10 grid border-s border-t sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.key}
                className={`border-v3-line min-h-60 border-e border-b p-6 ${index === 0 ? "bg-v3-yellow sm:col-span-2 xl:col-span-1" : "bg-v3-paper"}`}
              >
                <dt className="font-v3-mono text-v3-blue text-[0.68rem] font-bold tracking-[0.15em] uppercase">
                  M-{String(index + 1).padStart(2, "0")} /{" "}
                  {t(`Metrics.Items.${metric.key}.Label`)}
                </dt>
                <dd className="mt-9">
                  <span
                    dir="ltr"
                    className="font-v3-display block text-[clamp(2.5rem,4vw,4.2rem)] leading-none font-bold tracking-[-0.06em]"
                  >
                    {metric.value}
                  </span>
                  <span className="font-v3-mono text-v3-coral mt-2 block text-xs font-bold tracking-[0.12em] uppercase">
                    {metric.unit}
                  </span>
                </dd>
                <p className="font-v3-text text-v3-muted mt-5 text-sm leading-6">
                  {t(`Metrics.Items.${metric.key}.Note`)}
                </p>
              </div>
            ))}
          </dl>

          <p className="font-v3-text text-v3-muted mt-5 flex gap-3 text-xs leading-6">
            <ShieldAlert
              className="text-v3-coral mt-0.5 size-4 shrink-0"
              aria-hidden="true"
            />
            {t("Metrics.SourceNote")}
          </p>
        </Container>
      </Section>

      <Section tone="yellow" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <p className="v3-label text-black/55">{t("Reading.Eyebrow")}</p>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Reading.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-black/65">
                {t("Reading.Description")}
              </p>
            </div>
          </div>

          <div className="mt-14 border-t border-black/25">
            {readings.map((item, index) => (
              <article
                key={item}
                className="grid gap-5 border-b border-black/25 py-7 md:grid-cols-[4rem_0.72fr_1.14fr_1.14fr] md:gap-8"
              >
                <span className="font-v3-mono text-xs font-bold text-black/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-v3-display text-2xl font-bold tracking-[-0.04em] rtl:tracking-normal">
                  {t(`Reading.Items.${item}.Title`)}
                </h3>
                <div>
                  <p className="v3-label text-v3-blue">
                    {t("Reading.SupportsLabel")}
                  </p>
                  <p className="font-v3-text mt-3 text-sm leading-6 text-black/65">
                    {t(`Reading.Items.${item}.Supports`)}
                  </p>
                </div>
                <div className="border-s border-black/25 ps-5">
                  <p className="v3-label text-v3-coral">
                    {t("Reading.LimitLabel")}
                  </p>
                  <p className="font-v3-text mt-3 text-sm leading-6 text-black/65">
                    {t(`Reading.Items.${item}.Limit`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <p className="v3-label text-v3-coral">{t("Artifact.Eyebrow")}</p>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Artifact.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-white/60">
                {t("Artifact.Description")}
              </p>
            </div>
          </header>

          <div className="mt-14">
            <CaseStudyGallery
              items={galleryItems}
              label={t("Artifact.Label")}
              previousLabel={t("Artifact.Previous")}
              nextLabel={t("Artifact.Next")}
              slideLabel={t("Artifact.Slide")}
            />
          </div>
        </Container>
      </Section>

      <Section tone="coral" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <p className="v3-label text-black/55">{t("Limits.Eyebrow")}</p>
            <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
              {t("Limits.Title")}
            </h2>
          </div>

          <ol className="mt-14 grid border-s border-t border-black/25 lg:grid-cols-3">
            {limitations.map((item, index) => (
              <li
                key={item}
                className="min-h-52 border-e border-b border-black/25 p-6"
              >
                <span className="font-v3-mono text-xs font-bold text-black/45">
                  L-{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-v3-display mt-9 text-2xl font-bold tracking-[-0.04em] rtl:tracking-normal">
                  {t(`Limits.Items.${item}.Title`)}
                </h3>
                <p className="font-v3-text mt-3 text-sm leading-6 text-black/65">
                  {t(`Limits.Items.${item}.Description`)}
                </p>
              </li>
            ))}
          </ol>
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
