import { education } from "@/content/education";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "@/components/ui/Section";

type EducationProps = {
  locale: Locale;
  dict: Dictionary["education"];
};

export function Education({ locale, dict }: EducationProps) {
  return (
    <Section id="education" title={dict.title}>
      <ol className="space-y-8 border-l-2 border-border pl-6">
        {education.map((item) => (
          <li key={item.institution.en} className="relative">
            <span aria-hidden="true" className="absolute top-1.5 -left-[31px] size-3 rounded-full bg-accent" />
            <p className="text-sm text-muted">{item.period}</p>
            <h3 className="mt-1 text-lg font-semibold">{item.program[locale]}</h3>
            <p className="text-muted">{item.institution[locale]}</p>
            {item.highlights.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {item.highlights.map((highlight) => (
                  <li key={highlight.en}>{highlight[locale]}</li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
