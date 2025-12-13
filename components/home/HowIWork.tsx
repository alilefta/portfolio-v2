import { Code, PenTool, Rocket, Search } from "lucide-react";
import { Badge } from "@/components/ui/custom/Badge";
import { getTranslations } from "next-intl/server";

export default async function HowIWork() {
  const t = await getTranslations("HomePage.HowIWork");

  return (
    <section className="relative mx-auto max-w-7xl gap-12 px-6 py-8 lg:px-8 lg:py-16">
      <div className="mx-auto mb-20">
        <h2 className="mb-2 text-5xl font-medium capitalize">
          {t("Title_How")}{" "}
          <span className="text-foreground/50">{t("Title_Work")}</span>
        </h2>
        <p className="text-foreground/50 mb-4 text-sm tracking-wide">
          {t("Subtitle")}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Row 1: Discovery */}
        <div className="bg-foreground/8 group relative flex items-center justify-between overflow-hidden rounded-2xl px-6 py-6">
          <div className="absolute inset-0 w-full translate-x-1200 rotate-x-2 bg-blue-700/70 transition-transform duration-500 group-hover:translate-x-0 rtl:-translate-x-1200 rtl:group-hover:translate-x-0"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="text-foreground/8 group-hover:text-foreground/15 text-6xl transition-colors sm:text-9xl">
              01
            </div>
            <div className="">
              <h3 className="mb-2 text-4xl font-light uppercase sm:text-5xl">
                {t("Discovery_Title")}
              </h3>
              <p className="text-foreground/60 text-md">
                {t("Discovery_Desc")}
              </p>
            </div>
          </div>
          <Badge className="relative z-10 mr-4 p-2 transition-all group-hover:translate-x-0 ltr:translate-x-200 rtl:mr-auto rtl:ml-4 rtl:-translate-x-200">
            <Search />
          </Badge>
        </div>

        {/* Row 2: Design */}
        <div className="bg-foreground/8 group relative flex items-center justify-between overflow-hidden rounded-2xl px-6 py-6 md:ml-48 rtl:md:mr-48 rtl:md:ml-0">
          <div className="absolute inset-0 w-full translate-x-1200 rotate-x-2 bg-blue-700/70 transition-transform duration-500 group-hover:translate-x-0 rtl:-translate-x-1200 rtl:group-hover:translate-x-0"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="text-foreground/8 group-hover:text-foreground/15 text-6xl transition-colors duration-700 sm:text-9xl">
              02
            </div>
            <div className="">
              <h3 className="mb-2 text-4xl font-light uppercase sm:text-5xl">
                {t("Design_Title")}
              </h3>
              <p className="text-foreground/60 text-md">{t("Design_Desc")}</p>
            </div>
          </div>
          <Badge className="relative z-10 mr-4 p-2 transition-all group-hover:translate-x-0 ltr:translate-x-200 rtl:mr-auto rtl:ml-4 rtl:-translate-x-200">
            <PenTool />
          </Badge>
        </div>

        {/* Row 3: Build */}
        <div className="bg-foreground/8 group relative flex items-center justify-between overflow-hidden rounded-2xl px-6 py-6">
          <div className="absolute inset-0 w-full translate-x-1200 rotate-x-2 bg-blue-700/70 transition-transform duration-500 group-hover:translate-x-0 rtl:-translate-x-1200 rtl:group-hover:translate-x-0"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="text-foreground/8 group-hover:text-foreground/15 text-6xl transition-colors sm:text-9xl">
              03
            </div>
            <div className="">
              <h3 className="mb-2 text-4xl font-light uppercase sm:text-5xl">
                {t("Build_Title")}
              </h3>
              <p className="text-foreground/60 text-md">{t("Build_Desc")}</p>
            </div>
          </div>
          <Badge className="relative z-10 mr-4 p-2 transition-all group-hover:translate-x-0 ltr:translate-x-200 rtl:mr-auto rtl:ml-4 rtl:-translate-x-200">
            <Code />
          </Badge>
        </div>

        {/* Row 4: Deliver */}
        <div className="bg-foreground/8 group relative flex items-center justify-between overflow-hidden rounded-2xl px-6 py-6 md:ml-48 rtl:md:mr-48 rtl:md:ml-0">
          <div className="absolute inset-0 w-full translate-x-1200 rotate-x-2 bg-blue-700/70 transition-transform duration-500 group-hover:translate-x-0 rtl:-translate-x-1200 rtl:group-hover:translate-x-0"></div>

          <div className="relative z-10 flex items-center gap-4">
            <div className="text-foreground/8 group-hover:text-foreground/15 text-6xl transition-colors sm:text-9xl">
              04
            </div>
            <div className="">
              <h3 className="mb-2 text-4xl font-light uppercase sm:text-5xl">
                {t("Deliver_Title")}
              </h3>
              <p className="text-foreground/60 text-md">{t("Deliver_Desc")}</p>
            </div>
          </div>
          <Badge className="relative z-10 mr-4 p-2 transition-all group-hover:translate-x-0 ltr:translate-x-200 rtl:mr-auto rtl:ml-4 rtl:-translate-x-200">
            <Rocket />
          </Badge>
        </div>
      </div>
    </section>
  );
}
