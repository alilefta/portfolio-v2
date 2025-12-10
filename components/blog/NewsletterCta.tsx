"use client";

import { useState, FormEvent } from "react";
import { Mail, ArrowRight, Check, Loader2 } from "lucide-react";

export default function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    // Simulate API call delay
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      // Reset after 3 seconds
      setTimeout(() => setStatus("idle"), 3000);
    }, 1500);
  };

  return (
    <section
      className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6 md:py-20"
      id="join-newsletter"
    >
      <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50 p-6 md:p-12 dark:border-zinc-800 dark:bg-zinc-900/50">
        {/* Decorative Background Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.03] dark:bg-[radial-gradient(#fff_1px,transparent_1px)] dark:opacity-[0.05]" />

        <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-12">
          {/* Text Content */}
          <div className="w-full text-center lg:w-1/2 lg:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-400">
              <Mail className="h-3.5 w-3.5" />
              <span>Newsletter</span>
            </div>
            <h2 className="mb-3 text-2xl font-bold tracking-tight text-zinc-900 md:text-3xl dark:text-zinc-100">
              Join the Engineering Log.
            </h2>
            <p className="mx-auto max-w-md text-base text-zinc-600 md:text-lg lg:mx-0 dark:text-zinc-400">
              Get notified about new case studies, system architecture deep
              dives, and quick lab notes. No spam, just code.
            </p>
          </div>

          {/* Form Content */}
          <div className="w-full max-w-md lg:w-1/2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="group relative">
                <input
                  type="email"
                  placeholder="ali@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === "loading" || status === "success"}
                  className="h-12 w-full rounded-xl border border-zinc-300 bg-white pr-12 pl-4 text-zinc-900 transition-all placeholder:text-zinc-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-100"
                  required
                />

                {/* Status Indicator Icon inside input */}
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-zinc-400">
                  {status === "idle" && (
                    <Mail className="h-5 w-5 opacity-50 transition-opacity group-focus-within:opacity-100" />
                  )}
                  {status === "loading" && (
                    <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                  )}
                  {status === "success" && (
                    <Check className="h-5 w-5 text-green-500" />
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className={`flex h-12 w-full items-center justify-center gap-2 rounded-xl font-medium text-white transition-all duration-300 ${
                  status === "success"
                    ? "bg-green-600 ring-2 ring-green-500/20 hover:bg-green-700"
                    : "bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200"
                } disabled:cursor-not-allowed disabled:opacity-70`}
              >
                {status === "loading" ? (
                  "Processing..."
                ) : status === "success" ? (
                  <>
                    Signed Up <Check className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Subscribe <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>

            <p className="mt-3 text-center text-xs text-zinc-500 lg:text-left dark:text-zinc-500">
              Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
