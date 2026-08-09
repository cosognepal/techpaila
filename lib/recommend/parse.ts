import type { ProgramSlug } from "@/data/schools";
import { districtAliasList, programAliasList } from "./constants";

export type ParseResult = {
  district: string | null; // DISTRICT key (uppercase) or null
  program: ProgramSlug | null;
};

export function parseQuery(text: string): ParseResult {
  const trimmed = text.trim();
  if (!trimmed) return { district: null, program: null };

  const lower = trimmed.toLowerCase();

  let district: string | null = null;
  for (const [alias, key] of districtAliasList) {
    // For Devanagari aliases (not lowercased latin), check original text
    const isDevanagari = /[\u0900-\u097F]/.test(alias);
    const haystack = isDevanagari ? trimmed : lower;
    if (haystack.includes(alias)) {
      district = key;
      break;
    }
  }

  let program: ProgramSlug | null = null;
  for (const [alias, slug] of programAliasList) {
    const isDevanagari = /[\u0900-\u097F]/.test(alias);
    const haystack = isDevanagari ? trimmed : lower;
    if (haystack.includes(alias)) {
      program = slug;
      break;
    }
  }

  return { district, program };
}
