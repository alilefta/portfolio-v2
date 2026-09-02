import { ArrowRight, Check, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { DecisionRecord } from "@/components/v3/projects/case-study/DecisionRecord";
import { DossierTransition } from "@/components/v3/projects/case-study/DossierTransition";

const trustSteps = ["Identity", "Organization", "Permission", "Resource"] as const;
const decisions = ["Organization", "Permissions", "Staff"] as const;

export async function LabOSArchitectureChapter() {
  const t = await getTranslations("V3.LabOS.Architecture");

  return (
    <>
      <Section tone="blue" spacing="none" className="overflow-hidden">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-yellow">{t("Intro.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-white/45">02 / TRUST ARCHITECTURE</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-balance">{t("Intro.Title")}</h2>
              <p className="v3-body mt-7 max-w-3xl text-white/70">{t("Intro.Description")}</p>
            </div>
          </div>

          <aside className="mt-14 grid gap-4 border border-white/20 bg-white/5 p-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
            <p className="v3-label text-v3-yellow">{t("Intro.BoundaryLabel")}</p>
            <p className="font-v3-text text-sm leading-7 text-white/65">{t("Intro.Boundary")}</p>
          </aside>
        </Container>
      </Section>

      <Section tone="surface" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="grid gap-8 border-b border-v3-line pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="v3-label text-v3-coral">{t("Map.Eyebrow")}</p>
            <h2 className="font-v3-display text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">{t("Map.Title")}</h2>
          </header>

          <ol className="mt-10 grid border-y border-v3-line md:grid-cols-2 lg:grid-cols-4">
            {trustSteps.map((step, index) => (
              <li key={step} className="relative min-h-64 border-b border-v3-line p-6 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 lg:border-e lg:border-b-0 lg:last:border-e-0">
                <div className="flex items-center justify-between gap-4">
                  <span className="v3-technical text-v3-blue">{String(index + 1).padStart(2, "0")}</span>
                  {index < trustSteps.length - 1 ? <ArrowRight className="hidden size-4 text-v3-coral lg:block rtl:rotate-180" aria-hidden="true" /> : <Check className="size-4 text-v3-blue" aria-hidden="true" />}
                </div>
                <h3 className="mt-12 font-v3-display text-3xl font-bold tracking-[-0.05em]">{t(`Map.Steps.${step}.Title`)}</h3>
                <p className="mt-3 font-v3-text text-sm leading-6 text-v3-muted">{t(`Map.Steps.${step}.Description`)}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 flex gap-3 font-v3-text text-xs leading-6 text-v3-muted"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-v3-blue" aria-hidden="true" />{t("Map.Caption")}</p>
        </Container>
      </Section>

      <Section tone="paper" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 border-b border-v3-line pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-blue">{t("Decisions.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-v3-muted">ADR / 001—003</p>
            </div>
            <h2 className="font-v3-display text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">{t("Decisions.Title")}</h2>
          </div>
          <div className="mt-4">
            {decisions.map((decision, index) => (
              <DecisionRecord
                key={decision}
                index={index + 1}
                status={t(`Decisions.${decision}.Status`)}
                title={t(`Decisions.${decision}.Title`)}
                labels={{ context: t("Decisions.Fields.Context"), choice: t("Decisions.Fields.Choice"), tradeoff: t("Decisions.Fields.Tradeoff") }}
                context={t(`Decisions.${decision}.Context`)}
                choice={t(`Decisions.${decision}.Choice`)}
                tradeoff={t(`Decisions.${decision}.Tradeoff`)}
                evidence={t(`Decisions.${decision}.Evidence`)}
              />
            ))}
          </div>
        </Container>
      </Section>

      <DossierTransition eyebrow={t("Next.Eyebrow")} title={t("Next.Title")} tone="yellow" />
    </>
  );
}
