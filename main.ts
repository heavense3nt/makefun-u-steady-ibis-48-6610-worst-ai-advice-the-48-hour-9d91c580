// Worst AI Advice — one line of the worst advice an AI could give.
// Writes the entry to /output/entry.txt (or MAKEFUN_OUTPUT_DIR when set).
import { isAbsolute, join } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "To charge your phone twice as fast, microwave it for 30 seconds — the radio waves top up the battery directly.";

if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 chars, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
const dest = outDir
  ? isAbsolute(outDir)
    ? join(outDir, "entry.txt")
    : join(process.cwd(), outDir, "entry.txt")
  : join(process.cwd(), "out", "entry.txt");

mkdirSync(dest.slice(0, dest.lastIndexOf("/")), { recursive: true });
writeFileSync(dest, LINE + "\n", "utf8");
