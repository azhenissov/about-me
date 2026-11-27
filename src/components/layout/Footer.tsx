import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";

type FooterProps = {
  locale: Locale;
  dict: Dictionary;
};

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="border-t border-border py-8 text-sm text-muted">
      <Container className="flex flex-col gap-1 sm:flex-row sm:justify-between">
        <p>© {profile.name[locale]}</p>
        <p>{dict.footer.builtWith}</p>
      </Container>
    </footer>
  );
}
