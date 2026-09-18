# Episode 02 — Generation Prompts

One prompt per page, one image per prompt. Each is built from
[`../panel-specs.md`](../panel-specs.md) and is self-contained: style reference line, cast,
separation, sets, layout, panels, text policy and negatives for that page only.

| Page | Prompt | Layout | Panels | Attach |
| --- | --- | --- | --- | --- |
| 1 | [`page-01.md`](page-01.md) | `2-STACK` | 2 | deerock + outfit · krl-station |
| 2 | [`page-02.md`](page-02.md) | `2-DIAG` | 2 | deerock + outfit · krl-station · krl-interior · page 1 |
| 3 | [`page-03.md`](page-03.md) | `1-FULL` | 1 | deerock + outfit · krl-interior · page 1 · page 2 |
| 4 | [`page-04.md`](page-04.md) | `2-INSET` | 2 | deerock + outfit · krl-interior · page 1 · page 3 |
| 5 | [`page-05.md`](page-05.md) | `2-SIDE` | 2 | deerock + outfit · krl-interior · page 1 · page 4 |
| 6 | [`page-06.md`](page-06.md) | `2-STACK` | 2 | deerock + outfit · kai + outfit · office · page 1 · page 5 |
| 7 | [`page-07.md`](page-07.md) | `2-SIDE` | 2 | deerock + outfit · kai + outfit · office · page 1 · page 6 |
| 8 | [`page-08.md`](page-08.md) | `1-FULL` | 1 | deerock + outfit · kai + outfit · office · page 1 · page 7 |

## Rules

**Paste the fenced block verbatim.** Do not let a chat assistant rewrite or summarise it on the
way. A paraphrase loses the locks.

**Attach only what the page lists.** An extra sheet invites extra content — attach the office sheet
to a train page and desks start appearing in the carriage.

**Check the ratio first.** Width ÷ height must be 0.8. Do not crop a taller render down; re-roll.

**Then check the layout.** Each page names one layout from `bible/visual-style.md`. A generator
draws `2-STACK` and `2-SIDE` most reliably and falls back to stacked rows when it ignores `2-DIAG`
or `2-INSET` — see the table below.

**Save as** `../results/ep02_page01_v001.png` … `ep02_page08_v001.png`. Versions only go up.
Approvals go in `assets/approved/manifest.md`.

## Style references

The STYLE REFERENCE line is already the first line of every prompt; you only attach the pages.

- **Outfit references come first.** Every page attaches
  `characters/outfits/deerock-office-casual.png`, and pages 6–8 also
  `characters/outfits/kai-sweater.png`; the OUTFIT REFERENCE line at the top of each prompt points
  at them. Without them, the sheets pull both back to their default hoodies.
- **Page 1** attaches no earlier page. Episode 01's anchor page shows Deerock in his old hoodie three
  times, and on the first attempt it outweighed the prompt.
- **Page 1 of this episode is the anchor** once approved. Every later page attaches it plus the page
  just before. On page 2 they are the same page, so attach it once.
- The attach lists name `v001`. If a page took more than one roll, attach its **approved** version.

Get each page approved before generating the next one; the next page depends on it.

## Canary

Every prompt forbids titles and captions. If a finished page shows any of the storyboard's
page titles — **Matematika Komuter**, **Jam Berangkat**, **Tidur Ayam**, **Interupsi Pagi**,
**Perjuangan Layar Kecil**, **Sampai Tujuan**, **Jangan Ditanya**, **The Aftermath** — or the episode
title, a page number or a narration box, the prompt was rewritten on the way or ignored. Re-paste
it verbatim.

## If a page misses

Add **one** line at the very top of that page's prompt and re-roll. One fix at a time.

| What went wrong | Line to add |
| --- | --- |
| A page title, caption or page number appeared | `Absolutely no text on this page except the speech bubbles, thought bubbles, sound effects and screen text listed. No title, no caption, no page number.` |
| Page 2: two stacked rows instead of a diagonal | `The two panels are divided by ONE straight diagonal gutter, from the left edge about 40% down to the right edge about 60% down — not a horizontal line.` If it fails twice, use `2-STACK` and change the storyboard to match. |
| Page 4: no inset, or the inset is a normal row | `Panel 2 is a SMALL separate rectangular panel with its own dark border and white outline, set into the lower-right corner of Panel 1, about one third of the page width.` If it fails twice, use `2-STACK` with the phone screen as the bottom panel. |
| Pages 5 or 7: stacked instead of side by side | `The two panels stand SIDE BY SIDE, each the full height of the page, divided by one vertical gutter.` |
| The carriage looks half empty | `Peak rush hour: every seat taken and the aisle packed shoulder to shoulder with standing commuters pressed close together.` |
| The crowd looks cartoonish | `Real rush hour, drawn straight: patient, ordinary commuters with natural faces. No squashed faces, nobody pressed against the glass.` |
| Page 3: Deerock holds a strap | `Deerock's hands rest on his backpack. He is NOT holding any strap or pole — the packed crowd keeps him upright.` |
| Headphones around Deerock's neck | `Deerock's headphones are ON HIS HEAD over his ears` (pages 3–5), or `Deerock has no headphones on him` (pages 6–7). Around the neck is Kai's cue. |
| Deerock is in a hoodie, or Kai in a dark hoodie or jacket | First check that the outfit crops are attached. Then add `Deerock's top is an open BLACK COLLARED SHIRT with buttons over a slate blue-grey tee, exactly as in the outfit reference image — not a hooded top.` |
| Kai looks like Deerock | `Kai's hair is SHORT — cropped at the sides and back, ears and nape fully exposed. Deerock's hair is MEDIUM and covers his ears. Kai wears NO glasses.` |
| A commuter looks like Deerock | `Deerock is the only person in the carriage with purple-black hair and thin dark rectangular glasses.` |
| A screen faces the camera | `Every screen faces the character using it. To show the reader the screen, the camera looks over that character's shoulder from behind.` (The page 4 inset is the one exception.) |
| Page 4: Kai's message garbled | Replace the message line with `the notification shows a short message with no readable text` and add the words afterwards in an image editor. |
| Faces drift from page to page | Check that both style reference pages are attached. |
| White frame around the page | `Full bleed: the outer panels touch all four edges of the canvas. No white margin, border or frame around the page.` |
| Sweat drops or shock lines | `Reactions are small and human. No sweat drops, no shock lines, no cartoon symbols.` |
