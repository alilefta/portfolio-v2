import { ArrowUpRight, Sparkles } from "lucide-react";

export default function AboutMe() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24 lg:px-8 lg:py-32">
      {/* Ambient Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      {/* THE STORY CARD - Full Width Immersive */}
      <div className="group relative mb-8 overflow-hidden rounded-[2.5rem] border border-white/10 bg-linear-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl">
        {/* Noise Texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.015] mix-blend-overlay">
          <div className="h-full w-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)] bg-size-[64px_64px]" />

        {/* Spotlight Effect */}
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-blue-500/20 opacity-0 blur-[100px] transition-opacity duration-700 group-hover:opacity-100" />

        <div className="relative grid gap-12 p-8 md:p-16 lg:grid-cols-12 lg:gap-16">
          {/* LEFT: The Narrative */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="mb-8 flex items-center gap-3">
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="font-mono text-xs tracking-[0.2em] text-blue-400 uppercase">
                Origin Story
              </span>
            </div>

            {/* The Hook */}
            <h2 className="mb-12 font-serif text-5xl leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-zinc-500">Before I wrote</span>
              <br />
              <span className="bg-linear-to-r from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
                production code,
              </span>
              <br />
              <span className="text-zinc-500">I crafted</span>
              <br />
              <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                dental prosthesis
              </span>
            </h2>

            {/* The Narrative Blocks */}
            <div className="space-y-8 border-l-2 border-white/10 pl-8">
              <div className="group/item">
                <div className="mb-2 font-mono text-xs text-zinc-600">
                  2018—2024
                </div>
                <p className="text-lg leading-relaxed text-zinc-400 transition-colors group-hover/item:text-zinc-300">
                  Six years in dental labs. Every crown, every bridge—
                  <span className="font-semibold text-white">
                    0.1mm precision
                  </span>{" "}
                  or it&apos;s rejected. That&apos;s where I learned that{" "}
                  <span className="font-semibold text-white">
                    details aren&apos;t optional
                  </span>
                  .
                </p>
              </div>

              <div className="group/item">
                <div className="mb-2 font-mono text-xs text-zinc-600">
                  2020—2024
                </div>
                <p className="text-lg leading-relaxed text-zinc-400 transition-colors group-hover/item:text-zinc-300">
                  While working full-time, I completed a{" "}
                  <span className="font-semibold text-white">
                    Computer Science degree
                  </span>{" "}
                  (93.8% GPA). Built a lab management system. Sold it to an
                  active business.
                  <span className="font-semibold text-white">
                    {" "}
                    Zero excuses
                  </span>
                  .
                </p>
              </div>

              <div className="group/item">
                <div className="mb-2 font-mono text-xs text-zinc-600">
                  2025—Present
                </div>
                <p className="text-lg leading-relaxed text-zinc-400 transition-colors group-hover/item:text-zinc-300">
                  Now I bring that same{" "}
                  <span className="font-semibold text-white">
                    craftsman obsession
                  </span>{" "}
                  to code. Healthcare systems. Production SaaS. Things that{" "}
                  <span className="font-semibold text-white">
                    people actually use
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: The Proof */}
          <div className="lg:col-span-5">
            {/* Floating Metric Cards */}
            <div className="space-y-4">
              {/* Card 1: The Big Win */}
              <div className="group/card relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-blue-500/50 hover:bg-white/10">
                <div className="absolute -right-8 -bottom-8 text-[120px] leading-none font-bold text-white/2 transition-all group-hover/card:text-white/4">
                  01
                </div>
                <div className="relative">
                  <div className="mb-2 font-mono text-xs text-zinc-500">
                    Achievement
                  </div>
                  <div className="mb-1 text-2xl font-bold">Product Exit</div>
                  <div className="text-sm text-zinc-400">
                    Built & sold a SaaS
                  </div>
                </div>
              </div>

              {/* Mini Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="mb-4 text-4xl font-bold tabular-nums">6</div>
                  <div className="text-xs text-zinc-500">
                    Years in Dental Tech
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="mb-4 flex items-baseline">
                    <span className="text-4xl font-bold tabular-nums">93</span>
                    <span className="text-2xl text-zinc-500">.8</span>
                  </div>
                  <div className="text-xs text-zinc-500">CS Degree GPA</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="mb-4 text-4xl font-bold tabular-nums">2</div>
                  <div className="text-xs text-zinc-500">Degrees Earned</div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                  <div className="mb-4 flex items-baseline">
                    <span className="text-4xl font-bold tabular-nums">10</span>
                    <span className="text-2xl text-zinc-500">+</span>
                  </div>
                  <div className="text-xs text-zinc-500">Tech Stack</div>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-lg">
                    🇮🇶
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Iraq → World</div>
                    <div className="font-mono text-xs text-zinc-500">
                      Remote Ready • UTC+3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* THE DIFFERENTIATORS - Horizontal Scroll Cards */}
      <div className="relative">
        {/* Section Label */}
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-semibold">What Makes This Different</h3>
          <div className="ml-6 h-px flex-1 bg-linear-to-r from-white/20 to-transparent" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="group/diff relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-blue-500/5 to-transparent p-8 transition-all hover:border-blue-500/30 hover:from-blue-500/10">
            <div className="absolute -top-6 -right-6 text-8xl opacity-[0.03] transition-opacity group-hover/diff:opacity-[0.06]">
              🦷
            </div>
            <div className="relative">
              <div className="mb-4 text-4xl font-bold text-blue-400">0.1mm</div>
              <h4 className="mb-2 text-lg font-semibold">Precision Training</h4>
              <p className="text-sm leading-relaxed text-zinc-400">
                Six years creating dental restorations taught me that perfection
                isn&apos;t optional—it&apos;s the baseline.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group/diff relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-purple-500/5 to-transparent p-8 transition-all hover:border-purple-500/30 hover:from-purple-500/10">
            <div className="absolute -top-6 -right-6 text-8xl opacity-[0.03] transition-opacity group-hover/diff:opacity-[0.06]">
              🏥
            </div>
            <div className="relative">
              <div className="mb-4 text-4xl font-bold text-purple-400">
                Healthcare
              </div>
              <h4 className="mb-2 text-lg font-semibold">Industry Insider</h4>
              <p className="text-sm leading-relaxed text-zinc-400">
                I don&apos;t learn your industry—I lived it. Real workflows.
                Real problems. Real solutions.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="group/diff relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-emerald-500/5 to-transparent p-8 transition-all hover:border-emerald-500/30 hover:from-emerald-500/10">
            <div className="absolute -top-6 -right-6 text-8xl opacity-[0.03] transition-opacity group-hover/diff:opacity-[0.06]">
              🚀
            </div>
            <div className="relative">
              <div className="mb-4 text-4xl font-bold text-emerald-400">
                Shipped
              </div>
              <h4 className="mb-2 text-lg font-semibold">Proven Builder</h4>
              <p className="text-sm leading-relaxed text-zinc-400">
                Not just coding tutorials. Built a product. Sold it. Supported
                real users. That&apos;s the difference.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SUBTLE CTA - Not a Button */}
      <div className="mt-16 text-center">
        <a
          href="#selected-work"
          className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <span>See what I&apos;ve built</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
