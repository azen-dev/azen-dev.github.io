"use client";

import { useState, type CSSProperties } from "react";
import { useLang } from "./LangContext";

const KEYS = ["card1", "card2", "card3"] as const;
type Key = (typeof KEYS)[number];

const k = (i: number) => ({ "--k": i }) as CSSProperties;

const svgProps = {
  className: "svc-svg",
  preserveAspectRatio: "xMidYMax meet",
  "aria-hidden": true,
  focusable: false,
} as const;

/* 01 — абстрактний макет сторінки + мобільна версія (адаптивність) */
function WebVisual() {
  return (
    <svg viewBox="0 0 520 290" {...svgProps}>
      <g className="v-main">
        <rect className="k-frame" x="20" y="36" width="370" height="300" rx="10" />
        <line className="k-line" x1="20" y1="64" x2="390" y2="64" />
        <rect className="k-tint" x="38" y="44" width="116" height="12" rx="6" />
        <rect className="k-ink" x="40" y="86" width="30" height="9" rx="2" />
        <rect className="k-soft" x="248" y="88" width="30" height="5" rx="2.5" />
        <rect className="k-soft" x="288" y="88" width="30" height="5" rx="2.5" />
        <rect className="k-soft" x="328" y="88" width="30" height="5" rx="2.5" />
        <rect className="k-ink v-h1" x="40" y="126" width="196" height="16" rx="3" />
        <rect className="k-ink v-h2" x="40" y="150" width="140" height="16" rx="3" />
        <rect className="k-soft" x="40" y="180" width="180" height="5" rx="2.5" />
        <rect className="k-soft" x="40" y="192" width="150" height="5" rx="2.5" />
        <rect className="k-acc v-btn" x="40" y="214" width="88" height="26" rx="6" />
        <rect className="k-tint k-stroke v-img" x="256" y="122" width="116" height="118" rx="8" />
        <rect className="k-frame" x="40" y="262" width="100" height="60" rx="6" />
        <rect className="k-frame" x="156" y="262" width="100" height="60" rx="6" />
        <rect className="k-frame" x="272" y="262" width="100" height="60" rx="6" />
      </g>
      <g className="v-phone">
        <rect className="k-frame k-frame--strong" x="372" y="84" width="118" height="260" rx="18" />
        <rect className="k-soft" x="408" y="95" width="46" height="6" rx="3" />
        <rect className="k-ink" x="388" y="122" width="26" height="7" rx="2" />
        <rect className="k-ink" x="388" y="150" width="84" height="12" rx="3" />
        <rect className="k-ink" x="388" y="168" width="58" height="12" rx="3" />
        <rect className="k-soft" x="388" y="192" width="82" height="5" rx="2.5" />
        <rect className="k-soft" x="388" y="203" width="62" height="5" rx="2.5" />
        <rect className="k-acc v-btn" x="388" y="224" width="58" height="22" rx="5" />
        <rect className="k-tint k-stroke" x="388" y="260" width="84" height="60" rx="6" />
      </g>
    </svg>
  );
}

