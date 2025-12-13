import { ArrowUpRight, Hospital } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function AboutMe_Redesign() {
  const t = await getTranslations("HomePage.AboutMe");

  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden rounded-md px-6 py-24 lg:px-6 lg:py-32 xl:px-0">
      <div className="">
        <h3 className="mb-1 text-4xl font-bold tracking-tighter lg:text-6xl">
          {t("Title_Who")}{" "}
          <span className="text-foreground/50">{t("Title_Iam")}</span>
        </h3>
        <p className="text-foreground/40 max-w-sm text-sm font-light lg:text-lg rtl:mt-8">
          {t("Subtitle")}
        </p>
      </div>

      <div className="group relative mb-12 overflow-hidden rounded-2xl">
        <div className="relative gap-12 rounded-2xl py-8 md:py-16">
          {/* Title Section */}
          <div className="grid grid-cols-12 lg:col-span-12">
            <div className="col-span-4">
              <h5 className="text-sm text-zinc-500 dark:text-zinc-400">
                {t("Title_Who")} {t("Title_Iam")}
              </h5>
            </div>
            <div className="col-span-8">
              <h2 className="mb-12 max-w-2xl text-5xl leading-tight font-light tracking-tighter text-zinc-900 capitalize md:text-6xl lg:text-6xl dark:text-white">
                {t("HeroTitle")}
              </h2>
            </div>
          </div>

          {/* Biography Section */}
          <div className="col-span-12 grid grid-cols-12 gap-4 border-y border-zinc-200 py-12 md:gap-0 dark:border-zinc-800">
            <div className="col-span-4">
              <h5 className="mb-2 text-xs text-zinc-500 md:text-sm dark:text-zinc-400">
                {t("Biography.Title")}
              </h5>
            </div>
            <div className="col-span-6 flex max-w-2xl flex-col gap-8 font-serif text-base text-zinc-700 md:text-lg dark:text-zinc-300">
              <p>{t("Biography.P1")}</p>
              <p>{t("Biography.P2")}</p>
            </div>
          </div>

          {/* Stats Section - Minimal Typography Focus */}
          <div className="grid grid-cols-12 gap-4 py-12 md:gap-0">
            <div className="col-span-4">
              <h5 className="mt-1 text-xs text-zinc-500 md:text-sm dark:text-zinc-400">
                {t("Stats.KeyFacts")}
              </h5>
            </div>
            <div className="col-span-8 max-w-2xl space-y-12">
              {/* Stat Row 1 - Product Exit */}
              <div className="group/stat border-b border-zinc-200 pb-8 transition-all hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600">
                <div className="flex items-baseline justify-between">
                  <div>
                    <div className="mb-2 font-mono text-[10px] tracking-wider text-zinc-500 uppercase md:text-xs dark:text-zinc-400">
                      {t("Stats.Achievement")}
                    </div>
                    <div className="text-2xl font-light tracking-tight text-zinc-900 md:text-3xl dark:text-white">
                      {t("Stats.Achievement_Desc")}
                    </div>
                  </div>
                  <div className="mt-1 font-mono text-xs text-zinc-400 md:text-sm dark:text-zinc-500">
                    2024
                  </div>
                </div>
              </div>

              {/* Stat Row 2 - Experience Grid */}
              <div className="grid grid-cols-2 gap-8">
                <div className="group/stat">
                  <div className="mb-3 font-mono text-[10px] tracking-wider text-zinc-500 uppercase md:text-xs dark:text-zinc-400">
                    {t("Stats.Experience")}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-light tracking-tighter text-zinc-900 tabular-nums md:text-7xl dark:text-white">
                      6
                    </span>
                    <span className="text-2xl font-light text-zinc-400 dark:text-zinc-500">
                      {t("Stats.Years")}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {t("Stats.DentalTech")}
                  </div>
                </div>

                <div className="group/stat">
                  <div className="mb-3 font-mono text-[10px] tracking-wider text-zinc-500 uppercase md:text-xs dark:text-zinc-400">
                    {t("Stats.Education")}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-light tracking-tighter text-zinc-900 tabular-nums md:text-7xl dark:text-white">
                      2
                    </span>
                    <span className="text-2xl font-light text-zinc-400 dark:text-zinc-500">
                      {t("Stats.Degrees")}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {t("Stats.DualMajor")}
                  </div>
                </div>
              </div>

              {/* Stat Row 3 - GPA Emphasis */}
              <div className="group/stat border-y border-zinc-200 py-8 transition-all hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600">
                <div className="flex flex-wrap items-end justify-between gap-2 sm:gap-0">
                  <div>
                    <div className="mb-3 font-mono text-[10px] tracking-wider text-zinc-500 uppercase md:text-xs dark:text-zinc-400">
                      {t("Stats.Academic")}
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-7xl font-light tracking-tighter text-zinc-900 tabular-nums md:text-8xl dark:text-white">
                        93
                      </span>
                      <span className="text-4xl font-light text-zinc-900 dark:text-white">
                        .8
                      </span>
                      <span className="text-2xl font-light text-zinc-400 dark:text-zinc-500">
                        %
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {t("Stats.CS_Degree")}
                    </div>
                    <div className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
                      {t("Stats.Bachelor")}
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat Row 4 - Tech Stack Count */}
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="group/stat">
                  <div className="mb-3 font-mono text-[10px] tracking-wider text-zinc-500 uppercase md:text-xs dark:text-zinc-400">
                    {t("Stats.Technologies")}
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-6xl font-light tracking-tighter text-zinc-900 tabular-nums md:text-7xl dark:text-white">
                      10
                    </span>
                    <span className="text-4xl font-light text-zinc-400 dark:text-zinc-500">
                      +
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {t("Stats.CoreStack")}
                  </div>
                </div>

                <div className="group/stat">
                  <div className="mb-3 font-mono text-[10px] tracking-wider text-zinc-500 uppercase md:text-xs dark:text-zinc-400">
                    {t("Stats.Availability")}
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="animate-pulse text-6xl font-light tracking-tighter text-zinc-900 md:text-7xl dark:text-white">
                      {t("Stats.Sure")}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {t("Stats.Timezone")}
                  </div>
                </div>
              </div>

              {/* Stat Row 5 - Location (Minimal) */}
              <div className="group/stat border-t border-zinc-200 py-8 transition-all hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600">
                <div className="mb-3 font-mono text-[10px] tracking-wider text-zinc-500 uppercase md:text-xs dark:text-zinc-400">
                  {t("Stats.BasedIn")}
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">🇮🇶</span>
                  <div>
                    <div className="text-xl font-light text-zinc-900 dark:text-white">
                      {t("Stats.Location")}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {t("Stats.Global")}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THE DIFFERENTIATORS - Minimal Cards */}
      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            {t("Differentiators.Title")}
          </h3>
          <div className="ml-6 h-px flex-1 bg-linear-to-r from-zinc-300 to-transparent dark:from-zinc-700" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group/diff relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700">
            <div className="absolute -top-6 -right-6 text-8xl opacity-[0.02] dark:opacity-[0.03]">
              🦷
            </div>
            <div className="relative">
              <div className="mb-4 text-5xl font-light tracking-tighter text-zinc-900 tabular-nums dark:text-white">
                0.1mm
              </div>
              <h4 className="mb-2 text-lg font-medium text-zinc-900 dark:text-white">
                {t("Differentiators.Card1_Title")}
              </h4>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t("Differentiators.Card1_Desc")}
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group/diff relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700">
            <div className="group/diff-hover:bg-red-500 absolute -top-6 -right-6 text-8xl opacity-[0.02] group-hover:-top-2 dark:opacity-[0.03]">
              <Hospital size={100} />
            </div>
            <div className="relative">
              <div className="mb-4 font-mono text-xs tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                {t("Differentiators.Card2_Tag")}
              </div>
              <h4 className="mb-2 text-lg font-medium text-zinc-900 dark:text-white">
                {t("Differentiators.Card2_Title")}
              </h4>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t("Differentiators.Card2_Desc")}
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group/diff relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900/30 dark:hover:border-zinc-700">
            <div className="absolute -top-6 -right-6 text-8xl opacity-[0.02] dark:opacity-[0.03]">
              🚀
            </div>
            <div className="relative">
              <div className="mb-4 font-mono text-xs tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                {t("Differentiators.Card3_Tag")}
              </div>
              <h4 className="mb-2 text-lg font-medium text-zinc-900 dark:text-white">
                {t("Differentiators.Card3_Title")}
              </h4>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                {t("Differentiators.Card3_Desc")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SUBTLE CTA */}
      <div className="mt-16 text-center">
        <Link
          href="#selected-work"
          className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          <span>{t("CTA")}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </section>
  );
}
