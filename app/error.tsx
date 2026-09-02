"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, RefreshCcw } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/v3/ui/Button";
import { SystemStateFrame } from "@/components/v3/system/SystemStateFrame";

export default function Error({
  error,
  retry,
}: {
  error: Error & { digest?: string };
  retry: () => void;
}) {
  const t = useTranslations("V3.System.Error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <SystemStateFrame
      code="500"
      eyebrow={t("Eyebrow")}
      title={t("Title")}
      description={t("Description")}
      tone="coral"
    >
      <Button type="button" size="large" onClick={() => retry()}>
        <RefreshCcw aria-hidden="true" />
        {t("Retry")}
      </Button>
      <Button asChild variant="secondary" size="large">
        <Link href="/">
          {t("Home")}
          <ArrowRight className="rtl:rotate-180" aria-hidden="true" />
        </Link>
      </Button>
    </SystemStateFrame>
  );
}
