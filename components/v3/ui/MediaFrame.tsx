import { cn } from "@/lib/utils";

type MediaFrameProps = React.ComponentProps<"figure"> & {
  caption?: string;
  meta?: string;
};

export function MediaFrame({
  caption,
  meta,
  className,
  children,
  ...props
}: MediaFrameProps) {
  return (
    <figure className={cn("group", className)} {...props}>
      <div className="relative overflow-hidden rounded-[var(--v3-radius-media)] border border-v3-line bg-v3-surface shadow-[var(--v3-shadow-media)]">
        {children}
      </div>
      {caption || meta ? (
        <figcaption className="mt-3 flex flex-wrap items-start justify-between gap-2 text-v3-muted">
          {caption ? (
            <span className="font-v3-text text-sm leading-relaxed">
              {caption}
            </span>
          ) : null}
          {meta ? <span className="v3-technical">{meta}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
