import AboutMe from "@/components/home/AboutMe";
import { HeroSection } from "@/components/home/Hero";
import HowIWork from "@/components/home/HowIWork";
import SelectedWork from "@/components/home/SelectedWork";
import ServicesSection from "@/components/home/ServicesSection";
import SkillsSection from "@/components/home/Skills";
import SocialProof from "@/components/home/SocialProof";
import TechStack from "@/components/home/TechStack";
import TheEvolutionSection from "@/components/home/TheEvolution";
import WhyHiringMeIsDifferent from "@/components/home/WhyHiringMeIsDifferent";

// export const generateMetadata = async (): Promise<Metadata> => {
//   const t = await getTranslations("HomePage");

//   return {
//     title: `${t("title")}`,
//   };
// };

export default async function Home() {
  return (
    <div className="font-inter rtl:font-alexandria">
      <HeroSection />
      <SocialProof />
      <SelectedWork />
      <TechStack />
      <SkillsSection />
      <AboutMe />
      <WhyHiringMeIsDifferent />
      <TheEvolutionSection />
      <HowIWork />
      <ServicesSection />
    </div>
  );
}
