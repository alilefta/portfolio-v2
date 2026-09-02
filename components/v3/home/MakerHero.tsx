import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { Button } from "@/components/v3/ui/Button";

export async function MakerHero() {
  const t = await getTranslations("V3.Home.Hero");

  return (
    <Section className="overflow-hidden" spacing="none">
      <Container className="grid min-h-[calc(100svh-4.5rem)] gap-14 py-[clamp(3.5rem,8vw,7.5rem)] lg:grid-cols-[minmax(0,1.25fr)_minmax(22rem,0.75fr)] lg:items-center lg:gap-16">
        <div className="relative z-10">
          <div className="mb-7 flex items-center gap-3">
            <span
              aria-hidden="true"
              className="bg-v3-coral size-2.5 rotate-12"
            />
            <p className="v3-label text-v3-muted">{t("Eyebrow")}</p>
          </div>

          <h1 className="v3-display max-w-5xl text-[clamp(3.35rem,7.4vw,7.25rem)] leading-[0.88] text-balance">
            {t("TitleLead")}{" "}
            <span className="text-v3-blue relative isolate inline-block">
              <span
                aria-hidden="true"
                className="bg-v3-yellow absolute inset-x-[-0.03em] bottom-[0.04em] -z-10 h-[0.13em] -rotate-1"
              />
              {t("TitleAccent")}
            </span>
          </h1>

          <p className="v3-body text-v3-muted mt-8 max-w-2xl">
            {t("Description")}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="large">
              <Link href="#selected-work">
                {t("SelectedWork")} <ArrowDownRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="large">
              <Link href="/contact">
                {t("Contact")} <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="border-v3-line text-v3-muted mt-9 flex max-w-xl items-start gap-3 border-t pt-5">
            <span
              aria-hidden="true"
              className="bg-v3-blue mt-1.5 size-2 shrink-0"
            />
            <p className="font-v3-text text-sm leading-relaxed">
              {t("Availability")}
            </p>
          </div>
        </div>

        <div
          className="relative mx-auto min-h-[27rem] w-full max-w-[32rem] lg:min-h-[35rem]"
          aria-label={t("VisualLabel")}
        >
          <div
            aria-hidden="true"
            className="bg-v3-blue absolute inset-[10%_3%_8%_8%] rotate-3 rounded-[48%_52%_42%_58%/58%_39%_61%_42%]"
          />

          <figure className="bg-v3-surface absolute inset-[0_23%_15%_0] -rotate-3 p-2.5 shadow-[12px_14px_0_rgb(23_23_20/0.16)] dark:shadow-[12px_14px_0_rgb(0_0_0/0.38)]">
            <div className="bg-v3-line relative h-[calc(100%_-_2.35rem)] min-h-0 overflow-hidden">
              <Image
                src="/images/avatars/avatar1.png"
                alt={t("PortraitAlt")}
                fill
                priority
                sizes="(min-width: 1024px) 24rem, 72vw"
                className="object-cover object-[center_18%] grayscale"
              />
            </div>
            <figcaption className="v3-technical text-v3-muted flex h-[2.35rem] items-end justify-between gap-2 px-1">
              <span>{t("PortraitCaption")}</span>
              <span aria-hidden="true">01</span>
            </figcaption>
          </figure>

          <Link
            href="/projects/oscar-lab-system-en"
            className="group bg-v3-yellow absolute inset-[58%_0_0_39%] rotate-2 p-2 shadow-[8px_9px_0_rgb(23_23_20/0.18)] transition-transform duration-200 hover:rotate-0 focus-visible:rotate-0 dark:shadow-[8px_9px_0_rgb(0_0_0/0.42)]"
            aria-label={t("ArtifactLinkLabel")}
          >
            <div className="relative h-[calc(100%_-_2.6rem)] min-h-0 overflow-hidden bg-[#101311]">
              <Image
                src="/images/projects/oscar-lab-system/oscar-lab-system-dark.png"
                alt={t("ArtifactAlt")}
                fill
                sizes="(min-width: 1024px) 15rem, 55vw"
                className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.025]"
              />
            </div>
            <span className="v3-technical flex h-[2.6rem] items-end justify-between gap-2 px-1 text-[#171714]">
              <span>{t("ArtifactCaption")}</span>
              <ArrowUpRight className="size-3.5" aria-hidden="true" />
            </span>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
