"use client";

import type { ReactNode } from "react";
import { useLang } from "./LangContext";

interface Card {
  key: string;
  icon: ReactNode;
}

const CARDS: Card[] = [
  {
    key: "card1",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </>
    ),
  },
  {
    key: "card2",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 15 0 0 1 0 18M12 3a9 15 0 0 0 0 18M3 12h18" />
      </>
    ),
  },
  {
    key: "card3",
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
  },
];

export default function Expertise() {
  const { t } = useLang();

  return (
    <section id="expertise">
      <div className="container">
        <h2 className="section-title display reveal">{t("expertise.title")}</h2>
        <div className="expertise-grid reveal-stagger">
          {CARDS.map((c) => (
            <div className="expertise-card" key={c.key}>
              <svg
                className="card-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                {c.icon}
              </svg>
              <h3>
                <u>{t(`expertise.${c.key}.title1`)}</u>
              </h3>
              <h3 className="line2">{t(`expertise.${c.key}.title2`)}</h3>
              <p className="card-desc">
                {t(`expertise.${c.key}.line1`)} {t(`expertise.${c.key}.line2`)}
              </p>
            </div>
          ))}
        </div>

        <div className="code-deco">
          <span className="cmt">{t("expertise.stackComment")}</span>
          <br />
          <span className="tag">const</span> stack = {"{"}
          <br />
          &nbsp;&nbsp;frontend: [<span className="str">&apos;React&apos;</span>,{" "}
          <span className="str">&apos;Next.js&apos;</span>,{" "}
          <span className="str">&apos;Tailwind&apos;</span>],
          <br />
          &nbsp;&nbsp;backend: [<span className="str">&apos;Node.js&apos;</span>,{" "}
          <span className="str">&apos;Nest.js&apos;</span>],
          <br />
          &nbsp;&nbsp;database: [<span className="str">&apos;PostgreSQL&apos;</span>,{" "}
          <span className="str">&apos;MySQL&apos;</span>,{" "}
          <span className="str">&apos;MongoDB&apos;</span>],
          <br />
          &nbsp;&nbsp;mobile: [<span className="str">&apos;React Native&apos;</span>]
          <br />
          {"}"};
        </div>
      </div>
    </section>
  );
}
