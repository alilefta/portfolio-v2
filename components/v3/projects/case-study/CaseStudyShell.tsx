import type { ReactNode } from "react";
import { SiteHeader } from "@/components/v3/layout/SiteHeader";
import { SiteFooter } from "@/components/v3/layout/SiteFooter";

type CaseStudyShellProps = {
  children: ReactNode;
  structuredData?: unknown;
};

export function CaseStudyShell({
  children,
  structuredData,
}: CaseStudyShellProps) {
  return (
    <div className="min-h-dvh overflow-x-clip bg-v3-paper text-v3-ink">
      {structuredData ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
