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
| `episodes/01-just-one-small-change/results/ep01_page01_v002.png` | 01 | **APPROVED — final** | 1122 x 1402 (ratio 0.8003, 4:5), full bleed. Approved 2026-09-18. Page 1 of 5. |
| `episodes/01-just-one-small-change/results/ep01_page02_v001.png` | 01 | **APPROVED — final** | 1122 x 1402 (ratio 0.8003, 4:5), full bleed. Approved 2026-09-18. Page 2 of 5. |
| `episodes/01-just-one-small-change/results/ep01_page03_v001.png` | 01 | **APPROVED — final** | 1122 x 1402 (ratio 0.8003, 4:5), full bleed. Approved 2026-09-18. Page 3 of 5. |
| `episodes/01-just-one-small-change/results/ep01_page04_v001.png` | 01 | **APPROVED — final** | 1122 x 1402 (ratio 0.8003, 4:5), full bleed. Approved 2026-09-18. Page 4 of 5. |
| `episodes/01-just-one-small-change/results/ep01_page05_v001.png` | 01 | **APPROVED — final** | 1122 x 1402 (ratio 0.8003, 4:5), full bleed. Approved 2026-09-18. Page 5 of 5. |
| `episodes/01-just-one-small-change/results/ep01_page01_v001.png` | 01 | superseded — pre-publication story draft, kept | 1122 x 1402 (ratio 0.8003, 4:5). Approved 2026-09-17 for the draft story; superseded when the episode was revised after the trailer's publication. Style reference for page 1 `v002`. |
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

**Accepted deviations in v004:**
- Panel 07, Kai's line reads "API auth udah siap." instead of the specified
  "Pagi. API auth udah siap." Aki greets Deerock first, so the exchange still reads naturally.
  Left as is; adding the word would mean retypesetting the bubble.
- Panel 07, Aki's greeting reads "Pagi, Rock." The rule that Deerock is never shortened was set on
  2026-09-17, after this page was approved. The 4:5 edition's prompt uses "Pagi, Deerock."

### Episode 01 — final pages (`ep01_page01_v002.png`, `ep01_page02_v001.png` … `ep01_page05_v001.png`)
Generated one page per shot from `episodes/01-just-one-small-change/generation-prompts/` and
approved by the author as final on 2026-09-18. Measured on the filed images: all five are
1122 x 1402 (ratio 0.8003) with no white frame on any edge. All 14 panels are present in the
specified layouts (3 · 3 · 3 · 3 · 2), and every bubble, thought and SFX matches the storyboard word
for word, with "Deerock" written in full. The only wall text is the office's own `GOOD WORK GOOD DAY`
graphic in 1.1, which is allowed set signage. Deerock has his glasses in every panel, Kai's hair is
short with the ears exposed, and Aki (bun, pink `A-W02` hoodie) is never confused with Mika (long
loose hair, cream collared blouse).

**Accepted deviations** — noticed on filing; the pages were approved as they are:
- 1.1: Mika's expression is an open-mouthed smile rather than the specified small half-smile.
- 4.3: the sky is already golden-pink at 16:30, earlier than the time table's light. It carries
  straight into the 17:10 sunset of 5.1, so the page sequence still reads naturally.
- 5.2: Deerock's backpack follows the new rule, but some commuters in the background still wear
  theirs on their backs.

### Episode 01 — page 1 v001, pre-publication draft (`ep01_page01_v001.png`)
Generated in one shot from `episodes/01-just-one-small-change/generation-prompts/page-01.md`, first
attempt. Pre-flight checklist passes: 4:5 ratio, no title or caption, layout as specified, all four
bubbles and all screen text exact (`Rapihin empty state`, `Mika` / `Stand-up 09.30. Jangan lupa.`,
`Coba lagi`), `TING` present, Deerock's glasses in every panel and clean chin, Aki's bun, knitted
sweater and cargo trousers, kitchen, carriage and desk all matching their sheets, light following
the time table.

This page was to be the style reference for page 2 of the draft story. Since the revision it is the
style reference for the new page 1, `ep01_page01_v002.png`; its story content is not used.

**Accepted deviations** — minor, not worth a re-roll that would put the rest at risk:
- Deerock's small orange accent (`D-W01`) is not visible in any panel.
- Deerock's hair in 1.1 is swept slightly neater than in 1.3, where the fringe falls over the
  forehead. Clearly the same character.
