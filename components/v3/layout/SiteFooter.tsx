"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/v3/layout/Container";
import { EMAIL, GITHUB, LINKEDIN } from "@/lib/info";

export function SiteFooter({ locale }: { locale?: "en" | "ar" } = {}) {
  const t = useTranslations("V3.Home.Contact");
  const tNav = useTranslations("V3.Navigation");

  return (
    <footer className="bg-v3-surface-dark text-[#f5f1e8]">
      <Container className="py-8 sm:py-10">
        <div className="grid gap-10 border-b border-white/15 pb-9 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-14">
          <div>
            <Link
              href="/"
              dir="ltr"
              className="font-v3-display text-3xl font-bold tracking-[-0.05em]"
            >
              Ali Lefta<span className="text-v3-yellow">.</span>
            </Link>
            <p className="font-v3-text mt-3 max-w-sm text-sm leading-6 text-white/50">
              {t("FooterLine")}
            </p>
          </div>

          <nav aria-label={t("FooterNavigation")}>
            <p className="v3-label text-white/40">{t("FooterNavigation")}</p>
            <ul className="font-v3-text mt-4 grid gap-2 text-sm font-bold">
              <li>
                <Link
                  className="hover:text-v3-yellow transition-colors"
                  href="/"
                >
                  {tNav("Home")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-v3-yellow transition-colors"
                  href="/projects"
                >
                  {tNav("Projects")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-v3-yellow transition-colors"
                  href={locale ? `/${locale}/blog` : "/blog"}
                >
                  {tNav("Writing")}
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-v3-yellow transition-colors"
                  href="/contact"
                >
                  {tNav("Contact")}
                </Link>
              </li>
              <li>
                <a
                  className="hover:text-v3-yellow transition-colors"
                  href="/ali-lefta-cv.pdf"
                  download
                >
                  {tNav("CV")}
                </a>
              </li>
            </ul>
          </nav>

          <div>
            <p className="v3-label text-white/40">{t("Availability")}</p>
            <a
              href={`mailto:${EMAIL}`}
              className="group font-v3-mono hover:text-v3-yellow mt-4 inline-flex items-center gap-2 text-sm break-all text-white transition-colors sm:text-base"
            >
              {EMAIL}
              <ArrowUpRight
                className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:rotate-[-90deg]"
                aria-hidden="true"
              />
            </a>
            <div className="mt-5 flex gap-2">
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="hover:border-v3-yellow hover:bg-v3-yellow inline-flex size-11 items-center justify-center border border-white/20 transition-colors hover:text-[#171714]"
              >
                <Github className="size-4" aria-hidden="true" />
              </a>
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="hover:border-v3-yellow hover:bg-v3-yellow inline-flex size-11 items-center justify-center border border-white/20 transition-colors hover:text-[#171714]"
              >
                <Linkedin className="size-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                aria-label={t("Contact")}
                className="hover:border-v3-yellow hover:bg-v3-yellow inline-flex size-11 items-center justify-center border border-white/20 transition-colors hover:text-[#171714]"
              >
                <Mail className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="v3-technical flex flex-col gap-3 pt-6 text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{t("Copyright")}</p>
          <p>{t("Availability")}</p>
        </div>
      </Container>
    </footer>
  );
}
