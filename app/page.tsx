import { LocaleToggle } from "@/components/LocaleToggle";
import { NavButton } from "@/components/NavButton";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { getTranslations, getLocale } from "next-intl/server";

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations("HomePage");

  return {
    title: `${t("title")}`,
  };
};

export default async function Home() {
  const t = await getTranslations("HomePage");
  const locale = await getLocale();
  return (
    <div className="h-screen">
      <header className="flex items-center justify-between px-12 py-4">
        <h3 className="font-inter text-xl font-semibold tracking-tighter">
          Ali.
          <br />
          Mohsin
        </h3>
        <nav
          className={`rtl:font-noto-kufi font-inter flex items-center justify-center gap-2`}
        >
          <NavButton label={t("about")} href="/about" />
          <NavButton label={t("projects")} href="/projects" />
          <NavButton label={t("blog")} href="/blog" />
          <NavButton label={t("contacts")} href="/content" />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LocaleToggle />
        </div>
      </header>
      <main>
        <section className="min-h-[90vh] w-full">
          <div className="mx-6 grid grid-cols-12 gap-2 bg-amber-500 px-8 pt-24 pb-4 *:border">
            <h2 className="font-inter rtl:font-noto-kufi col-span-7 col-start-1 text-center text-9xl font-black tracking-wider">
              {locale === "en" ? "Full Stack" : "مطور ويب"}
            </h2>
            <div className="col-span-2 col-start-9">
              <Button className="h-64 w-64 rounded-sm">Projects</Button>
            </div>
          </div>
          <div className="mx-6 grid grid-cols-12 gap-2 px-2 pt-4 pb-24 *:border">
            <div className="col-span-4 col-start-2 flex items-center">
              <p className="font-sans text-xl leading-8 text-balance">
                My goal is to write maintainable, clean and understandable code
                to process development and enjoy the journey
              </p>
            </div>
            <h2 className="font-inter rtl:font-noto-kufi col-span-6 col-start-6 my-auto text-9xl font-black tracking-wider">
              {locale === "en" ? "Developer" : "شامل"}
            </h2>
          </div>
        </section>
      </main>
    </div>
  );
}
