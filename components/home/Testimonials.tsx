import { TESTIMONIALS } from "@/lib/testimonials";
import { Quote, User } from "lucide-react";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-24 lg:px-8">
      {/* Header */}
      <div className="mb-16 md:text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl dark:text-zinc-100">
          Collaboration Log
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Feedback from founders, engineers, and stakeholders I&apos;ve built
          systems with.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200 bg-zinc-50/50 p-8 transition-all hover:border-zinc-300 hover:bg-white hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900/20 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/50"
          >
            {/* Decoration: Large Quote Icon */}
            <Quote className="absolute top-6 right-8 h-8 w-8 text-zinc-200 opacity-50 dark:text-zinc-800" />

            <div>
              {/* Context Tag */}
              <div className="mb-6 flex items-center gap-2">
                <span className="rounded-full border border-blue-200 bg-blue-50 px-2 py-0.5 text-[10px] font-bold tracking-wider text-blue-700 uppercase dark:border-blue-900/50 dark:bg-blue-900/20 dark:text-blue-400">
                  {item.relationship}
                </span>
                {item.project && (
                  <span className="text-xs font-medium text-zinc-400">
                    on {item.project}
                  </span>
                )}
              </div>

              {/* The Quote */}
              <blockquote className="mb-8 font-serif text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                {`"${item.quote}"`}
              </blockquote>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-4 border-t border-zinc-200 pt-6 dark:border-zinc-800">
              {/* Avatar or Fallback */}
              <div className="relative h-10 w-10 overflow-hidden rounded-full border border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-800">
                {item.avatar ? (
                  <Image
                    src={item.avatar}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-zinc-400">
                    <User className="h-5 w-5" />
                  </div>
                )}
              </div>

              <div>
                <div className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {item.name}
                </div>
                <div className="text-xs text-zinc-500">
                  {item.role}, {item.company}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
