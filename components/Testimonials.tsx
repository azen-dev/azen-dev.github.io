"use client";

import { useLang } from "./LangContext";

interface Quote {
  cls: string;
  name: string;
  labelEn: string;
  labelUk: string;
  textEn: string;
  textUk: string;
}

const QUOTES: Quote[] = [
  {
    cls: "blue",
    name: "Сергій",
    labelEn: "TEG · Industrial automation",
    labelUk: "TEG · Промислова автоматизація",
    textEn:
      "Thanks to Azen.dev for the website — delivered exactly to spec, with attention to detail and no delays.",
    textUk:
      "Дякую Azen.dev за розробку сайту — точно за технічним завданням, з увагою до деталей і без затримок по строках.",
  },
  {
    cls: "deep",
    name: "Михайло",
    labelEn: "eSTetdruk · Print & merch store",
    labelUk: "eSTetdruk · Друк та мерч",
    textEn:
      "Thanks to Azen.dev for the online store — the catalog, cart, and wholesale pricing turned out exactly as planned.",
    textUk:
      "Дякую Azen.dev за розробку інтернет-магазину — каталог, кошик і оптові ціни запрацювали саме так, як і планували.",
  },
  {
    cls: "light",
    name: "Артем",
    labelEn: "FORMA · E-commerce platform",
    labelUk: "FORMA · E-commerce платформа",
    textEn:
      "Thanks to Azen.dev for the e-commerce platform — clean code, a thoughtful UI, and stable performance after launch.",
    textUk:
      "Дякую Azen.dev за розробку e-commerce платформи — чистий код, продуманий UI і стабільна робота після запуску.",
  },
];

export default function Testimonials() {
  const { lang, t } = useLang();
  const isEn = lang === "en";

  return (
    <section id="testimonials">
      <div className="container">
        <h2 className="section-title display reveal">{t("testimonials.title")}</h2>
        <p className="section-sub reveal">{t("testimonials.subtitle")}</p>
        <div className="quotes-grid reveal-stagger">
          {QUOTES.map((q) => (
            <div className={`qcard ${q.cls}`} key={q.name}>
              <div className="qmark">&quot;</div>
              <p>{isEn ? q.textEn : q.textUk}</p>
              <div>
                <h5>{q.name}</h5>
                <span>{isEn ? q.labelEn : q.labelUk}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
