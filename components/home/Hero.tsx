import { getTranslations, getLocale } from "next-intl/server";
import { Button } from "../ui/custom/Button";
import { Download, MoveLeft, MoveRight, Cpu, Handshake, GraduationCap } from "lucide-react";
import Link from "next/link";

export default async function HeroSection() {
  const t = await getTranslations();
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section className="relative mx-auto w-full min-h-[90vh] flex flex-col justify-center py-16 md:py-24">
      {/* Subtle grain texture */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] dark:opacity-[0.03]" />
      
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6">
        {/* Main content */}
        <div className="flex flex-col gap-8">
          {/* Status indicator */}
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-foreground/60 text-sm font-medium">
              {t("HomePage.Cards.RemoteReady")}
            </span>
          </div>

          {/* Name & Title */}
          <div className="flex flex-col gap-4">
            <h1 className="text-foreground text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              {t("HomePage.Cards.Intro_Heading_Part1")}
            </h1>
            <h2 className="text-foreground/50 text-3xl font-medium tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t("HomePage.Cards.Intro_Heading_Part2")}
            </h2>
          </div>

          {/* Bio paragraph */}
          <p className="text-foreground/70 max-w-2xl text-lg leading-relaxed md:text-xl">
            {t("HomePage.Cards.Intro_Paragraph")}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button
              className="group cursor-pointer"
              size="lg"
              variant="primary"
            >
              <Link
                href="#selected-work"
                className="flex items-center gap-2.5"
              >
                {t("HomePage.Cards.CTA_SeeSelectedWork")}
                {isRTL ? (
                  <MoveLeft className="relative h-4 w-4 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <MoveRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </Link>
            </Button>

            <Button
              className="cursor-pointer gap-1.5"
              variant="secondary"
              size="lg"
            >
              {t("Common.CV")}
              <Download className="size-4" />
            </Button>
          </div>
        </div>

        {/* Stats row - minimal horizontal layout */}
        <div className="mt-20 md:mt-28">
          <div className="border-border/50 grid grid-cols-2 gap-8 border-t pt-8 md:grid-cols-4 md:gap-12">
            {/* Stat 1: Years */}
            <div className="group flex flex-col gap-1">
              <span className="text-foreground text-3xl font-bold tracking-tighter md:text-4xl">
                6<span className="text-foreground/30">+</span>
              </span>
              <span className="text-foreground/50 text-sm">
                {t("HomePage.SocialProof.YearsExperience") || "Years Building"}
              </span>
            </div>

            {/* Stat 2: Tech Stack */}
            <div className="group flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Cpu className="text-foreground/30 h-5 w-5" />
                <span className="text-foreground text-3xl font-bold tracking-tighter md:text-4xl">
                  10<span className="text-foreground/30">+</span>
                </span>
              </div>
              <span className="text-foreground/50 text-sm">
                {t("HomePage.SocialProof.CoreTechnologies")}
              </span>
            </div>

            {/* Stat 3: Commercial */}
            <div className="group flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <Handshake className="text-foreground/30 h-5 w-5" />
                <span className="text-foreground text-3xl font-bold tracking-tighter md:text-4xl">
                  1 <span className="text-emerald-500 text-2xl font-semibold md:text-3xl">{t("HomePage.SocialProof.Exit")}</span>
                </span>
              </div>
              <span className="text-foreground/50 text-sm">
                {t("HomePage.SocialProof.ProductAcquired")}
              </span>
            </div>

            {/* Stat 4: Education */}
            <div className="group flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <GraduationCap className="text-foreground/30 h-5 w-5" />
                <span className="text-foreground text-3xl font-bold tracking-tighter md:text-4xl">
                  {t("HomePage.SocialProof.Dual")}
                </span>
              </div>
              <span className="text-foreground/50 text-sm">
                {t("HomePage.SocialProof.CSAndDentalTech")}
              </span>
            </div>
          </div>
        </div>

        {/* Terminal - smaller, subtler */}
        <div
          className="border-border/30 mt-16 w-full max-w-xl rounded-lg border bg-card/30 p-4 font-mono backdrop-blur-sm"
          dir="ltr"
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between text-foreground/40">
            <div className="flex items-center gap-1.5">
              <span className="bg-foreground/20 h-2.5 w-2.5 rounded-full" />
              <span className="bg-foreground/20 h-2.5 w-2.5 rounded-full" />
              <span className="bg-foreground/20 h-2.5 w-2.5 rounded-full" />
            </div>
            <span className="text-[10px]">terminal</span>
          </div>
          
          {/* Terminal Body */}
          <div className="text-foreground/60 mt-3 flex items-center gap-2 text-sm">
            <span className="text-blue-400">~</span>
            <span className="text-foreground/30">/</span>
            <span className="text-emerald-400">portfolio</span>
            <span className="text-foreground/40">
              {`git commit -m "feat: ${t("HomePage.Cards.CommitMessage")}"`}
            </span>
            <span className="bg-foreground/50 animate-caret-blink ml-1 inline-block h-4 w-[2px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
