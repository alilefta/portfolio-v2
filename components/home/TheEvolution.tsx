import { Badge } from "@/components/ui/custom/Badge";
import { getTranslations } from "next-intl/server";

export default async function TheEvolutionSection() {
  const t = await getTranslations("HomePage.Evolution");

  return (
    <section className="to-foreground/5 relative mx-auto max-w-7xl gap-12 rounded-2xl px-6 py-8 lg:px-8 lg:py-16">
      <div className="mx-auto mb-20">
        <h2 className="mb-4 text-center text-5xl font-medium capitalize ltr:flex ltr:items-center ltr:gap-1.5">
          <span>{t("Title_The")}</span>
          <span className="text-foreground/50">{t("Title_Evolution")}</span>
        </h2>

        <hr className="mr-auto ml-auto h-0.5 w-24 bg-linear-to-r from-transparent via-zinc-500 to-transparent" />
      </div>

      <div className="grid grid-rows-5">
        {/* Row 1 */}
        <div className="grid grid-cols-11">
          {/* Content Left */}
          <div className="order-2 col-span-10 pb-8 md:order-1 md:col-span-5">
            <Badge variant={"outline"} className="mb-4">
              2018
            </Badge>
            <h3 className="mb-4 text-3xl uppercase md:text-4xl">
              {t("Curiosity_Title")}
            </h3>
            <p className="text-foreground/60 mb-1.5 max-w-72 text-sm tracking-wide">
              {t("Curiosity_P1")}
            </p>
            <p className="text-foreground/60 max-w-72 text-sm tracking-wide">
              {t("Curiosity_P2")}
            </p>
          </div>

          {/* Border Right */}
          <div className="order-1 col-span-1 flex w-full flex-col items-center md:order-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-700"></span>
            <span className="bg-foreground/10 h-full w-px"></span>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-11">
          {/* Content Right */}
          <div className="order-2 col-span-10 pb-8 md:col-span-5 md:col-start-7">
            <Badge variant={"outline"} className="mb-4">
              2020
            </Badge>
            <h3 className="mb-4 text-3xl uppercase md:text-4xl">
              {t("Precision_Title")}
            </h3>
            <p className="text-foreground/60 mb-1.5 max-w-72 text-sm tracking-wide">
              {t("Precision_P1")}
            </p>
            <p className="text-foreground/60 max-w-72 text-sm tracking-wide">
              {t("Precision_P2")}
            </p>
          </div>

          {/* Border Left */}
          <div className="order-1 col-span-1 flex w-full flex-col items-center md:col-start-6">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-700"></span>
            <span className="bg-foreground/10 h-full w-px"></span>
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-11">
          {/* Content Left */}
          <div className="order-2 col-span-10 pb-8 md:order-1 md:col-span-5">
            <Badge variant={"outline"} className="mb-4">
              2023
            </Badge>
            <h3 className="mb-4 text-3xl uppercase md:text-4xl">
              {t("Transition_Title")}
            </h3>
            <p className="text-foreground/60 mb-1.5 max-w-72 text-sm tracking-wide">
              {t("Transition_P1")}
            </p>
            <p className="text-foreground/60 max-w-72 text-sm tracking-wide">
              {t("Transition_P2")}
            </p>
          </div>

          {/* Border Right */}
          <div className="order-1 col-span-1 flex w-full flex-col items-center md:order-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-700"></span>
            <span className="bg-foreground/10 h-full w-px"></span>
          </div>
        </div>

        {/* Row 4 */}
        <div className="grid grid-cols-11">
          {/* Content Right */}
          <div className="order-2 col-span-10 pb-8 md:col-span-5 md:col-start-7">
            <Badge variant={"outline"} className="mb-4">
              2024
            </Badge>
            <h3 className="mb-4 text-3xl uppercase md:text-4xl">
              {t("Execution_Title")}
            </h3>
            <p className="text-foreground/60 mb-1.5 max-w-72 text-sm tracking-wide">
              {t("Execution_P1")}
            </p>
            <p className="text-foreground/60 max-w-72 text-sm tracking-wide">
              {t("Execution_P2")}
            </p>
          </div>

          {/* Border Left */}
          <div className="order-1 col-span-1 flex w-full flex-col items-center md:col-start-6">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-700"></span>
            <span className="bg-foreground/10 h-full w-px"></span>
          </div>
        </div>

        {/* Row 5 */}
        <div className="grid grid-cols-11">
          {/* Content Left */}
          <div className="order-2 col-span-10 pb-8 md:order-1 md:col-span-5">
            <Badge variant={"surface"} intent={"success"} className="mb-4">
              2025
            </Badge>
            <h3 className="mb-4 text-3xl uppercase md:text-4xl">
              {t("Building_Title")}
            </h3>
            <p className="text-foreground/60 mb-1.5 max-w-72 text-sm tracking-wide">
              {t("Building_P1")}
            </p>
            <p className="text-foreground/60 max-w-72 text-sm tracking-wide">
              {t("Building_P2")}
            </p>
          </div>

          {/* Border Right */}
          <div className="order-1 col-span-1 flex w-full flex-col items-center md:order-2">
            <span className="block h-2.5 w-2.5 rounded-full bg-blue-700"></span>
            <span className="from-foreground/10 to-foreground/2 h-full w-px bg-linear-to-b from-40%"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
