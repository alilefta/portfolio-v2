import { SiteFooter } from "@/components/v3/layout/SiteFooter";
import { SiteHeader } from "@/components/v3/layout/SiteHeader";
import { ReactNode } from "react";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh w-full bg-v3-paper text-v3-ink">
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
