export const EMAIL = "alilefta95@gmail.com";
export const INSTAGRAM = "https://www.instagram.com/exalok";
export const TELEGRAM = "https://t.me/alilefta";
export const GITHUB = "https://github.com/alilefta";
export const LINKEDIN = "https://www.linkedin.com/in/alilefta/";
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const DOMAIN_URL = (
  configuredSiteUrl ?? "https://portfolio-v2-cyan-nine.vercel.app"
).replace(/\/+$/, "");

export const SOCIAL_IMAGE_URL = `${DOMAIN_URL}/opengraph-image`;
