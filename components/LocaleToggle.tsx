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
  const t = useTranslations("LocaleSwitcher");

  useEffect(() => {
    startTransition(() => {
      setUserLocale(lang);
    });
  }, [lang]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Languages className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
          <span className="sr-only">{t("changeLanguage")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLang("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLang("ar")}>
          Arabic
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
