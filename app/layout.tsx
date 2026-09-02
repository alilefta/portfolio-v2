import type { Metadata } from "next";
import "./globals.css";
import "katex/dist/katex.min.css"; // for math

import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
import { DOMAIN_URL, SOCIAL_IMAGE_URL } from "@/lib/info";
const geistSans = localFont({
  src: "../node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const playfair_display = localFont({
  src: [
    {
      path: "../node_modules/@fontsource-variable/playfair-display/files/playfair-display-latin-wght-normal.woff2",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource-variable/playfair-display/files/playfair-display-latin-wght-italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-playfair-display",
  weight: "400 900",
  display: "swap",
});

const alexandria = localFont({
  src: "../node_modules/@fontsource-variable/alexandria/files/alexandria-arabic-wght-normal.woff2",
  variable: "--font-alexandria",
  weight: "100 900",
  display: "swap",
});

const bixie = localFont({
  src: [
    {
      path: "../public/fonts/BIXIE-Regular.ttf",
    },
  ],
  variable: "--font-bixie",
});

const tido = localFont({
  src: [
    {
      path: "../public/fonts/TIDO-B.otf",
    },
  ],
  variable: "--font-tido",
});

const inter = localFont({
  src: [
    {
      path: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource-variable/inter/files/inter-latin-wght-italic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const noto_kufi = localFont({
  src: "../node_modules/@fontsource-variable/noto-kufi-arabic/files/noto-kufi-arabic-arabic-wght-normal.woff2",
  variable: "--font-noto-kufi",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "../node_modules/@fontsource-variable/geist-mono/files/geist-mono-latin-wght-normal.woff2",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

const v3Display = localFont({
  src: "../node_modules/@fontsource-variable/schibsted-grotesk/files/schibsted-grotesk-latin-wght-normal.woff2",
  variable: "--font-v3-display",
  weight: "100 900",
  display: "swap",
});

const v3Text = localFont({
  src: "../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2",
  variable: "--font-v3-text",
  weight: "200 800",
  display: "swap",
});

const v3Mono = localFont({
  src: [
    {
      path: "../node_modules/@fontsource/dm-mono/files/dm-mono-latin-400-normal.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/@fontsource/dm-mono/files/dm-mono-latin-500-normal.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-v3-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(DOMAIN_URL),

  title: {
    default: "Ali Lefta | System Architect & Full Stack Engineer",
    template: "%s | Ali Lefta",
  },

  description:
    "Full Stack Engineer combining 6+ years of clinical dental precision with robust software architecture. Building production-ready systems with Next.js, .NET, and Cloud infrastructure.",

  keywords: [
    "System Architect",
    "Full Stack Engineer",
    "Next.js Developer",
    ".NET Core",
    "Dental Technology",
    "Software Architecture",
    "React",
    "TypeScript",
  ],

  openGraph: {
    type: "website",
    locale: "en_US",
    url: DOMAIN_URL,
    siteName: "Ali Lefta",
    images: [{ url: SOCIAL_IMAGE_URL, alt: "Ali Lefta portfolio" }],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ali Lefta | System Architect",
    creator: "@alilefta",
    images: [SOCIAL_IMAGE_URL],
  },

};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  return (
    <html
      lang={locale === "ar" ? "ar" : "en"}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${noto_kufi.variable} ${playfair_display.variable} ${bixie.variable} ${tido.variable} ${alexandria.variable} ${v3Display.variable} ${v3Text.variable} ${v3Mono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            {children} <Toaster />
          </NextIntlClientProvider>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
