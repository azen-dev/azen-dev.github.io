import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from 'react';

export type Lang = 'uk' | 'en';

type Translation = { uk: string; en: string };

export const I18N: Record<string, Translation> = {
  // Nav
  'nav.about': { uk: 'Про мене', en: 'About' },
  'nav.services': { uk: 'Послуги', en: 'Services' },
  'nav.pricing': { uk: 'Тарифи', en: 'Pricing' },
  'nav.projects': { uk: 'Проєкти', en: 'Projects' },
  'nav.contact': { uk: 'Контакти', en: 'Contact' },

  // Hero
  'hero.subtitle': {
    uk: 'Розробка сайтів, інтернет-магазинів та CRM під ключ',
    en: 'Websites, online stores, and CRM systems — built end-to-end',
  },
  'hero.cta': { uk: 'Замовити проєкт', en: 'Order a project' },
  'hero.trust1n': { uk: '8+', en: '8+' },
  'hero.trust1t': { uk: 'років на ринку', en: 'years on the market' },
  'hero.trust2n': { uk: '50+', en: '50+' },
  'hero.trust2t': { uk: 'реалізованих проєктів', en: 'projects delivered' },
  'hero.trust3n': { uk: '100%', en: '100%' },
  'hero.trust3t': { uk: 'проєктів у строк', en: 'delivered on time' },

  // About
  'about.title': { uk: 'Про мене', en: 'About me' },
  'about.text': {
    uk: "Більше восьми років створюю сайти, інтернет-магазини та CRM-системи під ключ, і мені досі подобається робити продукти, які виглядають чисто і працюють без збоїв. Працюю напряму з клієнтом, без зайвих ланок, тримаю прозорі терміни та вартість. Маєте ідею проєкту? Давайте зробимо щось надійне разом!",
    en: "For more than eight years I've been building websites, online stores, and CRM systems end-to-end, and I still love shipping products that look clean and run without a hitch. I work directly with clients, no middlemen, with clear timelines and pricing. Have a project in mind? Let's build something solid together!",
  },

  // Services (Expertise)
  'services.title': { uk: 'Послуги', en: 'Services' },
  'services.card1.name': { uk: 'Веб-розробка', en: 'Web Development' },
  'services.card1.desc': {
    uk: 'Швидкі, адаптивні сайти під ключ — від візитки до багатосторінкового корпоративного ресурсу.',
    en: 'Fast, responsive websites built end-to-end — from a one-pager to a full multi-page corporate site.',
  },
  'services.card2.name': {
    uk: 'E-commerce та CRM-системи',
    en: 'E-commerce & CRM systems',
  },
  'services.card2.desc': {
    uk: 'Інтернет-магазини та CRM для автоматизації продажів, замовлень і клієнтської бази.',
    en: 'Online stores and CRM systems that automate sales, orders, and your customer base.',
  },
  'services.card3.name': {
    uk: 'Мобільні додатки iOS/Android',
    en: 'Mobile apps iOS/Android',
  },
  'services.card3.desc': {
    uk: 'Кросплатформні застосунки з єдиною кодовою базою та нативною швидкодією.',
    en: 'Cross-platform apps built from a single codebase, with native-grade performance.',
  },

  // Why us
  'why.title': { uk: 'Чому я', en: 'Why me' },
  'why.card1.title': { uk: 'Прозорі умови', en: 'Transparent terms' },
  'why.card1.desc': {
    uk: 'Фіксована вартість і терміни ще до старту роботи — без прихованих доплат.',
    en: 'Fixed price and timeline agreed before I start — no hidden fees.',
  },
  'why.card2.title': { uk: 'Особистий підхід', en: 'Direct communication' },
  'why.card2.desc': {
    uk: 'Ви спілкуєтесь напряму зі мною, без менеджерів і зайвих ланок.',
    en: 'You talk directly with me — no managers, no middlemen.',
  },
  'why.card3.title': {
    uk: 'Підтримка після запуску',
    en: 'Support after launch',
  },
  'why.card3.desc': {
    uk: 'Допомагаю з доопрацюваннями та підтримкою і після здачі проєкту.',
    en: 'I help with updates and support even after the project is delivered.',
  },
  'why.card4.title': { uk: 'Швидкий старт', en: 'Fast start' },
  'why.card4.desc': {
    uk: 'Починаю роботу вже за кілька днів після узгодження деталей.',
    en: 'I start work within a few days of confirming the details.',
  },

  // Pricing
  'pricing.title': { uk: 'Тарифи', en: 'Pricing' },
  'pricing.subtitle': {
    uk: 'Три готові пакети під основні задачі — або індивідуальний розрахунок під ваш проєкт.',
    en: 'Three ready-made packages for the most common needs — or a custom quote for your project.',
  },
  'pricing.popular': { uk: 'Обирають частіше', en: 'Most popular' },
  'pricing.priceFrom': { uk: 'від, $', en: 'starting, $' },
  'pricing.cta': { uk: 'Замовити', en: 'Order now' },
  'pricing.note': {
    uk: 'Точну вартість озвучую після короткого дзвінка — без сюрпризів по ходу роботи.',
    en: 'I confirm the exact price after a short call — no surprises along the way.',
  },

  'pricing.plan1.name': { uk: 'Старт', en: 'Start' },
  'pricing.plan1.desc': {
    uk: 'Візитка або лендінг, щоб швидко з’явитись онлайн і почати приймати заявки.',
    en: 'A one-pager or landing page to get online fast and start collecting leads.',
  },
  'pricing.plan1.price': { uk: '400', en: '400' },
  'pricing.plan1.f1': { uk: 'До 5 секцій на сторінці', en: 'Up to 5 page sections' },
  'pricing.plan1.f2': { uk: 'Адаптивна верстка під усі екрани', en: 'Responsive layout for every screen' },
  'pricing.plan1.f3': { uk: 'Форма заявки з сповіщенням', en: 'Lead form with instant notifications' },
  'pricing.plan1.f4': { uk: 'Запуск за 5–7 днів', en: 'Delivered in 5–7 days' },

  'pricing.plan2.name': { uk: 'Бізнес', en: 'Business' },
  'pricing.plan2.desc': {
    uk: 'Багатосторінковий сайт або інтернет-магазин для компанії, що вже росте.',
    en: 'A multi-page website or online store for a growing business.',
  },
  'pricing.plan2.price': { uk: '1200', en: '1200' },
  'pricing.plan2.f1': { uk: 'До 10 сторінок або повний каталог', en: 'Up to 10 pages or a full catalog' },
  'pricing.plan2.f2': { uk: 'Оплата, кошик і адмін-панель', en: 'Payments, cart, and admin panel' },
  'pricing.plan2.f3': { uk: 'SEO-налаштування та аналітика', en: 'SEO setup and analytics' },
  'pricing.plan2.f4': { uk: '1 місяць підтримки після запуску', en: '1 month of post-launch support' },

  'pricing.plan3.name': { uk: 'Преміум', en: 'Premium' },
  'pricing.plan3.desc': {
    uk: 'CRM або мобільний застосунок під ваші унікальні бізнес-процеси.',
    en: 'A custom CRM or mobile app built around your specific business processes.',
  },
  'pricing.plan3.price': { uk: '2500', en: '2500' },
  'pricing.plan3.f1': { uk: 'Індивідуальна архітектура рішення', en: 'Custom-built architecture' },
  'pricing.plan3.f2': { uk: 'Інтеграції з вашими сервісами', en: 'Integrations with your existing tools' },
  'pricing.plan3.f3': { uk: 'Проміжні демо на кожному етапі', en: 'Progress demos at every stage' },
  'pricing.plan3.f4': { uk: '3 місяці підтримки після запуску', en: '3 months of post-launch support' },

  // Projects (Work)
  'projects.title': { uk: 'Проєкти', en: 'Projects' },
  'projects.viewBtn': { uk: 'Переглянути сайт', en: 'View website' },
  'projects.p1.category': { uk: 'Корпоративний сайт', en: 'Corporate site' },
  'projects.p1.desc': {
    uk: 'Корпоративний сайт компанії промислового обладнання та автоматизації для харчової, фармацевтичної й логістичної галузей. Багатомовний, швидкий і оптимізований під пошук.',
    en: 'Corporate website for an industrial equipment and automation company serving the food, pharma, and logistics sectors. Bilingual, fast, and built for search visibility.',
  },
  'projects.p2.category': { uk: 'E-commerce', en: 'E-commerce' },
  'projects.p2.desc': {
    uk: 'Інтернет-магазин студії друку на текстилі та вишивки — повний каталог, оптові ціни, акції та зручне оформлення замовлення.',
    en: 'Online store for a textile printing and embroidery studio, with a full catalog, wholesale pricing tiers, promotions, and a smooth checkout flow.',
  },
  'projects.p3.category': { uk: 'E-commerce', en: 'E-commerce' },
  'projects.p3.desc': {
    uk: 'Концептуальний магазин преміальних товарів для дому — власна дизайн-система і більш редакційний, стриманий візуальний стиль, ніж у типового шаблону магазину.',
    en: 'Concept storefront for premium lifestyle goods, built with a custom design system and a more editorial, restrained visual style than a typical shop template.',
  },

  // Process
  'process.title': { uk: 'Процес', en: 'Process' },
  'process.step1.title': { uk: 'Заявка', en: 'Request' },
  'process.step1.desc': {
    uk: 'Заповнюєте коротку форму або пишете напряму — розкажіть про задачу.',
    en: 'Fill out a short form or reach out directly and tell me about your goal.',
  },
  'process.step2.title': { uk: 'Обговорення', en: 'Discovery call' },
  'process.step2.desc': {
    uk: 'Уточнюю задачу, терміни та бюджет, пропоную оптимальне рішення.',
    en: 'I clarify the task, timeline, and budget, and propose the best approach.',
  },
  'process.step3.title': { uk: 'Дизайн і план', en: 'Design & plan' },
  'process.step3.desc': {
    uk: 'Погоджую з вами структуру сторінок і зовнішній вигляд ще до розробки.',
    en: 'I agree the page structure and look and feel with you before development starts.',
  },
  'process.step4.title': { uk: 'Розробка', en: 'Development' },
  'process.step4.desc': {
    uk: 'Створюю проєкт із регулярними проміжними демонстраціями прогресу.',
    en: 'I build the project with regular progress demos along the way.',
  },
  'process.step5.title': { uk: 'Запуск і підтримка', en: 'Launch & support' },
  'process.step5.desc': {
    uk: "Публікую готовий проєкт і залишаюсь на зв'язку для підтримки.",
    en: 'I launch the finished project and stay on hand for ongoing support.',
  },

  // Testimonials
  'testimonials.title': { uk: 'Відгуки', en: 'Testimonials' },
  'testimonials.subtitle': {
    uk: 'Що кажуть клієнти, які вже замовляли у мене розробку.',
    en: 'What clients say after working with me.',
  },
  'testimonials.q1.text': {
    uk: 'Дякую за розробку сайту — точно за технічним завданням, з увагою до деталей і без затримок по строках.',
    en: 'Thanks for the website — delivered exactly to spec, with attention to detail and no delays.',
  },
  'testimonials.q1.label': {
    uk: 'TEG · Промислова автоматизація',
    en: 'TEG · Industrial automation',
  },
  'testimonials.q2.text': {
    uk: 'Дякую за розробку інтернет-магазину — каталог, кошик і оптові ціни запрацювали саме так, як і планували.',
    en: 'Thanks for the online store — the catalog, cart, and wholesale pricing turned out exactly as planned.',
  },
  'testimonials.q2.label': {
    uk: 'eSTetdruk · Друк та мерч',
    en: 'eSTetdruk · Print & merch store',
  },
  'testimonials.q3.text': {
    uk: 'Дякую за розробку e-commerce платформи — чистий код, продуманий UI і стабільна робота після запуску.',
    en: 'Thanks for the e-commerce platform — clean code, a thoughtful UI, and stable performance after launch.',
  },
  'testimonials.q3.label': {
    uk: 'FORMA · E-commerce платформа',
    en: 'FORMA · E-commerce platform',
  },

  // Contact / Order form
  'contact.title': { uk: 'Замовити проєкт', en: 'Order a project' },
  'contact.desc': {
    uk: "Заповніть коротку форму — і я зв'яжусь з вами протягом дня, щоб обговорити деталі та вартість.",
    en: "Fill out a short form and I'll get back to you within a day to discuss the details and cost.",
  },
  'contact.emailBtn': { uk: 'Написати на пошту', en: 'Email me' },
  'form.nameLabel': { uk: "Ім'я", en: 'Name' },
  'form.namePh': { uk: 'Як до вас звертатись?', en: 'What should I call you?' },
  'form.contactLabel': {
    uk: 'Telegram, email або телефон',
    en: 'Telegram, email or phone',
  },
  'form.contactPh': { uk: '@nick / email / +380...', en: '@nick / email / +1...' },
  'form.typeLabel': { uk: 'Тип проєкту', en: 'Project type' },
  'form.type1': { uk: 'Сайт / лендінг', en: 'Website / landing page' },
  'form.type2': { uk: 'Інтернет-магазин', en: 'Online store' },
  'form.type3': { uk: 'CRM-система', en: 'CRM system' },
  'form.type4': { uk: 'Мобільний додаток', en: 'Mobile app' },
  'form.type5': { uk: 'Інше', en: 'Other' },
  'form.budgetLabel': { uk: 'Орієнтовний бюджет', en: 'Estimated budget' },
  'form.budget1': { uk: 'до $500', en: 'under $500' },
  'form.budget2': { uk: '$500–1500', en: '$500–1500' },
  'form.budget3': { uk: '$1500–3000', en: '$1500–3000' },
  'form.budget4': { uk: '$3000+', en: '$3000+' },
  'form.budget5': { uk: 'Ще не визначився(-лась)', en: 'Not sure yet' },
  'form.messageLabel': { uk: 'Опис проєкту', en: 'Project description' },
  'form.optionalTag': { uk: "необов'язково", en: 'optional' },
  'form.messagePh': {
    uk: 'Розкажіть коротко, що потрібно зробити, є терміни чи референси?',
    en: 'Briefly describe what you need, any deadlines or references?',
  },
  'form.submitBtn': { uk: 'Надіслати заявку', en: 'Send request' },
  'form.sending': { uk: 'Надсилаю…', en: 'Sending…' },
  'form.note': {
    uk: 'Відповідаю особисто, без черг.',
    en: 'I reply personally — no queues.',
  },
  'form.successMsg': {
    uk: "Дякую! Заявка надіслана — я зв'яжусь з вами найближчим часом.",
    en: "Thanks! Your request has been sent — I'll get back to you shortly.",
  },

  // Footer
  'footer.text': {
    uk: '© 2026 Azen.dev — Сайти • Інтернет-магазини • CRM • Мобільні додатки',
    en: '© 2026 Azen.dev — Websites • E-commerce • CRM • Mobile Apps',
  },
};

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextValue>({
  lang: 'uk',
  setLang: () => {},
  t: (key: string) => key,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('uk');
  const t = (key: string): string =>
    I18N[key] ? I18N[key][lang] : key;
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  return useContext(LangContext);
}
