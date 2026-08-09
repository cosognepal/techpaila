import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { LatLngBoundsExpression, PathOptions } from "leaflet";
import districtNameMap from "@/data/district-name-map.json";

export const NEPAL_CENTER: [number, number] = [28.3949, 84.124];
export const NEPAL_ZOOM = 7;
export const NEPAL_BOUNDS: LatLngBoundsExpression = [
  [26.3, 80.0],
  [30.5, 88.3],
];

export const OSM_TILE_URL =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
export const OSM_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> · Boundaries <a href="https://github.com/mesaugat/geoJSON-Nepal">geoJSON-Nepal</a>';

export const PROVINCES_GEOJSON_URL = "/geo/provinces.geojson";
export const DISTRICTS_GEOJSON_URL = "/geo/districts.geojson";
export const MUNICIPALITIES_GEOJSON_URL = "/geo/municipalities.geojson";
export const WARDS_GEOJSON_URL = "/geo/wards.geojson";

export type ProvinceFeatureProps = {
  id: number;
  name: string;
  capital: string;
};

export type DistrictFeatureProps = {
  DISTRICT: string;
  HQ: string;
  PROVINCE: number;
};

export type MunicipalityFeatureProps = {
  id: string | null;
  F_ID: number | null;
  N_ID: string | null;
  NAME: string;
  LEVEL: string;
  DISTRICT: string;
};

export type WardFeatureProps = {
  AREA?: number;
  PERIMETER?: number;
  DIST_ID?: number;
  SURVEY_NAM?: string;
  VDC_ID?: number;
  DISTRICT: string;
  VDC_NAME: string;
  VDC_CODE?: number;
  ZONE_NAME?: string;
  REGION?: string;
  P_CODE?: string;
};

export type ProvinceFeature = Feature<Geometry, ProvinceFeatureProps>;
export type DistrictFeature = Feature<Geometry, DistrictFeatureProps>;
export type MunicipalityFeature = Feature<Geometry, MunicipalityFeatureProps>;
export type WardFeature = Feature<Geometry, WardFeatureProps>;

export const provinceStyle = (selected = false): PathOptions => ({
  color: "#16457a",
  weight: selected ? 2.5 : 1.5,
  opacity: 1,
  fillColor: selected ? "#e8a33d" : "#16457a",
  fillOpacity: selected ? 0.45 : 0.28,
});

export const provinceHoverStyle: PathOptions = {
  color: "#0f3560",
  weight: 2.5,
  fillColor: "#e8a33d",
  fillOpacity: 0.4,
};

export const districtStyle = (selected = false): PathOptions => ({
  color: "#16457a",
  weight: selected ? 2.5 : 1.25,
  opacity: 1,
  fillColor: selected ? "#e8a33d" : "#16457a",
  fillOpacity: selected ? 0.5 : 0.22,
});

export const districtHoverStyle: PathOptions = {
  color: "#0f3560",
  weight: 2,
  fillColor: "#e8a33d",
  fillOpacity: 0.4,
};

export const municipalityStyle = (selected = false): PathOptions => ({
  color: "#16457a",
  weight: selected ? 2.25 : 1,
  opacity: 1,
  fillColor: selected ? "#e8a33d" : "#16457a",
  fillOpacity: selected ? 0.55 : 0.2,
});

export const municipalityHoverStyle: PathOptions = {
  color: "#0f3560",
  weight: 2,
  fillColor: "#e8a33d",
  fillOpacity: 0.4,
};

export const wardStyle = (selected = false): PathOptions => ({
  color: "#0f3560",
  weight: selected ? 2 : 0.75,
  opacity: 1,
  fillColor: selected ? "#e8a33d" : "#16457a",
  fillOpacity: selected ? 0.55 : 0.15,
});

export const wardHoverStyle: PathOptions = {
  color: "#0f3560",
  weight: 1.5,
  fillColor: "#e8a33d",
  fillOpacity: 0.4,
};

