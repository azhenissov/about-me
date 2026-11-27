import type { EducationItem } from "./types";

export const education: EducationItem[] = [
  {
    institution: {
      kk: "Astana IT University",
      ru: "Astana IT University",
      en: "Astana IT University",
    },
    program: {
      kk: "Бакалавриат, Software Engineering",
      ru: "Бакалавриат, Software Engineering",
      en: "Bachelor's degree, Software Engineering",
    },
    period: "2024 — 2027",
    highlights: [
      {
        kk: "Негізгі курстар: алгоритмдер және деректер құрылымдары, ДҚБЖ (PostgreSQL), веб-әзірлеу, операциялық жүйелер",
        ru: "Профильные курсы: алгоритмы и структуры данных, СУБД (PostgreSQL), веб-разработка, операционные системы",
        en: "Relevant coursework: algorithms and data structures, databases (PostgreSQL), web development, operating systems",
      },
    ],
  },
  {
    institution: {
      kk: "ҚР Қаржылық мониторинг агенттігі",
      ru: "Агентство по финансовому мониторингу РК",
      en: "Financial Monitoring Agency of the Republic of Kazakhstan",
    },
    program: {
      kk: "Тағылымдама · Software Engineer Intern",
      ru: "Стажировка · Software Engineer Intern",
      en: "Internship · Software Engineer Intern",
    },
    period: "03.2026 — 09.2026",
    highlights: [
      {
        kk: "Құжат айналымы платформасы: FastAPI, PostgreSQL, React + TypeScript, Redis, Docker",
        ru: "Платформа документооборота: FastAPI, PostgreSQL, React + TypeScript, Redis, Docker",
        en: "Document management platform: FastAPI, PostgreSQL, React + TypeScript, Redis, Docker",
      },
      {
        kk: "8 пайдаланушы рөлі және 12+ құжат мәртебесіне арналған күйлер машинасы",
        ru: "8 пользовательских ролей и конечный автомат на 12+ статусов документов",
        en: "8 user roles and a finite state machine for 12+ document statuses",
      },
    ],
  },
];
