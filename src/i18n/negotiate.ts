import { defaultLocale, isLocale, type Locale } from "./config";

type LanguagePreference = { language: string; quality: number };

function parsePart(part: string): LanguagePreference {
  const [tag = "", ...params] = part.trim().split(";");
  const qParam = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
  const quality = qParam ? Number(qParam.slice(2)) : 1;
  const language = tag.toLowerCase().split("-")[0] ?? "";
  return { language, quality: Number.isNaN(quality) ? 0 : quality };
}

/**
 * Picks the best supported locale from an Accept-Language header,
 * e.g. "ru-RU,ru;q=0.9,en;q=0.8" -> "ru". Falls back to the default locale.
 */
export function negotiateLocale(header: string | null): Locale {
  if (!header) return defaultLocale;

  const match = header
    .split(",")
    .map(parsePart)
    .filter((p) => p.quality > 0)
    .sort((a, b) => b.quality - a.quality)
    .find((p) => isLocale(p.language));

  return match && isLocale(match.language) ? match.language : defaultLocale;
}
