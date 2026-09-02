import type { Metadata } from "next";
import { getLocale, getTranslations } from "next-intl/server";
import { ProjectArchive } from "@/components/v3/projects/ProjectArchive";
import { DOMAIN_URL, SOCIAL_IMAGE_URL } from "@/lib/info";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations({ locale, namespace: "ProjectsPage.Metadata" });

  return {
    title: t("Title"),
    description: t("Description"),
    alternates: { canonical: "/projects" },
    openGraph: {
      type: "website",
      url: `${DOMAIN_URL}/projects`,
      title: t("Title"),
      description: t("Description"),
      locale: locale === "ar" ? "ar_IQ" : "en_US",
      images: [{ url: SOCIAL_IMAGE_URL, alt: t("Title") }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("Title"),
      description: t("Description"),
      images: [SOCIAL_IMAGE_URL],
    },
  };
}

export default async function ProjectsPage() {
  const locale = await getLocale();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${DOMAIN_URL}/projects#collection`,
        url: `${DOMAIN_URL}/projects`,
        name: locale === "ar" ? "أعمالي المختارة" : "Selected Work",
        description:
          locale === "ar"
            ? "دراسات حالة لأنظمة حقيقية ومنتجات قيد التطوير."
            : "Case studies of real systems and products in development.",
        isPartOf: { "@id": `${DOMAIN_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${DOMAIN_URL}/projects#breadcrumbs`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: locale === "ar" ? "الرئيسية" : "Home",
            item: `${DOMAIN_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: locale === "ar" ? "المشاريع" : "Projects",
            item: `${DOMAIN_URL}/projects`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <ProjectArchive />
    </>
  );
}
