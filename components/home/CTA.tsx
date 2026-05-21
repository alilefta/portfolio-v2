import Link from "next/link";
import { Button } from "../ui/custom/Button";
import { MoveUpLeft, MoveUpRight } from "lucide-react";
import { getLocale, getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "../ui/AnimateOnScroll";

export async function CTASection() {
  const t = await getTranslations("HomePage.CTASection");
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
      <AnimateOnScroll animation="fade-up">
        <div className="border-border/30 bg-card/30 flex flex-col items-center gap-8 rounded-3xl border p-12 text-center backdrop-blur-sm md:p-16 lg:p-24">
          {/* Heading */}
          <h2 className="text-foreground text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl text-balance">
            {t("Title_Line1")}
            <br />
            <span className="text-foreground/50">
              {t("Title_Line2")}
            </span>
          </h2>

          {/* Description */}
          <p className="text-foreground/60 max-w-xl text-lg leading-relaxed">
            {t("Subtitle")}
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="lg"
            className="group mt-4"
          >
            <Link href="/contact" className="flex items-center gap-2">
              <span>{t("Button")}</span>
              {isRTL ? (
                <MoveUpLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1" />
              ) : (
                <MoveUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              )}
            </Link>
          </Button>

          {/* Email hint */}
          <p className="text-foreground/40 mt-4 font-mono text-sm">
            ali@alilefta.dev
          </p>
        </div>
      </AnimateOnScroll>
    </section>
  );
}
