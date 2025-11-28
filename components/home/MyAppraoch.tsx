import { getLocale, getTranslations } from "next-intl/server";
export default async function MyApproach() {
  const locale = await getLocale();
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 text-center">
      <p className="mb-8 text-xs tracking-[0.2em] text-zinc-500 uppercase">
        My Approach
      </p>
      <h2 className="mb-2 text-5xl font-medium tracking-tighter text-white md:text-8xl">
        I DON'T JUST
      </h2>
      <h2 className="mb-6 text-5xl font-medium tracking-tighter text-white md:text-8xl">
        WRITE CODE
      </h2>
      <h2 className="mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-5xl font-medium tracking-tighter text-transparent md:text-8xl">
        I BUILD
      </h2>
      <h2 className="mb-20 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-5xl font-medium tracking-tighter text-transparent md:text-8xl">
        SOLUTIONS
      </h2>

      <div className="mx-auto mb-20 max-w-2xl space-y-4 text-sm leading-relaxed font-light text-zinc-400">
        <p>
          Most developers focus on implementing features. I focus on solving
          problems.
        </p>
        <p>
          Every project starts with understanding the real user need. Then I
          architect a solution with the precision of a craftsman and the
          pragmatism of someone who's built things that people actually pay for.
        </p>
        <p>
          Healthcare SaaS. Enterprise Applications. Production-Ready Systems. If
          it's worth building, it's worth building right.
        </p>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 border-t border-white/5 pt-8 font-mono text-xs text-zinc-600 md:flex-row">
        <span>Based In Iraq 🇮🇶</span>
        <span className="hidden md:inline">•</span>
        <span>Building For The World 🌍</span>
        <span className="hidden md:inline">•</span>
        <span>Open To Remote Opportunities</span>
      </div>
    </section>
  );
}
