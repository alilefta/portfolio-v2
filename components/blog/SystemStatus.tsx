import { Activity, BookOpen, Disc, GitCommit, Coffee } from "lucide-react";
import Link from "next/link";

export default function SystemStatus() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-8 md:px-6">
      {/* Container: Looks like a dashboard strip */}
      <div className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between md:gap-8 dark:border-zinc-800 dark:bg-zinc-900/40 dark:shadow-none">
        {/* Label */}
        <div className="flex items-center gap-3 border-b border-zinc-100 pb-4 md:border-r md:border-b-0 md:pr-8 md:pb-0 dark:border-zinc-800">
          <div className="relative flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">
              System Status
            </span>
            <span className="font-mono text-sm font-bold text-zinc-900 dark:text-zinc-200">
              Online & Building
            </span>
          </div>
        </div>

        {/* Status Grid */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3 md:gap-8">
          {/* 1. CURRENTLY CODING */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-md bg-blue-50 p-1.5 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
              <GitCommit className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-zinc-500 uppercase">
                Hacking on
              </span>
              <Link
                href="#"
                className="line-clamp-1 text-sm font-medium text-zinc-900 hover:text-blue-600 dark:text-zinc-200 dark:hover:text-blue-400"
              >
                Labora SaaS v2.0
              </Link>
            </div>
          </div>

          {/* 2. CURRENTLY READING */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-md bg-purple-50 p-1.5 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
              <BookOpen className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-zinc-500 uppercase">
                Reading
              </span>
              <span className="line-clamp-1 text-sm font-medium text-zinc-900 dark:text-zinc-200">
                Data Intensive Apps
              </span>
            </div>
          </div>

          {/* 3. CURRENT OBSESSION / LISTENING */}
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-md bg-amber-50 p-1.5 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400">
              <Coffee className="h-4 w-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold text-zinc-500 uppercase">
                Fueled By
              </span>
              <span className="line-clamp-1 text-sm font-medium text-zinc-900 dark:text-zinc-200">
                Espresso & Lofi
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
