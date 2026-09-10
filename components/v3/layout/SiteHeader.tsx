"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileDown, Languages, Menu, Moon, Sun, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { setUserLocale } from "@/lib/localization/getLocale";
import type { Locale } from "@/i18n/config";

export function SiteHeader({ locale }: { locale?: Locale } = {}) {
  const pathname = usePathname();
  const detectedLocale = useLocale();
  const activeLocale = locale ?? detectedLocale;
  const t = useTranslations("V3.Navigation");
  const { setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: t("Home") },
    { href: "/projects", label: t("Projects") },
    { href: locale ? `/${locale}/blog` : "/blog", label: t("Writing") },
    { href: "/contact", label: t("Contact") },
  ];

  const changeLocale = () => {
    const nextLocale: Locale = activeLocale === "ar" ? "en" : "ar";
    setUserLocale(nextLocale);
  };

  return (
    <header className="border-v3-line bg-v3-paper text-v3-ink border-b">
      <div className="mx-auto flex min-h-18 max-w-[96rem] items-center justify-between gap-4 px-[var(--v3-page-gutter)]">
        <Link
          href="/"
          dir="ltr"
          className="font-v3-display text-xl font-bold tracking-[-0.04em]"
        >
          Ali Lefta<span className="text-v3-blue">.</span>
        </Link>

        <nav aria-label={t("Primary")} className="hidden md:block">
          <ul className="flex items-center gap-1">
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-v3-text inline-flex min-h-11 items-center border-b-2 px-3 text-sm font-bold transition-colors",
                      active
                        ? "border-v3-blue text-v3-blue"
                        : "text-v3-muted hover:text-v3-ink border-transparent",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <a
            href="/ali-lefta-cv.pdf"
            download
            className="border-v3-line bg-v3-surface font-v3-text text-v3-ink hover:bg-v3-yellow hidden min-h-11 items-center gap-2 border px-3 text-sm font-bold transition-colors sm:inline-flex"
          >
            <FileDown className="size-4" aria-hidden="true" />
            {t("CV")}
          </a>
          <button
            type="button"
            className="border-v3-line bg-v3-surface text-v3-ink hover:bg-v3-yellow inline-flex size-11 items-center justify-center border transition-colors"
            onClick={changeLocale}
            aria-label={t("Language")}
          >
            <Languages className="size-4" />
          </button>
          <button
            type="button"
            className="border-v3-line bg-v3-surface text-v3-ink hover:bg-v3-yellow inline-flex size-11 items-center justify-center border transition-colors"
            onClick={() =>
              setTheme(
                document.documentElement.classList.contains("dark")
                  ? "light"
                  : "dark",
              )
            }
            aria-label={t("Theme")}
          >
            <Sun className="hidden size-4 dark:block" />
            <Moon className="size-4 dark:hidden" />
          </button>
          <button
            type="button"
            className="border-v3-line bg-v3-ink text-v3-paper inline-flex size-11 items-center justify-center border md:hidden"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="v3-mobile-navigation"
            aria-label={isOpen ? t("Close") : t("Menu")}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <nav
          id="v3-mobile-navigation"
          aria-label={t("Mobile")}
          className="border-v3-line border-t px-[var(--v3-page-gutter)] py-4 md:hidden"
        >
          <ul>
            {links.map((link) => (
              <li
                key={link.href}
                className="border-v3-line border-b last:border-0"
              >
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-v3-display flex min-h-14 items-center justify-between text-2xl font-bold"
                >
                  {link.label}
                  <span aria-hidden="true">↗</span>
                </Link>
              </li>
            ))}
            <li className="border-v3-line border-b last:border-0">
              <a
                href="/ali-lefta-cv.pdf"
                download
                onClick={() => setIsOpen(false)}
                className="font-v3-display flex min-h-14 items-center justify-between text-2xl font-bold"
              >
                {t("CV")}
                <FileDown className="size-5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
