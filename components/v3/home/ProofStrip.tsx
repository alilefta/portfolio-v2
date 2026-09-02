import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Container } from "@/components/v3/layout/Container";

type ProofItem = {
  value: string;
  label: string;
  note: string;
  href?: string;
};

function ProofContent({ item, index }: { item: ProofItem; index: number }) {
  return (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="v3-technical text-v3-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        {item.href ? (
          <ArrowUpRight
            aria-hidden="true"
            className="size-4 text-v3-blue transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        ) : null}
      </div>
      <div className="mt-10">
        <p className="font-v3-display text-[clamp(2rem,4vw,3.25rem)] leading-none font-bold tracking-[-0.055em] text-v3-ink">
          {item.value}
        </p>
        <p className="mt-3 font-v3-text text-sm font-bold text-v3-ink">
          {item.label}
        </p>
        <p className="v3-technical mt-1.5 text-v3-muted">{item.note}</p>
      </div>
    </>
  );
}

export async function ProofStrip() {
  const t = await getTranslations("V3.Home.Proof");
  const items: ProofItem[] = [
    {
      value: t("Product.Value"),
      label: t("Product.Label"),
      note: t("Product.Note"),
      href: "/projects/oscar-lab-system-en",
    },
    {
      value: t("Domain.Value"),
      label: t("Domain.Label"),
      note: t("Domain.Note"),
    },
    {
      value: t("Education.Value"),
      label: t("Education.Label"),
      note: t("Education.Note"),
    },
    {
      value: t("Platforms.Value"),
      label: t("Platforms.Label"),
      note: t("Platforms.Note"),
      href: "/projects",
    },
  ];

  return (
    <section
      aria-labelledby="v3-proof-title"
      className="border-y border-v3-line bg-v3-surface text-v3-ink"
    >
      <Container>
        <h2 id="v3-proof-title" className="sr-only">
          {t("Title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, index) => {
            const styles =
              "group min-h-52 border-v3-line px-1 py-6 sm:px-6 lg:border-s lg:first:border-s-0";

            return item.href ? (
              <Link key={item.label} href={item.href} className={styles}>
                <ProofContent item={item} index={index} />
              </Link>
            ) : (
              <div key={item.label} className={styles}>
                <ProofContent item={item} index={index} />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
