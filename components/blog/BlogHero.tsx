import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Rss } from "lucide-react";
import { BlogPost } from "@/lib/blog";
import { Button } from "../ui/custom/Button";

const CATEGORIES = [
  { name: "Engineering", count: 12 },
  { name: "Dental Tech", count: 5 },
  { name: "SaaS", count: 8 },
  { name: "Tutorials", count: 3 },
];

export default async function BlogHero({
  featured,
  recent,
}: {
  featured: BlogPost;
  recent: BlogPost;
}) {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12 md:px-6">
      {/* Section Header */}
      <div className="mb-10 flex flex-col gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-900 md:text-5xl dark:text-zinc-100">
          Engineering Log
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Documenting the journey between dental precision and software
          architecture.
        </p>
      </div>

      {/* BENTO GRID LAYOUT */}
      <div className="grid auto-rows-[minmax(180px,auto)] grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4">
        {/* 1. LARGE FEATURED CARD */}
        {/* Fixed: Added min-h-[320px] for mobile image visibility */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group relative col-span-1 row-span-2 flex min-h-80 flex-col justify-end overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 shadow-sm transition-all duration-300 hover:shadow-md md:col-span-2 md:min-h-full lg:col-span-2 dark:border-zinc-800 dark:shadow-none"
        >
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 z-0 h-full w-full">
            {featured.metadata.coverImage && (
              <Image
                src={featured.metadata.coverImage}
                alt={featured.metadata.title}
                fill
                className="object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            )}
            {/* Dark gradient overlay enforced in BOTH modes for text readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent" />
          </div>

          <div className="relative z-10 p-6 md:p-8">
            <div className="mb-3 flex items-center gap-3 text-xs text-zinc-300 md:text-sm">
              <span className="rounded-md border border-blue-400/30 bg-blue-500/20 px-2 py-1 font-medium text-blue-300 backdrop-blur-md">
                {featured.metadata.category}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {featured.metadata.readTime}
              </span>
            </div>
            {/* Text is always light here because of the dark image overlay */}
            <h2 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-blue-300 md:text-3xl">
              {featured.metadata.title}
            </h2>
            <p className="mb-4 line-clamp-2 text-zinc-300/90">
              {featured.metadata.summary}
            </p>
            <div className="flex items-center text-sm font-medium text-white transition-transform group-hover:translate-x-2">
              Read Article <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </Link>

        {/* 2. RECENT POST CARD */}
        <Link
          href={`/blog/${recent.slug}`}
          className="group col-span-1 row-span-2 flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:border-zinc-300 hover:shadow-md md:col-span-1 lg:col-span-1 dark:border-zinc-800 dark:bg-zinc-900/30 dark:shadow-none dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
        >
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 text-zinc-500 transition-colors group-hover:bg-blue-100 group-hover:text-blue-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-blue-500/10 dark:group-hover:text-blue-400">
                <Rss className="h-4 w-4" />
              </div>
              <span className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                Latest Drop
              </span>
            </div>
            <h3 className="mb-3 text-xl font-bold text-zinc-900 transition-colors group-hover:text-blue-600 dark:text-zinc-100 dark:group-hover:text-blue-400">
              {recent.metadata.title}
            </h3>
            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {recent.metadata.summary}
            </p>
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-zinc-100 pt-6 text-xs text-zinc-500 dark:border-zinc-800/50">
            <span>{recent.metadata.publishedAt}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" /> {recent.metadata.readTime}
            </span>
          </div>
        </Link>

        {/* 3. CATEGORIES BLOCK */}
        <div className="col-span-1 flex flex-col justify-center rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/30 dark:shadow-none">
          <h4 className="mb-4 text-sm font-semibold tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
            Explore Topics
          </h4>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                href={`/blog?category=${cat.name.replaceAll(" ", "-")}#archive`}
                className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-600 transition-colors hover:border-zinc-300 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
              >
                {cat.name}
                <span className="text-zinc-400 opacity-70 dark:text-zinc-500">
                  {cat.count}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* 4. NEWSLETTER / SUBSCRIBE */}
        <div className="group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-6 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-950 dark:shadow-none">
          <div className="relative z-10">
            <h4 className="mb-2 text-lg font-bold text-zinc-900 dark:text-zinc-100">
              Join the Lab
            </h4>
            <p className="mb-4 text-xs text-zinc-600 dark:text-zinc-400">
              Get technical deep-dives delivered to your inbox.
            </p>
          </div>
          <div className="relative z-10">
            <Button variant={"ghost"} asChild>
              <Link
                href={"/blog#join-newsletter"}
                className="w-full rounded-lg bg-zinc-900 py-2 text-sm font-bold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-white"
              >
                Subscribe
              </Link>
            </Button>
          </div>

          {/* Decorative element */}
          <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all group-hover:bg-blue-500/20" />
        </div>
      </div>
    </section>
  );
}
