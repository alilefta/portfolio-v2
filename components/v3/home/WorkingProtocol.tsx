import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { Label } from "@/components/v3/ui/Label";

export async function WorkingProtocol() {
  const t = await getTranslations("V3.Home.Protocol");
  const steps = ["Observe", "Model", "Design", "Measure"] as const;

  return (
    <Section aria-labelledby="v3-protocol-title">
      <Container className="grid gap-14 lg:grid-cols-[minmax(18rem,0.78fr)_minmax(0,1.22fr)] lg:gap-24">
        <header>
          <Label signal="blue">{t("Eyebrow")}</Label>
          <h2 id="v3-protocol-title" className="v3-heading mt-7 text-balance">
            {t("Title")}
          </h2>
          <p className="v3-body mt-7 max-w-md text-v3-muted">
            {t("Description")}
          </p>
        </header>

        <ol className="border-t border-v3-line">
          {steps.map((step, index) => (
            <li
              key={step}
              className="grid gap-3 border-b border-v3-line py-6 sm:grid-cols-[3rem_minmax(0,1fr)_minmax(10rem,auto)] sm:items-center sm:gap-5"
            >
              <span className="v3-technical text-v3-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-v3-display text-[clamp(1.55rem,3vw,2.25rem)] leading-tight font-bold tracking-[-0.045em]">
                {t(`${step}.Title`)}
              </h3>
              <p className="v3-technical text-v3-muted sm:text-end">
                {t(`${step}.Note`)}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
