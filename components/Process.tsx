"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { useLang } from "./LangContext";

const STEPS = ["step1", "step2", "step3", "step4", "step5"];

export default function Process() {
  const { t } = useLang();
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);

  /* Кожен етап «прокреслюється» один раз, коли потрапляє у видиму область. */
  useEffect(() => {
    const steps = stepRefs.current.filter(Boolean) as HTMLLIElement[];
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      steps.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -8% 0px" }
    );

    steps.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process">
      <div className="container">
        <div className="sec-head process-head reveal">
          <span className="sec-eyebrow mono">{t("process.eyebrow")}</span>
          <h2 className="sec-title display">{t("process.title")}</h2>
          <p className="sec-sub">{t("process.subtitle")}</p>
        </div>

        <ol className="flow">
          {STEPS.map((key, i) => {
            const final = i === STEPS.length - 1;
            return (
              <li
                key={key}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                className={`flow-step${final ? " is-final" : ""}`}
                style={{ "--i": i } as CSSProperties}
              >
                <span className="flow-riser" aria-hidden="true" />
                <span className="flow-line" aria-hidden="true" />
                <span className="flow-node" aria-hidden="true" />

                {final && (
                  <svg
                    className="flow-signal"
                    viewBox="0 0 240 240"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle cx="240" cy="240" r="60" />
                    <circle cx="240" cy="240" r="110" />
                    <circle cx="240" cy="240" r="160" />
                    <circle cx="240" cy="240" r="210" />
                  </svg>
                )}

                <div className="flow-inner">
                  <span className="flow-num display" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flow-body">
                    <h3>{t(`process.${key}.title`)}</h3>
                    <p>{t(`process.${key}.desc`)}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
