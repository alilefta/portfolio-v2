import { Container } from "@/components/v3/layout/Container";
import { cn } from "@/lib/utils";

type DossierTransitionProps = {
  eyebrow: string;
  title: string;
  tone?: "blue" | "yellow" | "coral";
};

const tones = {
  blue: "bg-v3-blue text-white",
  yellow: "bg-v3-yellow text-[#171714]",
  coral: "bg-v3-coral text-[#24100b]",
};

export function DossierTransition({
  eyebrow,
  title,
  tone = "blue",
}: DossierTransitionProps) {
  return (
    <aside className={cn(tones[tone])} aria-label={`${eyebrow}: ${title}`}>
      <Container className="grid gap-6 py-10 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-10">
        <p
          className={cn(
            "v3-technical font-bold",
            tone === "blue" && "text-v3-yellow",
          )}
        >
          {eyebrow}
        </p>
        <p className="font-v3-display text-[clamp(1.6rem,3vw,2.8rem)] font-bold leading-tight tracking-[-0.04em]">
          {title}
        </p>
      </Container>
    </aside>
  );
}
