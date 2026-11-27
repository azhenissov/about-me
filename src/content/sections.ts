/** Page sections in display order; ids double as URL anchors and nav keys. */
export const sectionIds = [
  "about",
  "education",
  "projects",
  "learning",
  "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
