"use client";

import { useEffect, useState } from "react";
import { useLang, type Lang } from "./LangContext";

interface NavLink {
  href: string;
  num: string;
  key: string;
}

const LINKS: NavLink[] = [
  { href: "#home", num: "01", key: "nav.home" },
  { href: "#expertise", num: "02", key: "nav.services" },
  { href: "#work", num: "03", key: "nav.work" },
  { href: "#experience", num: "04", key: "nav.experience" },
  { href: "#contact", num: "05", key: "nav.order" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [active, setActive] = useState<string>("home");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = document.querySelectorAll<HTMLElement>("section[id]");
      let current = "home";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 160) current = sec.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLangChange = (next: Lang) => setLang(next);

  const handleMobileLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav id="mainNav" className={scrolled ? "scrolled" : ""}>
        <div className="brand">
          <span className="brand-text">
            Azen<span className="brand-dot">.</span>dev
          </span>
        </div>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className={active === l.href.slice(1) ? "active" : ""}>
              <sup>{l.num}</sup>
              <span>{t(l.key)}</span>
            </a>
          ))}
        </div>
        <div className="lang-switch" role="group" aria-label="Language switch">
          <button
            type="button"
            className={`lang-btn${lang === "uk" ? " active" : ""}`}
            onClick={() => handleLangChange("uk")}
            aria-pressed={lang === "uk"}
          >
            UA
          </button>
          <button
            type="button"
            className={`lang-btn${lang === "en" ? " active" : ""}`}
            onClick={() => handleLangChange("en")}
            aria-pressed={lang === "en"}
          >
            EN
          </button>
        </div>
        <button
          type="button"
          className={`burger${menuOpen ? " open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobileMenu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <div className="pulse-dot" aria-hidden="true">
          <span />
        </div>
      </nav>

      <div id="mobileMenu" className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={handleMobileLinkClick}>
            <span>{t(l.key)}</span>
          </a>
        ))}
      </div>
    </>
  );
}
