# Episode 00 — Trailer

Purpose: establish the visual identity, tone, main cast and everyday rhythm before Episode 01.

| | |
| --- | --- |
| Format | ONE vertical 9:16 page |
| Panels | 10, read continuously top to bottom |
| Status | **Storyboard and panel specs locked. Artwork not approved.** |
| Files | [`storyboard.md`](storyboard.md) · [`panel-specs.md`](panel-specs.md) · [`drift-log.md`](drift-log.md) · [`results/`](results) |

## Production format

- **Story panels:** 10 panels on a single page, no page breaks, no separate trailer pages.
- **Story beats:** wake → coffee → KRL commute → office arrival → team introduction → design →
  code → API → QA → deploy rhythm → small change → Episode 01 title. Unchanged.
- **Ending:** the final title section contains exactly `EPISODE 01`, `JUST ONE SMALL CHANGE`
  and `COMING SOON`.
- **Canon:** do not change story beats, dialogue, character roles, locations, wardrobe
  continuity or established world canon.

## Current artwork status

`results/ep00_page01_v001.png` is a **draft, not approved**. It was generated as one whole page
in a single shot and it breaks nine documented rules — decorative slogans rendered into panels,
invented character name tags, dropped dialogue, a changed panel order and a broken facial-hair
lock among them. The full comparison is in [`drift-log.md`](drift-log.md).

Keep it as a tone, rhythm and layout reference. Do not treat its text or its panel order as canon.

**Next step:** regenerate panel by panel following `bible/consistency-guide.md` section 7.
Reserved output names are in `panel-specs.md` (`ep00_panel01_v001.png` … `ep00_panel10_v001.png`).

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
