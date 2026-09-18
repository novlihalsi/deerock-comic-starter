# Reference Registry

Single source of truth for **ID → file path**. Every prompt, storyboard and panel spec must
cite an ID from this table and the exact path next to it. Never invent a path.

If a path here is wrong, fix it here first, then fix the documents that cite it.
Run `node tools/check-refs.mjs` to verify every path in the repo still resolves.

## Characters

| ID | Reference sheet | Status |
| --- | --- | --- |
| `CHAR-DEEROCK` | `characters/deerock.png` | approved · v1 |
| `CHAR-AKI` | `characters/aki.png` | approved · v1 |
| `CHAR-KAI` | `characters/kai.png` | approved · v1 |
| `CHAR-RIN` | `characters/rin.png` | approved · v1 |
| `CHAR-MIKA` | `characters/mika.png` | approved · v1 |

### Outfit references

One figure cropped from a sheet's *outfit variations* row. Attach it whenever the character wears
that outfit — the full sheet alone pulls the generator back to the default outfit
(`bible/consistency-guide.md` section 4).

| Character | Wardrobe | Crop | Status |
| --- | --- | --- | --- |
| `CHAR-DEEROCK` | `D-W02` | `characters/outfits/deerock-office-casual.png` | approved · cropped from the sheet |
| `CHAR-KAI` | `K-W02` | `characters/outfits/kai-sweater.png` | approved · cropped from the sheet |

## Locations

| ID | Reference sheet | Canonical name | Status |
| --- | --- | --- | --- |
| `LOC-HOME` | `locations/home.png` | Deerock's House — Pesona Ciputih, Cisauk (Type Ruby, unit C12) | approved · v1 |
| `LOC-STATION` | `locations/krl-station.png` | Sentra Lintas Station (SL) — elevated KRL station | approved · v1 |
| `LOC-KRL` | `locations/krl-interior.png` | KRL Commuter carriage — Tanah Abang ↔ Rangkasbitung line | approved · v1 |
| `LOC-OFFICE` | `locations/office.png` | NEXA Workspace — business district, Jakarta | approved · v1 |
| `LOC-CAFE` | `locations/cafe.png` | LUMA Café — South Jakarta business district | approved · v1 |

## Props

| ID | Reference | Notes | Status |
| --- | --- | --- | --- |
| `PROP-MOTORCYCLE` | `props/motorcycle-vario150.jpg` | Honda Vario 150, 2017, matte dark grey/black body, **gold wheels**. Photo reference — copy the machine's geometry and colour only, render it in the comic's line/cel style. Never substitute another model, generation or wheel colour. | approved · v1 |

Props that live inside a location sheet (Deerock's desk setup, the KRL card, NEXA lanyard,
LUMA mug, character tumblers/backpacks) do **not** get their own ID. Cite the location or
character sheet that contains them.

## Off-canon — never use as a generation reference

| File | Why it is quarantined |
| --- | --- |
| `references/off-canon/deerock-virelux-cover.png` | Correct Deerock **face geometry**, but the image also contains a katana, tactical techwear with harness/straps, and a magazine layout. All of those are explicitly forbidden by canon. Only use it when a prompt needs a second face angle, and then say "face and hair only" — see `references/off-canon/README.md`. |

## Generated output

| File | What it is | Status |
| --- | --- | --- |
| `episodes/02-pr-review-jalur-rangkasbitung/results/ep02_page01_v001.png` | Episode 02, page 1 | **approved, final** |
| `episodes/02-pr-review-jalur-rangkasbitung/results/ep02_page02_v001.png` | Episode 02, page 2 | **approved, final** |
| `episodes/02-pr-review-jalur-rangkasbitung/results/ep02_page03_v001.png` | Episode 02, page 3 | **approved, final** |
| `episodes/02-pr-review-jalur-rangkasbitung/results/ep02_page04_v001.png` | Episode 02, page 4 | **approved, final** |
| `episodes/02-pr-review-jalur-rangkasbitung/results/ep02_page05_v001.png` | Episode 02, page 5 | **approved, final** |
| `episodes/02-pr-review-jalur-rangkasbitung/results/ep02_page06_v001.png` | Episode 02, page 6 | **approved, final** |
| `episodes/02-pr-review-jalur-rangkasbitung/results/ep02_page07_v001.png` | Episode 02, page 7 | **approved, final** |
| `episodes/02-pr-review-jalur-rangkasbitung/results/ep02_page08_v001.png` | Episode 02, page 8 | **approved, final** |
| `episodes/01-just-one-small-change/results/ep01_page01_v002.png` | Episode 01, page 1 | **approved, final** |
| `episodes/01-just-one-small-change/results/ep01_page02_v001.png` | Episode 01, page 2 | **approved, final** |
| `episodes/01-just-one-small-change/results/ep01_page03_v001.png` | Episode 01, page 3 | **approved, final** |
| `episodes/01-just-one-small-change/results/ep01_page04_v001.png` | Episode 01, page 4 | **approved, final** |
| `episodes/01-just-one-small-change/results/ep01_page05_v001.png` | Episode 01, page 5 | **approved, final** |
| `episodes/01-just-one-small-change/results/ep01_page01_v001.png` | Episode 01, page 1 — pre-publication story draft | superseded; style reference for page 1 `v002` |
| `episodes/00-trailer/results/ep00_page01_v004.png` | The trailer page | **approved, final** |
| `episodes/00-trailer/results/ep00_page01_v003.png` | Revision pass | superseded by v004 |
| `episodes/00-trailer/results/ep00_page01_v002.png` | First fully correct page | superseded by v003 |
| `episodes/00-trailer/results/ep00_page01_v001.png` | First full-page trailer attempt, generated in one shot | rejected — see `episodes/00-trailer/drift-log.md` |
