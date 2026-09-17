# Episode 01 — Generation Prompts

One prompt per page, one image per prompt. Each is built from
[`../panel-specs.md`](../panel-specs.md) and is self-contained: cast, separation, sets, layout,
panels, text policy and negatives for that page only.

| Page | Prompt | Panels | Attach |
| --- | --- | --- | --- |
| 1 | [`page-01.md`](page-01.md) | 3 | deerock · aki · mika · office |
| 2 | [`page-02.md`](page-02.md) | 3 | all five characters · office |
| 3 | [`page-03.md`](page-03.md) | 3 | all five characters · office |
| 4 | [`page-04.md`](page-04.md) | 3 | all five characters · office |
| 5 | [`page-05.md`](page-05.md) | 2 | all five characters · office · krl-interior |

## Rules

**Paste the fenced block verbatim.** Do not let a chat assistant rewrite or summarise it on the
way. A paraphrase loses the locks.

**Attach only the sheets listed for that page.** An extra sheet invites extra content — attach the
station sheet and a platform tends to appear.

**Check the ratio first.** Width ÷ height must be 0.8. A 9:16 or 2:3 render means the layout is
wrong too. Do not crop a taller render down; re-roll.

**Save as** `../results/ep01_page01_v002.png`, then `ep01_page02_v001.png` …
`ep01_page05_v001.png`. Versions only go up. Approved page 1 v001 is a preserved,
pre-publication story draft and must not be overwritten. Approvals go in `assets/approved/manifest.md`.

## Keeping five pages looking like one comic

Page 1 (`v002`) attaches the approved pre-publication draft page, `../results/ep01_page01_v001.png`,
as its style reference — its story is no longer used, but its faces are. The STYLE REFERENCE line
for page 1 is already inside the page 1 prompt. Get page 1 approved first. From page 2 onward,
**also attach the previous approved page**, and add this line at the very top of the prompt:

```
STYLE REFERENCE: the attached previous page is for rendering style only — match its line weight, colouring, shading and how each character's face is drawn. Do not copy its panels, its layout or any of its text.
```

Without it, each page is rendered independently and small differences in faces, line weight and
palette add up across a carousel. The "do not copy its text" clause matters: an attached page is
full of speech bubbles, and a generator will happily reuse them.

## Canary

Every prompt forbids titles and captions. If a finished page shows any of the storyboard's
page titles — **Satu perubahan kecil**, **Ternyata**, **Dibenerin bareng**, **Lega dulu**,
**Satu perubahan kecil lagi** — or a page number, an episode title or a narration box, the prompt
was rewritten on the way or ignored. Re-paste it verbatim.

## If a page misses

Add **one** line at the very top of that page's prompt and re-roll. One fix at a time.

| What went wrong | Line to add |
| --- | --- |
| A page title, caption or page number appeared | `Absolutely no text on this page except the speech bubbles, thought bubbles, sound effects and screen text listed. No title, no caption, no page number.` |
| Wrong number of panels | `Exactly the number of panels described, in the rows described, none merged, none added.` |
| Page 3: the button label does not wrap | `On Aki's phone the button label is broken onto two lines — "Muat ulang" on top, "data terbaru" below — and the button looks too tall. It must read clearly.` |
| Kai looks like Deerock | `Kai's hair is SHORT — cropped at the sides and back, ears and nape fully exposed. Deerock's hair is MEDIUM and covers his ears. Kai wears NO glasses.` |
| Aki and Mika look alike | `Aki's hair is up in a bun and she wears a loose knitted sweater; Mika's hair is long, loose and wavy and she wears a collared blouse.` |
| Bubbles cover faces | `Keep every bubble small and tucked against the top edge of its panel, clear of all faces.` |
| Screen text garbled | Replace the screen-text line with `the screen shows a simple app layout with no readable text` and add the words afterwards in an image editor. |
| Faces drift from page to page | Attach the previous approved page and add the STYLE REFERENCE line above. |
| Sweat drops or shock lines | `Reactions are small and human. No sweat drops, no shock lines, no cartoon symbols.` |
