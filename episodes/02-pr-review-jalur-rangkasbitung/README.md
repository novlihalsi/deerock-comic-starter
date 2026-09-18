# Episode 02 — PR Review Jalur Rangkasbitung

| | |
| --- | --- |
| Format | 8 pages at 4:5 portrait (1080 × 1350), 1–2 panels per page |
| Panels | 14 (2 · 2 · 1 · 2 · 2 · 2 · 2 · 1) |
| Layouts | `2-STACK` · `2-DIAG` · `1-FULL` · `2-INSET` · `2-SIDE` · `2-STACK` · `2-SIDE` · `1-FULL` |
| Status | **Storyboard draft.** |
| Files | [`storyboard.md`](storyboard.md) |

## Logline

Deerock's commute runs to the minute — except for the rush-hour crowd, which no math accounts for.
Then Kai needs a pull request reviewed before nine, and the only screen Deerock has is a phone he
can barely lift in a packed, swaying carriage.

## Before generating anything

1. ~~Write the storyboard.~~ Done — [`storyboard.md`](storyboard.md).
2. Expand it into `panel-specs.md`: camera, composition, poses, props, light and continuity for
   all 14 panels.
3. Write one generation prompt per page in `generation-prompts/`, using the layout blocks and the
   style reference line in `prompts/image-generation.md`.
4. Generate each page in one shot, `ep02_page01_v001.png` … `ep02_page08_v001.png` in `results/`.

## Style references

Page 1 attaches Episode 01's anchor page, `ep01_page01_v002.png`. Once page 1 is approved it
becomes this episode's anchor: every later page attaches it plus the page before.
