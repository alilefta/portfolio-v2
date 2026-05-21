import { getTranslations } from "next-intl/server";
import { AnimateOnScroll } from "@/components/ui/AnimateOnScroll";
import { MapPin } from "lucide-react";

export default async function About() {
  const t = await getTranslations("HomePage.AboutMe");

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-24 md:py-32">
      {/* Section Header */}
      <AnimateOnScroll animation="fade-up">
        <div className="mb-10 flex flex-col gap-2 sm:mb-16">
          <span className="text-foreground/40 font-mono text-xs uppercase tracking-widest sm:text-sm">
            {t("Title_Who")}
          </span>
          <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {t("Title_Iam")}
          </h2>
        </div>
      </AnimateOnScroll>

      <div className="grid gap-10 sm:gap-16 lg:grid-cols-12 lg:gap-20">
        {/* Main Content */}
        <div className="lg:col-span-7">
          {/* Hero Title */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <h3 className="text-foreground/90 mb-8 text-2xl leading-relaxed font-light tracking-tight md:text-3xl lg:text-4xl">
              {t("HeroTitle")}
            </h3>
          </AnimateOnScroll>

          {/* Bio */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div className="text-foreground/60 flex flex-col gap-6 text-lg leading-relaxed">
              <p>{t("Biography.P1")}</p>
              <p>{t("Biography.P2")}</p>
            </div>
          </AnimateOnScroll>

          {/* Location */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div className="border-border/50 mt-12 flex items-center gap-4 border-t pt-8">
              <div className="bg-foreground/5 rounded-full p-3">
                <MapPin className="text-foreground/40 h-5 w-5" />
              </div>
              <div>
                <p className="text-foreground font-medium">
                  {t("Stats.Location")}
                </p>
                <p className="text-foreground/50 text-sm">
                  {t("Stats.Global")}
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Sidebar - Key Facts */}
        <div className="lg:col-span-5">
          <AnimateOnScroll animation="fade-up" delay={150}>
            <div className="border-border/30 bg-card/50 rounded-2xl border p-5 sm:p-8">
              <h4 className="text-foreground/40 mb-6 font-mono text-xs uppercase tracking-widest sm:mb-8">
                {t("Stats.KeyFacts")}
              </h4>

              <div className="flex flex-col gap-6 sm:gap-8">
                {/* Experience */}
                <div className="border-border/30 border-b pb-6">
                  <p className="text-foreground/50 mb-1 text-sm">
                    {t("Stats.Experience")}
                  </p>
                  <p className="text-foreground text-3xl font-bold tracking-tighter">
                    6+ <span className="text-foreground/40 text-lg font-normal">{t("Stats.Years")}</span>
                  </p>
                  <p className="text-foreground/50 mt-1 text-sm">
                    {t("Stats.DentalTech")}
                  </p>
                </div>

                {/* Achievement */}
                <div className="border-border/30 border-b pb-6">
                  <p className="text-foreground/50 mb-1 text-sm">
                    {t("Stats.Achievement")}
                  </p>
                  <p className="text-foreground text-xl font-semibold tracking-tight">
                    {t("Stats.Achievement_Desc")}
                  </p>
                  <p className="text-foreground/40 mt-1 font-mono text-xs">
                    2024
                  </p>
                </div>

                {/* Education */}
                <div className="border-border/30 border-b pb-6">
                  <p className="text-foreground/50 mb-1 text-sm">
                    {t("Stats.Education")}
                  </p>
                  <p className="text-foreground text-3xl font-bold tracking-tighter">
                    2 <span className="text-foreground/40 text-lg font-normal">{t("Stats.Degrees")}</span>
                  </p>
                  <p className="text-foreground/50 mt-1 text-sm">
                    {t("Stats.DualMajor")}
                  </p>
                </div>

                {/* GPA */}
                <div>
                  <p className="text-foreground/50 mb-1 text-sm">
                    {t("Stats.Academic")}
                  </p>
                  <p className="text-foreground text-3xl font-bold tracking-tighter">
                    93.8<span className="text-foreground/40 text-lg font-normal">%</span>
                  </p>
                  <p className="text-foreground/50 mt-1 text-sm">
                    {t("Stats.CS_Degree")}
                  </p>
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Differentiator Highlight */}
          <AnimateOnScroll animation="fade-up" delay={250}>
            <div className="mt-6 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-6">
              <p className="text-foreground/40 mb-2 font-mono text-xs uppercase tracking-widest">
                {t("Differentiators.Card1_Title")}
              </p>
              <p className="text-foreground text-4xl font-bold tracking-tighter">
                0.1mm
              </p>
              <p className="text-foreground/60 mt-2 text-sm">
                {t("Differentiators.Card1_Desc")}
              </p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
