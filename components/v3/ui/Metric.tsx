import { cn } from "@/lib/utils";

type MetricProps = React.ComponentProps<"div"> & {
  value: string;
  label: string;
  note?: string;
};

export function Metric({
  value,
  label,
  note,
  className,
  ...props
}: MetricProps) {
  return (
    <div
      className={cn("border-s-2 border-v3-line ps-4", className)}
      {...props}
    >
      <p className="font-v3-display text-4xl font-bold tracking-[-0.05em] text-v3-ink">
        {value}
      </p>
      <p className="mt-1 font-v3-text text-sm font-bold text-v3-ink">
        {label}
      </p>
      {note ? (
        <p className="v3-technical mt-1 text-v3-muted">{note}</p>
      ) : null}
    </div>
  );
}
