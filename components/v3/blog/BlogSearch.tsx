"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export type BlogSearchItem = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  categoryLabel: string;
  readTime: string;
  tags: string[];
};

type BlogSearchProps = {
  initialQuery: string;
  initiallyOpen: boolean;
  locale: string;
  items: BlogSearchItem[];
  labels: {
    label: string;
    placeholder: string;
    submit: string;
    clear: string;
    close: string;
    hint: string;
    results: { zero: string; one: string; other: string };
    empty: string;
  };
};

function searchable(value: string) {
  return value.normalize("NFKD").toLocaleLowerCase();
}

export function BlogSearch({ initialQuery, initiallyOpen, locale, items, labels }: BlogSearchProps) {
  const [isOpen, setIsOpen] = useState(initiallyOpen || Boolean(initialQuery));
  const [query, setQuery] = useState(initialQuery);
  const inputRef = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const normalizedQuery = searchable(query.trim());
  const results = useMemo(() => {
    if (!normalizedQuery) return [];
    return items.filter((item) => searchable([item.title, item.summary, item.category, item.categoryLabel, ...item.tags].join(" ")).includes(normalizedQuery));
  }, [items, normalizedQuery]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  function updateUrl(nextQuery: string) {
    const params = new URLSearchParams();
    if (nextQuery.trim()) params.set("q", nextQuery.trim());
    router.replace(`${pathname}${params.size ? `?${params}` : ""}#blog-search`, { scroll: false });
  }

  function clear() {
    setQuery("");
    updateUrl("");
    inputRef.current?.focus();
  }

  if (!isOpen) {
    return <section id="blog-search" className="sr-only" aria-label={labels.label} />;
  }

  return (
    <section id="blog-search" className="border-y border-[#d9d2c5] bg-[#f0ebe1] text-[#191715]" aria-label={labels.label}>
      <div className="mx-auto max-w-[88rem] px-[clamp(1.5rem,5vw,5rem)] py-8 sm:py-10">
        <div className="flex items-baseline justify-between gap-5">
          <p className="font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#6a645d]">{labels.label}</p>
          <button type="button" onClick={() => setIsOpen(false)} className="inline-flex items-center gap-2 font-v3-text text-sm font-semibold text-[#645e58] transition-colors hover:text-[#191715] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#244b9b]">
            <X className="size-4" aria-hidden="true" />{labels.close}
          </button>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); updateUrl(query); }} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="blog-search-input">{labels.label}</label>
          <div className="relative min-w-0 flex-1">
            <Search className="pointer-events-none absolute start-4 top-1/2 size-5 -translate-y-1/2 text-[#6a645d]" aria-hidden="true" />
            <input ref={inputRef} id="blog-search-input" name="q" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={labels.placeholder} autoComplete="off" className="min-h-14 w-full border border-[#bdb4a7] bg-[#fffaf2] py-3 ps-12 pe-12 font-v3-text text-base text-[#191715] outline-none placeholder:text-[#817a72] focus:border-[#244b9b] focus:ring-2 focus:ring-[#244b9b]/20" />
            {query ? <button type="button" onClick={clear} className="absolute end-3 top-1/2 -translate-y-1/2 p-2 text-[#6a645d] transition-colors hover:text-[#191715] focus-visible:outline-2 focus-visible:outline-[#244b9b]" aria-label={labels.clear}><X className="size-4" aria-hidden="true" /></button> : null}
          </div>
          <button type="submit" className="min-h-14 bg-[#191715] px-6 font-v3-text text-sm font-bold text-[#fffaf2] transition-colors hover:bg-[#244b9b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244b9b]">{labels.submit}</button>
        </form>

        {normalizedQuery ? <div className="mt-7" aria-live="polite">
          <p className="font-v3-text text-sm text-[#645e58]">{results.length === 0 ? labels.results.zero : results.length === 1 ? labels.results.one : labels.results.other.replace("#", String(results.length))}</p>
          {results.length ? <ol className="mt-4 border-t border-[#d9d2c5]">{results.map((item) => <li key={item.slug} className="border-b border-[#d9d2c5]"><Link href={`/${locale}/blog/${item.slug}`} className="block py-5 transition-colors hover:bg-[#e8e0d2] focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#244b9b]"><span className="font-v3-text text-xs font-bold uppercase tracking-[0.08em] text-[#b84b3d]">{item.categoryLabel} · {item.readTime}</span><span className="mt-2 block font-playfair text-2xl font-semibold leading-tight tracking-[-0.025em]">{item.title}</span><span className="mt-2 block max-w-3xl font-v3-text text-sm leading-6 text-[#645e58]">{item.summary}</span></Link></li>)}</ol> : <p className="mt-4 font-v3-text leading-7 text-[#645e58]">{labels.empty}</p>}
        </div> : <p className="mt-5 font-v3-text text-sm leading-6 text-[#645e58]">{labels.hint}</p>}
      </div>
    </section>
  );
}
