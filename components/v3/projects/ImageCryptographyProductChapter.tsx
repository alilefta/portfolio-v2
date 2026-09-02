import { ArrowRight, Check, PackageCheck } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { DossierTransition } from "@/components/v3/projects/case-study/DossierTransition";

const workflow = ["Configure", "Run", "Inspect", "Export"] as const;
const previewPanels = ["Original", "Encrypted", "SBox", "Decrypted"] as const;
const capabilityGroups = [
  "Experiment",
  "Observe",
  "Operate",
  "Deliver",
] as const;
const capabilityItems = {
  Experiment: ["RGB", "Conditions", "SBoxSize"],
  Observe: ["Previews", "Metrics", "Plots"],
  Operate: ["Async", "Reload", "Themes"],
  Deliver: ["PNG", "Executable", "Resources"],
} as const;
const stack = [
  "Interface",
  "Orchestrator",
  "Numerical",
  "Analysis",
  "Package",
] as const;
const decisions = ["Workspace", "Threading", "Validation"] as const;

export async function ImageCryptographyProductChapter() {
  const t = await getTranslations("V3.ImageCryptography.Product");

  return (
    <>
      <Section tone="surface" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-blue">{t("Intro.Eyebrow")}</p>
              <p className="v3-technical text-v3-muted mt-4">
                03 / DESKTOP INSTRUMENT
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
          </div>

          <aside className="border-v3-line bg-v3-paper mt-14 grid gap-4 border p-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
            <p className="v3-label text-v3-coral">{t("Intro.BoundaryLabel")}</p>
            <p className="font-v3-text text-v3-muted text-sm leading-7">
              {t("Intro.Boundary")}
            </p>
          </aside>
        </Container>
      </Section>

      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <p className="v3-label text-v3-coral">{t("Workspace.Eyebrow")}</p>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Workspace.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-white/60">
                {t("Workspace.Description")}
              </p>
            </div>
          </header>

          <div className="mt-14 border-[3px] border-white/25 bg-[#070807] p-3 shadow-[14px_16px_0_rgb(245_209_67/0.85)] sm:p-5">
            <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-3">
              <div className="flex gap-2">
                <span
                  className="bg-v3-coral size-2.5 rounded-full"
                  aria-hidden="true"
                />
                <span
                  className="bg-v3-yellow size-2.5 rounded-full"
                  aria-hidden="true"
                />
                <span
                  className="bg-v3-blue size-2.5 rounded-full"
                  aria-hidden="true"
                />
              </div>
              <span className="font-v3-mono text-[0.62rem] tracking-[0.14em] text-white/40 uppercase">
                CHAOTIC CRYPTOGRAPHY GUI
              </span>
            </div>

            <div className="mt-3 flex gap-2 border-b border-white/15 pb-3">
              <span className="border-v3-yellow font-v3-text border-b-2 px-3 py-2 text-xs font-bold text-white">
                {t("Workspace.GeneralTab")}
              </span>
              <span className="font-v3-text px-3 py-2 text-xs font-bold text-white/45">
                {t("Workspace.EvaluationTab")}
              </span>
            </div>

            <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {previewPanels.map((panel, index) => (
                <div
                  key={panel}
                  className="border border-white/20 bg-white/[0.04] p-3"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-v3-text text-xs font-bold text-white/75">
                      {t(`Workspace.Panels.${panel}`)}
                    </p>
                    <span className="font-v3-mono text-[0.58rem] text-white/30">
                      0{index + 1}
                    </span>
                  </div>
                  <div
                    className={`mt-3 aspect-square ${panel === "Encrypted" || panel === "SBox" ? "[background-image:repeating-linear-gradient(47deg,#2450ff_0_2px,#ef7f69_2px_4px,#f5d143_4px_6px,#0b0d0c_6px_8px)] opacity-80" : "relative overflow-hidden bg-white/8"}`}
                  >
                    {panel === "Original" || panel === "Decrypted" ? (
                      <>
                        <div className="absolute inset-x-[17%] bottom-[22%] h-[18%] bg-white/55" />
                        <div className="absolute inset-x-[25%] bottom-[40%] h-[28%] rounded-t-full border-2 border-white/45 bg-white/10" />
                      </>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-3 border-t border-white/15 pt-4 lg:grid-cols-[1.3fr_0.7fr]">
              <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                {["x", "y", "z", "u", "v", "S"].map((value) => (
                  <div
                    key={value}
                    dir="ltr"
                    className="border border-white/15 p-2"
                  >
                    <span className="font-v3-mono text-v3-coral text-[0.6rem]">
                      {value}
                    </span>
                    <span
                      className="mt-2 block h-1 bg-white/15"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 flex-1 overflow-hidden bg-white/10">
                  <span className="bg-v3-yellow block h-full w-3/4" />
                </span>
                <span className="font-v3-mono text-[0.58rem] text-white/40">
                  RUN
                </span>
              </div>
            </div>
          </div>

          <p className="font-v3-text mt-6 text-sm leading-6 text-white/50">
            {t("Workspace.Caption")}
          </p>
        </Container>
      </Section>

      <Section tone="yellow" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <p className="v3-label text-black/55">{t("Workflow.Eyebrow")}</p>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Workflow.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-black/65">
                {t("Workflow.Description")}
              </p>
            </div>
          </div>

          <ol className="mt-14 grid border-s border-t border-black/25 lg:grid-cols-4">
            {workflow.map((step, index) => (
              <li
                key={step}
                className="min-h-64 border-e border-b border-black/25 p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-v3-mono text-xs font-bold text-black/45">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < workflow.length - 1 ? (
                    <ArrowRight
                      className="text-v3-blue size-4 rtl:rotate-180"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <h3 className="font-v3-display mt-12 text-2xl font-bold tracking-[-0.04em] rtl:tracking-normal">
                  {t(`Workflow.Steps.${step}.Title`)}
                </h3>
                <p className="font-v3-text mt-3 text-sm leading-6 text-black/65">
                  {t(`Workflow.Steps.${step}.Description`)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="surface" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="border-v3-line grid gap-8 border-b pb-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <p className="v3-label text-v3-blue">{t("Capabilities.Eyebrow")}</p>
            <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
              {t("Capabilities.Title")}
            </h2>
          </header>

          <div className="border-v3-line mt-10 grid border-s border-t md:grid-cols-2 xl:grid-cols-4">
            {capabilityGroups.map((group, index) => (
              <section
                key={group}
                className="border-v3-line bg-v3-paper border-e border-b p-6"
              >
                <p className="font-v3-mono text-v3-coral text-xs font-bold tracking-[0.13em] uppercase">
                  C-{String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-v3-display mt-8 text-3xl font-bold tracking-[-0.05em] rtl:tracking-normal">
                  {t(`Capabilities.Groups.${group}.Title`)}
                </h3>
                <ul className="mt-7 space-y-4">
                  {capabilityItems[group].map((item) => (
                    <li
                      key={item}
                      className="font-v3-text text-v3-muted flex gap-3 text-sm leading-6"
                    >
                      <Check
                        className="text-v3-blue mt-1 size-4 shrink-0"
                        aria-hidden="true"
                      />
                      {t(`Capabilities.Groups.${group}.Items.${item}`)}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="blue" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-10 lg:grid-cols-[0.62fr_1.38fr] lg:items-start">
            <div>
              <p className="v3-label text-v3-yellow">{t("Stack.Eyebrow")}</p>
              <h2 className="font-v3-display mt-6 text-[clamp(2.8rem,5.3vw,5.3rem)] leading-[0.94] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Stack.Title")}
              </h2>
              <p className="v3-body mt-7 text-white/65">
                {t("Stack.Description")}
              </p>
            </div>

            <ol className="border-s border-t border-white/20">
              {stack.map((layer, index) => (
                <li
                  key={layer}
                  className="grid gap-4 border-e border-b border-white/20 p-5 sm:grid-cols-[4rem_0.72fr_1.28fr] sm:items-start sm:gap-6"
                >
                  <span className="font-v3-mono text-v3-yellow text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-v3-display text-xl font-bold tracking-[-0.03em] rtl:tracking-normal">
                    {t(`Stack.Layers.${layer}.Title`)}
                  </h3>
                  <p className="font-v3-text text-sm leading-6 text-white/60">
                    {t(`Stack.Layers.${layer}.Description`)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <p className="v3-label text-v3-coral">{t("Decisions.Eyebrow")}</p>
            <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
              {t("Decisions.Title")}
            </h2>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
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

          <aside className="border-v3-ink bg-v3-coral mt-14 grid gap-6 border-[3px] p-7 text-[#24100b] sm:grid-cols-[auto_1fr] sm:items-center sm:gap-9">
            <div className="text-v3-yellow flex size-16 items-center justify-center bg-[#171714]">
              <PackageCheck className="size-8" aria-hidden="true" />
            </div>
            <div>
              <p className="v3-label text-black/55">{t("Package.Eyebrow")}</p>
              <p className="font-v3-display mt-3 text-[clamp(1.8rem,3.5vw,3.2rem)] leading-tight font-bold tracking-[-0.04em] rtl:tracking-normal">
                {t("Package.Title")}
              </p>
              <p className="font-v3-text mt-3 max-w-3xl text-sm leading-6 text-black/65">
                {t("Package.Description")}
              </p>
            </div>
          </aside>
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
