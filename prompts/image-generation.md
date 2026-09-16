# Image Generation Prompt Template

One panel per prompt. Fill every field — a blank field is where the model improvises, and
improvisation is drift.

## How to build a prompt

1. Open the panel's entry in the episode's `panel-specs.md`.
2. Attach the reference images named there. Resolve paths through `references/registry.md`.
3. Paste the character blocks for everyone in frame from `prompts/character-blocks.md`, in full.
4. Paste the separation clause if Deerock+Kai or Aki+Mika are both in frame.
5. Paste the location and wardrobe blocks.
6. Paste the `NEGATIVE` block from `prompts/negative-prompts.md` verbatim.
7. Generate. Review against `bible/consistency-guide.md` section 10 before accepting.

---

## Template

```
PROJECT: DEEROCK — A Frontend Developer's Ordinary Days
EPISODE: <slug>
PANEL: <nn> of <total>
OUTPUT NAME: <ep00_panel03_v001.png>

REFERENCE IMAGES ATTACHED:
- <characters/...png>          (identity — match exactly)
- <locations/...png>           (environment geometry — match exactly)
- <previous approved panel>    (continuity — match wardrobe, light and props)

CHARACTERS IN FRAME:
<paste the full block for each character from prompts/character-blocks.md>

SEPARATION:
<paste the clause if Deerock+Kai or Aki+Mika are both in frame; otherwise "n/a">

WARDROBE:
<paste the wardrobe blocks, e.g. D-W01, M-W01>

LOCATION:
<paste the location block>

TIME / LIGHTING:
<hh:mm, light source, direction, warm or cool>

SCENE:
<what happens in this panel, one or two sentences, present tense>

COMPOSITION:
<camera height, angle, shot size, who sits where in frame, where negative space is left
for speech bubbles>

EXPRESSION / BODY LANGUAGE:
<per character, small and specific>

PROPS:
<only props established in the reference sheets>

DIALOGUE:
<exact lines from the storyboard, in Indonesian. Do not invent, extend or translate.
If text rendering is unreliable, write "none — typeset separately">

SFX:
<exact, or "none">

CONTINUITY:
<what must match the previous panel and what the next panel will inherit>

STYLE:
Contemporary slice-of-life manga/anime. Clean linework, restrained cel shading, subtle
halftone texture, soft cinematic lighting, realistic modern Indonesian environments,
natural expressions, muted cool palette with subtle purple and blue accents.
Consistent line weight and eye proportion across every character in the panel.

NEGATIVE:
<paste the full block from prompts/negative-prompts.md>
```

---

## Editing an existing panel

When revising, state what stays fixed before what changes. Generators drop everything you do
not repeat.

```
EDIT of <ep00_panel03_v002.png>, producing v003.

KEEP UNCHANGED: composition, camera, character identity, wardrobe, location geometry,
lighting, time of day, all props.

CHANGE ONLY: <the one thing>

Everything not named under CHANGE ONLY must be pixel-for-pixel equivalent in intent.
<re-paste the character blocks and the NEGATIVE block>
```

---

## Notes that matter in practice

- **This template is the panel-by-panel route.** For a whole page in one shot, see
  `episodes/00-trailer/generation-prompt.md` instead — same locks, one prompt.
- **Prefer generating art without long dialogue baked in** if your generator's text rendering is
  unreliable, then typeset in the assembly step. Identity and environment continuity come first.
- **Do not paraphrase the blocks.** Paste them. Every rewrite loses a locked trait.
- **Feed the previous approved panel as a reference** for anything that must carry over
  (wardrobe, backpack, tumbler, light direction).
- **Never attach a sheet from `references/off-canon/`** as a plain character reference.
