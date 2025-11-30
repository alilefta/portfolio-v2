import { Badge } from "@/components/ui/custom/Badge";
import { Button } from "../ui/custom/Button";
import { ServiceItem, services } from "@/lib/data/services_section";
import { DynamicIcon } from "lucide-react/dynamic";
import { Star } from "lucide-react";
import { getLocale } from "next-intl/server";
export default async function ServicesSection() {
  const locale = await getLocale();

  return (
    <section className="relative mx-auto max-w-7xl gap-12 rounded-2xl px-6 py-8 lg:px-8 lg:py-16">
      <div className="mx-auto mb-20">
        <h2 className="mb-4 text-center text-5xl font-medium capitalize">
          How We <span className="text-foreground/50">Work Together</span>
        </h2>

        <hr className="mr-auto ml-auto h-0.5 w-24 bg-linear-to-r from-transparent via-zinc-500 to-transparent" />
      </div>

      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard
            service={service}
            key={`${index}_${service.title.substring(10)}`}
          />
        ))}
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-700 via-indigo-700 to-purple-800 pt-12 pr-12 pb-12 pl-12 text-center md:p-24">
        <div className="absolute top-0 right-0 p-12 opacity-20">
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="help-circle"
      className="lucide lucide-help-circle w-32 h-32 text-white">
      <circle cx="12" cy="12" r="10"></circle>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
      <path d="M12 17h.01"></path>
    </svg> */}
        </div>

        <div className="relative z-10 mr-auto ml-auto max-w-2xl">
          <h2 className="mb-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Not Sure Where To Start?
          </h2>
          <p className="mb-10 text-lg font-light text-blue-100">
            Book a free 30-minute call. Tell me what you're working on — I'll
            help you figure out the best next step, even if it's not hiring me.
          </p>

          <button className="transform rounded-xl bg-white px-8 py-4 text-sm font-semibold text-indigo-900 shadow-xl transition-all hover:-translate-y-1 hover:bg-blue-50">
            Schedule a Free Call
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  const { title, description, offerings, price, cta, icon, featured } = service;
  return (
    <div className="border-foreground/8 bg-foreground/2 group hover:border-foreground/20 relative flex h-auto flex-col overflow-hidden rounded-3xl border-2 p-8 duration-500 hover:-translate-y-1 hover:shadow-[0_0_15px_2px_#673ab78a]">
      {featured && (
        <div className="absolute inset-0 top-4 right-4 flex h-16 items-center justify-end">
          <Star size={64} className="text-blue-500/10" />
        </div>
      )}
      <div className="relative z-10 flex-1">
        <Badge
          className="mb-6 rounded-xl p-2 duration-500 group-hover:shadow-[0_0_15px_2px_#673ab78a]"
          variant={"surface"}
          intent={"neutral"}
        >
          <DynamicIcon
            name={icon}
            size={18}
            className="transition-colors duration-500 group-hover:animate-pulse group-hover:text-amber-300"
          />
        </Badge>

        <h3 className="mb-4 text-xl font-medium tracking-tighter md:text-2xl">
          {title}
        </h3>
        <p className="text-foreground/50 text-sm">{description}</p>
      </div>

      <hr className="border-foreground/10 my-4 transition-colors duration-500 group-hover:bg-[#673ab78a]/20" />

      <div className="flex-1">
        <h5 className="mb-1 text-[14px] capitalize">Perfect For:</h5>
        <ul className="text-foreground/60 mb-4 ml-3 list-disc text-[12px] tracking-wide">
          {offerings.map((e, index) => (
            <li key={`${index}_${e.substring(8)}`}>{e}</li>
          ))}
        </ul>

        <h5 className="mb-1 text-[14px] capitalize">Starting point</h5>
        <p className="text-foreground/60 mb-4 text-[12px] tracking-wide">
          {price}
        </p>
      </div>

      <Button className="w-full" variant={"primary"}>
        {cta}
      </Button>
    </div>
  );
}
