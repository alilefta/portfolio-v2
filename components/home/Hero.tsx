import { getTranslations, getLocale } from "next-intl/server";

import { Button } from "../ui/custom/Button";
import { Cpu, Download, MapPin, MoveLeft, MoveRight } from "lucide-react";
import { Badge } from "../ui/custom/Badge";
import Link from "next/link";

export default async function HeroSection() {
  const t = await getTranslations();
  const local = await getLocale();
  const isRTL = local === "ar";

  return (
    <section className="min-h-[calc(min-h-dvh - 40px)] relative mx-auto w-full py-12 pt-18">
      <div className="pointer-events-none absolute top-0 left-0 z-0 h-[700px] w-full rounded-2xl bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-5 py-12 lg:grid-cols-12">
        {/* Big card */}
        <div className="glass-card group min-h-[500px] rounded-2xl p-8 md:p-12 lg:col-span-8">
          <div className="relative z-10">
            <Badge
              className="mb-6"
              size={"lg"}
              variant="surface"
              intent={"accent"}
            >
              <p className="uppercase">{t("Tags.FullStackDentalTech")}</p>
            </Badge>

            <h1 className="mb-6 text-4xl leading-[1.1] font-bold tracking-tighter md:text-6xl lg:text-7xl">
              {t("HomePage.Cards.Intro_Heading_Part1")} <br />
              <span className="to-foreground bg-linear-to-r from-blue-700/80 bg-clip-text text-transparent rtl:bg-linear-to-l dark:from-blue-400/50">
                {t("HomePage.Cards.Intro_Heading_Part2")}
              </span>
            </h1>

            <p className="text-foreground/80 mb-8 max-w-xl text-lg leading-relaxed font-light">
              {t("HomePage.Cards.Intro_Paragraph")}
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4">
              <Button
                className="group cursor-pointer"
                size={"lg"}
                variant={"primary"}
              >
                <Link
                  href="#selected-work"
                  className="flex items-center gap-2.5"
                >
                  {t("HomePage.Cards.CTA_SeeSelectedWork")}

                  {local === "en" ? (
                    <MoveRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
                  ) : (
                    <MoveLeft className="relative h-4 w-4 transition-transform group-hover:-translate-x-1" />
                  )}
                </Link>
              </Button>

              <Button
                className="cursor-pointer gap-1.5"
                variant={"secondary"}
                size={"lg"}
              >
                {t("Common.CV")}
                <Download className="size-4" />
              </Button>
            </div>
          </div>

          <div
            className="border-foreground/10 group mt-10 block w-full border-t pt-6 font-mono"
            dir="ltr"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="bg-foreground/10 size-2.5 rounded-full transition-colors group-hover:bg-red-900/80"></span>
                <span className="bg-foreground/10 size-2.5 rounded-full transition-colors group-hover:bg-yellow-600/80"></span>
              </div>

              <p className="font-mono text-[10px]">terminal - zsh</p>
            </div>
            {/* terminal body */}
            <div className="text-foreground/60 mt-2 flex items-center gap-2 font-mono text-sm">
              <span className="text-blue-400">~</span>
              <span className="text-foreground/50">/</span>
              <span className="text-green-400">ali-portfolio</span>
              <span className="text-foreground/50">
                {`git commit -m "feat: ${t("HomePage.Cards.CommitMessage")}"`}
              </span>
              <span className="bg-foreground/50 animate-caret-blink ml-1 inline-block h-4 w-2 align-middle"></span>
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="col-span-1 flex h-full flex-col gap-5 lg:col-span-4">
          {/* Top Card */}
          <div className="glass-card group relative flex-1 overflow-hidden rounded-2xl p-6">
            <div className="absolute inset-0 flex items-center bg-linear-to-b from-blue-500/20 to-transparent opacity-5 transition duration-500 group-hover:opacity-50">
              <div className="relative h-32 w-full lg:h-64">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] bg-repeat-round opacity-30"></div>
              </div>
            </div>
            <div className="relative z-10">
              <div className="mb-8 flex items-center justify-between">
                <Badge
                  variant="surface"
                  size={"lg"}
                  className="rounded-lg p-2.5"
                  intent={"neutral"}
                >
                  <Cpu size={16} className="text-blue-400/70" />
                </Badge>

                <div className="font-mono">
                  <h5 className="text-foreground/40 text-[10px] uppercase">
                    {t("Tags.Tolerance")}
                  </h5>
                  <p className="text-md text-foreground/80 rtl:text-sm">
                    {t("Tags.0_1MM")}
                  </p>
                </div>
              </div>

              <h4 className="mb-2 text-xl font-semibold tracking-tight">
                {t("HomePage.Cards.ObsessedWithDetail")}
              </h4>

              <p className="text-foreground/70 text-sm leading-relaxed">
                {t("HomePage.Cards.ObsessedWithDetail_Paragraph")}
              </p>
            </div>
          </div>

          {/* Bottom Card */}
          <div className="glass-card group relative h-auto overflow-hidden rounded-2xl p-6">
            <div className="relative z-10">
              <div className="flex flex-col gap-8">
                <div>
                  <p className="text-foreground/50 mb-3 text-[10px] font-light tracking-wider uppercase">
                    {t("Common.CoreStack")}
                  </p>
                  <div className="flex flex-wrap items-center justify-start gap-1.5">
                    <Badge
                      variant={"outline"}
                      className="text-foreground/80"
                      size={"lg"}
                    >
                      React
                    </Badge>
                    <Badge
                      variant={"outline"}
                      className="text-foreground/80"
                      size={"lg"}
                    >
                      Next.js
                    </Badge>
                    <Badge
                      variant={"outline"}
                      className="text-foreground/80"
                      size={"lg"}
                    >
                      Typescript
                    </Badge>
                    <Badge
                      variant={"outline"}
                      className="text-foreground/80"
                      size={"lg"}
                    >
                      Design
                    </Badge>
                    <Badge
                      variant={"outline"}
                      className="text-foreground/80"
                      size={"lg"}
                    >
                      C#/WPF
                    </Badge>
                  </div>
                </div>
                <div className="bg-foreground/8 h-px w-full"></div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-start gap-4">
                    <Badge
                      variant={"surface"}
                      intent={"neutral"}
                      size={"md"}
                      className="p-1.5"
                    >
                      <MapPin size={16} />
                    </Badge>
                    <div className="flex flex-col gap-px">
                      <p className="text-foreground/75 text-[12px] tracking-wider">
                        {t("HomePage.Cards.Location")}
                      </p>
                      <p className="text-foreground/50 font-mono text-xs tracking-tight">
                        GMT+3
                      </p>
                    </div>
                  </div>

                  <Badge className="rtl:font-alexandria rtl:text-xs rtl:tracking-tighter">
                    {t("HomePage.Cards.RemoteReady")}
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
