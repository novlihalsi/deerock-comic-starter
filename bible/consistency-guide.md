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
| `A-W01` | Aki | cream sweater, black cargo trousers, suspenders, lanyard |
| `K-W01` | Kai | dark hoodie under open jacket, olive cargo trousers, headphones around neck |
| `R-W01` | Rin | black oversized hoodie/jacket, dark grey cargo trousers, lanyard |
| `M-W01` | Mika | cream blouse, black wide trousers, suspenders, structured bag |

Deerock's alternates (`D-W02` office casual, `D-W03` home wear) are defined in the character
bible. An episode declares its wardrobe codes once, at the top of the storyboard.

Do not change an outfit between adjacent panels unless the story says the character changed.

---

## 5. Environment continuity

A location must have an approved sheet before it is used twice. The sheet records layout,
dominant furniture, windows and doors, desk positions, plants, signage, lighting direction,
time of day and recurring props.

For `LOC-OFFICE`, desk assignments are fixed: the same person sits at the same desk in every
episode. For `LOC-KRL`, keep the carriage type, pole and strap arrangement, seat pattern and a
believable weekday crowd density.

---

## 6. Panel continuity record

Every panel spec records: time · location ID · character IDs · wardrobe codes · camera angle ·
pose and expression · props · what must match the previous and next panel.

`episodes/00-trailer/panel-specs.md` is the worked example of the format.

---

## 7. Generation workflow

```
A. Confirm the reference sheet exists and is approved.
B. Write the panel spec (see section 6).
C. Build the prompt from prompts/image-generation.md — references + IDs + spec + negatives.
D. Generate ONE panel.
E. Review against the reference and the pre-flight checklist (section 10).
F. Drift? Fix and regenerate from the reference. Do not proceed with a drifted panel.
G. Approve: bump the version, record it in assets/approved/manifest.md.
H. Only after every panel is approved: typeset dialogue and assemble the page.
```

**Do not generate a whole page in one shot when consistency matters.** The existing trailer
attempt at `episodes/00-trailer/results/ep00_page01_v001.png` was produced that way and broke
nine separate rules — the evidence is in `episodes/00-trailer/drift-log.md`. Panel-level
generation plus assembly is slower and is the only thing that has worked.

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
- [ ] Filename follows section 8 and does not overwrite an approved asset.
