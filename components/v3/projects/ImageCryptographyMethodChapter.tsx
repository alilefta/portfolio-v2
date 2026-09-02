import { ArrowRight, Cpu, ShieldAlert } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { DossierTransition } from "@/components/v3/projects/case-study/DossierTransition";

const equations = [
  "x′ = −10.2x + 12y − sin(u)v",
  "y′ = −5.1y + 30x − 2.5xz − sin(v)x",
  "z′ = −6z + xy + 3sin(x)v",
  "u′ = −u − yz − 5sin(y)x",
  "v′ = −1.1v − 4zu + sin(z)y",
] as const;

const pipeline = ["Seed", "Solve", "SBox", "Transform", "Reverse"] as const;

export async function ImageCryptographyMethodChapter() {
  const t = await getTranslations("V3.ImageCryptography.Method");

  return (
    <>
      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-coral">{t("Intro.Eyebrow")}</p>
              <p className="v3-technical mt-4 text-white/40">01 / METHOD</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] leading-[0.92] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Intro.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-white/60">
                {t("Intro.Description")}
              </p>
            </div>
          </div>

          <aside className="mt-14 grid gap-4 border border-white/20 bg-white/5 p-5 sm:grid-cols-[auto_1fr] sm:items-start sm:gap-6">
            <p className="v3-label text-v3-yellow">
              {t("Intro.BoundaryLabel")}
            </p>
            <p className="font-v3-text text-sm leading-7 text-white/60">
              {t("Intro.Boundary")}
            </p>
          </aside>
        </Container>
      </Section>

      <Section tone="yellow" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="grid gap-8 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <div>
              <p className="v3-label text-black/55">{t("System.Eyebrow")}</p>
              <p className="v3-technical mt-4 text-black/45">
                5 STATE VARIABLES
              </p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("System.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-black/65">
                {t("System.Description")}
              </p>
            </div>
          </header>

          <div className="mt-14 grid border-s border-t border-black/25 lg:grid-cols-[1.35fr_0.65fr]">
            <ol className="grid sm:grid-cols-2">
              {equations.map((equation, index) => (
                <li
                  key={equation}
                  dir="ltr"
                  className="min-h-36 border-e border-b border-black/25 p-5 sm:[&:last-child]:col-span-2"
                >
                  <span className="font-v3-mono text-[0.65rem] font-bold tracking-[0.16em] text-black/45 uppercase">
                    EQ / {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-v3-mono mt-7 overflow-x-auto text-[clamp(0.88rem,1.6vw,1.15rem)] font-bold whitespace-nowrap">
                    {equation}
                  </p>
                </li>
              ))}
            </ol>

            <div className="border-e border-b border-black/25 bg-[#171714] p-6 text-[#f5f1e8] lg:p-8">
              <p className="v3-label text-v3-coral">
                {t("System.SolverLabel")}
              </p>
              <dl className="mt-9 space-y-8">
                <div>
                  <dt className="font-v3-mono text-[0.65rem] tracking-[0.15em] text-white/40 uppercase">
                    {t("System.IntegratorLabel")}
                  </dt>
                  <dd className="font-v3-display mt-2 text-2xl font-bold tracking-[-0.04em]">
                    SciPy solve_ivp
                  </dd>
                </div>
                <div>
                  <dt className="font-v3-mono text-[0.65rem] tracking-[0.15em] text-white/40 uppercase">
                    {t("System.IntervalLabel")}
                  </dt>
                  <dd className="font-v3-mono text-v3-yellow mt-2 text-lg font-bold">
                    t ∈ [0, 10]
                  </dd>
                </div>
                <div>
                  <dt className="font-v3-mono text-[0.65rem] tracking-[0.15em] text-white/40 uppercase">
                    {t("System.StepLabel")}
                  </dt>
                  <dd className="font-v3-mono text-v3-yellow mt-2 text-lg font-bold">
                    Δt ≤ 0.01
                  </dd>
                </div>
              </dl>
              <p className="font-v3-text mt-10 border-t border-white/15 pt-5 text-sm leading-6 text-white/55">
                {t("System.Note")}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="surface" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <header className="border-v3-line grid gap-8 border-b pb-10 lg:grid-cols-[0.58fr_1.42fr] lg:items-end">
            <p className="v3-label text-v3-blue">{t("Pipeline.Eyebrow")}</p>
            <div>
              <h2 className="font-v3-display text-[clamp(2.9rem,5.6vw,5.6rem)] leading-[0.93] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Pipeline.Title")}
              </h2>
              <p className="v3-body text-v3-muted mt-7 max-w-3xl">
                {t("Pipeline.Description")}
              </p>
            </div>
          </header>

          <ol className="border-v3-line mt-10 grid border-s border-t md:grid-cols-2 xl:grid-cols-5">
            {pipeline.map((step, index) => (
              <li
                key={step}
                className="group border-v3-line relative min-h-64 border-e border-b p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-v3-mono text-v3-blue text-xs font-bold tracking-[0.14em]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {index < pipeline.length - 1 ? (
                    <ArrowRight
                      className="text-v3-coral size-4 rtl:rotate-180"
                      aria-hidden="true"
                    />
                  ) : null}
                </div>
                <h3 className="font-v3-display mt-12 text-2xl font-bold tracking-[-0.04em] rtl:tracking-normal">
                  {t(`Pipeline.Steps.${step}.Title`)}
                </h3>
                <p className="font-v3-text text-v3-muted mt-3 text-sm leading-6">
                  {t(`Pipeline.Steps.${step}.Description`)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="blue" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-10 lg:grid-cols-[0.68fr_1.32fr] lg:items-start">
            <div>
              <p className="v3-label text-v3-yellow">{t("Reversal.Eyebrow")}</p>
              <h2 className="font-v3-display mt-6 text-[clamp(2.7rem,5vw,5rem)] leading-[0.94] font-bold tracking-[-0.06em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Reversal.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-xl text-white/65">
                {t("Reversal.Description")}
              </p>
            </div>

            <div className="grid gap-4">
              <div className="border border-white/20 bg-[#171714] p-6 sm:p-8">
                <p className="v3-label text-v3-coral">
                  {t("Reversal.EncryptLabel")}
                </p>
                <p
                  dir="ltr"
                  className="font-v3-mono text-v3-yellow mt-7 overflow-x-auto text-[clamp(1.05rem,2.5vw,1.8rem)] font-bold whitespace-nowrap"
                >
                  C = ((P XOR K) + s) mod 256
                </p>
              </div>
              <div className="border border-white/20 bg-white/10 p-6 sm:p-8">
                <p className="v3-label text-v3-yellow">
                  {t("Reversal.DecryptLabel")}
                </p>
                <p
                  dir="ltr"
                  className="font-v3-mono mt-7 overflow-x-auto text-[clamp(1.05rem,2.5vw,1.8rem)] font-bold whitespace-nowrap"
                >
                  P = ((C − s) mod 256) XOR K
                </p>
              </div>
              <p className="font-v3-text flex gap-3 text-sm leading-6 text-white/55">
                <ShieldAlert
                  className="text-v3-coral mt-0.5 size-5 shrink-0"
                  aria-hidden="true"
                />
                {t("Reversal.Note")}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="paper" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="border-v3-line grid gap-10 border-y py-10 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-14">
            <div className="bg-v3-coral flex size-20 items-center justify-center text-[#24100b] shadow-[7px_8px_0_#171714]">
              <Cpu className="size-9" aria-hidden="true" />
            </div>
            <div>
              <p className="v3-label text-v3-coral">{t("Vector.Eyebrow")}</p>
              <h2 className="font-v3-display mt-5 max-w-4xl text-[clamp(2.4rem,4.5vw,4.6rem)] leading-[0.96] font-bold tracking-[-0.055em] text-balance rtl:leading-[1.12] rtl:tracking-normal">
                {t("Vector.Title")}
              </h2>
              <p className="v3-body text-v3-muted mt-6 max-w-3xl">
                {t("Vector.Description")}
              </p>
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
