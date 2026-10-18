"use client";

import { useState, type CSSProperties, type MouseEvent } from "react";
import Image from "next/image";
import { useLang } from "./LangContext";

interface Project {
  id: string;
  title: string;
  subEn: string;
  subUk: string;
  tagEn: string;
  tagUk: string;
  year: string;
  descEn: string;
  descUk: string;
  accent: string;
  live: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: "teg",
    title: "TEG",
    subEn: "Industrial Automation Company Site",
    subUk: "Сайт компанії промислової автоматизації",
    tagEn: "Corporate Site",
    tagUk: "Корпоративний сайт",
    year: "2025",
    descEn:
      "Corporate website for an industrial equipment and automation company, serving the food, pharma, and logistics sectors. Bilingual, fast, and built for search visibility.",
    descUk:
      "Корпоративний сайт компанії промислового обладнання та автоматизації для харчової, фармацевтичної й логістичної галузей. Багатомовний, швидкий і оптимізований під пошук.",
    accent: "#F4A93E",
    live: "https://teg.kiev.ua/",
    image: "/projects/teg.webp",
  },
  {
    id: "estetdruk",
    title: "eSTetdruk",
    subEn: "Print & Merch E-commerce Store",
    subUk: "Інтернет-магазин друку та мерчу",
    tagEn: "E-commerce",
    tagUk: "E-commerce",
    year: "2025",
    descEn:
      "Online store for a textile printing and embroidery studio, with a full catalog, wholesale pricing tiers, promotions, and a smooth checkout flow.",
    descUk:
      "Інтернет-магазин студії друку на текстилі та вишивки — повний каталог, оптові ціни, акції та зручне оформлення замовлення.",
    accent: "#FB923C",
    live: "https://estetdruk.shop/",
    image: "/projects/estetdruk.webp",
  },
  {
    id: "forma",
    title: "FORMA",
    subEn: "Luxury E-commerce Platform",
    subUk: "Люкс E-commerce платформа",
    tagEn: "E-commerce",
    tagUk: "E-commerce",
    year: "2024",
    descEn:
      "Concept storefront for premium lifestyle goods, built with a custom design system and a more editorial, restrained visual style than a typical shop template.",
    descUk:
      "Концептуальний магазин преміальних товарів для дому — власна дизайн-система і більш редакційний, стриманий візуальний стиль, ніж у типового шаблону магазину.",
    accent: "#6EE7B7",
    live: "https://next-shop-ih5f.vercel.app/",
    image: "/projects/forma.webp",
  },
];

export default function Work() {
  const { lang, t } = useLang();
  const isEn = lang === "en";
  const [active, setActive] = useState(0);

  const scrollToOrderForm = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formEl = document.getElementById("orderForm");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => document.getElementById("f-name")?.focus(), 550);
    }
  };

  const accentVar = (accent: string) => ({ "--pc-accent": accent }) as CSSProperties;

  return (
    <section id="work">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-eyebrow sec-eyebrow--bare" aria-hidden="true" />
          <h2 className="sec-title display">
            {t("work.heading1")}
            <br />
            {t("work.heading2")}
          </h2>
          <p className="sec-sub">{t("work.desc")}</p>
        </div>

        <div className="wk reveal">
          <ol className="wk-list">
            {PROJECTS.map((p, i) => (
              <li
                key={p.id}
                className={`wk-row${active === i ? " is-active" : ""}`}
                style={accentVar(p.accent)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <div className="wk-shot">
                  <div className="wk-bar">
                    <i />
                  </div>
                  <Image src={p.image} alt={p.title} width={1200} height={623} sizes="100vw" />
                </div>
                <div className="wk-meta">
                  <span className="wk-tag mono">
                    <i className="wk-dot" aria-hidden="true" />
                    {isEn ? p.tagEn : p.tagUk}
                  </span>
                  <span className="wk-year mono">{p.year}</span>
                </div>
                <h3 className="wk-title">{p.title}</h3>
                <p className="wk-sub">{isEn ? p.subEn : p.subUk}</p>
                <p className="wk-desc">{isEn ? p.descEn : p.descUk}</p>
                <a href={p.live} target="_blank" rel="noreferrer" className="wk-link mono">
                  {t("work.viewBtn")}
                </a>
              </li>
            ))}
          </ol>

          <div className="wk-aside" aria-hidden="true">
            <div className="wk-preview" style={accentVar(PROJECTS[active].accent)}>
              <div className="wk-bar">
                <i />
              </div>
              <div className="wk-stage">
                {PROJECTS.map((p, i) => (
                  <Image
                    key={p.id}
                    src={p.image}
                    alt=""
                    fill
                    sizes="(max-width: 1080px) 1px, 55vw"
                    className={active === i ? "is-on" : ""}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="work-cta reveal">
          <p>{t("work.ctaText")}</p>
          <a href="#contact" className="btn btn-primary" onClick={scrollToOrderForm}>
            {t("work.ctaBtn")}
          </a>
        </div>
      </div>
    </section>
  );
}
