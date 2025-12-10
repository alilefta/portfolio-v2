"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    let observer: IntersectionObserver;

    // 1. Wrap in requestAnimationFrame to avoid "Cascading Renders"
    const frameId = requestAnimationFrame(() => {
      const headingElements = Array.from(
        document.querySelectorAll("article h2, article h3"),
      );

      const items = headingElements.map((elem, index) => {
        // Fallback: Generate ID if missing
        if (!elem.id) {
          const text = elem.textContent || "";
          const slug = text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/(^-|-$)+/g, "");

          elem.id = slug ? `${slug}-${index}` : `heading-${index}`;
        }

        return {
          id: elem.id,
          text: elem.textContent || "",
          level: Number(elem.tagName.substring(1)),
        };
      });

      setHeadings(items);

      // 2. Setup Observer
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "0px 0px -80% 0px" },
      );

      headingElements.forEach((elem) => observer.observe(elem));
    });

    // 3. Clean up
    return () => {
      cancelAnimationFrame(frameId);
      if (observer) observer.disconnect();
    };
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-32 hidden max-h-[calc(100vh-8rem)] w-64 overflow-y-auto lg:block">
      <h4 className="mb-4 text-xs font-bold tracking-wider text-zinc-900 uppercase dark:text-zinc-100">
        On this page
      </h4>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            style={{ paddingLeft: heading.level === 3 ? "1rem" : "0" }}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${heading.id}`)?.scrollIntoView({
                  behavior: "smooth",
                });
                setActiveId(heading.id);
              }}
              className={cn(
                "block border-l-2 py-1 pl-3 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100",
                activeId === heading.id
                  ? "border-blue-500 font-medium text-blue-600 dark:text-blue-400"
                  : "border-zinc-200 text-zinc-500 dark:border-zinc-800 dark:text-zinc-500",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
