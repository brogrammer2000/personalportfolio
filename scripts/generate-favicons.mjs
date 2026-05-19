import sharp from "sharp";
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../public");

// AutoAwesome SVG path (from @mui/icons-material)
// viewBox 0 0 24 24
const iconPath =
  "m19 9 1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z";

function makeSvg(size, bgColor = "transparent", iconColor = "#ffffff", padding = 0.15) {
  const pad = size * padding;
  const iconSize = size - pad * 2;
  const scale = iconSize / 24;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  ${bgColor !== "transparent" ? `<rect width="${size}" height="${size}" fill="${bgColor}" rx="${size * 0.2}"/>` : ""}
  <g transform="translate(${pad}, ${pad}) scale(${scale})">
    <path d="${iconPath}" fill="${iconColor}"/>
  </g>
</svg>`;
}

// Write ICO file (supports multiple embedded PNG sizes)
async function writeIco(pngBuffers, outPath) {
  const numImages = pngBuffers.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dirSize = numImages * dirEntrySize;

  let dataOffset = headerSize + dirSize;
  const entries = [];
  for (const buf of pngBuffers) {
    entries.push({ buf, offset: dataOffset });
    dataOffset += buf.length;
  }

  const total = dataOffset;
  const out = Buffer.alloc(total);

  // ICONDIR header
  out.writeUInt16LE(0, 0);        // reserved
  out.writeUInt16LE(1, 2);        // type: 1 = ICO
  out.writeUInt16LE(numImages, 4);

  let pos = headerSize;
  for (let i = 0; i < numImages; i++) {
    const { buf, offset } = entries[i];
    // Size in ICO directory: 0 means 256
    const dim = pngBuffers[i].length > 0
      ? (i === 0 ? 16 : 32) // we know our sizes
      : 0;
    out.writeUInt8(dim === 256 ? 0 : dim, pos);     // width
    out.writeUInt8(dim === 256 ? 0 : dim, pos + 1); // height
    out.writeUInt8(0, pos + 2);   // color count
    out.writeUInt8(0, pos + 3);   // reserved
    out.writeUInt16LE(1, pos + 4); // color planes
    out.writeUInt16LE(32, pos + 6); // bits per pixel
    out.writeUInt32LE(buf.length, pos + 8);  // size of image data
    out.writeUInt32LE(offset, pos + 12); // offset
    pos += dirEntrySize;
  }

  for (const { buf, offset } of entries) {
    buf.copy(out, offset);
  }

  writeFileSync(outPath, out);
  console.log(`  wrote ${outPath}`);
}

async function main() {
  mkdirSync(publicDir, { recursive: true });

  const sizes = [
    { name: "favicon-16x16.png", size: 16, bg: "transparent" },
    { name: "favicon-32x32.png", size: 32, bg: "transparent" },
    { name: "apple-touch-icon.png", size: 180, bg: "#0b1220" },
  ];

  const pngBuffers = {};

  for (const { name, size, bg } of sizes) {
    const svg = makeSvg(size, bg);
    const buf = await sharp(Buffer.from(svg)).png().toBuffer();
    writeFileSync(join(publicDir, name), buf);
    pngBuffers[size] = buf;
    console.log(`  wrote public/${name}`);
  }

  // favicon.ico: 16×16 + 32×32 embedded PNGs
  await writeIco(
    [pngBuffers[16], pngBuffers[32]],
    join(publicDir, "favicon.ico")
  );

  // favicon.svg (bonus — modern browsers prefer this)
  writeFileSync(
    join(publicDir, "favicon.svg"),
    makeSvg(24, "transparent", "#ffffff", 0.05)
  );
  console.log("  wrote public/favicon.svg");

  console.log("\nDone.");
}

main().catch((e) => { console.error(e); process.exit(1); });
