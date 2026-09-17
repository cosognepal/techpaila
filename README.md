# TechPaila

Interactive map of Nepal for finding government technical and vocational secondary schools.

---

## Table of contents

1. [Problem statement](#problem-statement)
2. [Introduction](#introduction)
3. [Features](#features)
4. [Architecture](#architecture)
5. [Tools & credits](#tools--credits)
6. [Run locally](#run-locally)

---

## Problem statement

Nepal has hundreds of government secondary schools that run technical and vocational programs (computer engineering, civil, electrical, plant science, animal science, and more). The official lists exist in PDFs and tables (unofficially), but there is no simple way for a student or parent to answer: *“Where near me can I study this program?”*

TechPaila turns that data into a map and a short recommendation flow so location and program choice come first.

---



## Introduction

**TechPaila** is two words:

- **Tech** — technical and vocational education
- **Paila** (पाइला) — Nepali for *footstep* / *step*

Together: a first step into technical education in Nepal.

---



## Features

- **Nepal map explorer** — click province → district → municipality; dropdowns stay in sync with the map
- **School list** — filtered by location and program, bilingual names (English / Nepali)
- **Recommendation widget** — pick a program, use your location (or pick a district), see schools in your district and within ~30 km
- **Map pin from recommendations** — zoom the map to a school’s municipality
- **EN / NE UI** — language toggle for labels and place names
- **Fullscreen map mode** — recommendation FAB hides while exploring



### Screenshots

---



## Architecture

High level:

```
Browser
  ├── MapExplorer (province / district / municipality state)
  │     ├── MapView (Leaflet + GeoJSON layers)
  │     ├── Controls (dropdowns)
  │     └── Schools (filtered list)
  └── Recommend (FAB widget)
        ├── program pick → geolocation / district fallback
        └── rank by district + ~30 km (municipality centroids when available)

Data
  ├── schools.json (+ schools.ts filters)
  ├── place-names.json (EN/NE labels)
  ├── district / municipality centroids (distance)
  └── public/geo/*.geojson (map boundaries)
```

Leaflet is loaded client-only (`dynamic` + `ssr: false`) because it needs `window`. Ranking uses school municipality when it matches GeoJSON centroids, otherwise the district centroid.

---



## Tools & credits


|                     |                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------- |
| **Stack**           | Next.js 16 (App Router), React 19, Leaflet, TypeScript, Tailwind 4                    |
| **Boundaries**      | [mesaugat/geoJSON-Nepal](https://github.com/mesaugat/geoJSON-Nepal)                   |
| **Map inspiration** | [Election Result Map 2082](https://result.election.gov.np/MapElectionResult2082.aspx) |


---



## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).