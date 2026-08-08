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

  const handleProvinceChange = useCallback((next: number | null) => {
    setProvinceId(next);
    setDistrictName(null);
  }, []);

  const handleDistrictChange = useCallback(
    (next: string | null) => {
      setDistrictName(next);
      if (next) {
        const match = districts.find((d) => d.DISTRICT === next);
        if (match && match.PROVINCE !== provinceId) {
          setProvinceId(match.PROVINCE);
        }
      }
    },
    [provinceId],
  );

  const handleProvinceSelect = useCallback((id: number) => {
    setProvinceId(id);
    setDistrictName(null);
  }, []);

  const handleDistrictSelect = useCallback((name: string) => {
    const match = districts.find((d) => d.DISTRICT === name);
    if (match) setProvinceId(match.PROVINCE);
    setDistrictName(name);
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
          onProvinceChange={handleProvinceChange}
          onDistrictChange={handleDistrictChange}
        />
      </header>

      <div className="explorer-body">
        <div className="map-panel">
          <MapView
            provinceId={provinceId}
            districtName={districtName}
            onProvinceSelect={handleProvinceSelect}
            onDistrictSelect={handleDistrictSelect}
          />
        </div>
        <Schools districtName={districtName} />
      </div>
    </div>
  );
}
