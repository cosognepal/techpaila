"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { t as translate, type MessageKey } from "@/lib/i18n";
import {
  DEFAULT_LOCALE,
  isLocale,
  LOCALE_STORAGE_KEY,
  type Locale,
} from "@/lib/i18n/types";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: MessageKey, vars?: Record<string, string | number>) => string;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function applyDocumentLocale(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dataset.locale = locale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
      if (isLocale(stored)) {
        setLocaleState(stored);
        applyDocumentLocale(stored);
      } else {
        applyDocumentLocale(DEFAULT_LOCALE);
      }
    } catch {
      applyDocumentLocale(DEFAULT_LOCALE);
    }
    setReady(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    applyDocumentLocale(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      // ignore quota / private mode
    }
  }, []);

  const t = useCallback(
    (key: MessageKey, vars?: Record<string, string | number>) =>
      translate(locale, key, vars),
    [locale],
  );

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  // Avoid a flash of wrong locale strings after hydration from localStorage.
  if (!ready) {
    return (
      <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
    );
  }

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return ctx;
}
