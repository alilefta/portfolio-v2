import {
  ArrowUpLeft,
  ArrowUpRight,
  Check,
  Globe,
  Heart,
  LaptopMinimalIcon,
  MoveUpLeft,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { Badge } from "../ui/custom/Badge";
import { Button } from "../ui/custom/Button";
import Link from "next/link";
import { getTranslations, getLocale } from "next-intl/server";

export default async function ServicesSection() {
  const t = await getTranslations("HomePage.Services");
  const locale = await getLocale();
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
      {/* Background Ambient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-foreground/10 absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full blur-[120px] dark:bg-purple-500/10" />
      </div>

      {/* Section Header */}
      <div className="mb-16 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
          <Sparkles className="h-3 w-3 text-purple-500 dark:text-purple-400" />
          <span className="text-foreground/40 font-mono text-xs tracking-[0.2em] uppercase">
            {t("Badge")}
          </span>
        </div>
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          {t("Title_Two")}{" "}
          <span className="text-foreground/50">{t("Title_One")}</span>
        </h2>
      </div>

      {/* The Two Core Offerings */}
      <div className="mb-8 grid gap-8 lg:grid-cols-2">
        {/* Offering 1: Desktop Applications */}
        <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-linear-to-br from-blue-500/5 to-transparent p-10 transition-colors duration-500 hover:border-blue-500/10 hover:from-blue-500/10 lg:p-12">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[32px_32px] opacity-50" />

          {/* Number Watermark */}
          <div className="text-foreground/2 group-hover:text-foreground/4 absolute -top-4 -right-4 text-[160px] leading-none font-bold transition-all">
            01
          </div>

          {/* Badge */}
          <div className="absolute top-6 right-6">
            {/* <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 backdrop-blur-sm">
              <span className="font-mono text-xs text-emerald-300">Proven</span>
            </div> */}

            <Badge variant={"surface"} intent={"success"}>
              {t("Proven")}
            </Badge>
          </div>

          <div className="relative">
            {/* Icon */}
            <Badge
              variant={"surface"}
              intent={"neutral"}
              className="mb-6 rounded-lg p-2.5"
            >
              <LaptopMinimalIcon size={22} className="text-foreground/50" />
            </Badge>

            {/* Title */}
            <h3 className="mb-4 text-3xl font-bold tracking-tight">
              {t("Desktop.Title")}
            </h3>

            {/* Description */}
            <p className="text-foreground/60 mb-8 text-base leading-relaxed">
              {t("Desktop.Desc")}
            </p>

            {/* What This Includes */}
            <div className="mb-8 space-y-3">
              {[
                t("Desktop.List1"),
                t("Desktop.List2"),
                t("Desktop.List3"),
                t("Desktop.List4"),
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Check
                    size={18}
                    className="text-foreground/50 transition-colors duration-300 group-hover:text-blue-500"
                  />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Track Record Box */}
            <div className="bg-foreground/5 border-foreground/10 mb-8 rounded-xl border p-4">
              <div className="flex items-start gap-3">
                <div>
                  <div className="mb-1 text-sm font-semibold">
                    {t("Desktop.TrackRecord")}
                  </div>
                  <div className="text-foreground/50 text-xs leading-relaxed">
                    {t("Desktop.TrackRecord_Desc")}
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-8 flex flex-wrap gap-2">
              <Badge variant={"outline"}>C# & .NET</Badge>
              <Badge variant={"outline"}>WPF</Badge>
              <Badge variant={"outline"}>SQLite</Badge>
              <Badge variant={"outline"}>Entity Framework</Badge>
            </div>

            {/* CTA */}
            <Button variant={"secondary"} asChild>
              <a
                href="/contact"
                className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-wrap text-blue-400 transition-colors hover:text-blue-300"
              >
                {t("Desktop.CTA")}
                {locale === "en" ? (
                  <MoveUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                ) : (
                  <MoveUpLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                )}
              </a>
            </Button>
          </div>
        </div>

        {/* Offering 2: Full-Stack Web Applications */}
        <div className="group border-foreground/10 relative overflow-hidden rounded-4xl border bg-linear-to-br from-purple-500/5 to-transparent p-10 transition-colors duration-500 hover:border-purple-500/30 hover:from-purple-500/10 lg:p-12">
          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[32px_32px] opacity-50" />

          {/* Number Watermark */}
          <div className="text-foreground/2 group-hover:text-foreground/4 absolute -top-4 -right-4 text-[160px] leading-none font-bold transition-all">
            02
          </div>

          <div className="relative">
            {/* Icon */}
            <Badge
              variant={"surface"}
              intent={"neutral"}
              className="mb-6 rounded-lg p-2.5"
            >
              <Globe size={22} className="text-foreground/50" />
            </Badge>

            {/* Title */}
            <h3 className="mb-4 text-3xl font-bold tracking-tight">
              {t("Web.Title")}
            </h3>

            {/* Description */}
            <p className="text-foreground/60 mb-8 text-base leading-relaxed">
              {t("Web.Desc")}
            </p>

            {/* What This Includes */}
            <div className="mb-16 space-y-3">
              {[t("Web.List1"), t("Web.List2"), t("Web.List3")].map(
                (item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      size={18}
                      className="text-foreground/50 transition-colors duration-300 group-hover:text-purple-500"
                    />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </div>
                ),
              )}
            </div>

            {/* Current Project Box */}
            <div className="bg-foreground/5 border-foreground/10 mb-8 rounded-xl border p-4">
              <div className="flex items-start gap-3">
                <div>
                  <div className="text-foreground/70 mb-1 text-sm font-semibold">
                    {t("Web.CurrentProject")}
                  </div>
                  <div className="text-foreground/50 text-xs leading-relaxed">
                    {t("Web.CurrentProject_Desc")}
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="mb-8 flex flex-wrap gap-2">
              <Badge variant={"outline"}>Next.js</Badge>
              <Badge variant={"outline"}>TypeScript</Badge>
              <Badge variant={"outline"}>PostgreSQL</Badge>
              <Badge variant={"outline"}>React</Badge>
            </div>

            {/* CTA */}
            <Button asChild variant={"outline"}>
              <Link
                href="/contact"
                className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-wrap text-purple-400 transition-colors hover:text-purple-300"
              >
                {t("Web.CTA")}
                {locale === "en" ? (
                  <MoveUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                ) : (
                  <MoveUpLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                )}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Healthcare Specialty Banner */}
      <div className="group border-foreground/10 relative overflow-hidden rounded-4xl border bg-linear-to-br from-emerald-500/5 to-transparent p-8 backdrop-blur-sm transition-colors duration-500 hover:border-emerald-500/30 hover:from-emerald-500/10 lg:p-10">
        {/* Grid Pattern */}
        <div className="bg-size[32px_32px] absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] opacity-50" />

        <div className="relative flex flex-col items-center gap-6 lg:flex-row lg:gap-8">
          {/* Icon */}
          <Badge
            variant={"surface"}
            intent={"success"}
            className="rounded-2xl p-4"
          >
            <Heart size={32} />
          </Badge>
          {/* Content */}
          <div className="flex-1 text-center ltr:lg:text-left rtl:text-right">
            <div className="mb-2 flex items-center justify-center gap-2 lg:justify-start">
              <h3 className="text-2xl font-bold">{t("Healthcare.Title")}</h3>
              <span className="text-2xl">🦷</span>
            </div>
            <p className="text-foreground/40">{t("Healthcare.Desc")}</p>
          </div>

          {/* CTA */}
          <Button className="shrink-0" variant={"ghost"} asChild>
            <Link
              href="/contact"
              className="group/btn inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-3 font-semibold text-wrap text-emerald-500 backdrop-blur-sm transition-all hover:border-emerald-500/40 hover:bg-emerald-500/20 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
            >
              {t("Healthcare.CTA")}
              {locale === "en" ? (
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              ) : (
                <ArrowUpLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              )}
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom Note - Simple & Honest */}
      <div className="mt-16 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-foreground/40 mb-4 text-lg">
            {t("Footer.Question")}
          </p>
          <Link
            href="/contact"
            className="group text-foreground inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-blue-400"
          >
            {t("Footer.Link")}
            {locale === "en" ? (
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            ) : (
              <ArrowUpLeft className="h-4 w-4 transition-transform group-hover/btn:-translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
}
