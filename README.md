# TechPaila

Interactive map of Nepal for finding government technical and vocational secondary schools. 
App link: https://nodejs-134-3000.sea1.zerops.app/

---

## Table of contents

1. [Problem statement](#problem-statement)
2. [Introduction](#introduction)
3. [Features](#features)
4. [How Zerops is used](#how-zerops-is-used)
5. [Architecture](#architecture)
6. [Tools & credits](#tools--credits)
7. [Feedback for Zerops](#feedback-for-zerops)
8. [Run locally](#run-locally)
9. [Live link](https://nodejs-134-3000.sea1.zerops.app/)

---

## Problem statement

Nepal has hundreds of government secondary schools that run technical and vocational programs (computer engineering, civil, electrical, plant science, animal science, and more). The (unofficial) lists exist in PDFs and tables, but there is no simple way for a student or parent to answer: *“Where near me can I study this program?”*

TechPaila turns that data into a map and a short recommendation flow so location and program choice come first.

It is especially useful because there are hundreds of students who lack essential resources like a computers, but are interested in computer science. Luckily, the government has put out resources but they aren't visible. I'm currently in bachelors but I was in the same shoes 5 years ago, and finding the nearest school and studying this course has really helped me.

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

<img width="1710" height="1034" alt="image" src="https://github.com/user-attachments/assets/b9efcf12-9650-4433-83ae-ce17f24952de" />

> Screenshot of the project, with an interactive map

---

## How Zerops is used

- **ZCP (Zerops Control Plane)** — project was built and iterated against the live Node.js service (edit on the service filesystem, run builds/dev over SSH, env and deploys via Zerops tools).
- **Zerops** — hosting and deploy: `zerops.yml` builds with `npm install && npm run build` and runs `npm start` on port 3000 for the `nodejs` service.

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


|                     |                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------|
| **Stack**           | Next.js 16 (App Router), React 19, Leaflet, TypeScript, Tailwind 4, Zerops, Zerops Object Storage     |
| **Zerops services** | `zcp` (control plane), `nodejs` (alpine/nodejs@24 runtime), `storage` (object-storage, public-read — logo/brand assets) |
| **Boundaries**      | [mesaugat/geoJSON-Nepal](https://github.com/mesaugat/geoJSON-Nepal)                                   |
| **Map inspiration** | [Election Result Map 2082](https://result.election.gov.np/MapElectionResult2082.aspx)                 |
| **Deploy**          | [Zerops](https://zerops.io) + ZCP                                                                     |


### AI usage

While working in ZCP, I used Claude Code for small functions and features. Most of the design help came from AI (on a related note, I’m not strong in colors and designs) including adapting the site to neo-brutalism, generating the SVG logo, and the initial loading animation.

---

## Feedback for Zerops

Notes for Zerops (and Francesco Ciulla) from my side:

1. **Browser IDE felt slow.** Sometimes it stopped being usable, so I switched back to a local IDE for a while. I’d like to open the Zerops environment and connect it to local VS Code the way GitHub Codespaces does.
2. **Random disconnects** while I was gathering data / researching in another tab. Good: it remembered the session and restarted the Next.js dev server. Bad: it messed up the Claude Code prompt so I had to redo that work, and after reload I had to re-authenticate for git pull/push — that part was a poor experience.

---

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).
