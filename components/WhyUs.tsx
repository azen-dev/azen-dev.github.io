"use client";

import type { CSSProperties, MouseEvent } from "react";
import { useLang } from "./LangContext";

const KEYS = ["card1", "card2", "card3", "card4"] as const;
type CardKey = (typeof KEYS)[number];

const k = (i: number) => ({ "--k": i }) as CSSProperties;

/* Мінімалістичні лінійні діаграми — по одній на кожну перевагу. */
function Diagram({ id }: { id: CardKey }) {
  const common = {
    viewBox: "0 0 320 48",
    className: "why-dia",
    "aria-hidden": true,
    focusable: false,
  } as const;

  switch (id) {
    /* Прозорі умови: лінійка від старту до фінішу з зафіксованими межами */
    case "card1":
      return (
        <svg {...common}>
          <line className="d-base" x1="2" y1="24" x2="318" y2="24" />
          {Array.from({ length: 17 }, (_, i) => {
            const x = 2 + i * (316 / 16);
            const edge = i === 0 || i === 16;
            return (
              <line
                key={i}
                className="d-tick"
                x1={x}
                x2={x}
                y1={edge ? 10 : 19}
                y2={edge ? 38 : 29}
              />
            );
          })}
          <line className="d-draw" x1="2" y1="24" x2="318" y2="24" pathLength={1} />
          <circle className="d-dot" cx="2" cy="24" r="4" />
          <circle className="d-end" cx="318" cy="24" r="4" />
        </svg>
      );

    /* Особистий підхід: пряма лінія між двома, без проміжних ланок */
    case "card2":
      return (
        <svg {...common}>
          <line className="d-base" x1="24" y1="24" x2="296" y2="24" />
          <circle className="d-ring" cx="12" cy="24" r="9" />
          <circle className="d-ring d-ring--hi" cx="308" cy="24" r="9" />
          <circle className="d-trav" cx="24" cy="24" r="3.5" />
        </svg>
      );

    /* Підтримка після запуску: лінія триває і після позначки запуску */
    case "card3":
      return (
        <svg {...common}>
          <line className="d-base" x1="2" y1="24" x2="106" y2="24" />
          <line className="d-marker" x1="112" y1="8" x2="112" y2="40" />
          {Array.from({ length: 9 }, (_, i) => (
            <circle
              key={i}
              className="d-after"
              style={k(i)}
              cx={134 + i * 22}
              cy="24"
              r="2.6"
            />
          ))}
        </svg>
      );

    /* Швидкий старт: кілька днів — і запуск роботи */
    case "card4":
    default:
      return (
        <svg {...common}>
          <line className="d-base" x1="2" y1="24" x2="140" y2="24" />
          {[2, 40, 78, 116].map((x, i) => (
            <line
              key={x}
              className="d-tick d-tick--day"
              style={k(i)}
              x1={x}
              x2={x}
              y1="14"
              y2="34"
            />
          ))}
          <polygon className="d-play" points="148,12 148,36 172,24" />
          <line className="d-run" x1="184" y1="24" x2="318" y2="24" />
        </svg>
      );
  }
}

export default function WhyUs() {
  const { t } = useLang();

  /* Делікатне світіння, що слідує за курсором (як у нижньому CTA-блоці) */
  const spot = (e: MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="why">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-eyebrow mono">{t("why.eyebrow")}</span>
          <h2 className="sec-title display">{t("why.title")}</h2>
          <p className="sec-sub">{t("why.subtitle")}</p>
        </div>

        <div className="why-grid reveal-stagger">
          {KEYS.map((key, i) => (
            <article
              key={key}
              className={`why-cell why-cell--${i + 1}`}
              onMouseMove={spot}
            >
              <span className="why-num display" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="why-dia-wrap">
                <Diagram id={key} />
              </div>
              <div className="why-copy">
                <h3 className="why-title">{t(`why.${key}.title`)}</h3>
                <p className="why-desc">{t(`why.${key}.desc`)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
