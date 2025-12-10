import Link from "next/link";
import { Briefcase, Trophy, Zap, ArrowRight, Terminal } from "lucide-react";
import Image from "next/image";

// Metric configuration
const KEY_METRICS = [
  {
    value: "6+",
    label: "Years Exp",
    fullLabel: "Dental & Software",
    icon: Briefcase,
  },
  { value: "3.8", label: "GPA", fullLabel: "Computer Science", icon: Trophy },
  { value: "1", label: "Exit", fullLabel: "Product Sold", icon: Zap },
];

export default function AuthorCTA() {
  const CONTACT_LINK = "/contact";

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-24">
      {/* Main Card Container */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:shadow-2xl">
        {/* 1. Background Pattern - Adjusted opacity for light/dark */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] bg-size-[20px_20px] opacity-[0.03] dark:bg-[radial-gradient(#ffffff_1px,transparent_1px)] dark:opacity-[0.08]" />

        {/* Subtle Gradient Glow */}
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 bg-blue-500/10 blur-[100px] dark:bg-blue-500/10" />

        <div className="relative z-10 flex flex-col items-center gap-10 p-8 md:gap-16 md:p-16 lg:flex-row">
          {/* LEFT: Avatar & Identity */}
          <div className="group relative shrink-0">
            {/* Avatar Container */}
            <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-lg md:h-44 md:w-44 dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-xl">
              <Image
                src={"/images/avatars/avatar.jpg"}
                alt="Ali mohsin's photo"
                width={400}
                height={400}
              />

              {/* Fallback Placeholder (Use <Image> in production) */}
              <div className="flex h-full w-full flex-col items-center justify-center text-zinc-400 dark:text-zinc-500">
                <Terminal className="mb-2 h-10 w-10 opacity-50" />
                <span className="font-mono text-xs tracking-widest uppercase">
                  System
                  <br />
                  Admin
                </span>
              </div>
            </div>

            {/* Status Indicator */}
            <div className="absolute -right-4 -bottom-3 flex items-center gap-1.5 rounded-full border border-zinc-200 bg-white px-3 py-1.5 font-mono text-[10px] font-bold text-emerald-600 shadow-md dark:border-zinc-800 dark:bg-zinc-900 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>
              OPEN FOR WORK
            </div>
          </div>

          {/* MIDDLE: Content */}
          <div className="grow text-center lg:text-left">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-100">
              Ali Mohsin
              <span className="mt-2 block text-xl font-medium text-zinc-500 md:text-2xl dark:text-zinc-400">
                The Architect.
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg lg:mx-0 dark:text-zinc-400">
              Full Stack Engineer combining{" "}
              <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                6+ years of clinical precision
              </span>{" "}
              in dental tech with robust software architecture. I don&apos;t
              just write code; I build production-ready systems.
            </p>

            {/* Metrics Grid */}
            <div className="mx-auto grid max-w-lg grid-cols-3 gap-4 lg:mx-0">
              {KEY_METRICS.map((metric) => (
                <div
                  key={metric.label}
                  className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-4 text-center shadow-xs transition-colors hover:border-zinc-300 lg:text-left dark:border-zinc-800 dark:bg-zinc-900/50 dark:hover:border-zinc-700"
                >
                  <div className="mb-2 flex items-center justify-center gap-1.5 text-zinc-500 lg:justify-start">
                    <metric.icon className="h-3.5 w-3.5" />
                    <span className="text-[10px] font-bold tracking-wider uppercase">
                      {metric.label}
                    </span>
                  </div>
                  <div className="font-mono text-xl font-bold text-zinc-900 md:text-2xl dark:text-zinc-100">
                    {metric.value}
                  </div>
                  <div className="hidden truncate text-[10px] text-zinc-500 md:block">
                    {metric.fullLabel}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Primary Action */}
          <div className="w-full shrink-0 lg:w-auto">
            <Link
              href={CONTACT_LINK}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-zinc-900 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-zinc-800 lg:w-auto dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
            >
              <span className="relative z-10">Start Building</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="mt-4 text-center text-xs font-medium text-zinc-500">
              Response time: &lt; 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
