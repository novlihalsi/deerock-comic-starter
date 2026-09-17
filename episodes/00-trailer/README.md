# Episode 00 — Trailer

Purpose: establish the visual identity, tone, main cast and everyday rhythm before Episode 01.

| | |
| --- | --- |
| Format | ONE 4:5 portrait page, 1080 × 1350, six rows |
| Panels | 10, read left to right and top to bottom |
| Status | **4:5 edition not yet generated.** The earlier 9:16 edition is complete and approved: `results/ep00_page01_v004.png` |
| Files | [`storyboard.md`](storyboard.md) · [`panel-specs.md`](panel-specs.md) · [`drift-log.md`](drift-log.md) · [`results/`](results) |

## Production format

- **Story panels:** 10 panels on a single page, no page breaks, no separate trailer pages.
- **Story beats:** wake → coffee → KRL commute → office arrival → team introduction → design →
  code → API → QA → deploy rhythm → small change → Episode 01 title. Unchanged.
- **Ending:** the final title section contains exactly `EPISODE 01`, `JUST ONE SMALL CHANGE`
  and `COMING SOON`.
- **Canon:** do not change story beats, dialogue, character roles, locations, wardrobe
  continuity or established world canon.

## Artwork

**Format change, 2026-09-17:** the trailer moved from 9:16 to **4:5** so it shows uncropped in an
Instagram feed. The story, dialogue and panel order are unchanged; the layout went from seven
rows to six, with Panel 09 and the Panel 10 title now side by side in the bottom row. Nothing in
4:5 has been generated yet — the next attempt is `v005`.

### 9:16 edition

**`results/ep00_page01_v004.png` is the approved 9:16 edition.** 941 x 1672, 9:16, approved
2026-09-16. Generated in one shot from [`generation-prompt.md`](generation-prompt.md), then given
two revision passes for typesetting.

It took three generation rounds plus revisions. Round one merged Kai into Deerock; round two
fixed the cast but invented the buildings; round three, after the prompt gained a locked `SETS`
section, came back correct (`v002`). Revisions then fixed the Panel 10 sky and the Panel 07 and 08
bubbles (`v003`, `v004`). The full revision history and the accepted deviations are in
`assets/approved/manifest.md`.

`results/ep00_page01_v001.png` is the rejected first attempt, kept as a record. It broke nine
documented rules — see [`drift-log.md`](drift-log.md). Do not treat its text or panel order as canon.

`v001`–`v004` all use the old seven-row 9:16 layout, so none of them is a layout reference for
the 4:5 edition. Generate 4:5 from `generation-prompt.md` and save as `v005`, `v006` and so on.
Never overwrite `v004`.

## Character continuity — Deerock

Match `characters/deerock.png` and the character bible strictly:

- Medium messy layered dark **purple**-black hair — it must read purple, not black.
- Thin dark-frame glasses, always.
- Youthful slim face.
- Facial hair is only a **very thin, tiny, sparse patch directly beneath the lower lip**,
  stopping well before the chin.
- **Clean chin. No chin hair. No beard. No moustache. No stubble.**

## Character separation

Deerock vs Kai and Aki vs Mika both collapse under lazy prompting. Paste the relevant row from
the separation matrix in `bible/character-bible.md` into every prompt where both appear.

## Motorcycle continuity

`PROP-MOTORCYCLE` — `props/motorcycle-vario150.jpg`. The motorcycle is a **Honda Vario 150,
model year 2017, matte dark grey/black with gold wheels**, parked in the carport. Do not
substitute another Honda model, Vario generation, year, wheel treatment or motorcycle type.
The reference is a photograph: copy the machine's geometry and colour, render it in the comic's
line-and-cel style.
