import { profile } from "@/content/profile";
import type { Dictionary } from "@/i18n/get-dictionary";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { Section } from "@/components/ui/Section";

type ContactProps = {
  dict: Dictionary["contact"];
  newTabHint: string;
};

const pillClass =
  "inline-block rounded-full border border-border px-4 py-2 font-medium transition-colors hover:bg-accent-soft";

export function Contact({ dict, newTabHint }: ContactProps) {
  return (
    <Section id="contact" title={dict.title}>
      <p className="max-w-xl text-lg text-muted">{dict.intro}</p>
      <a
        href={`mailto:${profile.email}`}
        className="mt-6 inline-block text-xl font-semibold text-accent underline-offset-4 hover:underline sm:text-2xl"
      >
        <span className="sr-only">{dict.email}: </span>
        {profile.email}
      </a>
      <ul className="mt-8 flex flex-wrap gap-3">
        {profile.links.map((link) => (
          <li key={link.href}>
            <ExternalLink href={link.href} newTabHint={newTabHint} className={pillClass}>
              {link.label}
            </ExternalLink>
          </li>
        ))}
      </ul>
    </Section>
  );
}
