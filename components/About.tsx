"use client";

import { useLang } from "./LangContext";
import { ABOUT_PHOTO, AUTHOR_NAME, TELEGRAM_URL } from "./config";

export default function About() {
  const { lang } = useLang();
  const en = lang === "en";

  return (
    <section id="about">
      <div className="container about-layout">
        <div className="about-photo reveal">
          {ABOUT_PHOTO ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={ABOUT_PHOTO} alt={AUTHOR_NAME} />
          ) : (
            <span className="display" aria-hidden="true">{AUTHOR_NAME.charAt(0)}</span>
          )}
        </div>
        <div className="about-body reveal">
          <h2 className="display">{en ? `Hi, I'm ${AUTHOR_NAME}` : `Привіт, я ${AUTHOR_NAME}`}</h2>
          <p>
            {en
              ? "I'm a web developer. I build websites and online stores on Next.js and React, from page structure to launch and support."
              : "Я веб-розробник. Роблю сайти й інтернет-магазини на Next.js і React: від структури сторінок до запуску й підтримки."}
          </p>
          <p>
            {en
              ? "I work alone, so you talk to the person who writes the code, not to a manager. My clients so far: an industrial automation company, a textile printing studio, and a premium e-commerce concept."
              : "Працюю один, тому ви говорите з тим, хто пише код, а не з менеджером. Мої клієнти: компанія промислової автоматизації, студія друку на текстилі та преміальний e-commerce концепт."}
          </p>
          <p className="about-stack mono">Next.js · React · TypeScript</p>
          <a href={TELEGRAM_URL} target="_blank" rel="noreferrer" className="btn btn-primary">
            {en ? "Message me on Telegram" : "Написати в Telegram"}
          </a>
        </div>
      </div>
    </section>
  );
}
