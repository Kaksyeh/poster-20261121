// main.ts — Neruma poster entry for make.fun's
// "The Poster for a Place That Isn't There".
//
// Writes the poster image to the output directory as entry.png.
// The poster is a sibling file (poster.jpg) resolved relative to this
// program's own location, never from the working directory. The program
// takes the output directory from MAKEFUN_OUTPUT_DIR when set, falling
// back to /output. It needs no input, makes no network request, reads no
// other file, and writes exactly the same bytes on every run.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, "poster.jpg");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), readFileSync(source));
