# Charleston SC Explorer

A modern, mobile-first Lowcountry explorer site built with Next.js 14, TypeScript, and Tailwind CSS. Discover Charleston's neighborhoods, parks, historical sites, landmarks, and explore an interactive map.

## Tech Stack

- **Next.js 14** — App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling with a coastal color palette
- **React Leaflet** — Interactive maps with OpenStreetMap tiles

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Routes

| Route                  | Description                                      |
| ---------------------- | ------------------------------------------------ |
| `/`                    | Home — hero, featured sections, CTA              |
| `/neighborhoods`       | Charleston neighborhoods & areas                 |
| `/parks-outdoor`       | Parks & outdoor activities                        |
| `/historical-cultural` | Historical & cultural sites                       |
| `/landmarks`           | Iconic Charleston landmarks                       |
| `/maps`                | Interactive map with 120+ real park markers       |

## Parks Data

The `/maps` page displays 124 parks and recreation facilities sourced from the [City of Charleston Open Data – Parks](https://data-charleston-sc.opendata.arcgis.com/items/109c6c5688f040908a11a7dee3a04b29) dataset.

To refresh the data:

```bash
npm run fetch-data
```

This runs `scripts/fetch-parks.mjs`, which fetches the latest GeoJSON from the City of Charleston's ArcGIS portal, computes polygon centroids for marker placement, and writes the result to both `data/parks.json` (for reference) and `public/data/parks.json` (served by Next.js).

Each park entry includes: id, name, slug, type, address, neighborhood, hours, amenities, latitude/longitude, and a link to the official page when available.

## Deployment

This project is intended for deployment on [Vercel](https://vercel.com). Push to your GitHub repository and import it in the Vercel dashboard for automatic deployments.
