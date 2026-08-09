export type Locale = "en" | "ne";

export const LOCALES: Locale[] = ["en", "ne"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "techpaila-locale";

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "ne";
}
