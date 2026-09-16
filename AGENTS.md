# Agent Instructions — DEEROCK

You are working on a serialized slice-of-life comic. **The repository is the source of truth,
not your memory of the conversation.** If a fact is not written down here, it is not canon yet.

---

## Read before any story or image task

1. `bible/series-bible.md` — tone, world, cast, hard exclusions
2. `bible/character-bible.md` — locked traits and the separation matrix
3. `bible/visual-style.md` — rendering, colour, camera, on-panel text rules
4. `bible/consistency-guide.md` — the operational rules and the pre-flight checklist
5. `references/registry.md` — every ID → file path
6. the relevant episode's `README.md`, `storyboard.md` and `panel-specs.md`

Then, and only then, inspect the reference images for the characters, locations and props in
the scene. **Never inspect or attach anything from `references/off-canon/`** as a plain
reference — read that folder's README first.

---

## Canon rules

- Deerock is frontend, Aki is UI/UX, Kai is backend, Rin is QA, Mika is PM.
- Modern, realistic software workplace in Greater Jakarta. Deerock lives in a small landed
  house in Cisauk and commutes by KRL into the Jakarta business district.
- **No katana, ninja, samurai, supernatural, tactical harness or cyberpunk elements.** Ever.
- Humour comes from everyday work and life, never from caricaturing a profession.
- FE, BE, UI/UX, QA and PM are all competent. Conflict comes from communication, dependencies,
  ambiguity, changing requirements or ordinary mistakes — never from someone being bad at their job.
- Dialogue is natural Indonesian with the English technical terms a real team would use.
- Deerock and Kai must never look alike. Aki and Mika must never look alike.

---

## Visual continuity

Never redesign an established character for a new panel. Preserve face shape, hair silhouette
and colour, age, body proportions, wardrobe codes, accessories and palette.

The approved reference sheet in `characters/` or `locations/` is the visual source of truth. If
the prose in a bible file disagrees with the sheet, **the sheet wins** — and then fix the prose,
following the canon change protocol in `bible/consistency-guide.md` section 9.

When a new location is introduced, create and approve an environment reference sheet before
using it a second time.

---

## Image workflow

Build every prompt from `prompts/image-generation.md`:

```
reference images + full character blocks + separation clause + location block
+ wardrobe codes + scene + camera/framing + continuity notes + the NEGATIVE block
```

- Paste the character blocks from `prompts/character-blocks.md` **verbatim**. Do not paraphrase
  or shorten them — that is where identity drift starts.
- Paste the `NEGATIVE` block from `prompts/negative-prompts.md` into every prompt.
- **One panel per generation.** Never generate a whole page in one shot when consistency
  matters; the evidence for why is in `episodes/00-trailer/drift-log.md`.
- Review every output against the pre-flight checklist in `bible/consistency-guide.md`
  section 10 before accepting it. If it drifted, regenerate from the reference — do not accept
  the drift and do not redesign the character to match it.
- For edits, state what stays fixed before what changes, and preserve composition and character
  identity unless the task explicitly changes them.

### Text in panels
Only four kinds of text may appear: specified dialogue, real signage/UI the set contains,
specified SFX, and the episode title block. **Never transcribe the decorative slogans printed
on the reference sheets** — the banned strings are listed in `prompts/negative-prompts.md`.

---

## Output naming

```
Panel, single-page episode   ep00_panel03_v001.png
Panel, multi-page episode    ep01_p02_panel03_v001.png
Assembled page               ep01_page02_v001.png
```

Generated output goes in `episodes/<episode>/results/`. Versions only go up. **Never overwrite
an approved image** — bump the version. Record approvals in `assets/approved/manifest.md`; an
image not listed there is a draft, whatever folder it sits in.

---

## Do not

- Invent or alter a canonical trait without updating the owning bible file first.
- Invent a file path. Resolve paths through `references/registry.md`.
- Add captions, slogans, taglines, character name tags or role labels to a panel.
- Add, remove, merge or reorder panels relative to the storyboard.
- Change dialogue that a storyboard specifies.
- Approve your own output without running the pre-flight checklist.

---

## Verify before you finish

```bash
node tools/check-refs.mjs
```

Fails if any file path cited in the markdown does not exist. Run it after any rename or move.
