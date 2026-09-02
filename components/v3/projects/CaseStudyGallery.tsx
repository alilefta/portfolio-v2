"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import type { ResolvedProjectGalleryItem } from "@/lib/project-gallery";

export type CaseStudyGalleryItem = ResolvedProjectGalleryItem;

type CaseStudyGalleryProps = {
  items: CaseStudyGalleryItem[];
  label: string;
  previousLabel: string;
  nextLabel: string;
  slideLabel: string;
  eager?: boolean;
};

export function CaseStudyGallery({
  items,
  label,
  previousLabel,
  nextLabel,
  slideLabel,
  eager = false,
}: CaseStudyGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (items.length === 0) return null;

  const activeItem = items[activeIndex] ?? items[0];
  const selectItem = (index: number) => {
    setActiveIndex((index + items.length) % items.length);
  };
  const move = (direction: -1 | 1) => selectItem(activeIndex + direction);

  return (
    <figure className="w-full">
      <div
        className="border-[3px] border-white/25 bg-[#0b0d0e] p-2 shadow-[12px_14px_0_rgb(223_101_75/0.45)]"
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            move(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            move(1);
          }
          if (event.key === "Home") {
            event.preventDefault();
            selectItem(0);
          }
          if (event.key === "End") {
            event.preventDefault();
            selectItem(items.length - 1);
          }
        }}
        tabIndex={0}
      >
        <div
          className="relative overflow-hidden bg-black"
          style={{ aspectRatio: `${activeItem.width} / ${activeItem.height}` }}
        >
          <Image
            key={activeItem.id}
            src={activeItem.src}
            alt={activeItem.alt}
            fill
            loading={eager ? "eager" : "lazy"}
            sizes="(min-width: 1536px) 1440px, 100vw"
            className="object-contain motion-safe:transition-opacity motion-safe:duration-200"
          />
        </div>
        <div className="flex flex-col gap-2 border-t border-white/15 px-3 py-3 sm:flex-row sm:items-start sm:justify-between sm:gap-5">
          <figcaption className="font-v3-text text-sm leading-6 text-white/65">
            {activeItem.caption}
          </figcaption>
          <span className="v3-technical text-v3-yellow shrink-0">
            {slideLabel} {activeIndex + 1} / {items.length}
          </span>
        </div>
        <p className="sr-only" aria-live="polite">
          {activeItem.proves}
        </p>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        {items.length > 1 ? (
          <>
            <div className="flex gap-2" role="group" aria-label={label}>
              <button
                type="button"
                onClick={() => move(-1)}
                className="border-v3-line bg-v3-paper text-v3-ink hover:bg-v3-yellow focus-visible:outline-v3-blue inline-flex size-11 items-center justify-center border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label={previousLabel}
              >
                <ChevronLeft
                  className="size-4 rtl:rotate-180"
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                onClick={() => move(1)}
                className="border-v3-line bg-v3-paper text-v3-ink hover:bg-v3-yellow focus-visible:outline-v3-blue inline-flex size-11 items-center justify-center border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
                aria-label={nextLabel}
              >
                <ChevronRight
                  className="size-4 rtl:rotate-180"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label={label}
            >
              {items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  aria-current={activeIndex === index ? "true" : undefined}
                  aria-label={`${slideLabel} ${index + 1} / ${items.length}`}
                  onClick={() => selectItem(index)}
                  className={
                    activeIndex === index
                      ? "border-v3-blue bg-v3-blue v3-technical inline-flex min-h-11 min-w-11 items-center justify-center border px-3 text-white"
                      : "border-v3-line bg-v3-paper v3-technical text-v3-muted hover:bg-v3-yellow inline-flex min-h-11 min-w-11 items-center justify-center border px-3"
                  }
                >
                  {String(index + 1).padStart(2, "0")}
                </button>
              ))}
            </div>
          </>
        ) : null}
      </div>
    </figure>
  );
}
