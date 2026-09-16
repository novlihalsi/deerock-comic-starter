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
| `episodes/00-trailer/results/ep00_page01_v004.png` | 00-trailer | **APPROVED — final** | 941 x 1672 (9:16). Approved 2026-09-16. |
| `episodes/00-trailer/results/ep00_page01_v003.png` | 00-trailer | superseded by v004 | Revision pass; lost Aki's greeting in Panel 07. |
| `episodes/00-trailer/results/ep00_page01_v002.png` | 00-trailer | superseded by v003 | First fully correct page: cast, house and lobby all matching their sheets. |
| `episodes/00-trailer/results/ep00_page01_v001.png` | 00-trailer | draft — rejected | Single-shot full page. Nine rule breaks, see `episodes/00-trailer/drift-log.md`. Keep as a tone/layout reference only. |

### Notes on the approved page
Pre-flight checklist passes: 10 panels in order, all five characters identifiable, Deerock and Kai
clearly separate, Aki and Mika clearly separate, house and lobby geometry match their sheets,
Panel 10 daylight matches the 09:10 time flow, no captions or name tags, title block exact.
Produced in one shot; no panel-level artwork exists.

**Revision history after the first correct render:**
- `v002` — generated from `episodes/00-trailer/generation-prompt.md`. Correct cast and sets, but
  Panel 10's sky read as dusk, Panel 07's "Oke." sat at the far right away from Deerock, and
  Panel 08's Aki line read "Empty state. pakai yang ini, ya."
- `v003` — external revision. Panel 10 sky changed to daylight, "Oke." moved next to Deerock,
  Panel 08 gained "-nya". Regression: Panel 07 lost Aki's opening line "Pagi, Rock."
- `v004` — external revision restored "Pagi, Rock." in Panel 07. A stray full stop after
  "state-nya" in Panel 08 was then removed by a direct pixel edit: 30 pixels inside a 4 x 8 box at
  (166, 1012), filled from the bubble background 6 px to the right. No other pixel changed.

**Accepted deviation in v004:**
- Panel 07, Kai's line reads "API auth udah siap." instead of the specified
  "Pagi. API auth udah siap." Aki greets Deerock first, so the exchange still reads naturally.
  Left as is; adding the word would mean retypesetting the bubble.

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
