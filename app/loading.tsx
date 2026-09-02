import { getTranslations } from "next-intl/server";
import { SystemStateFrame } from "@/components/v3/system/SystemStateFrame";

export default async function Loading() {
  const t = await getTranslations("V3.System.Loading");

  return (
    <SystemStateFrame
      code="•••"
      eyebrow={t("Eyebrow")}
      title={t("Title")}
      description={t("Description")}
      tone="yellow"
      busy
    >
      <span className="border-v3-ink bg-v3-surface flex h-3 w-44 overflow-hidden border">
        <span className="bg-v3-ink h-full w-2/3 animate-pulse" />
      </span>
      <span className="v3-technical text-v3-muted">{t("Status")}</span>
    </SystemStateFrame>
  );
}
