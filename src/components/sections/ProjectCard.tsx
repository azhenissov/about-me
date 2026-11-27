import type { Project } from "@/content/types";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";
import { ExternalLink } from "@/components/ui/ExternalLink";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  dict: Dictionary["projects"];
  newTabHint: string;
};

const linkClass = "font-medium text-accent underline-offset-4 hover:underline";

export function ProjectCard({ project, locale, dict, newTabHint }: ProjectCardProps) {
  const title = project.title[locale];

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 flex-1 text-muted">{project.description[locale]}</p>
      <ul aria-label={dict.stack} className="mt-4 flex flex-wrap gap-x-3 gap-y-1 font-mono text-xs text-muted">
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {(project.repoUrl ?? project.demoUrl) && (
        <div className="mt-5 flex gap-5 text-sm">
          {project.repoUrl && (
            <ExternalLink href={project.repoUrl} newTabHint={newTabHint} className={linkClass}>
              {dict.repo}
            </ExternalLink>
          )}
          {project.demoUrl && (
            <ExternalLink href={project.demoUrl} newTabHint={newTabHint} className={linkClass}>
              {dict.demo}
            </ExternalLink>
          )}
        </div>
      )}
    </article>
  );
}
