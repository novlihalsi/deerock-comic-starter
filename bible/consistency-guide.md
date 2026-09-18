# Consistency Guide

Consistency is more important than novelty. This is the operational half of the bible: the
other files say what the world *is*, this one says how to keep it that way across generations.

---

## 1. Stable IDs

Never describe a character as "a developer" or a place as "an office" in a prompt. Always use
the ID plus the canonical traits.

Characters: `CHAR-DEEROCK` `CHAR-AKI` `CHAR-KAI` `CHAR-RIN` `CHAR-MIKA`
Locations: `LOC-HOME` `LOC-STATION` `LOC-KRL` `LOC-OFFICE` `LOC-CAFE`
Props: `PROP-MOTORCYCLE`

Every ID resolves to exactly one file in `references/registry.md`. That table is the only place
a path is defined. If you need a path, read it from there; if a path changes, change it there
first and then update the documents that cite it.

---

## 2. Reference images

The approved sheet is the visual source of truth.

```
characters/deerock.png   characters/aki.png   characters/kai.png
characters/rin.png       characters/mika.png

locations/home.png       locations/krl-station.png   locations/krl-interior.png
locations/office.png     locations/cafe.png

props/motorcycle-vario150.jpg
```

Each character sheet already contains a full-body turnaround (front / three-quarter / side /
back), six expressions, detail crops of eye, hair and accessories, outfit variations and scene
examples. That is normally enough; you do not need to generate extra per-angle sheets.

If a generated image drifts, **retry against the reference — do not accept the drift and do not
redesign the character to match the drifted output.**

### Anything in `references/off-canon/` is not a reference
It is quarantined material that contains canon-breaking elements. Read
`references/off-canon/README.md` before touching it.

### Never transcribe text off a reference sheet
The sheets carry decorative slogans, magazine typography and mock UI. None of it is canon. See
`prompts/negative-prompts.md`.

---

## 3. Character separation

Two pairs collapse into each other under lazy prompting:

- **Deerock vs Kai** — purple-black hair + glasses + slim vs black hair + no glasses + taller
  and broader with headphones around the neck.
- **Aki vs Mika** — bun + cargo trousers + tote vs long loose wavy hair + plain wide trousers +
  structured bag.

The full matrix is in `bible/character-bible.md`. Paste the relevant row into any prompt where
both members of a pair appear.

---

## 4. Wardrobe continuity

| Code | Character | Outfit |
| --- | --- | --- |
| `D-W01` | Deerock | dark hoodie/overshirt + dark tee, dark jeans, orange accent, no harness |
| `D-W02` | Deerock | open black overshirt over a slate-grey tee, dark grey chinos (sheet: *Office Casual*) |
| `A-W01` | Aki | cream knitted sweater, black cargo trousers, suspenders, lanyard |
| `A-W02` | Aki | `A-W01` with a dusty-pink oversized hoodie over the sweater (office AC) |
| `K-W01` | Kai | dark hoodie under open jacket, olive cargo trousers, headphones around neck |
| `K-W02` | Kai | light grey oversized sweater, olive cargo trousers, headphones around neck (sheet: *Sweater*) |
| `R-W01` | Rin | black oversized hoodie/jacket, dark grey cargo trousers, lanyard |
| `M-W01` | Mika | collared cream blouse, black plain wide trousers (no cargo pockets), suspenders, structured bag |

Deerock's home wear (`D-W03`) is defined in the character bible. An episode declares its wardrobe
codes once, at the top of the storyboard.

**A new day means new outfits.** An episode set on a different day from the one before it puts every
character who appears in a different outfit; episodes on the same day share their codes, as the
trailer and Episode 01 do. Take each new outfit from the *outfit variations* printed on that
character's sheet, so the attached sheet shows the generator the clothes, and add its code to the
character bible, `prompts/character-blocks.md` and the table above before using it. The identity
cues never change with the clothes: Deerock's glasses and purple-black hair, Kai's short hair and
headphones around his neck, Aki's bun, Rin's fringe, Mika's long loose hair. Check the separation
matrices again with the new outfits — two characters who share a frame should not share a top.

Do not change an outfit between adjacent panels unless the story says the character changed.

---

## 5. Environment continuity

A location must have an approved sheet before it is used twice. The sheet records layout,
dominant furniture, windows and doors, desk positions, plants, signage, lighting direction,
time of day and recurring props.

For `LOC-OFFICE`, desk assignments are fixed: the same person sits at the same desk in every
episode, and the ground-floor lobby is a separate space from the upper-floor workspace — the
reception desk comes before the access gates, and the workspace is never visible from the lobby.
For `LOC-KRL`, keep the carriage type, pole and strap arrangement, seat pattern and a believable
weekday crowd density.

