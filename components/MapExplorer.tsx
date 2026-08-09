"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useState } from "react";
import Controls from "@/components/Controls";
import LanguageToggle from "@/components/LanguageToggle";
import Schools from "@/components/Schools";
import SplitPane from "@/components/SplitPane";
import { useLocale } from "@/hooks/useLocale";
import districts from "@/data/districts.json";
import Image from "next/image";
import Link from "next/link";

function MapLoading() {
  const { t } = useLocale();
  return <div className="map-loading">{t("map.loading")}</div>;
}

const MapView = dynamic(() => import("@/components/MapView"), {
  ssr: false,
  loading: () => <MapLoading />,
});

export default function MapExplorer() {
  const { t } = useLocale();
  const [provinceId, setProvinceId] = useState<number | null>(null);
  const [districtName, setDistrictName] = useState<string | null>(null);
  const [municipalityId, setMunicipalityId] = useState<string | null>(null);
  const [cleanView, setCleanView] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);

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

  useEffect(() => {
    if (!fullscreen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [fullscreen]);

  useEffect(() => {
    document.body.style.overflow = fullscreen ? "hidden" : "";
    const tmr = window.setTimeout(() => {
      window.dispatchEvent(new Event("resize"));
    }, 50);
    return () => {
      window.clearTimeout(tmr);
      document.body.style.overflow = "";
    };
  }, [fullscreen]);

  const fullscreenLabel = fullscreen
    ? t("nav.fullscreenExit")
    : t("nav.fullscreenEnter");

  return (
    <div className="explorer">
      <div className="explorer-shell">
        <header className="explorer-header">
          <div className="explorer-header-left">
            <Link href="/" className="brand" aria-label={t("nav.homeAria")}>
              <Image
                src="/techpaila-icon.svg"
                alt=""
                width={48}
                height={48}
                className="brand-icon"
              />
            </Link>
            <div className="header-copy">
              <h1 className="site-title">
                Tech<span className="site-title-accent">Paila</span>
              </h1>
            </div>
          </div>
          <LanguageToggle />
        </header>

        <div className={`workspace${fullscreen ? " is-fullscreen" : ""}`}>
          <div className="workspace-toolbar">
            <div className="workspace-toolbar-main">
              <Controls
                provinceId={provinceId}
                districtName={districtName}
                municipalityId={municipalityId}
                onProvinceChange={handleProvinceChange}
                onDistrictChange={handleDistrictChange}
                onMunicipalityChange={handleMunicipalityChange}
              />

              <div className="workspace-toggles">
                <div className="clean-view-toggle">
                  <span className="clean-view-label" id="clean-view-label">
                    {t("nav.cleanView")}
                  </span>
                  <button
                    type="button"
                    role="switch"
                    aria-checked={cleanView}
                    aria-labelledby="clean-view-label"
                    className={`toggle-switch${cleanView ? " is-on" : ""}`}
                    onClick={() => setCleanView((v) => !v)}
                  >
                    <span className="toggle-thumb" />
                  </button>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="fullscreen-icon-btn"
              aria-pressed={fullscreen}
              aria-label={fullscreenLabel}
              title={fullscreenLabel}
              onClick={() => setFullscreen((v) => !v)}
            >
              {fullscreen ? (
                <svg
                  className="fullscreen-icon"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M9 3v6H3" />
                  <path d="M15 3v6h6" />
                  <path d="M9 21v-6H3" />
                  <path d="M15 21v-6h6" />
                </svg>
              ) : (
                <svg
                  className="fullscreen-icon"
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="square"
                  aria-hidden="true"
                >
                  <path d="M3 9V3h6" />
                  <path d="M15 3h6v6" />
                  <path d="M21 15v6h-6" />
                  <path d="M9 21H3v-6" />
                </svg>
              )}
            </button>
          </div>

          <div className="workspace-body">
            <SplitPane
              defaultLeftPct={66}
              left={
                <div className="map-column">
                  <div className="map-box">
                    <MapView
                      provinceId={provinceId}
                      districtName={districtName}
                      municipalityId={municipalityId}
                      cleanView={cleanView}
                      onProvinceSelect={handleProvinceSelect}
                      onDistrictSelect={handleDistrictSelect}
                      onMunicipalitySelect={handleMunicipalitySelect}
                    />
                  </div>
                </div>
              }
              right={
                <Schools
                  provinceId={provinceId}
                  districtName={districtName}
                  municipalityId={municipalityId}
                />
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