/** Map our UPPERCASE district key → mesaugat Title-Case district labels. */
export function mesaugatDistrictNames(ourDistrict: string): string[] {
  const extras =
    (districtNameMap.ourToTheirsExtras as Record<string, string[]>)[
      ourDistrict
    ] ??
    (districtNameMap.ourToTheirsExtras as Record<string, string[]>)[
      ourDistrict.replace(/-/g, " ")
    ] ??
    [];

  const title = titleCaseDistrict(ourDistrict);
  const names = new Set<string>([title, ...extras]);

  // Reverse lookup from toOur map
  for (const [theirs, ours] of Object.entries(districtNameMap.toOur)) {
    if (ours === ourDistrict || ours === ourDistrict.replace(/ /g, "-")) {
      names.add(theirs);
    }
  }

  return [...names];
}

export function districtMatchesMesaugat(
  ourDistrict: string,
  mesaugatDistrict: string,
): boolean {
  return mesaugatDistrictNames(ourDistrict).some(
    (n) => n.toLowerCase() === mesaugatDistrict.toLowerCase(),
  );
}

export function filterDistrictsByProvince(
  collection: FeatureCollection<Geometry, DistrictFeatureProps>,
  provinceId: number,
): FeatureCollection<Geometry, DistrictFeatureProps> {
  return {
    type: "FeatureCollection",
    features: collection.features.filter(
      (f) => f.properties?.PROVINCE === provinceId,
    ),
  };
}

export function filterMunicipalitiesByDistrict(
  collection: FeatureCollection<Geometry, MunicipalityFeatureProps>,
  ourDistrict: string,
): FeatureCollection<Geometry, MunicipalityFeatureProps> {
  return {
    type: "FeatureCollection",
    features: collection.features.filter((f) =>
      districtMatchesMesaugat(ourDistrict, f.properties?.DISTRICT ?? ""),
    ),
  };
}

export function filterWardsByDistrict(
  collection: FeatureCollection<Geometry, WardFeatureProps>,
  ourDistrict: string,
): FeatureCollection<Geometry, WardFeatureProps> {
  return {
    type: "FeatureCollection",
    features: collection.features.filter((f) =>
      districtMatchesMesaugat(ourDistrict, f.properties?.DISTRICT ?? ""),
    ),
  };
}

export function findProvinceFeature(
  collection: FeatureCollection<Geometry, ProvinceFeatureProps>,
  provinceId: number,
): ProvinceFeature | undefined {
  return collection.features.find((f) => f.properties?.id === provinceId);
}

export function findDistrictFeature(
  collection: FeatureCollection<Geometry, DistrictFeatureProps>,
  districtName: string,
): DistrictFeature | undefined {
  return collection.features.find(
    (f) => f.properties?.DISTRICT === districtName,
  );
}

export function findMunicipalityFeature(
  collection: FeatureCollection<Geometry, MunicipalityFeatureProps>,
  municipalityId: string,
): MunicipalityFeature | undefined {
  return collection.features.find((f) => {
    const p = f.properties;
    if (!p) return false;
    const id =
      p.N_ID || `${p.NAME}-${p.DISTRICT}`.toLowerCase().replace(/ /g, "-");
    return id === municipalityId || String(p.F_ID) === municipalityId;
  });
}

export function findWardFeature(
  collection: FeatureCollection<Geometry, WardFeatureProps>,
  wardId: string,
): WardFeature | undefined {
  return collection.features.find((f) => {
    const p = f.properties;
    if (!p) return false;
    return String(p.VDC_CODE ?? p.P_CODE ?? "") === wardId;
  });
}

export function municipalityIdFromProps(
  p: MunicipalityFeatureProps | undefined,
): string | null {
  if (!p) return null;
  return p.N_ID || `${p.NAME}-${p.DISTRICT}`.toLowerCase().replace(/ /g, "-");
}

export function wardIdFromProps(
  p: WardFeatureProps | undefined,
): string | null {
  if (!p) return null;
  const id = p.VDC_CODE ?? p.P_CODE;
  return id == null ? null : String(id);
}

export function titleCaseDistrict(name: string): string {
  return name
    .split(/[-\s]/)
    .map((part) => part.charAt(0) + part.slice(1).toLowerCase())
    .join("-");
}
