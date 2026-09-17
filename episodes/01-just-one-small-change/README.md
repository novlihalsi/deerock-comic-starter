# Episode 01 — Just One Small Change

| | |
| --- | --- |
| Format | 5 pages at 4:5 portrait (1080 × 1350), 2–3 panels per page |
| Panels | 14 (3 · 3 · 3 · 3 · 2) |
| Status | **Story locked.** Beats, locations and dialogue final. Panel specs not written. No artwork. |
| Files | [`storyboard.md`](storyboard.md) · `panel-specs.md` (not written yet) · `results/` (empty) |

## Logline

One label on one button. One line of code. By mid-morning it has broken the mobile layout and the
whole regression suite — and at five o'clock the client wants the old label back.

## Before generating anything

The storyboard fixes *what happens and what is said*. It does not yet fix camera, composition,
poses, props or per-panel continuity. Generating from it now would mean the model invents all of
that, which is exactly how the trailer drifted.

1. Expand `storyboard.md` into `panel-specs.md`, using `episodes/00-trailer/panel-specs.md` as the
   format.
2. Write one generation prompt per page, using `episodes/00-trailer/generation-prompt.md` as the
   template: CAST, SETS, layout, panels, text policy, NEGATIVE.
3. Generate each page in one shot. Output names: `ep01_page01_v001.png` … `ep01_page05_v001.png`
   (see `bible/consistency-guide.md` section 8).

## Page density

Every page stays within the series limits: 2–3 panels, at most 2 bubbles per panel, at most 5 per
page. All of the trailer's text errors landed in its two five-bubble panels; these limits exist so
that does not happen again.

## Continuity with the trailer

Same fictional workday. Page 1 and panel 2.1 overlap the trailer's morning on purpose, and every
line the two share must match word for word — above all Mika's "Oh iya, ada satu perubahan kecil
lagi…". Wardrobe carries over unchanged (`D-W01` `A-W01` `K-W01` `R-W01` `M-W01`).

## Key requirement

Introduce the whole team without an exposition dump. No name tags, no role labels, no
introduction captions. Each character arrives through what they do about the button, and Aki, Kai
and Deerock each say their reference sheet's canonical quote as an ordinary line of dialogue.
