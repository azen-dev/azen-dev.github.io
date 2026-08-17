"use client";

import { useLang } from "./LangContext";

export default function Footer() {
  const { t } = useLang();
  return <footer className="mono">{t("footer.text")}</footer>;
}
