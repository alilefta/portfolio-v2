import { SiteFooter } from "@/components/v3/layout/SiteFooter";
import { SiteHeader } from "@/components/v3/layout/SiteHeader";
import { ReactNode } from "react";

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="w-full bg-v3-paper text-v3-ink">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
