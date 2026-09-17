# Episode 01 — Just One Small Change

**Status: story revised after trailer publication; panel specs and page prompts are synchronised.**
The published trailer is fixed canon. This episode begins immediately after its final story panel;
it does not replay the commute or the 09:05 office handoff.

## Format

5 pages at 4:5 portrait (1080 × 1350). 14 panels: 3 · 3 · 3 · 3 · 2.
Each page is generated in one shot. Every page stays within the series density limits: at most
2 bubbles per panel and 5 per page (`bible/series-bible.md`, Episode format).

## Wardrobe

`D-W01` `A-W01` `K-W01` `R-W01` `M-W01` throughout. One workday, no outfit changes.

## Premise

The trailer ends as Mika tells Deerock that the client has one small change. Episode 1 begins with
the next beat: the empty-state button must change from `Coba lagi` to `Muat ulang data terbaru`.
It looks like one line of code, but the longer label breaks the mobile layout and exposes a brittle
test selector. Rather than patching only today’s symptom, the team fixes the layout and test
contract together. At five o’clock, the client asks for the old label back—and this time the revert
really is one line.

## Why this version

The trailer is now published, so its 09:10 closing exchange is not repeated. The episode gives a
reader who saw the trailer new information in its first panel, while the client note still gives a
new reader enough context. The repair begins shortly after the failure is found; the afternoon is
reserved for implementation and regression, not an unexplained gap.

Kai and Deerock each say their reference sheet’s canonical quote as ordinary dialogue. Mika
sets an explicit “fix the root cause” expectation with the client, and Rin names the test failure
precisely, so nobody is framed as the problem.

Deerock’s “satu baris” runs through the whole episode: the assumption at 09:15 (*Gampang. Cuma
ganti satu baris.*), Aki’s “jadi dua baris” fifty minutes later, the dry echo at 15:45
(*Niatnya satu baris, jadinya seharian…*), and the payoff at 17:10 (“Nah. Kalau ini beneran satu
baris.”).

Every line answers or follows from the one before it, so a reader needs no outside context to
follow the change. No bubble repeats what the art already shows: the new label is written on
Mika’s tablet in 1.1, so her line only has to point at it. The episode runs to about 130 words of
dialogue across five pages.

---

## Page 1 — Satu perubahan kecil
Tone: the exact continuation of the trailer, then the first crack.

**1.1 · `LOC-OFFICE`, Deerock’s desk · 09:11 · Deerock, Mika**
Medium two-shot from the aisle, full width — the carousel cover. Mika stands beside the desk
holding out her tablet; Deerock, seated, turns to look at it. The tablet shows the existing
empty-state screen, its button and a client note, large enough to read. A new reader meets both
characters, the place and the problem in one image.
- Tablet UI: button `Coba lagi` · client note `Ganti jadi: Muat ulang data terbaru`
- Mika: Client minta teks tombol ini diganti. Katanya biar lebih jelas.

**1.2 · Deerock’s desk · 09:15 · Deerock**
Close on his hands and keyboard; one changed line is highlighted on screen. A small, confident look.
- Thought — Deerock: *Gampang. Cuma ganti satu baris.*
- SFX: `TAK`

**1.3 · Deerock’s desk · 10:05 · Aki, Deerock**
Aki holds out her phone. On its screen the new label wraps onto two lines and pushes the button out
of shape.
- Aki: Deerock… teks barunya kepanjangan. Di HP tombolnya jadi dua baris.

## Page 2 — Ternyata
Tone: escalation by recognition, then a concrete decision.

**2.1 · `LOC-OFFICE`, Rin’s desk · 10:07 · Rin**
Rin, deadpan, in front of a monitor filled with red failing test rows.
- Rin: Nggak cuma di HP. Test empty state-ku merah semua.
- Rin: Soalnya test-nya nyari tombol dari tulisannya.

**2.2 · Deerock’s desk · 10:08 · Deerock, Kai**
Deerock gives the monitor a small blank stare. Kai rolls his chair in beside him, grinning,
headphones around his neck, holding out a coffee.
- Kai: Wah, tumbang berjamaah. Katanya cuma ganti teks?

