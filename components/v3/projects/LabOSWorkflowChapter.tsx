import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { DossierTransition } from "@/components/v3/projects/case-study/DossierTransition";

const comparisonItems = ["Records", "People", "Visibility", "Relationships"] as const;
const workflowItems = [
  "Cases",
  "Dentists",
  "Staff",
  "Production",
  "Inventory",
  "Finance",
  "Reporting",
] as const;

export async function LabOSWorkflowChapter() {
  const t = await getTranslations("V3.LabOS.Workflow");

  return (
    <>
      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-coral">{t("Intro.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-white/40">01 / DOMAIN MODEL</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-balance">
                {t("Intro.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-white/60">{t("Intro.Description")}</p>
            </div>
          </div>

          <aside className="mt-14 grid gap-4 border border-white/20 bg-white/5 p-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
            <p className="v3-label text-v3-yellow">{t("Intro.BoundaryLabel")}</p>
            <p className="font-v3-text text-sm leading-7 text-white/60">{t("Intro.Boundary")}</p>
          </aside>
        </Container>
      </Section>

      <Section tone="surface" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="grid gap-8 border-b border-v3-line pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <p className="v3-label text-v3-blue">{t("Comparison.Eyebrow")}</p>
            <div>
              <h2 className="font-v3-display text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">
                {t("Comparison.Title")}
              </h2>
              <div className="mt-7 grid gap-3 text-sm font-bold sm:grid-cols-2">
                <p className="border-s-4 border-v3-coral ps-4 text-v3-muted">{t("Comparison.FragmentedLabel")}</p>
                <p className="border-s-4 border-v3-blue ps-4 text-v3-blue">{t("Comparison.LabOSLabel")}</p>
              </div>
            </div>
          </header>

          <div className="mt-10 border-t border-v3-line">
            {comparisonItems.map((item, index) => (
              <article key={item} className="grid gap-5 border-b border-v3-line py-7 md:grid-cols-[4rem_1fr_2rem_1fr] md:items-start md:gap-8">
                <span className="v3-technical text-v3-muted">{String(index + 1).padStart(2, "0")}</span>
                <p className="font-v3-text text-base leading-7 text-v3-muted">{t(`Comparison.Items.${item}.Before`)}</p>
                <ArrowRight className="hidden size-5 text-v3-coral md:block rtl:rotate-180" aria-hidden="true" />
                <p className="border-s-2 border-v3-blue ps-5 font-v3-text text-base leading-7">{t(`Comparison.Items.${item}.After`)}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="yellow" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <div>
              <p className="v3-label text-black/55">{t("Workflow.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-black/45">07 CONNECTED DOMAINS</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-balance">{t("Workflow.Title")}</h2>
              <p className="v3-body mt-7 max-w-3xl text-black/65">{t("Workflow.Description")}</p>
            </div>
          </div>

          <ol className="mt-14 grid border-y border-black/25 md:grid-cols-2 lg:grid-cols-4">
            {workflowItems.map((item, index) => (
              <li key={item} className="min-h-56 border-b border-black/25 p-6 lg:border-e lg:[&:nth-child(4n)]:border-e-0 lg:[&:nth-last-child(-n+4)]:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0">
                <span className="v3-technical text-black/50">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-10 font-v3-display text-2xl font-bold leading-none tracking-[-0.04em]">{t(`Workflow.Items.${item}.Title`)}</h3>
                <p className="mt-3 font-v3-text text-sm leading-6 text-black/60">{t(`Workflow.Items.${item}.Description`)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <DossierTransition eyebrow={t("Next.Eyebrow")} title={t("Next.Title")} tone="blue" />
    </>
  );
}
