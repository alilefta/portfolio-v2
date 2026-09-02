import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/v3/ui/Button";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { EMAIL } from "@/lib/info";

export async function ContactChapter() {
  const t = await getTranslations("V3.Home.Contact");
  const prompts = ["Context", "Friction", "Outcome"] as const;

  return (
    <>
      <Section id="contact" tone="yellow" aria-labelledby="v3-contact-title">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_25rem] lg:gap-20">
            <div>
              <p className="v3-label text-black/60">{t("Eyebrow")}</p>
              <h2
                id="v3-contact-title"
                className="mt-7 max-w-5xl font-v3-display text-[clamp(3.4rem,8vw,8rem)] font-bold leading-[0.86] tracking-[-0.07em]"
              >
                {t("Title")}
              </h2>
              <p className="v3-body mt-8 max-w-2xl text-black/65">
                {t("Description")}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="large" className="bg-[#171714] text-white">
                  <Link href="/contact">
                    {t("Start")}
                    <ArrowUpRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="large"
                  variant="outline"
                  className="border-black/40 text-[#171714] hover:bg-[#171714] hover:text-white"
                >
                  <a href={`mailto:${EMAIL}`}>
                    <Mail aria-hidden="true" />
                    {EMAIL}
                  </a>
                </Button>
              </div>
            </div>

            <aside className="border-t-2 border-[#171714] pt-5 lg:mt-2">
              <p className="v3-label text-black/60">{t("BriefLabel")}</p>
              <ol className="mt-7">
                {prompts.map((prompt, index) => (
                  <li
                    key={prompt}
                    className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-t border-black/25 py-5 first:border-t-0 first:pt-0"
                  >
                    <span className="v3-technical text-black/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-v3-display text-xl font-bold tracking-[-0.035em]">
                        {t(`${prompt}.Title`)}
                      </h3>
                      <p className="mt-2 font-v3-text text-sm leading-relaxed text-black/60">
                        {t(`${prompt}.Description`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-5 v3-technical text-black/55">
                {t("Availability")}
              </p>
            </aside>
          </div>
        </Container>
      </Section>

    </>
  );
}
