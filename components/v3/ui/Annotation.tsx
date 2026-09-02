import { cn } from "@/lib/utils";

type AnnotationProps = React.ComponentProps<"aside"> & {
  marker?: string;
};

export function Annotation({
  marker = "NOTE",
  className,
  children,
  ...props
}: AnnotationProps) {
  return (
    <aside
      className={cn(
        "grid grid-cols-[auto_1fr] gap-3 border-t border-v3-line pt-3 text-v3-muted",
        className,
      )}
      {...props}
    >
      <span className="v3-technical font-medium text-v3-coral">{marker}</span>
      <div className="font-v3-text text-sm leading-relaxed">{children}</div>
    </aside>
  );
}
