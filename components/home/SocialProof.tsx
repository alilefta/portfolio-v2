/* Add these to your component */
import { Cpu, Globe, Handshake, GraduationCap } from "lucide-react";
/* Or any icon set you use */
import { getTranslations } from "next-intl/server";
export default async function SocialProof() {
  const t = await getTranslations("HomePage.SocialProof");
  return (
    <section className="w-full border-y border-black/10 bg-white/80 backdrop-blur-sm dark:border-white/5 dark:bg-black/20">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* The Grid Container */}
        <div className="grid grid-cols-2 divide-x divide-white/5 md:grid-cols-4">
          {/* ITEM 1: Tech Stack */}
          <div className="group flex cursor-default flex-col items-center justify-center py-8 md:py-10">
            <div className="mb-2 flex items-center gap-2 opacity-50 transition-opacity group-hover:opacity-100">
              <Cpu className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              <span className="rtl:font-alexandria font-mono text-[10px] tracking-widest text-zinc-700 uppercase rtl:font-bold dark:text-zinc-400">
                {t("Stack")}
              </span>
            </div>
            <div className="text-foreground/80 text-3xl font-bold tracking-tighter transition-transform duration-300 group-hover:scale-110 md:text-4xl dark:text-white">
              10<span className="text-blue-400 dark:text-blue-500">+</span>
            </div>
            <p className="mt-1 text-xs text-zinc-500">
              {t("CoreTechnologies")}
            </p>
          </div>

          {/* ITEM 2: Platforms */}
          <div className="group flex cursor-default flex-col items-center justify-center py-8 md:py-10">
            <div className="mb-2 flex items-center gap-2 opacity-50 transition-opacity group-hover:opacity-100">
              <Globe className="h-4 w-4 text-purple-600 dark:text-purple-400" />
              <span className="rtl:font-alexandria font-mono text-[10px] tracking-widest text-zinc-700 uppercase rtl:font-bold dark:text-zinc-400">
                {t("Platforms")}
              </span>
            </div>
            <div className="text-foreground/80 text-3xl font-bold tracking-tighter transition-transform duration-300 group-hover:scale-110 md:text-4xl dark:text-white">
              {t("Web")}
              <span className="text-zinc-600">/</span>
              {t("App")}
            </div>
            <p className="mt-1 text-xs text-zinc-500">
              {t("UnifiedArchitecture")}
            </p>
          </div>

          {/* ITEM 3: Sold Product */}
          <div className="group flex cursor-default flex-col items-center justify-center py-8 md:py-10">
            <div className="mb-2 flex items-center gap-2 opacity-50 transition-opacity group-hover:opacity-100">
              <Handshake className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              <span className="rtl:font-alexandria font-mono text-[10px] tracking-widest text-zinc-700 uppercase rtl:font-bold dark:text-zinc-400">
                {t("Commercial")}
              </span>
            </div>
            <div className="text-foreground/80 text-3xl font-bold tracking-tighter transition-transform duration-300 group-hover:scale-110 md:text-4xl dark:text-white">
              1
              <span className="text-emerald-400 dark:text-emerald-500">
                {t("Exit")}
              </span>
            </div>
            <p className="mt-1 text-xs text-zinc-500">{t("ProductAcquired")}</p>
          </div>

          {/* ITEM 4: Education */}
          <div className="group flex cursor-default flex-col items-center justify-center py-8 md:py-10">
            <div className="mb-2 flex items-center gap-2 opacity-50 transition-opacity group-hover:opacity-100">
              <GraduationCap className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span className="rtl:font-alexandria font-mono text-[10px] tracking-widest text-zinc-700 uppercase rtl:font-bold dark:text-zinc-400">
                {t("Education")}
              </span>
            </div>
            <div className="text-foreground/80 text-3xl font-bold tracking-tighter transition-transform duration-300 group-hover:scale-110 md:text-4xl dark:text-white">
              {t("Dual")}
            </div>
            <p className="mt-1 text-xs text-zinc-500">{t("CSAndDentalTech")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
