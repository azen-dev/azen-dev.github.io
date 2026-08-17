"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { useLang } from "./LangContext";

const TYPE_KEYS = ["form.type1", "form.type2", "form.type3", "form.type4", "form.type5"];
const BUDGET_KEYS = ["form.budget1", "form.budget2", "form.budget3", "form.budget4", "form.budget5"];

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "sent";

export default function OrderForm() {
  const { lang, t } = useLang();
  const [name, setName] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [typeIndex, setTypeIndex] = useState<number>(0);
  const [budgetIndex, setBudgetIndex] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<Status>("idle");

  const buildMailtoFallback = (typeText: string, budgetText: string) => {
    const isEn = lang === "en";
    const subject = isEn
      ? `Project request from ${name || "a client"}`
      : `Заявка на проєкт від ${name || "клієнта"}`;
    const bodyLines = isEn
      ? [
          `Name: ${name}`,
          `Contact: ${contact}`,
          `Project type: ${typeText}`,
          `Budget: ${budgetText || "not specified"}`,
          "",
          "Project description:",
          message || "—",
        ]
      : [
          `Ім'я: ${name}`,
          `Контакт: ${contact}`,
          `Тип проєкту: ${typeText}`,
          `Бюджет: ${budgetText || "не вказано"}`,
          "",
          "Опис проєкту:",
          message || "—",
        ];
    return `mailto:azen.dev@proton.me?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const typeText = t(TYPE_KEYS[typeIndex]);
    const budgetText = budgetIndex !== null ? t(BUDGET_KEYS[budgetIndex]) : "";

    setStatus("sending");

    // EmailJS isn't configured yet (no .env.local) — go straight to the
    // visitor's own mail client instead of losing the submission.
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      window.location.href = buildMailtoFallback(typeText, budgetText);
      setStatus("sent");
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: name,
          reply_to: contact,
          project_type: typeText,
          budget: budgetText || (lang === "en" ? "not specified" : "не вказано"),
          message: message || "—",
          lang,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("sent");
    } catch (err) {
      console.error("Failed to send contact form via EmailJS:", err);
      // Send failed (bad template, quota, offline) — same graceful fallback.
      window.location.href = buildMailtoFallback(typeText, budgetText);
      setStatus("sent");
    }
  };

  return (
    <div className="order-wrap">
      <div className="order-head reveal">
        <h2 className="display">{t("order.title")}</h2>
        <p>{t("order.desc")}</p>
      </div>

      <form className="order-form reveal" id="orderForm" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="f-name">{t("form.nameLabel")}</label>
            <input
              id="f-name"
              type="text"
              placeholder={t("form.namePh")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="f-contact">{t("form.contactLabel")}</label>
            <input
              id="f-contact"
              type="text"
              placeholder={t("form.contactPh")}
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-field full">
            <label htmlFor="f-type">{t("form.typeLabel")}</label>
            <select
              id="f-type"
              value={typeIndex}
              onChange={(e) => setTypeIndex(Number(e.target.value))}
            >
              {TYPE_KEYS.map((k, i) => (
                <option key={k} value={i}>
                  {t(k)}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-field full">
            <label>{t("form.budgetLabel")}</label>
            <div className="budget-pills" role="group" aria-label={t("form.budgetLabel")}>
              {BUDGET_KEYS.map((k, i) => (
                <div
                  key={k}
                  className={`budget-pill${budgetIndex === i ? " active" : ""}`}
                  onClick={() => setBudgetIndex(i)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={budgetIndex === i}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setBudgetIndex(i);
                    }
                  }}
                >
                  {t(k)}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-field full">
            <label htmlFor="f-message">{t("form.messageLabel")}</label>
            <textarea
              id="f-message"
              placeholder={t("form.messagePh")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className="form-submit-row">
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? t("form.sending") : t("form.submitBtn")}
          </button>
          <span className="form-note">{t("form.note")}</span>
        </div>

        <div className={`form-success${status === "sent" ? " show" : ""}`}>
          <div className="check">✓</div>
          <span>{t("form.successMsg")}</span>
        </div>
      </form>
    </div>
  );
}
