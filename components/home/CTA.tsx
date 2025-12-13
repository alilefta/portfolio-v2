import Link from "next/link";
import { Button } from "../ui/custom/Button";
import { MoveUpLeft, MoveUpRight, Stars } from "lucide-react";
import { Badge } from "../ui/custom/Badge";
import { getLocale, getTranslations } from "next-intl/server";

export async function CTASection() {
  const t = await getTranslations("HomePage.CTASection");
  const locale = await getLocale();
  const isRTL = locale === "ar";

  return (
    <section className="from-background bg-aurora to-background via-80& relative mx-auto min-h-96 w-full bg-radial from-10% via-indigo-400/30 to-100% px-4 py-0 md:px-8 lg:py-0 dark:via-indigo-600/30">
      <div className={`bg-cta-section absolute inset-0`} />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 rounded-4xl bg-purple-500/20 px-4 py-4 backdrop-blur-3xl md:px-8 lg:py-12 dark:bg-indigo-600">
        <div className="flex flex-col gap-2.5">
          <Badge
            variant={"glass"}
            className="mx-auto mb-6 flex items-center gap-2"
          >
            <Stars size={14} />
            <span>{t("Badge")}</span>
          </Badge>
          <h2 className="text-foreground mb-6 text-center text-5xl font-light tracking-tighter md:text-7xl">
            {t("Title_Line1")}
            <br />
            <span className="bg-foreground bg-linear-to-r bg-clip-text pb-6 text-wrap text-transparent">
              {t("Title_Line2")}
            </span>
          </h2>
          <p className="text-foreground/60 max-w-2xl text-center text-lg leading-snug md:text-lg rtl:leading-normal">
            {t("Subtitle")}
          </p>
        </div>

        <div className="">
          <Button
            asChild
            size={"lg"}
            className="group items-center gap-3 bg-black px-6 py-6 transition-all duration-300 hover:scale-105 dark:bg-white hover:dark:bg-zinc-200"
          >
            <Link href={"/contact"} className="flex items-center gap-2">
              <span>{t("Button")}</span>
              {isRTL ? <MoveUpLeft size={16} /> : <MoveUpRight size={16} />}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
