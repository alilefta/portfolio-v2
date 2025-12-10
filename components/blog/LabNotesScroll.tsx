import Link from "next/link";
import {
  Terminal,
  Lightbulb,
  Zap,
  ArrowRight,
  BookOpen,
  Hash,
} from "lucide-react";
import React from "react";

interface LabNote {
  slug: string;
  title: string;
  type: "Snippet" | "Review" | "Fix";
  techTag: string;
  noteNumber: string;
}

// Mock Data
const LAB_NOTES: LabNote[] = [
  {
    slug: "tailwind-truncate-fix",
    title: "Tailwind Hack: Two-line Text Truncation",
    type: "Snippet",
    techTag: "Tailwind",
    noteNumber: "005",
  },
  {
    slug: "velite-first-look",
    title: "First Look at Velite: The New Content Layer?",
    type: "Review",
    techTag: "Next.js",
    noteNumber: "004",
  },
  {
    slug: "postgres-index-optimization",
    title: "Simple PostgreSQL Index Optimization Query",
    type: "Snippet",
    techTag: "SQL",
    noteNumber: "003",
  },
  {
    slug: "nextjs-image-blur",
    title: "Fix: Next.js Static Export Image Blur",
    type: "Fix",
    techTag: "Next.js",
    noteNumber: "002",
  },
  {
    slug: "zsh-vs-bash",
    title: "Why I Switched from Bash to Zsh",
    type: "Review",
    techTag: "DevOps",
    noteNumber: "001",
  },
];

const TypeIcon = ({ type }: { type: LabNote["type"] }) => {
  switch (type) {
    case "Snippet":
      return (
        <Terminal className="h-3.5 w-3.5 text-blue-600 dark:text-blue-400" />
      );
    case "Review":
      return (
        <BookOpen className="h-3.5 w-3.5 text-purple-600 dark:text-purple-400" />
      );
    case "Fix":
      return (
        <Lightbulb className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
      );
    default:
      return <Zap className="h-3.5 w-3.5 text-zinc-500 dark:text-zinc-400" />;
  }
};

export default function LabNotesScroll() {
  return (
    <section className="mx-auto w-full max-w-7xl border-t border-zinc-200 px-4 py-12 md:px-6 dark:border-zinc-800">
      {/* Header */}
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            <Terminal className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
            Lab Notes
          </h2>
          <p className="mt-2 max-w-lg text-sm text-zinc-600 dark:text-zinc-400">
            Quick snippets, config fixes, and engineering logs.
          </p>
        </div>

        <Link
          href="/blog?view=notes"
          className="hidden items-center text-xs font-medium tracking-wider text-zinc-500 uppercase transition-colors hover:text-blue-600 sm:flex dark:text-zinc-400 dark:hover:text-blue-400"
        >
          View Archive <ArrowRight className="ml-1 h-3 w-3" />
        </Link>
      </div>

      {/* Horizontal Scrolling Container */}
      <div className="group/container relative">
        {/* Fade Masks - Adjusted gradients for light/dark */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent md:hidden dark:from-black" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-8 bg-gradient-to-l from-white to-transparent md:hidden dark:from-black" />

        <div className="scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-6 md:mx-0 md:px-0">
          {LAB_NOTES.map((note) => (
            <Link
              key={note.slug}
              href={`/blog/${note.slug}`}
              className="group relative flex h-40 w-[280px] shrink-0 snap-start flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 transition-all duration-300 hover:border-zinc-300 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900/40 dark:hover:border-zinc-700 dark:hover:bg-zinc-900 dark:hover:shadow-black/50"
            >
              {/* Top Row: Note ID & Type */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2 py-1 font-mono text-[10px] text-zinc-500 transition-colors group-hover:text-zinc-700 dark:border-zinc-800/50 dark:bg-zinc-950/50 dark:text-zinc-500 dark:group-hover:text-zinc-400">
                  <Hash className="h-3 w-3 opacity-50" />
                  {note.noteNumber}
                </div>
                {/* Fixed Icon Container Colors */}
                <div
                  className={`rounded-full border border-zinc-200 bg-zinc-50 p-1.5 transition-transform duration-300 group-hover:scale-110 dark:border-zinc-800 dark:bg-zinc-950`}
                >
                  <TypeIcon type={note.type} />
                </div>
              </div>

              {/* Middle: Title */}
              <div>
                <h3 className="line-clamp-2 text-base leading-snug font-semibold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-300">
                  {note.title}
                </h3>
              </div>

              {/* Bottom: Tech Tag & Indicator */}
              <div className="mt-2 flex items-center justify-between border-t border-zinc-100 pt-3 transition-colors group-hover:border-zinc-200 dark:border-zinc-800/50 dark:group-hover:border-zinc-700/50">
                <span className="font-mono text-xs font-medium text-blue-600/80 dark:text-blue-400/80">
                  {note.techTag}
                </span>
                <span className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <ArrowRight className="h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                </span>
              </div>
            </Link>
          ))}

          {/* "View All" Card */}
          <Link
            href="/blog?view=notes"
            className="flex h-40 w-[160px] flex-shrink-0 snap-start flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-transparent text-zinc-400 transition-all duration-300 hover:border-solid hover:border-zinc-400 hover:bg-zinc-50 hover:text-zinc-600 dark:border-zinc-800 dark:text-zinc-500 dark:hover:border-zinc-600 dark:hover:bg-zinc-900/30 dark:hover:text-zinc-200"
          >
            <div className="mb-2 rounded-full bg-zinc-100 p-3 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-900 dark:group-hover:bg-zinc-800">
              <ArrowRight className="h-5 w-5" />
            </div>
            <span className="text-xs font-medium">View All Notes</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
