"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavigationMenu } from "../NavigationMenu";
import { useTranslations } from "next-intl";
import clsx from "clsx";
import { Terminal } from "lucide-react";

export function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollListener = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, []);

  const navLinks = [
    { href: "/", label: t("HomePage.Home") },
    { href: "/projects", label: t("HomePage.Projects") },
    { href: "/contact", label: t("HomePage.Contact") },
    { href: "/blog", label: t("Navbar.Log") }, // Changed from "Blog" to "Log" based on new persona
  ];

  return (
    <nav
      className={clsx(
        "rtl:font-alexandria fixed inset-x-0 top-0 z-50 transition-all duration-300",
        {
          "border-b border-zinc-200/50 bg-white/80 py-3 backdrop-blur-md dark:border-zinc-800/50 dark:bg-black/70":
            isScrolled,
          "border-b border-transparent bg-transparent py-5": !isScrolled,
        },
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LEFT: Logo / Identity */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 bg-zinc-100 text-zinc-900 transition-colors group-hover:border-zinc-300 group-hover:bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 dark:group-hover:border-zinc-700">
            <Terminal className="h-4 w-4" />
          </div>
          <div className="flex flex-col rtl:gap-1.5">
            <span className="text-xs leading-none font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              {t("MainTitles.Ali")} {t("MainTitles.Lefta")}
            </span>
            <span className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400">
              {t("Navbar.SystemArchitect")}
            </span>
          </div>
        </Link>

        {/* CENTER: Desktop Navigation (The "Command Center") */}
        <div className="hidden items-center gap-1 rounded-full border border-zinc-200/50 bg-white/50 p-1 backdrop-blur-sm lg:flex dark:border-zinc-800/50 dark:bg-zinc-900/50">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-full px-4 py-1.5 font-medium transition-all duration-200 ltr:text-sm rtl:text-xs",
                  {
                    "bg-zinc-900 text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-900":
                      isActive,
                    "text-zinc-600 hover:bg-zinc-200/50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-100":
                      !isActive,
                  },
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* RIGHT: Status & Mobile Menu */}
        <div className="flex items-center gap-4">
          {/* Status Indicator (Subtle) */}
          <div className="hidden items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 pr-4 md:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {t("Navbar.Available")}
            </span>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex">
            <NavigationMenu />
          </div>
        </div>
      </div>
    </nav>
  );
}
