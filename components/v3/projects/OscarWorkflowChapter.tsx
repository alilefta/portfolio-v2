import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { DossierTransition } from "@/components/v3/projects/case-study/DossierTransition";

const comparisonRows = ["Record", "Status", "Finance", "Reporting"] as const;
const workflowSteps = [
  "Intake",
  "CaseRecord",
  "ProductionState",
  "FinancialRecord",
  "Reporting",
] as const;
const constraints = ["Desktop", "Local", "Roles", "Delivery"] as const;

export async function OscarWorkflowChapter() {
  const t = await getTranslations("V3.Oscar.Workflow");

  return (
    <>
      <Section tone="paper" className="border-b border-v3-line">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.55fr)] lg:gap-24">
            <div>
              <p className="v3-label text-v3-blue">{t("Context.Eyebrow")}</p>
              <h2 className="v3-heading mt-6 max-w-5xl text-balance">
                {t("Context.Title")}
              </h2>
              <p className="v3-body mt-8 max-w-3xl text-v3-muted">
                {t("Context.Intro")}
              </p>
            </div>

            <aside className="self-end border-s-4 border-v3-blue ps-6 lg:mb-2">
              <p className="v3-technical font-bold text-v3-blue">
                {t("Context.EvidenceLabel")}
              </p>
              <p className="mt-4 font-v3-text text-sm leading-7 text-v3-muted">
                {t("Context.Evidence")}
              </p>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="none" className="border-b border-v3-line">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-6 border-b border-v3-line pb-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <p className="v3-label text-v3-blue">{t("Comparison.Eyebrow")}</p>
            <h2 className="font-v3-display text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-balance">
              {t("Comparison.Title")}
            </h2>
          </div>

          <div className="mt-10 grid border border-v3-line lg:grid-cols-2">
            <article className="bg-v3-paper p-[clamp(1.5rem,4vw,3.5rem)] lg:border-e lg:border-v3-line">
              <p className="v3-technical text-v3-muted">A / {t("Comparison.BeforeLabel")}</p>
              <ol className="mt-10">
                {comparisonRows.map((row, index) => (
                  <li
                    key={row}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-v3-line py-5 first:border-t-0 first:pt-0"
                  >
                    <span className="v3-technical text-v3-muted" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-v3-display text-xl font-bold tracking-[-0.03em]">
                        {t(`Comparison.Before.${row}.Title`)}
                      </h3>
                      <p className="mt-2 font-v3-text text-sm leading-6 text-v3-muted">
                        {t(`Comparison.Before.${row}.Description`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>

            <article className="bg-v3-blue p-[clamp(1.5rem,4vw,3.5rem)] text-white">
              <p className="v3-technical text-v3-yellow">B / {t("Comparison.WithLabel")}</p>
              <ol className="mt-10">
                {comparisonRows.map((row, index) => (
                  <li
                    key={row}
                    className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-white/20 py-5 first:border-t-0 first:pt-0"
                  >
                    <span className="v3-technical text-white/50" aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-v3-display text-xl font-bold tracking-[-0.03em]">
                        {t(`Comparison.With.${row}.Title`)}
                      </h3>
                      <p className="mt-2 font-v3-text text-sm leading-6 text-white/65">
                        {t(`Comparison.With.${row}.Description`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </article>
          </div>

          <p className="mt-5 max-w-3xl font-v3-text text-xs leading-6 text-v3-muted">
            {t("Comparison.Qualifier")}
          </p>
        </Container>
      </Section>

      <Section tone="yellow" spacing="none" className="overflow-hidden">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="v3-label text-black/55">{t("Flow.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-black/45">01 → 05</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-balance">
                {t("Flow.Title")}
              </h2>
              <p className="v3-body mt-5 max-w-3xl text-black/60">
                {t("Flow.Description")}
              </p>
            </div>
          </div>

          <ol className="mt-14 grid border-2 border-[#171714] bg-v3-paper text-v3-ink md:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <li
                key={step}
                className="relative min-h-56 border-b-2 border-[#171714] p-5 last:border-b-0 md:border-b-0 md:border-e-2 md:last:border-e-0"
              >
                <span className="v3-technical text-v3-blue">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-10 font-v3-display text-xl font-bold leading-tight tracking-[-0.035em]">
                  {t(`Flow.${step}.Title`)}
                </h3>
                <p className="mt-3 font-v3-text text-sm leading-6 text-v3-muted">
                  {t(`Flow.${step}.Description`)}
                </p>
                {index < workflowSteps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-3 end-6 z-10 grid size-6 place-items-center border-2 border-[#171714] bg-v3-coral font-v3-text text-sm font-bold md:-end-3 md:bottom-auto md:top-6 rtl:md:rotate-180"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="v3-label text-v3-yellow">{t("Constraints.Eyebrow")}</p>
              <h2 className="mt-6 max-w-xl font-v3-display text-[clamp(2.6rem,5vw,5rem)] font-bold leading-[0.95] tracking-[-0.055em] text-balance">
                {t("Constraints.Title")}
              </h2>
            </div>

            <dl className="grid border-s border-white/20 sm:grid-cols-2">
              {constraints.map((constraint, index) => (
                <div
                  key={constraint}
                  className="min-h-52 border-b border-e border-white/20 p-6 sm:[&:nth-last-child(-n+2)]:border-b-0"
                >
                  <dt>
                    <span className="v3-technical text-v3-coral">
                      C-{String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="mt-8 block font-v3-display text-2xl font-bold tracking-[-0.035em]">
                      {t(`Constraints.${constraint}.Title`)}
                    </span>
                  </dt>
                  <dd className="mt-3 font-v3-text text-sm leading-7 text-white/55">
                    {t(`Constraints.${constraint}.Description`)}
                  </dd>
                </div>
              ))}
            </dl>
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
