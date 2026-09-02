import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { DecisionRecord } from "@/components/v3/projects/case-study/DecisionRecord";
import { DossierTransition } from "@/components/v3/projects/case-study/DossierTransition";

const modules = ["Cases", "Relationships", "Finance", "Reporting"] as const;
const decisions = ["Desktop", "Data", "Delivery"] as const;

export async function OscarArchitectureChapter() {
  const t = await getTranslations("V3.Oscar.Architecture");

  return (
    <>
      <Section tone="blue" spacing="none" className="overflow-hidden">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-yellow">{t("Intro.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-white/45">02 / SYSTEM VIEW</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-balance">
                {t("Intro.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-white/68">
                {t("Intro.Description")}
              </p>
            </div>
          </div>

          <figure className="mt-14 border-[3px] border-[#171714] bg-v3-paper text-v3-ink shadow-[12px_14px_0_rgb(23_23_20/0.28)]">
            <div className="grid lg:grid-cols-[0.34fr_1fr_0.42fr]">
              <div className="border-b-2 border-[#171714] p-6 lg:border-b-0 lg:border-e-2">
                <p className="v3-technical text-v3-blue">01 / {t("Map.People.Label")}</p>
                <h3 className="mt-10 font-v3-display text-2xl font-bold tracking-[-0.04em]">
                  {t("Map.People.Title")}
                </h3>
                <p className="mt-3 font-v3-text text-sm leading-6 text-v3-muted">
                  {t("Map.People.Description")}
                </p>
              </div>

              <div className="border-b-2 border-[#171714] bg-v3-surface p-6 lg:border-b-0 lg:border-e-2">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="v3-technical text-v3-coral">02 / {t("Map.Application.Label")}</p>
                    <h3 className="mt-4 font-v3-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.055em]">
                      {t("Map.Application.Title")}
                    </h3>
                  </div>
                  <span className="border border-v3-line bg-v3-yellow px-3 py-2 v3-technical text-[#171714]">
                    .NET 8 / WPF
                  </span>
                </div>

                <ol className="mt-10 grid border-s border-t border-v3-line sm:grid-cols-2">
                  {modules.map((module, index) => (
                    <li
                      key={module}
                      className="min-h-32 border-b border-e border-v3-line p-4"
                    >
                      <span className="v3-technical text-v3-blue">
                        M-{String(index + 1).padStart(2, "0")}
                      </span>
                      <h4 className="mt-6 font-v3-display text-lg font-bold tracking-[-0.03em]">
                        {t(`Map.Modules.${module}.Title`)}
                      </h4>
                      <p className="mt-2 font-v3-text text-xs leading-5 text-v3-muted">
                        {t(`Map.Modules.${module}.Description`)}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-5 grid grid-cols-[auto_1fr_auto] items-center gap-3 v3-technical text-v3-muted">
                  <span>EF CORE</span>
                  <span className="h-px bg-v3-line" aria-hidden="true" />
                  <span>DATA ACCESS</span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-1">
                <div className="border-b-2 border-[#171714] p-6 sm:border-b-0 sm:border-e-2 lg:border-b-2 lg:border-e-0">
                  <p className="v3-technical text-v3-blue">03 / {t("Map.Storage.Label")}</p>
                  <h3 className="mt-8 font-v3-display text-2xl font-bold tracking-[-0.04em]">
                    SQLite
                  </h3>
                  <p className="mt-3 font-v3-text text-sm leading-6 text-v3-muted">
                    {t("Map.Storage.Description")}
                  </p>
                  <p className="mt-5 border-t border-v3-line pt-4 v3-technical text-v3-muted">
                    {t("Map.Storage.Support")}
                  </p>
                </div>
                <div className="bg-v3-yellow p-6 text-[#171714]">
                  <p className="v3-technical text-black/50">04 / {t("Map.Delivery.Label")}</p>
                  <h3 className="mt-8 font-v3-display text-2xl font-bold tracking-[-0.04em]">
                    {t("Map.Delivery.Title")}
                  </h3>
                  <p className="mt-3 font-v3-text text-sm leading-6 text-black/60">
                    {t("Map.Delivery.Description")}
                  </p>
                </div>
              </div>
            </div>
            <figcaption className="grid gap-2 border-t-2 border-[#171714] px-6 py-5 font-v3-text text-xs leading-5 text-v3-muted sm:grid-cols-[auto_1fr] sm:gap-6">
              <span className="v3-technical font-bold text-v3-blue">FIG. 03</span>
              <span>{t("Map.Caption")}</span>
            </figcaption>
          </figure>
        </Container>
      </Section>

      <Section tone="paper" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 border-b border-v3-line pb-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-blue">{t("Decisions.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-v3-muted">ADR / 001—003</p>
            </div>
            <h2 className="font-v3-display text-[clamp(2.8rem,5.5vw,5.5rem)] font-bold leading-[0.94] tracking-[-0.06em] text-balance">
              {t("Decisions.Title")}
            </h2>
          </div>

          <div className="mt-4">
            {decisions.map((decision, index) => (
              <DecisionRecord
                key={decision}
                index={index + 1}
                status={t(`Decisions.${decision}.Status`)}
                title={t(`Decisions.${decision}.Title`)}
                labels={{
                  context: t("Decisions.Fields.Context"),
                  choice: t("Decisions.Fields.Choice"),
                  tradeoff: t("Decisions.Fields.Tradeoff"),
                }}
                context={t(`Decisions.${decision}.Context`)}
                choice={t(`Decisions.${decision}.Choice`)}
                tradeoff={t(`Decisions.${decision}.Tradeoff`)}
                evidence={t(`Decisions.${decision}.Evidence`)}
              />
            ))}
          </div>
        </Container>
      </Section>

      <DossierTransition
        eyebrow={t("Next.Eyebrow")}
        title={t("Next.Title")}
        tone="yellow"
      />
    </>
  );
}
