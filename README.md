# Azen — Portfolio (Next.js + TypeScript)

Портфоліо-сайт розробника на Next.js (App Router) з TypeScript, двомовністю (UA/EN), формою заявки з реальною відправкою листів, SEO та a11y.

## Запуск

```bash
npm install
npm run dev
```

Відкрий [http://localhost:3000](http://localhost:3000).

## Налаштування форми заявки (обов'язково для продакшену)

Форма "Замовити проєкт" відправляє лист напряму з браузера через [EmailJS](https://www.emailjs.com) — окремого бекенду не треба, тому працює на GitHub Pages (там нема серверного коду, і звичайний API route типу `/api/contact` через SMTP там просто не запуститься). Без налаштування форма **автоматично** падає назад на `mailto:` — тобто працює одразу з коробки, але щоб листи приходили напряму без участі поштового клієнта відвідувача:

1. Зареєструйся на [emailjs.com](https://www.emailjs.com) (є безкоштовний план)
2. Додай Email Service (напр. Gmail) — скопіюй його Service ID
3. Створи Email Template зі змінними: `from_name`, `reply_to`, `project_type`, `budget`, `message`, `lang` — скопіюй Template ID
4. Account → General → скопіюй Public Key
5. Account → Security → додай свій продакшн-домен (напр. `azen-dev.github.io`) у дозволений список, щоб публічний ключ не могли використати з іншого сайту
6. Скопіюй `.env.example` → `.env.local` і встав свої `NEXT_PUBLIC_EMAILJS_*` значення
7. Перезапусти `npm run dev`

Це `NEXT_PUBLIC_` змінні — вони "запікаються" у статичний білд і видимі в браузері. Для EmailJS так і задумано: публічний ключ призначений бути публічним, а захищає його саме allowlist домену з кроку 5.

**Важливо для GitHub Actions**: якщо деплой автоматичний (workflow у `.github/workflows`), додай ці ж три значення як Repository Secrets (Settings → Secrets and variables → Actions) і прокинь їх у крок білда через `env:`, інакше на проді форма піде у mailto-фолбек.

## Структура

```
app/
  layout.tsx           — layout, next/font, повні OG/Twitter метадані
  page.tsx             — головна сторінка, збирає секції
  globals.css          — усі стилі проєкту (CSS-змінні, анімації)
  icon.png             — favicon / app icon (згенеровано з лого)
  apple-icon.png       — іконка для iOS
  opengraph-image.png  — картинка прев'ю при шерингу лінка (Telegram/LinkedIn/X)
  robots.ts            — robots.txt (Next.js metadata route)
  sitemap.ts           — sitemap.xml (Next.js metadata route)
  loading.tsx          — екран завантаження
  not-found.tsx        — кастомна 404-сторінка
components/
  LangContext.tsx — i18n: словник перекладів UA/EN + React Context
  Nav.tsx         — навігація, перемикач мов, мобільне гамбургер-меню
  Hero.tsx        — головний екран: 3D-куби, лого-текст, бейджі технологій
  Expertise.tsx   — секція "Мої послуги"
  Work.tsx        — секція "Проєкти" з фільтром по категоріях
  Experience.tsx  — акордеон "Досвід роботи" (реально розкривається)
  OrderForm.tsx   — форма заявки (EmailJS, client-side, + graceful mailto fallback)
  Contact.tsx     — контакти + відгуки клієнтів
  Footer.tsx      — підвал
  ScrollReveal.tsx — анімація появи блоків при скролі
public/
  azen-swoosh.png    — синій розчерк біля літери "A" в лого
  azen-wordmark.png  — повний логотип (запасний файл)
```

## Що ще варто зробити перед реальним запуском

- **Налаштувати EmailJS** (див. розділ вище) — без цього форма працює через `mailto:` фолбек, що теж ок, але листи йдуть напряму, тільки якщо налаштовано
- **Досвід роботи** у `Experience.tsx` — перевір, чи актуальний

## Мови

Перемикач UA/EN в навбарі. Весь текстовий контент (крім назв технологій та проєктів) перекладається на льоту через `useLang()` та словник в `LangContext.tsx`. Лист заявки формується мовою, обраною на момент відправки.

## SEO та шеринг

- `next/font` — шрифти вбудовуються локально в білд, без зовнішніх запитів до Google Fonts у рантаймі
- Favicon, apple-icon та OG-картинка згенеровані з реального лого — прев'ю в месенджерах і соцмережах виглядає брендовано, а не порожньо
- `robots.ts` / `sitemap.ts` — базові SEO-файли, які Next.js віддає автоматично на `/robots.txt` і `/sitemap.xml`

## Доступність (a11y)

- Перемикач мов і фільтри мають `aria-pressed`/`role="group"`
- Акордеон досвіду — `aria-expanded`, клавіатурна навігація (Enter/Space)
- Гамбургер-меню — `aria-expanded`, `aria-controls`
- Кнопка скролу вниз — реальний `<button>`, а не `div`

## Технології

- Next.js 14 (App Router)
- React 18 + TypeScript
- @emailjs/browser (відправка форми, без бекенду)
- Чистий CSS (без Tailwind) — усі стилі в `app/globals.css`, без інлайн-стилів у компонентах
# azen-dev.github.io
