"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "uk" | "en";

type Translation = { uk: string; en: string };

export const I18N: Record<string, Translation> = {
  "nav.home": { uk: "// головна", en: "// home" },
  "nav.services": { uk: "// послуги", en: "// services" },
  "nav.work": { uk: "// проєкти", en: "// work" },
  "nav.experience": { uk: "// досвід", en: "// experience" },
  "nav.order": { uk: "// замовити", en: "// order" },

  "hero.subtitle": {
    uk: "Веб-розробник · Frontend & App Developer",
    en: "Web Developer · Frontend & App Developer",
  },
  "hero.cta": { uk: "Замовити проєкт →", en: "Order a project →" },
  "hero.techLabel": { uk: "Технології, з якими працюю", en: "Technologies I work with" },

  "expertise.title": { uk: "Мої послуги", en: "My Services" },
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
  "expertise.card3.title1": { uk: "Мобільні", en: "Mobile" },
  "expertise.card3.title2": { uk: "додатки iOS/Android", en: "iOS/Android apps" },
  "expertise.card3.line1": {
    uk: "Кросплатформні застосунки на React Native з єдиною",
    en: "Cross-platform apps built with React Native — one",
  },
  "expertise.card3.line2": {
    uk: "кодовою базою та нативною швидкодією.",
    en: "codebase, native-grade performance.",
  },
  "expertise.stackComment": { uk: "// стек, яким користуюсь щодня", en: "// the stack I use every day" },

  "work.heading1": { uk: "Останні", en: "Recent" },
  "work.heading2": { uk: "Проєкти", en: "Work" },
  "work.desc": {
    uk: "Розробив сайти, магазини та CRM для клієнтів з різних сфер. Постійно експериментую з новими інструментами та підходами до UI/UX.",
    en: "Built websites, stores, and CRM systems for clients across many industries. Always experimenting with new tools and UI/UX approaches.",
  },
  "work.featuredLabel": { uk: "Обраний проєкт", en: "Featured project" },
  "work.viewBtn": { uk: "Переглянути →", en: "View project →" },
  "work.viewAllBtn": { uk: "Переглянути всі на GitHub →", en: "View all on GitHub →" },
  "work.filterLabel": { uk: "Фільтр:", en: "Filter:" },
  "work.filterAll": { uk: "Усі", en: "All" },
  "work.filterWeb": { uk: "Сайти", en: "Websites" },
  "work.filterEcom": { uk: "E-commerce", en: "E-commerce" },
  "work.filterCrm": { uk: "CRM", en: "CRM" },

  "experience.title": { uk: "Досвід роботи", en: "Work Experience" },
  "experience.job1": { uk: "Fullstack Developer @ Freelance", en: "Fullstack Developer @ Freelance" },
  "experience.date1": { uk: "2018 — тепер", en: "2018 — present" },
  "experience.desc1": {
    uk: "Розробляю сайти, магазини та CRM для клієнтів з різних країн. Повний цикл — від макета до продакшену.",
    en: "I build websites, stores, and CRM systems for clients worldwide. Full cycle — from design to production.",
  },
  "experience.job2": { uk: "Веб-розробник @ Digital Agency", en: "Web Developer @ Digital Agency" },
  "experience.date2": { uk: "2020 — 2023", en: "2020 — 2023" },
  "experience.desc2": {
    uk: "Розробляв корпоративні сайти та інтернет-магазини в команді агентства.",
    en: "Built corporate websites and online stores as part of an agency team.",
  },
  "experience.job3": { uk: "Junior Developer @ IT Company", en: "Junior Developer @ IT Company" },
  "experience.date3": { uk: "2017 — 2020", en: "2017 — 2020" },
  "experience.desc3": {
    uk: "Починав з верстки та підтримки сайтів, поступово перейшов на fullstack-розробку.",
    en: "Started with markup and website support, gradually moved into fullstack development.",
  },

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
    uk: "Відповідаю особисто, без менеджерів і черг.",
    en: "I reply personally — no managers, no queues.",
  },
  "form.successMsg": {
    uk: "Дякую! Заявка надіслана — я зв'яжусь з вами найближчим часом.",
    en: "Thanks! Your request has been sent — I'll get back to you shortly.",
  },

  "contact.heading1": { uk: "Відкритий для нових", en: "Open for new" },
  "contact.heading2": { uk: "фриланс-проєктів", en: "freelance projects" },
  "contact.desc": {
    uk: "Маєте ідею сайту, магазину чи CRM? Напишіть — обговоримо задачу, терміни та найкраще технічне рішення.",
    en: "Have an idea for a website, store, or CRM? Reach out — let's discuss the task, timeline, and the best technical approach.",
  },

  "quote.client": { uk: "Клієнт", en: "Client" },
  "quote1.text": {
    uk: "Швидко, чітко за ТЗ і з увагою до деталей. Магазин запрацював раніше дедлайну.",
    en: "Fast, precise to spec, and very detail-oriented. The store launched ahead of schedule.",
  },
  "quote1.role": { uk: "E-commerce проєкт", en: "E-commerce project" },
  "quote2.text": {
    uk: "CRM запрацювала саме так, як ми уявляли. Дякую за терпіння і пояснення.",
    en: "The CRM turned out exactly as we imagined. Thanks for the patience and clear explanations.",
  },
  "quote2.role": { uk: "CRM-система", en: "CRM system" },
  "quote3.text": {
    uk: "Сайт вийшов легким, швидким і саме в кольорах нашого бренду. Рекомендую як надійного розробника.",
    en: "The site turned out light, fast, and right on our brand colors. Highly recommend as a reliable developer.",
  },
  "quote3.role": { uk: "Корпоративний сайт", en: "Corporate website" },

  "footer.text": {
    uk: "© 2026 Azen.dev — Веб-розробник. Сайти • Інтернет-магазини • CRM • Мобільні додатки",
    en: "© 2026 Azen.dev — Web Developer. Websites • E-commerce • CRM • Mobile Apps",
  },
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
