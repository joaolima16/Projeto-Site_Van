import { createServer } from "http";
import { readFile, writeFile, mkdir, cp } from "fs/promises";
import { join } from "path";
import puppeteer from "puppeteer";

const DIST_DIR = join(import.meta.dirname, "..", "dist");
const PORT = 4173;

const routes = [
  "/",
  "/servicos",
  "/galeria",
  "/contato",
  "/viagem/rave-pirassurunga",
  "/viagem/congresso-paranapiacaba",
  "/viagem/excursao-pirassurunga",
  "/viagem/museu-do-ipiranga",
  "/viagem/casamento-mogi",
  "/viagem/campos-do-jordao",
];

const MIME = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

function getMimeType(url) {
  const ext = url.slice(url.lastIndexOf("."));
  return MIME[ext] || "application/octet-stream";
}

async function prerender() {
  let originalHtml = await readFile(join(DIST_DIR, "index.html"), "utf8");

  console.log("[prerender] Starting static server...");
  const server = createServer(async (req, res) => {
    const urlPath = req.url?.split("?")[0] || "/";

    if (urlPath.startsWith("/assets/") || urlPath.startsWith("/favicon")) {
      try {
        const data = await readFile(join(DIST_DIR, urlPath));
        res.writeHead(200, { "Content-Type": getMimeType(urlPath) });
        res.end(data);
      } catch {
        res.writeHead(404);
        res.end("Not found");
      }
      return;
    }

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(originalHtml);
  });

  await new Promise((resolve) => server.listen(PORT, () => resolve(server)));

  console.log("[prerender] Launching browser...");
  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-gpu"],
  });

  for (const route of routes) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`[prerender] Rendering ${route}...`);

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle0", timeout: 30000 });

    await page.waitForFunction(
      "document.querySelector('#root')?.children?.length > 0",
      { timeout: 15000 },
    );

    await new Promise((r) => setTimeout(r, 2000));

    const html = await page.content();

    const outputDir =
      route === "/" ? DIST_DIR : join(DIST_DIR, route.slice(1));
    await mkdir(outputDir, { recursive: true });

    const outputPath = join(outputDir, "index.html");
    await writeFile(outputPath, html);

    const title = await page.evaluate(() => document.title);
    console.log(`[prerender] ✓ ${route} — title: "${title}"`);

    await page.close();
  }

  await browser.close();
  server.close();
  console.log("[prerender] All routes rendered successfully!");
}

prerender().catch((err) => {
  console.error("[prerender] Failed:", err);
  process.exit(1);
});
