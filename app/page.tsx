import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactChapter } from "@/components/v3/home/ContactChapter";
import { MakerHero } from "@/components/v3/home/MakerHero";
import { OriginStory } from "@/components/v3/home/OriginStory";
import { ProofStrip } from "@/components/v3/home/ProofStrip";
import { SelectedWriting } from "@/components/v3/home/SelectedWriting";
import { WorkingProtocol } from "@/components/v3/home/WorkingProtocol";
import { ChapterTransition } from "@/components/v3/layout/ChapterTransition";
import { SiteFooter } from "@/components/v3/layout/SiteFooter";
import { SiteHeader } from "@/components/v3/layout/SiteHeader";
import { FeaturedWork } from "@/components/v3/projects/FeaturedWork";
import { DOMAIN_URL, GITHUB, LINKEDIN, SOCIAL_IMAGE_URL } from "@/lib/info";

const title = "Ali Lefta — Product Engineer Building Dependable Software";
const description =
  "Ali Lefta designs and builds dependable web and desktop products for difficult workflows, combining expressive interfaces with rigorous systems engineering.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: DOMAIN_URL,
    title,
    description,
    images: [{ url: SOCIAL_IMAGE_URL, alt: "Ali Lefta portfolio" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [SOCIAL_IMAGE_URL],
  },
};

export default async function Home() {
  const transition = await getTranslations("V3.Home.Transition");
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${DOMAIN_URL}/#person`,
        name: "Ali Lefta",
        url: DOMAIN_URL,
        jobTitle: "Product Engineer",
        sameAs: [GITHUB, LINKEDIN],
      },
      {
        "@type": "WebSite",
        "@id": `${DOMAIN_URL}/#website`,
        url: DOMAIN_URL,
        name: "Ali Lefta",
        publisher: { "@id": `${DOMAIN_URL}/#person` },
      },
    ],
  };

  return (
    <div className="min-h-dvh bg-v3-paper text-v3-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />
      <main>
        <MakerHero />
        <ProofStrip />
        <FeaturedWork />
        <ChapterTransition
          eyebrow={transition("Eyebrow")}
          title={transition("Title")}
          accent={transition("Accent")}
          index="02"
          tone="blue"
          className="flex min-h-[68svh] items-center"
        />
        <WorkingProtocol />
        <OriginStory />
        <SelectedWriting />
        <ContactChapter />
      </main>
      <SiteFooter />
    </div>
  );
}
