"use client";

import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import Controls from "@/components/Controls";
import Schools from "@/components/Schools";
import districts from "@/data/districts.json";

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
  loading: () => <div className="map-loading">Loading map…</div>,
});

export default function MapExplorer() {
  const [provinceId, setProvinceId] = useState<number | null>(null);
  const [districtName, setDistrictName] = useState<string | null>(null);
  const [municipalityId, setMunicipalityId] = useState<string | null>(null);

  const handleProvinceChange = useCallback((next: number | null) => {
    setProvinceId(next);
    setDistrictName(null);
    setMunicipalityId(null);
  }, []);

  const handleDistrictChange = useCallback(
    (next: string | null) => {
      setDistrictName(next);
      setMunicipalityId(null);
      if (next) {
        const match = districts.find((d) => d.DISTRICT === next);
        if (match && match.PROVINCE !== provinceId) {
          setProvinceId(match.PROVINCE);
        }
      }
    },
    [provinceId],
  );

  const handleMunicipalityChange = useCallback((next: string | null) => {
    setMunicipalityId(next);
  }, []);

  const handleProvinceSelect = useCallback((id: number) => {
    setProvinceId(id);
    setDistrictName(null);
    setMunicipalityId(null);
  }, []);

  const handleDistrictSelect = useCallback((name: string) => {
    const match = districts.find((d) => d.DISTRICT === name);
    if (match) setProvinceId(match.PROVINCE);
    setDistrictName(name);
    setMunicipalityId(null);
  }, []);

  const handleMunicipalitySelect = useCallback((id: string) => {
    setMunicipalityId(id);
  }, []);

  return (
    <div className="explorer">
      <header className="explorer-header">
        <a href="/" className="brand" aria-label="TechPaila home">
          <img
            src="/techpaila-icon.svg"
            alt="TechPaila"
            width={40}
            height={40}
            className="brand-icon"
          />
        </a>
        <Controls
          provinceId={provinceId}
          districtName={districtName}
          municipalityId={municipalityId}
          onProvinceChange={handleProvinceChange}
          onDistrictChange={handleDistrictChange}
          onMunicipalityChange={handleMunicipalityChange}
        />
      </header>

      <div className="explorer-body">
        <div className="map-panel">
          <MapView
            provinceId={provinceId}
            districtName={districtName}
            municipalityId={municipalityId}
            onProvinceSelect={handleProvinceSelect}
            onDistrictSelect={handleDistrictSelect}
            onMunicipalitySelect={handleMunicipalitySelect}
          />
        </div>
        <Schools
          provinceId={provinceId}
          districtName={districtName}
          municipalityId={municipalityId}
        />
      </div>
    </div>
  );
}
