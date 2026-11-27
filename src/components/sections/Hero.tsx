import { profile } from "@/content/profile";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Container } from "@/components/ui/Container";

type HeroProps = {
  locale: Locale;
  dict: Dictionary["hero"];
};

const buttonBase =
  "inline-flex items-center rounded-full px-5 py-2.5 font-medium transition-colors";

export function Hero({ locale, dict }: HeroProps) {
  return (
    <section id="top" aria-labelledby="hero-title" className="py-16 sm:py-24">
      <Container>
        <p className="font-medium text-accent">{profile.role[locale]}</p>
        <h1 id="hero-title" className="mt-3 text-4xl font-bold tracking-tight text-balance sm:text-6xl">
          {profile.name[locale]}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-pretty text-muted">
          {profile.tagline[locale]}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className={`${buttonBase} bg-accent text-accent-fg hover:opacity-90`}>
            {dict.ctaProjects}
          </a>
          <a href="#contact" className={`${buttonBase} border border-border hover:bg-accent-soft`}>
            {dict.ctaContact}
          </a>
        </div>
      </Container>
    </section>
  );
}
