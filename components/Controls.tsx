"use client";

import provinces from "@/data/provinces.json";
import districts from "@/data/districts.json";
import { titleCaseDistrict } from "@/lib/map";

type ControlsProps = {
  provinceId: number | null;
  districtName: string | null;
  onProvinceChange: (provinceId: number | null) => void;
  onDistrictChange: (districtName: string | null) => void;
};

export default function Controls({
  provinceId,
  districtName,
  onProvinceChange,
  onDistrictChange,
}: ControlsProps) {
  const districtOptions = districts.filter((d) =>
    provinceId == null ? true : d.PROVINCE === provinceId,
  );

  return (
    <div className="controls">
      <label className="control-field">
        <span className="control-label">Province</span>
        <select
          value={provinceId ?? ""}
          onChange={(e) => {
            const value = e.target.value;
            onProvinceChange(value === "" ? null : Number(value));
          }}
        >
          <option value="">All provinces</option>
          {provinces.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </select>
      </label>

      <label className="control-field">
        <span className="control-label">District</span>
        <select
          value={districtName ?? ""}
          disabled={provinceId == null}
          onChange={(e) => {
            const value = e.target.value;
            onDistrictChange(value === "" ? null : value);
          }}
        >
          <option value="">
            {provinceId == null ? "Select a province first" : "All districts"}
          </option>
          {districtOptions.map((d) => (
            <option key={d.DISTRICT} value={d.DISTRICT}>
              {titleCaseDistrict(d.DISTRICT)}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
