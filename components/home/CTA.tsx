"use client";

import Link from "next/link";
import { Button } from "../ui/custom/Button";
import { MoveUpRight, Stars } from "lucide-react";
import { Badge } from "../ui/custom/Badge";
import { useTheme } from "next-themes";

export function CTASection() {
  const { theme } = useTheme();
  return (
    <section className="from-background bg-aurora to-background via-80& relative mx-auto min-h-96 w-full bg-radial from-10% via-indigo-400/30 to-100% px-4 py-0 md:px-8 lg:py-0 dark:via-indigo-600/30">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            theme === "dark"
              ? "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)"
              : "linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)",
          backgroundSize: "4rem 4rem",
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 rounded-4xl bg-purple-500/20 px-4 py-4 backdrop-blur-3xl md:px-8 lg:py-12 dark:bg-indigo-600">
        <div className="flex flex-col">
          <Badge
            variant={"glass"}
            className="mx-auto mb-6 flex items-center gap-2"
          >
            <Stars size={14} />
            <span>Let&apos;s work together</span>
          </Badge>
          <h2 className="text-foreground mb-6 text-center text-5xl font-light tracking-tighter md:text-7xl">
            Ready to build
            <br />
            <span className="bg-foreground bg-linear-to-r bg-clip-text text-wrap text-transparent">
              something great?
            </span>
          </h2>
          <p className="text-foreground/60 max-w-2xl text-center text-lg leading-snug md:text-lg">
            Whether it&apos;s a complex SaaS architecture, a dental lab system,
            or an AI integration — I&apos;m ready to engineer it.
          </p>
        </div>

        <div className="">
          <Button
            asChild
            size={"lg"}
            className="group items-center gap-3 bg-black px-6 py-6 transition-all duration-300 hover:scale-105 dark:bg-white hover:dark:bg-zinc-200"
          >
            <Link href={"/contact"} className="flex items-center gap-2">
              <span>Get In Touch</span>
              <MoveUpRight size={16} />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
