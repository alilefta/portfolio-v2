import { professionalSkills, technicalSkills } from "@/lib/db/skills_section";

import { SkillItem } from "@/lib/types/common";
import { getTranslations } from "next-intl/server";

const sanitizeKey = (key: string) =>
  key.replaceAll(" ", "_").replaceAll(".", "DOT");

export default async function SkillsSection() {
  const t = await getTranslations("HomePage.Skills");

  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-8 lg:px-8 lg:py-16">
      <div className="text-center">
        <h3 className="mb-1 text-4xl font-bold tracking-tighter lg:text-6xl ltr:flex ltr:items-center ltr:gap-1.5">
          <span>{t("Title_The")}</span>
          <span className="text-foreground/50">{t("Title_Skills")}</span>
        </h3>
        <p className="text-foreground/40 mx-auto max-w-3xl text-lg font-light lg:text-xl rtl:mt-8">
          {t("Subtitle")}
        </p>
      </div>

      {/* 2. SPECIFICATION MATRIX CONTAINER: Reintroducing Depth and Glass Effect */}
      <div className="grid w-full grid-cols-1 gap-16 rounded-4xl border border-zinc-200 bg-zinc-100/70 p-6 shadow-xl backdrop-blur-sm md:grid-cols-2 md:gap-12 lg:p-12 dark:border-white/10 dark:bg-zinc-900/40">
        {/* Core Development Column */}
        <ColumnContainer
          title={t("Columns.Professional")}
          data={professionalSkills}
        />

        {/* Frameworks And Libraries Column */}
        <ColumnContainer
          title={t("Columns.Technical")}
          data={technicalSkills}
        />
      </div>
    </section>
  );
}

interface ColumnContainerProps {
  title: string;
  data: SkillItem[];
  color?: string;
}
async function ColumnContainer({ title, data }: ColumnContainerProps) {
  const tNames = await getTranslations("SkillNames");
  const tDesc = await getTranslations("SkillDescriptions");

  return (
    <div className="flex flex-col">
      {/* 3. COLUMN HEADER: Applied Architectural Styling */}
      <div className="mb-8 border-b border-zinc-200/50 pb-3 dark:border-white/10">
        <h3
          className={`text-foreground/80 mb-1 font-mono text-lg tracking-wide uppercase`}
        >
          {title}
        </h3>
      </div>

      <div className="flex flex-col gap-1">
        {data.map(({ name, description }, i) => (
          <SkillRow
            key={`${i}_${name}_${description.substring(0, 4)}`}
            name={tNames(sanitizeKey(name))}
            description={tDesc(sanitizeKey(name))}
          />
        ))}
      </div>
    </div>
  );
}

export function SkillRow({ name, description }: SkillItem) {
  return (
    <div className="group flex flex-col items-start gap-1 rounded-lg border-b border-zinc-200/50 px-2 py-3 transition-all duration-300 last:border-b-0 hover:bg-zinc-100 hover:shadow-sm dark:border-white/5 dark:hover:bg-white/5">
      <div className="flex w-full items-center justify-between">
        <span className="text-md font-semibold tracking-tight text-zinc-900 transition-colors dark:text-white">
          {name}
        </span>
        <span className="text-right text-sm tracking-wide text-zinc-500 dark:text-zinc-400">
          {description}
        </span>
      </div>
    </div>
  );
}
