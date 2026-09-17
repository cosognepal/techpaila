"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  GeoJSON,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import type { Feature, FeatureCollection, Geometry } from "geojson";
import type { Layer, Path } from "leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { schools, type School } from "@/data/schools";

// our own compiled data
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
  type DistrictFeatureProps,
  type MunicipalityFeatureProps,
  type ProvinceFeatureProps,
} from "@/lib/map";
import { useLocale } from "@/hooks/useLocale";
import {
  districtLabel,
  municipalityLabel,
  municipalityLevelLabel,
  provinceLabel,
} from "@/lib/i18n/place-names";

type MapViewProps = {
  provinceId: number | null;
  districtName: string | null;
  municipalityId: string | null;
  cleanView: boolean;
  showSchools: boolean;
  onProvinceSelect: (provinceId: number) => void;
  onDistrictSelect: (districtName: string) => void;
  onMunicipalitySelect: (municipalityId: string) => void;
};

function normalizeMunicipalityName(name: string): string {
  return name
    .replace(
      /\s*(Rural Municipality|Municipality|Sub-Metropolitan City|Metropolitan City)$/i,
      "",
    )
    .replace(/[^a-z0-9]/gi, "")
    .toLowerCase();
}

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
  cleanView,
  showSchools,
  onProvinceSelect,
  onDistrictSelect,
  onMunicipalitySelect,
}: MapViewProps) {
  const { t, locale } = useLocale();
  // Avoid Leaflet init during SSR / Strict Mode / HMR before a real container exists.
  const [mapKey, setMapKey] = useState(0);
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
    // Leaflet must mount after React has committed a stable client container.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMapKey((k) => k + 1);
  }, []);

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

  const schoolMarkers = useMemo(() => {
    const selectedMunicipality =
      municipalityId && municipalities
        ? findMunicipalityFeature(municipalities, municipalityId)
        : null;
    const selectedMunicipalityName = selectedMunicipality?.properties?.NAME;

    return schools.filter(
      (school): school is School & { lat: number; lng: number } => {
        if (school.lat == null || school.lng == null) return false;
        if (
          districtName &&
          school.district.toUpperCase() !== districtName.toUpperCase()
        ) {
          return false;
        }
        if (provinceId != null && !districtName) {
          const schoolDistrict = districts?.features.find(
            (feature) =>
              feature.properties?.DISTRICT === school.district.toUpperCase(),
          );
          if (schoolDistrict?.properties?.PROVINCE !== provinceId) return false;
        }
        if (
          selectedMunicipalityName &&
          school.municipality_id !== municipalityId &&
          normalizeMunicipalityName(school.municipality_en) !==
            normalizeMunicipalityName(selectedMunicipalityName)
        ) {
          return false;
        }
        return true;
      },
    );
  }, [
    districts,
    provinceId,
    districtName,
    municipalities,
    municipalityId,
  ]);

  const schoolMarkerIcon = useMemo(() => {
    const size = municipalityId ? 30 : districtName ? 26 : provinceId ? 22 : 16;

    return L.divIcon({
      className: "school-map-marker",
      html: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 10 12 4l9 6" />
          <path d="M5 10v9h14v-9" />
          <path d="M9 19v-5h6v5" />
          <path d="M3 19h18" />
        </svg>
      `,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2],
      popupAnchor: [0, -(size / 2 + 4)],
    });
  }, [provinceId, districtName, municipalityId]);

  const onEachProvince = (
    feature: Feature<Geometry, ProvinceFeatureProps>,
    layer: Layer,
  ) => {
    const path = layer as Path;
    const id = feature.properties?.id;
    const name =
      id != null
        ? provinceLabel(locale, id, feature.properties?.name)
        : (feature.properties?.name ?? t("map.provinceFallback"));
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
    path.bindTooltip(districtLabel(locale, name), { sticky: true });

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
    const englishName =
      feature.properties?.NAME ?? t("map.municipalityFallback");
    const label = id
      ? municipalityLabel(locale, id, englishName)
      : englishName;
    const level = municipalityLevelLabel(locale, feature.properties?.LEVEL);
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

  // First paint (mapKey === 0) skips MapContainer so Leaflet never binds to a
  // container that React Strict Mode / HMR is about to tear down.
  if (mapKey === 0) {
    return <div className="map-loading">{t("map.loading")}</div>;
  }

  return (
    <MapContainer
      key={mapKey}
      center={NEPAL_CENTER}
      zoom={NEPAL_ZOOM}
      className="map-canvas"
      style={{ width: "100%", height: "100%", paddingRight: "2px" }}
      minZoom={5}
      scrollWheelZoom
    >
      {cleanView ? null : (
        <TileLayer attribution={OSM_ATTRIBUTION} url={OSM_TILE_URL} />
      )}
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
          key={`provinces-${locale}`}
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
          key={`districts-${provinceId}-${locale}`}
          data={districtLayer}
          style={(feature) =>
            districtStyle(feature?.properties?.DISTRICT === districtName)
          }
          onEachFeature={onEachDistrict}
        />
      )}

      {districtName && municipalityLayer && (
        <GeoJSON
          key={`muni-${districtName}-${municipalityId ?? "all"}-${locale}`}
          data={municipalityLayer}
          style={(feature) =>
            municipalityStyle(
              municipalityIdFromProps(feature?.properties) === municipalityId,
            )
          }
          onEachFeature={onEachMunicipality}
        />
      )}

      {showSchools &&
        schoolMarkers.map((school) => (
        <Marker
          key={school.id}
          position={[school.lat, school.lng]}
          icon={schoolMarkerIcon}
        >
          <Popup>
            <strong>
              {locale === "ne" ? school.name_ne : school.name_en}
            </strong>
            <br />
            {locale === "ne"
              ? `${school.municipality_ne}, ${school.district_ne}`
              : `${school.municipality_en}, ${school.district}`}
            {school.google_maps_link && (
              <>
                <br />
                <a
                  href={school.google_maps_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("schools.googleMaps")}
                </a>
              </>
            )}
          </Popup>
        </Marker>
        ))}
    </MapContainer>
  );
}
