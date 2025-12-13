import { Activity, LayoutGrid, Database, Server } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function IndustryImpact() {
  const t = await getTranslations("HomePage.IndustryImpact");

  const sectors = [
    {
      label: t("Dental"),
      icon: Activity,
    },
    {
      label: t("SaaS"),
      icon: LayoutGrid,
    },
    {
      label: t("Enterprise"),
      icon: Server,
    },
    {
      label: t("Data"),
      icon: Database,
    },
  ];

  return (
    <section className="border-y border-zinc-200 bg-zinc-50/50 py-12 dark:border-zinc-800 dark:bg-black/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Label */}
          <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase">
            {t("Label")}
          </p>

          {/* The Sectors List */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-end">
            {sectors.map((sector) => (
              <div
                key={sector.label}
                className="group flex items-center gap-2 text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                <sector.icon className="h-5 w-5 opacity-50 transition-transform group-hover:scale-110" />
                <span className="font-medium">{sector.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
