"use client";

import { useState } from "react";
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

function SchoolCard({
  school,
  locale,
}: {
  school: School;
  locale: "en" | "ne";
}) {
  const { t } = useLocale();
  const [expanded, setExpanded] = useState(false);

  const name = locale === "ne" ? school.name_ne : school.name_en;
  const location =
    locale === "ne"
      ? [school.municipality_ne, school.district_ne].filter(Boolean).join(", ")
      : [school.municipality_en, school.district].filter(Boolean).join(", ");

  return (
    <li className={`school-item${expanded ? " is-expanded" : ""}`}>
      <div className="school-item-main">
        <div className="school-item-copy">
          <p className="school-name">{name}</p>
          <p className="school-location">{location}</p>
          <div className="school-programs">
            <span className="school-field-label">
              {t("schools.programs")}:{" "}
            </span>
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
          {(school.contact_phone || school.contact_email) && (
            <div className="school-detail-block">
              <span className="school-field-label">{t("schools.contact")}</span>
              {school.contact_phone && (
                <p className="school-detail-line">
                  <a href={`tel:${school.contact_phone}`}>
                    {school.contact_phone}
                  </a>
                </p>
              )}
              {school.contact_email && (
                <p className="school-detail-line">
                  <a href={`mailto:${school.contact_email}`}>
                    {school.contact_email}
                  </a>
                </p>
              )}
            </div>
          )}

          {school.official_link && (
            <div className="school-detail-block">
              <span className="school-field-label">
                {t("schools.website")}
              </span>
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
          )}

          {school.facebook && (
            <div className="school-detail-block">
              <span className="school-field-label">
                {t("schools.facebook")}
              </span>
              <p className="school-detail-line">
                <a
                  href={school.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {school.facebook.replace(/^https?:\/\/(www\.)?/, "")}
                </a>
              </p>
            </div>
          )}

          {school.google_maps_link && (
            <div className="school-detail-block">
              <span className="school-field-label">
                {t("schools.googleMaps")}
              </span>
              <p className="school-detail-line">
                <a
                  href={school.google_maps_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("schools.googleMaps")}
                </a>
              </p>
            </div>
          )}

          <div className="school-detail-meta">
            {school.last_updated && (
              <p>
                <span className="school-field-label">
                  {t("schools.lastUpdated")}
                </span>{" "}
                {school.last_updated}
              </p>
            )}
            {school.source && (
              <p>
                <span className="school-field-label">
                  {t("schools.source")}
                </span>{" "}
                {school.source}
              </p>
            )}
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

  const schools = getSchools({
    provinceName,
    districtTitle,
    municipalityName,
    municipalityId,
    query,
    program: program || null,
  });

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
            <SchoolCard key={school.id} school={school} locale={locale} />
          ))}
        </ul>
      )}
    </section>
  );
}
