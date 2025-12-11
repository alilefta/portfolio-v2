import type { Metadata } from "next";
import {
  Alexandria,
  Amiri,
  Fustat,
  Geist,
  Geist_Mono,
  Playfair_Display,
  Inter,
  Noto_Kufi_Arabic,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair_display = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic", "latin"],
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

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const noto_kufi = Noto_Kufi_Arabic({
  variable: "--font-noto-kufi",
  subsets: ["arabic"],
  weight: "700",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  // 1. Base URL: Essential for OG images to work via relative paths
  metadataBase: new URL("https://portfolio-v2-cyan-nine.vercel.app/"), // REPLACE with your actual domain

  // 2. Title Template: "Page Name | Ali Mohsin"
  title: {
    default: "Ali Mohsin | System Architect & Full Stack Engineer",
    template: "%s | Ali Mohsin",
  },

  // 3. Default Description
  description:
    "Full Stack Engineer combining 6+ years of clinical dental precision with robust software architecture. Building production-ready systems with Next.js, .NET, and Cloud infrastructure.",

  // 4. Keywords for SEO
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

  // 5. Open Graph (Facebook, LinkedIn, Discord)
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-v2-cyan-nine.vercel.app/",
    siteName: "Ali Mohsin",
    images: [
      {
        url: "/images/og-default.jpg", // Create a default brand card in public/images
        width: 1200,
        height: 630,
        alt: "Ali Mohsin - System Architect",
      },
    ],
  },

  // 6. Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Ali Mohsin | System Architect",
    creator: "@alimohsin", // Replace with your handle
    images: ["/images/og-default.jpg"],
  },

  // 7. Robots (Ensure Google indexes you)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${noto_kufi.variable} ${playfair_display.variable} ${bixie.variable} ${tido.variable} ${alexandria.variable} antialiased`}
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
