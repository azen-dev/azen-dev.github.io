"use client";

import type { CSSProperties } from "react";
import { useLang } from "./LangContext";

interface Quote {
  name: string;
  project: string;
  url: string;
  accent: string;
  roleEn: string;
  roleUk: string;
  textEn: string;
  textUk: string;
}

const QUOTES: Quote[] = [
  {
    name: "Сергій",
    project: "TEG",
    url: "https://teg.kiev.ua/",
    accent: "#F4A93E",
    roleEn: "Industrial automation",
    roleUk: "Промислова автоматизація",
   textEn:
      "Azen.dev did a great job with our website. Everything was delivered on time, exactly according to our requirements, with attention to every detail.",
    textUk:
      "Azen.dev чудово впоралися з розробкою нашого сайту. Все виконали вчасно, відповідно до наших вимог і з увагою до кожної деталі.",
  },
  {
    name: "Михайло",
    project: "eSTetdruk",
    url: "https://estetdruk.shop/",
    accent: "#FB923C",
    roleEn: "Print & merch store",
    roleUk: "Друк та мерч",
   textEn:
      "We are very happy with our online store. The catalog, shopping cart, and wholesale pricing work exactly as we expected.",
    textUk:
      "Ми дуже задоволені нашим інтернет-магазином. Каталог, кошик та оптові ціни працюють саме так, як ми очікували.",
  },
  {
    name: "Артем",
    project: "FORMA",
    url: "https://next-shop-ih5f.vercel.app/",
    accent: "#6EE7B7",
    roleEn: "E-commerce platform",
    roleUk: "E-commerce платформа",
   textEn:
      "The result exceeded our expectations. The platform has a clean interface, thoughtful design, and works reliably after launch.",
    textUk:
      "Результат перевершив наші очікування. Платформа має чистий інтерфейс, продуманий дизайн і стабільно працює після запуску.",
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
            <figure className="qcard" key={q.name} style={{ "--q-accent": q.accent } as CSSProperties}>
              <blockquote>{isEn ? q.textEn : q.textUk}</blockquote>
              <figcaption>
                <strong>{q.name}</strong>
                <span>{isEn ? q.roleEn : q.roleUk}</span>
                <a href={q.url} target="_blank" rel="noreferrer">
                  {q.project} ↗
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
