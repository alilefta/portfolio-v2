import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";
import { Section } from "@/components/v3/layout/Section";
import { Button } from "@/components/v3/ui/Button";
import { ProjectNavigation } from "@/components/v3/projects/case-study/ProjectNavigation";

const directionItems = ["Now", "Next", "Later"] as const;

export async function LabOSConclusionChapter() {
  const t = await getTranslations("V3.LabOS.Conclusion");

  return (
    <>
      <Section tone="ink" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <div>
              <p className="v3-label text-v3-yellow">{t("Current.Eyebrow")}</p>
              <p className="mt-4 v3-technical text-white/40">05 / CURRENT STATE</p>
            </div>
            <div>
              <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-balance">
                {t("Current.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-white/65">
                {t("Current.Description")}
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="border border-v3-yellow/45 bg-v3-yellow p-6 text-[#171714] sm:p-8">
              <p className="v3-label text-black/55">{t("Current.StatusLabel")}</p>
              <p className="mt-8 max-w-md font-v3-display text-[clamp(2rem,4vw,3.5rem)] font-bold leading-none tracking-[-0.055em]">
                {t("Current.Status")}
              </p>
            </article>
            <aside className="border border-white/20 bg-white/5 p-6 sm:p-8">
              <p className="v3-label text-v3-coral">{t("Current.BoundaryLabel")}</p>
              <p className="mt-5 max-w-3xl font-v3-text text-sm leading-7 text-white/65">
                {t("Current.Boundary")}
              </p>
            </aside>
          </div>
        </Container>
      </Section>

      <Section tone="yellow" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)] text-[#171714]">
          <div className="grid gap-8 lg:grid-cols-[0.62fr_1.38fr] lg:items-end">
            <p className="v3-label text-black/55">{t("Direction.Eyebrow")}</p>
            <div>
              <h2 className="font-v3-display text-[clamp(3rem,6vw,6rem)] font-bold leading-[0.92] tracking-[-0.06em] text-balance">
                {t("Direction.Title")}
              </h2>
              <p className="v3-body mt-7 max-w-3xl text-black/65">
                {t("Direction.Description")}
              </p>
            </div>
          </div>

          <ol className="mt-14 grid border-y border-black/25 md:grid-cols-3">
            {directionItems.map((item, index) => (
              <li
                key={item}
                className="min-h-64 border-b border-black/25 p-6 last:border-b-0 md:border-e md:border-b-0 md:last:border-e-0"
              >
                <span className="v3-technical text-black/45">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-12 font-v3-display text-2xl font-bold tracking-[-0.04em]">
                  {t(`Direction.Items.${item}.Title`)}
                </h3>
                <p className="mt-3 max-w-sm font-v3-text text-sm leading-6 text-black/65">
                  {t(`Direction.Items.${item}.Description`)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>

      <Section tone="blue" spacing="none">
        <Container className="py-[clamp(4.5rem,9vw,8rem)]">
          <p className="v3-label text-v3-yellow">{t("Closing.Eyebrow")}</p>
          <h2 className="mt-7 max-w-6xl font-v3-display text-[clamp(3.4rem,8vw,8rem)] font-bold leading-[0.86] tracking-[-0.07em] text-balance">
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
              className="border-white/45 text-white hover:bg-white hover:text-v3-blue"
            >
              <Link href="/projects">{t("Closing.AllProjects")}</Link>
            </Button>
          </div>
        </Container>
      </Section>

      <ProjectNavigation
        label={t("Closing.NavigationLabel")}
        previous={{
          href: "/projects",
          label: t("Closing.AllProjects"),
          title: t("Closing.AllProjects"),
        }}
        next={{
          href: "/projects/image-cryptography-system-en",
          label: t("Closing.NextProject"),
          title: "Image Cryptography System",
        }}
      />
    </>
  );
}
