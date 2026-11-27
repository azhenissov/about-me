import type { EducationItem } from "./types";

// TODO: replace placeholders with real data.
export const education: EducationItem[] = [
  {
    institution: {
      kk: "Университет атауы",
      ru: "Название университета",
      en: "University name",
    },
    program: {
      kk: "Мамандық, бакалавриат",
      ru: "Специальность, бакалавриат",
      en: "Program, Bachelor's degree",
    },
    period: "2023 — 2027",
    highlights: [
      {
        kk: "Маңызды курс немесе жетістік",
        ru: "Важный курс или достижение",
        en: "Notable course or achievement",
      },
    ],
  },
  {
    institution: {
      kk: "Онлайн-курс немесе мектеп",
      ru: "Онлайн-курс или школа",
      en: "Online course or school",
    },
    program: {
      kk: "Курс атауы",
      ru: "Название курса",
      en: "Course title",
    },
    period: "2024",
    highlights: [],
  },
];
