#!/usr/bin/env node
// Verifies that every asset path cited in the repo's markdown actually exists.
// A broken path is silent poison here: an agent told to attach `locations/home.png`
// will just generate the room from imagination if the file is not there.
//
//   node tools/check-refs.mjs

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const SKIP_DIRS = new Set([".git", "node_modules"]);
const ASSET_RE = /`([A-Za-z0-9_\-./]+\.(?:png|jpg|jpeg|webp|md|mjs))`/g;

// Paths that deliberately no longer exist, mentioned in change logs and history notes.
// Add a line here when you rename an asset and want the old name to stay readable in prose.
const RETIRED = new Set([
  "locations/deerocks-home.png",
  "props/deerocks-motorcycle-addtional-ref-1.jpg",
  "characters/deerock-additional-face-ref-1.png",
  "deerock-additional-face-ref-1.png",
]);

const IDS = [
  "CHAR-DEEROCK", "CHAR-AKI", "CHAR-KAI", "CHAR-RIN", "CHAR-MIKA",
  "LOC-HOME", "LOC-STATION", "LOC-KRL", "LOC-OFFICE", "LOC-CAFE",
  "PROP-MOTORCYCLE",
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (SKIP_DIRS.has(entry)) continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (entry.endsWith(".md")) out.push(full);
  }
  return out;
}

const problems = [];
let checked = 0;

for (const file of walk(root)) {
  const rel = relative(root, file).split(sep).join("/");
  const text = readFileSync(file, "utf8");

  text.split("\n").forEach((line, i) => {
    for (const [, cited] of line.matchAll(ASSET_RE)) {
      // Template placeholders and output-name patterns are not real paths.
      if (cited.includes("<") || /^ep\d/.test(cited.split("/").pop())) continue;
      if (RETIRED.has(cited)) continue;
      // A bare filename with no directory is prose ("the episode's `storyboard.md`"),
      // not a path an agent could attach. Every attachable path in this repo has a folder.
      if (!cited.includes("/")) continue;
      checked++;
      // A citation may be repo-relative or relative to the file that cites it.
      const resolves =
        existsSync(join(root, cited)) || existsSync(join(dirname(file), cited));
      if (!resolves) problems.push(`${rel}:${i + 1}  missing: ${cited}`);
    }
  });
}

const registry = readFileSync(join(root, "references/registry.md"), "utf8");
for (const id of IDS) {
  if (!registry.includes(id)) problems.push(`references/registry.md  missing ID: ${id}`);
}

if (problems.length) {
  console.error(`\n${problems.length} broken reference(s):\n`);
  for (const p of problems) console.error("  " + p);
  console.error("");
  process.exit(1);
}

console.log(`OK — ${checked} cited paths resolve, ${IDS.length} IDs registered.`);
