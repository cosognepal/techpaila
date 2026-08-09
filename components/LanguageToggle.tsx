"use client";

import { useLocale } from "@/hooks/useLocale";
import type { Locale } from "@/lib/i18n/types";

export default function LanguageToggle() {
  const { locale, setLocale, t } = useLocale();

  const select = (next: Locale) => {
    if (next !== locale) setLocale(next);
  };

  return (
    <div
      className="language-toggle"
      role="group"
      aria-label={t("nav.language")}
    >
      <button
        type="button"
        className={`language-toggle-btn${locale === "en" ? " is-active" : ""}`}
        aria-pressed={locale === "en"}
        onClick={() => select("en")}
      >
        {t("nav.english")}
      </button>
      <button
        type="button"
        className={`language-toggle-btn${locale === "ne" ? " is-active" : ""}`}
        aria-pressed={locale === "ne"}
        onClick={() => select("ne")}
      >
        {t("nav.nepali")}
      </button>
    </div>
  );
}
