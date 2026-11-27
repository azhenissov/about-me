import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeScript } from "@/components/layout/ThemeScript";
import { defaultLocale, locales } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";
import "./globals.css";

// Unmatched URLs have no locale, so this page shows every language.
const inter = Inter({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: locales.map((locale) => getDictionary(locale).notFound.title).join(" · "),
};

export default function GlobalNotFound() {
  return (
    <html lang={defaultLocale} className={inter.variable} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="grid min-h-dvh place-items-center px-5 font-sans antialiased">
        <main className="space-y-8 text-center">
          <h1 className="text-7xl font-bold text-accent">404</h1>
          <ul className="space-y-5">
            {locales.map((locale) => {
              const dict = getDictionary(locale).notFound;
              return (
                <li key={locale} lang={locale}>
                  <p className="text-xl font-semibold">{dict.title}</p>
                  <a href={`/${locale}`} hrefLang={locale} className="text-accent underline underline-offset-4">
                    {dict.back}
                  </a>
                </li>
              );
            })}
          </ul>
        </main>
      </body>
    </html>
  );
}