**2.3 · `LOC-OFFICE` open workspace · 10:12 · all five**
The team gathers briefly at Deerock’s desk. Mika has her phone ready to update the client; everyone
is attentive rather than alarmed.
- Mika: Jangan cuma di-patch. Kita benerin akar masalahnya.

## Page 3 — Dibenerin bareng
Tone: warm, efficient collaboration; the fix starts before lunch.

**3.1 · Deerock’s desk · 10:30 · Aki, Deerock**
Aki shows Deerock a button she has sketched to stay clean at mobile width. Deerock implements it
beside her.
- Aki: Deerock, tombolnya udah aku redesign. Coba di-implement, ya.
- Deerock: Siap. Aku coba dulu.

**3.2 · Rin’s desk · 10:45 · Rin, Kai**
Rin replaces the text-based selector with a test ID. Kai leans in, catches his assumption, and
laughs at himself.
- Rin: Test-nya aku ganti pakai ID, biar nggak rusak tiap teks ganti.
- Kai: API-nya udah ready. Eh, nggak ada urusan API, ya?

**3.3 · Deerock’s desk · 11:05 · Deerock, Aki, Mika**
Mika reads a reply on her phone while Aki and Deerock keep working. The client has agreed to let
them make the layout robust instead of rushing a cosmetic patch.
- Mika: Sip, client oke kalau kita rapihin sekalian.

## Page 4 — Lega dulu
Tone: quiet progress, a dry echo, then a shared small win.

**4.1 · Deerock’s desk · 15:45 · Aki, Deerock**
Aki’s phone shows the long label fitting cleanly on one line. Deerock checks the same state on his
monitor. Aki is relieved; Deerock’s look is dry — most of the day has gone into a one-line change.
- Thought — Deerock: *Niatnya satu baris, jadinya seharian…*

**4.2 · Rin’s desk · 16:15 · Rin, Kai**
Rin’s test runner is green; Kai looks over the partition with a small thumbs-up.
- Rin: Semua test udah hijau lagi. Aman.

**4.3 · Deerock’s desk · 16:30 · Deerock, Aki, Kai, Rin, Mika**
Wider shot in late-afternoon light. Green checks are visible on Rin’s screen and the button fits on
Aki’s phone. Mika gives a thumbs up from the aisle.
- Mika: Kerja bagus, guys. Aku kabarin client, ya.

## Page 5 — Satu perubahan kecil lagi
Tone: the twist, then a quiet ending. The swipe onto this page sets up the joke.

**5.1 · Deerock’s desk · 17:10 · all five**
Mika returns with her phone and an apologetic half-smile. The team, mid-stretch and packing up,
freezes—except Deerock, who barely looks up.
- Mika: Eh… client bilang teks barunya kepanjangan. Minta balik ke "Coba lagi".
- Deerock: Nah. Kalau ini beneran satu baris.

**5.2 · `LOC-KRL` evening · 17:50 · Deerock, anonymous commuters**
Evening carriage, orange light through the windows, a fuller crowd. Deerock holds a strap with a
small, content smile. His phone lights up.
- Phone UI: `Mika — Oh iya, besok…`
- Thought — Deerock: *Besok aja mikirnya.*
- SFX: `TING`

---

## Continuity

- The episode starts at 09:11, directly after the published trailer’s 09:10 closing exchange.
  It contains no re-created trailer panel or alternate version of an already-published moment.
- The button label is `Coba lagi` in 1.1 and after 5.1, and `Muat ulang data terbaru` from 1.2 to
  4.3. It wraps onto two lines only in 1.3.
- The team agrees on the root-cause fix at 10:12, starts it at 10:30, and verifies it through the
  afternoon. Mika’s 16:30 update and the 17:10 client response remain a plausible final approval
  loop, not a second unexamined change.
- Separation clauses apply in 2.2 (Deerock and Kai), 3.3 (Aki and Mika), and 2.3, 4.3 and 5.1
  (both pairs).
- Desk positions at NEXA are fixed; everyone sits at the same desk as in the trailer.
- No new locations. The evening carriage uses the existing `LOC-KRL` sheet.

## Next

Generate page 1 as `ep01_page01_v002.png`; `v001` remains preserved as the approved artwork for
the superseded pre-publication story draft. See [`generation-prompts/README.md`](generation-prompts/README.md).
