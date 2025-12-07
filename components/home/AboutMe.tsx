import { ArrowUpRight, Sparkles } from "lucide-react";
import { Badge } from "../ui/custom/Badge";

export default function AboutMe() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden rounded-md px-6 py-24 lg:px-0 lg:py-32">
      {/* Ambient Background - Subtle in both modes */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10" />
      </div>

      {/* THE STORY CARD */}
      {/* border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-950/70 rounded-[2.5rem]*/}
      <div className="group relative mb-12 overflow-hidden rounded-2xl">
        {/* Noise Texture - Very Subtle */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.02] mix-blend-overlay dark:opacity-[0.015]">
          <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Grid Pattern - Framer-style */}
        <div
          className="absolute inset-0 opacity-40 dark:opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgb(0 0 0 / 0.03) 1px, transparent 1px), linear-gradient(90deg, rgb(0 0 0 / 0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 50% at 50% 50%, black, transparent)",
          }}
        />

        {/* Spotlight Effect - Only on hover */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/10 opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-100 dark:bg-blue-500/20" />

        <div className="relative grid gap-12 rounded-2xl py-8 md:py-16 lg:grid-cols-12 lg:gap-20">
          {/* LEFT: The Narrative */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <Badge className="mb-8" variant={"surface"} intent={"neutral"}>
              <Sparkles size={16} className="mr-2" />
              <span className="font-mono text-xs tracking-[0.2em]">
                Who I am
              </span>
            </Badge>

            {/* The Hook */}
            <h2 className="mb-12 text-5xl leading-none font-light tracking-tighter text-zinc-900 md:text-6xl lg:text-8xl dark:text-white">
              <span className="text-foreground">
                From Dental Labs To Software engineering
              </span>
            </h2>

            {/* The Narrative Blocks */}
            <div className="text-foreground/80 flex flex-col gap-4 font-serif">
              <p>
                I&apos;m a full-stack engineer with a strong focus on building
                practical, high-impact software. My background in both
                technology and medical environments taught me how to solve
                real-world problems with clarity, structure, and a calm,
                analytical mindset. Whether I&apos;m architecting a SaaS system,
                designing a UI, or optimizing backend logic, I care about the
                details that make a product dependable, efficient, and pleasant
                to use.
              </p>
              <p>
                Outside of code, I&apos;m someone who enjoys learning deeply,
                simplifying complex ideas, and creating things that feel
                intentional. I love systems thinking, clean design, and the
                craft behind turning an idea into something functional and
                polished. Every project I work on—big or small—is an opportunity
                to improve, refine my approach, and deliver something
                meaningful.
              </p>
            </div>
          </div>

          {/* RIGHT: The Proof */}
          <div className="lg:col-span-5">
            {/* Floating Metric Cards */}
            <div className="space-y-4">
              {/* Card 1: The Big Win */}
              <div className="group/card relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:bg-zinc-900">
                <div className="absolute -right-8 -bottom-8 text-[120px] leading-none font-bold text-zinc-100 transition-all group-hover/card:text-zinc-200 dark:text-zinc-900 dark:group-hover/card:text-zinc-800">
                  01
                </div>
                <div className="relative">
                  <div className="mb-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    Achievement
                  </div>
                  <div className="mb-1 text-2xl font-bold text-zinc-900 dark:text-white">
                    Product Exit
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    Built & sold a SaaS
                  </div>
                </div>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                  <div className="mb-4 text-4xl font-bold text-zinc-900 tabular-nums dark:text-white">
                    6
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Years in Dental Tech
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                  <div className="mb-4 flex items-baseline">
                    <span className="text-4xl font-bold text-zinc-900 tabular-nums dark:text-white">
                      93
                    </span>
                    <span className="text-2xl text-zinc-500 dark:text-zinc-400">
                      .8
                    </span>
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    CS Degree GPA
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                  <div className="mb-4 text-4xl font-bold text-zinc-900 tabular-nums dark:text-white">
                    2
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Degrees Earned
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                  <div className="mb-4 flex items-baseline">
                    <span className="text-4xl font-bold text-zinc-900 tabular-nums dark:text-white">
                      10
                    </span>
                    <span className="text-2xl text-zinc-500 dark:text-zinc-400">
                      +
                    </span>
                  </div>
                  <div className="text-xs text-zinc-600 dark:text-zinc-400">
                    Tech Stack
                  </div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-zinc-50/50 p-5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-200 text-lg dark:bg-zinc-800">
                    🇮🇶
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                      Iraq → World
                    </div>
                    <div className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
                      Remote Ready • UTC+3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THE DIFFERENTIATORS */}
      <div className="relative">
        {/* Section Label */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white">
            What Makes This Different
          </h3>
          <div className="ml-6 h-px flex-1 bg-linear-to-r from-zinc-300 to-transparent dark:from-zinc-700" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group/diff relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-br from-blue-500/5 to-transparent p-8 transition-all hover:border-blue-500/30 hover:from-blue-500/10 dark:border-zinc-800 dark:from-blue-500/5">
            <div className="absolute -top-6 -right-6 text-8xl opacity-[0.03] transition-opacity group-hover/diff:opacity-[0.08] dark:opacity-[0.03] dark:group-hover/diff:opacity-[0.06]">
              🦷
            </div>
            <div className="relative">
              <div className="mb-4 text-4xl font-bold text-blue-600 dark:text-blue-400">
                0.1mm
              </div>
              <h4 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                Precision Training
              </h4>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Six years creating dental restorations taught me that perfection
                isn&apos;t optional—it&apos;s the baseline.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group/diff relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-br from-purple-500/5 to-transparent p-8 transition-all hover:border-purple-500/30 hover:from-purple-500/10 dark:border-zinc-800 dark:from-purple-500/5">
            <div className="absolute -top-6 -right-6 text-8xl opacity-[0.03] transition-opacity group-hover/diff:opacity-[0.08] dark:opacity-[0.03] dark:group-hover/diff:opacity-[0.06]">
              🏥
            </div>
            <div className="relative">
              <div className="mb-4 text-4xl font-bold text-purple-600 dark:text-purple-400">
                Healthcare
              </div>
              <h4 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                Industry Insider
              </h4>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                I don&apos;t learn your industry—I lived it. Real workflows.
                Real problems. Real solutions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group/diff relative overflow-hidden rounded-3xl border border-zinc-200 bg-linear-to-br from-emerald-500/5 to-transparent p-8 transition-all hover:border-emerald-500/30 hover:from-emerald-500/10 dark:border-zinc-800 dark:from-emerald-500/5">
            <div className="absolute -top-6 -right-6 text-8xl opacity-[0.03] transition-opacity group-hover/diff:opacity-[0.08] dark:opacity-[0.03] dark:group-hover/diff:opacity-[0.06]">
              🚀
            </div>
            <div className="relative">
              <div className="mb-4 text-4xl font-bold text-emerald-600 dark:text-emerald-400">
                Shipped
              </div>
              <h4 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">
                Proven Builder
              </h4>
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Not just coding tutorials. Built a product. Sold it. Supported
                real users. That&apos;s the difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SUBTLE CTA */}
      <div className="mt-16 text-center">
        <a
          href="#selected-work"
          className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
        >
          <span>See what I&apos;ve built</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
