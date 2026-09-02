import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type DossierBlockProps = {
  children: ReactNode;
  eyebrow?: string;
  title?: string;
  className?: string;
};

function DossierBlock({
  children,
  eyebrow,
  title,
  className,
}: DossierBlockProps) {
  return (
    <section className={cn("not-prose my-12 border-t border-v3-line pt-8", className)}>
      {eyebrow ? <p className="v3-label text-v3-blue">{eyebrow}</p> : null}
      {title ? (
        <h2 className="mt-5 font-v3-display text-4xl font-bold tracking-[-0.05em] text-v3-ink">
          {title}
        </h2>
      ) : null}
      <div className="v3-body mt-6 text-v3-muted">{children}</div>
    </section>
  );
}

export function Problem(props: DossierBlockProps) {
  return <DossierBlock {...props} />;
}

export function Constraints(props: DossierBlockProps) {
  return <DossierBlock {...props} className={cn("border-s-4 ps-6", props.className)} />;
}

export function EvidenceGallery(props: DossierBlockProps) {
  return <DossierBlock {...props} className={cn("bg-v3-surface p-6", props.className)} />;
}

export function Reflection(props: DossierBlockProps) {
  return <DossierBlock {...props} className={cn("border-v3-coral", props.className)} />;
}
