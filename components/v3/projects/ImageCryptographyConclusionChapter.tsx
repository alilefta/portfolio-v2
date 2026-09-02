import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { Button } from "@/components/v3/ui/Button";
import { OutcomePanel } from "@/components/v3/projects/case-study/OutcomePanel";
import { ProjectNavigation } from "@/components/v3/projects/case-study/ProjectNavigation";

const ownership = ["Formulate", "Implement", "Evaluate", "Deliver"] as const;
const futureWork = ["Reproduce", "Benchmark", "Audit", "Extend"] as const;

export async function ImageCryptographyConclusionChapter() {
  const t = await getTranslations("V3.ImageCryptography.Conclusion");

  return (
    <>
      <Section tone="yellow" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-black/55">{t("Outcome.Eyebrow")}</p>
              <p className="v3-technical mt-4 text-black/40">
                04 / OUTCOME RECORD
              </p>
            </div>
            <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] leading-[0.92] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
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
          <header className="border-v3-line grid gap-8 border-b pb-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-blue">{t("Ownership.Eyebrow")}</p>
              <p className="v3-technical text-v3-muted mt-4">
                MODEL → WINDOWS DELIVERY
              </p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Ownership.Title")}
              </h2>
              <p className="v3-body text-v3-muted mt-7 max-w-3xl">
                {t("Ownership.Description")}
              </p>
            </div>
          </header>

          <ol className="border-v3-line mt-10 grid border-s border-t md:grid-cols-2 xl:grid-cols-4">
            {ownership.map((phase, index) => (
              <li
                key={phase}
                className="border-v3-line min-h-72 border-e border-b p-6"
              >
                <span className="font-v3-mono text-v3-coral text-xs font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-v3-display mt-12 text-3xl font-bold tracking-[-0.05em] rtl:tracking-normal">
                  {t(`Ownership.Phases.${phase}.Title`)}
                </h3>
                <p className="font-v3-text text-v3-muted mt-4 text-sm leading-7">
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
              <p className="v3-label text-v3-yellow">{t("Future.Eyebrow")}</p>
              <p className="v3-technical mt-4 text-white/40">
                RESEARCH ROADMAP / NOT SHIPPED
              </p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Future.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-white/60">
                {t("Future.Description")}
              </p>
            </div>
          </div>

          <ol className="mt-14 border-t border-white/20">
            {futureWork.map((item, index) => (
              <li
                key={item}
                className="grid gap-6 border-b border-white/20 py-9 lg:grid-cols-[5rem_0.78fr_1.22fr] lg:items-start lg:gap-10"
              >
                <span className="font-v3-mono text-v3-coral text-xs font-bold">
                  N-{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-v3-display text-[clamp(1.8rem,3vw,3rem)] leading-none font-bold tracking-[-0.045em] rtl:tracking-normal">
                  {t(`Future.Items.${item}.Title`)}
                </h3>
                <p className="font-v3-text text-sm leading-7 text-white/55">
                  {t(`Future.Items.${item}.Description`)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="blue" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <p className="v3-label text-v3-yellow">{t("Closing.Eyebrow")}</p>
          <h2 className="font-v3-display mt-7 max-w-6xl text-[clamp(3.4rem,8vw,8rem)] leading-[0.86] font-bold tracking-[-0.07em] text-balance rtl:leading-[1.08] rtl:tracking-normal">
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
              className="hover:text-v3-blue border-white/45 text-white hover:bg-white"
            >
              <Link href="/projects">{t("Closing.AllProjects")}</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <ProjectNavigation
        label={t("Navigation.Label")}
        previous={{
          href: "/projects/labora-saas-en",
          label: t("Navigation.PreviousLabel"),
          title: t("Navigation.PreviousTitle"),
        }}
        next={{
          href: "/projects/base-60-hardware-foundary-app-en",
          label: t("Navigation.NextLabel"),
          title: t("Navigation.NextTitle"),
        }}
      />
    </>
  );
}
