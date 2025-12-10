import Link from "next/link";
import { LayoutGrid, Briefcase, Code, ArrowRight } from "lucide-react";

const FOCUS_AREAS = [
  {
    title: "System Architecture",
    summary:
      "Deep dives into database scaling, cloud deployment, and designing resilient, modern microservices.",
    icon: LayoutGrid,
    slug: "architecture",

    // Light: Blue-600, Dark: Blue-400
    iconColor: "text-blue-600 dark:text-blue-400",
    bgHover:
      "hover:border-blue-500/50 dark:hover:border-blue-400/50 hover:bg-blue-50/50 dark:hover:bg-blue-900/10",
  },
  {
    title: "Dental Tech Systems",
    summary:
      "Bridging clinical precision with software—exploring custom desktop apps and SaaS solutions for labs.",
    icon: Briefcase,
    slug: "dental-tech",

    iconColor: "text-emerald-600 dark:text-emerald-400",
    bgHover:
      "hover:border-emerald-500/50 dark:hover:border-emerald-400/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10",
  },
  {
    title: "Core Stack Mastery",
    summary:
      "Hands-on tutorials and advanced tips for Next.js, TypeScript, C#, and high-performance Tailwind CSS styling.",
    icon: Code,
    slug: "stack",
    iconColor: "text-purple-600 dark:text-purple-400",
    bgHover:
      "hover:border-purple-500/50 dark:hover:border-purple-400/50 hover:bg-purple-50/50 dark:hover:bg-purple-900/10",
  },
];

export default function FocusSpotlight() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-20">
      <div className="mb-12 md:text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-100">
          Technical Focus Areas
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Where engineering precision meets real-world application.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {FOCUS_AREAS.map((area) => (
          <Link
            key={area.title}
            href={`/blog?category=${area.slug}#archive`}
            className={`group relative flex h-full flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all duration-300 dark:border-zinc-800 dark:bg-zinc-900/30 ${area.bgHover}`}
          >
            <div>
              {/* Icon Container */}
              <div
                className={`mb-6 w-fit rounded-xl border border-zinc-100 bg-zinc-50 p-3 shadow-sm transition-colors group-hover:scale-105 dark:border-zinc-800 dark:bg-zinc-900`}
              >
                <area.icon className={`h-6 w-6 ${area.iconColor}`} />
              </div>

              {/* Title & Text */}
              <h3 className="mb-3 text-xl font-bold text-zinc-900 transition-colors dark:text-zinc-100">
                {area.title}
              </h3>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                {area.summary}
              </p>
            </div>

            {/* Action Link */}
            <div className="mt-8 flex items-center text-sm font-semibold transition-transform group-hover:translate-x-1">
              <span className="text-zinc-900 dark:text-zinc-200">
                View Articles
              </span>
              <ArrowRight className="ml-2 h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-1 dark:text-zinc-500" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
