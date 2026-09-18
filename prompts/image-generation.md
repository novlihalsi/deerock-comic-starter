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

## One-shot pages — layout and style reference lines

A one-shot page prompt (Route A) is built from the same locks as the template above, in this order:
STYLE REFERENCE line, page header, CAST, SEPARATION, SETS, PAGE LAYOUT, PANELS, TEXT POLICY,
NEGATIVE. `episodes/01-just-one-small-change/generation-prompts/` holds five worked examples.

**PAGE LAYOUT.** Paste the block for the layout the storyboard names
(`bible/visual-style.md`, Page layout) and fill in the numbers in angle brackets.

```
=== PAGE LAYOUT — 4:5 portrait, one panel (1-FULL) ===
One single panel fills the whole page and runs to all four edges of the canvas — no border, no
gutter, no margin.
```

```
=== PAGE LAYOUT — 4:5 portrait, two panels stacked (2-STACK) ===
Panel 1 on top, full width, about <60>% of the page height. Panel 2 below it, full width, the rest
of the page. One thin, straight, horizontal white gutter between them.
```

```
=== PAGE LAYOUT — 4:5 portrait, two panels side by side (2-SIDE) ===
Two tall panels side by side, each the full height of the page: Panel 1 on the left, about <50>% of
the width; Panel 2 on the right, the rest. One thin, straight, vertical white gutter between them.
```

```
=== PAGE LAYOUT — 4:5 portrait, two panels split diagonally (2-DIAG) ===
One thin, straight white gutter runs across the page on a gentle slant, from the left edge about
<40>% of the way down to the right edge about <60>% of the way down. Panel 1 is the upper piece,
Panel 2 the lower piece. Not a steep angle, not jagged.
```

```
=== PAGE LAYOUT — 4:5 portrait, one large panel with an inset (2-INSET) ===
Panel 1 fills the whole page and runs to all four edges of the canvas. Panel 2 is a small
rectangular inset panel, about one third of the page width, set a little in from the
<lower-right> corner, with a thin dark border and a thin white outline. The inset covers no face
and no speech bubble in Panel 1. Read Panel 1 first, then the inset.
```

**STYLE REFERENCE.** Every page after the first one ever generated carries rendering references,
because pages rendered independently drift apart in faces, line weight and palette. Attach two
earlier approved pages:

- the **anchor page** — page 1 of the episode, once approved. Page 1 itself uses the previous
  episode's anchor page — unless the characters on it have changed outfits since. Then page 1
  attaches no earlier page, because a page full of the old outfit outweighs the prompt;
- the **previous page** — the page just before this one. On page 2 it is the anchor page, so
  attach it once.

Chaining only the previous page lets small differences compound across a long carousel; the anchor
page holds every page to the same starting point. Put this line at the very top of the prompt:

```
STYLE REFERENCE: the attached earlier comic pages are for rendering style only — match their line weight, colouring, shading and how each character's face is drawn. Do not copy their panels, their layout, their page border, their scenes, their outfits or any of their text. Clothing follows the CAST section below.
```

The clauses are there because each one has gone wrong: an attached page is full of speech bubbles a
generator will happily reuse, and Aki's outfit on Episode 01's first reference page carried over
onto a page where she had changed.

**OUTFIT REFERENCE.** When a character wears anything but their sheet's default outfit, attach the
outfit crop listed in `references/registry.md` and put this line first, above the STYLE REFERENCE
line:

```
OUTFIT REFERENCE: the attached single-figure image shows exactly what <name> wears on this page. The character sheet shows other outfits as well — from the sheet take only the face, hair and build.
```

Describe the outfit in the CAST block exactly as the crop draws it. When the text and the attached
picture disagree, the picture wins.

---

## Notes that matter in practice

- **This template is the panel-by-panel route.** For a whole page in one shot, see
  `episodes/00-trailer/generation-prompt.md` and the section above — same locks, one prompt.
- **Prefer generating art without long dialogue baked in** if your generator's text rendering is
  unreliable, then typeset in the assembly step. Identity and environment continuity come first.
- **Do not paraphrase the blocks.** Paste them. Every rewrite loses a locked trait.
- **Feed the previous approved panel as a reference** for anything that must carry over
  (wardrobe, backpack, tumbler, light direction).
- **Never attach a sheet from `references/off-canon/`** as a plain character reference.
