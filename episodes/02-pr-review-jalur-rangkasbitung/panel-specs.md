# DEEROCK — Episode 02 Panel Specifications

## Scope and production guardrails

- **Source storyboard:** `episodes/02-pr-review-jalur-rangkasbitung/storyboard.md`. This document expands it; it adds no scenes or dialogue.
- **Format:** 8 × 4:5 portrait pages (1080 × 1350), 14 panels: 2 · 2 · 1 · 2 · 2 · 2 · 2 · 1. Full bleed on every page.
- **Layouts:** `2-STACK` · `2-DIAG` · `1-FULL` · `2-INSET` · `2-SIDE` · `2-STACK` · `2-SIDE` · `1-FULL`, from the menu in `bible/visual-style.md`. The prompts use the paste-ready blocks in `prompts/image-generation.md`.
- **Production route:** Route A, one page per shot. Output `results/ep02_page01_v001.png` … `ep02_page08_v001.png`.
- **Density:** 1–2 panels per page, at most 2 bubbles per panel and 3 per page.
- **Text:** only listed dialogue, thoughts, SFX, functional UI and real station signage. No captions, titles, slogans, name tags or role labels.
- **Names:** Deerock is always written in full.
- **Crowd:** real weekday rush hour on the Rangkasbitung line — packed, patient, ordinary people. Never cartoonish: no squashed faces, nobody pressed against glass, no anger, no violent shoving.

## Reference assets

| ID | File | Pages |
| --- | --- | --- |
| `CHAR-DEEROCK` | `characters/deerock.png` | 1–8 |
| `CHAR-KAI` | `characters/kai.png` | 6–8 |
| `LOC-STATION` | `locations/krl-station.png` | 1–2 |
| `LOC-KRL` | `locations/krl-interior.png` | 2–5 |
| `LOC-OFFICE` | `locations/office.png` | 6–8 |

### Attach per page

Style references follow `prompts/image-generation.md`: the anchor page plus the previous page.
Page 1 of this episode becomes the anchor once approved.

| Page | Sheets | Style reference pages |
| --- | --- | --- |
| 1 | deerock · krl-station | Episode 01 anchor `ep01_page01_v002.png` |
| 2 | deerock · krl-station · krl-interior | `ep02_page01` |
| 3 | deerock · krl-interior | `ep02_page01` · `ep02_page02` |
| 4 | deerock · krl-interior | `ep02_page01` · `ep02_page03` |
| 5 | deerock · krl-interior | `ep02_page01` · `ep02_page04` |
| 6 | deerock · kai · office | `ep02_page01` · `ep02_page05` |
| 7 | deerock · kai · office | `ep02_page01` · `ep02_page06` |
| 8 | deerock · kai · office | `ep02_page01` · `ep02_page07` |

### Wardrobe and carried items

A new day, so new outfits from the sheets' variations: `D-W02` — Deerock's *Office Casual*, an open
black overshirt over a slate-grey tee, dark grey chinos, **no hoodie** — and `K-W02` — Kai's
*Sweater*, a light grey oversized crewneck and olive-brown cargo trousers, **no hoodie or jacket**.
The Episode 01 page attached to page 1 shows Deerock in a hoodie; the prompt says clothing follows
the CAST section. Deerock always wears glasses; Kai never does, and his headphones are around his
neck.

| Panels | Backpack | Headphones | Lanyard |
| --- | --- | --- | --- |
| 1.1 | on his back | not visible (in the backpack) | none |
| 1.2 | being swung round to his front | not visible | none |
| 2.1–2.2 | on his front | not visible | none |
| 3.1–5.2 | on his front, squashed by the crowd | **on his head**, over the ears | none |
| 6.1 | on his back | not visible | on, access card in hand |
| 6.2–7.2 | set down by his chair | not visible | on |
| 8.1 | on his lap, open, laptop coming out | lying on the desk | on |

