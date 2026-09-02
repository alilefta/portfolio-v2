import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Mail } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { Button } from "@/components/v3/ui/Button";
import { ProjectFitForm } from "@/components/v3/contact/ProjectFitForm";
import { EMAIL, SOCIAL_IMAGE_URL } from "@/lib/info";

const fitItems = ["Context", "Friction", "Outcome"] as const;

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("V3.Contact.Metadata");
  return {
    title: t("Title"),
    description: t("Description"),
    alternates: { canonical: "/contact" },
    openGraph: {
      type: "website",
      images: [{ url: SOCIAL_IMAGE_URL, alt: t("Title") }],
    },
    twitter: { card: "summary_large_image", images: [SOCIAL_IMAGE_URL] },
  };
}

export default async function ContactPage() {
  const t = await getTranslations("V3.Contact");

  return (
    <>
      <Section tone="blue" spacing="none" className="overflow-hidden">
        <Container className="py-[clamp(4.5rem,10vw,9rem)]">
          <p className="v3-label text-v3-yellow">{t("Hero.Eyebrow")}</p>
          <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:items-end lg:gap-20">
            <div>
              <h1 className="max-w-5xl font-v3-display text-[clamp(4rem,10vw,9.5rem)] font-bold leading-[0.82] tracking-[-0.09em] text-balance">
                {t("Hero.Title")}
              </h1>
              <p className="v3-body mt-8 max-w-2xl text-white/70">
                {t("Hero.Description")}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="large"
                  className="border-v3-yellow bg-v3-yellow text-[#171714] hover:bg-white"
                >
                  <Link href="#project-brief">
                    {t("Form.Submit")}
                    <ArrowDownRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="large"
                  variant="outline"
                  className="border-white/45 text-white hover:bg-white hover:text-v3-blue"
                >
                  <a href={`mailto:${EMAIL}`}>
                    {t("Hero.EmailAction")}
                    <ArrowUpRight aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>

            <aside className="border-t-2 border-v3-yellow pt-5 lg:mb-2">
              <p className="v3-label text-v3-yellow">{t("Hero.FitLabel")}</p>
              <ol className="mt-6">
                {fitItems.map((item, index) => (
                  <li
                    key={item}
                    className="grid grid-cols-[2.5rem_minmax(0,1fr)] gap-3 border-t border-white/20 py-5 first:border-t-0 first:pt-0"
                  >
                    <span className="v3-technical text-white/40">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h2 className="font-v3-display text-xl font-bold tracking-[-0.035em]">
                        {t(`Hero.FitItems.${item}.Title`)}
                      </h2>
                      <p className="mt-2 font-v3-text text-sm leading-6 text-white/60">
                        {t(`Hero.FitItems.${item}.Description`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </Container>
      </Section>

      <Section id="project-brief" tone="surface" spacing="none">
        <Container className="py-[clamp(4.5rem,10vw,9rem)]">
          <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr] lg:gap-20">
            <div className="lg:pt-3">
              <p className="v3-label text-v3-coral">{t("Hero.DirectLabel")}</p>
              <a
                href={`mailto:${EMAIL}`}
                className="group mt-6 inline-flex items-center gap-3 break-all font-v3-mono text-lg font-medium text-v3-ink transition-colors hover:text-v3-blue sm:text-xl"
              >
                <Mail className="size-5 shrink-0 text-v3-blue" aria-hidden="true" />
                {EMAIL}
                <ArrowUpRight className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
              </a>
              <p className="v3-body mt-5 max-w-sm text-v3-muted">
                {t("Hero.DirectDescription")}
              </p>
              <p className="mt-8 v3-technical max-w-xs text-v3-muted">
                {t("Hero.Availability")}
              </p>
            </div>

            <ProjectFitForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
