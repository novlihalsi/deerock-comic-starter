# CLAUDE.md

This is a comic production repo, not a software project. There is nothing to build or test —
the "code" is the canon, and the output is generated artwork.

**Follow [`AGENTS.md`](AGENTS.md).** It is the full instruction set for any story or image task
and applies to every agent working here.

Quick orientation:

| I need to… | Read |
| --- | --- |
| know what the series is | `bible/series-bible.md` |
| draw a character correctly | `bible/character-bible.md` + `prompts/character-blocks.md` |
| find a reference image path | `references/registry.md` |
| write an image prompt | `prompts/image-generation.md` + `prompts/negative-prompts.md` |
| know the rules and the checklist | `bible/consistency-guide.md` |
| see what has actually been approved | `assets/approved/manifest.md` |
| understand why the trailer was rejected | `episodes/00-trailer/drift-log.md` |

Verify link integrity after any rename:

```bash
node tools/check-refs.mjs
```