Deerock's headphones are never around his neck — that is Kai's silhouette cue. Apply the
Deerock/Kai separation clause on pages 6–8.

### Sets

- **Concourse (1.1):** row of silver fare gates with card readers; the navy overhead sign
  `Ke Platform / To Platform` above them. Departure boards and other signs out of focus.
- **Platform 1 (1.2, 2.1):** elevated platform under a high canopy, tactile paving, yellow safety
  line, blue platform sign `1`, city skyline; red-and-white commuter train.
- **Carriage (2.2–5.2):** blue patterned bench seats, silver poles, yellow and grey triangular
  straps, overhead rack, door area with route map. Peak morning crush.
- **NEXA lobby (6.1):** reception desk first, in front of the marble `NEXA` wall; the glass access
  gates further in and to the right; the lift doors beyond. No workspace visible.
- **Deerock's desk (6.2–8.1):** desk order **Aki · Deerock · Kai · Rin**, so Kai's desk is directly
  beside Deerock's. Two monitors (landscape wallpaper left, code right), mechanical keyboard, black
  tumbler, sticky notes on the low partition. No laptop on the desk until he takes it out in 8.1.
  No other named character in frame; background coworkers, if any, are small, generic and out of
  focus.

### Time, light and crowd

| Panels | Time | Light | Crowd |
| --- | --- | --- | --- |
| 1.1 | 07:25 | bright morning daylight through the open structure, cool structural shadows | a steady stream through the gates |
| 1.2 | 07:29 | bright morning daylight under the platform canopy | a crowded platform, queued behind him |
| 2.1 | 07:30 | same | the carriage already packed to the doorway |
| 2.2 | 07:30 | flat carriage light, bright platform behind him | the surge from behind |
| 3.1–5.2 | 07:35–07:55 | cool window daylight, flat practical carriage light | peak crush, bodies pressed on every side |
| 6.1 | 08:45 | neutral lobby light plus glass-façade daylight | a few people, calm |
| 6.2–8.1 | 08:50–08:52 | soft morning window daylight, restrained office light | quiet office |

---

## Page 1 — Matematika Komuter

**Output:** `ep02_page01_v001.png` · **Bubbles:** 2 · **Layout:** `2-STACK` — 1.1 top, about 55% of the height; 1.2 bottom. The carousel cover.

### 1.1 — Tap in

- **Cast/location:** Deerock at the Sentra Lintas concourse ticket gates, 07:25.
- **Camera/action:** eye-level medium-wide, three-quarter front, from just past the gates. Deerock taps his e-money card on the gate reader mid-stride, calm and unhurried, backpack on his back. Other commuters stream through the neighbouring gates. The `Ke Platform / To Platform` sign hangs above the gates.
- **Text:** sign `Ke Platform / To Platform`; Deerock thought: `07:25. Kereta masuk 07:30. Aman.` The card has no readable branding.

### 1.2 — Gerbong 3

- **Cast/location:** Deerock on Platform 1 among a crowded queue, 07:29.
- **Camera/action:** platform-level medium shot from the side, looking along the platform. Deerock stands just behind the yellow tactile line, swinging his backpack round to his front, eyes on the train as it pulls in behind him in the distance. Commuters pack in behind him. Composed, precise.
- **Text:** platform sign `1`; Deerock thought: `Gerbong 3, pintu tengah. Pas turun, langsung depan eskalator.`

---

## Page 2 — Jam Berangkat

**Output:** `ep02_page02_v001.png` · **Bubbles:** 2 · **Layout:** `2-DIAG` — a straight white gutter on a gentle slant, from the left edge about 40% down to the right edge about 60% down. 2.1 is the upper piece, 2.2 the lower.

### 2.1 — Wall

