import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { getSiteUrl, languageAlternates } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const absolute = (path: string) => new URL(path, siteUrl).toString();

  const languages = Object.fromEntries(
    Object.entries(languageAlternates).map(([lang, path]) => [lang, absolute(path)]),
  );

  return locales.map((locale) => ({
    url: absolute(`/${locale}`),
    changeFrequency: "monthly",
    priority: 1,
    alternates: { languages },
  }));
}
