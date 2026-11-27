@AGENTS.md

# CLAUDE.md

Одностраничный сайт-визитка (интересы, обучение, проекты, чему хочу научиться) на трёх языках.
Тестовое задание на стажировку AI-разработчика: важны чистота кода, i18n, доступность, SEO и минимум зависимостей.

## Стек

- **Next.js** (App Router, Server Components по умолчанию) + **TypeScript** (strict)
- **Tailwind CSS v4** (конфиг в CSS через `@theme`, тёмная тема через `@custom-variant dark`)
- Деплой на **Vercel**
- Без i18n-библиотек, без `next-themes`, без UI-китов. Шрифты через `next/font`, OG-картинки через `next/og` (встроены в Next).

## Языки и маршруты

- Локали: `kk`, `ru`, `en`. Маршруты: `/kk`, `/ru`, `/en`.
- `/` → редирект на язык из `Accept-Language` (в `src/proxy.ts`; в Next < 16 это `middleware.ts`). Если совпадений нет → `en`.
- Все страницы статически генерируются через `generateStaticParams` для каждой локали.
- Переключатель языка в шапке сохраняет текущий якорь секции.

## Структура папок

```
src/
  app/
    [locale]/
      layout.tsx            # <html lang>, шрифты, скрипт темы, Header/Footer
      page.tsx              # собирает секции
      opengraph-image.tsx   # OG-картинка для каждого языка
    sitemap.ts
    robots.ts
    globals.css             # Tailwind + дизайн-токены (светлая/тёмная тема)
  proxy.ts                  # определение языка по Accept-Language
  i18n/
    config.ts               # locales, defaultLocale, isLocale(), type Locale
    get-dictionary.ts       # Record<Locale, Dictionary> — TS ловит пропущенные ключи
    dictionaries/
      en.json               # эталон: type Dictionary = typeof en
      ru.json
      kk.json
  content/
    profile.ts              # имя, контакты, ссылки (не переводимое)
    projects.ts             # проекты: title/description как LocalizedString
    education.ts
    types.ts                # LocalizedString = Record<Locale, string>, Project и т.п.
  components/
    layout/                 # Header, Footer, SkipLink, LanguageSwitcher, ThemeToggle
    sections/               # Hero, About, Education, Projects, Learning, Contact
    ui/                     # мелкие переиспользуемые: Section, Tag, ExternalLink
  lib/
    seo.ts                  # хелперы для metadata, alternates/hreflang
```

## Правила кода

- **Строгий TypeScript**: `strict: true`, `noUncheckedIndexedAccess: true`. **Никаких `any`**, `as`-кастов без причины и `@ts-ignore`.
- **Компоненты маленькие**: одна ответственность, ориентир ≤ ~80 строк. Если больше — разбить.
- Server Components по умолчанию. `"use client"` только там, где нужен браузер (ThemeToggle, LanguageSwitcher).
- **Никакого текста в JSX.** Все строки UI — в словарях, весь контент (проекты, обучение, ссылки) — в `src/content/`. Компоненты получают данные через props.
- **Каждый текст — во всех 3 словарях** (`kk`, `ru`, `en`). Новый ключ добавляется сразу в три файла. Переводимые поля в `content/` типизированы как `LocalizedString`, поэтому пропуск языка — ошибка компиляции.
- Именование: компоненты `PascalCase.tsx`, остальное `kebab-case.ts`. Именованные экспорты (кроме файлов, где Next требует default).
- Новые зависимости — только с явным обоснованием. Сначала проверить, нельзя ли обойтись встроенным в Next/браузер.

## Доступность и качество

- Семантика: `header`, `nav`, `main`, `section` с `aria-labelledby`, `footer`; один `h1`, иерархия заголовков без пропусков.
- Skip-link «к содержимому», видимый `:focus-visible`, всё доступно с клавиатуры.
- Все `img` с осмысленным `alt` (декоративные — `alt=""`). Контраст ≥ WCAG AA в обеих темах.
- Уважать `prefers-reduced-motion` и `prefers-color-scheme`; тема без мигания (инлайн-скрипт в `<head>`).
- Mobile-first: базовые стили для мобильных, `sm:/md:/lg:` — расширения.
- Цель Lighthouse: 95+ по всем четырём категориям.

## SEO

- `generateMetadata` в `[locale]/layout.tsx`: title/description из словаря.
- `alternates.languages` (hreflang) для `kk`, `ru`, `en` + `x-default`, canonical для каждой локали.
- Open Graph + Twitter card, `og:locale` для каждого языка, OG-картинка через `opengraph-image.tsx`.
- `sitemap.ts` с альтернативами языков, `robots.ts`.

## Команды

```bash
npm run dev      # dev-сервер
npm run build    # production-сборка (заодно проверка типов)
npm run lint     # ESLint
npm run start    # запуск собранного приложения
```

## Перед коммитом

Обязательно проходят **`npm run build`** и **`npm run lint`** без ошибок. Если что-то падает — чинить, а не коммитить.
Один логический шаг = один коммит, сообщение в стиле Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).
