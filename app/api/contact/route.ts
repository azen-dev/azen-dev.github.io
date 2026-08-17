import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactPayload {
  name: string;
  contact: string;
  type: string;
  budget: string;
  message: string;
  lang: "uk" | "en";
}

function isValidPayload(data: unknown): data is ContactPayload {
  if (typeof data !== "object" || data === null) return false;
  const d = data as Record<string, unknown>;
  return typeof d.name === "string" && d.name.trim().length > 0 &&
    typeof d.contact === "string" && d.contact.trim().length > 0;
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Name and contact fields are required" },
      { status: 400 }
    );
  }

  const { name, contact, type, budget, message, lang } = body;
  const isEn = lang === "en";

  const {
    SMTP_HOST,
    SMTP_PORT,
    SMTP_USER,
    SMTP_PASS,
    CONTACT_TO_EMAIL,
  } = process.env;

  // If SMTP isn't configured yet, fail gracefully so the client can
  // fall back to a mailto: link instead of showing a raw 500 error.
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO_EMAIL) {
    return NextResponse.json(
      { error: "Email service is not configured", fallback: true },
      { status: 503 }
    );
  }

  const subject = isEn
    ? `Project request from ${name}`
    : `Заявка на проєкт від ${name}`;

  const textBody = isEn
    ? [
        `Name: ${name}`,
        `Contact: ${contact}`,
        `Project type: ${type}`,
        `Budget: ${budget || "not specified"}`,
        "",
        "Project description:",
        message || "—",
      ].join("\n")
    : [
        `Ім'я: ${name}`,
        `Контакт: ${contact}`,
        `Тип проєкту: ${type}`,
        `Бюджет: ${budget || "не вказано"}`,
        "",
        "Опис проєкту:",
        message || "—",
      ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Azen.dev site" <${SMTP_USER}>`,
      to: CONTACT_TO_EMAIL,
      replyTo: contact.includes("@") ? contact : undefined,
      subject,
      text: textBody,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Failed to send contact email:", err);
    return NextResponse.json(
      { error: "Failed to send email", fallback: true },
      { status: 500 }
    );
  }
}
