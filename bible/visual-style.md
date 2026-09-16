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
