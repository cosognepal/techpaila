import { en, type Messages } from "./messages/en";
import { ne } from "./messages/ne";
import type { Locale } from "./types";

const catalogs: Record<Locale, Messages> = { en, ne };

type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type Leaves<T> = T extends string
  ? never
  : {
      [K in keyof T & string]: T[K] extends string ? K : Join<K, Leaves<T[K]>>;
    }[keyof T & string];

export type MessageKey = Leaves<Messages>;

function getByPath(obj: unknown, path: string): string | undefined {
  const parts = path.split(".");
  let cur: unknown = obj;
  for (const part of parts) {
    if (cur == null || typeof cur !== "object") return undefined;
    cur = (cur as Record<string, unknown>)[part];
  }
  return typeof cur === "string" ? cur : undefined;
}

export function t(
  locale: Locale,
  key: MessageKey,
  vars?: Record<string, string | number>,
): string {
  const raw =
    getByPath(catalogs[locale], key) ?? getByPath(catalogs.en, key) ?? key;
  if (!vars) return raw;
  return Object.entries(vars).reduce(
    (s, [k, v]) => s.replaceAll(`{${k}}`, String(v)),
    raw,
  );
}

export { catalogs };
