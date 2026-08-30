"use client";

import { useEffect, useRef, type MouseEvent } from "react";
import Image from "next/image";
import { useLang } from "./LangContext";

function CubeFaces() {
  return (
    <>
      <div className="face front" />
      <div className="face back" />
      <div className="face right" />
      <div className="face left" />
      <div className="face top" />
      <div className="face bottom" />
    </>
  );
}

export default function Hero() {
  const sceneRef = useRef<HTMLDivElement>(null);
  const { t } = useLang();

  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;
    const onMove = (e: globalThis.MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 32;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      scene.style.transform = `rotate(${x * 0.18}deg) translate(${x * 0.5}px, ${y * 0.35}px) scale(1.02)`;
    };
    const onLeave = () => {
      scene.style.transform = "rotate(0deg) translate(0,0) scale(1)";
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const scrollToExpertise = () => {
    document.getElementById("expertise")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToOrderForm = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formEl = document.getElementById("orderForm");
    if (formEl) {
      formEl.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => document.getElementById("f-name")?.focus(), 550);
    }
  };

  return (
    <section id="home">
      <div className="container hero-inner">
        <div className="scene-entrance">
          <div className="scene" ref={sceneRef}>
            <div className="scene-glow" />
            <div className="particle p1" />
            <div className="particle p2" />
            <div className="particle p3" />
            <div className="particle p4" />
            <div className="particle p5" />
            <div className="cube-wrap a">
              <div className="cube3d cube-a">
                <CubeFaces />
              </div>
            </div>
            <div className="cube-wrap b">
              <div className="cube3d cube-b">
                <CubeFaces />
              </div>
            </div>
            <div className="scene-shadow" />
          </div>
        </div>

        <div className="hero-title-wrap">
          <h1 className="hero-title display">
            <span className="letter-a-wrap">
              A
              <Image
                className="a-swoosh"
                src="/azen-swoosh.png"
                alt=""
                width={799}
                height={205}
                priority
              />
            </span>
            zen<span className="brand-dot">.</span>dev
          </h1>
        </div>
        <p className="hero-sub">{t("hero.subtitle")}</p>

        <div className="hero-cta">
          <a href="#contact" className="btn btn-primary btn-lg" onClick={scrollToOrderForm}>
            {t("hero.cta")}
          </a>
        </div>

        <div className="hero-trust">
          <div className="hero-trust-item">
            <strong>{t("hero.trust1n")}</strong>
            <span>{t("hero.trust1t")}</span>
          </div>
          <div className="hero-trust-sep" />
          <div className="hero-trust-item">
            <strong>{t("hero.trust2n")}</strong>
            <span>{t("hero.trust2t")}</span>
          </div>
          <div className="hero-trust-sep" />
          <div className="hero-trust-item">
            <strong>{t("hero.trust3n")}</strong>
            <span>{t("hero.trust3t")}</span>
          </div>
        </div>

        <button type="button" className="scroll-arrow" onClick={scrollToExpertise} aria-label="Scroll to next section">
          ↓
        </button>
      </div>
    </section>
  );
}
