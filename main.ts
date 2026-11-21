// main.ts — news-image-20261121 v2 (full-day edition).
//
// Saturday 21 November 2026 in one image: 44 dated stories from
// 7 regions on a single broadsheet page.
//
//   Heroes: 1. Peru quake M6.7, no deaths (Fri 20 Nov 19:09 local,
//      first reported Sat 00:09 GMT) · 2. Missiles hit Poland, NATO
//      chief in Warsaw today · 3. Wall Street sinks into correction.
//   Mids 4-15: GTA VI $3.79bn · COP31 no deal, plenary suspended ·
//      Myanmar verdict fallout · UK-EU three deals · Gaza aid call ·
//      Kryvyi Rih 2 dead, 42 hurt · Bolsonaro in hospital · Riyadh
//      intercepts · Iran war, ninth month · France protests, 4th
//      weekend · Kyiv 3 dead as bridges hit · Basra fire 4 dead.
//   Briefs 16-44: peace-deal deadline, Kushner NATO float, Trump
//      "defund Ukraine", Denmark plot, 400 drones, UNICEF 114
//      children, SEC Nvidia probe, gold/Bitcoin, Nikkei/Sensex,
//      Venezuela $12bn, TPS ends for 600,000, Eisenkot, Pakistan
//      bombing + 74 militants, Palisades verdict, daraxonrasib,
//      EU EUR 1bn aid, Gen Z protests in 25 countries, Han Duck-soo
//      retrial, Argentina bonds, Haiti blast, Georgia mourning day,
//      Bukele third term, Rahul SENA century, Ireland v South Africa
//      tonight, Vanuatu at COP31, Lebanon strikes, Houthi claims,
//      Gaza ground op ends.
//
// The image is drawn programmatically (PIL, deterministic, no
// network, no clock) and stored in this repository as entry.png.
// This program only verifies that stored image and copies it to
// the output directory the grader provides.
//
// Run it:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// Two runs write byte-identical files.

import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = {
  file: "entry.png",
  sha256: "c2c38d193ea12bcf8d9627bad04a9bad9353623e5cb4695a911eceeecd8568dd",
  bytes: 252936,
  width: 1024,
  height: 1024,
  maxBytes: 1048576,
};

const PNG_SIGNATURE = Buffer.from([
  0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
]);

function sha256Hex(buf) {
  return createHash("sha256").update(buf).digest("hex");
}

function pngDimensions(buf) {
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

// Every gate the entry must pass, checked on the stored bytes
// before anything is copied: PNG magic, 1024x1024 IHDR, the 1 MiB
// cap, and the exact verified render hash. A wrong file fails here,
// never at grade time.
function verifyEntryPng(buf) {
  if (!buf.subarray(0, 8).equals(PNG_SIGNATURE)) {
    throw new Error("entry.png does not start with the PNG signature");
  }
  const { width, height } = pngDimensions(buf);
  if (width !== ENTRY.width || height !== ENTRY.height) {
    throw new Error(
      `entry.png is ${width}x${height}, expected ` +
        `${ENTRY.width}x${ENTRY.height}`,
    );
  }
  if (buf.length > ENTRY.maxBytes) {
    throw new Error(
      `entry.png is ${buf.length} bytes, over the 1 MiB cap`,
    );
  }
  const digest = sha256Hex(buf);
  if (buf.length !== ENTRY.bytes || digest !== ENTRY.sha256) {
    throw new Error(
      `entry.png mismatch: ${buf.length} bytes, sha256 ${digest}, ` +
        `expected ${ENTRY.bytes} bytes, sha256 ${ENTRY.sha256}`,
    );
  }
  return { width, height, bytes: buf.length, sha256: digest };
}

function main() {
  // An empty MAKEFUN_OUTPUT_DIR would make join() produce a bare
  // filename in the working directory; treat it as unset instead.
  const outDir = process.env.MAKEFUN_OUTPUT_DIR?.trim() || "out";
  const source = new URL(`./${ENTRY.file}`, import.meta.url);
  const dest = join(outDir, ENTRY.file);
  // The grader's output directory may not exist yet; create it first.
  mkdirSync(outDir, { recursive: true });
  const srcBytes = readFileSync(source);
  const checked = verifyEntryPng(srcBytes);
  copyFileSync(source, dest);
  const dstBytes = readFileSync(dest);
  // Re-verify the copy with the same gates, not just its hash:
  // a truncated or swapped write must fail here as well.
  const rechecked = verifyEntryPng(dstBytes);
  if (rechecked.sha256 !== checked.sha256) {
    throw new Error(
      `entry.png copy mismatch: ${dstBytes.length} of ${srcBytes.length} bytes`,
    );
  }
  console.log(
    `entry.png written: ${checked.bytes} bytes, ` +
      `${checked.width}x${checked.height}, sha256 ${checked.sha256}`,
  );
  console.log("44 dated stories · 7 regions · Saturday 21 November 2026");
}

main();
