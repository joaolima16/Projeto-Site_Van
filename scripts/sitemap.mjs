import { writeFile } from "fs/promises";
import { join } from "path";

const BASE_URL = "https://transporte-executivo.vercel.app";

const staticRoutes = ["/", "/servicos", "/galeria", "/contato"];

const travelSlugs = [
  "rave-pirassurunga",
  "congresso-paranapiacaba",
  "excursao-pirassurunga",
  "museu-do-ipiranga",
  "casamento-mogi",
  "monte-siao",
];

const travelRoutes = travelSlugs.map((slug) => `/viagem/${slug}`);

const allRoutes = [...staticRoutes, ...travelRoutes];

const today = new Date().toISOString().split("T")[0];

const urls = allRoutes
  .map((route) => {
    const isTravel = route.startsWith("/viagem/");
    return `  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${isTravel ? "monthly" : "weekly"}</changefreq>
    <priority>${isTravel ? "0.8" : route === "/" ? "1.0" : "0.7"}</priority>
  </url>`;
  })
  .join("\n");

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

const DIST_DIR = join(import.meta.dirname, "..", "dist");
const PUBLIC_DIR = join(import.meta.dirname, "..", "public");

await writeFile(join(PUBLIC_DIR, "sitemap.xml"), sitemap);
await writeFile(join(DIST_DIR, "sitemap.xml"), sitemap);

console.log("[sitemap] ✓ sitemap.xml generated with", allRoutes.length, "routes");
