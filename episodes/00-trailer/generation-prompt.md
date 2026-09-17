# Trailer — One-Shot Generation Prompt

One prompt, one image: the whole 10-panel 4:5 page. This is the chosen production method for
the trailer — it is a social-media teaser, not print, so a single good render beats a ten-step
pipeline.

## Paste it verbatim

Copy the fenced block below **exactly**, straight into the image generator. Do not let a chat
assistant rewrite, summarise or "improve" it on the way, and do not describe the trailer in your
own words instead — a paraphrase loses the locks, and the page comes back as a different comic.

**Canary:** if the finished page's title block does not read exactly `EPISODE 01` /
`JUST ONE SMALL CHANGE` / `COMING SOON`, this prompt is not what ran. That has happened once
already: a page came back with a motorcycle commute, narration captions and the title
"A SLICE OF OUR DAYS" — none of which appear anywhere in this file.

Other tells that something else ran: caption boxes narrating the panels (this prompt bans
captions), no Sentra Lintas platform panel, no KRL carriage panel.

## Before you paste

**Attach these reference images** (paths from `references/registry.md`):

```
characters/deerock.png      characters/aki.png      characters/kai.png
characters/rin.png          characters/mika.png
locations/home.png          locations/krl-station.png    locations/krl-interior.png
locations/office.png        props/motorcycle-vario150.jpg
```

Ten attachments is a lot for some tools. If yours caps out, drop in this order:
`krl-station.png` → `motorcycle-vario150.jpg` → `krl-interior.png`. Never drop a character sheet.

**Do not attach** `references/off-canon/deerock-virelux-cover.png` — it contains a katana and a
tactical harness, and it will leak into the render.

Output at **4:5 portrait**, exported at **1080×1350** — the tallest ratio an Instagram feed post
shows without cropping. Keep the largest size the generator gives you and downscale.

Check the ratio **before** reviewing anything else: width ÷ height must be 0.8. A 9:16 or 2:3
render means the generator ignored the format, and the panel layout will be wrong with it. Do not
crop a taller render down to 4:5 — cropping cuts the top and bottom rows off. Re-roll instead.

`v001`–`v004` in `results/` are the earlier **9:16 edition**. Do not use them as a layout
reference for this format.

---

## The prompt

