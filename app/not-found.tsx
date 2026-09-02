import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, BookOpen } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/v3/ui/Button";
import { SystemStateFrame } from "@/components/v3/system/SystemStateFrame";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("V3.System.NotFound.Metadata");

  return {
    title: t("Title"),
    description: t("Description"),
  };
}

export default async function NotFound() {
  const t = await getTranslations("V3.System.NotFound");

  return (
    <SystemStateFrame
      code="404"
      eyebrow={t("Eyebrow")}
      title={t("Title")}
      description={t("Description")}
      tone="blue"
    >
      <Button asChild size="large">
        <Link href="/">
          {t("Home")}
          <ArrowRight className="rtl:rotate-180" aria-hidden="true" />
        </Link>
      </Button>
      <Button asChild variant="secondary" size="large">
        <Link href="/projects">
          <BookOpen aria-hidden="true" />
          {t("Projects")}
        </Link>
      </Button>
    </SystemStateFrame>
  );
}
