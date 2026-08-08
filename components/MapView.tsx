"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { GeoJSON, MapContainer, TileLayer, useMap } from "react-leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { Layer, Path } from "leaflet";
import L from "leaflet";
import {
  DISTRICTS_GEOJSON_URL,
  MUNICIPALITIES_GEOJSON_URL,
  NEPAL_CENTER,
  NEPAL_ZOOM,
  OSM_ATTRIBUTION,
  OSM_TILE_URL,
  PROVINCES_GEOJSON_URL,
  districtHoverStyle,
  districtStyle,
  filterDistrictsByProvince,
  filterMunicipalitiesByDistrict,
  findDistrictFeature,
  findMunicipalityFeature,
  findProvinceFeature,
  municipalityHoverStyle,
  municipalityIdFromProps,
  municipalityStyle,
  provinceHoverStyle,
  provinceStyle,
  titleCaseDistrict,
  type DistrictFeatureProps,
  type MunicipalityFeatureProps,
  type ProvinceFeatureProps,
} from "@/lib/map";

type MapViewProps = {
  provinceId: number | null;
  districtName: string | null;
  municipalityId: string | null;
  onProvinceSelect: (provinceId: number) => void;
  onDistrictSelect: (districtName: string) => void;
  onMunicipalitySelect: (municipalityId: string) => void;
};

function FitSelection({
  provinces,
  districts,
  municipalities,
  provinceId,
  districtName,
  municipalityId,
}: {
  provinces: FeatureCollection<Geometry, ProvinceFeatureProps> | null;
  districts: FeatureCollection<Geometry, DistrictFeatureProps> | null;
  municipalities: FeatureCollection<Geometry, MunicipalityFeatureProps> | null;
  provinceId: number | null;
  districtName: string | null;
  municipalityId: string | null;
}) {
  const map = useMap();

  useEffect(() => {
    if (!provinces) return;

    if (municipalityId && municipalities) {
      const feature = findMunicipalityFeature(municipalities, municipalityId);
      if (feature) {
        map.fitBounds(L.geoJSON(feature).getBounds(), {
          padding: [36, 36],
          maxZoom: 12,
        });
        return;
      }
    }

    if (districtName && districts) {
      const feature = findDistrictFeature(districts, districtName);
      if (feature) {
        map.fitBounds(L.geoJSON(feature).getBounds(), {
          padding: [40, 40],
          maxZoom: 11,
        });
        return;
      }
    }

    if (provinceId != null) {
      const feature = findProvinceFeature(provinces, provinceId);
      if (feature) {
        map.fitBounds(L.geoJSON(feature).getBounds(), {
          padding: [36, 36],
          maxZoom: 9,
        });
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
  }, [
    map,
    provinces,
    districts,
    municipalities,
    provinceId,
    districtName,
    municipalityId,
  ]);

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
  municipalityId,
  onProvinceSelect,
  onDistrictSelect,
  onMunicipalitySelect,
}: MapViewProps) {
  const [provinces, setProvinces] = useState<FeatureCollection<
    Geometry,
    ProvinceFeatureProps
  > | null>(null);
  const [districts, setDistricts] = useState<FeatureCollection<
    Geometry,
    DistrictFeatureProps
  > | null>(null);
  const [municipalities, setMunicipalities] = useState<FeatureCollection<
    Geometry,
    MunicipalityFeatureProps
  > | null>(null);
  const muniLoaded = useRef(false);

  useEffect(() => {
    let cancelled = false;

    async function loadBase() {
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

    loadBase().catch(console.error);
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!districtName || muniLoaded.current) return;
    let cancelled = false;

    async function loadMunicipalities() {
      const res = await fetch(MUNICIPALITIES_GEOJSON_URL);
      const data = await res.json();
      if (!cancelled) {
        setMunicipalities(data);
        muniLoaded.current = true;
      }
    }

    loadMunicipalities().catch(console.error);
    return () => {
      cancelled = true;
    };
  }, [districtName]);

  const districtLayer = useMemo(() => {
    if (!districts || provinceId == null || districtName) return null;
    return filterDistrictsByProvince(districts, provinceId);
  }, [districts, provinceId, districtName]);

  const municipalityLayer = useMemo(() => {
    if (!municipalities || !districtName) return null;
    return filterMunicipalitiesByDistrict(municipalities, districtName);
  }, [municipalities, districtName]);

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
      mouseout: () => path.setStyle(districtStyle(districtName === name)),
      click: () => {
        if (name) onDistrictSelect(name);
      },
    });
  };

  const onEachMunicipality = (
    feature: Feature<Geometry, MunicipalityFeatureProps>,
    layer: Layer,
  ) => {
    const path = layer as Path;
    const id = municipalityIdFromProps(feature.properties);
    const label = feature.properties?.NAME ?? "Municipality";
    const level = feature.properties?.LEVEL;
    path.bindTooltip(level ? `${label} (${level})` : label, { sticky: true });

    path.on({
      mouseover: () => path.setStyle(municipalityHoverStyle),
      mouseout: () =>
        path.setStyle(municipalityStyle(municipalityId === id)),
      click: () => {
        if (id) onMunicipalitySelect(id);
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
        municipalities={municipalities}
        provinceId={provinceId}
        districtName={districtName}
        municipalityId={municipalityId}
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

      {provinceId != null && !districtName && districtLayer && (
        <GeoJSON
          key={`districts-${provinceId}`}
          data={districtLayer}
          style={(feature) =>
            districtStyle(feature?.properties?.DISTRICT === districtName)
          }
          onEachFeature={onEachDistrict}
        />
      )}

      {districtName && municipalityLayer && (
        <GeoJSON
          key={`muni-${districtName}-${municipalityId ?? "all"}`}
          data={municipalityLayer}
          style={(feature) =>
            municipalityStyle(
              municipalityIdFromProps(feature?.properties) === municipalityId,
            )
          }
          onEachFeature={onEachMunicipality}
        />
      )}
    </MapContainer>
  );
}
