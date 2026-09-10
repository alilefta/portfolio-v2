import type { ReactNode } from "react";
import { PublicationFooter } from "@/components/v3/blog/PublicationFooter";
import { PublicationHeader } from "@/components/v3/blog/PublicationHeader";
import { locales, type Locale } from "@/i18n/config";
import { getTranslations } from "next-intl/server";

export default async function LocaleBlogLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const activeLocale = locales.includes(locale as Locale) ? (locale as Locale) : "en";
  const t = await getTranslations({ locale: activeLocale, namespace: "V3.Notebook.PublicationFooter" });
  return <div className="min-h-dvh w-full bg-[#fbf8f1] text-[#191715]"><PublicationHeader locale={activeLocale} />{children}<PublicationFooter locale={activeLocale} rssLabel={t("RSS")} contactLabel={t("Contact")} /></div>;
}
