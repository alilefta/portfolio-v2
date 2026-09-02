import {
  Activity,
  ArrowRight,
  Boxes,
  Check,
  ClipboardList,
  Database,
  ImagePlus,
  LockKeyhole,
  Radar,
  ShoppingCart,
  TriangleAlert,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { DossierTransition } from "@/components/v3/projects/case-study/DossierTransition";

const surfaces = [
  { key: "Registry", icon: Boxes },
  { key: "Dispatch", icon: ClipboardList },
  { key: "Telemetry", icon: Activity },
] as const;

const ingestSteps = [
  "Identity",
  "Specifications",
  "Allocation",
  "Assets",
] as const;
const dispatchStates = ["Queued", "Review", "Cleared", "Complete"] as const;

export async function Base60OperationsChapter() {
  const t = await getTranslations("V3.Base60.Operations");

  return (
    <>
      <Section tone="surface" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-coral">{t("Intro.Eyebrow")}</p>
              <p className="v3-technical text-v3-muted mt-4">
                03 / OPERATIONS LAYER
              </p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] leading-[0.92] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Intro.Title")}
              </h2>
              <p className="v3-body text-v3-muted mt-7 max-w-3xl">
                {t("Intro.Description")}
              </p>
            </div>
          </header>

          <div className="border-v3-line mt-14 grid border-s border-t md:grid-cols-3">
            {surfaces.map(({ key, icon: Icon }, index) => (
              <article
                key={key}
                className="border-v3-line bg-v3-paper min-h-72 border-e border-b p-6 sm:p-7"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="v3-technical text-v3-blue">
                    0{index + 1} / NODE
                  </span>
                  <Icon className="text-v3-coral size-5" aria-hidden="true" />
                </div>
                <h3 className="font-v3-display mt-14 text-3xl font-bold tracking-[-0.05em] rtl:tracking-normal">
                  {t(`Surfaces.${key}.Title`)}
                </h3>
                <p className="font-v3-text text-v3-muted mt-4 text-sm leading-7">
                  {t(`Surfaces.${key}.Description`)}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
            <div>
              <p className="v3-label text-[#ffb22e]">{t("Ingest.Eyebrow")}</p>
              <h2 className="font-v3-display mt-6 max-w-xl text-[clamp(2.8rem,5.3vw,5.3rem)] leading-[0.94] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Ingest.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-xl text-white/65">
                {t("Ingest.Description")}
              </p>
            </div>

            <div className="border border-white/20 bg-[#0a0e10] p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div className="flex items-center gap-3">
                  <ImagePlus
                    className="size-5 text-[#ffb22e]"
                    aria-hidden="true"
                  />
                  <p className="v3-label text-white/70">
                    {t("Ingest.PanelLabel")}
                  </p>
                </div>
                <span className="font-v3-mono text-[0.62rem] tracking-[0.14em] text-emerald-300 uppercase">
                  {t("Ingest.PanelStatus")}
                </span>
              </div>
              <ol className="mt-5 divide-y divide-white/10">
                {ingestSteps.map((step, index) => (
                  <li
                    key={step}
                    className="grid gap-4 py-5 sm:grid-cols-[3rem_0.7fr_1.3fr_auto] sm:items-center"
                  >
                    <span className="font-v3-mono text-xs text-[#ffb22e]">
                      0{index + 1}
                    </span>
                    <h3 className="font-v3-display text-xl font-bold tracking-[-0.03em] text-white">
                      {t(`Ingest.Steps.${step}.Title`)}
                    </h3>
                    <p className="font-v3-text text-sm leading-6 text-white/50">
                      {t(`Ingest.Steps.${step}.Description`)}
                    </p>
                    <Check
                      className="size-4 text-emerald-300"
                      aria-hidden="true"
                    />
                  </li>
                ))}
              </ol>
              <div className="mt-3 flex items-start gap-3 border-t border-white/15 pt-5">
                <Database
                  className="mt-0.5 size-4 shrink-0 text-[#ffb22e]"
                  aria-hidden="true"
                />
                <p className="font-v3-text text-xs leading-6 text-white/45">
                  {t("Ingest.Note")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="yellow" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-black/55">{t("Dispatch.Eyebrow")}</p>
              <p className="v3-technical mt-4 text-black/45">
                ORDER STATE / 04
              </p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Dispatch.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-black/65">
                {t("Dispatch.Description")}
              </p>
            </div>
          </header>

          <div className="mt-14 border-[3px] border-[#171714] bg-[#171714] p-3 shadow-[10px_12px_0_rgb(223_101_75/0.65)] sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4">
              <div className="flex items-center gap-3 text-white">
                <ShoppingCart
                  className="size-5 text-[#ffb22e]"
                  aria-hidden="true"
                />
                <span className="v3-label">{t("Dispatch.PanelLabel")}</span>
              </div>
              <span className="font-v3-mono text-xs text-white/40">
                {t("Dispatch.DemoLabel")}
              </span>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-4">
              {dispatchStates.map((state, index) => (
                <div
                  key={state}
                  className="min-h-44 border border-white/15 bg-white/[0.04] p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-v3-mono text-xs text-[#ffb22e]">
                      0{index + 1}
                    </span>
                    {index === dispatchStates.length - 1 ? (
                      <Check
                        className="size-4 text-emerald-300"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowRight
                        className="size-4 text-white/30 rtl:rotate-180"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="font-v3-display mt-10 text-2xl font-bold tracking-[-0.04em] text-white">
                    {t(`Dispatch.States.${state}.Title`)}
                  </h3>
                  <p className="font-v3-text mt-3 text-sm leading-6 text-white/50">
                    {t(`Dispatch.States.${state}.Description`)}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-v3-text mt-5 flex items-start gap-3 text-xs leading-6 text-white/45">
              <LockKeyhole
                className="mt-0.5 size-4 shrink-0 text-[#ffb22e]"
                aria-hidden="true"
              />
              {t("Dispatch.Note")}
            </p>
          </div>
        </Container>
      </Section>

      <Section tone="blue" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
            <div>
              <p className="v3-label text-v3-yellow">
                {t("Telemetry.Eyebrow")}
              </p>
              <h2 className="font-v3-display mt-6 max-w-xl text-[clamp(2.8rem,5.3vw,5.3rem)] leading-[0.94] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Telemetry.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-xl text-white/65">
                {t("Telemetry.Description")}
              </p>
            </div>
            <div className="border border-white/20 bg-[#111a2e] p-5 sm:p-7">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
                <div className="flex items-center gap-3">
                  <Radar className="text-v3-yellow size-5" aria-hidden="true" />
                  <p className="v3-label text-white/70">
                    {t("Telemetry.PanelLabel")}
                  </p>
                </div>
                <span className="font-v3-mono text-xs text-white/40">
                  {t("Telemetry.DemoLabel")}
                </span>
              </div>
              <div
                className="mt-8 grid grid-cols-7 items-end gap-2 border-b border-white/15 pb-5 sm:gap-4"
                aria-label={t("Telemetry.ChartLabel")}
              >
                {[42, 58, 36, 74, 52, 88, 64].map((height, index) => (
                  <div
                    key={index}
                    className="bg-v3-yellow/80 min-h-4"
                    style={{ height: `${height}px` }}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div>
                  <p className="v3-technical text-white/40">
                    {t("Telemetry.MetricOne.Label")}
                  </p>
                  <p className="font-v3-display mt-2 text-2xl font-bold text-white">
                    {t("Telemetry.MetricOne.Value")}
                  </p>
                </div>
                <div>
                  <p className="v3-technical text-white/40">
                    {t("Telemetry.MetricTwo.Label")}
                  </p>
                  <p className="font-v3-display mt-2 text-2xl font-bold text-white">
                    {t("Telemetry.MetricTwo.Value")}
                  </p>
                </div>
                <div>
                  <p className="v3-technical text-white/40">
                    {t("Telemetry.MetricThree.Label")}
                  </p>
                  <p className="font-v3-display mt-2 text-2xl font-bold text-white">
                    {t("Telemetry.MetricThree.Value")}
                  </p>
                </div>
              </div>
              <div className="mt-7 flex items-start gap-3 border-t border-white/15 pt-5">
                <TriangleAlert
                  className="text-v3-coral mt-0.5 size-4 shrink-0"
                  aria-hidden="true"
                />
                <p className="font-v3-text text-xs leading-6 text-white/50">
                  {t("Telemetry.Boundary")}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <DossierTransition
        eyebrow={t("Next.Eyebrow")}
        title={t("Next.Title")}
        tone="coral"
      />
    </>
  );
}
