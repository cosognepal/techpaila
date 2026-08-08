"use client";

import { useEffect, useMemo, useState } from "react";
import {
  GeoJSON,
  MapContainer,
  TileLayer,
  useMap,
} from "react-leaflet";
import type {
  Feature,
  FeatureCollection,
  Geometry,
} from "geojson";
import type { Layer, Path } from "leaflet";
import L from "leaflet";
import {
  DISTRICTS_GEOJSON_URL,
  NEPAL_CENTER,
  NEPAL_ZOOM,
  OSM_ATTRIBUTION,
  OSM_TILE_URL,
  PROVINCES_GEOJSON_URL,
  districtHoverStyle,
  districtStyle,
  filterDistrictsByProvince,
  findDistrictFeature,
  findProvinceFeature,
  provinceHoverStyle,
  provinceStyle,
  titleCaseDistrict,
  type DistrictFeatureProps,
  type ProvinceFeatureProps,
} from "@/lib/map";

type MapViewProps = {
  provinceId: number | null;
  districtName: string | null;
  onProvinceSelect: (provinceId: number) => void;
  onDistrictSelect: (districtName: string) => void;
};

function FitSelection({
  provinces,
  districts,
  provinceId,
  districtName,
}: {
  provinces: FeatureCollection<Geometry, ProvinceFeatureProps> | null;
  districts: FeatureCollection<Geometry, DistrictFeatureProps> | null;
  provinceId: number | null;
  districtName: string | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (!provinces) return;

    if (districtName && districts) {
      const feature = findDistrictFeature(districts, districtName);
      if (feature) {
        const layer = L.geoJSON(feature);
        map.fitBounds(layer.getBounds(), { padding: [40, 40], maxZoom: 11 });
        return;
      }
    }

    if (provinceId != null) {
      const feature = findProvinceFeature(provinces, provinceId);
      if (feature) {
        const layer = L.geoJSON(feature);
        map.fitBounds(layer.getBounds(), { padding: [36, 36], maxZoom: 9 });
        return;
      }
    }

    map.fitBounds(
      [
        [26.3, 80.0],
        [30.5, 88.3],
      ],
      { padding: [24, 24] },
    );
  }, [map, provinces, districts, provinceId, districtName]);

  return null;
}

function InvalidateSize() {
  const map = useMap();

  useEffect(() => {
    const onResize = () => map.invalidateSize();
    window.addEventListener("resize", onResize);
    const timer = window.setTimeout(onResize, 100);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", onResize);
    };
  }, [map]);

  return null;
}

export default function MapView({
  provinceId,
  districtName,
  onProvinceSelect,
  onDistrictSelect,
}: MapViewProps) {
  const [provinces, setProvinces] = useState<FeatureCollection<
    Geometry,
    ProvinceFeatureProps
  > | null>(null);
  const [districts, setDistricts] = useState<FeatureCollection<
    Geometry,
    DistrictFeatureProps
  > | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      const [provRes, distRes] = await Promise.all([
        fetch(PROVINCES_GEOJSON_URL),
        fetch(DISTRICTS_GEOJSON_URL),
      ]);
      const [provData, distData] = await Promise.all([
        provRes.json(),
        distRes.json(),
      ]);
      if (!cancelled) {
        setProvinces(provData);
        setDistricts(distData);
      }
    }

    load().catch(console.error);
    return () => {
      cancelled = true;
    };
  }, []);

  const districtLayer = useMemo(() => {
    if (!districts || provinceId == null) return null;
    return filterDistrictsByProvince(districts, provinceId);
  }, [districts, provinceId]);

  const onEachProvince = (
    feature: Feature<Geometry, ProvinceFeatureProps>,
    layer: Layer,
  ) => {
    const path = layer as Path;
    const id = feature.properties?.id;
    const name = feature.properties?.name ?? "Province";
    path.bindTooltip(name, { sticky: true });

    path.on({
      mouseover: () => path.setStyle(provinceHoverStyle),
      mouseout: () =>
        path.setStyle(provinceStyle(provinceId != null && provinceId === id)),
      click: () => {
        if (id != null) onProvinceSelect(id);
      },
    });
  };

  const onEachDistrict = (
    feature: Feature<Geometry, DistrictFeatureProps>,
    layer: Layer,
  ) => {
    const path = layer as Path;
    const name = feature.properties?.DISTRICT ?? "";
    path.bindTooltip(titleCaseDistrict(name), { sticky: true });

    path.on({
      mouseover: () => path.setStyle(districtHoverStyle),
      mouseout: () =>
        path.setStyle(districtStyle(districtName === name)),
      click: () => {
        if (name) onDistrictSelect(name);
      },
    });
  };

  return (
    <MapContainer
      center={NEPAL_CENTER}
      zoom={NEPAL_ZOOM}
      className="map-canvas"
      minZoom={5}
      scrollWheelZoom
    >
      <TileLayer attribution={OSM_ATTRIBUTION} url={OSM_TILE_URL} />
      <InvalidateSize />
      <FitSelection
        provinces={provinces}
        districts={districts}
        provinceId={provinceId}
        districtName={districtName}
      />

      {provinceId == null && provinces && (
        <GeoJSON
          key="provinces"
          data={provinces}
          style={(feature) =>
            provinceStyle(
              feature?.properties?.id != null &&
                feature.properties.id === provinceId,
            )
          }
          onEachFeature={onEachProvince}
        />
      )}

      {provinceId != null && districtLayer && (
        <GeoJSON
          key={`districts-${provinceId}-${districtName ?? "all"}`}
          data={districtLayer}
          style={(feature) =>
            districtStyle(feature?.properties?.DISTRICT === districtName)
          }
          onEachFeature={onEachDistrict}
        />
      )}
    </MapContainer>
  );
}
