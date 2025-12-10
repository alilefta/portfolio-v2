import { BlogPost } from "@/lib/types/common";
import { Search } from "lucide-react";

const FILTERS = ["All", "Architecture", "DevOps", "Career", "Tutorials"];

export default function PostList({ posts }: { posts: BlogPost[] }) {
  return (
    <section className="mx-auto w-full max-w-7xl border-t border-zinc-200 px-4 py-12 md:px-6 dark:border-zinc-800">
      {/* HEADER & CONTROLS */}
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Archive
        </h2>

        <div className="flex flex-col gap-4 sm:flex-row">
          {/* Search Input */}
          <div className="group relative">
            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-zinc-400 transition-colors group-focus-within:text-blue-500 dark:text-zinc-500 dark:group-focus-within:text-blue-400" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full rounded-lg border border-zinc-200 bg-white py-2 pr-4 pl-10 text-sm text-zinc-900 transition-all placeholder:text-zinc-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:w-64 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 dark:focus:border-blue-500/50 dark:focus:ring-blue-500/50"
            />
          </div>

          {/* Filter Tabs (Desktop) */}
          <div className="hidden rounded-lg border border-zinc-200 bg-zinc-100 p-1 md:flex dark:border-zinc-800 dark:bg-zinc-900/50">
            {FILTERS.map((filter, idx) => (
              <button
                key={filter}
                className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                  idx === 0
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100"
                    : "text-zinc-500 hover:bg-zinc-200/50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* POST LIST */}
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-transparent p-5 transition-all hover:border-zinc-200 hover:bg-zinc-50 md:flex-row md:items-center dark:bg-zinc-900/20 dark:hover:border-zinc-800 dark:hover:bg-zinc-900/40"
          >
            <div className="flex max-w-2xl flex-col gap-2">
              <div className="mb-1 flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500">
                <span className="font-mono text-blue-600 dark:text-blue-400">
                  {post.metadata.publishedAt}
                </span>
                <span>•</span>
                <span className="tracking-wider uppercase">
                  {post.metadata.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-zinc-900 transition-colors group-hover:text-blue-600 md:text-xl dark:text-zinc-200 dark:group-hover:text-blue-400">
                {post.metadata.title}
              </h3>

              <p className="line-clamp-1 text-sm text-zinc-600 md:line-clamp-none dark:text-zinc-400">
                {post.metadata.summary}
              </p>
            </div>

            {/* Tags (Right side) */}
            {post.metadata.tags && (
              <div className="mt-4 flex gap-2 md:mt-0">
                {post.metadata.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-1 text-xs text-zinc-500 dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
