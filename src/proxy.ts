import { NextResponse, type NextRequest } from "next/server";
import { isLocale, localeCookie } from "@/i18n/config";
import { negotiateLocale } from "@/i18n/negotiate";

function pathHasLocale(pathname: string): boolean {
  const firstSegment = pathname.split("/")[1] ?? "";
  return isLocale(firstSegment);
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (pathHasLocale(pathname)) return;

  const saved = request.cookies.get(localeCookie)?.value;
  const locale =
    saved && isLocale(saved)
      ? saved
      : negotiateLocale(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  const response = NextResponse.redirect(url);
  response.headers.set("Vary", "Accept-Language, Cookie");
  return response;
}

export const config = {
  // Skip Next internals and any path with a file extension (favicon, robots.txt, sitemap.xml...).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
