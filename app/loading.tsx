import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-white dark:bg-black">
      {/* Background Grid (Consistent with layout) */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Animated Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/50">
          <Loader2 className="h-6 w-6 animate-spin text-zinc-900 dark:text-zinc-100" />
        </div>

        {/* Loading Text */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="text-sm font-semibold tracking-wide text-zinc-900 uppercase dark:text-zinc-100">
            System Initializing
          </h3>
          <p className="flex items-center gap-1 font-mono text-xs text-zinc-500">
            <span>Loading modules</span>
            <span className="animate-[ping_1.5s_0.5s_ease-in-out_infinite]">
              .
            </span>
            <span className="animate-[ping_1.5s_0.7s_ease-in-out_infinite]">
              .
            </span>
            <span className="animate-[ping_1.5s_0.9s_ease-in-out_infinite]">
              .
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
