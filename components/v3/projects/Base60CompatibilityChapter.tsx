import {
  ArrowRight,
  Brackets,
  Check,
  Cpu,
  Database,
  Gauge,
  Layers3,
  LockKeyhole,
  PlugZap,
  Ruler,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { DossierTransition } from "@/components/v3/projects/case-study/DossierTransition";

const rules = [
  { key: "Socket", icon: Cpu },
  { key: "Memory", icon: Layers3 },
  { key: "Power", icon: PlugZap },
  { key: "Clearance", icon: Ruler },
  { key: "Thermal", icon: Gauge },
  { key: "Storage", icon: Database },
] as const;

const layers = ["Input", "Resolver", "State", "Scene"] as const;

export async function Base60CompatibilityChapter() {
  const t = await getTranslations("V3.Base60.Compatibility");

  return (
    <>
      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-[#ffb22e]">{t("Intro.Eyebrow")}</p>
              <p className="v3-technical mt-4 text-white/40">
                02 / COMPATIBILITY
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
          </header>

          <div className="mt-14 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="border border-white/20 bg-[#12181b] p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-5">
                <p className="v3-label text-[#ffb22e]">{t("Model.Label")}</p>
                <Brackets
                  className="size-5 text-[#ffb22e]"
                  aria-hidden="true"
                />
              </div>
              <p className="font-v3-mono mt-7 text-sm leading-7 text-white/55">
                {t("Model.Description")}
              </p>
              <div className="mt-8 border border-[#ffb22e]/35 bg-[#0a0e10] p-5">
                <p className="font-v3-mono text-xs tracking-[0.12em] text-white/45 uppercase">
                  resolveCompatibility(manifest)
                </p>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="flex items-center gap-3 border border-emerald-400/25 bg-emerald-400/5 p-3">
                    <Check
                      className="size-4 text-emerald-300"
                      aria-hidden="true"
                    />
                    <span className="font-v3-mono text-xs text-emerald-200">
                      {t("Model.Valid")}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 border border-red-400/30 bg-red-400/5 p-3">
                    <TriangleAlert
                      className="size-4 text-red-300"
                      aria-hidden="true"
                    />
                    <span className="font-v3-mono text-xs text-red-200">
                      {t("Model.Invalid")}
                    </span>
                  </div>
                </div>
              </div>
              <p className="font-v3-text mt-5 text-sm leading-6 text-white/45">
                {t("Model.Note")}
              </p>
            </div>

            <div className="border border-[#ffb22e]/35 bg-[#ffb22e] p-6 text-[#15120d] sm:p-8">
              <p className="v3-label text-black/55">{t("Question.Label")}</p>
              <h3 className="font-v3-display mt-7 max-w-xl text-[clamp(2rem,4vw,3.8rem)] leading-[0.96] font-bold tracking-[-0.055em] rtl:leading-[1.12] rtl:tracking-normal">
                {t("Question.Title")}
              </h3>
              <p className="font-v3-text mt-6 max-w-xl text-base leading-7 text-black/65">
                {t("Question.Description")}
              </p>
              <div className="mt-10 flex items-center gap-3 border-t border-black/20 pt-5">
                <ShieldCheck className="size-5" aria-hidden="true" />
                <span className="font-v3-mono text-xs font-bold tracking-[0.12em] uppercase">
                  {t("Question.Signal")}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="yellow" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-black/55">{t("Rules.Eyebrow")}</p>
              <p className="v3-technical mt-4 text-black/45">6 RULE FAMILIES</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Rules.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-black/65">
                {t("Rules.Description")}
              </p>
            </div>
          </header>

          <ol className="mt-14 grid border-s border-t border-black/25 sm:grid-cols-2 xl:grid-cols-3">
            {rules.map(({ key, icon: Icon }, index) => (
              <li
                key={key}
                className="border-e border-b border-black/25 p-6 sm:min-h-64 sm:p-7"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-v3-mono text-xs font-bold tracking-[0.14em] text-black/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon className="text-v3-coral size-5" aria-hidden="true" />
                </div>
                <h3 className="font-v3-display mt-12 text-2xl font-bold tracking-[-0.04em] rtl:tracking-normal">
                  {t(`Rules.Items.${key}.Title`)}
                </h3>
                <p className="font-v3-text mt-3 text-sm leading-6 text-black/60">
                  {t(`Rules.Items.${key}.Description`)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="surface" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-start">
            <div>
              <p className="v3-label text-v3-blue">{t("Flow.Eyebrow")}</p>
              <p className="v3-technical text-v3-muted mt-4">
                ONE SOURCE OF TRUTH
              </p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Flow.Title")}
              </h2>
              <p className="v3-body text-v3-muted mt-7 max-w-3xl">
                {t("Flow.Description")}
              </p>

              <div className="border-v3-line mt-14 grid border-s border-t md:grid-cols-4">
                {layers.map((layer, index) => (
                  <div
                    key={layer}
                    className="border-v3-line bg-v3-paper relative min-h-56 border-e border-b p-5 sm:p-6"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-v3-mono text-v3-blue text-xs font-bold tracking-[0.14em]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {index < layers.length - 1 ? (
                        <ArrowRight
                          className="text-v3-coral size-4 rtl:rotate-180"
                          aria-hidden="true"
                        />
                      ) : (
                        <LockKeyhole
                          className="text-v3-coral size-4"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                    <h3 className="font-v3-display mt-12 text-2xl font-bold tracking-[-0.04em] rtl:tracking-normal">
                      {t(`Flow.Layers.${layer}.Title`)}
                    </h3>
                    <p className="font-v3-text text-v3-muted mt-3 text-sm leading-6">
                      {t(`Flow.Layers.${layer}.Description`)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-v3-blue mt-8 flex items-start gap-3 border-s-4 bg-white/70 p-5">
                <LockKeyhole
                  className="text-v3-blue mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
                <p className="font-v3-text text-v3-muted text-sm leading-6">
                  {t("Flow.Boundary")}
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
