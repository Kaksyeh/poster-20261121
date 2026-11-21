// main.ts — Neruma poster entry for make.fun's
// "The Poster for a Place That Isn't There".
//
// Writes the poster image to the output directory as entry.png.
// The poster is a sibling file (poster.jpg) resolved relative to this
// program's own location, never from the working directory. The program
// takes the output directory from MAKEFUN_OUTPUT_DIR when set, falling
// back to /output. It needs no input, makes no network request, reads no
// other file, and writes exactly the same bytes on every run. After
// writing, it reads the output back and throws unless its byte length
// matches the poster, so a truncated or failed write can never pass
// silently.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "poster.jpg");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const poster = readFileSync(source);
const output = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
writeFileSync(output, poster);

// Read the written file back and confirm it holds every byte of the
// poster: a truncated or failed write must fail loudly, never pass
// silently as a short entry.png.
const written = readFileSync(output);
if (written.length !== poster.length) {
  throw new Error(
    `entry.png is ${written.length} bytes, expected ${poster.length} bytes`,
  );
}
