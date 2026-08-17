"use client";

import { useState, type CSSProperties } from "react";
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
  tech: string[];
  accent: string;
  live: string;
  repo?: string;
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
      "Corporate website for Technical Engineering Group — custom industrial equipment, control cabinets, and automation for the food, pharma, and logistics sectors. Bilingual (UA/EN/RU) Next.js frontend on a NestJS + PostgreSQL backend, deployed on a self-managed VPS behind Nginx and Docker.",
    descUk:
      "Корпоративний сайт Technical Engineering Group — індивідуальне промислове обладнання, шафи керування та автоматизація для харчової, фармацевтичної й логістичної галузей. Багатомовний (UA/EN/RU) фронтенд на Next.js і бекенд на NestJS + PostgreSQL, розгорнуто на власному VPS через Nginx і Docker.",
    tech: ["Next.js", "next-intl", "NestJS", "PostgreSQL", "Docker", "Nginx"],
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
      "Online store for a textile printing and embroidery studio — catalog with wholesale pricing tiers, promotions, and order flow. React Query + Zustand on the frontend, NestJS + PostgreSQL API on the backend.",
    descUk:
      "Інтернет-магазин студії друку на текстилі та вишивки — каталог з оптовими цінами від певної кількості, акціями та оформленням замовлення. Frontend на React Query + Zustand, API на NestJS + PostgreSQL.",
    tech: ["Next.js", "React Query", "Zustand", "NestJS", "PostgreSQL"],
    accent: "#FB923C",
    live: "https://estetdruk.shop/",
    image: "/projects/estetdruk.webp",
  },
  {
    id: "forma",
    title: "FORMA",
    subEn: "Luxury E-commerce Platform",
    subUk: "Люкс E-commerce платформа",
    tagEn: "Frontend",
    tagUk: "Frontend",
    year: "2024",
    descEn:
      "Concept storefront for premium lifestyle goods — custom design system and global state via Redux Toolkit. Open-source frontend, built to explore a more editorial, restrained visual style than a typical shop template.",
    descUk:
      "Концептуальний магазин преміальних товарів для дому — власна дизайн-система і глобальний стан через Redux Toolkit. Відкритий вихідний код фронтенду, зроблений щоб дослідити більш редакційний, стриманий візуальний стиль замість типового шаблону магазину.",
    tech: ["Next.js 15", "Redux Toolkit", "TypeScript", "Tailwind", "Radix UI"],
    accent: "#6EE7B7",
    live: "https://next-shop-ih5f.vercel.app/",
    repo: "https://github.com/azen-dev/next-shop",
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
  const [featuredId, setFeaturedId] = useState<string>(PROJECTS[0].id);
  const featured = PROJECTS.find((p) => p.id === featuredId) ?? PROJECTS[0];

  return (
    <section id="work">
      <div className="container">
        <div className="work-hero">
          <div>
            <h2 className="display">
              {t("work.heading1")}
              <br />
              {t("work.heading2")}
            </h2>
            <p>{t("work.desc")}</p>
            <a href="https://github.com/azen-dev" target="_blank" rel="noreferrer" className="view-all-link">
              {t("work.viewAllBtn")}
            </a>
          </div>
          <div className="work-feature">
            <div className="fp-label mono">{t("work.featuredLabel")}</div>
            <h4>{featured.title}</h4>
            <a href={featured.live} target="_blank" rel="noreferrer" className="btn btn-primary">
              {t("work.viewBtn")}
            </a>
          </div>
        </div>

        <div className="project-list reveal-stagger">
          {PROJECTS.map((p) => (
            <div
              className="project-card"
              key={p.id}
              tabIndex={0}
              onMouseEnter={() => setFeaturedId(p.id)}
              onFocus={() => setFeaturedId(p.id)}
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
                <div className="project-tech">
                  {p.tech.map((techName) => (
                    <span key={techName}>{techName}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href={p.live} target="_blank" rel="noreferrer" className="project-link">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M14 3h7v7M21 3l-9 9M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6" />
                    </svg>
                    {isEn ? "Live" : "Сайт"}
                  </a>
                  {p.repo && (
                    <a href={p.repo} target="_blank" rel="noreferrer" className="project-link">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.4 9.4 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
                      </svg>
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
