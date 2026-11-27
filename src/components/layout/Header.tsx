import { profile } from "@/content/profile";
import { sectionIds } from "@/content/sections";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ThemeToggle } from "./ThemeToggle";

type HeaderProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Header({ locale, dict }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur">
      <Container className="flex flex-col gap-2 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="font-semibold tracking-tight">
            {profile.name[locale]}
          </a>
          <div className="flex items-center gap-2">
            <LanguageSwitcher current={locale} label={dict.header.language} />
            <ThemeToggle label={dict.header.theme} />
          </div>
        </div>
        <nav aria-label={dict.header.nav} className="-mx-2 overflow-x-auto">
          <ul className="flex gap-1 text-sm whitespace-nowrap text-muted">
            {sectionIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="block rounded-md px-2 py-1.5 transition-colors hover:text-fg">
                  {dict.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