/* 02 — композиція товарів + CRM-панель зі стовпчиками */
function ShopVisual() {
  const tiles = [
    [20, 36],
    [124, 36],
    [20, 170],
    [124, 170],
  ];
  const bars = [28, 40, 34, 56, 72];
  return (
    <svg viewBox="0 0 360 290" {...svgProps}>
      {tiles.map(([x, y], i) => (
        <g key={i}>
          <rect
            className={`k-frame${i === 1 ? " v-pick" : ""}`}
            x={x}
            y={y}
            width="96"
            height="122"
            rx="8"
          />
          <rect className="k-tint" x={x + 8} y={y + 8} width="80" height="62" rx="5" />
          <rect className="k-ink" x={x + 8} y={y + 80} width="56" height="7" rx="2" />
          <rect className="k-soft" x={x + 8} y={y + 94} width="38" height="5" rx="2.5" />
          <rect className="k-ink" x={x + 8} y={y + 106} width="26" height="6" rx="2" />
        </g>
      ))}
      <g className="v-badge">
        <circle className="k-acc" cx="208" cy="40" r="11" />
        <line className="k-plus" x1="203" y1="40" x2="213" y2="40" />
        <line className="k-plus" x1="208" y1="35" x2="208" y2="45" />
      </g>

      <rect className="k-frame k-frame--strong" x="236" y="36" width="108" height="300" rx="10" />
      <rect className="k-ink" x="250" y="52" width="40" height="7" rx="2" />
      {bars.map((h, i) => (
        <rect
          key={i}
          className={`${i === bars.length - 1 ? "k-acc " : "k-tint k-stroke "}v-bar`}
          style={k(i)}
          x={250 + i * 18}
          y={150 - h}
          width="11"
          height={h}
          rx="2"
        />
      ))}
      <line className="k-line" x1="248" y1="150" x2="334" y2="150" />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle className="k-tint k-stroke" cx="258" cy={180 + i * 30} r="7" />
          <rect className="k-soft" x="272" y={175 + i * 30} width="56" height="5" rx="2.5" />
          <rect className="k-ink" x="272" y={184 + i * 30} width="30" height="5" rx="2.5" />
        </g>
      ))}
    </svg>
  );
}

/* 03 — два екрани застосунку з єдиною основою */
function AppVisual() {
  return (
    <svg viewBox="0 0 360 290" {...svgProps}>
      <g className="v-back">
        <rect className="k-frame" x="190" y="52" width="136" height="300" rx="22" />
        <rect className="k-soft" x="240" y="63" width="36" height="6" rx="3" />
        <rect className="k-ink" x="206" y="92" width="48" height="8" rx="2" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <circle className="k-tint k-stroke" cx="216" cy={134 + i * 38} r="10" />
            <rect className="k-soft" x="234" y={127 + i * 38} width="72" height="6" rx="3" />
            <rect className="k-soft" x="234" y={139 + i * 38} width="46" height="5" rx="2.5" />
          </g>
        ))}
      </g>
      <g className="v-front">
        <rect className="k-frame k-frame--strong" x="60" y="22" width="144" height="330" rx="24" />
        <rect className="k-soft" x="114" y="34" width="36" height="6" rx="3" />
        <rect className="k-ink" x="78" y="62" width="54" height="9" rx="2" />
        <rect className="k-acc v-card" x="78" y="84" width="108" height="60" rx="10" />
        <rect className="k-white" x="90" y="98" width="52" height="7" rx="2" />
        <rect className="k-white k-white--dim" x="90" y="112" width="36" height="5" rx="2.5" />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <circle className="k-tint k-stroke" cx="90" cy={172 + i * 36} r="9" />
            <rect className="k-ink" x="108" y={166 + i * 36} width="58" height="7" rx="2" />
            <rect className="k-soft" x="108" y={178 + i * 36} width="40" height="5" rx="2.5" />
          </g>
        ))}
      </g>
    </svg>
  );
}

const VISUALS: Record<Key, () => JSX.Element> = {
  card1: WebVisual,
  card2: ShopVisual,
  card3: AppVisual,
};

export default function Expertise() {
  const { t } = useLang();
  const [active, setActive] = useState(0);

  return (
    <section id="expertise">
      <div className="container">
        <div className="sec-head reveal">
          <span className="sec-eyebrow sec-eyebrow--bare" aria-hidden="true" />
          <h2 className="sec-title display">{t("expertise.title")}</h2>
          <p className="sec-sub">{t("expertise.subtitle")}</p>
        </div>

        <div className="svc-list reveal" onMouseLeave={() => setActive(0)}>
          {KEYS.map((key, i) => {
            const Visual = VISUALS[key];
            return (
              <article
                key={key}
                className={`svc${active === i ? " is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
              >
                <div className="svc-copy">
                  <h3 className="svc-title">
                    <span className="svc-t1">{t(`expertise.${key}.title1`)}</span>
                    <span className="svc-t2">{t(`expertise.${key}.title2`)}</span>
                  </h3>
                  <p className="svc-desc">
                    {t(`expertise.${key}.line1`)} {t(`expertise.${key}.line2`)}
                  </p>
                </div>
                <div className="svc-visual">
                  <Visual />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
