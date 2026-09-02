import type { ReactNode } from "react";
import { Container } from "@/components/v3/layout/Container";
import { SiteFooter } from "@/components/v3/layout/SiteFooter";
import { SiteHeader } from "@/components/v3/layout/SiteHeader";
import { cn } from "@/lib/utils";

type SystemStateFrameProps = {
  code: string;
  eyebrow: string;
  title: string;
  description: string;
  tone?: "blue" | "coral" | "yellow";
  busy?: boolean;
  children?: ReactNode;
};

const toneStyles = {
  blue: "bg-v3-blue text-white",
  coral: "bg-v3-coral text-[#171714]",
  yellow: "bg-v3-yellow text-[#171714]",
};

export function SystemStateFrame({
  code,
  eyebrow,
  title,
  description,
  tone = "blue",
  busy = false,
  children,
}: SystemStateFrameProps) {
  const Content = busy ? "div" : "main";

  return (
    <div className="bg-v3-paper text-v3-ink min-h-dvh">
      <SiteHeader />
      <Content
        {...(busy
          ? { role: "status", "aria-live": "polite", "aria-busy": true }
          : {})}
        className="border-v3-line relative isolate overflow-hidden border-b"
      >
        <div
          aria-hidden="true"
          className="font-v3-display text-v3-ink/[0.035] pointer-events-none absolute inset-y-0 end-[-0.05em] -z-10 flex items-center text-[clamp(13rem,35vw,36rem)] leading-none font-bold tracking-[-0.08em] select-none"
        >
          {code}
        </div>

        <Container className="grid min-h-[calc(100dvh-4.5rem)] content-center py-16 sm:py-24 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-2">
            <div
              className={cn(
                "v3-technical border-v3-ink inline-flex min-h-9 items-center border px-3 font-medium",
                toneStyles[tone],
              )}
            >
              {code}
            </div>
          </div>

          <section className="mt-8 max-w-3xl lg:col-span-8 lg:mt-0">
            <p className="v3-label text-v3-muted">{eyebrow}</p>
            <h1 className="font-v3-display mt-5 max-w-[12ch] text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.9] font-bold tracking-[-0.055em] text-balance rtl:leading-[1.15] rtl:tracking-normal">
              {title}
            </h1>
            <p className="v3-body text-v3-muted mt-7 max-w-2xl">
              {description}
            </p>

            {children ? (
              <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row">
                {children}
              </div>
            ) : null}
          </section>

          <div
            aria-hidden="true"
            className="mt-14 hidden items-end justify-end lg:col-span-2 lg:flex"
          >
            <span
              className={cn("border-v3-ink size-16 border", toneStyles[tone])}
            />
          </div>
        </Container>
      </Content>
      <SiteFooter />
    </div>
  );
}
