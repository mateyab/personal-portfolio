/**
 * Resizes and compresses the full-resolution originals in image-sources/
 * into web-friendly versions under public/images/. Drop new originals in
 * image-sources/, add an entry below, then run `npm run optimize-images`.
 * image-sources/ is not part of the published build.
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const SRC_DIR = path.join(__dirname, "..", "image-sources");
const OUT_DIR = path.join(__dirname, "..", "public", "images");

// source file -> { out, width, format, quality }
const TASKS = [
  { src: "profile.jpg", out: "profile.jpg", width: 600, format: "jpeg", quality: 82 },
  { src: "trafficlight.jpeg", out: "trafficlight.jpg", width: 900, format: "jpeg", quality: 80 },
  { src: "VIMEA.jpg", out: "VIMEA.jpg", width: 900, format: "jpeg", quality: 80 },
  { src: "adventure_park.jpg", out: "adventure_park.jpg", width: 900, format: "jpeg", quality: 80 },
  { src: "fence.png", out: "fence.jpg", width: 900, format: "jpeg", quality: 80 },
  { src: "simulation.png", out: "simulation.png", width: 900, format: "png", quality: 80 },
];

async function run() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const task of TASKS) {
    const srcPath = path.join(SRC_DIR, task.src);
    const outPath = path.join(OUT_DIR, task.out);

    if (!fs.existsSync(srcPath)) {
      console.warn(`skip (missing): ${task.src}`);
      continue;
    }

    let pipeline = sharp(srcPath).resize({
      width: task.width,
      withoutEnlargement: true,
    });

    if (task.format === "jpeg") {
      pipeline = pipeline.jpeg({ quality: task.quality, mozjpeg: true });
    } else if (task.format === "png") {
      pipeline = pipeline.png({ quality: task.quality, compressionLevel: 9 });
    }

    await pipeline.toFile(outPath);

    const before = fs.statSync(srcPath).size;
    const after = fs.statSync(outPath).size;
    const pct = ((1 - after / before) * 100).toFixed(0);
    console.log(
      `${task.src} -> images/${task.out}  ` +
        `${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB (-${pct}%)`
    );
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
