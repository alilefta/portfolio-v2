import { cn } from "@/lib/utils";

type LabelProps = React.ComponentProps<"span"> & {
  signal?: "neutral" | "blue" | "yellow" | "coral";
};

const signals = {
  neutral: "border-v3-line text-v3-muted",
  blue: "border-v3-blue text-v3-blue",
  yellow: "border-v3-yellow bg-v3-yellow text-[#171714]",
  coral: "border-v3-coral text-v3-coral",
};

export function Label({
  className,
  signal = "neutral",
  ...props
}: LabelProps) {
  return (
    <span
      className={cn(
        "v3-label inline-flex min-h-7 items-center border px-2.5 py-1",
        signals[signal],
        className,
      )}
      {...props}
    />
  );
}
