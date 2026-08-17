"use client";

import { useState } from "react";
import { useLang } from "./LangContext";

interface Job {
  periodEn: string;
  periodUk: string;
  title: string;
  company: string;
  descEn: string;
  descUk: string;
  tech: string[];
}

const JOBS: Job[] = [
  {
    periodEn: "2021 – Present",
    periodUk: "2021 – Зараз",
    title: "Full Stack & Mobile Developer",
    company: "Freelance · Azen.dev",
    descEn:
      "Build websites, online stores, and CRM systems for clients across many industries — including private NDA projects: a mobile app for a dental clinic, and internal CRM/inventory tools (import goods tracking, data-center asset inventory). End-to-end ownership: architecture, API design, UI, deployment, and support.",
    descUk:
      "Розробляю сайти, інтернет-магазини та CRM-системи для клієнтів з різних сфер — включно з приватними NDA-проєктами: мобільний додаток для стоматологічної клініки та внутрішні CRM/системи обліку (товарний облік із-за кордону, інвентаризація дата-центрів). Повна відповідальність: архітектура, API, UI, деплой і підтримка.",
    tech: ["React", "Next.js", "React Native", "Node.js", "NestJS", "TypeScript", "PostgreSQL", "MongoDB", "Docker"],
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang, t } = useLang();
  const isEn = lang === "en";

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title display reveal">{t("experience.title")}</h2>
        <div className="exp-list reveal-stagger">
          {JOBS.map((job, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={job.company} className={`exp-row${isOpen ? " open" : ""}`}>
                <div
                  className="exp-row-head"
                  onClick={() => toggle(i)}
                  role="button"
                  tabIndex={0}
                  aria-expanded={isOpen}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggle(i);
                    }
                  }}
                >
                  <div className="exp-title">
                    {job.title} @ {job.company}
                  </div>
                  <div className="exp-meta">
                    <div className="exp-date">{isEn ? job.periodEn : job.periodUk}</div>
                    <div className="exp-plus">+</div>
                  </div>
                </div>
                <div className="exp-body">
                  <p>{isEn ? job.descEn : job.descUk}</p>
                  <div className="exp-tags">
                    {job.tech.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
