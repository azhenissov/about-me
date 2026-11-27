import type { Project } from "./types";

// TODO: replace placeholders with real data.
export const projects: Project[] = [
  {
    id: "this-site",
    title: {
      kk: "Осы сайт",
      ru: "Этот сайт",
      en: "This site",
    },
    description: {
      kk: "Next.js, TypeScript және Tailwind CSS негізіндегі үш тілді визитка-сайт.",
      ru: "Трёхъязычный сайт-визитка на Next.js, TypeScript и Tailwind CSS.",
      en: "A trilingual personal site built with Next.js, TypeScript and Tailwind CSS.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    repoUrl: "https://github.com/your-username/about-me",
  },
  {
    id: "project-2",
    title: {
      kk: "Жоба 2",
      ru: "Проект 2",
      en: "Project 2",
    },
    description: {
      kk: "Жобаның қысқаша сипаттамасы: қандай мәселені шешеді және сіздің рөліңіз.",
      ru: "Краткое описание проекта: какую задачу решает и ваша роль.",
      en: "Short project description: what problem it solves and your role.",
    },
    stack: ["Python", "FastAPI"],
    repoUrl: "https://github.com/your-username/project-2",
    demoUrl: "https://example.com",
  },
  {
    id: "project-3",
    title: {
      kk: "Жоба 3",
      ru: "Проект 3",
      en: "Project 3",
    },
    description: {
      kk: "Жобаның қысқаша сипаттамасы: қандай мәселені шешеді және сіздің рөліңіз.",
      ru: "Краткое описание проекта: какую задачу решает и ваша роль.",
      en: "Short project description: what problem it solves and your role.",
    },
    stack: ["React", "Firebase"],
  },
];
