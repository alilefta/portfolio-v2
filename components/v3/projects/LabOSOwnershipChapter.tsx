import { ArrowRight, LockKeyhole, ShieldCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { DossierTransition } from "@/components/v3/projects/case-study/DossierTransition";

const migrationItems = ["Inventory", "Context", "Cutover", "Verify"] as const;
const challengeItems = ["Tenant", "Identity", "Lifecycle", "Invariants"] as const;
const ownershipPhases = ["Observe", "Model", "Build", "Prove"] as const;

export async function LabOSOwnershipChapter() {
  const t = await getTranslations("V3.LabOS.Ownership");

  return (
    <>
      <Section tone="blue" spacing="none" className="overflow-hidden">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-yellow">{t("Intro.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-white/45">04 / ENGINEERING OWNERSHIP</p>
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
          <header className="grid gap-8 border-b border-v3-line pb-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <p className="v3-label text-v3-coral">{t("Migration.Eyebrow")}</p>
            <div>
              <h2 className="font-v3-display text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">{t("Migration.Title")}</h2>
              <p className="v3-body mt-6 max-w-3xl text-v3-muted">{t("Migration.Description")}</p>
            </div>
          </header>
          <ol className="mt-10 grid border-y border-v3-line md:grid-cols-2 lg:grid-cols-4">
            {migrationItems.map((item, index) => (
              <li key={item} className="min-h-64 border-b border-v3-line p-6 md:[&:nth-last-child(-n+2)]:border-b-0 lg:border-e lg:border-b-0 lg:last:border-e-0">
                <div className="flex items-center justify-between gap-4">
                  <span className="v3-technical text-v3-blue">{String(index + 1).padStart(2, "0")}</span>
                  {index < migrationItems.length - 1 ? <ArrowRight className="size-4 text-v3-coral rtl:rotate-180" aria-hidden="true" /> : <ShieldCheck className="size-4 text-v3-blue" aria-hidden="true" />}
                </div>
                <h3 className="mt-12 font-v3-display text-2xl font-bold tracking-[-0.04em]">{t(`Migration.Items.${item}.Title`)}</h3>
                <p className="mt-3 font-v3-text text-sm leading-6 text-v3-muted">{t(`Migration.Items.${item}.Description`)}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="coral" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)] text-[#24100b]">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <p className="v3-label text-black/55">{t("Challenges.Eyebrow")}</p>
            <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-balance">{t("Challenges.Title")}</h2>
          </div>
          <div className="mt-14 grid border-y border-black/25 md:grid-cols-2">
            {challengeItems.map((item, index) => (
              <article key={item} className="min-h-52 border-b border-black/25 p-6 md:border-e md:[&:nth-child(even)]:border-e-0 md:[&:nth-last-child(-n+2)]:border-b-0">
                <div className="flex items-center justify-between gap-4"><span className="v3-technical text-black/50">C-{String(index + 1).padStart(2, "0")}</span><LockKeyhole className="size-4 text-black/45" aria-hidden="true" /></div>
                <h3 className="mt-10 font-v3-display text-2xl font-bold tracking-[-0.04em]">{t(`Challenges.Items.${item}.Title`)}</h3>
                <p className="mt-3 max-w-xl font-v3-text text-sm leading-6 text-black/65">{t(`Challenges.Items.${item}.Description`)}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="yellow" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)] text-[#171714]">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <p className="v3-label text-black/55">{t("Ownership.Eyebrow")}</p>
            <div><h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-balance">{t("Ownership.Title")}</h2><p className="v3-body mt-7 max-w-3xl text-black/65">{t("Ownership.Description")}</p></div>
          </div>
          <ol className="mt-14 grid border-y border-black/25 md:grid-cols-2 lg:grid-cols-4">
            {ownershipPhases.map((phase, index) => (
              <li key={phase} className="min-h-52 border-b border-black/25 p-6 md:[&:nth-last-child(-n+2)]:border-b-0 lg:border-e lg:border-b-0 lg:last:border-e-0"><span className="v3-technical text-black/45">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-10 font-v3-display text-2xl font-bold tracking-[-0.04em]">{t(`Ownership.Phases.${phase}.Title`)}</h3><p className="mt-3 font-v3-text text-sm leading-6 text-black/65">{t(`Ownership.Phases.${phase}.Description`)}</p></li>
            ))}
          </ol>
        </Container>
      </Section>

      <DossierTransition eyebrow={t("Next.Eyebrow")} title={t("Next.Title")} tone="blue" />
    </>
  );
}