- **Cast/location:** Deerock on Platform 1, facing the open doors, 07:30.
- **Camera/action:** from the platform, ahead of Deerock and slightly to his side. Deerock on the left in three-quarter front view, backpack on his front; on the right, the train doors have slid open exactly in front of him onto a carriage already packed to the doorway — shoulders, backs and front-worn backpacks filling it. Deerock looks at it with a flat, deadpan stare.
- **Text:** Deerock thought: `Satu variabel yang nggak pernah masuk hitungan.`

### 2.2 — Masih muat

- **Cast/location:** Deerock at the carriage door area, with the crowd, 07:30.
- **Camera/action:** from inside the carriage, looking back at the doorway. The crowd behind him surges forward and carries Deerock in; the bright platform is behind him. His glasses are still on but knocked slightly crooked; his face stays neutral. The passengers inside squeeze together to make room. Busy, not violent.
- **Text:** speech bubble from an unseen commuter, its tail pointing into the crowd behind Deerock: `Geser ke dalem, Mas! Masih muat!`

---

## Page 3 — Tidur Ayam

**Output:** `ep02_page03_v001.png` · **Bubbles:** 1 · **Layout:** `1-FULL`.

### 3.1 — Held up

- **Cast/location:** Deerock among anonymous commuters in the packed carriage, 07:35.
- **Camera/action:** slightly elevated medium-wide from along the aisle, Deerock centred. He is wedged upright in the crowd, backpack squashed against his front, headphones on his head, eyes closing with a small contented calm. His hands are down at his backpack — **not** on a strap or pole; the straps overhead are held by other hands. Bodies pressed on every side, faces patient and a little sleepy.
- **Text:** Deerock thought: `Waktunya tidur ayam. 40 menit. Nggak bakal jatuh juga.`

---

## Page 4 — Interupsi Pagi

**Output:** `ep02_page04_v001.png` · **Bubbles:** 0 (SFX and screen text only) · **Layout:** `2-INSET` — 4.1 fills the page; 4.2 is an inset about a third of the page width, set a little in from the lower-right corner.

### 4.1 — TING

- **Cast/location:** Deerock in the packed carriage, 07:45.
- **Camera/action:** medium close-up from the front, Deerock framed in the upper left of the page so the inset covers neither his face nor the phone. His eyes snap open under his headphones — a small, sharp reaction, not a cartoon shock. His phone is pinned flat against his backpack at chest height, its screen facing up at him, lit; its glow falls on his face and glasses. His arms are pinned by the crowd. Commuters around him barely react.
- **Text:** SFX `TING` beside the phone.

### 4.2 — The message (inset)

- **Cast/location:** the phone screen, 07:45.
- **Camera/action:** a straight-on insert of the phone screen filling the inset: a simple chat notification with a small round avatar.
- **Text:** sender `Kai`; message `Deerock, tolong review PR dong. Urgent, mau di-merge sebelum jam 9.` Nothing else on the screen is readable.

---

## Page 5 — Perjuangan Layar Kecil

**Output:** `ep02_page05_v001.png` · **Bubbles:** 2 · **Layout:** `2-SIDE` — 5.1 on the left, about 60% of the width; 5.2 on the right.

### 5.1 — One arm free

- **Cast/location:** Deerock in the packed carriage, 07:50.
- **Camera/action:** medium close-up, three-quarter front. Deerock has worked one arm free and holds the phone close to his face, squinting behind his glasses with a tight small frown; the other arm is still pinned. The carriage lurches: the bodies around him lean the same way, a stranger's shoulder presses into his and an elbow digs into his side. The phone's screen faces him.
- **Text:** Deerock thought: `Review ratusan baris kode… di layar HP… sambil terguncang…`

### 5.2 — The diff

- **Cast/location:** Deerock's phone, 07:55.
- **Camera/action:** close over Deerock's shoulder, the edge of his cheek, glasses and headphones in the foreground; the phone fills the tall, narrow panel, screen facing him. On it, a pull request diff: red and green rows of tiny, cramped code wrapping and running past the edges of the small screen.
- **Text:** code is schematic and unreadable. Deerock thought: `Ini fungsi apa sih, panjang banget…`

