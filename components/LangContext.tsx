"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "uk" | "en";

type Translation = { uk: string; en: string };

export const I18N: Record<string, Translation> = {
  "nav.why": { uk: "// переваги", en: "// why me" },

  "hero.cta": { uk: "Замовити проєкт →", en: "Order a project →" },

  "expertise.title": { uk: "Що я роблю", en: "What I Do" },
  "expertise.card1.title1": { uk: "Веб-розробка", en: "Web Development" },
  "expertise.card1.title2": { uk: "сайти та лендінги", en: "websites & landing pages" },
  "expertise.card1.line1": {
    uk: "Швидкі, адаптивні сайти під ключ — від візитки",
    en: "Fast, responsive websites built end-to-end — from a",
  },
  "expertise.card1.line2": {
    uk: "до багатосторінкового корпоративного ресурсу.",
    en: "one-pager to a full multi-page corporate site.",
  },
  "expertise.card2.title1": { uk: "E-commerce", en: "E-commerce" },
  "expertise.card2.title2": { uk: "та CRM-системи", en: "& CRM systems" },
  "expertise.card2.line1": {
    uk: "Інтернет-магазини та CRM для автоматизації",
    en: "Online stores and CRM systems that automate sales,",
  },
  "expertise.card2.line2": {
    uk: "продажів, замовлень і клієнтської бази.",
    en: "orders, and your customer base.",
  },

  "why.eyebrow": { uk: "Мій підхід", en: "My Approach" },
  "why.title": { uk: "Чому клієнти обирають мене", en: "Why Clients Choose Me" },
  "why.subtitle": {
    uk: "Працюю так, щоб замовляти сайт чи магазин було просто і зрозуміло.",
    en: "I make ordering a website or store simple and stress-free.",
  },
  "why.card1.title": { uk: "Прозорі умови", en: "Transparent Terms" },
  "why.card1.desc": {
    uk: "Фіксована вартість і терміни ще до старту роботи — без прихованих доплат.",
    en: "Fixed price and timeline agreed before I start — no hidden fees.",
  },
  "why.card2.title": { uk: "Особистий підхід", en: "Direct Communication" },
  "why.card2.desc": {
    uk: "Ви спілкуєтесь напряму зі мною, без менеджерів і зайвих ланок.",
    en: "You talk directly with me — no managers, no middlemen.",
  },
  "why.card3.title": { uk: "Підтримка після запуску", en: "Support After Launch" },
  "why.card3.desc": {
    uk: "Допомагаю з доопрацюваннями та підтримкою і після здачі проєкту.",
    en: "I help with updates and support even after the project is delivered.",
  },
  "why.card4.title": { uk: "Швидкий старт", en: "Fast Start" },
  "why.card4.desc": {
    uk: "Починаю роботу вже за кілька днів після узгодження деталей.",
    en: "I start work within a few days of confirming the details.",
  },

  "process.eyebrow": { uk: "Процес роботи", en: "Workflow" },
  "process.title": { uk: "Як проходить робота", en: "How I Work" },
  "process.subtitle": {
    uk: "Простий і прозорий процес від першого повідомлення до запуску.",
    en: "A simple, transparent process from the first message to launch.",
  },
  "process.step1.title": { uk: "Заявка", en: "Request" },
  "process.step1.desc": {
    uk: "Заповнюєте коротку форму або пишете напряму — розкажіть про задачу.",
    en: "Fill out a short form or reach out directly and tell me about your goal.",
  },
  "process.step2.title": { uk: "Обговорення", en: "Discovery Call" },
  "process.step2.desc": {
    uk: "Уточнюю задачу, терміни та бюджет, пропоную оптимальне рішення.",
    en: "I clarify the task, timeline, and budget, and propose the best approach.",
  },
  "process.step3.title": { uk: "Дизайн і план", en: "Design & Plan" },
  "process.step3.desc": {
    uk: "Погоджую з вами структуру сторінок і зовнішній вигляд ще до розробки.",
    en: "I agree the page structure and look and feel with you before development starts.",
  },
  "process.step4.title": { uk: "Розробка", en: "Development" },
  "process.step4.desc": {
    uk: "Створюю проєкт із регулярними проміжними демонстраціями прогресу.",
    en: "I build the project with regular progress demos along the way.",
  },
  "process.step5.title": { uk: "Запуск і підтримка", en: "Launch & Support" },
  "process.step5.desc": {
    uk: "Публікую готовий проєкт і залишаюсь на зв'язку для підтримки.",
    en: "I launch the finished project and stay on hand for ongoing support.",
  },

  "work.heading1": { uk: "Останні", en: "Recent" },
  "work.heading2": { uk: "Проєкти", en: "Work" },
  "work.desc": {
    uk: "Кілька проєктів, які показують, як я підходжу до сайтів, магазинів і CRM для клієнтів з різних сфер.",
    en: "A few projects that show how I approach websites, stores, and CRM systems for clients across industries.",
  },
  "work.viewBtn": { uk: "Переглянути сайт →", en: "View website →" },
  "work.ctaText": { uk: "Маєте схожий запит? Обговорімо ваш проєкт.", en: "Have a similar project in mind? Let's talk." },
  "work.ctaBtn": { uk: "Обговорити проєкт", en: "Discuss a project" },

  "order.title": { uk: "Замовити проєкт", en: "Order a project" },
  "order.desc": {
    uk: "Заповніть коротку форму — і я зв'яжусь з вами протягом дня, щоб обговорити деталі та вартість.",
    en: "Fill out a short form and I'll get back to you within a day to discuss the details and cost.",
  },

  "form.nameLabel": { uk: "Ім'я", en: "Name" },
  "form.namePh": { uk: "Як до вас звертатись?", en: "What should I call you?" },
  "form.contactLabel": { uk: "Telegram, email або телефон", en: "Telegram, email or phone" },
  "form.contactPh": { uk: "@nick / email / +380...", en: "@nick / email / +1..." },
  "form.typeLabel": { uk: "Тип проєкту", en: "Project type" },
  "form.type1": { uk: "Сайт / лендінг", en: "Website / landing page" },
  "form.type2": { uk: "Інтернет-магазин", en: "Online store" },
  "form.type3": { uk: "CRM-система", en: "CRM system" },
  "form.type4": { uk: "Мобільний додаток", en: "Mobile app" },
  "form.type5": { uk: "Інше", en: "Other" },
  "form.budgetLabel": { uk: "Орієнтовний бюджет", en: "Estimated budget" },
  "form.budget1": { uk: "до $500", en: "under $500" },
  "form.budget2": { uk: "$500–1500", en: "$500–1500" },
  "form.budget3": { uk: "$1500–3000", en: "$1500–3000" },
  "form.budget4": { uk: "$3000+", en: "$3000+" },
  "form.budget5": { uk: "Ще не визначився(-лась)", en: "Not sure yet" },
  "form.messageLabel": { uk: "Опис проєкту", en: "Project description" },
  "form.messagePh": {
    uk: "Розкажіть коротко, що потрібно зробити, є терміни чи референси?",
    en: "Briefly describe what you need, any deadlines or references?",
  },
  "form.submitBtn": { uk: "Надіслати заявку →", en: "Send request →" },
  "form.sending": { uk: "Надсилаю…", en: "Sending…" },
  "form.note": {
    uk: "Відповідаю особисто, без черг.",
    en: "I reply personally — no queues.",
  },
  "form.successMsg": {
    uk: "Дякую! Заявка надіслана — я зв'яжусь з вами найближчим часом.",
    en: "Thanks! Your request has been sent — I'll get back to you shortly.",
  },

  "contact.eyebrow": { uk: "Наступний крок", en: "Next Step" },
  "contact.heading1": { uk: "Готові розпочати", en: "Ready to Start" },
  "contact.heading2": { uk: "ваш проєкт?", en: "Your Project?" },
  "contact.desc": {
    uk: "Маєте ідею сайту, магазину чи CRM? Напишіть — обговоримо задачу, терміни та найкраще технічне рішення.",
    en: "Have an idea for a website, store, or CRM? Reach out — let's discuss the task, timeline, and the best approach.",
  },
  "contact.emailBtn": { uk: "Написати мені на пошту →", en: "Email me →" },

  "testimonials.title": { uk: "Відгуки клієнтів", en: "Client Testimonials" },
  "testimonials.subtitle": {
    uk: "Що кажуть клієнти, які вже замовляли у мене розробку.",
    en: "What clients say after working with me.",
  },

  "nav.home": { uk: "Головна", en: "Home" },
  "nav.services": { uk: "Послуги", en: "Services" },
  "nav.work": { uk: "Проєкти", en: "Work" },
  "nav.order": { uk: "Замовити", en: "Order" },
  "nav.pricing": { uk: "Вартість", en: "Pricing" },
  "nav.about": { uk: "Про мене", en: "About" },
  "hero.tg": { uk: "Написати в Telegram", en: "Message on Telegram" },
  "hero.trust1n": { uk: "від 7 днів", en: "from 7 days" },
  "hero.trust1t": { uk: "на лендінг", en: "for a landing page" },
  "hero.trust2n": { uk: "3 галузі", en: "3 industries" },
  "hero.trust2t": { uk: "промисловість, друк, e-commerce", en: "industrial, print, e-commerce" },
  "hero.trust3n": { uk: "1:1", en: "1:1" },
  "hero.trust3t": { uk: "спілкуєтесь напряму зі мною", en: "you talk directly to me" },
  "expertise.subtitle": { uk: "Два основні напрямки та супровід після запуску.", en: "Two core services plus support after launch." },
  "expertise.card3.title1": { uk: "Підтримка", en: "Support" },
  "expertise.card3.title2": { uk: "та доопрацювання", en: "& improvements" },
  "expertise.card3.line1": { uk: "Оновлення, нові функції та виправлення", en: "Updates, new features and fixes" },
  "expertise.card3.line2": { uk: "після запуску — без пошуку нового підрядника.", en: "after launch, no need to find a new contractor." },
  "footer.text": { uk: "© 2026 Azen.dev — Сайти • Інтернет-магазини • CRM", en: "© 2026 Azen.dev — Websites • E-commerce • CRM" },
  "hero.title": { uk: "Сайти та інтернет-магазини, які працюють на ваш бізнес", en: "Websites and online stores that work for your business" },
  "hero.subtitle": { uk: "Від ідеї до запуску й підтримки. Один виконавець, без посередників.", en: "From idea to launch and support. One developer, no middlemen." },
};

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue>({
  lang: "uk",
  setLang: () => {},
  t: (key: string) => key,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("uk");
  const t = (key: string): string => (I18N[key] ? I18N[key][lang] : key);
  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  return useContext(LangContext);
}
