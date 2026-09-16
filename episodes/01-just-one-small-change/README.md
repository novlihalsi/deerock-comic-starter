# Episode 01 — Just One Small Change

| | |
| --- | --- |
| Format | 3 pages, 3–4 panels per page |
| Panels | 11 total |
| Status | **Outline only.** Storyboard is a beat list, not a panel spec. No artwork. |
| Files | [`storyboard.md`](storyboard.md) · `panel-specs.md` (not written yet) · `results/` (empty) |

## Before generating anything

This episode is **not ready for image generation.** `storyboard.md` lists beats, not panels: it
has no camera, no wardrobe codes, no lighting, no continuity notes and no dialogue. Generating
from it would mean the model invents all of that, which is exactly how the trailer drifted.

To make it ready:

1. Expand `storyboard.md` into a `panel-specs.md` using
   `episodes/00-trailer/panel-specs.md` as the template — one entry per panel with time,
   location ID, character IDs, wardrobe codes, camera, pose, expression, props, dialogue, SFX
   and continuity.
2. Declare the wardrobe codes for the episode at the top.
3. Reserve output names: `ep01_p01_panel01_v001.png` … `ep01_p03_panel11_v001.png`
   (multi-page scheme — see `bible/consistency-guide.md` section 8).
4. Then generate one panel at a time.

## Continuity with the trailer

The trailer ends on the same beat this episode ends on — Mika's "Oh iya, ada satu perubahan
kecil lagi…". Keep the line identical in both. Wardrobe codes carry over unchanged
(`D-W01` `A-W01` `K-W01` `R-W01` `M-W01`); this is the same fictional workday.

## Key requirement

Introduce the whole team without making the story feel like an exposition dump. No name tags,
no role labels, no character-introduction captions — the team introduces itself through what
each person is doing at their desk.
