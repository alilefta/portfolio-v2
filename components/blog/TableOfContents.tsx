"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ label = "On this page" }: { label?: string }) {
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
    <nav
      aria-label={label}
      className="sticky top-28 hidden max-h-[calc(100vh-8rem)] w-full overflow-y-auto border-t border-[#d9d2c5] pt-5 lg:block"
    >
      <h2 className="mb-5 font-v3-text text-xs font-bold uppercase tracking-[0.1em] text-[#6a645d]">{label}</h2>
      <ol className="space-y-1 font-v3-text text-sm">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={heading.level === 3 ? "ps-4" : undefined}
          >
            <a
              href={`#${heading.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(heading.id)?.scrollIntoView({
                  behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                });
                setActiveId(heading.id);
              }}
              className={cn(
                "block border-s-2 py-2 ps-3 leading-5 transition-colors hover:text-[#191715] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#244b9b]",
                activeId === heading.id
                  ? "border-[#b84b3d] font-bold text-[#191715]"
                  : "border-[#d9d2c5] text-[#6a645d]",
              )}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
