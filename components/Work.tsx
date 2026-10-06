"use client";

import { type CSSProperties, type MouseEvent } from "react";
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
  taskEn: string;
  taskUk: string;
  doneEn: string;
  doneUk: string;
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
    taskEn: "Present the company across three industries and bring in B2B requests from search.",
    taskUk: "Представити компанію в трьох галузях і залучати B2B-запити з пошуку.",
    doneEn: "Bilingual site with a structure built around search queries and fast loading.",
    doneUk: "Двомовний сайт зі структурою під пошукові запити та швидким завантаженням.",
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
    taskEn: "Move retail and wholesale orders of a print studio online.",
    taskUk: "Перенести роздрібні й оптові замовлення студії друку в онлайн.",
    doneEn: "Full catalog, wholesale price tiers, promotions and a short checkout.",
    doneUk: "Повний каталог, оптові рівні цін, акції та короткий checkout.",
    accent: "#FB923C",
    live: "https://estetdruk.shop/",
    image: "/projects/estetdruk.webp",
  },
  {
    id: "forma",
    title: "FORMA",
    subEn: "Concept: Luxury E-commerce Platform",
    subUk: "Концепт люкс E-commerce платформи",
    tagEn: "E-commerce",
    tagUk: "E-commerce",
    year: "2024",
    descEn:
      "Concept storefront for premium lifestyle goods, built with a custom design system and a more editorial, restrained visual style than a typical shop template.",
    descUk:
      "Концептуальний магазин преміальних товарів для дому — власна дизайн-система і більш редакційний, стриманий візуальний стиль, ніж у типового шаблону магазину.",
    taskEn: "Show how a premium store can look beyond a standard template.",
    taskUk: "Показати, як може виглядати преміальний магазин поза типовим шаблоном.",
    doneEn: "Custom design system and an editorial, restrained storefront.",
    doneUk: "Власна дизайн-система та стриманий, редакційний вітринний дизайн.",
    accent: "#6EE7B7",
    live: "https://next-shop-ih5f.vercel.app/",
    image: "/projects/forma.webp",
  },
];

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace("#", "");
  const r = parseInt(clean.substring(0, 2), 16);
  const g = parseInt(clean.substring(2, 4), 16);
  const b = parseInt(clean.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Work() {
  const { lang, t } = useLang();
  const isEn = lang === "en";

  const scrollToOrderForm = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formEl = document.getElementById("orderForm");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => document.getElementById("f-name")?.focus(), 550);
    }
  };

  return (
    <section id="work">
      <div className="container">
        <div className="work-hero">
          <h2 className="display">
            {t("work.heading1")}
            <br />
            {t("work.heading2")}
          </h2>
          <p className="section-sub">{t("work.desc")}</p>
        </div>

        <div className="project-list reveal-stagger">
          {PROJECTS.map((p) => (
            <div
              className="project-card"
              key={p.id}
              style={{ "--pc-accent": p.accent, "--pc-tint": hexToRgba(p.accent, 0.14) } as CSSProperties}
            >
              <div className="project-thumb">
                <Image src={p.image} alt={p.title} width={1200} height={623} sizes="(max-width: 900px) 100vw, 33vw" />
              </div>
              <div className="project-body">
                <div className="project-top">
                  <span className="project-tag">{isEn ? p.tagEn : p.tagUk}</span>
                  <span className="project-year mono">{p.year}</span>
                </div>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-sub">{isEn ? p.subEn : p.subUk}</p>
                <p className="project-desc">{isEn ? p.descEn : p.descUk}</p>
                <dl className="project-case">
                  <dt>{isEn ? "Task" : "Задача"}</dt>
                  <dd>{isEn ? p.taskEn : p.taskUk}</dd>
                  <dt>{isEn ? "Solution" : "Рішення"}</dt>
                  <dd>{isEn ? p.doneEn : p.doneUk}</dd>
                </dl>
                <div className="project-actions">
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M14 3h7v7M21 3l-9 9M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
                    </svg>
                    {t("work.viewBtn")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="work-cta">
          <p>{t("work.ctaText")}</p>
          <a href="#contact" className="btn btn-primary" onClick={scrollToOrderForm}>
            {t("work.ctaBtn")}
          </a>
        </div>
      </div>
    </section>
  );
}
