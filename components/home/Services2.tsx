import {
  ArrowUpRight,
  Check,
  Globe,
  Heart,
  HeartPlus,
  LaptopMinimalIcon,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { Badge } from "../ui/custom/Badge";
import { Button } from "../ui/custom/Button";
import Link from "next/link";

export default function Services2() {
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
            What I Build
          </span>
        </div>
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
          Two platforms.{" "}
          <span className="text-foreground/50">
            One obsession with quality.
          </span>
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
              Proven
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
              Desktop Applications
            </h3>

            {/* Description */}
            <p className="text-foreground/60 mb-8 text-base leading-relaxed">
              Reliable Windows applications for businesses that need
              offline-first, high-performance tools.
            </p>

            {/* What This Includes */}
            <div className="mb-8 space-y-3">
              <div className="flex items-center gap-3">
                <Check
                  size={18}
                  className="text-foreground/50 transition-colors duration-300 group-hover:text-blue-500"
                />
                <span className="text-foreground/80 text-sm">
                  Lab management systems
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check
                  size={18}
                  className="text-foreground/50 transition-colors duration-300 group-hover:text-blue-500"
                />

                <span className="text-foreground/80 text-sm">
                  Inventory & workflow tools
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check
                  size={18}
                  className="text-foreground/50 transition-colors duration-300 group-hover:text-blue-500"
                />

                <span className="text-foreground/80 text-sm">
                  Data entry & reporting systems
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check
                  size={18}
                  className="text-foreground/50 transition-colors duration-300 group-hover:text-blue-500"
                />

                <span className="text-foreground/80 text-sm">
                  Offline apps and tools
                </span>
              </div>
            </div>

            {/* Track Record Box */}
            <div className="bg-foreground/5 border-foreground/10 mb-8 rounded-xl border p-4">
              <div className="flex items-start gap-3">
                <div>
                  <div className="mb-1 text-sm font-semibold">Track Record</div>
                  <div className="text-foreground/50 text-xs leading-relaxed">
                    Built Oscar Lab—a C#/WPF desktop app. Sold it to an active
                    dental lab. Still in use today.
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
                Need a Windows application?
                <MoveUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
              Full-Stack Web Applications
            </h3>

            {/* Description */}
            <p className="text-foreground/60 mb-8 text-base leading-relaxed">
              Modern, cloud-based platforms that work anywhere. From simple
              dashboards to complex SaaS products.
            </p>

            {/* What This Includes */}
            <div className="mb-16 space-y-3">
              <div className="flex items-start gap-3">
                <Check
                  size={18}
                  className="text-foreground/50 transition-colors duration-300 group-hover:text-purple-500"
                />
                <span className="text-foreground/80 text-sm">
                  SaaS platforms & business tools
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check
                  size={18}
                  className="text-foreground/50 transition-colors duration-300 group-hover:text-purple-500"
                />
                <span className="text-foreground/80 text-sm">
                  Custom dashboards & analytics
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Check
                  size={18}
                  className="text-foreground/50 transition-colors duration-300 group-hover:text-purple-500"
                />
                <span className="text-foreground/80 text-sm">
                  E-commerce & payment systems
                </span>
              </div>
            </div>

            {/* Current Project Box */}
            <div className="bg-foreground/5 border-foreground/10 mb-8 rounded-xl border p-4">
              <div className="flex items-start gap-3">
                <div>
                  <div className="text-foreground/70 mb-1 text-sm font-semibold">
                    Currently Building
                  </div>
                  <div className="text-foreground/50 text-xs leading-relaxed">
                    Labora—a multi-tenant SaaS for dental labs with real-time
                    collaboration and marketplace features.
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
                Let&apos;s build your web app
                <MoveUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
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
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-2 flex items-center justify-center gap-2 lg:justify-start">
              <h3 className="text-2xl font-bold">
                Healthcare Software Specialist
              </h3>
              <span className="text-2xl">🦷</span>
            </div>
            <p className="text-foreground/40">
              <span className="text-foreground font-semibold">
                6 years in dental labs
              </span>{" "}
              means I understand your workflow, compliance needs (HIPAA-aware),
              and industry pain points. Whether you need desktop software for a
              clinic or a cloud platform for multiple locations—I&apos;ve been
              in your shoes.
            </p>
          </div>

          {/* CTA */}
          <Button className="shrink-0" variant={"ghost"}>
            <Link
              href="/contact"
              className="group/btn inline-flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-6 py-3 font-semibold text-wrap text-emerald-500 backdrop-blur-sm transition-all hover:border-emerald-500/40 hover:bg-emerald-500/20 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400"
            >
              Healthcare project?
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Bottom Note - Simple & Honest */}
      <div className="mt-16 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="text-foreground/40 mb-4 text-lg">
            Not sure which platform fits your needs?
          </p>
          <Link
            href="/contact"
            className="group text-foreground inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:text-blue-400"
          >
            Let&apos;s talk—I&apos;ll help you choose the right approach
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
