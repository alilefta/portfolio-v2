import {
  coreDevelopment,
  frameworksAndLibraries,
  toolsAndPlatforms,
} from "@/lib/db/techstack_section";
import { TechStackItem } from "@/lib/types/common";
import { getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";

export default async function Stack() {
  const t = await getTranslations("HomePage.TechStack");

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      {/* Section Header */}
      <AnimateOnScroll animation="fade-up">
        <div className="mb-16 flex flex-col gap-2">
          <span className="text-foreground/40 font-mono text-sm uppercase tracking-widest">
            {t("Title_The")}
          </span>
          <h2 className="text-foreground text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            {t("Title_Stack")}
          </h2>
        </div>
      </AnimateOnScroll>

      <AnimateOnScroll animation="fade-up" delay={100}>
        <p className="text-foreground/50 mb-12 max-w-2xl text-lg">
          {t("Subtitle")}
        </p>
      </AnimateOnScroll>

      {/* Stack Grid */}
      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        {/* Core Development */}
        <AnimateOnScroll animation="fade-up" delay={100}>
          <StackColumn
            title={t("Columns.Core")}
            data={coreDevelopment}
          />
        </AnimateOnScroll>

        {/* Frameworks */}
        <AnimateOnScroll animation="fade-up" delay={200}>
          <StackColumn
            title={t("Columns.Frameworks")}
            data={frameworksAndLibraries}
          />
        </AnimateOnScroll>

        {/* Tools */}
        <AnimateOnScroll animation="fade-up" delay={300}>
          <StackColumn
            title={t("Columns.Tools")}
            data={toolsAndPlatforms}
          />
        </AnimateOnScroll>
      </div>
    </section>
  );
}

async function StackColumn({
  title,
  data,
}: {
  title: string;
  data: TechStackItem[];
}) {
  const tContext = await getTranslations("TechContexts");

  return (
    <div className="flex flex-col">
      {/* Column Header */}
      <div className="border-border/50 mb-6 border-b pb-4">
        <h3 className="text-foreground/60 font-mono text-xs uppercase tracking-widest">
          {title}
        </h3>
      </div>

      {/* Items */}
      <div className="flex flex-col gap-1" dir="ltr">
        {data.map(({ name }, i) => (
          <StackItem
            key={`${i}_${name}`}
            name={name}
            context={tContext(name.replaceAll(" ", "_").replaceAll(".", "DOT"))}
          />
        ))}
      </div>
    </div>
  );
}

function StackItem({ name, context }: { name: string; context: string }) {
  return (
    <div className="group flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors hover:bg-foreground/5">
      <span className="text-foreground font-medium tracking-tight">
        {name}
      </span>
      <span className="text-foreground/40 text-sm opacity-0 transition-opacity group-hover:opacity-100">
        {context}
      </span>
    </div>
  );
}
