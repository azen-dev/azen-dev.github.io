"use client";

import type { CSSProperties } from "react";
import { useLang } from "./LangContext";

interface Quote {
  name: string;
  labelEn: string;
  labelUk: string;
  textEn: string;
  textUk: string;
  /* колір проєкту з блоку «Проєкти» */
  accent: string;
}

const QUOTES: Quote[] = [
  {
    name: "Сергій",
    labelEn: "TEG · Industrial automation",
    labelUk: "TEG · Промислова автоматизація",
   textEn:
      "Vladyslav did a great job with our website. Everything was delivered on time, exactly according to our requirements, with attention to every detail.",
    textUk:
      "Владислав чудово впорався з розробкою нашого сайту. Все виконали вчасно, відповідно до наших вимог і з увагою до кожної деталі.",
    accent: "#F4A93E",
  },
  {
    name: "Михайло",
    labelEn: "eSTetdruk · Print & merch store",
    labelUk: "eSTetdruk · Друк та мерч",
         textEn:
      "We are very happy with our online store. The catalog, shopping cart, and wholesale pricing work exactly as we expected.",
    textUk:
      "Ми дуже задоволені нашим інтернет-магазином. Каталог, кошик та оптові ціни працюють саме так, як ми очікували.",
    accent: "#FB923C",
  },
  {
    name: "Артем",
    labelEn: "FORMA · E-commerce platform",
    labelUk: "FORMA · E-commerce платформа",
  textEn:
      "The result exceeded our expectations. The platform has a clean interface, thoughtful design, and works reliably after launch.",
    textUk:
      "Результат перевершив наші очікування. Платформа має чистий інтерфейс, продуманий дизайн і стабільно працює після запуску.",
    accent: "#6EE7B7",
  },
];



function Quote({ q, isEn, lead }: { q: Quote; isEn: boolean; lead?: boolean }) {
  const label = isEn ? q.labelEn : q.labelUk;
  const [company, ...rest] = label.split(" · ");
  const sector = rest.join(" · ");

  return (
    <blockquote
      className={`tq-item${lead ? " tq-item--lead" : ""}`}
      style={{ "--tq-accent": q.accent } as CSSProperties}
    >
      <span className="tq-mark display" aria-hidden="true">
        &ldquo;
      </span>
      <p className="tq-text">{isEn ? q.textEn : q.textUk}</p>
      <div className="tq-cite">
        <span className="tq-name display">{q.name}</span>
        <span className="tq-org">
          <i className="tq-dot" aria-hidden="true" />
          <span className="tq-company mono">{company}</span>
          {sector && (
            <>
              <span className="tq-sep" aria-hidden="true" />
              <span className="tq-sector">{sector}</span>
            </>
          )}
        </span>
      </div>
    </blockquote>
  );
}

export default function Testimonials() {
  const { lang, t } = useLang();
  const isEn = lang === "en";

  return (
    <section id="testimonials">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-eyebrow sec-eyebrow--bare" aria-hidden="true" />
          <h2 className="sec-title display">{t("testimonials.title")}</h2>
          <p className="sec-sub">{t("testimonials.subtitle")}</p>
        </div>

        <div className="tq reveal-stagger">
          <Quote q={QUOTES[0]} isEn={isEn} lead />
          <div className="tq-side">
            <Quote q={QUOTES[1]} isEn={isEn} />
            <Quote q={QUOTES[2]} isEn={isEn} />
          </div>
        </div>
      </div>
    </section>
  );
}
