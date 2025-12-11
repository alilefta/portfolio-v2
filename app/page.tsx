import { Navbar } from "@/components/home/Navbar";
import { CTASection } from "@/components/home/CTA";
import FooterSection from "@/components/home/Footer";
import HeroSection from "@/components/home/Hero";
import Services2 from "@/components/home/Services2";
import SkillsSection from "@/components/home/Skills";
import SocialProof from "@/components/home/SocialProof";
import TechStack from "@/components/home/TechStack";
import TheEvolutionSection from "@/components/home/TheEvolution";
import HowIWork from "@/components/home/HowIWork";
import SelectedWork from "@/components/home/SelectedWork";
import AboutMe_Redesign from "@/components/home/AboutMe_Redesign";
import { Metadata } from "next";
import { TrustedBy } from "@/components/home/TrustedBy";
import { Testimonials } from "@/components/home/Testimonials";

export const metadata: Metadata = {
  title: "Ali Mohsin | System Architect & Full Stack Engineer",
  description:
    "Bridging the gap between clinical precision and software architecture. Specialized in building scalable SaaS platforms and enterprise desktop systems.",
};

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
        <TrustedBy />
        <Services2 />
        <Testimonials />
        <CTASection />
      </main>
      <FooterSection />
    </>
  );
}