---

## Page 6 — Sampai Tujuan

**Output:** `ep02_page06_v001.png` · **Bubbles:** 2 · **Layout:** `2-STACK` — 6.1 top, about 45% of the height; 6.2 bottom.

### 6.1 — Through the gates

- **Cast/location:** Deerock in the NEXA lobby, 08:45.
- **Camera/action:** medium shot from the lift side of the access gates, angled back toward the entrance. Deerock walks through a glass gate, tapping the access card on his lanyard, backpack on his back. Hollow-eyed and drained, shoulders low, overshirt a little rumpled from the crush. The reception desk and the marble `NEXA` wall are behind him in the background. Not a repeat of the trailer's rear view at the gates.
- **Text:** Deerock thought: `Rencana tidur 40 menit. Dapetnya 10.` The `NEXA` lettering on the marble wall is the only other text.

### 6.2 — Fast approval

- **Cast/location:** Deerock and Kai at Deerock's desk, 08:50.
- **Camera/action:** eye-level medium two-shot from the aisle. Deerock has just sat down and is lowering his backpack beside his chair. Kai strides over from the aisle, beaming, a takeaway coffee in one hand, headphones around his neck.
- **Text:** Kai: `Thanks, Deerock! Cepet banget approve PR-nya.`

---

## Page 7 — Jangan Ditanya

**Output:** `ep02_page07_v001.png` · **Bubbles:** 2 · **Layout:** `2-SIDE` — two equal panels, 7.1 left, 7.2 right.

### 7.1 — Don't ask

- **Cast/location:** Deerock seated at his desk, 08:51.
- **Camera/action:** close-up from slightly above, Kai's eye line. Deerock looks up with a flat, tired stare, eyelids a little heavy. Monitors glow softly behind him.
- **Text:** Deerock: `Jangan ditanya gimana caranya.`

### 7.2 — …Oke?

- **Cast/location:** Kai standing by Deerock's desk, 08:51.
- **Camera/action:** close-up from slightly below, Deerock's eye line — the reverse angle. Kai's grin stalls into an uncertain smile, one eyebrow up, the takeaway coffee halfway to his mouth. Headphones around his neck.
- **Text:** Kai: `…Oke?`

---

## Page 8 — The Aftermath

**Output:** `ep02_page08_v001.png` · **Bubbles:** 1 · **Layout:** `1-FULL`. The last page.

### 8.1 — Resigned

- **Cast/location:** Deerock at his desk, Kai out of focus at the neighbouring desk, 08:52.
- **Camera/action:** eye-level medium shot, three-quarter front. Deerock, backpack open on his lap, draws his laptop out and opens it with the air of a man accepting his fate — half-lidded eyes, a small resigned slump. His headphones lie on the desk beside the black tumbler; dual monitors behind. In the background, soft and out of focus, Kai is back at his own desk. Morning window light.
- **Text:** Deerock thought: `Kalau ada bug di production, murni salah guncangan gerbong 3.` Nothing is written after it — no end caption.

---

## Pre-generation checklist

- [ ] Ratio 0.8, full bleed, and the page's named layout; panels neither merged nor added.
- [ ] Every screen faces the character using it; the only straight-on screen is the 4.2 inset.
- [ ] Crowd density follows the table, and the crush is real rush hour — never cartoonish.
- [ ] Outfits are `D-W02` and `K-W02` — no hoodie on Deerock, no dark hoodie or jacket on Kai.
- [ ] Backpack, headphones and lanyard follow the table; Deerock's headphones are never around his neck.
- [ ] "Gerbong 3" in 1.2 and 8.1 and "40 menit" in 3.1 and 6.1 are exact — they are the setup and payoff.
- [ ] No bubble is longer than about 12 words; no asterisks or italics markers appear in any rendered text.
- [ ] Deerock/Kai separation passes on pages 6–8.
- [ ] Style references attached per the table; hard exclusions pass the series checklist.
