# Trailer — Drift Log

What went wrong in `results/ep00_page01_v001.png`, so it does not go wrong again.

That image was generated as **one whole page in a single shot**, against the ten-panel spec in
`panel-specs.md`. It is a good-looking page and it is **not approved**: it breaks nine rules the
specs state explicitly. Every item below is a real difference between the spec and the output.

---

## 1. Decorative slogans were rendered into the panels — the biggest one

The spec forbids captions and slogans. The output carries at least six, copied straight off the
character reference sheets:

- "Same Routine. Different Day." (panel 1)
- "A Small Change Today." (panel 3)
- "Different People. Same. Struggles. Better Days." (panel 4)
- "A Normal Developer." / "In an Abnormal World of Deadlines." (panel 8)
- "Ideas Products People Impact." (panel 7)

**Cause:** the reference sheets are covered in slogan typography, and attaching a sheet invites
the model to copy its text. **Fix:** `prompts/negative-prompts.md` now lists every banned string
explicitly; paste that block into every prompt.

## 2. Character name tags were invented

The team panel labels each character with a floating "Deerock / Frontend Developer" style tag.
No spec asks for this. It reads as a reference sheet, not a comic page.

## 3. Deerock's facial-hair lock was broken

The spec locks a clean chin with only a tiny sparse patch beneath the lower lip. The output
shows a visible moustache shadow and jaw stubble in panels 1 and 8.

## 4. Dialogue was dropped

Panels 7 and 8 were specified with five spoken lines each (Aki's "Pagi, Rock.", Kai's "Pagi.
API auth udah siap.", and so on). The output replaced all of it with name tags and screen
labels. Only Mika's chat message survived, and as a chat bubble rather than the specified
face-to-face line in panel 9.

## 5. The panel sequence does not match the storyboard

The specified coffee-pour panel is missing; an unspecified KRL-app-on-phone panel and an
unspecified four-screen strip (Design / Frontend / API / QA) were added. Panels cannot be
removed, merged, added or reordered.

## 6. The clock was changed

Spec: 06:45 in panel 1, and a 06:45 → 09:10 time flow. Output: 06:30 with a date stamp
"Sen, 12 Sep" that no spec mentions.

## 7. The title block does not match

Spec: three lines, `EPISODE 01` / `JUST ONE SMALL CHANGE` / `COMING SOON`, in a clean
full-width bottom section, with no subtitle. Output: a bottom-right box that also carries the
series title and the subtitle "A FRONTEND DEVELOPER'S ORDINARY DAYS".

## 8. Bible and reference sheet disagreed, so the output could not have been "correct"

The output draws Kai with messy spiky hair and Rin with long hair. Both match their **reference
sheets** and both contradicted what `character-bible.md` said at the time ("neat side part",
"shoulder length"). This was a repo bug, not a generation bug — the bible has since been
corrected to match the sheets.

## 9. A quarantined reference was sitting in `characters/`

`deerock-additional-face-ref-1.png` — a magazine cover with a katana and a tactical harness —
was in the folder that every agent instruction says to inspect before drawing Deerock. It is now
in `references/off-canon/` with an explicit usage note.

---

## What to do next

Regenerate the trailer **panel by panel** per `bible/consistency-guide.md` section 7:
ten prompts, ten reviews, approve each one, then typeset and assemble. Reserved names are in
`panel-specs.md`. Keep `ep00_page01_v001.png` as the tone and layout reference — it is a good
guide to rhythm and framing — but do not treat any of its text or its panel order as canon.
