# DEEROCK — Episode 01 Panel Specifications

## Scope and production guardrails

- **Source storyboard:** `episodes/01-just-one-small-change/storyboard.md`. This document expands it; it adds no scenes or dialogue.
- **Trailer continuity:** the published trailer is fixed canon. Episode 1 begins at 09:11, one minute after its final story panel. Do not replay or contradict the trailer.
- **Format:** 5 × 4:5 portrait pages (1080 × 1350), 14 panels: 3 · 3 · 3 · 3 · 2. Read left to right, then top to bottom.
- **Production route:** Route A. The revised Page 1 must be saved as `results/ep01_page01_v002.png`; never overwrite approved `v001`.
- **Density:** 2–3 panels per page, at most 2 bubbles per panel and 5 per page.
- **Text:** only listed dialogue, thoughts, SFX and functional UI. No captions, titles, slogans, name tags or role labels.
- **Names:** Deerock is always written in full.

## Reference assets

| ID | File | Pages |
| --- | --- | --- |
| `CHAR-DEEROCK` | `characters/deerock.png` | 1–5 |
| `CHAR-AKI` | `characters/aki.png` | 1–5 |
| `CHAR-KAI` | `characters/kai.png` | 2–5 |
| `CHAR-RIN` | `characters/rin.png` | 2–5 |
| `CHAR-MIKA` | `characters/mika.png` | 1–5 |
| `LOC-OFFICE` | `locations/office.png` | 1–5 |
| `LOC-KRL` | `locations/krl-interior.png` | 5 |

### Attach per page

| Page | Attach |
| --- | --- |
| 1 | deerock · aki · mika · office · `results/ep01_page01_v001.png` (style reference only) |
| 2 | all five characters · office |
| 3 | all five characters · office |
| 4 | all five characters · office |
| 5 | all five characters · office · krl-interior |

### Desks and wardrobe

- NEXA desk order: **Aki · Deerock · Kai · Rin**. Kai is directly beside Deerock; Rin is one desk farther along. Mika appears in the aisle.
- All day: `D-W01` · `A-W01` · `K-W01` · `R-W01` · `M-W01`. Deerock always wears glasses; Kai’s headphones are around his neck.
- Apply the Deerock/Kai separation clause in 2.2, the Aki/Mika clause in 3.3, and both clauses in 2.3, 4.3 and 5.1. On page 1 Aki and Mika are in separate panels, but keep bun and knitted sweater against loose hair and collared blouse unmistakable.
- Deerock’s desk: landscape wallpaper left monitor, code right monitor, laptop, mechanical keyboard, black tumbler, headphones on desk, sticky notes, jacket on chair. Rin’s desk: pink keyboard/mat, small figurines, pink jacket.

### Button and light continuity

| Panels | Label | Shape |
| --- | --- | --- |
| 1.1 | `Coba lagi` | one line |
| 1.2–4.3 | `Muat ulang data terbaru` | wraps in **1.3 only**; one line by 4.1 |
| after 5.1 | `Coba lagi` | one line, unseen |

| Panels | Time | Light |
| --- | --- | --- |
| 1.1–1.2 | 09:11–09:15 | neutral office daylight |
| 1.3–3.3 | 10:05–11:05 | bright mid-morning daylight |
| 4.1–4.2 | 15:45–16:15 | warm afternoon daylight |
| 4.3 | 16:30 | warm late-afternoon sunlight |
| 5.1 | 17:10 | golden office light |
| 5.2 | 17:50 | orange sunset through KRL windows |

---

## Page 1 — Satu perubahan kecil

**Output:** `ep01_page01_v002.png` · **Bubbles:** 3 · **Layout:** Row 1, about 45% of the height: 1.1 full width. Row 2: 1.2 left, about two fifths of the width; 1.3 right, about three fifths.

**Style reference:** attach approved `results/ep01_page01_v001.png` — rendering and faces only; its panels, scenes and text are not used.

### 1.1 — The request

- **Cast/location:** Deerock and Mika at Deerock’s desk, 09:11.
- **Camera/action:** eye-level medium two-shot from the aisle, full width — the carousel cover. Deerock sits turned in his chair toward Mika; Mika stands beside the desk holding her tablet out between them, screen toward the reader and large enough to read. Mika has a direct, slightly apologetic half-smile; Deerock is calm and attentive. This is the next beat after the trailer’s closing exchange, so it must not reuse the trailer’s over-the-shoulder framing.
- **Text:** button `Coba lagi`; client note `Ganti jadi: Muat ulang data terbaru`; Mika: `Client pengin lebih jelas. Cuma teks tombolnya, kok.` Nothing else is readable. No em dash in the line — generators render it unreliably.

### 1.2 — One line

- **Cast/location:** Deerock at his desk, 09:15.
- **Camera/action:** low close shot across keyboard; he presses Enter, with a faint confident smile and cool monitor glow on glasses.
- **Text:** Deerock thought: `Satu baris.` SFX: `TAK`. The highlighted code line is schematic and unreadable.

### 1.3 — Two lines

- **Cast/location:** Aki and Deerock at his desk, 10:05.
- **Camera/action:** eye-level medium, in the narrower Row 2 slot. Aki’s phone dominates the foreground; she has an apologetic grin while Deerock turns in his chair, neutral.
- **Text:** a visibly too-tall button wraps exactly `Muat ulang` / `data terbaru`; Aki: `Deerock… di HP jadi dua baris.`

---

## Page 2 — Ternyata

**Output:** `ep01_page02_v001.png` · **Bubbles:** 4 · **Layout:** three full-width rows, with Row 3 largest.

### 2.1 — Red

