import { about } from "@/content/about";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "@/components/ui/Section";

type AboutProps = {
  locale: Locale;
  dict: Dictionary["about"];
};

export function About({ locale, dict }: AboutProps) {
  return (
    <Section id="about" title={dict.title}>
      <div className="space-y-4 text-lg text-pretty">
        {about.bio.map((paragraph) => (
          <p key={paragraph.en}>{paragraph[locale]}</p>
        ))}
      </div>
    </Section>
  );
}
