"use client";

import { useMemo, useState } from "react";
import {
  getSchools,
  PROGRAM_OPTIONS,
  programLabel,
  type ProgramSlug,
} from "@/data/schools";
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
  const [query, setQuery] = useState("");
  const [program, setProgram] = useState<ProgramSlug | "">("");

  const provinceName =
    provinceId != null
      ? (provinces.find((p) => p.id === provinceId)?.name ?? null)
      : null;
  const districtTitle = districtName ? titleCaseDistrict(districtName) : null;
  const municipalityName = municipalityId
    ? (municipalities.find((m) => m.id === municipalityId)?.name ?? null)
    : null;

  const schools = useMemo(
    () =>
      getSchools({
        provinceName,
        districtTitle,
        municipalityName,
        query,
        program: program || null,
      }),
    [provinceName, districtTitle, municipalityName, query, program],
  );

  const label = scopeLabel(provinceId, districtName, municipalityId);

  return (
    <section className="schools-panel p-2">
      <div className="schools-heading">
        <h2 className="schools-title">Schools in {label}</h2>
      </div>

      <div className="schools-toolbar">
        <label className="schools-search">
          <span className="control-label">Search</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by school name"
          />
        </label>
        <label className="control-field schools-program">
          <span className="control-label">Program</span>
          <select
            value={program}
            onChange={(e) =>
              setProgram((e.target.value || "") as ProgramSlug | "")
            }
          >
            <option value="">All programs</option>
            {PROGRAM_OPTIONS.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="schools-count">
        Found {schools.length} school{schools.length === 1 ? "" : "s"}
      </p>

      {schools.length === 0 ? (
        <p className="schools-empty">
          No schools match this search and filter selection.
        </p>
      ) : (
        <ul className="schools-list">
          {schools.map((school) => (
            <li key={school.id} className="school-item">
              <p className="school-name">{school.name}</p>
              <p className="school-location">
                {school.municipality}, {school.district}
              </p>
              <p className="school-program">
                {school.programs.map(programLabel).join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
