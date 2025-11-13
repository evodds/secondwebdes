/* Pull a tiny snapshot from Figma and write apps/web/content/figma.json */
import { writeFile, mkdir } from "node:fs/promises";

const token = process.env.FIGMA_TOKEN;
const fileKey = process.env.FIGMA_FILE_KEY;

if (!token || !fileKey) {
  console.error("Missing FIGMA_TOKEN or FIGMA_FILE_KEY in env.");
  process.exit(1);
}

const headers = { "X-Figma-Token": token };

async function main() {
  // Get file structure
  const fileRes = await fetch(`https://api.figma.com/v1/files/${fileKey}`, { headers });
  if (!fileRes.ok) throw new Error(`File fetch failed: ${fileRes.status}`);
  const fileJson: any = await fileRes.json();

  // Collect top-level frames (first page only to keep it small)
  const page = fileJson.document?.children?.[0];
  const frames = Array.isArray(page?.children)
    ? page.children.filter((n: any) => n.type === "FRAME").slice(0, 24)
    : [];

  const ids = frames.map((f: any) => f.id).join(",");
  // Ask Figma for PNG thumbnails
  const imgRes = await fetch(
    `https://api.figma.com/v1/images/${fileKey}?ids=${encodeURIComponent(ids)}&format=png&scale=2`,
    { headers }
  );
  if (!imgRes.ok) throw new Error(`Images fetch failed: ${imgRes.status}`);
  const imgJson: any = await imgRes.json();
  const images = imgJson.images || {};

  const out = frames.map((f: any) => ({
    id: f.id,
    name: f.name,
    thumb: images[f.id] ?? null,
  }));

  await mkdir("apps/web/content", { recursive: true });
  await writeFile("apps/web/content/figma.json", JSON.stringify(out, null, 2), "utf8");
  console.log(`Wrote ${out.length} frames to apps/web/content/figma.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
