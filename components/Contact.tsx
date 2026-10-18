"use client";

import { useCallback, useRef } from "react";
import OrderForm from "./OrderForm";
import { useLang } from "./LangContext";

export default function Contact() {
  const { t } = useLang();
  const bandRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const btnInnerRef = useRef<HTMLSpanElement>(null);

  const canHover = useCallback(
    () => typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches,
    []
  );
  const reduceMotion = useCallback(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const handleBandMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover() || reduceMotion()) return;
    const band = bandRef.current;
    if (!band) return;
    const rect = band.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    band.style.setProperty("--gx", `${x}%`);
    band.style.setProperty("--gy", `${y}%`);
  };

  const handleBtnMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!canHover() || reduceMotion()) return;
    const btn = btnRef.current;
    const inner = btnInnerRef.current;
    if (!btn || !inner) return;
    const rect = btn.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const strength = 0.35;
    const maxOffset = 16;
    const x = Math.max(-maxOffset, Math.min(maxOffset, relX * strength));
    const y = Math.max(-maxOffset, Math.min(maxOffset, relY * strength));
    inner.style.transition = "transform 0.1s ease-out";
    inner.style.transform = `translate(${x}px, ${y}px)`;
    btn.style.transition = "transform 0.15s ease-out";
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleBtnLeave = () => {
    const btn = btnRef.current;
    const inner = btnInnerRef.current;
    if (!btn || !inner) return;
    inner.style.transition = "transform 0.6s cubic-bezier(.2,1.4,.4,1)";
    inner.style.transform = "translate(0px, 0px)";
    btn.style.transition = "transform 0.6s cubic-bezier(.2,1.4,.4,1)";
    btn.style.transform = "translate(0px, 0px)";
  };

  return (
    <section id="contact" className="no-pad">
      <OrderForm />
      <div className="cta-band" ref={bandRef} onMouseMove={handleBandMove}>
        <div className="cta-glow" aria-hidden="true" />
        <svg className="cta-signal" viewBox="0 0 600 600" aria-hidden="true" focusable="false">
          {[120, 200, 280, 360, 440, 520].map((r) => (
            <circle key={r} cx="600" cy="600" r={r} />
          ))}
        </svg>
        <div className="cta-band-inner">
          <div className="cta-head reveal">
            <span className="cta-eyebrow mono">{t("contact.eyebrow")}</span>
            <h2 className="display cta-heading">
              <span className="cta-line">{t("contact.heading1")}</span>
              <span className="cta-line cta-line-accent">{t("contact.heading2")}</span>
            </h2>
          </div>

          <div className="cta-foot reveal">
            <p className="cta-desc">{t("contact.desc")}</p>
            <a
              href="mailto:azen-dev@proton.me"
              className="btn-magnetic"
              ref={btnRef}
              onMouseMove={handleBtnMove}
              onMouseLeave={handleBtnLeave}
            >
              <span className="btn-magnetic-inner" ref={btnInnerRef}>
                {t("contact.emailBtn")}
              </span>
            </a>
            <ul className="cta-links">
              <li>
                <a href="https://www.instagram.com/azen.dev" target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://github.com/azen-dev" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
