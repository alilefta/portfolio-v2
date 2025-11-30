"use client";

import { useEffect, useState } from "react";
import { NavigationMenu } from "../NavigationMenu";
import { Badge } from "../ui/custom/Badge";
import { useTranslations } from "next-intl";
import clsx from "clsx";

export function Navbar() {
  const t = useTranslations();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (window === undefined) {
      return;
    }

    let scrolled = false;

    const scrollListener = (ev: Event) => {
      scrolled = window.scrollY > 80;

      if (scrolled) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <nav
      className={clsx(
        "fixed top-0 right-0 left-0 z-40 mx-auto flex max-w-7xl items-center justify-between px-8 py-5 lg:px-0 rtl:font-normal rtl:tracking-normal",
        {
          "bg-background/80 py-3 transition-colors": isScrolled,
        },
      )}
    >
      {/* logo */}
      <div className="flex items-center gap-2">
        <span className="from-foreground/90 rounded-md bg-linear-to-br to-indigo-950/80 p-2 text-xs font-medium">
          AM
        </span>
        <h2 className="flex flex-row items-start gap-1 text-base font-medium tracking-tight md:text-lg">
          <span className="font-light">{t("MainTitles.Ali")}</span>{" "}
          <span className="font-bold">{t("MainTitles.Mohsin")}</span>
        </h2>
      </div>
      <div className="flex items-center gap-6">
        {/* Available Tag */}
        <div className="flex items-center justify-center">
          <Badge variant="surface" className="gap-1.5">
            <span className="size-2 animate-pulse rounded-full bg-emerald-700 dark:bg-emerald-400"></span>
            <p>{t("Tags.AvaliableForProjects")}</p>
          </Badge>
        </div>

        <NavigationMenu />
      </div>
    </nav>
  );
}