- The 1.3 action beat of setting his backpack down beside the chair is not shown.
- The row split came out about 45 / 55 instead of the specified 55 / 45, which gives the
  two-bubble panel more room.

## Not for production

| Asset | Status |
| --- | --- |
| `references/off-canon/deerock-virelux-cover.png` | quarantined — see `references/off-canon/README.md` |

## Change log

- **2026-09-18** — Page format tightened from Episode 02 on: **1–2 panels per page**, at most 2
  bubbles per panel and 3 per page, about 25 words a page, and no fixed page count — only
  Instagram's 20-slide carousel ceiling, past which an episode is posted in parts. Three panels on
  a phone-sized 4:5 page proved too many. Two-panel pages must vary their shape: a layout menu
  (`1-FULL`, `2-STACK`, `2-SIDE`, `2-DIAG`, `2-INSET`) is in `bible/visual-style.md`, the
  storyboard names one per page, and no layout runs for more than two pages in a row; paste-ready
  layout blocks are in `prompts/image-generation.md`. Style references now attach two pages — the
  episode's anchor page and the previous page — so drift cannot compound across a longer carousel.
  The trailer and Episode 01 stay as made.

- **2026-09-18** — **Episode 01 complete.** Pages 1–5 approved as final and filed in
  `episodes/01-just-one-small-change/results/`: page 1 as `ep01_page01_v002.png` (the revised
  continuation from the published trailer; `v001` stays as the superseded pre-publication draft) and
  pages 2–5 as `v001`. All five pages are 4:5 with full bleed. Three minor deviations are recorded
  above.

- **2026-09-17** — Page 5 review: in panel 2 Deerock smiled at the back of his own phone, with the
  screen turned to the camera, and wore his office lanyard on the train. New series rule in
  `bible/visual-style.md`: screens face the character using them, and the camera moves over the
  shoulder when the reader must see the screen. Applied to page 5 panel 2, and to the two existing
  panels that already broke it — page 1 panel 1 (now over Deerock's shoulder, the reverse angle of the
  trailer's last shot) and page 4 panel 1 (now the same framing as page 1 panel 3, so the fixed
  button mirrors the broken one). Every page prompt's NEGATIVE block now forbids screens turned to
  the camera. KRL etiquette recorded in `bible/story-world.md`: backpacks on the front in a crowded
  carriage, applied to page 5 and to the trailer's carriage panel.

- **2026-09-17** — Full-bleed rule added: no white margin, border or frame around a page edge
  (`bible/visual-style.md`, pre-flight checklist, NEGATIVE block). Every page prompt had asked for a
  "white page background", which is what produced the frames; all six prompts (Episode 01 pages 1–5
  and the trailer) now ask for white gutters between panels only and full bleed at the edges.
  Measured on existing files: the rejected page 1 `v002` attempt had an 11–17 px frame; the approved
  9:16 trailer `ep00_page01_v004.png` has a thin 4–10 px frame and predates the rule; Episode 01
  page 1 `v001`, the current style reference, has none.

- **2026-09-17** — Page 1 `v002` attempt rejected, not filed: ratio 3:4 (1092×1440) instead of 4:5;
  Deerock not smug in 1.2; Aki holding the phone out to the camera in 1.3, with a happy expression
  and an outfit too close to Mika's; the two-line button looking neat rather than broken; Mika
  grinning in 1.1. Fixes: 1.2 uses Deerock's sheet "Smirk" expression; 1.3 is shot from behind
  both characters so the screen faces Deerock and the reader; the broken button is described
  explicitly; the prompts state the 4:5 canvas outright. New wardrobe code `A-W02` — Aki's pink
  hoodie over `A-W01`, because the office AC is cold — keeps the published trailer's continuity
  while separating her from Mika by colour. Mika's trousers are now specified as having no cargo
  pockets.

- **2026-09-17** — Episode 01 panel 3.1 dialogue changed to Aki: "Deerock, tombolnya udah aku
  redesign. Coba di-implement, ya." and Deerock: "Siap. Aku coba dulu." The design-to-implementation
  handoff now reads as a plain request and reply. Aki's canonical quote no longer appears in the
  episode; Kai's and Deerock's still do.

