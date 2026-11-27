import type { Locale } from "@/i18n/config";

/** A text that must exist in every supported language. */
export type LocalizedString = Record<Locale, string>;

export type SocialLink = {
  label: string;
  href: string;
};

export type Profile = {
  name: LocalizedString;
  role: LocalizedString;
  tagline: LocalizedString;
  email: string;
  links: SocialLink[];
};

export type About = {
  bio: LocalizedString[];
};

export type EducationItem = {
  institution: LocalizedString;
  program: LocalizedString;
  /** Free-form period, e.g. "2023 — 2027". */
  period: string;
  highlights: LocalizedString[];
};

export type Project = {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  stack: string[];
  repoUrl?: string;
  demoUrl?: string;
};

export type LearningGoal = {
  title: LocalizedString;
  description: LocalizedString;
};
