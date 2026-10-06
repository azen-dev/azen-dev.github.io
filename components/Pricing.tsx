"use client";

import type { MouseEvent } from "react";
import { useLang } from "./LangContext";

// Орієнтовні ціни й терміни — заміни на свої реальні.
const PLANS = [
  {
    id: "landing",
    nameUk: "Лендінг", nameEn: "Landing page",
    price: "$300",
    timeUk: "5–10 днів", timeEn: "5–10 days",
    itemsUk: ["Один екран-продаж із формою заявки", "Адаптив під телефон", "Базове SEO та аналітика"],
    itemsEn: ["One-page sales site with a lead form", "Mobile-first layout", "Basic SEO and analytics"],
  },
  {
    id: "corporate",
    nameUk: "Корпоративний сайт", nameEn: "Business website",
    price: "$800",
    timeUk: "2–4 тижні", timeEn: "2–4 weeks",
    itemsUk: ["До 8 сторінок: послуги, про компанію, контакти", "Дві мови, швидке завантаження", "Структура під пошукові запити"],
    itemsEn: ["Up to 8 pages: services, about, contacts", "Two languages, fast loading", "Structured for search queries"],
    featured: true,
  },
  {
    id: "shop",
    nameUk: "Інтернет-магазин", nameEn: "Online store",
    price: "$1500",
    timeUk: "3–6 тижнів", timeEn: "3–6 weeks",
    itemsUk: ["Каталог, кошик, оформлення замовлення", "Оптові ціни, акції, фільтри", "Онлайн-оплата та сповіщення про замовлення"],
    itemsEn: ["Catalog, cart, checkout", "Wholesale pricing, promos, filters", "Online payment and order notifications"],
  },
];

export default function Pricing() {
  const { lang } = useLang();
  const en = lang === "en";

  const toForm = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("orderForm")?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => document.getElementById("f-name")?.focus(), 550);
  };

  return (
    <section id="pricing">
      <div className="container">
        <h2 className="section-title display reveal">{en ? "Pricing" : "Вартість"}</h2>
        <p className="section-sub reveal">
          {en
            ? "Starting prices. The final cost is fixed in writing before I start, after we discuss your task."
            : "Ціни «від». Остаточну вартість фіксуємо письмово до старту, після обговорення вашої задачі."}
        </p>
        <div className="pricing-grid reveal-stagger">
          {PLANS.map((p) => (
            <div className={`price-card${p.featured ? " featured" : ""}`} key={p.id}>
              <h3>{en ? p.nameEn : p.nameUk}</h3>
              <div className="price-line">
                <span className="price-from">{en ? "from" : "від"}</span>
                <span className="price-num display">{p.price}</span>
              </div>
              <p className="price-time">{en ? p.timeEn : p.timeUk}</p>
              <ul>
                {(en ? p.itemsEn : p.itemsUk).map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a href="#contact" className="btn btn-primary" onClick={toForm}>
                {en ? "Discuss this" : "Обговорити"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
