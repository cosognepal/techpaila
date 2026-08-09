import { schools, type ProgramSlug, type School } from "@/data/schools";
import placeNames from "@/data/place-names.json";
import { districtToProvince } from "./constants";
import { getDistrictCentroid, getSchoolCentroid, haversineKm } from "./geo";

const provincesEn = placeNames.provinces.en as Record<string, string>;
const provincesNe = placeNames.provinces.ne as Record<string, string>;
const districtsNe = placeNames.districts.ne as Record<string, string>;

const PROGRAM_LABELS_EN: Record<string, string> = {
  computer_engineering: "Computer Engineering",
  civil_engineering: "Civil Engineering",
  electrical_engineering: "Electrical Engineering",
  animal_science: "Animal Science",
  plant_science: "Plant Science",
  music: "Music",
};

const PROGRAM_LABELS_NE: Record<string, string> = {
  computer_engineering: "कम्प्युटर इन्जिनियरिङ",
  civil_engineering: "सिभिल इन्जिनियरिङ",
  electrical_engineering: "इलेक्ट्रिकल इन्जिनियरिङ",
  animal_science: "पशु विज्ञान",
  plant_science: "वनस्पति विज्ञान",
  music: "संगीत",
};

const NEARBY_RADIUS_KM = 30;

export type RankedSchool = {
  school: School;
  tier: 1 | 2;
  distanceKm: number | null;
  reason_en: string;
  reason_ne: string;
};

export function rankSchools(
  district: string,
  program: ProgramSlug,
  userCoords?: { lat: number; lng: number } | null,
): RankedSchool[] {
  const programEn = PROGRAM_LABELS_EN[program] ?? program;
  const programNe = PROGRAM_LABELS_NE[program] ?? program;

  const districtTitleCase = district
    .split(/[\s-]/)
    .map((w) => w.charAt(0) + w.slice(1).toLowerCase())
    .join(" ");
  const districtNe = districtsNe[district] ?? districtTitleCase;

  const refPoint = userCoords ?? getDistrictCentroid(district);

  const filtered = schools.filter((s) => s.programs.includes(program));

  const tier1: RankedSchool[] = [];
  const tier2: RankedSchool[] = [];

  for (const school of filtered) {
    const schoolDistKey = school.district.toUpperCase();

    if (schoolDistKey === district) {
      let distanceKm: number | null = null;
      if (refPoint) {
        const schoolPos = getSchoolCentroid(school);
        if (schoolPos) {
          distanceKm = Math.round(
            haversineKm(refPoint.lat, refPoint.lng, schoolPos.lat, schoolPos.lng),
          );
        }
      }

      tier1.push({
        school,
        tier: 1,
        distanceKm,
        reason_en: `In your district (${districtTitleCase}), offers ${programEn}`,
        reason_ne: `तपाईंको जिल्ला (${districtNe}) मा, ${programNe} उपलब्ध`,
      });
    } else if (refPoint) {
      const schoolPos = getSchoolCentroid(school);
      if (schoolPos) {
        const dist = haversineKm(
          refPoint.lat,
          refPoint.lng,
          schoolPos.lat,
          schoolPos.lng,
        );
        if (dist <= NEARBY_RADIUS_KM) {
          tier2.push({
            school,
            tier: 2,
            distanceKm: Math.round(dist),
            reason_en: `~${Math.round(dist)} km away (${school.district}), offers ${programEn}`,
            reason_ne: `~${Math.round(dist)} कि.मि. टाढा (${school.district_ne}), ${programNe} उपलब्ध`,
          });
        }
      }
    }
  }

  tier1.sort((a, b) => (a.distanceKm ?? 999) - (b.distanceKm ?? 999));
  tier2.sort((a, b) => (a.distanceKm ?? 999) - (b.distanceKm ?? 999));

  return [...tier1, ...tier2];
}
