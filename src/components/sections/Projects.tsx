import { projects } from "@/content/projects";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { Section } from "@/components/ui/Section";
import { ProjectCard } from "./ProjectCard";

type ProjectsProps = {
  locale: Locale;
  dict: Dictionary["projects"];
  newTabHint: string;
};

export function Projects({ locale, dict, newTabHint }: ProjectsProps) {
  return (
    <Section id="projects" title={dict.title}>
      <ul className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <li key={project.id}>
            <ProjectCard project={project} locale={locale} dict={dict} newTabHint={newTabHint} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
