import { HeartPulse } from "lucide-react";
import { Badge } from "../ui/custom/Badge";

export default function WhyHiringMeIsDifferent() {
  return (
    <section className="relative mx-auto max-w-7xl gap-12 px-6 py-8 lg:px-8 lg:py-16">
      <div className="mx-auto mb-20">
        <h2 className="mb-4 text-center text-5xl font-medium capitalize">
          Why hiring Me{" "}
          <span className="text-foreground/50"> is Different</span>
        </h2>

        <hr className="mr-auto ml-auto h-0.5 w-24 bg-linear-to-r from-transparent via-zinc-500 to-transparent" />
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Card 1 */}
        <div className="border-foreground/8 bg-foreground/2 group hover:border-foreground/20 relative overflow-hidden rounded-3xl border-2 p-8 shadow-sm duration-500 hover:-translate-y-1">
          <div className="relative z-10">
            <Badge
              className="mb-6 rounded-xl p-3"
              variant={"surface"}
              intent={"neutral"}
            >
              <HeartPulse />
            </Badge>

            <h3 className="mb-4 text-xl font-medium tracking-tighter md:text-2xl">
              Healthcare Domain Expert
            </h3>
            <p className="text-foreground/50 mb-4 max-w-72 text-sm">
              6 years working in dental labs as Dental Technician. I don&apos;t
              learn your industry—I lived it.
            </p>
          </div>

          <div className="text-foreground/2 group-hover:text-foreground/4 absolute -right-4 -bottom-8 text-[12rem] leading-none font-bold transition-colors select-none">
            01
          </div>
        </div>

        {/* Card 2 */}
        <div className="border-foreground/8 bg-foreground/2 group hover:border-foreground/20 relative overflow-hidden rounded-3xl border-2 p-8 shadow-sm duration-500 hover:-translate-y-1">
          <div className="relative z-10">
            <Badge
              className="mb-6 rounded-xl p-3"
              variant={"surface"}
              intent={"neutral"}
            >
              <HeartPulse />
            </Badge>

            <h3 className="mb-4 text-xl font-medium tracking-tighter md:text-2xl">
              Obsessed With Details
            </h3>
            <p className="text-foreground/50 mb-4 max-w-72 text-sm">
              Trained in an environment where 0.1mm ruins a $500 dental crown.
              That level of precision is now hardwired into how I code.
            </p>
          </div>

          <div className="text-foreground/2 group-hover:text-foreground/4 absolute -right-4 -bottom-8 text-[12rem] leading-none font-bold transition-colors select-none">
            02
          </div>
        </div>

        {/* Card 3 */}
        <div className="border-foreground/8 bg-foreground/2 group hover:border-foreground/20 relative overflow-hidden rounded-3xl border-2 p-8 shadow-sm duration-500 hover:-translate-y-1">
          <div className="relative z-10">
            <Badge
              className="mb-6 rounded-xl p-3"
              variant={"surface"}
              intent={"neutral"}
            >
              <HeartPulse />
            </Badge>

            <h3 className="mb-4 text-xl font-medium tracking-tighter md:text-2xl">
              Builder, Not just Coder
            </h3>
            <p className="text-foreground/50 mb-4 max-w-72 text-sm">
              While working full-time as a dental technician, I earned a
              Computer Science degree (93.8% GPA), built a SaaS product, and
              sold it.
            </p>
          </div>

          <div className="text-foreground/2 group-hover:text-foreground/4 absolute -right-4 -bottom-8 text-[12rem] leading-none font-bold transition-colors select-none">
            03
          </div>
        </div>
      </div>
    </section>
  );
}
