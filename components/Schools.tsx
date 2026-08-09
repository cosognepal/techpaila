"use client";

import { useMemo, useState } from "react";
import {
  getSchools,
  PROGRAM_OPTIONS,
  programLabel,
  type ProgramSlug,
  type School,
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

function fullLocation(school: School): string {
  const parts = [
    school.address,
    school.municipality,
    school.district,
    school.province,
  ].filter(Boolean);
  // Avoid repeating the same place name twice in a row
  return parts.filter((part, i) => part !== parts[i - 1]).join(", ");
}

function SchoolCard({ school }: { school: School }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className={`school-item${expanded ? " is-expanded" : ""}`}>
      <div className="school-item-main">
        <div className="school-item-copy">
          <p className="school-name">{school.name}</p>
          <p className="school-location">{fullLocation(school)}</p>
          <div className="school-programs">
            <span className="school-field-label">Programs</span>
            <ul className="school-program-list">
              {school.programs.map((slug) => (
                <li key={slug} className="school-program-chip">
                  {programLabel(slug)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button
          type="button"
          className="school-expand-btn"
          aria-expanded={expanded}
          aria-label={expanded ? "Hide details" : "Show more details"}
          onClick={() => setExpanded((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            {expanded ? (
              <path d="M18 15l-6-6-6 6" />
            ) : (
              <path d="M6 9l6 6 6-6" />
            )}
          </svg>
        </button>
      </div>

      {expanded ? (
        <div className="school-item-details">
          <div className="school-detail-block">
            <span className="school-field-label">Contact</span>
            <p className="school-detail-line">
              <a href={`tel:${school.contact_phone}`}>{school.contact_phone}</a>
            </p>
            <p className="school-detail-line">
              <a href={`mailto:${school.contact_email}`}>
                {school.contact_email}
              </a>
            </p>
          </div>

          <div className="school-detail-block">
            <span className="school-field-label">Website</span>
            <p className="school-detail-line">
              <a
                href={school.official_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {school.official_link.replace(/^https?:\/\//, "")}
              </a>
            </p>
          </div>

          <div className="school-detail-meta">
            <p>
              <span className="school-field-label">Last updated</span>{" "}
              {school.last_updated}
            </p>
            <p>
              <span className="school-field-label">Source</span> {school.source}
            </p>
          </div>
        </div>
      ) : null}
    </li>
  );
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
            <SchoolCard key={school.id} school={school} />
          ))}
        </ul>
      )}
    </section>
  );
}
