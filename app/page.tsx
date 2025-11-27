import AboutMe from "@/components/home/AboutMe";
import { HeroSection } from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import SkillsSection from "@/components/home/Skills";
import SocialProof from "@/components/home/SocialProof";
import TechStack from "@/components/home/TechStack";
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
    </div>
  );
}
