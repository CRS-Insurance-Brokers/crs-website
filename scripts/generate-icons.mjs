/**
 * Generate PWA icons from a typographic SVG source. Run with:
 *   node scripts/generate-icons.mjs
 *
 * Output lands in public/icons/. Commit the generated files; this script
 * is not part of the build. Re-run when the mark or tokens change.
 */

import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "..", "public", "icons");

// Token values mirror globals.css — the icon stays on-brand without runtime
// theming concerns.
const BG = "#262262";     // --primary (CRS navy)
const INK = "#F3EEE1";    // --primary-ink

// Full-bleed icon: letterspaced "CRS" in a serif that reads like Fraunces.
// Georgia is the closest universally-available fallback.
function standardSvg(size) {
  const fontSize = Math.round(size * 0.42);
  const corner = Math.round(size * 0.18);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${corner}" ry="${corner}" fill="${BG}"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
    font-family="Georgia, 'Times New Roman', serif" font-weight="400"
    font-size="${fontSize}" letter-spacing="${Math.round(size * 0.008)}"
    fill="${INK}">CRS</text>
</svg>`;
}

// Maskable icon: fills the full frame (no rounded corners; the OS applies a
// mask) and keeps the "CRS" inside the 80% safe zone.
function maskableSvg(size) {
  const fontSize = Math.round(size * 0.34);
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" fill="${BG}"/>
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle"
    font-family="Georgia, 'Times New Roman', serif" font-weight="400"
    font-size="${fontSize}" letter-spacing="${Math.round(size * 0.008)}"
    fill="${INK}">CRS</text>
</svg>`;
}

async function render(svg, path) {
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(path);
  console.log("  ->", path);
}

console.log("Generating PWA icons in", OUT);
await render(standardSvg(192), join(OUT, "icon-192.png"));
await render(standardSvg(512), join(OUT, "icon-512.png"));
await render(maskableSvg(512), join(OUT, "icon-maskable-512.png"));
await render(standardSvg(180), join(OUT, "apple-touch-icon.png"));
console.log("Done.");
