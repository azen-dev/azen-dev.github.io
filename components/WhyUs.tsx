"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
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
        <path d="M12 2l3 6.5 7 1-5.2 4.9L18 21l-6-3.6L6 21l1.2-6.6L2 9.5l7-1L12 2z" />
      </>
    ),
  },
  {
    key: "card2",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
      </>
    ),
  },
  {
    key: "card3",
    icon: (
      <>
        <path d="M12 2l8 4v6c0 5-3.4 8.4-8 10-4.6-1.6-8-5-8-10V6l8-4z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    key: "card4",
    icon: (
      <>
        <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" />
      </>
    ),
  },
];

interface BarRect {
  top: number;
  height: number;
}

export default function WhyUs() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [bar, setBar] = useState<BarRect>({ top: 0, height: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const list = listRef.current;
      const row = rowRefs.current[active];
      if (!list || !row) return;
      const listRect = list.getBoundingClientRect();
      const rowRect = row.getBoundingClientRect();
      setBar({ top: rowRect.top - listRect.top, height: rowRect.height });
    };

    measure();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measure, 100);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [active]);

  return (
    <section id="why">
      <div className="container why-layout">
        <div className="why-head reveal">
          <span className="why-eyebrow mono">{t("why.eyebrow")}</span>
          <h2 className="why-title display">{t("why.title")}</h2>
          <p className="why-sub">{t("why.subtitle")}</p>
        </div>

        <div className="why-index reveal" ref={listRef}>
          <div
            className="why-bar"
            style={{ transform: `translateY(${bar.top}px)`, height: `${bar.height}px` }}
            aria-hidden="true"
          />
          {CARDS.map((c, i) => (
            <div
              key={c.key}
              ref={(el) => {
                rowRefs.current[i] = el;
              }}
              className={`why-row${active === i ? " is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setActive(i);
                }
              }}
              tabIndex={0}
              role="button"
              aria-pressed={active === i}
            >
              <span className="why-row-num mono">{String(i + 1).padStart(2, "0")}</span>
              <div className="why-row-body">
                <h3 className="why-row-title">{t(`why.${c.key}.title`)}</h3>
                <p className="why-row-desc">{t(`why.${c.key}.desc`)}</p>
              </div>
              <svg
                className="why-row-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {c.icon}
              </svg>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
