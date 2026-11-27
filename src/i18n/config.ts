export const locales = ["kk", "ru", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Cookie that stores the language chosen explicitly in the switcher. */
export const localeCookie = "NEXT_LOCALE";

/** Each language's name written in that language, for the switcher. */
export const localeNames: Record<Locale, string> = {
  kk: "Қазақша",
  ru: "Русский",
  en: "English",
};

/** Open Graph locale codes (language_TERRITORY). */
export const ogLocales: Record<Locale, string> = {
  kk: "kk_KZ",
  ru: "ru_RU",
  en: "en_US",
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
