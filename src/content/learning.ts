import type { LearningGoal } from "./types";

export const learningGoals: LearningGoal[] = [
  {
    title: { kk: "Firebase", ru: "Firebase", en: "Firebase" },
    description: {
      kk: "Аутентификация, Firestore және серверлік функциялар.",
      ru: "Аутентификация, Firestore и серверные функции.",
      en: "Authentication, Firestore and server functions.",
    },
  },
  {
    title: { kk: "Stripe", ru: "Stripe", en: "Stripe" },
    description: {
      kk: "Төлемдер, жазылымдар және вебхуктар.",
      ru: "Платежи, подписки и вебхуки.",
      en: "Payments, subscriptions and webhooks.",
    },
  },
  {
    title: { kk: "Trigger.dev", ru: "Trigger.dev", en: "Trigger.dev" },
    description: {
      kk: "Фондық тапсырмалар мен ұзақ жұмыс істейтін AI-процестер.",
      ru: "Фоновые задачи и долгие AI-процессы.",
      en: "Background jobs and long-running AI workflows.",
    },
  },
  {
    title: {
      kk: "Өнімдердегі LLM",
      ru: "LLM в продуктах",
      en: "LLMs in production",
    },
    description: {
      kk: "Агенттер, RAG және сапаны бағалау.",
      ru: "Агенты, RAG и оценка качества.",
      en: "Agents, RAG and quality evaluation.",
    },
  },
];
