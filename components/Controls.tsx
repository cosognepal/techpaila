"use client";

import provinces from "@/data/provinces.json";
import districts from "@/data/districts.json";
import municipalities from "@/data/municipalities.json";
import { useLocale } from "@/hooks/useLocale";
import {
  districtLabel,
  municipalityLabel,
  municipalityLevelLabel,
  provinceLabel,
} from "@/lib/i18n/place-names";
import { districtMatchesMesaugat } from "@/lib/map";

type ControlsProps = {
  provinceId: number | null;
  districtName: string | null;
  municipalityId: string | null;
  onProvinceChange: (provinceId: number | null) => void;
  onDistrictChange: (districtName: string | null) => void;
  onMunicipalityChange: (municipalityId: string | null) => void;
};

export default function Controls({
  provinceId,
  districtName,
  municipalityId,
  onProvinceChange,
  onDistrictChange,
  onMunicipalityChange,
}: ControlsProps) {
  const { t, locale } = useLocale();

  const districtOptions = districts.filter((d) =>
    provinceId == null ? true : d.PROVINCE === provinceId,
  );

  const municipalityOptions = districtName
    ? municipalities.filter((m) =>
        districtMatchesMesaugat(districtName, m.district),
      )
    : [];

  return (
    <div className="controls">
      <label className="control-field">
        <span className="control-label">{t("filters.province")}</span>
        <select
          value={provinceId ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            onProvinceChange(value === "" ? null : Number(value));
          }}
        >
          <option value="">{t("filters.allProvinces")}</option>
          {provinces.map((p) => (
            <option key={p.id} value={p.id}>
              {provinceLabel(locale, p.id, p.name)}
            </option>
          ))}
        </select>
      </label>

      <label className="control-field">
        <span className="control-label">{t("filters.district")}</span>
        <select
          value={districtName ?? ""}
          disabled={provinceId == null}
          onChange={(e) => {
            const value = e.target.value;
            onDistrictChange(value === "" ? null : value);
          }}
        >
          <option value="">
            {provinceId == null
              ? t("filters.selectProvinceFirst")
              : t("filters.allDistricts")}
          </option>
          {districtOptions.map((d) => (
            <option key={d.DISTRICT} value={d.DISTRICT}>
              {districtLabel(locale, d.DISTRICT)}
            </option>
          ))}
        </select>
      </label>

      <label className="control-field">
        <span className="control-label">{t("filters.municipality")}</span>
        <select
          value={municipalityId ?? ""}
          disabled={!districtName}
          onChange={(e) => {
            const value = e.target.value;
            onMunicipalityChange(value === "" ? null : value);
          }}
        >
          <option value="">
            {!districtName
              ? t("filters.selectDistrictFirst")
              : t("filters.allMunicipalities")}
          </option>
          {municipalityOptions.map((m) => {
            const level = municipalityLevelLabel(locale, m.level);
            return (
              <option key={m.id} value={m.id}>
                {municipalityLabel(locale, m.id, m.name)}
                {level ? ` (${level})` : ""}
              </option>
            );
          })}
        </select>
      </label>
    </div>
  );
}
