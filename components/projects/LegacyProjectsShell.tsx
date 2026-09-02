import type { ReactNode } from "react";
import FooterSection from "@/components/home/Footer";
import { Navbar } from "@/components/home/Navbar";

export function LegacyProjectsShell({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="w-full bg-aurora font-inter rtl:font-alexandria">
        {children}
      </main>
      <FooterSection />
    </>
  );
}
