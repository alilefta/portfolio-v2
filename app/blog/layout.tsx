import NewsletterCTA from "@/components/blog/NewsletterCta";
import FooterSection from "@/components/home/Footer";
import { Navbar } from "@/components/home/Navbar";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Navbar />
      <main className="font-inter rtl:font-alexandria bg-aurora w-full">
        {children}
      </main>
      <NewsletterCTA />
      <FooterSection />
    </div>
  );
}
