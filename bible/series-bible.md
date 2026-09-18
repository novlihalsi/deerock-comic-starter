# Series Bible

## Title
DEEROCK — A Frontend Developer's Ordinary Days

## Logline
Deerock is a quiet frontend developer trying to live an ordinary life while navigating work,
commuting, friendships, deadlines, design changes, APIs, QA, meetings, and the small absurdities
of software development.

## Tone
- Calm
- Relatable
- Dry workplace humour
- Warm and slightly wholesome
- Occasional emotional beats
- Never action-heavy

## Story ratio
- 70% everyday life
- 20% software-team humour
- 10% emotional / wholesome moments

## World
Greater Jakarta (Jabodetabek). Deerock lives in a small landed house in **Cisauk** and commutes
by **KRL Commuter** into the Jakarta business district, where he works at **NEXA Workspace**.
Home, Sentra Lintas Station, the KRL carriage, the office and **LUMA Café** recur across
episodes. Full detail in `bible/story-world.md`.

## Team

| Character | Role | Age | ID |
| --- | --- | --- | --- |
| Deerock | Frontend Developer | 25 | `CHAR-DEEROCK` |
| Aki | UI/UX Designer | 24 | `CHAR-AKI` |
| Kai | Backend Developer | 28 | `CHAR-KAI` |
| Rin | QA Engineer | 24 | `CHAR-RIN` |
| Mika | Project Manager | 26 | `CHAR-MIKA` |

## Language
Spoken dialogue is natural Indonesian, with the English technical terms a real Jakarta software
team would actually use (deploy, endpoint, empty state, regression, stand-up). English is also
allowed for code, UI labels, role names and existing signage. Do not write stiff textbook
Indonesian, and do not translate technical terms that nobody translates in practice.

## Core principle
Nobody is the villain. Everyone is trying to do a good job. Problems come from dependencies,
unclear requirements, changing scope, communication gaps, edge cases, deadlines, and normal
human behaviour.

## Hard exclusions
No katana, ninja, samurai, tactical costume, fantasy armour, supernatural effects, action aura,
glowing weapons or cyberpunk transformation. This applies to every panel, cover and promo image
unless a future story explicitly changes canon through the process in
`bible/consistency-guide.md` section 9.

## Season 1 direction
A loose chain of ordinary workdays that gradually establishes the team and their relationships.
There is no need for a large overarching plot.

## Episode format

**Default page format: 4:5 portrait, exported at 1080 × 1350.** It is the tallest ratio an
Instagram feed post shows without cropping, and a multi-page episode works as a carousel. An
episode may use a different format, but its README must say so.

**Page density: 1–2 panels per page, at most 2 speech or thought bubbles per panel, and at most 3
per page.** A 4:5 page is read on a phone, one swipe at a time. With three panels each one gets a
third of the screen, and faces and bubbles shrink until they strain the eye; one or two panels give
each beat half the screen or all of it, and let a punchline land on a page of its own. Fewer panels
and bubbles per image are also what the generator gets right — every text error on the trailer
landed in its two densest panels — and since every page is generated in one shot, a re-roll risks
one or two panels instead of three.

Two exceptions, both made before this rule: the trailer, one teaser page carrying ten panels, and
Episode 01, made under the earlier limit of 2–3 panels and 5 bubbles per page. Both stay as made.

**Page count: no fixed limit.** An episode takes as many pages as its beats need, and every page
should give the reader a reason to swipe to the next. The one hard ceiling is the platform's: an
Instagram carousel currently holds at most 20 slides, so an episode longer than that is posted in
parts, each part ending on a page that works as a pause.

**Layout: vary it.** Each page uses one layout from the menu in `bible/visual-style.md` — one full
panel, or two panels stacked, side by side, split diagonally or inset — chosen for the beat, and
the storyboard names it for every page. No layout runs for more than two pages in a row, so a
carousel never settles into the same top-and-bottom split.

**Bubble length: about 10 words, rarely more than 12, and no more than about 25 words of dialogue
on a page.** Both extremes have failed on Episode 01. Lines compressed to a few words lost readers,
because they relied on context the page never gave. Lines that explained what the art already
showed crowded the page and put long text at risk of garbled rendering. Each line should answer or
follow from the one before it, and should not restate anything written on a screen in the same
panel.

| Slug | Format | Status |
| --- | --- | --- |
| `00-trailer` | ONE 4:5 portrait page, 10 panels in six rows | 4:5 edition not yet generated · 9:16 edition approved: `episodes/00-trailer/results/ep00_page01_v004.png` |
| `01-just-one-small-change` | 5 pages at 4:5, 2–3 panels per page (14 panels) — the earlier density limit | **complete** · all 5 pages approved, final (2026-09-18) |
| `02-pr-review-jalur-rangkasbitung` | 8 pages at 4:5, 1–2 panels per page (14 panels) | prompts ready · page 1 next |

Changing an episode's page format is a canon change: update the episode's `README.md` and
`storyboard.md` together, and never leave two documents describing different formats.
