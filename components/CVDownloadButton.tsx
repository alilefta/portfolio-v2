"use client";

import { Paperclip } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";

export function CVDownloadButton({ hasLabel }: { hasLabel?: boolean }) {
  const t = useTranslations();

  return (
    <Button variant="outline" size="default" title={t("Controls.DownloadCV")}>
      <Paperclip className="size-5" />
      {hasLabel ? (
        <span className="text-sm tracking-tight rtl:text-xs">
          {t("Controls.DownloadCV")}
        </span>
      ) : (
        <span className="sr-only">{t("Controls.DownloadCV")}</span>
      )}
    </Button>
  );
}
