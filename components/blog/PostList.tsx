"use client";

import { Search, X, ArrowDown } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { BlogPost } from "@/lib/blog";
import { CategoryFilter } from "./CategoryFilter";
import { getCategoryTitle } from "@/lib/taxonomy";

const ITEMS_PER_PAGE = 5;

export default function PostList({ posts }: { posts: BlogPost[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1. URL State
  const categoryParam = searchParams.get("category") || "All";
  const searchParam = searchParams.get("q") || "";

  // 2. Local State
  const [searchValue, setSearchValue] = useState(searchParam);
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Sync local search input with URL if URL changes (e.g. back button)
  useEffect(() => {
    setSearchValue(searchParam);
  }, [searchParam]);

  // Reset pagination when filters change
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [categoryParam, searchParam]);

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    posts.forEach((post) => {
      const cat = post.metadata.category;
      if (cat) counts[cat] = (counts[cat] || 0) + 1;
    });
    return counts;
  }, [posts]);

  // 3. Derived Data: Unique Categories
  const categories = useMemo(() => {
    const cats = new Set(posts.map((p) => p.metadata.category).filter(Boolean));
    return ["All", ...Array.from(cats).sort()];
  }, [posts]);

  // 4. Filter Logic
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      // Category Match
      const matchesCategory =
        categoryParam === "All" ||
        post.metadata.category?.toLowerCase() === categoryParam.toLowerCase();

      // Search Match
      const searchLower = searchParam.toLowerCase();
      const matchesSearch =
        searchParam === "" ||
        // 1. Check Title
        post.metadata.title.toLowerCase().includes(searchLower) ||
        // 2. Check Summary
        post.metadata.summary.toLowerCase().includes(searchLower) ||
        // 3. Check Category Name (This fixes your issue)
        post.metadata.category?.toLowerCase().includes(searchLower) ||
        // 4. Check Tags (This allows searching for "Next.js" or "WPF")
        post.metadata.tags?.some((tag) =>
          tag.toLowerCase().includes(searchLower),
        );

      return matchesCategory && matchesSearch;
    });
  }, [posts, categoryParam, searchParam]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  // 5. Handlers
  const updateFilter = (key: "category" | "q", value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value && value !== "All") {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  // --- FIX: Handle clearing everything in one go ---
  const handleClearAll = () => {
    const params = new URLSearchParams(searchParams.toString());

    // Remove specific keys
    params.delete("q");
    params.delete("category");

    // Clear local state
    setSearchValue("");

    // Push ONE update
    router.push(`/blog?${params.toString()}`, { scroll: false });
  };

  const handleSearchSubmit = () => {
    updateFilter("q", searchValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <section
      id="archive"
      className="mx-auto w-full max-w-7xl border-t border-zinc-200 px-4 py-12 md:px-6 dark:border-zinc-800"
    >
      {/* HEADER & CONTROLS */}
      <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Archive
        </h2>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {/* Search Input */}
          <div className="group relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full rounded-lg border border-zinc-200 bg-white py-2 pr-10 pl-4 text-sm text-zinc-900 transition-all placeholder:text-zinc-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none sm:w-64 dark:border-zinc-800 dark:bg-zinc-900/50 dark:text-zinc-200 dark:focus:border-blue-500/50 dark:focus:ring-blue-500/50"
            />
            <button
              onClick={handleSearchSubmit}
              className="absolute top-1/2 right-2 -translate-y-1/2 rounded-md p-1 text-zinc-400 hover:bg-zinc-100 hover:text-blue-500 dark:hover:bg-zinc-800 dark:hover:text-blue-400"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </button>
          </div>

          {/* Filter Tabs (Desktop) */}
          {/* Nice Buttons UI, I will keep it for reference */}
          {/* <div className="hidden flex-wrap gap-1 rounded-lg border border-zinc-200 bg-zinc-100 p-1 md:flex dark:border-zinc-800 dark:bg-zinc-900/50">
            {categories.map((cat) => (
              <button
                key={String(cat)}
                onClick={() => updateFilter("category", String(cat))}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                  categoryParam === String(cat)
                    ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-800 dark:text-zinc-100"
                    : "text-zinc-500 hover:bg-zinc-200/50 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800/50 dark:hover:text-zinc-200",
                )}
              >
                {String(cat)}
              </button>
            ))}
          </div> */}

          <CategoryFilter
            currentCategory={categoryParam}
            onSelect={(cat) => updateFilter("category", cat)}
            counts={categoryCounts}
          />
        </div>
      </div>

      {/* POST LIST */}
      <div className="flex flex-col gap-4">
        {visiblePosts.length > 0 ? (
          visiblePosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex cursor-pointer flex-col justify-between rounded-2xl border border-transparent p-5 transition-all hover:border-zinc-200 hover:bg-zinc-50 md:flex-row md:items-center dark:bg-zinc-900/20 dark:hover:border-zinc-800 dark:hover:bg-zinc-900/40"
            >
              <div className="flex max-w-2xl flex-col gap-2">
                <div className="mb-1 flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-500">
                  <span className="font-mono text-blue-600 dark:text-blue-400">
                    {post.metadata.publishedAt}
                  </span>
                  <span>•</span>
                  {/* Category Badge */}
                  <span
                    className="tracking-wider uppercase hover:text-blue-500 hover:underline"
                    onClick={(e) => {
                      e.preventDefault();
                      updateFilter("category", post.metadata.category || "All");
                    }}
                  >
                    {getCategoryTitle(post.metadata.category ?? "")}
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
                  {post.metadata.tags.slice(0, 3).map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-md border border-zinc-200 bg-zinc-100 px-2 py-1 text-xs text-zinc-500 dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-zinc-500">
              No articles found matching your criteria.
            </p>
            {/* FIXED: Single function call */}
            <button
              onClick={handleClearAll}
              className="mt-4 flex items-center gap-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              <X className="h-4 w-4" /> Clear filters
            </button>
          </div>
        )}
      </div>

      {/* LOAD MORE BUTTON */}
      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_PAGE)}
            className="flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-6 py-2 text-sm font-medium text-zinc-600 transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          >
            Load More <ArrowDown className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  );
}
