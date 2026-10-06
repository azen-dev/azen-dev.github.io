"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import { useLang } from "./LangContext";
import { TELEGRAM_URL } from "./config";

const SHOTS = [
  { id: "teg", title: "TEG", host: "teg.kiev.ua", src: "/projects/teg.webp" },
  { id: "estetdruk", title: "eSTetdruk", host: "estetdruk.shop", src: "/projects/estetdruk.webp" },
  { id: "forma", title: "FORMA", host: "next-shop-ih5f.vercel.app", src: "/projects/forma.webp" },
];

export default function Hero() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((a) => (a + 1) % SHOTS.length), 4500);
    return () => clearInterval(id);
  }, [paused]);

  const scrollToOrderForm = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("orderForm")?.scrollIntoView({ behavior: "smooth", block: "center" });
    setTimeout(() => document.getElementById("f-name")?.focus(), 550);
  };

  return (
    <section id="home">
      <div className="container hx">
        <div className="hx-copy">
          <h1 className="hx-title display">{t("hero.title")}</h1>
          <p className="hx-sub">{t("hero.subtitle")}</p>
          <div className="hx-cta">
            <a href="#contact" className="btn btn-primary btn-lg" onClick={scrollToOrderForm}>
              {t("hero.cta")}
            </a>
            <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="btn btn-ghost btn-lg">
              {t("hero.tg")}
            </a>
          </div>
          <ul className="hx-facts">
            {(["1", "2", "3"] as const).map((n) => (
              <li key={n}>
                <strong>{t(`hero.trust${n}n`)}</strong>
                <span>{t(`hero.trust${n}t`)}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="hx-shots"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="hx-browser">
            <div className="hx-bar">
              <i /><i /><i />
              <span className="hx-url mono">{SHOTS[active].host}</span>
            </div>
            <div className="hx-screen">
              {SHOTS.map((s, i) => (
                <Image
                  key={s.id}
                  className={i === active ? "is-on" : ""}
                  src={s.src}
                  alt={i === active ? s.title : ""}
                  width={1200}
                  height={623}
                  priority={i === 0}
                  sizes="(max-width: 900px) 100vw, 560px"
                />
              ))}
            </div>
          </div>
          <div className="hx-tabs" role="group" aria-label="Projects">
            {SHOTS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                className={i === active ? "on" : ""}
                aria-pressed={i === active}
                onClick={() => setActive(i)}
              >
                {s.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
