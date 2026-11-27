import { about } from "@/content/about";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "@/components/ui/Section";
import { Tag } from "@/components/ui/Tag";

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
      <h3 className="mt-10 mb-4 font-semibold">{dict.interests}</h3>
      <ul className="flex flex-wrap gap-2">
        {about.interests.map((interest) => (
          <li key={interest.en}>
            <Tag>{interest[locale]}</Tag>
          </li>
        ))}
      </ul>
    </Section>
  );
}
