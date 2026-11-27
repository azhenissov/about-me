import { learningGoals } from "@/content/learning";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "@/components/ui/Section";

type LearningProps = {
  locale: Locale;
  dict: Dictionary["learning"];
};

export function Learning({ locale, dict }: LearningProps) {
  return (
    <Section id="learning" title={dict.title}>
      <p className="mb-8 max-w-xl text-lg text-muted">{dict.intro}</p>
      <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {learningGoals.map((goal) => (
          <li key={goal.title.en} className="border-l-2 border-accent pl-4">
            <h3 className="font-semibold">{goal.title[locale]}</h3>
            <p className="mt-1 text-muted">{goal.description[locale]}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