**Give a set the same descriptive weight as a character.** A prompt that spends eight locked
lines on a face and one passing clause on the building will return a correct face in an invented
building — that is exactly what happened on the trailer's second render. Where a space has an
order to it (lobby to reception to gates to lifts), say the order; generators do not infer it.

---

## 6. Panel continuity record

Every panel spec records: time · location ID · character IDs · wardrobe codes · camera angle ·
pose and expression · props · what must match the previous and next panel.

`episodes/00-trailer/panel-specs.md` is the worked example of the format.

---

## 7. Generation workflow

Two routes. Pick per deliverable, and write down which one the episode uses.

### Route A — one-shot page (default for social posts)

```
A. Confirm the reference sheets exist and are approved.
B. Build one prompt covering the whole page: style reference line, cast locks, separation
   clauses, the storyboard's layout block, every panel, the text policy, the NEGATIVE block.
   Attach the sheets plus the anchor page and the previous page (prompts/image-generation.md).
C. Generate the page.
D. Review against the pre-flight checklist (section 10).
E. Miss? Add ONE corrective line and re-roll the page. Bump the version every time.
F. Approve: record it in assets/approved/manifest.md.
```

Fast, and the page rhythm and lighting stay coherent because it is one render. The cost is that
a re-roll changes every panel on the page — you cannot fix one in place. At one or two panels a
page that is cheap; on the ten-panel trailer it was not. `episodes/00-trailer/generation-prompt.md`
is the worked example, with a troubleshooting table for targeted re-rolls.

### Route B — panel by panel (when a panel will not behave)

```
A. Write the panel spec (see section 6).
B. Build the prompt from prompts/image-generation.md — references + IDs + spec + negatives.
C. Generate ONE panel. Feed the previous approved panel as a style anchor.
D. Review, fix, approve, version.
E. Typeset dialogue and assemble the page.
```

Slower, and it needs an assembly step, but every panel is independently fixable and rendered at
much higher resolution. Use it for print, for a page that keeps failing as a whole, or to replace
a single stubborn panel on an otherwise good one-shot page. Compositing and typesetting happen in
whatever image editor you prefer; nothing in this repo does it for you.

**Whichever route:** the failure mode is the same. The trailer attempt at
`episodes/00-trailer/results/ep00_page01_v001.png` broke nine rules — slogans copied off the
reference sheets, invented name tags, a broken facial-hair lock. None of those are caused by
one-shot generation as such; they are caused by not stating the constraints. See
`episodes/00-trailer/drift-log.md`.

---

## 8. Output naming and versioning

```
Panel, single-page episode   ep00_panel03_v001.png
Panel, multi-page episode    ep01_p02_panel03_v001.png
Assembled page               ep01_page02_v001.png
```

Generated output goes in `episodes/<episode>/results/`. Versions only ever go up: `v001`,
`v002`, `v003`. **Never overwrite an approved image** — bump the version instead. Approval is
recorded in `assets/approved/manifest.md`, which is the list of what is actually blessed.

---

## 9. Canon change protocol

When a canonical trait changes, in this order:

1. Update the bible file that owns the trait.
2. Update or regenerate the affected reference sheet, and bump its version in
   `references/registry.md`.
3. Update the storyboards and panel specs that cite it.
4. Regenerate the downstream panels.
5. Note the change in `assets/approved/manifest.md`.

Skipping step 1 is how the repo ends up with prose that contradicts the art.

---

## 10. Pre-flight checklist

Run before accepting any generated panel.

- [ ] Every character is identifiable from their locked traits, not from context.
- [ ] Deerock: purple-black hair, thin dark glasses, clean chin, only the tiny patch under the
      lower lip. No beard, moustache or stubble.
- [ ] Kai: black hair, **no glasses**. Not confusable with Deerock.
- [ ] Aki and Mika are distinguishable by hair and silhouette.
- [ ] Wardrobe matches the declared codes and the previous panel.
- [ ] Location geometry matches the sheet. Nothing redesigned.
- [ ] No text in the panel except specified dialogue, real signage/UI, specified SFX and the
      title block. No slogans, no name tags, no captions.
- [ ] No katana, harness, tactical rig, aura, glow or magazine layout.
- [ ] Time of day and lighting continue from the previous panel.
- [ ] The page matches the episode's declared format — 4:5 by default, so width ÷ height = 0.8.
- [ ] Every screen faces the character using it. Screens the reader must read are seen over a
      shoulder, never turned toward the camera.
- [ ] Full bleed: no white margin, border or frame around the page edge. White appears only in the
      gutters between panels.
- [ ] Page density is within the series limits: 1–2 panels, at most 2 bubbles per panel and 3 per
      page, about 25 words. The trailer and Episode 01 are the exceptions.
- [ ] The page has the layout the storyboard names (`bible/visual-style.md`, Page layout), and the
      same layout does not run for more than two pages in a row.
- [ ] Filename follows section 8 and does not overwrite an approved asset.
