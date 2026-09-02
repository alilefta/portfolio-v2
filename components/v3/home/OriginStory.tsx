import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";

export async function OriginStory() {
  const t = await getTranslations("V3.Home.Origin");
  const beats = ["Craft", "Friction", "Product"] as const;

  return (
    <Section tone="ink" aria-labelledby="v3-origin-title">
      <Container>
        <header className="grid gap-8 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-12">
          <p className="v3-label pt-2 text-v3-yellow">{t("Eyebrow")}</p>
          <div>
            <h2
              id="v3-origin-title"
              className="v3-heading max-w-5xl text-balance"
            >
              {t("Title")}
            </h2>
            <div className="mt-8 grid gap-5 text-white/65 lg:grid-cols-2 lg:gap-12">
              <p className="v3-body">{t("ParagraphOne")}</p>
              <p className="v3-body">{t("ParagraphTwo")}</p>
            </div>
          </div>
        </header>

        <ol className="mt-14 grid border-y border-white/20 lg:grid-cols-3">
          {beats.map((beat, index) => (
            <li
              key={beat}
              className="flex min-h-52 flex-col border-b border-white/20 py-6 last:border-b-0 lg:border-e lg:border-b-0 lg:px-7 lg:first:ps-0 lg:last:border-e-0 lg:last:pe-0"
            >
              <span className="v3-technical text-v3-yellow">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-auto font-v3-display text-2xl font-bold tracking-[-0.04em]">
                {t(`${beat}.Title`)}
              </h3>
              <p className="mt-3 font-v3-text text-sm leading-relaxed text-white/55">
                {t(`${beat}.Description`)}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="v3-technical max-w-xl text-white/45">
            {t("Closing")}
          </p>
          <Link
            href="/blog/from-microns-to-microservices"
            className="inline-flex min-h-11 w-fit items-center gap-2 border-b-2 border-v3-yellow font-v3-text text-sm font-bold text-v3-yellow"
          >
            {t("ReadStory")} {" "}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
