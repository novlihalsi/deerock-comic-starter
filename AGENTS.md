# Codex Instructions — DEEROCK

You are working on a serialized slice-of-life comic. Treat the repository bibles as the source of truth.

## Before any story or image task
Read:
- `bible/series-bible.md`
- `bible/character-bible.md`
- `bible/visual-style.md`
- `bible/consistency-guide.md`
- the relevant episode files

If a reference image exists for the character/location, inspect it before generating or editing.

## Canon rules
- Deerock is a frontend developer.
- Aki is UI/UX.
- Kai is backend.
- Rin is QA.
- Mika is PM.
- Modern realistic software workplace.
- No katana/ninja/supernatural elements.
- Humor comes from everyday work and life, not caricaturing a profession.
- FE, BE, UI/UX, QA and PM are all competent people; conflicts usually come from communication, dependencies, ambiguity, changing requirements, or ordinary mistakes.
- Dialogue should be natural Indonesian with occasional English technical terms.
- Do not make Kai visually similar to Deerock.

## Visual continuity
Never freely redesign an established character for a new panel. Preserve face shape, hair silhouette, age, body proportions, wardrobe rules, accessories, and palette.
When a new location is introduced, create an environment reference before using it repeatedly.

## Image workflow
Prefer:
reference image(s) + explicit character/location IDs + scene description + camera/framing + wardrobe + continuity notes.

For edits, preserve the composition and character identity unless the task explicitly changes them.

## Output naming
Use stable IDs:
`ep01_p01_panel03_v001.png`
`ep01_p01_panel03_v002.png`

Keep approved versions in `assets/approved/` or the episode's `final/` directory. Never overwrite an approved image without a version bump.
