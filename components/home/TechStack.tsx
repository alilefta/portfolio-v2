import {
  coreDevelopment,
  frameworksAndLibraries,
  toolsAndPlatforms,
} from "@/lib/data/techstack_section";
import { TechStackItem } from "@/lib/types/common";

export default function TechStack() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-8 lg:px-8 lg:py-16">
      <div className="text-center">
        <h3 className="mb-2 text-4xl tracking-tighter lg:text-6xl">
          The <span className="font-bold">Tech Stack</span>
        </h3>
        <p className="text-foreground/40 mx-auto max-w-3xl text-lg lg:text-xl">
          Technologies I use to build production-ready applications, built for
          precision and scalability.
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 rounded-4xl border border-zinc-200 bg-zinc-100/70 p-6 shadow-xl backdrop-blur-sm md:grid-cols-2 lg:grid-cols-3 lg:p-12 dark:border-white/10 dark:bg-zinc-900/40">
        {/* Core Development Column */}
        <ColumnContainer
          title="Core Languages & Systems"
          data={coreDevelopment}
          color="text-blue-500"
        />

        {/* Frameworks And Libraries Column */}
        <ColumnContainer
          title="Frameworks & Libraries"
          data={frameworksAndLibraries}
          color="text-purple-500"
        />

        {/* Tools and Platforms Column */}
        <ColumnContainer
          title="Tools and Platforms"
          data={toolsAndPlatforms}
          color="text-emerald-500"
        />
      </div>
    </section>
  );
}

function ColumnContainer({
  title,
  data,
  color,
}: {
  title: string;
  data: TechStackItem[];
  color: string;
}) {
  return (
    <div className="flex flex-col">
      <div className="mb-8 border-b border-zinc-200/50 pb-3 dark:border-white/10">
        <h3
          className={`text-foreground/80 mb-1 font-mono text-lg tracking-wide uppercase`}
        >
          {title}
        </h3>
      </div>

      <div className="flex flex-col gap-1">
        {data.map(({ name, context }, i) => (
          <TechStackRow
            key={`${i}_${name}_${context.substring(0, 4)}`}
            name={name}
            context={context}
          />
        ))}
      </div>
    </div>
  );
}

export function TechStackRow({ name, context }: TechStackItem) {
  return (
    <div className="group flex flex-col items-start gap-1 rounded-lg border-b border-zinc-200/50 px-2 py-3 transition-all duration-300 last:border-b-0 hover:bg-zinc-100 hover:shadow-sm dark:border-white/5 dark:hover:bg-white/5">
      <div className="flex w-full items-center justify-between">
        <span className="text-md font-semibold tracking-tight text-zinc-900 transition-colors dark:text-white">
          {name}
        </span>
        <span className="text-right text-sm tracking-wide text-zinc-500 dark:text-zinc-400">
          {context}
        </span>
      </div>
    </div>
  );
}