```
A single 4:5 portrait comic page (1080 x 1350), 10 panels in six rows, read left to right and
top to bottom.
Contemporary slice-of-life manga/anime: clean linework, restrained cel shading, subtle halftone
texture, soft cinematic lighting, realistic modern Indonesian environments, natural expressions.
Muted cool palette with subtle purple and blue accents. Thin dark panel borders, thin white
gutters, white page background. Consistent line weight, eye size and face proportion across
every character on the page.

=== CAST — match the attached character sheets exactly ===

DEEROCK — 25, male, frontend developer, 172 cm, slim. Dark PURPLE-black hair, MEDIUM length and
layered, soft strands falling over his forehead, COVERING HIS EARS and reaching the nape — it must
read purple, not black. ALWAYS wears thin dark rectangular glasses. Youthful slim face.
CLEAN CHIN — no beard, no moustache, no stubble, no jaw shadow; the only facial hair is a very
thin, tiny, sparse patch directly beneath the lower lip.
Wears a dark hoodie or dark overshirt over a plain dark tee, dark jeans, dark sneakers, with
one small orange accent. No harness, no straps, no pouches.
Expression register: small and contained — slight frown, small smile, flat stare. Never broad.

AKI — 24, female, UI/UX designer, 160 cm, petite. Warm brown hair worn UP in a loose messy BUN
with soft face-framing strands. No glasses. Loose knitted cream sweater, black wide cargo trousers,
suspender straps, lanyard. Open, expressive, smiles big.

KAI — 28, male, backend developer, 178 cm, tallest and broadest of the team. JET BLACK hair, and
it is SHORT: cropped short at the sides and back, EARS AND NAPE FULLY EXPOSED, short spiky tousled
top, short fringe off the forehead. Nothing covers his ears. Clearly shorter hair than Deerock.
NEVER wears glasses. Dark hoodie under an open dark jacket, OLIVE-BROWN cargo trousers that are
clearly lighter than Deerock's near-black jeans. Over-ear headphones AROUND HIS NECK.
Relaxed posture, open grin with teeth showing.

RIN — 24, female, QA engineer, 162 cm, slim. Very dark straight hair, LONG — past the shoulders
down to mid-back — with a full blunt fringe. No glasses. Black oversized hoodie over a light
tee, dark grey cargo trousers, lanyard. Calm, still, deadpan.

MIKA — 26, female, project manager, 165 cm. Light warm brown hair, LONG, loosely wavy, worn
DOWN past the shoulder blades — the lightest hair on the page. No glasses. Collared cream blouse with
rolled sleeves, black plain wide trousers, suspender straps, lanyard, structured shoulder bag.
Warm and composed.

SEPARATION — these two pairs must never blur together:
Deerock and Kai are two clearly different people and must be instantly distinguishable in
silhouette, even in a small panel. Deerock: MEDIUM-length layered purple-black hair covering his
ears, thin dark glasses on his face in every single panel, 172 cm, slim, near-black jeans.
Kai: SHORT cropped jet-black hair with his ears and nape fully exposed, NO glasses at all,
178 cm, athletic and broader, olive-brown cargo trousers, headphones around his neck.
If you are unsure which one you are drawing: glasses and long-ish hair means Deerock, short
cropped hair and bare ears means Kai.
Aki's hair is UP in a bun and she wears cargo trousers; Mika's hair is DOWN, long, wavy and
lighter, and she wears plain wide trousers. Both wear cream tops, so the garment must differ:
Aki a loose knitted sweater with no collar, Mika a crisp collared blouse with rolled sleeves.

Everyone wears the same outfit in every panel — this is one single workday.

=== SETS — match the attached location sheets exactly. Do not redesign any building. ===

DEEROCK'S HOUSE (exterior) — a small SINGLE-STOREY landed house in a modest Indonesian housing
cluster. Cream/beige painted walls, dark brown pitched tile roof with a gable. A CARPORT CANOPY
of dark steel framing with a flat dark roof panel projects over the driveway in front of the
door, with a small round light underneath. Light grey paved driveway. Parked under the carport:
a dark grey HONDA SEDAN — a low four-door saloon with a boot, number plate B 1234 DRC — and
beside it, to its right, the motorcycle. A short grey concrete pillar at the front-left corner
of the plot carries the marking C12, next to a low bed of shrubs and a young tree. Low plaster
boundary wall. Identical neighbouring houses of the same type stand alongside.
This is a modest cluster house — NOT a modern glass villa, NOT two storeys, NOT large windows.
The car is a SEDAN, never an MPV or minivan.

THE MOTORCYCLE — a Honda Vario 150, model year 2017: a compact Indonesian automatic scooter with
a sharp angular front apron, slim pointed nose, low flat footboard, stepped single seat and a
short upswept tail. Matte dark grey / black bodywork. GOLD-painted alloy wheels — this is its
signature and must be clearly visible. Not a sport bike, not a naked motorcycle with a fuel tank
between the rider's knees, not a vintage scooter, not a delivery bike.

NEXA WORKSPACE LOBBY (ground floor) — an enclosed tower lobby: tall ceiling, polished pale grey
reflective floor, dark ceiling with recessed downlights, warm accent lighting.
The spatial order matters. You enter, and FIRST you reach the RECEPTION DESK. It stands in front
of a large pale marble wall carrying the NEXA lettering, with a warm light strip above it, and a
receptionist stands behind the desk. Tall dark planters with green plants flank it.
ONLY BEYOND the reception, further in and to the right, come the glass ACCESS GATES, and past
those, the metallic LIFT DOORS.
The gates are NEVER in front of the reception. The lobby has no desks, no city-view windows and
no open workspace visible — the workspace is a separate floor upstairs.

NEXA OPEN WORKSPACE (upper floor) — full-height window wall with a city skyline, warm wood desks
in rows, dual monitors, plants in low planters, exposed dark ceiling with linear lights, a glass
meeting room off to one side. Fixed desks for Deerock, Aki, Kai, Rin and Mika.

SENTRA LINTAS STATION — elevated KRL station. Steel and concrete structure, wide open platform
under a high canopy, tactile paving, yellow safety line, blue numbered platform signs, city
skyline beyond. Bilingual Indonesian/English signage.

KRL CARRIAGE — commuter train interior: blue patterned bench seats along the walls, silver
vertical poles, yellow and grey triangular hanging straps, overhead luggage rack, door area with
a route map. Believable weekday commuter density.

=== PAGE LAYOUT — 4:5 portrait, six rows ===

Row 1 — three equal panels side by side: Panel 1, Panel 2, Panel 3.
Row 2 — two panels: Panel 4 (wide, about three fifths) and Panel 5 (about two fifths).
Row 3 — Panel 6, full width, the shallowest row on the page.
Row 4 — Panel 7, full width.
Row 5 — Panel 8, full width.
Row 6 — two panels: Panel 9 (about three fifths) and Panel 10 (about two fifths), the title panel.

The page is only a little taller than it is wide, so every row is shallow. Keep each panel's
subject large and readable, keep background crowds sparse, and keep speech bubbles compact and
tucked against the top edge of their panel so they never cover a face.

=== PANELS ===

PANEL 1 — 06:45. Deerock's bedroom (see home sheet, Bedroom 1: dual-monitor desk, window
blinds, plants, dark bed). High three-quarter angle from the doorway. Deerock lies awake in bed
reaching out to silence his phone alarm, sleepy but not distressed. His glasses sit on the
bedside surface, NOT worn. Soft warm morning light through half-open blinds.
Sound effect near the phone: BEEP BEEP

PANEL 2 — 07:02. The kitchen and dining area of the same house. Waist-level side medium shot.
Deerock, glasses on now, pours coffee into a plain mug while glancing at his phone. Calm and
routine. His packed backpack leans against a dining chair. Warm kitchen light.
Thought bubble: Masih sempat.
Sound effect: TUANG

PANEL 3 — 07:12. The front yard and carport of DEEROCK'S HOUSE, exactly as described in SETS —
single storey, cream walls, dark pitched tile roof, steel carport canopy, the dark grey sedan and
the gold-wheeled Vario parked beneath it, the C12 pillar at the front-left. Rear three-quarter
wide shot from inside the yard. Deerock, backpack on both shoulders and a black tumbler in one
hand, has just closed the front gate and walks out toward the street. Clear warm morning daylight.
Sound effect at the gate latch: KLIK

PANEL 4 — 07:35. Sentra Lintas Station, Platform 1 — elevated KRL station, steel and concrete
structure, tactile paving, yellow safety line, city skyline behind. Platform-level wide shot
looking down the tracks. Deerock waits safely behind the line, neutral and prepared, among an
ordinary weekday crowd. A red and white commuter train approaches in the background.
A blue platform sign above reads: 1
Sound effect: KRRRSH

PANEL 5 — 07:48. Inside the KRL carriage: blue patterned seats, silver poles, yellow triangular
hanging straps, believable weekday crowd. Over-the-shoulder medium close-up from behind
Deerock's right side. One hand on a pole, the other holding his phone, reading a chat message.
Barely perceptible eyebrow raise.
Phone screen shows one short chat line: Mika — Stand-up 09.30
Thought bubble: Belum sampai kantor.
Sound effect: TING

PANEL 6 — 08:45. The NEXA WORKSPACE LOBBY, exactly as described in SETS. Wide letterboxed rear
three-quarter shot at gate height. Deerock has already walked past the reception desk and now
stands at the ACCESS GATES further inside, tapping his card on the gate reader. Behind him, over
his shoulder, are the reception desk and the marble NEXA wall; ahead of him are the lift doors.
No open workspace and no city-view windows are visible from here. Calm, more alert than on the
commute.
Sound effect: BIP

PANEL 7 — 08:50. NEXA open workspace: full-height window wall, warm wood desks, dual monitors,
plants. Eye-level wide conversational shot down the desk aisle. Deerock in the foreground left,
setting his backpack down. Aki turns from her Figma screen. Kai — short cropped black hair,
bare ears, no glasses — swivels in his chair with headphones around his neck. Rin looks up from
a checklist. Mika walks in with a tablet. Everyone is mid-work, not posed for the camera. Leave clear space above the characters for speech bubbles.
Speech bubbles, short, in this order left to right:
  Aki: Pagi, Deerock.
  Kai: API auth udah siap.
  Rin: Aku mulai regression.
  Mika: Stand-up sepuluh menit lagi.
  Deerock: Oke.

PANEL 8 — 09:05. The same open workspace, slightly elevated wide shot across four desk zones.
Read left to right: Aki points at a Figma screen, Deerock (glasses, medium purple-black hair)
types code, Kai (no glasses, short cropped black hair) checks an API response, Rin writes a test
step. Mika stands in the aisle making a note. Collaborative and attentive;
nobody is overwhelmed and nobody is the villain. Screens show only simple schematic UI, code and
charts — no readable body text. Leave clear space above for speech bubbles.
Speech bubbles:
  Aki: Empty state pakai yang ini, ya.
  Deerock: Siap, aku sambung ke endpoint baru.
  Kai: Response-nya sudah ada.
  Rin: Nanti aku cek kondisi kosongnya.
  Mika: Aku catat buat stand-up.

PANEL 9 — 09:10. Deerock's desk: dual monitors, black tumbler, headphones, a small plant.
Shot over Mika's shoulder at seated eye level. Deerock pauses at the keyboard and looks up.
Mika delivers the update with a measured, slightly apologetic half-smile. Deerock gives a small
blank-stare beat — restrained, no cartoon shock lines, no sweat drop.
Speech bubbles:
  Mika: Oh iya, ada satu perubahan kecil lagi...
  Deerock: Yang bagian mana?

PANEL 10 — 09:10. The title panel, bottom right of the page, beside Panel 9. Deerock seen from
behind at his desk, soft and partly defocused, monitors glowing quietly. Same neutral office light,
subtly softened. Keep the left half of this panel visually quiet for the title typography.
Title text, exactly these three lines and nothing else:
  EPISODE 01
  JUST ONE SMALL CHANGE
  COMING SOON

=== TEXT POLICY ===
The ONLY text anywhere on this page is: the speech and thought bubbles listed above, the sound
effects listed above, the three title lines in Panel 10, the platform sign "1", the short chat
line in Panel 5, and the "NEXA" mark and "C12" gate marker where they naturally appear on the
set. Spell every line exactly as written. Nothing else is written anywhere.

=== NEGATIVE ===
No katana, no sword, no ninja, no samurai, no fantasy armour, no tactical harness, no chest rig,
no utility straps or buckle pouches, no supernatural effects, no action aura, no glowing weapon,
no cyberpunk elements, no magazine-cover layout, no lens flare, no dramatic hero angles,
no photorealism, no chibi, no 3D render.
Deerock is never without glasses; his hair is never plain black; his chin is always clean —
no beard, no moustache, no stubble.
Kai never wears glasses, never has purple hair, and never has long or ear-covering hair.
Do not draw Kai as a second version of Deerock.
Do not redesign any building or room. Deerock's house is never a modern glass villa and never two
storeys; his car is never an MPV. In the NEXA lobby the reception always comes before the access
gates, and the open workspace is never visible from the lobby.
No captions, no slogans, no taglines, no motivational copy, no character name tags, no role
labels under characters, no series title, no subtitle, no watermark, no branding, no invented
screen text, no katakana or Japanese decoration on clothing, no magazine headline typography.
Do not copy any decorative text printed on the reference sheets.
```

