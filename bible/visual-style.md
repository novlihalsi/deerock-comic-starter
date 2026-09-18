# Visual Style Bible

## Overall
Contemporary manga/anime slice-of-life: clean linework, restrained cel shading, soft cinematic
lighting, subtle halftone or paper texture, realistic modern Indonesian environments, expressive
but natural faces. Not photorealistic. Not chibi. No heavy rendering or airbrushed illustration.

## Rendering consistency across the cast
The five reference sheets were not all drawn at the same level of stylisation: Deerock, Kai and
Rin sit closer to grounded seinen anatomy, Aki and Mika closer to a soft moe rendering. Within a
single panel, one rendering must win. Keep eye size, face proportion, line weight and shading
density uniform across everyone in the frame, even if that means pulling an individual character
slightly away from their own sheet.

## Page edges — full bleed

**No white margin, border or frame around the edge of a page.** The outer panels run right to the
edges of the canvas; the only white on a page is the thin gutter *between* panels. A white frame
wastes the already tight 4:5 space, and on a white Instagram feed it makes the page read as a
screenshot of a comic rather than a comic.

Prompts must not ask for a "white page background" — that phrase is what produced frames in the
first place. If a render still comes back with a frame, re-roll. Crop only when the frame is even on
all four sides, and then check the ratio is still exactly 0.8.

## Screens face the person using them

**A phone, tablet or laptop screen points at whoever is using it.** When the reader needs to see
what is on the screen, move the camera — over the shoulder, from behind — never turn the device
toward the camera. A device held out to the camera reads as a character showing the reader
something, which breaks the scene; and a character smiling at the back of their own phone has
visibly not read the message they are reacting to.

When one character shows a screen to another, the screen faces the person being shown. The camera
goes behind that person if the reader must read it.

This went wrong three times on Episode 01 before it became a rule: Mika's tablet and Aki's phone on
page 1, and Deerock's phone on page 5.

## Colour
Muted cool neutrals as the base. Soft purple and blue accents carry Deerock's visual identity;
a small orange accent is his secondary cue. Warm indoor practical light contrasts against the
cooler exterior and commute scenes.

Per-location palettes are printed on each location sheet — use them rather than inventing one.

## Camera
Mix:
- medium conversational shots
- over-the-shoulder work shots
- environmental wides
- occasional close-ups for reactions
- KRL crowd and environment shots

Avoid constant dramatic hero angles, dutch tilts and low heroic framing.

## Page layout

A page holds one or two panels (`bible/series-bible.md`, Episode format). The storyboard names one
of these layouts for every page, chosen for the beat — not at random, and not the same one every
time. **No layout runs for more than two pages in a row.**

| Code | Shape | Use it for |
| --- | --- | --- |
| `1-FULL` | One panel filling the whole page, edge to edge | The cover, an establishing wide, a punchline, a quiet beat that needs room |
| `2-STACK` | Two full-width panels, one above the other — equal, or uneven such as 60/40 or 70/30 | A scene and its consequence; a line and the reaction to it |
| `2-SIDE` | Two full-height panels side by side, each tall and narrow — equal, or uneven such as 60/40 | Two faces in conversation, shot and reverse shot; two people in the same moment. Close and medium shots only, never a wide |
| `2-DIAG` | Two panels split by one straight diagonal gutter at a gentle slant | Contrast — before and after, expectation and reality, office and train. Sparingly: about once an episode |
| `2-INSET` | One page-filling panel with a small bordered panel set into one corner, about a third of the page width | A detail on top of the scene — a phone screen up close, a small reaction. The inset never covers a face or a bubble |

`2-INSET` is the natural way to show a screen the reader must read: the main panel keeps the device
facing its user (see *Screens face the person using them* above), and the inset shows the screen up
close.

For every layout: gutters are thin, white and straight; the outer edges stay full bleed; panels read
top before bottom and left before right, and in `2-INSET` the main panel before the inset. Keep it
slice-of-life — no shattered, jagged or overlapping action-manga layouts, and no steep diagonals.

A generator draws `2-STACK` and `2-SIDE` most reliably and ignores `2-DIAG` and `2-INSET` more
often. If a render ignores the layout, re-roll with one corrective line. If it fails twice, choose
another layout from this table and change the storyboard to match.

## Locations
Geometry, props and signage come from the location sheets listed in `references/registry.md`.
Summaries live in `bible/story-world.md`. Do not redesign an established location.

- **Home** (`LOC-HOME`) — a small single-storey landed house in Cisauk, with a carport and front
  yard. Tidy but lived-in. Bedroom 1 doubles as Deerock's desk setup, with dual monitors and
  morning light through blinds. **It is a house, not an apartment.**
- **Station** (`LOC-STATION`) — elevated KRL station, bilingual signage, `SL` red mark.
- **KRL** (`LOC-KRL`) — realistic commuter carriage, believable crowd density.
- **Office** (`LOC-OFFICE`) — NEXA Workspace, glass, plants, whiteboards, fixed desk positions.
- **Café** (`LOC-CAFE`) — LUMA Café, natural light, laptops, communal tables.

## Typography and on-panel text
Panel dialogue should be short, readable and natural. Indonesian for spoken lines; English for
code, UI labels, role names and existing signage.

**Only four kinds of text may appear in a panel:**
1. dialogue specified in the storyboard,
2. functional UI or signage the scene genuinely contains,
3. SFX specified in the storyboard,
4. the episode title block, where the storyboard defines one.

No captions, slogans, taglines, motivational copy, character name tags, watermark branding or
invented screen text. The reference sheets are covered in decorative slogans; those belong to
the sheets, not to the comic. See `prompts/negative-prompts.md` for the exact banned strings.

If text rendering is unreliable in your generator, produce the art clean and typeset the
dialogue afterwards in the assembly step. Character identity and environment continuity come
before text.

## Negative style constraints
No katana, ninja, samurai, fantasy armour, tactical harness or utility-strap rig, supernatural
effects, action aura, glowing weapons, cyberpunk transformation, magazine-cover layout, or
lens-flare hero grading — unless a future story explicitly changes canon.
