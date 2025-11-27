"use client";

import { Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "next-intl";
import { startTransition, useEffect, useState } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/lib/localization/getLocale";

export function LocaleToggle() {
  const locale = useLocale();
  const [lang, setLang] = useState<Locale>(() => {
    if (locale === "ar") {
      return "ar";
    }
    return "en";
  });
  const t = useTranslations("Controls");

  useEffect(() => {
    startTransition(() => {
      setUserLocale(lang);
    });
  }, [lang]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" title={t("ChangeLanguage")}>
          <Languages className="size-5" absoluteStrokeWidth={false} />
          <span className="sr-only">{t("ChangeLanguage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="flex flex-col items-start rtl:items-end"
      >
        <DropdownMenuItem
          onClick={() => {
            setLang("en");
          }}
          className="font-inter"
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            setLang("ar");
          }}
          className="font-alexandria font-light"
        >
          عربي
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
