import type { Profile } from "./types";

// TODO: replace placeholders with real data.
export const profile: Profile = {
  name: {
    kk: "Сіздің атыңыз",
    ru: "Ваше Имя",
    en: "Your Name",
  },
  role: {
    kk: "AI-әзірлеуші · студент",
    ru: "AI-разработчик · студент",
    en: "AI developer · student",
  },
  tagline: {
    kk: "Мұнда өзіңіз туралы бір-екі сөйлем: не істейсіз және не қызықтырады.",
    ru: "Здесь одно-два предложения о себе: чем занимаетесь и что вам интересно.",
    en: "One or two sentences about yourself: what you do and what excites you.",
  },
  email: "you@example.com",
  links: [
    { label: "GitHub", href: "https://github.com/your-username" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-username" },
    { label: "Telegram", href: "https://t.me/your-username" },
  ],
};