- **Cast/location:** Rin at her desk, 10:07.
- **Camera/action:** side-on medium at desk height. Rin sits still in three-quarter profile; her monitor fills the left third with unreadable red test rows and red status bars.
- **Text:** Rin: `Regression empty state-ku merah.` Rin: `Selector-nya masih ngandelin teks tombol.`

### 2.2 — “Kecil, katanya.”

- **Cast/location:** Deerock and Kai at Deerock’s desk, 10:08.
- **Camera/action:** eye-level medium two-shot. Deerock watches his monitor with a flat expression while Kai rolls in from his neighbouring desk, offers a takeaway coffee and grins.
- **Text:** Kai: `Kecil, katanya.`

### 2.3 — Root cause

- **Cast/location:** all five around Deerock’s desk, 10:12.
- **Camera/action:** eye-level conversational wide from the aisle. Aki holds her phone, Rin her laptop, Kai leans on the partition, Deerock listens, Mika holds her phone ready. This is a focused mini-huddle, not a crisis meeting.
- **Text:** Mika: `Kita benerin akar masalahnya, ya.`

---

## Page 3 — Dibenerin bareng

**Output:** `ep01_page03_v001.png` · **Bubbles:** 5 · **Layout:** Panels 3.1 and 3.2 are half-width Row 1, in parallel; Panel 3.3 is full-width Row 2.

### 3.1 — Clean

- **Cast/location:** Aki and Deerock at Deerock’s desk, 10:30.
- **Camera/action:** medium two-shot from slightly behind and between them, revealing Aki’s iPad and Deerock’s monitor. Aki sketches a mobile-friendly button with Apple Pencil; Deerock implements it.
- **Text:** schematic button and code only. Aki: `Bisa dibuat lebih clean?` Deerock: `Aku coba dulu.`

### 3.2 — test-id

- **Cast/location:** Rin and Kai at Rin’s desk, 10:45.
- **Camera/action:** medium two-shot. Rin types at her laptop; Kai leans on the partition, pauses with a raised finger, then laughs at his mistaken assumption. Wrap his long bubble in three short lines.
- **Text:** schematic code only. Rin: `Pakai test-id aja. Biar nggak kejadian lagi.` Kai: `API-nya udah ready. Eh, ini nggak ada urusan API, kan?`

### 3.3 — Time to fix it right

- **Cast/location:** Deerock, Aki and Mika at Deerock’s desk, 11:05.
- **Camera/action:** medium three-shot from the aisle. Deerock and Aki continue working while Mika reads a fresh client reply. Her smile is relieved but restrained.
- **Text:** Mika: `Client oke kalau kita rapihin sekalian.` Phone content is unreadable.

---

## Page 4 — Lega dulu

**Output:** `ep01_page04_v001.png` · **Bubbles:** 3 · **Layout:** Panels 4.1 and 4.2 are half-width Row 1; Panel 4.3 is full-width Row 2.

### 4.1 — It fits

- **Cast/location:** Aki and Deerock at Deerock’s desk, 15:45.
- **Camera/action:** eye-level medium two-shot. Aki holds her phone between them; the label now fits cleanly on one line. Deerock checks the same state on his monitor. Aki is relieved; Deerock gives the phone a small, dry sideways look.
- **Text:** button `Muat ulang data terbaru`, exactly one line; Deerock thought: `Satu baris, katanya.`

### 4.2 — Green

- **Cast/location:** Rin and Kai at Rin’s desk, 16:15.
- **Camera/action:** side-on medium. Green test rows occupy the left third; Kai leans over the partition with a small thumbs-up. Rin remains calm and satisfied.
- **Text:** green ticks only; Rin: `Regression empty state aman.`

### 4.3 — Green, together

- **Cast/location:** all five around Deerock’s desk, 16:30.
- **Camera/action:** slightly elevated wide, window wall behind. Deerock sits centre with a small smile; Aki holds phone; Kai leans back; Rin turns green checks toward them; Mika is in the aisle with a thumbs-up and phone.
- **Text:** Mika: `Aku kabarin client, ya.`

---

## Page 5 — Satu perubahan kecil lagi

**Output:** `ep01_page05_v001.png` · **Bubbles:** 3 · **Layout:** two equal full-width rows.

### 5.1 — Balikin

- **Cast/location:** all five around Deerock’s desk, 17:10.
- **Camera/action:** eye-level wide. Mika stands left with phone; Aki is mid-stretch, Kai midway through lifting his backpack, Rin lifting hers. Deerock is still at keyboard on right. Everyone but Deerock pauses in a small human beat.
- **Text:** Mika: `Client minta balik ke "Coba lagi"…` Deerock: `Sekarang beneran satu baris.`

### 5.2 — Besok aja

- **Cast/location:** Deerock and anonymous commuters in the KRL evening passenger setting, 17:50.
- **Camera/action:** medium aisle shot. Deerock holds a yellow strap and phone, with fuller crowd and orange sunset window light. He is tired but content.
- **Text:** notification sender `Mika`, message `Oh iya, besok…`; Deerock thought `Besok aja.`; SFX `TING`.

---

## Pre-generation checklist

- [ ] Exact 4:5 layout, panel count and listed text only.
- [ ] Page 1 is `ep01_page01_v002.png`; approved `v001` remains untouched.
- [ ] Button label and wrapping follow the table.
- [ ] Canonical quotes are exact in 3.1 and 3.2.
- [ ] Deerock’s three “satu baris” lines are exact in 1.2, 4.1 and 5.1 — they are one running joke.
- [ ] Published trailer is neither replayed nor contradicted.
- [ ] Character separation, lighting continuity and hard exclusions pass the series checklist.
