"use client";

import { getSchoolsForDistrict } from "@/data/schools";
import { titleCaseDistrict } from "@/lib/map";

type SchoolsProps = {
  districtName: string | null;
};

export default function Schools({ districtName }: SchoolsProps) {
  const schools = getSchoolsForDistrict(districtName);

  if (!districtName) {
    return (
      <aside className="schools-panel">
        <h2 className="schools-title">Schools</h2>
        <p className="schools-empty">
          Select a district on the map or from the dropdown to see schools.
        </p>
      </aside>
    );
  }

  return (
    <aside className="schools-panel">
      <h2 className="schools-title">
        Schools in {titleCaseDistrict(districtName)}
      </h2>
      {schools.length === 0 ? (
        <p className="schools-empty">
          No placeholder schools listed for this district yet.
        </p>
      ) : (
        <ul className="schools-list">
          {schools.map((school) => (
            <li key={school.id} className="school-item">
              <p className="school-name">{school.name}</p>
              <p className="school-program">{school.program}</p>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
