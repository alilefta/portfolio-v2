import { Navbar } from "@/components/home/Navbar";
import AboutMe from "@/components/home/AboutMe";
import { CTASection } from "@/components/home/CTA";
import FooterSection from "@/components/home/Footer";
import HeroSection from "@/components/home/Hero";
import Services2 from "@/components/home/Services2";
import SkillsSection from "@/components/home/Skills";
import SocialProof from "@/components/home/SocialProof";
import TechStack from "@/components/home/TechStack";
import TheEvolutionSection from "@/components/home/TheEvolution";
import WhyHiringMeIsDifferent from "@/components/home/WhyHiringMeIsDifferent";
import HowIWork from "@/components/home/HowIWork";
import SelectedWork from "@/components/home/SelectedWork";
import AboutMe_Redesign from "@/components/home/AboutMe_Redesign";

// export const generateMetadata = async (): Promise<Metadata> => {
//   const t = await getTranslations("HomePage");

//   return {
//     title: `${t("title")}`,
//   };
// };

export default async function Home() {
  return (
    <>
      <Navbar />

      <main className="font-inter rtl:font-alexandria relative w-full">
        <HeroSection />
        <SocialProof />
        <SelectedWork />
        <TechStack />
        <SkillsSection />
        <AboutMe_Redesign />
        <TheEvolutionSection />
        <HowIWork />
        <Services2 />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}
