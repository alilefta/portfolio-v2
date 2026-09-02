import { DOMAIN_URL } from "@/lib/info";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/private/", "/dev", "/api/"],
    },
    sitemap: `${DOMAIN_URL}/sitemap.xml`,
    host: DOMAIN_URL,
  };
}
