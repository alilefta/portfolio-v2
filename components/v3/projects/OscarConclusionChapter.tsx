import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { Button } from "@/components/v3/ui/Button";
import { OutcomePanel } from "@/components/v3/projects/case-study/OutcomePanel";
import { ProjectNavigation } from "@/components/v3/projects/case-study/ProjectNavigation";

const ownershipPhases = ["Observe", "Define", "Build", "Deliver"] as const;
const reflections = ["Evidence", "Distribution", "Recovery"] as const;

export async function OscarConclusionChapter() {
  const t = await getTranslations("V3.Oscar.Conclusion");

  return (
    <>
      <Section tone="yellow" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.55fr_1.45fr] lg:items-end">
            <div>
              <p className="v3-label text-black/55">{t("Outcome.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-black/40">04 / OUTCOME RECORD</p>
            </div>
            <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-balance">
              {t("Outcome.Title")}
            </h2>
          </div>

          <div className="mt-14">
            <OutcomePanel
              resultLabel={t("Outcome.ResultLabel")}
              resultLead={t("Outcome.ResultLead")}
              resultAccent={t("Outcome.ResultAccent")}
              description={t("Outcome.Description")}
              confidence={{
                label: t("Outcome.Confidence.Label"),
                value: t("Outcome.Confidence.Value"),
                note: t("Outcome.Confidence.Note"),
              }}
              boundary={{
                label: t("Outcome.Boundary.Label"),
                value: t("Outcome.Boundary.Value"),
                note: t("Outcome.Boundary.Note"),
              }}
            />
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 border-b border-v3-line pb-10 lg:grid-cols-[0.65fr_1.35fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-blue">{t("Ownership.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-v3-muted">DISCOVERY → SUPPORT</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">
                {t("Ownership.Title")}
              </h2>
              <p className="v3-body mt-6 max-w-3xl text-v3-muted">
                {t("Ownership.Description")}
              </p>
            </div>
          </div>

          <ol className="mt-10 grid border-s border-t border-v3-line md:grid-cols-2 lg:grid-cols-4">
            {ownershipPhases.map((phase, index) => (
              <li
                key={phase}
                className="min-h-72 border-b border-e border-v3-line p-6"
              >
                <span className="v3-technical text-v3-coral">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-12 font-v3-display text-3xl font-bold tracking-[-0.045em]">
                  {t(`Ownership.Phases.${phase}.Title`)}
                </h3>
                <p className="mt-4 font-v3-text text-sm leading-7 text-v3-muted">
                  {t(`Ownership.Phases.${phase}.Description`)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-yellow">{t("Reflection.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-white/40">RETROSPECTIVE / NOT SHIPPED CLAIMS</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">
                {t("Reflection.Title")}
              </h2>
              <p className="v3-body mt-6 max-w-3xl text-white/55">
                {t("Reflection.Description")}
              </p>
            </div>
          </div>

          <ol className="mt-12 border-t border-white/20">
            {reflections.map((reflection, index) => (
              <li
                key={reflection}
                className="grid gap-6 border-b border-white/20 py-9 lg:grid-cols-[5rem_0.8fr_1.2fr] lg:items-start lg:gap-10"
              >
                <span className="v3-technical text-v3-coral">
                  R-{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-v3-display text-[clamp(1.8rem,3vw,3rem)] font-bold leading-none tracking-[-0.045em]">
                  {t(`Reflection.Items.${reflection}.Title`)}
                </h3>
                <p className="font-v3-text text-sm leading-7 text-white/55">
                  {t(`Reflection.Items.${reflection}.Description`)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="blue" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <p className="v3-label text-v3-yellow">{t("Closing.Eyebrow")}</p>
          <h2 className="mt-7 max-w-6xl font-v3-display text-[clamp(3.4rem,8vw,8rem)] font-bold leading-[0.86] tracking-[-0.07em] text-balance">
            {t("Closing.Title")}
          </h2>
          <p className="v3-body mt-8 max-w-2xl text-white/65">
            {t("Closing.Description")}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="large"
              className="border-v3-yellow bg-v3-yellow text-[#171714] hover:bg-white"
            >
              <Link href="/contact">
                {t("Closing.Contact")}
                <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="large"
              variant="outline"
              className="border-white/45 text-white hover:bg-white hover:text-v3-blue"
            >
              <Link href="/projects">{t("Closing.AllProjects")}</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <ProjectNavigation
        label={t("Navigation.Label")}
        previous={{
          href: "/projects",
          label: t("Navigation.PreviousLabel"),
          title: t("Navigation.PreviousTitle"),
        }}
        next={{
          href: "/projects/labora-saas-en",
          label: t("Navigation.NextLabel"),
          title: t("Navigation.NextTitle"),
        }}
      />
    </>
  );
}
