import { Container } from "./Container";
import { cn } from "@/lib/utils";

type ChapterTransitionProps = {
  eyebrow: string;
  title: string;
  accent?: string;
  index?: string;
  className?: string;
  dir?: "ltr" | "rtl";
  tone?: "ink" | "blue";
};

export function ChapterTransition({
  eyebrow,
  title,
  accent,
  index,
  className,
  dir,
  tone = "ink",
}: ChapterTransitionProps) {
  return (
    <aside
      aria-label={`${eyebrow}: ${title}`}
      dir={dir}
      className={cn(
        "relative isolate overflow-hidden border-y border-white/15 py-[clamp(4rem,12vw,10rem)] text-[#f5f1e8]",
        tone === "blue" ? "bg-v3-blue" : "bg-v3-surface-dark",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="absolute inset-y-0 end-[8%] -z-10 w-px rotate-[18deg] bg-v3-yellow/60"
      />
      <Container className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div>
          <p className="v3-label mb-5 text-v3-yellow">{eyebrow}</p>
          <p className="v3-heading max-w-6xl text-balance">
            {title}
            {accent ? (
              <span className="ms-[clamp(1rem,8vw,7rem)] mt-2 block text-v3-yellow">
                {accent}
              </span>
            ) : null}
          </p>
        </div>
        {index ? (
          <p className="v3-technical text-white/55" aria-hidden="true">
            CHAPTER / {index}
          </p>
        ) : null}
      </Container>
    </aside>
  );
}
