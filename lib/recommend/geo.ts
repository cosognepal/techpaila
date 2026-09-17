import districtCentroids from "@/data/district-centroids.json";
import municipalityCentroids from "@/data/municipality-centroids.json";
import type { School } from "@/data/schools";

const NEPAL_BOUNDS = {
  latMin: 26.35,
  latMax: 30.45,
  lngMin: 80.05,
  lngMax: 88.2,
};

export type GeoResult =
  | { status: "located"; district: string; lat: number; lng: number }
  | { status: "outside_nepal"; lat: number; lng: number }
  | { status: "denied" }
  | { status: "unavailable" };

export function haversineKm(
  lat1: number,
  lng1: number,
  lat2: number,
  lng2: number,
): number {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function isInsideNepal(lat: number, lng: number): boolean {
  return (
    lat >= NEPAL_BOUNDS.latMin &&
    lat <= NEPAL_BOUNDS.latMax &&
    lng >= NEPAL_BOUNDS.lngMin &&
    lng <= NEPAL_BOUNDS.lngMax
  );
}

export function nearestDistrict(lat: number, lng: number): string {
  let bestKey = "";
  let bestDist = Infinity;

  for (const [key, c] of Object.entries(districtCentroids)) {
    const d = haversineKm(lat, lng, c.lat, c.lng);
    if (d < bestDist) {
      bestDist = d;
      bestKey = key;
    }
  }

  return bestKey;
}

export function getDistrictCentroid(
  district: string,
): { lat: number; lng: number } | null {
  const c = (districtCentroids as Record<string, { lat: number; lng: number }>)[
    district
  ];
  return c ?? null;
}

type MuniEntry = { name: string; district: string; lat: number; lng: number };
const muniData = municipalityCentroids as MuniEntry[];

// Build a lookup: "municipality_name_lower|district_lower" -> {lat, lng}
const muniLookup = new Map<string, { lat: number; lng: number }>();
for (const m of muniData) {
  muniLookup.set(`${m.name.toLowerCase()}|${m.district.toLowerCase()}`, {
    lat: m.lat,
    lng: m.lng,
  });
}

/**
 * Get the best centroid for a school, using the most granular data available:
 * 1. Verified school coordinates
 * 2. Municipality centroid (matched by municipality_en + district)
 * 3. District centroid (fallback)
 */
export function getSchoolCentroid(
  school: School,
): { lat: number; lng: number } | null {
  if (school.lat != null && school.lng != null) {
    return { lat: school.lat, lng: school.lng };
  }

  // Try municipality match: strip level suffix for matching
  const muniName = school.municipality_en
    .replace(/\s*(Rural Municipality|Municipality|Sub-Metropolitan City|Metropolitan City|Sub-metropolitan City|Metropolitan city)\s*$/i, "")
    .trim()
    .toLowerCase();
  const distLower = school.district.toLowerCase();

  const muniKey = `${muniName}|${distLower}`;
  const muniMatch = muniLookup.get(muniKey);
  if (muniMatch) return muniMatch;

  // Fallback: district centroid
  return getDistrictCentroid(school.district.toUpperCase());
}

export function getUserLocation(): Promise<GeoResult> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve({ status: "unavailable" });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude: lat, longitude: lng } = pos.coords;
        if (!isInsideNepal(lat, lng)) {
          resolve({ status: "outside_nepal", lat, lng });
          return;
        }
        const district = nearestDistrict(lat, lng);
        resolve({ status: "located", district, lat, lng });
      },
      (err) => {
        if (err.code === err.PERMISSION_DENIED) {
          resolve({ status: "denied" });
        } else {
          resolve({ status: "unavailable" });
        }
      },
      { enableHighAccuracy: false, timeout: 8000, maximumAge: 300000 },
    );
  });
}
