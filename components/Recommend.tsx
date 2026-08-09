"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import districts from "@/data/districts.json";
import { PROGRAM_OPTIONS, type ProgramSlug } from "@/data/schools";
import { useLocale } from "@/hooks/useLocale";
import type { MessageKey } from "@/lib/i18n";
import { districtLabel } from "@/lib/i18n/place-names";
import { getUserLocation, type GeoResult } from "@/lib/recommend/geo";
import { rankSchools, type RankedSchool } from "@/lib/recommend/rank";

type Step = "program" | "locating" | "district" | "results";

export default function Recommend() {
  const { t, locale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);

  const [step, setStep] = useState<Step>("program");
  const [selectedProgram, setSelectedProgram] = useState<ProgramSlug | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  const [userCoords, setUserCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [geoMessage, setGeoMessage] = useState<string | null>(null);

  const handleProgramSelect = useCallback(
    (program: ProgramSlug) => {
      setSelectedProgram(program);
      setStep("locating");

      getUserLocation().then((result: GeoResult) => {
        switch (result.status) {
          case "located":
            setSelectedDistrict(result.district);
            setUserCoords({ lat: result.lat, lng: result.lng });
            setStep("results");
            break;
          case "outside_nepal":
            setUserCoords({ lat: result.lat, lng: result.lng });
            setGeoMessage("outsideNepal");
            setStep("district");
            break;
          case "denied":
            setGeoMessage("locationDenied");
            setStep("district");
            break;
          case "unavailable":
            setGeoMessage("locationDenied");
            setStep("district");
            break;
        }
      });
    },
    [],
  );

  const handleDistrictSelect = useCallback((districtKey: string) => {
    setSelectedDistrict(districtKey);
    setStep("results");
  }, []);

  const handleChangeDistrict = useCallback(() => {
    setStep("district");
  }, []);

  const handleReset = useCallback(() => {
    setStep("program");
    setSelectedProgram(null);
    setSelectedDistrict(null);
    setUserCoords(null);
    setGeoMessage(null);
  }, []);

  const results = useMemo(() => {
    if (!selectedDistrict || !selectedProgram) return null;
    return rankSchools(selectedDistrict, selectedProgram, userCoords);
  }, [selectedDistrict, selectedProgram, userCoords]);

  const tier1 = results?.filter((r) => r.tier === 1);
  const tier2 = results?.filter((r) => r.tier === 2);

  const sortedDistricts = useMemo(
    () =>
      [...districts].sort((a, b) =>
        districtLabel(locale, a.DISTRICT).localeCompare(
          districtLabel(locale, b.DISTRICT),
        ),
      ),
    [locale],
  );

  return (
    <>
      <button
        className="recommend-fab"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t("recommend.title")}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="recommend-widget">
          <div className="recommend-widget-header">
            <h2 className="recommend-widget-title">{t("recommend.title")}</h2>
            <button
              className="recommend-widget-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="recommend-widget-body">
            {/* Step 1: Pick program */}
            {step === "program" && (
              <div className="recommend-step">
                <p className="recommend-step-label">{t("recommend.stepProgram")}</p>
                <div className="recommend-program-grid">
                  {PROGRAM_OPTIONS.map((p) => (
                    <button
                      key={p.value}
                      className="recommend-program-btn"
                      onClick={() => handleProgramSelect(p.value)}
                    >
                      {t(`programs.${p.value}` as MessageKey)}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Detecting location */}
            {step === "locating" && (
              <div className="recommend-step recommend-step-center">
                <div className="recommend-spinner" />
                <p className="recommend-step-label">{t("recommend.stepLocation")}</p>
              </div>
            )}

            {/* Step 3: Fallback district picker */}
            {step === "district" && (
              <div className="recommend-step">
                {geoMessage && (
                  <p className="recommend-geo-message">
                    {t(`recommend.${geoMessage}` as MessageKey)}
                  </p>
                )}
                <label className="recommend-field">
                  <span className="recommend-field-label">{t("recommend.districtLabel")}</span>
                  <select
                    value={selectedDistrict ?? ""}
                    onChange={(e) => {
                      if (e.target.value) handleDistrictSelect(e.target.value);
                    }}
                  >
                    <option value="">{t("recommend.allDistricts")}</option>
                    {sortedDistricts.map((d) => (
                      <option key={d.DISTRICT} value={d.DISTRICT}>
                        {districtLabel(locale, d.DISTRICT)}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            )}

            {/* Step 4: Results */}
            {step === "results" && selectedDistrict && selectedProgram && (
              <div className="recommend-step">
                <div className="recommend-context">
                  <span className="recommend-context-item">
                    {t(`programs.${selectedProgram}` as MessageKey)}
                  </span>
                  <span className="recommend-context-item">
                    {districtLabel(locale, selectedDistrict)}
                    <button
                      className="recommend-change-btn"
                      onClick={handleChangeDistrict}
                    >
                      {t("recommend.changeDistrict")}
                    </button>
                  </span>
                  <button className="recommend-reset-btn" onClick={handleReset}>
                    ↺
                  </button>
                </div>

                <div className="recommend-widget-results">
                  {results && results.length === 0 ? (
                    <p className="recommend-hint">{t("recommend.noResults")}</p>
                  ) : (
                    <>
                      <TierSection
                        label={t("recommend.tierLocal")}
                        items={tier1}
                        locale={locale}
                      />
                      <TierSection
                        label={t("recommend.tierNearby")}
                        items={tier2}
                        locale={locale}
                      />
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function TierSection({
  label,
  items,
  locale,
}: {
  label: string;
  items: RankedSchool[] | undefined;
  locale: "en" | "ne";
}) {
  if (!items || items.length === 0) return null;

  return (
    <div className="recommend-tier">
      <h3 className="recommend-tier-heading">{label}</h3>
      <ul className="recommend-tier-list">
        {items.map((r) => (
          <li key={r.school.id} className="recommend-item">
            <span className="recommend-item-name">
              {locale === "ne" ? r.school.name_ne : r.school.name_en}
            </span>
            <span className="recommend-item-reason">
              {locale === "ne" ? r.reason_ne : r.reason_en}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
