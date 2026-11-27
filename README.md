# About me

Одностраничный сайт-визитка на трёх языках: казахском, русском и английском.

**Демо:** https://about-me-one-weld.vercel.app (`/kk` · `/ru` · `/en`)

**Стек:** Next.js 16 (App Router) · TypeScript (strict) · Tailwind CSS 4 · Vercel. Runtime-зависимости только `next`, `react` и `react-dom`.

## Что есть

- **3 языка** с маршрутами `/kk`, `/ru`, `/en`. При заходе на `/` язык выбирается так: сохранённый выбор → `Accept-Language` → `en`.
- **Переключатель языка** в шапке. Он сохраняет текущую секцию (`/ru#projects` → `/en#projects`) и запоминает выбор в cookie.
- **Светлая и тёмная тема.** По умолчанию берётся системная, выбор сохраняется. Тема применяется до первой отрисовки, поэтому страница не мигает.
- **Доступность:** семантические `header`/`nav`/`main`/`section`, ссылка «к содержимому», видимый фокус, контраст WCAG AA в обеих темах, `prefers-reduced-motion`, подсказки «откроется в новой вкладке» для скринридеров.
- **SEO:** `title`/`description` для каждого языка, `canonical`, `hreflang` (+ `x-default`), Open Graph и Twitter Card, OG-картинка для каждого языка, `sitemap.xml` с языковыми альтернативами, `robots.txt`, JSON-LD `Person`.
- **Весь контент в данных:** в JSX нет ни одной строки текста.
- **Статика:** все языковые версии и OG-картинки собираются при сборке.

Lighthouse на продакшене (Vercel):

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Mobile (`/ru`) | 99 | 100 | 100 | 100 |
| Desktop (`/en`) | 96 | 100 | 100 | 100 |

## Как устроен i18n

Без библиотек, около 100 строк кода вместе с proxy.

- `src/i18n/config.ts`: список локалей, `type Locale`, `isLocale()`.
- `src/i18n/dictionaries/*.json`: строки интерфейса. Эталон — `en.json`, из него выводится `type Dictionary = typeof en`.
- `src/i18n/get-dictionary.ts`: `const dictionaries: Record<Locale, Dictionary> = { en, ru, kk }`. Если в `ru.json` или `kk.json` не хватает ключа, `tsc` и `next build` падают с ошибкой и показывают, какого ключа нет.
- `src/content/*.ts`: личный контент (био, проекты, обучение). Каждое переводимое поле имеет тип `LocalizedString = Record<Locale, string>`, поэтому пропущенный язык тоже ошибка компиляции.
- `src/i18n/negotiate.ts`: разбор `Accept-Language` с учётом `q`-весов, без `negotiator` и `@formatjs`.
- `src/proxy.ts`: редирект путей без локали (`proxy` — новое имя `middleware` в Next 16).

Чтобы добавить язык: добавить код в `locales`, создать JSON-словарь и пройти по ошибкам TypeScript. Они укажут каждое место, где нужен перевод.

## Структура

```
src/
  app/[locale]/        layout (metadata, тема, шапка), page (секции), opengraph-image
  app/                 global-not-found, sitemap, robots, icon, globals.css
  proxy.ts             выбор языка
  i18n/                конфиг, словари, разбор Accept-Language
  content/             данные: profile, about, education, projects, learning
  components/          layout/ · sections/ · seo/ · ui/
  lib/seo.ts           URL сайта, hreflang
```

## Решения

- **Свой i18n, а не `next-intl`.** Для трёх языков на одной странице хватает типизированных словарей. Server Components отдают готовый HTML, и словари не попадают в клиентский бандл.
- **Тема без `next-themes`.** Inline-скрипт в `<head>` ставит `data-theme` до отрисовки. Иконки переключателя управляются через CSS, поэтому нет расхождения при гидратации.
- **Свой шрифт для OG-картинок.** Стандартный шрифт `next/og` не содержит кириллицы, поэтому в репозиторий положен Inter (OFL), который покрывает и казахские буквы (ә, ғ, қ, ң, ө, ұ, ү, һ, і).
- **Ссылки переключателя языка — обычные `<a>`.** Каждый язык — отдельный root layout с собственным `<html lang>`, так что полная навигация здесь честнее, и всё работает без JS.

## Как я работал с Claude Code

Собирал код с Claude Code быстро, но не доверял ему вслепую:

- **Проверял руками и инструментами.** Поймал слетевший слэш в регулярке прокси (`.*..*` → `.*\..*`) через curl и manifest, а ложную «поломку» мобилки на 504px проверил на 375px в iframe.
- **Чинил мелочи и не терял контекст.** Подкинул шрифт Inter в `next/og` под кириллицу, убрал запрещённое по CLAUDE.md `as`-приведение в `seo.ts` и выловил мелкие косяки текстов и переводов на ревью.
- **Держал решения за собой.** Сам решал вопросы по формулировкам, деплою и GitHub и делал финальные ручные проверки — отмечал готовым только то, что реально проверил.

## Запуск

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + build — то же, что перед каждым коммитом
```

## Деплой на Vercel

1. Запушить репозиторий на GitHub и импортировать его в Vercel. Настройки по умолчанию подходят.
2. (Необязательно) Задать `NEXT_PUBLIC_SITE_URL=https://ваш-домен`. Без этой переменной для canonical, hreflang и OG используется production-домен Vercel (`VERCEL_PROJECT_PRODUCTION_URL`).

## Как обновить контент

Личные данные лежат в `src/content/*.ts`, строки интерфейса и `meta.title` — в `src/i18n/dictionaries/*.json`. Каждый новый текст нужно заполнить на всех трёх языках, иначе сборка не пройдёт.
