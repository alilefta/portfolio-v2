"use client";

import Link from "next/link";
import { useState } from "react";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function PublicationHeader({ locale }: { locale: "en" | "ar" }) {
  const t = useTranslations("V3.Notebook.PublicationHeader");
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const alternateLocale = locale === "en" ? "ar" : "en";
  const links = [
    { href: `/${locale}/blog`, label: t("Essays") },
    { href: "/projects", label: t("Projects") },
    { href: `/${locale}/blog/notes`, label: t("Notes") },
    { href: "/contact", label: t("About") },
  ];

  return (
    <header className="border-b border-[#d9d2c5] bg-[#fbf8f1] text-[#191715]">
      <div className="mx-auto flex min-h-[4.5rem] max-w-[88rem] items-center justify-between gap-5 px-[clamp(1.5rem,5vw,5rem)]">
        <Link href="/" className="shrink-0 font-playfair text-[1.35rem] font-semibold tracking-[-0.04em]">
          Ali Lefta<span className="text-[#e55d49]">.</span>
        </Link>
        <nav aria-label={t("Navigation")} className="hidden md:block">
          <ul className="flex items-center gap-5 font-playfair text-[0.95rem] text-[#5f5a53] lg:gap-8 lg:text-[1.02rem]">
            {links.map((link) => {
              const active = pathname === link.href;
              return <li key={link.href}><Link href={link.href} aria-current={active ? "page" : undefined} className={cn("border-b-2 py-6 transition-colors hover:text-[#191715]", active ? "border-[#e55d49] text-[#191715]" : "border-transparent")}>{link.label}</Link></li>;
            })}
          </ul>
        </nav>
        <div className="flex items-center gap-4 font-v3-text text-sm">
          <div className="relative md:hidden">
            <button
              type="button"
              aria-expanded={isMenuOpen}
              aria-controls="publication-mobile-navigation"
              className="cursor-pointer font-semibold text-[#5f5a53] hover:text-[#191715] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244b9b]"
              onClick={() => setIsMenuOpen((value) => !value)}
            >
              {t("Menu")}
            </button>
            {isMenuOpen ? <nav id="publication-mobile-navigation" aria-label={t("Navigation")} className="absolute end-0 top-8 z-20 w-44 border border-[#d9d2c5] bg-[#fbf8f1] p-2 shadow-[0_14px_30px_rgba(25,23,21,0.12)]">
              <ul className="space-y-1 font-playfair text-base text-[#5f5a53]">
                {links.map((link) => <li key={link.href}><Link href={link.href} onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 hover:bg-[#f0ebe1] hover:text-[#191715]">{link.label}</Link></li>)}
              </ul>
            </nav> : null}
          </div>
          <Link
            href={`/${alternateLocale}/blog`}
            lang={alternateLocale}
            className="font-semibold text-[#5f5a53] transition-colors hover:text-[#191715] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244b9b]"
          >
            {t(`Locale.${alternateLocale}`)}
          </Link>
          <Link href={`/${locale}/blog?search=1#blog-search`} className="inline-flex items-center gap-2 text-[#5f5a53] transition-colors hover:text-[#191715] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244b9b]"><Search className="size-4" aria-hidden="true" /><span className="hidden sm:inline">{t("Search")}</span><span className="sr-only sm:hidden">{t("Search")}</span></Link>
          <span className="hidden h-6 w-px bg-[#d5cec2] sm:block" aria-hidden="true" />
          <a href="#subscribe" className="font-semibold text-[#e55d49] transition-colors hover:text-[#a93f30]">{t("Subscribe")}</a>
        </div>
      </div>
    </header>
  );
}
