import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  transpilePackages: ["next-mdx-remote"],
  // Optionally, add any other Next.js config below
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired,
  extension: /\.(md|mdx)$/,
});

const withNextInl = createNextIntlPlugin();
export default withMDX(withNextInl(nextConfig));
