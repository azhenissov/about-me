import type { Locale } from "@/i18n/config";

/**
 * Absolute site origin for canonical URLs, hreflang and Open Graph.
 * Set NEXT_PUBLIC_SITE_URL in production; Vercel's production domain is the fallback.
 */
export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return new URL(explicit);

  const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelDomain) return new URL(`https://${vercelDomain}`);

  return new URL("http://localhost:3000");
}

/**
 * hreflang map. Typed as Record<Locale, ...>, so adding a locale without
 * a URL here fails to compile. x-default points at "/", where the proxy picks a language.
 */
export const languageAlternates: Record<Locale | "x-default", string> = {
  kk: "/kk",
  ru: "/ru",
  en: "/en",
  "x-default": "/",
};
