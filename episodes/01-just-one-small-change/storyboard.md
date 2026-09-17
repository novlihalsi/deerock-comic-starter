# Episode 01 — Just One Small Change

**Status: story locked, panel specs not written.** Beats, locations and dialogue are final.
Camera, composition, poses and per-panel continuity still need expanding into `panel-specs.md`
before generation — see [`README.md`](README.md).

## Format
5 pages at 4:5 portrait (1080 × 1350). 14 panels: 3 · 3 · 3 · 3 · 2.
Each page is generated in one shot. Every page stays within the series density limits: at most
2 bubbles per panel and 5 per page (`bible/series-bible.md`, Episode format).

## Wardrobe
`D-W01` `A-W01` `K-W01` `R-W01` `M-W01` throughout. One workday, no outfit changes.

## Premise
The trailer's workday, continued. Deerock expects a quiet day polishing the empty state. At 09:10
Mika brings "one small change": the client wants the empty state's button to read
`Muat ulang data terbaru` instead of `Coba lagi`. It is one line of code — and by mid-morning it
has broken the mobile layout and turned Rin's regression suite red. The team fixes it properly,
together. Then the client asks for the old label back, and because they fixed it properly, the
revert really is one line.

## Why this version
The first outline retold the trailer beat for beat and stopped where the trailer stopped. A reader
who had seen the teaser got nothing new until the last panel, and the change the title promises
never actually happened. This version spends one page on the morning, uses the trailer's closing
exchange as its hinge, and gives the small change an escalation, a team fix and a payoff.

Aki, Kai and Deerock each say their reference sheet's canonical quote as an ordinary line of
dialogue, so the team is introduced through what they do about one button rather than through
exposition.

---

## Page 1 — Hari yang tenang
Tone: quiet and ordinary. Home → KRL → office in three panels, as canon requires.

**1.1 · `LOC-HOME` kitchen & dining · 07:02 · Deerock**
Deerock pours coffee. His phone, propped against the mug, shows a to-do list with one item.
- Phone UI: `Rapihin empty state`
- Thought — Deerock: *Hari ini harusnya tenang.*

**1.2 · `LOC-KRL` · 07:48 · Deerock, anonymous commuters**
Standing by a pole, reading the team chat. The same moment as the trailer's Panel 05.
- Phone UI: `Mika — Stand-up 09.30. Jangan lupa.`
- Thought — Deerock: *Belum sampai kantor.*
- SFX: `TING`

**1.3 · `LOC-OFFICE` open workspace, Deerock's desk · 09:05 · Deerock, Aki**
Deerock sits down. Aki leans over the partition, holding up her iPad with the empty-state design.
- Aki: Empty state-nya pakai yang ini, ya.
- Deerock: Siap.

## Page 2 — Satu perubahan kecil
Tone: familiar dread, played dry.

**2.1 · Deerock's desk · 09:10 · Deerock, Mika**
Over Mika's shoulder. The trailer's closing exchange, word for word.
- Mika: Oh iya, ada satu perubahan kecil lagi…
- Deerock: Yang bagian mana?

**2.2 · Deerock's desk · 09:11 · Mika's hands and tablet, Deerock at the edge of frame**
Close on Mika's tablet: the empty-state screen with its button, and the client's note beside it.
- Tablet UI: button `Coba lagi` · client note `Ganti jadi: Muat ulang data terbaru`
- Mika: Cuma teks tombolnya, kok.

**2.3 · Deerock's desk · 09:15 · Deerock**
Close on his hands and keyboard; one changed line highlighted on screen. A small, confident look.
- Thought — Deerock: *Satu baris.*
- SFX: `TAK`

## Page 3 — Ternyata
Tone: escalation by recognition. Nobody has done anything wrong.

**3.1 · Deerock's desk · 10:05 · Aki, Deerock**
Aki holds out her phone. On its screen the new label has wrapped onto two lines and pushed the
button out of shape.
- Aki: Deerock… di HP jadi dua baris.

**3.2 · `LOC-OFFICE` Rin's desk · 10:07 · Rin**
Rin, deadpan, in front of a monitor filled with red failing test rows.
- Rin: Regression-ku merah semua.
- Rin: Selector-nya pakai teks tombol.

**3.3 · Deerock's desk · 10:08 · Deerock, Kai**
Deerock gives the monitor a small blank stare. Kai rolls his chair in beside him, grinning,
headphones around his neck, holding out a coffee.
- Kai: Kecil, katanya.

## Page 4 — Dibenerin bareng
Tone: warm and competent. The team at its best.

**4.1 · Deerock's desk · 14:00 · Aki, Deerock**
Aki sketches a button that wraps cleanly on her iPad, beside Deerock's code on screen.
- Aki: Bisa dibuat lebih clean?
- Deerock: Aku coba dulu.

**4.2 · Rin's desk · 14:30 · Rin, Kai**
Rin rewrites her selectors to use test IDs. Kai leans on the partition, then catches himself.
- Rin: Pakai test-id aja. Biar nggak kejadian lagi.
- Kai: API-nya udah ready. …Eh, nggak ada API-nya, ya.

**4.3 · Deerock's desk · 16:30 · Deerock, Aki, Kai, Rin, Mika**
Wider shot in late-afternoon light. Green checks on Rin's screen; the button fits on one line on
Aki's phone. Mika gives a thumbs up from the aisle.
- Mika: Aku kabarin client, ya.

## Page 5 — Satu perubahan kecil lagi
Tone: the twist, then a quiet ending. The swipe onto this page sets up the joke.

**5.1 · Deerock's desk · 17:10 · all five**
Mika returns with her phone and an apologetic half-smile. The team, mid-stretch and packing up,
freezes — except Deerock, who barely looks up.
- Mika: Client minta balikin ke "Coba lagi"…
- Deerock: Sekarang beneran satu baris.

**5.2 · `LOC-KRL` evening · 18:40 · Deerock, anonymous commuters**
Evening carriage, orange light through the windows, a fuller crowd — see the sheet's evening
passenger example. Deerock holds a strap with a small, content smile. His phone lights up.
- Phone UI: `Mika — Oh iya, besok…`
- Thought — Deerock: *Besok aja.*
- SFX: `TING`

---

## Continuity
- Page 1 and panel 2.1 overlap the trailer's morning on purpose. Every line the two share —
  `Belum sampai kantor.`, `Empty state-nya pakai yang ini, ya.` and the whole 2.1 exchange — must
  match the trailer exactly.
- Separation clauses apply in 3.3 (Deerock and Kai), and in 4.3 and 5.1 (all five in frame).
- Desk positions at NEXA are fixed; everyone sits at the same desk as in the trailer.
- The button label is `Coba lagi` in 2.2 and after 5.1, and `Muat ulang data terbaru` from 2.3
  to 4.3. It wraps onto two lines only in 3.1.
- No new locations. The evening carriage uses the existing `LOC-KRL` sheet.

## Still to write
`panel-specs.md`: camera, composition, pose, props and per-panel continuity for all 14 panels, in
the format of `episodes/00-trailer/panel-specs.md`. Then one generation prompt per page.
