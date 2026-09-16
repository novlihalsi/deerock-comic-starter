# Negative Prompt Block

Paste the whole `NEGATIVE` block into every image prompt. It is not optional and it is not
per-scene — every one of these has already gone wrong at least once in this project.

---

## NEGATIVE (copy verbatim)

```
NEGATIVE — style and props:
no katana, no sword, no ninja, no samurai, no fantasy armour, no tactical harness,
no chest rig, no utility straps or buckle pouches, no supernatural effects, no action aura,
no glowing weapon, no cyberpunk transformation, no magazine-cover layout, no lens flare,
no dramatic hero framing, no photorealism, no chibi, no 3D render.

NEGATIVE — identity:
Deerock is never without glasses. Deerock's hair is never plain black — it is purple-black.
Deerock has no beard, no moustache, no stubble and no jaw shadow; only a very thin, tiny,
sparse patch directly beneath the lower lip, stopping well before the chin.
Kai never wears glasses and never has purple hair.
Aki and Mika never share the same hairstyle or the same colour top in one panel.

NEGATIVE — text:
no captions, no slogans, no taglines, no motivational copy, no character name tags,
no role labels under characters, no watermark, no branding, no invented screen text,
no Japanese or katakana decoration on clothing, no magazine headline typography.
Do not reproduce any text printed on the reference sheets.
```

---

## Banned strings

These appear on the reference sheets as decoration. A generator that is shown a sheet will
happily copy them into a panel. They have already leaked into
`episodes/00-trailer/results/ep00_page01_v001.png`. None of them may ever appear in a comic panel.

```
Same Routine. Different Challenges. Better Days.
Same Routine. Different Day.
Code. Design. Meet. Debug. Repeat.
Different People. Same Struggles. Better Days.
Same Struggles. Different Perspective.
Good People. Better Days.
Good Ideas. Better Days.
Good Ideas. Good People.
Good Software. Happier People.
Good Plans. Brighter Tomorrows.
Good Food. Good Talk. Good Code. Better Days.
Good Design. Good People. Good Ideas.
Find. Report. Improve. Repeat.
Organize. Communicate. Solve Problems. Bring People Together.
A normal developer, in an abnormal world of deadlines.
A Frontend Developer's Ordinary Days   (title block only, never as a caption)
A Small Change Today.
A Normal Developer.
In an Abnormal World of Deadlines.
Ideas Products People Impact.
Quality isn't a phase, it's a habit.   (Rin's sheet quote — usable as dialogue, never as caption)
VIRELUX / VISION. IDENTITY. PURPOSE. / A CLEARER MIND, A BRIGHTER TOMORROW.
```

## Text that *is* allowed

Real signage and UI that the location genuinely contains, because it is part of the set:

- `NEXA`, `NEXA WORKSPACE`, `GOOD WORK GOOD DAY`, `IDEAS PEOPLE PRODUCTS`, room label `M1`
  — only where the office sheet actually puts them, i.e. on the reception wall, the workspace
  wall and the meeting-room door. Not floating in a panel.
- `SL`, `Sentra Lintas`, `Ke Platform / To Platform`, `Keluar / Exit`, platform numbers
  `1` and `2`.
- `KAI Commuter`, `Tempat Duduk Prioritas / Priority Seat`, `Tujuan Akhir`, route-map station names.
- `LUMA`, `LUMA CAFÉ`, the café menu board.
- Character tumbler engravings (`Good Code Good Day` on Deerock's tumbler) where the prop is
  genuinely in shot and legible — these are props, not captions.
- Phone and monitor UI that the storyboard specifies, kept minimal and functional.
- The episode title block, exactly as the storyboard writes it.
