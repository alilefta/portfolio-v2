import {
  coreDevelopment,
  frameworksAndLibraries,
  toolsAndPlatforms,
} from "@/lib/db/techstack_section";
import { TechStackItem } from "@/lib/types/common";
import { MoveRight } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function TechStack() {
  const t = await getTranslations("HomePage.TechStack");

  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-8 lg:px-8 lg:py-16">
      <div className="text-center">
        <h3 className="mb-2 text-4xl font-bold tracking-tighter lg:text-6xl ltr:flex ltr:items-center ltr:gap-1.5">
          <span>{t("Title_The")}</span>
          <span className="text-foreground/50">{t("Title_Stack")}</span>
        </h3>
        <p className="text-foreground/40 mx-auto max-w-3xl text-lg font-light lg:text-xl rtl:mt-8">
          {t("Subtitle")}
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-16 rounded-4xl border border-zinc-200 bg-zinc-100/70 p-6 shadow-xl backdrop-blur-sm md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:p-12 dark:border-white/10 dark:bg-zinc-900/40">
        {/* Core Development Column */}
        <ColumnAccordion
          title={t("Columns.Core")}
          data={coreDevelopment}
          color="text-blue-500"
        />

        {/* Frameworks And Libraries Column */}
        <ColumnAccordion
          title={t("Columns.Frameworks")}
          data={frameworksAndLibraries}
          color="text-purple-500"
        />

        {/* Tools and Platforms Column */}
        <ColumnAccordion
          title={t("Columns.Tools")}
          data={toolsAndPlatforms}
          color="text-emerald-500"
        />
      </div>
    </section>
  );
}

export async function ColumnAccordion({
  title,
  data,
}: {
  title: string;
  data: TechStackItem[];
  color?: string;
}) {
  const tContext = await getTranslations("TechContexts");

  return (
    <div className="flex flex-col">
      <div className="mb-4 flex items-center justify-between border-b border-zinc-200/50 pb-3 md:mb-8 dark:border-white/10">
        <h3
          className={`text-foreground/80 mb-1 font-mono text-lg tracking-wide uppercase`}
        >
          {title}
        </h3>
        <MoveRight size={16} className="text-foreground/20 md:hidden" />
      </div>

      <div className="flex flex-row gap-x-2 overflow-x-auto py-4 md:flex-col md:items-start md:gap-1 md:overflow-hidden md:p-0">
        {data.map(({ name, context }, i) => (
          <TechStackRow
            key={`${i}_${name}_${context?.substring(0, 4) ?? ""}`}
            name={name}
            context={tContext(name.replaceAll(" ", "_").replaceAll(".", "DOT"))}
          />
        ))}
      </div>
    </div>
  );
}

export async function TechStackRow({ name, context }: TechStackItem) {
  return (
    <div
      className="group flex w-full flex-col items-start gap-0 rounded-lg border-b border-zinc-200/50 p-0 transition-all duration-300 last:border-b-0 hover:bg-zinc-100 hover:shadow-sm md:gap-1 md:px-2 md:py-3 dark:border-white/5 dark:hover:bg-white/5"
      dir="ltr"
    >
      <div className="bg-foreground/5 w-full items-center justify-between gap-1 rounded-lg px-2.5 py-1.5 md:flex md:rounded-none md:bg-transparent md:px-0 md:py-0">
        <span className="block text-xs font-normal tracking-tight text-nowrap text-zinc-900 transition-colors md:text-base md:font-semibold md:text-wrap dark:text-white">
          {name}
        </span>
        <span className="hidden text-right text-sm tracking-wide text-zinc-500 md:block dark:text-zinc-400">
          {context}
        </span>
      </div>
    </div>
  );
}
