"use client";

import type { MouseEvent } from "react";
import { localeCookie, localeNames, locales, type Locale } from "@/i18n/config";

type LanguageSwitcherProps = {
  current: Locale;
  label: string;
};

function rememberChoice(locale: Locale, event: MouseEvent<HTMLAnchorElement>) {
  document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  // Keep the reader on the same section after switching language.
  event.currentTarget.href = `/${locale}${window.location.hash}`;
}

export function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  return (
    <nav aria-label={label}>
      <ul className="flex rounded-full border border-border p-0.5 text-sm font-medium">
        {locales.map((locale) => (
          <li key={locale}>
            <a
              href={`/${locale}`}
              hrefLang={locale}
              lang={locale}
              title={localeNames[locale]}
              aria-current={locale === current ? "true" : undefined}
              onClick={(event) => rememberChoice(locale, event)}
              className="block rounded-full px-2.5 py-1.5 uppercase text-muted transition-colors hover:text-fg aria-[current=true]:bg-accent aria-[current=true]:text-accent-fg"
            >
              <span aria-hidden="true">{locale}</span>
              <span className="sr-only">{localeNames[locale]}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