- **2026-09-17** — Episode 01 dialogue rewritten for flow and context, then trimmed. The previous
  lines were too compressed to follow without outside context; a first rewrite fixed the causality
  but nearly doubled the word count (85 to 161). The final version keeps the causal links at about
  130 words, stops restating on-screen text in bubbles, fixes the logic of Aki's 3.1 line and the
  ambiguity of Mika's 4.3 line, and scopes Rin's failing tests to the empty state. Synced across
  the storyboard, panel specs and all five page prompts, with no italics markers in rendered text.
  Bubble-length guideline added to `bible/series-bible.md`.

- **2026-09-17** — Episode 01 revision review applied. Page 1 panel 1.1 is now a full-width medium
  two-shot that works as the carousel cover, and page 1's layout changed to match; Mika's line is
  "Client pengin lebih jelas. Cuma teks tombolnya, kok." (no em dash, "kok" restored). Page 4.1
  replaces Aki's "Nah, ini baru lega." with Deerock's thought "Satu baris, katanya.", completing a
  rule of three with 1.2 and 5.1. The page 4 prompt was rebuilt with the full, verbatim cast and
  separation blocks and a consistent text policy; the page 2 canary and page 1 prompt were
  corrected; page 1 `v002` now uses `v001` as its style reference. `v001`'s row above is marked
  superseded rather than left as page 1 of 5.

- **2026-09-17** — Episode 01 was revised after the trailer was published. The episode now starts
  at 09:11, immediately after the trailer’s closing exchange, rather than replaying trailer
  moments. `ep01_page01_v001.png` remains approved and preserved as the pre-publication story
  draft, but it is no longer the style reference or production Page 1 for this revised sequence.
  Generate `ep01_page01_v002.png` next; do not alter the existing approved row or image.

- **2026-09-17** — Episode 01 page 1 approved as `ep01_page01_v001.png`, first attempt. Four minor
  deviations recorded above.

- **2026-09-17** — Episode 01 generation prompts written, one per page, in
  `episodes/01-just-one-small-change/generation-prompts/`. Each carries only the cast and sets on
  its page. Every dialogue line, thought, SFX and screen string was checked programmatically
  against `panel-specs.md` and matches exactly. From page 2 onward the previous approved page is
  attached as a style reference to keep the carousel consistent.

- **2026-09-17** — Episode 01 panel specs written
  (`episodes/01-just-one-small-change/panel-specs.md`). Two corrections made along the way:
  - Panel 5.2 moved from 18:40 to 17:50. Sunset in Jakarta in mid-September is around 17:50; the
    panel's orange light, taken from the KRL sheet's evening example, only works before it.
  - The Aki/Mika separation rule no longer asks for different-coloured tops. Both reference
    sheets put them in cream (`A-W01`, `M-W01`), so the rule contradicted canon — and the approved
    trailer already shows both in cream. They are now separated by garment: Aki's loose knitted
    sweater against Mika's collared blouse with rolled sleeves. `A-W01` no longer allows a blouse.
    Updated in the character bible, prompt blocks, consistency guide and trailer prompt and specs.

- **2026-09-17** — Deerock is now always called **Deerock** in full, never "Rock" or any other short
  form. Rule added to `bible/character-bible.md` and `AGENTS.md`. Aki's lines changed to match:
  `Pagi, Deerock.` in the trailer storyboard, panel specs and generation prompt, and
  `Deerock… di HP jadi dua baris.` in Episode 01 panel 3.1. Records of what earlier images
  actually contain are unchanged; the approved 9:16 `ep00_page01_v004.png` still reads
  "Pagi, Rock." and is listed as a deviation.

- **2026-09-17** — Episode 01 restructured from 3 pages to **5 pages at 4:5, 2–3 panels per page
  (14 panels)**, and the story rewritten. The old outline retold the trailer beat for beat and
  ended before the promised change happened. The new story compresses the morning to one page,
  uses the trailer's closing exchange as its hinge, and follows the change through escalation,
  a team fix and a payoff. Series-wide page density limits added to `bible/series-bible.md` and
  the pre-flight checklist. No artwork exists for Episode 01.

- **2026-09-17** — Default page format changed from 9:16 to **4:5 portrait (1080 × 1350)**, so
  pages show uncropped in an Instagram feed. Updated the trailer's generation prompt, storyboard,
  panel specs and README, the series bible's episode format table, Episode 01's format, and the
  pre-flight checklist. The trailer layout went from seven rows to six (3 · 2 · 1 · 1 · 1 · 2);
  story, dialogue and panel order are unchanged. The approved `ep00_page01_v004.png` stays as the
  9:16 edition and its record above is unchanged. No 4:5 artwork exists yet.

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
