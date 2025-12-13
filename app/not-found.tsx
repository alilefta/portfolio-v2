import Link from "next/link";
import { Button } from "@/components/ui/button"; // Assuming Shadcn Button
import { ArrowLeft, Home, Terminal } from "lucide-react";

export const metadata = {
  title: "404: System Error | Ali Lefta",
  description: "The requested resource could not be found.",
};

export default function NotFound() {
  return (
    <main className="font-inter relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-white text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* 1. Background Grid & Glow (Reusing your industrial theme) */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]" />
      </div>

      {/* Subtle Red/Amber Error Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[120px] dark:bg-red-500/10" />

      <div className="relative z-10 flex max-w-md flex-col items-center px-4 text-center">
        {/* 2. Status Indicator */}
        <div className="mb-8 flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-medium text-red-800 dark:border-red-900/50 dark:bg-red-900/20 dark:text-red-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500"></span>
          </span>
          <span>ERROR 404: RESOURCE_MISSING</span>
        </div>

        {/* 3. Big Typography */}
        <h1 className="mb-2 text-9xl font-black tracking-tighter text-zinc-200 lg:text-[10rem] dark:text-zinc-800">
          404
        </h1>
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Page Not Found
        </h2>

        {/* 4. The "Debug Log" Box */}
        <div className="mb-10 w-full rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-left font-mono text-xs text-zinc-500 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-400">
          <div className="mb-2 flex items-center gap-1.5 border-b border-zinc-200 pb-2 dark:border-zinc-800">
            <Terminal className="h-3 w-3" />
            <span>system_log.txt</span>
          </div>
          <div className="space-y-1">
            <p>
              <span className="text-blue-600 dark:text-blue-400">{">"}</span>{" "}
              Initiating request...
            </p>
            <p>
              <span className="text-blue-600 dark:text-blue-400">{">"}</span>{" "}
              Searching knowledge base...
            </p>
            <p className="text-red-600 dark:text-red-400">
              <span className="text-blue-600 dark:text-blue-400">{">"}</span>{" "}
              Error: Path not found in map.
            </p>
            <p className="opacity-50">
              <span className="text-blue-600 dark:text-blue-400">{">"}</span>{" "}
              Process terminated.
            </p>
          </div>
        </div>

        {/* 5. Actions */}
        <p className="mb-8 text-zinc-600 dark:text-zinc-400">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild variant="default" className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" /> Return Home
            </Link>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" /> View Engineering Log
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
