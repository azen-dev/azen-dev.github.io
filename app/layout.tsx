import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://azen-dev.github.io"),
  title: "Azen — Web Developer",
  description:
    "Розробка сайтів, інтернет-магазинів, CRM та мобільних додатків. 5+ років досвіду.",
  openGraph: {
    title: "Azen — Web Developer",
    description:
      "Розробка сайтів, інтернет-магазинів, CRM та мобільних додатків. 5+ років досвіду.",
    url: "https://azen-dev.github.io",
    siteName: "Azen.dev",
    locale: "uk_UA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Azen — Web Developer",
    description:
      "Розробка сайтів, інтернет-магазинів, CRM та мобільних додатків. 5+ років досвіду.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="uk" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
