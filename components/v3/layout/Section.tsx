import { cn } from "@/lib/utils";

type SectionProps = React.ComponentProps<"section"> & {
  tone?: "paper" | "surface" | "ink" | "blue" | "yellow" | "coral";
  spacing?: "none" | "compact" | "default";
};

const tones = {
  paper: "bg-v3-paper text-v3-ink",
  surface: "bg-v3-surface text-v3-ink",
  ink: "bg-v3-surface-dark text-[#f5f1e8]",
  blue: "bg-v3-blue text-white",
  yellow: "bg-v3-yellow text-[#171714]",
  coral: "bg-v3-coral text-[#24100b]",
};

const spacingStyles = {
  none: "",
  compact: "py-[clamp(2.5rem,6vw,5rem)]",
  default: "py-[var(--v3-section-space)]",
};

export function Section({
  className,
  tone = "paper",
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(tones[tone], spacingStyles[spacing], className)}
      {...props}
    />
  );
}
