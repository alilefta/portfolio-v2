"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertTriangle, RefreshCcw, Home, Terminal } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-dvh w-full flex-col items-center justify-center overflow-hidden bg-white px-4 text-center text-zinc-900 dark:bg-black dark:text-zinc-100">
      {/* 1. Background Grid & Warning Glow */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/5 blur-[120px] dark:bg-amber-500/10" />

      <div className="relative z-10 max-w-md">
        {/* 2. Status Badge */}
        <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 dark:border-amber-900/50 dark:bg-amber-900/20 dark:text-amber-400">
          <AlertTriangle className="h-3.5 w-3.5" />
          <span>RUNTIME EXCEPTION</span>
        </div>

        {/* 3. Message */}
        <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
          System Malfunction
        </h1>
        <p className="mb-8 text-zinc-500 dark:text-zinc-400">
          Something went wrong while rendering this component. The issue has
          been logged for review.
        </p>

        {/* 4. The "Stack Trace" Card (Visual Only) */}
        <div className="mb-8 w-full overflow-hidden rounded-xl border border-zinc-200 bg-zinc-50 text-left shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-100 px-4 py-2 text-xs font-medium text-zinc-500 dark:border-zinc-800 dark:bg-zinc-900">
            <Terminal className="h-3 w-3" />
            <span>error_log.json</span>
          </div>
          <div className="p-4 font-mono text-xs text-zinc-600 dark:text-zinc-400">
            <p className="mb-1 text-red-600 dark:text-red-400">
              Error: {error.message || "Unknown error occurred"}
            </p>
            <p className="opacity-50">
              at Page (app/page.tsx:12:4)
              <br />
              at React.render (react-dom.production.min.js)
              <br />
              <span className="italic opacity-50">
                ... trace digest: {error.digest}
              </span>
            </p>
          </div>
        </div>

        {/* 5. Actions */}
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={() => reset()}
            variant="default"
            className="gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            <RefreshCcw className="h-4 w-4" /> Try Again
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <Link href="/">
              <Home className="h-4 w-4" /> Return Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
