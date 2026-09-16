# Approved Assets Manifest

The list of what is actually blessed. An image not listed here as `approved` is a draft,
whatever folder it happens to sit in.

Append a row when you approve something. Never edit a row in place — supersede it with a new
version and mark the old one `superseded`.

## Reference sheets

| Asset | ID | Version | Status | Approved |
| --- | --- | --- | --- | --- |
| `characters/deerock.png` | `CHAR-DEEROCK` | v1 | approved | 2026-09-16 |
| `characters/aki.png` | `CHAR-AKI` | v1 | approved | 2026-09-16 |
| `characters/kai.png` | `CHAR-KAI` | v1 | approved | 2026-09-16 |
| `characters/rin.png` | `CHAR-RIN` | v1 | approved | 2026-09-16 |
| `characters/mika.png` | `CHAR-MIKA` | v1 | approved | 2026-09-16 |
| `locations/home.png` | `LOC-HOME` | v1 | approved | 2026-09-16 |
| `locations/krl-station.png` | `LOC-STATION` | v1 | approved | 2026-09-16 |
| `locations/krl-interior.png` | `LOC-KRL` | v1 | approved | 2026-09-16 |
| `locations/office.png` | `LOC-OFFICE` | v1 | approved | 2026-09-16 |
| `locations/cafe.png` | `LOC-CAFE` | v1 | approved | 2026-09-16 |
| `props/motorcycle-vario150.jpg` | `PROP-MOTORCYCLE` | v1 | approved | 2026-09-16 |

## Generated panels and pages

| Asset | Episode | Status | Note |
| --- | --- | --- | --- |
| `episodes/00-trailer/results/ep00_page01_v001.png` | 00-trailer | **draft — rejected** | Single-shot full page. Nine rule breaks, see `episodes/00-trailer/drift-log.md`. Keep as a tone/layout reference only. |

No panel-level artwork has been generated yet.

## Not for production

| Asset | Status |
| --- | --- |
| `references/off-canon/deerock-virelux-cover.png` | quarantined — see `references/off-canon/README.md` |

## Change log

- **2026-09-16** — Sets corrected after the second render returned good characters in invented
  buildings. The NEXA lobby had been rendered with the access gates in front of the reception and
  the open workspace visible behind them; the sheet puts the reception desk first, the gates
  further in by the lifts, and the workspace on a separate floor. Deerock's house had been
  rendered as a modern two-storey glass villa with an MPV; the sheet shows a modest single-storey
  cluster house with a steel carport canopy and a dark grey sedan. Root cause: the one-shot prompt
  gave each character eight locked lines and each location one passing clause. The prompt now
  carries a locked `SETS` section, and `bible/consistency-guide.md` section 5 states the rule.

- **2026-09-16** — Kai's hair corrected after a generated page came back with Kai looking like
  Deerock. The sheet shows **short** hair — cropped at the sides and back, ears and nape exposed.
  The bible had described it as "short-to-medium, thick, spiky and messy with a heavy fringe",
  which overlapped almost word for word with Deerock's "medium length, layered and slightly
  messy"; "messy" was being applied to both. Length is now the lead separator in
  `bible/character-bible.md`, `prompts/character-blocks.md`, the trailer specs and
  `episodes/00-trailer/generation-prompt.md`. K-W01 trousers also specified as olive-brown to
  give the two a different silhouette at a distance.

- **2026-09-16** — Repo consistency pass. Renamed `locations/deerocks-home.png` → `locations/home.png`
  (every document already cited the latter), `props/deerocks-motorcycle-addtional-ref-1.jpg` →
  `props/motorcycle-vario150.jpg`, and moved `characters/deerock-additional-face-ref-1.png` to
  `references/off-canon/`. Character bible corrected to match the approved reference sheets:
  Kai's hair (spiky black, not a neat side part), Rin's hair (long, not shoulder-length), all
  ages and heights, and Deerock's home (a landed house in Cisauk, not an apartment).
