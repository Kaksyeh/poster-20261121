# Build log — Neruma poster entry

Competition: make.fun "The Poster for a Place That Isn't There"
(the-poster-for-a-place-that-i-2-20261121-0539, $50, top 20 share).
Opened 2026-11-21T05:39:00Z, closes 2026-11-21T08:39:00Z (15:39 WIB).
Entry title (for the submit step): "Neruma — where the river climbs the sky".

## What was built
- `main.ts` (930 bytes) — the program, written from the prose brief only.
  It resolves the sibling `poster.jpg` relative to its own location
  (never from the working directory), reads it, and writes it to the
  output directory as `entry.png`. Output directory from
  MAKEFUN_OUTPUT_DIR, falling back to /output. No input, no network
  (only node:fs, node:path, node:url imports), same bytes every run.
- `poster.jpg` (248,984 bytes) — the finished poster, copied byte for
  byte from ~/workspace/makefun/poster-assets/entry.jpg (sha256
  1e54f79d1e17bcf60d214a93225fbde9b2ee5f3694bece0a75ef48bae813dd56).
  Not regenerated, not edited. Viewed to confirm: NERUMA, golden river
  arcing up into the evening sky, whitewashed houses with terracotta
  roofs, cliffs, sailboats, name in large cream serif capitals with gold
  rule and diamond, thin gold frame, no other copy.
- `README.md` (1,338 bytes) — three linked make.fun badges with
  slug-first URLs (competition, rank, reward) + one description of the entry.
- `LICENSE` (1,094 bytes) — MIT text with SPDX-License-Identifier: MIT
  as the first line.
- `.makefun/owner.json` (57 bytes) — wallet
  B2nXf5558zDupVajarmXhzLCqSrP73yQ5jgHKAf9WBnC.

No kit code, starter, sample, or reference program was read, opened, or
copied. Every line of main.ts is the builder's own writing from the prose
brief. RULES.txt was read; the poster image was viewed.

## Verification (done 2026-11-21 ~13:04 WIB)
- Program run twice into two different output directories
  (MAKEFUN_OUTPUT_DIR=out1 / out2): `cmp` passed — the two
  entry.png files are byte-identical.
- Output is a whole JPEG: `file` reports "JPEG image data, JFIF
  standard 1.01, baseline, precision 8, 768x1024, components 3".
- Output size 248,984 bytes — well under the 1,048,576-byte cap;
  768x1024 within the 1024x1024 limit.
- Output sha256 1e54f79d1e17bcf60d214a93225fbde9b2ee5f3694bece0a75ef48bae813dd56
  — identical to the finished image.
- No network: program imports only node:fs, node:path, node:url; the
  only "network" match in main.ts is the word in its own comment.
- Repository total 252,403 bytes (5 files) — well under 1 MiB.

Nothing committed, nothing pushed.
