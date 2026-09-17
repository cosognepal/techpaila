import districts from "@/data/districts.json";
import placeNames from "@/data/place-names.json";
import { PROGRAM_OPTIONS, type ProgramSlug } from "@/data/schools";

const districtsNe = placeNames.districts.ne as Record<string, string>;
const districtsEnOverrides = placeNames.districts.en as Record<string, string>;

// Map<lowercased_alias, DISTRICT_KEY (uppercase)>
export const districtAliases: Map<string, string> = new Map();

// Map<DISTRICT_KEY, provinceId>
export const districtToProvince: Map<string, number> = new Map();

for (const d of districts) {
  const key = d.DISTRICT; // e.g. "JHAPA"
  districtToProvince.set(key, d.PROVINCE);

  // Lowercase uppercase key
  districtAliases.set(key.toLowerCase(), key);

  // Title-case variant: "Jhapa"
  const titleCase = key
    .split(/[\s-]/)
    .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
    .join(" ");
  districtAliases.set(titleCase.toLowerCase(), key);

  // EN display override if present (e.g. "Dhanusha" for DHANUSA)
  if (districtsEnOverrides[key]) {
    districtAliases.set(districtsEnOverrides[key].toLowerCase(), key);
  }

  // Nepali name
  if (districtsNe[key]) {
    districtAliases.set(districtsNe[key], key);
  }
}

// Program aliases
const PROGRAM_NE: Record<string, string> = {
  agriculture: "कृषि प्राविधिक",
  computer_engineering: "कम्प्युटर इन्जिनियरिङ",
  civil_engineering: "सिभिल इन्जिनियरिङ",
  electrical_engineering: "इलेक्ट्रिकल इन्जिनियरिङ",
  animal_science: "पशु विज्ञान",
  plant_science: "वनस्पति विज्ञान",
  music: "संगीत",
};

// Map<lowercased_alias, ProgramSlug>
export const programAliases: Map<string, ProgramSlug> = new Map();

for (const opt of PROGRAM_OPTIONS) {
  // slug itself: "computer_engineering"
  programAliases.set(opt.value, opt.value);
  // EN label lowercase: "computer engineering"
  programAliases.set(opt.label.toLowerCase(), opt.value);
  // NE label
  const ne = PROGRAM_NE[opt.value];
  if (ne) programAliases.set(ne, opt.value);
}

// Pre-sorted alias lists (longest first) for substring matching
export const districtAliasList: [string, string][] = [...districtAliases.entries()].sort(
  (a, b) => b[0].length - a[0].length,
);

export const programAliasList: [string, ProgramSlug][] = [...programAliases.entries()].sort(
  (a, b) => b[0].length - a[0].length,
);
