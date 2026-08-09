import placeNames from "@/data/place-names.json";
import type { Locale } from "./types";

const LEVEL_NE: Record<string, string> = {
  Gaunpalika: "गाउँपालिका",
  gaupaika: "गाउँपालिका",
  Nagarpalika: "नगरपालिका",
  Upamahanagarpalika: "उपमहानगरपालिका",
  Mahanagarpalika: "महानगरपालिका",
  "maha Nagarpalika": "महानगरपालिका",
};

const provincesEn = placeNames.provinces.en as Record<string, string>;
const provincesNe = placeNames.provinces.ne as Record<string, string>;
const districtsEn = placeNames.districts.en as Record<string, string>;
const districtsNe = placeNames.districts.ne as Record<string, string>;
const municipalitiesNe = placeNames.municipalities.ne as Record<
  string,
  string
>;

export function provinceLabel(
  locale: Locale,
  provinceId: number,
  fallbackName?: string,
): string {
  const key = String(provinceId);
  const localized =
    locale === "ne" ? provincesNe[key] : provincesEn[key];
  if (localized) return localized;
  if (locale === "en" && fallbackName) {
    return fallbackName.endsWith("Province")
      ? fallbackName
      : `${fallbackName === "Madesh" ? "Madhesh" : fallbackName} Province`;
  }
  return fallbackName ?? key;
}

export function districtLabel(locale: Locale, districtKey: string): string {
  const key = districtKey.toUpperCase();
  if (locale === "ne") {
    return districtsNe[key] ?? titleCaseDistrict(districtKey);
  }
  return districtsEn[key] ?? titleCaseDistrict(districtKey);
}

export function municipalityLabel(
  locale: Locale,
  municipalityId: string,
  englishName: string,
): string {
  if (locale !== "ne") return englishName;
  return municipalitiesNe[municipalityId] ?? englishName;
}

export function municipalityLevelLabel(
  locale: Locale,
  level: string | null | undefined,
): string {
  if (!level) return "";
  if (locale !== "ne") return level;
  return LEVEL_NE[level] ?? level;
}

function titleCaseDistrict(name: string): string {
  return name
    .split(/[-\s]/)
    .map((part) => part.charAt(0) + part.slice(1).toLowerCase())
    .join("-");
}
