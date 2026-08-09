"use client";

import { useMemo, useState } from "react";
import {
  getSchools,
  PROGRAM_OPTIONS,
  type ProgramSlug,
  type School,
} from "@/data/schools";
import provinces from "@/data/provinces.json";
import municipalities from "@/data/municipalities.json";
import { useLocale } from "@/hooks/useLocale";
import type { MessageKey } from "@/lib/i18n";
import {
  districtLabel,
  municipalityLabel,
  provinceLabel,
} from "@/lib/i18n/place-names";
import { titleCaseDistrict } from "@/lib/map";

type SchoolsProps = {
  provinceId: number | null;
  districtName: string | null;
  municipalityId: string | null;
};

function fullLocation(school: School): string {
  if (school.address) {
    return school.address;
  }

  const parts = [
    school.address,
    school.municipality,
    school.district,
    school.province,
  ].filter(Boolean);
  return parts.filter((part, i) => part !== parts[i - 1]).join(", ");
}

function SchoolCard({ school }: { school: School }) {
  const { t } = useLocale();
  const [expanded, setExpanded] = useState(false);

  return (
    <li className={`school-item${expanded ? " is-expanded" : ""}`}>
      <div className="school-item-main">
        <div className="school-item-copy">
          <p className="school-name">{school.name}</p>
          <p className="school-location">{fullLocation(school)}</p>
          <div className="school-programs">
            <span className="school-field-label">{t("schools.programs")}: </span>
            {school.programs.map((slug, i) => (
              <span key={slug} className="school-program-chip">
                {t(`programs.${slug}` as MessageKey)}
                {i < school.programs.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="school-expand-btn"
          aria-expanded={expanded}
          aria-label={
            expanded ? t("schools.hideDetails") : t("schools.showDetails")
          }
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
            <span className="school-field-label">{t("schools.contact")}</span>
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
            <span className="school-field-label">{t("schools.website")}</span>
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
              <span className="school-field-label">
                {t("schools.lastUpdated")}
              </span>{" "}
              {school.last_updated}
            </p>
            <p>
              <span className="school-field-label">{t("schools.source")}</span>{" "}
              {school.source}
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
  const { t, locale } = useLocale();
  const [query, setQuery] = useState("");
  const [program, setProgram] = useState<ProgramSlug | "">("");

  const provinceRecord =
    provinceId != null ? provinces.find((p) => p.id === provinceId) : null;
  const provinceName = provinceRecord?.name ?? null;
  const districtTitle = districtName ? titleCaseDistrict(districtName) : null;
  const municipalityRecord = municipalityId
    ? municipalities.find((m) => m.id === municipalityId)
    : null;
  const municipalityName = municipalityRecord?.name ?? null;

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

  const scope = (() => {
    if (municipalityId && municipalityRecord) {
      return municipalityLabel(locale, municipalityId, municipalityRecord.name);
    }
    if (districtName) return districtLabel(locale, districtName);
    if (provinceId != null && provinceRecord) {
      return provinceLabel(locale, provinceId, provinceRecord.name);
    }
    return t("schools.nepal");
  })();

  const foundLabel =
    schools.length === 1
      ? t("schools.foundOne", { count: schools.length })
      : t("schools.foundMany", { count: schools.length });

  return (
    <section className="schools-panel p-2">
      <div className="schools-heading">
        <h2 className="schools-title">
          {t("schools.titleIn", { scope })}
        </h2>
      </div>

      <div className="schools-toolbar">
        <label className="schools-search">
          <span className="control-label">{t("schools.search")}</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("schools.searchPlaceholder")}
          />
        </label>
        <label className="control-field schools-program">
          <span className="control-label">{t("schools.program")}</span>
          <select
            value={program}
            onChange={(e) =>
              setProgram((e.target.value || "") as ProgramSlug | "")
            }
          >
            <option value="">{t("schools.allPrograms")}</option>
            {PROGRAM_OPTIONS.map((p) => (
              <option key={p.value} value={p.value}>
                {t(`programs.${p.value}` as MessageKey)}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="schools-count">{foundLabel}</p>

      {schools.length === 0 ? (
        <p className="schools-empty">{t("schools.empty")}</p>
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
