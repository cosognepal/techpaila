"use client";

import { getSchools } from "@/data/schools";
import provinces from "@/data/provinces.json";
import municipalities from "@/data/municipalities.json";
import { titleCaseDistrict } from "@/lib/map";

type SchoolsProps = {
  provinceId: number | null;
  districtName: string | null;
  municipalityId: string | null;
};

function scopeLabel(
  provinceId: number | null,
  districtName: string | null,
  municipalityId: string | null,
): string {
  if (municipalityId) {
    const muni = municipalities.find((m) => m.id === municipalityId);
    return muni?.name ?? "municipality";
  }
  if (districtName) return titleCaseDistrict(districtName);
  if (provinceId != null) {
    return provinces.find((p) => p.id === provinceId)?.name ?? "province";
  }
  return "Nepal";
}

export default function Schools({
  provinceId,
  districtName,
  municipalityId,
}: SchoolsProps) {
  const schools = getSchools({ provinceId, districtName, municipalityId });
  const label = scopeLabel(provinceId, districtName, municipalityId);

  return (
    <aside className="schools-panel">
      <h2 className="schools-title">Schools in {label}</h2>
      <p className="schools-count">
        {schools.length} school{schools.length === 1 ? "" : "s"}
      </p>
      {schools.length === 0 ? (
        <p className="schools-empty">
          No placeholder schools listed for this selection yet.
        </p>
      ) : (
        <ul className="schools-list">
          {schools.map((school) => (
            <li key={school.id} className="school-item">
              <p className="school-name">{school.name}</p>
              <p className="school-program">{school.program}</p>
              {school.municipalityName ? (
                <p className="school-meta">{school.municipalityName}</p>
              ) : null}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
