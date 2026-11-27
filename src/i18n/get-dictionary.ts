import type { Locale } from "./config";
import en from "./dictionaries/en.json";
import kk from "./dictionaries/kk.json";
import ru from "./dictionaries/ru.json";

/** English is the reference dictionary: every other language must match its shape. */
export type Dictionary = typeof en;

// If ru.json or kk.json is missing a key, this line fails to type-check.
const dictionaries: Record<Locale, Dictionary> = { en, ru, kk };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
