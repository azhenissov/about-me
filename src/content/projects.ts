import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "document-platform",
    title: {
      kk: "Құжат айналымы платформасы",
      ru: "Платформа документооборота",
      en: "Document management platform",
    },
    description: {
      kk: "ҚР ҚМА-дағы тағылымдама жобасы. Құжаттар мен тредтер, рөлдік қолжетімділік (RBAC) және мәртебелер, Excel импорты және ZIP-экспорт. Бэкенд, дерекқор, интерфейс, тесттер және Docker — менің жұмысым.",
      ru: "Проект стажировки в АФМ РК. Документы и треды, ролевой доступ (RBAC) и статусы, импорт Excel и ZIP-выгрузка. Делал бэкенд, БД, интерфейс, тесты и Docker.",
      en: "Internship project at the Financial Monitoring Agency. Documents and threads, role-based access (RBAC) and statuses, Excel import and ZIP export. I built the backend, database, UI, tests and Docker setup.",
    },
    stack: ["FastAPI", "PostgreSQL", "React", "TypeScript", "Redis", "Docker"],
  },
  {
    id: "order-payment-microservices",
    title: {
      kk: "Order-Payment Microservices",
      ru: "Order-Payment Microservices",
      en: "Order-Payment Microservices",
    },
    description: {
      kk: "Go тіліндегі тапсырыс және төлем сервистері: gRPC арқылы байланыс, мәртебелерді нақты уақытта стримингтеу, оқшауланған дерекқорлар және CI/CD.",
      ru: "Сервисы заказов и оплат на Go: общение по gRPC, стриминг статусов в реальном времени, изолированные базы данных и CI/CD.",
      en: "Order and payment services in Go: gRPC communication, real-time status streaming, isolated databases and CI/CD.",
    },
    stack: ["Go", "gRPC", "Protobuf", "PostgreSQL", "Docker"],
    repoUrl: "https://github.com/azhenissov/order-payment-microservices",
  },
  {
    id: "this-site",
    title: {
      kk: "Осы сайт",
      ru: "Этот сайт",
      en: "This site",
    },
    description: {
      kk: "Үш тілді визитка-сайт: өз i18n-і типтелген сөздіктермен, жарық/қараңғы тақырып, SEO және Lighthouse 95+.",
      ru: "Трёхъязычный сайт-визитка: свой i18n на типизированных словарях, светлая/тёмная тема, SEO и Lighthouse 95+.",
      en: "A trilingual personal site: custom i18n with typed dictionaries, light/dark theme, SEO and Lighthouse 95+.",
    },
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    repoUrl: "https://github.com/azhenissov/about-me",
  },
];
