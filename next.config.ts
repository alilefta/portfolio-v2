import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote"],
  async redirects() {
    const redirects = [
      {
        source: "/blog",
        destination: "/en/blog",
        permanent: true,
      },
      {
        source: "/blog/notes",
        destination: "/en/blog/notes",
        permanent: true,
      },
      {
        source: "/blog/notes/:slug",
        destination: "/en/blog/notes/:slug",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/en/blog/:slug",
        permanent: true,
      },
    ];

    if (process.env.NODE_ENV !== "production") return redirects;

    return [
      ...redirects,
      {
        source: "/dev/v3-oscar",
        destination: "/projects/oscar-lab-system-en",
        permanent: false,
      },
    ];
  },
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired,
  extension: /\.(md|mdx)$/,
});

const withNextInl = createNextIntlPlugin();
export default withMDX(withNextInl(nextConfig));
