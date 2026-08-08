import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { LatLngBoundsExpression, PathOptions } from "leaflet";

export const NEPAL_CENTER: [number, number] = [28.3949, 84.124];
export const NEPAL_ZOOM = 7;
export const NEPAL_BOUNDS: LatLngBoundsExpression = [
  [26.3, 80.0],
  [30.5, 88.3],
];

export const OSM_TILE_URL =
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
export const OSM_ATTRIBUTION =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

export const PROVINCES_GEOJSON_URL = "/geo/provinces.geojson";
export const DISTRICTS_GEOJSON_URL = "/geo/districts.geojson";

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

export type ProvinceFeature = Feature<Geometry, ProvinceFeatureProps>;
export type DistrictFeature = Feature<Geometry, DistrictFeatureProps>;

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

export function titleCaseDistrict(name: string): string {
  return name
    .split("-")
    .map((part) => part.charAt(0) + part.slice(1).toLowerCase())
    .join("-");
}
