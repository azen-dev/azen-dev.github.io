"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "./LangContext";

const STEPS = ["step1", "step2", "step3", "step4", "step5"];

export default function Process() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const stepRefs = useRef<Array<HTMLDivElement | null>>([]);
  const tickingRef = useRef(false);

  useEffect(() => {
    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      setActive(STEPS.length - 1);
      setProgress(1);
      return;
    }

    const update = () => {
      tickingRef.current = false;
      const steps = stepRefs.current.filter(Boolean) as HTMLDivElement[];
      if (steps.length === 0) return;

      const refLine = window.innerHeight * 0.42;
      const firstTop = steps[0].getBoundingClientRect().top;
      const lastEl = steps[steps.length - 1];
      const lastRect = lastEl.getBoundingClientRect();
      const totalSpan = lastRect.top + lastRect.height - firstTop;

      let nextActive = 0;
      steps.forEach((el, i) => {
        const top = el.getBoundingClientRect().top;
        if (top <= refLine) nextActive = i;
      });

      const rawProgress = totalSpan > 0 ? (refLine - firstTop) / totalSpan : 0;
      const clamped = Math.min(1, Math.max(0, rawProgress));

      setActive(nextActive);
      setProgress(clamped);
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="process">
      <div className="container process-layout">
        <div className="process-head reveal">
          <span className="process-eyebrow mono">{t("process.eyebrow")}</span>
          <h2 className="process-title display">{t("process.title")}</h2>
          <p className="process-sub">{t("process.subtitle")}</p>

          <div className="process-rail" aria-hidden="true">
            <div className="process-rail-track" />
            <div
              className="process-rail-progress"
              style={{ transform: `scaleY(${progress})` }}
            />
            {STEPS.map((key, i) => (
              <div
                key={key}
                className={`process-rail-node${i === active ? " is-active" : ""}${
                  i < active ? " is-passed" : ""
                }`}
              >
                <span className="process-rail-num mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="process-rail-label">{t(`process.${key}.title`)}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="process-steps">
          {STEPS.map((key, i) => (
            <div
              key={key}
              ref={(el) => {
                stepRefs.current[i] = el;
              }}
              className={`process-step${i === active ? " is-active" : ""}`}
            >
              <span className="process-step-num display" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="process-step-body">
                <h3>{t(`process.${key}.title`)}</h3>
                <p>{t(`process.${key}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