---

## If the render misses

Re-roll the whole page with one line added at the very top of the prompt. One fix at a time —
stacking them tends to make the model over-correct.

| What went wrong | Line to add |
| --- | --- |
| Slogans or captions appeared | `Absolutely no text on this page except the speech bubbles, sound effects and the three title lines. No captions anywhere.` |
| Name tags under characters | `Do not label or name any character. No name tags, no role labels.` |
| Deerock grew stubble or a beard | `Deerock's chin is completely clean-shaven and smooth in every panel.` |
| **Kai looks like Deerock** | `Kai's hair is SHORT — cropped at the sides and back, ears and nape fully exposed, nothing covering the ears. Deerock's hair is MEDIUM and covers his ears. Kai wears NO glasses in any panel.` |
| Aki and Mika look alike | `Aki's hair is tied up in a bun; Mika's hair is long, loose and wavy. Different hairstyles; Aki in a loose knitted sweater, Mika in a collared blouse.` |
| Page came back 9:16 or 2:3 | `The page is 4:5 portrait — only slightly taller than it is wide. Six rows of panels, not seven.` |
| Panels merged or reordered | `Exactly 10 panels in six rows, in the layout described, in order, none merged, none added.` |
| Dialogue garbled | Drop the dialogue: replace every bubble with `empty white speech bubble` and add the text afterwards in any editor. |
| Lobby gates in the wrong place | `In the NEXA lobby the reception desk comes FIRST, with the marble NEXA wall behind it. The access gates are further in, beyond the reception, next to the lift doors. No open workspace is visible from the lobby.` |
| House looks too modern | `Deerock's house is a modest single-storey cluster house: cream walls, dark pitched tile roof, steel carport canopy, small windows. Not a glass villa. The car is a dark grey four-door sedan, not an MPV.` |
| Motorcycle looks generic | `The scooter is a Honda Vario 150 (2017): compact automatic scooter, angular front apron, low flat footboard, stepped seat, GOLD alloy wheels. Not a sport bike, no fuel tank between the knees.` |
| Page feels cramped | `Fewer background characters, smaller speech bubbles, more breathing room inside each panel.` |

Save each 4:5 attempt as `results/ep00_page01_v005.png`, `v006`, and so on — never overwrite.
`v001`–`v004` are the 9:16 edition. When one is good, mark it approved in
`assets/approved/manifest.md`.

## Known trade-off

A one-shot page cannot be fixed panel by panel: a re-roll changes all ten. If one specific panel
keeps failing after three or four attempts, generate just that panel separately at the same
aspect ratio and paste it over the page in any image editor — faster than re-rolling the whole
page again.
