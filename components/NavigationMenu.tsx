"use client";

import Link from "next/link";
import { CVDownloadButton } from "@/components/CVDownloadButton";
import { LocaleToggle } from "@/components/LocaleToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Drawer,
  DrawerFooter,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { useEffect, useMemo } from "react";

export function NavigationMenu() {
  const t = useTranslations();
  const local = useLocale();

  const memoizedLocal = useMemo(() => local, []);

  useEffect(() => {
    if (local !== memoizedLocal) {
      window.location.reload();
    }
  }, [local, memoizedLocal]);

  return (
    <Drawer
      defaultOpen={false}
      direction={"bottom"}
      autoFocus={true}
      repositionInputs={false}
    >
      <DrawerTrigger asChild>
        {/* To be replaced with word menu */}
        <Button variant={"outline"} className="bg-foreground/10">
          <Menu className="size-4" absoluteStrokeWidth={false} />
        </Button>
      </DrawerTrigger>
      <DrawerContent
        className="max-h-dvh min-h-dvh overflow-y-hidden"
        dir={memoizedLocal === "ar" ? "rtl" : "ltr"}
      >
        <DrawerHeader className="flex items-center">
          <DrawerTitle className="sr-only">
            {t("Common.Navigation")}
          </DrawerTitle>
          <DrawerDescription className="sr-only">
            {t("Common.NavigationMenu")}
          </DrawerDescription>
          <DrawerClose asChild className="mx-0 mr-auto">
            <Button variant={"ghost"} size={"icon"}>
              <X className="text-foreground/80 size-6" />
            </Button>
          </DrawerClose>
        </DrawerHeader>
        <div className="font-inter rtl:font-alexandria flex w-full flex-col items-center space-y-6 px-5 py-5">
          <div className="w-full flex-col items-center space-y-1">
            <h5 className="text-foreground/80 w-full text-lg font-light tracking-tight rtl:text-xs">
              {t("Common.QuickLinks")}
            </h5>
            <div className="flex w-full flex-col gap-y-5 pt-2 *:font-normal">
              <Link href={"/"} className="text-2xl rtl:text-base">
                {t("HomePage.Home")}
              </Link>
              <Link href={"/projects"} className="text-2xl rtl:text-base">
                {t("HomePage.Projects")}
              </Link>
              <Link href={"/blog"} className="text-2xl rtl:text-base">
                {t("HomePage.Blog")}
              </Link>
            </div>
          </div>

          <div className="mt-8 flex w-full flex-col space-y-1">
            <h5 className="text-foreground/80 w-full text-lg font-light tracking-tight rtl:text-xs">
              {t("Common.Settings")}
            </h5>

            <div className="flex items-center gap-x-2 py-2">
              <ThemeToggle />
              <LocaleToggle />
              <CVDownloadButton hasLabel={true} />
            </div>
          </div>
        </div>
        <DrawerFooter>
          <p className="font-alexandria text-[10px] tracking-tight">
            <span className="font-light">{t("MainTitles.Ali")}</span>{" "}
            <span className="font-black tracking-wider">
              {t("MainTitles.Mohsin")}
            </span>
          </p>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
