import { NextResponse, type NextRequest } from "next/server";
import { locales } from "@/i18n/config";

export function proxy(request: NextRequest) {
  const segment = request.nextUrl.pathname.split("/")[1];
  if (!locales.includes(segment as (typeof locales)[number])) return NextResponse.next();

  const headers = new Headers(request.headers);
  headers.set("x-portfolio-locale", segment);
  return NextResponse.next({ request: { headers } });
}

export const config = { matcher: ["/en/:path*", "/ar/:path*"] };
