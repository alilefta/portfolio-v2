import { Navbar } from "@/components/home/Navbar";
import { CTASection } from "@/components/home/CTA";
import FooterSection from "@/components/home/Footer";
import HeroSection from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import About from "@/components/home/About";
import Stack from "@/components/home/Stack";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ali Lefta | System Architect & Full Stack Engineer",
  description:
    "Bridging the gap between clinical precision and software architecture. Specialized in building scalable SaaS platforms and enterprise desktop systems.",
};

export default async function Home() {
  return (
    <>
      <Navbar />

      <main className="font-inter rtl:font-alexandria relative w-full">
        <HeroSection />
        <SelectedWork />
        <About />
        <Stack />
        <CTASection />
      </main>

      <FooterSection />
    </>
  );
}
