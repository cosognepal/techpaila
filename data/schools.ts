import schoolsData from "./schools.json";

export type ProgramSlug =
  | "agriculture"
  | "computer_engineering"
  | "civil_engineering"
  | "electrical_engineering"
  | "animal_science"
  | "plant_science"
  | "music";

export const PROGRAM_OPTIONS: { value: ProgramSlug; label: string }[] = [
  { value: "agriculture", label: "Agriculture" },
  { value: "computer_engineering", label: "Computer Engineering" },
  { value: "civil_engineering", label: "Civil Engineering" },
  { value: "electrical_engineering", label: "Electrical Engineering" },
  { value: "animal_science", label: "Animal Science" },
  { value: "plant_science", label: "Plant Science" },
  { value: "music", label: "Music" },
];

export type School = {
  id: string;
  name_en: string;
  name_ne: string;
  province: string;
  district: string;
  district_ne: string;
  municipality_en: string;
  municipality_ne: string;
  municipality_id?: string;
  ward: number | null;
  lat?: number;
  lng?: number;
  google_maps_link?: string;
  programs: ProgramSlug[];
  source: string;
  address?: string;
  contact_phone?: string;
  contact_email?: string;
  official_link?: string;
  facebook?: string;
  last_updated?: string;
};

export const schools: School[] = schoolsData as School[];

export type SchoolFilter = {
  provinceName?: string | null;
  districtTitle?: string | null;
  municipalityName?: string | null;
  municipalityId?: string | null;
  query?: string | null;
  program?: ProgramSlug | "" | null;
};

export function getSchools(filter: SchoolFilter = {}): School[] {
  const {
    provinceName = null,
    districtTitle = null,
    municipalityName = null,
    municipalityId = null,
    query = null,
    program = null,
  } = filter;

  const q = query?.trim().toLowerCase() ?? "";

  let list = schools;

  if (provinceName) {
    list = list.filter(
      (s) => s.province.toLowerCase() === provinceName.toLowerCase(),
    );
  }
  if (districtTitle) {
    list = list.filter(
      (s) => s.district.toLowerCase() === districtTitle.toLowerCase(),
    );
  }
  if (municipalityName) {
    const mLower = municipalityName.toLowerCase();
    list = list.filter(
      (s) =>
        (municipalityId != null && s.municipality_id === municipalityId) ||
        s.municipality_en.toLowerCase().includes(mLower),
    );
  }
  if (program) {
    list = list.filter((s) => s.programs.includes(program));
  }
  if (q) {
    list = list.filter(
      (s) =>
        s.name_en.toLowerCase().includes(q) ||
        s.name_ne.includes(q),
    );
  }

  return [...list].sort((a, b) => a.name_en.localeCompare(b.name_en));
}

export function programLabel(slug: string): string {
  return PROGRAM_OPTIONS.find((p) => p.value === slug)?.label ?? slug;
}
