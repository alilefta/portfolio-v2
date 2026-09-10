"use server";

import { cookies, headers } from "next/headers";
import { Locale, defaultLocale, locales } from "@/i18n/config";

// In this example the locale is read from a cookie. You could alternatively
// also read it from a database, backend service, or any other source.
const COOKIE_NAME = "NEXT_LOCALE";

export async function getUserLocale() {
  const pathLocale = (await headers()).get("x-portfolio-locale");
  if (pathLocale && locales.includes(pathLocale as Locale)) return pathLocale as Locale;
  const cookieLocale = (await cookies()).get(COOKIE_NAME)?.value;
  return cookieLocale && locales.includes(cookieLocale as Locale)
    ? (cookieLocale as Locale)
    : defaultLocale;
}

export async function setUserLocale(locale: Locale) {
  (await cookies()).set(COOKIE_NAME, locale);
}
