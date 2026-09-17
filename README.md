# DEEROCK — A Frontend Developer's Ordinary Days

A slice-of-life workplace comic about Deerock, a frontend developer, and a small software team,
produced with AI image generation. This repo is the canon: the bibles, the reference sheets and
the rules that keep every generated panel looking like the same series.

## Canon in one screen

- **Genre:** slice of life, workplace comedy, light drama, wholesome.
- **Setting:** Greater Jakarta. Deerock lives in a small landed house in **Cisauk** and commutes
  by **KRL** to **NEXA Workspace** in the Jakarta business district.
- **Cast:** Deerock (FE, 25) · Aki (UI/UX, 24) · Kai (BE, 28) · Rin (QA, 24) · Mika (PM, 26).
- **Hard exclusions:** no katana, ninja, supernatural, tactical costume or action-fantasy.
- **Episode 01** starts at home, continues through the KRL commute, then the office.
- The trailer is the tonal reference. Its artwork is **not** approved — see
  `episodes/00-trailer/drift-log.md`.

## Repo map

```
CLAUDE.md / AGENTS.md    agent instructions — read AGENTS.md first
bible/                   what the world is
  series-bible.md          tone, world, cast, hard exclusions
  character-bible.md       locked traits + the character separation matrix
  story-world.md           named places, geography, recurring objects
  visual-style.md          rendering, colour, camera, on-panel text rules
  consistency-guide.md     the operational rules + the pre-flight checklist
references/
  registry.md              ★ every ID → file path. The only place a path is defined.
  off-canon/               quarantined images — read its README before touching
characters/              approved character reference sheets
locations/               approved location reference sheets
props/                   approved prop references
prompts/
  image-generation.md      the panel prompt template
  character-blocks.md      copy-paste locked descriptors per character/location
  negative-prompts.md      the NEGATIVE block + banned on-panel strings
episodes/
  00-trailer/              storyboard, panel specs, drift log, results
  01-just-one-small-change/ ready to generate — prompts in generation-prompts/
assets/approved/
  manifest.md              ★ what is actually approved. Everything else is a draft.
tools/check-refs.mjs     validates that every cited path exists
```

## Production rules

1. The approved **reference sheet is the visual source of truth.** If the prose in a bible
   disagrees with the sheet, the sheet wins — then fix the prose.
2. Do not invent or alter a canonical trait without updating the owning bible file first.
3. **Pick a generation route and write it down** — one-shot page, or panel by panel and composite.
   See `bible/consistency-guide.md` section 7.
4. Never overwrite an approved image. Bump the version.
5. Only specified dialogue, real signage/UI, specified SFX and the title block may appear as
   text in a panel. Never transcribe the slogans printed on the reference sheets.

## Workflow

1. Read `AGENTS.md`.
2. Read the relevant bible files and `references/registry.md`.
3. Read the episode's `README.md`, `storyboard.md` and `panel-specs.md`.
4. Build the prompt from `prompts/image-generation.md` — full character blocks, separation
   clause, location block, wardrobe codes, and the `NEGATIVE` block.
5. Generate one panel.
6. Review against the pre-flight checklist in `bible/consistency-guide.md` section 10.
7. Drifted? Regenerate from the reference. Do not accept the drift.
8. Approve, version, and record it in `assets/approved/manifest.md`.
9. Only when every panel is approved: typeset dialogue and assemble the page.

## Checks

```bash
node tools/check-refs.mjs
```

Fails if any file path cited in the markdown does not exist. Run it after any rename or move.
