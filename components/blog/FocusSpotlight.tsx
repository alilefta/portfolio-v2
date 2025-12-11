import Link from "next/link";
import { LayoutGrid, Briefcase, Code, ArrowRight } from "lucide-react";

const FOCUS_AREAS = [
  {
    title: "System Architecture",
    summary:
      "Deep dives into database scaling, cloud deployment, and designing resilient, modern microservices.",
    icon: LayoutGrid,
    // Changed: 'query' instead of 'slug' to be more explicit about intent
    query: "architecture",
    iconColor: "text-blue-600 dark:text-blue-400",
    bgHover:
      "hover:border-blue-500/30 dark:hover:border-blue-400/30 hover:bg-blue-50/50 dark:hover:bg-blue-900/10",
  },
  {
    title: "Dental Tech Systems",
    summary:
      "Bridging clinical precision with software—exploring custom desktop apps and SaaS solutions for labs.",
    icon: Briefcase,
    query: "dental",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    bgHover:
      "hover:border-emerald-500/30 dark:hover:border-emerald-400/30 hover:bg-emerald-50/50 dark:hover:bg-emerald-900/10",
  },
  {
    title: "Core Stack Mastery",
    summary:
      "Hands-on tutorials and advanced tips for Next.js, TypeScript, C#, and high-performance Tailwind CSS styling.",
    icon: Code,
    query: "typescript", // Narrowed to a specific high-value keyword
    iconColor: "text-purple-600 dark:text-purple-400",
    bgHover:
      "hover:border-purple-500/30 dark:hover:border-purple-400/30 hover:bg-purple-50/50 dark:hover:bg-purple-900/10",
  },
];

export default function FocusSpotlight() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-24 lg:px-8">
      {/* Header */}
      <div className="mb-16 md:text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-100">
          Technical Focus Areas
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Where engineering precision meets real-world application.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {FOCUS_AREAS.map((area) => (
          <Link
            key={area.title}
            // UPDATE: Targets the 'q' param for keyword search + anchor to archive section
            href={`/blog?q=${area.query}#archive`}
            className={`group relative flex h-full flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all duration-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/20 ${area.bgHover}`}
          >
            <div>
              {/* Icon Container - Floating effect on hover */}
              <div
                className={`mb-6 w-fit rounded-xl border border-zinc-200 bg-white p-3 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 dark:border-zinc-700 dark:bg-zinc-800`}
              >
                <area.icon className={`h-6 w-6 ${area.iconColor}`} />
              </div>

              {/* Title & Text */}
              <h3 className="mb-3 text-xl font-bold text-zinc-900 dark:text-zinc-100">
                {area.title}
              </h3>
              <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
                {area.summary}
              </p>
            </div>

            {/* Action Link - Visual cue */}
            <div className="mt-8 flex items-center text-sm font-semibold transition-colors">
              <span className="text-zinc-900 group-hover:underline group-hover:underline-offset-4 dark:text-zinc-200">
                View Related Articles
              </span>
              <ArrowRight className="ml-2 h-4 w-4 text-zinc-400 transition-transform group-hover:translate-x-1 dark:text-zinc-500" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
