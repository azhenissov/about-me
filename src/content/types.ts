import type { Locale } from "@/i18n/config";

/** A text that must exist in every supported language. */
export type LocalizedString = Record<Locale, string>;

export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: LocalizedString;
  role: LocalizedString;
  email: string;
  links: SocialLink[];
};
