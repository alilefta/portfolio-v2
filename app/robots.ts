import { DOMAIN_URL } from "@/lib/info";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/", // if you have private routes
    },
    sitemap: DOMAIN_URL,
  };
}
