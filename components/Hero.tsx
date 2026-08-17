"use client";

import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import Image from "next/image";
import { useLang } from "./LangContext";

interface Tech {
  name: string;
  icon: ReactNode;
}

const TECHS: Tech[] = [
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <circle cx="12" cy="12" r="2.4" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <circle cx="12" cy="12" r="9" />
        <path d="M9 8l6 4-6 4V8z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" />
      </svg>
    ),
  },
  {
    name: "PostgreSQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <ellipse cx="12" cy="6" rx="8" ry="3.2" />
        <path d="M4 6v6c0 1.77 3.58 3.2 8 3.2s8-1.43 8-3.2V6" />
        <path d="M4 12v6c0 1.77 3.58 3.2 8 3.2s8-1.43 8-3.2v-6" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M12 3c3 4 5 7.5 5 10.5A5 5 0 0 1 7 13.5C7 10.5 9 7 12 3z" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.6">
        <path d="M3 8c1.5-3 4-3 6 0s4.5 3 6 0M3 15c1.5-3 4-3 6 0s4.5 3 6 0" />
      </svg>
    ),
  },
];

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

        <div className="as-featured">
          <p>{t("hero.techLabel")}</p>
          <div className="badge-row">
            <div className="orbit-dot" />
            {TECHS.map((tech) => (
              <div className="badge" key={tech.name}>
                {tech.icon}
                {tech.name}
              </div>
            ))}
          </div>
        </div>

        <button type="button" className="scroll-arrow" onClick={scrollToExpertise} aria-label="Scroll to next section">
          ↓
        </button>
      </div>
    </section>
  );
}
