import Link from "next/link";
import { ArrowUpRight, ShieldAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { Button } from "@/components/v3/ui/Button";
import { ProjectNavigation } from "@/components/v3/projects/case-study/ProjectNavigation";

const decisions = ["Logic", "Layers", "Evidence"] as const;
const roadmap = ["Production", "Trust", "Scale", "Access"] as const;

export async function Base60ConclusionChapter() {
  const t = await getTranslations("V3.Base60.Conclusion");

  return (
    <>
      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-yellow">{t("Current.Eyebrow")}</p>
              <p className="v3-technical mt-4 text-white/40">
                05 / CURRENT STATE
              </p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] leading-[0.92] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Current.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-white/65">
                {t("Current.Description")}
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="border-v3-yellow/45 bg-v3-yellow border p-6 text-[#171714] sm:p-8">
              <p className="v3-label text-black/55">
                {t("Current.StatusLabel")}
              </p>
              <p className="font-v3-display mt-8 max-w-md text-[clamp(2rem,4vw,3.5rem)] leading-none font-bold tracking-[-0.055em]">
                {t("Current.Status")}
              </p>
            </article>
            <aside className="border border-white/20 bg-white/5 p-6 sm:p-8">
              <div className="flex items-start gap-3">
                <ShieldAlert
                  className="text-v3-coral mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
                <div>
                  <p className="v3-label text-v3-coral">
                    {t("Current.BoundaryLabel")}
                  </p>
                  <p className="font-v3-text mt-5 max-w-3xl text-sm leading-7 text-white/65">
                    {t("Current.Boundary")}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="border-v3-line grid gap-8 border-b pb-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-coral">{t("Decisions.Eyebrow")}</p>
              <p className="v3-technical text-v3-muted mt-4">
                DECISION RECORD / 001—003
              </p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Decisions.Title")}
              </h2>
              <p className="v3-body text-v3-muted mt-7 max-w-3xl">
                {t("Decisions.Description")}
              </p>
            </div>
          </header>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {decisions.map((decision, index) => (
              <article
                key={decision}
                className="border-v3-ink bg-v3-surface border-[2px] p-6 shadow-[7px_8px_0_#171714]"
              >
                <span className="font-v3-mono text-v3-blue text-xs font-bold">
                  D-{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-v3-display mt-10 text-3xl leading-none font-bold tracking-[-0.05em] rtl:tracking-normal">
                  {t(`Decisions.Items.${decision}.Title`)}
                </h3>
                <p className="font-v3-text text-v3-muted mt-5 text-sm leading-7">
                  {t(`Decisions.Items.${decision}.Description`)}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="yellow" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)] text-[#171714]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-black/55">{t("Roadmap.Eyebrow")}</p>
              <p className="v3-technical mt-4 text-black/40">
                NOT SHIPPED / NEXT BUILD
              </p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Roadmap.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-black/65">
                {t("Roadmap.Description")}
              </p>
            </div>
          </div>
          <ol className="mt-14 border-t border-black/25">
            {roadmap.map((item, index) => (
              <li
                key={item}
                className="grid gap-5 border-b border-black/25 py-8 lg:grid-cols-[5rem_0.72fr_1.28fr] lg:items-start lg:gap-10"
              >
                <span className="font-v3-mono text-xs font-bold text-black/45">
                  N-{String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-v3-display text-[clamp(1.8rem,3vw,3rem)] leading-none font-bold tracking-[-0.045em]">
                  {t(`Roadmap.Items.${item}.Title`)}
                </h3>
                <p className="font-v3-text text-sm leading-7 text-black/60">
                  {t(`Roadmap.Items.${item}.Description`)}
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
          href: "/projects/image-cryptography-system-en",
          label: t("Navigation.PreviousLabel"),
          title: t("Navigation.PreviousTitle"),
        }}
        next={{
          href: "/projects",
          label: t("Navigation.NextLabel"),
          title: t("Navigation.NextTitle"),
        }}
      />
    </>
  );
}
