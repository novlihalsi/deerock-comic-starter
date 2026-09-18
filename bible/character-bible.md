# Character Bible

**Precedence:** the approved reference sheet in `characters/` is the visual source of truth.
This document describes what is *in* those sheets so a prompt can be written without opening
them. If prose here ever disagrees with the sheet, the sheet wins and this file is the thing
that gets corrected — see `bible/consistency-guide.md` section 9.

**Sheet text is not canon.** Every sheet has decorative slogans printed on it ("Same Routine.
Different Challenges.", "Code. Design. Meet. Debug. Repeat.", "SAME STRUGGLES. BETTER DAYS.",
and so on). Those are layout decoration for the sheet itself. They must never be rendered into
a comic panel. See `prompts/negative-prompts.md`.

---

## CHAR-DEEROCK — Frontend Developer
Reference: `characters/deerock.png`

| Field | Canon |
| --- | --- |
| Age / height | 25 · 172 cm |
| Role | Frontend Developer |
| Quote | "Aku coba dulu." |
| Likes | Coffee, clean UI, music, solitude |
| Dislikes | Unnecessary meetings, vague requirements, last-minute changes |

- **Name:** always **Deerock**, in full — in dialogue, thoughts, chat messages and any on-page
  text. Never "Rock", "Dee" or any other short form, including from close teammates.
- **Hair:** dark purple-black, **medium length and layered** — soft strands falling over the
  forehead, covering the ears, reaching the nape. The purple is the single strongest identity cue
  in the cast; it must read as purple-black, not plain black. Length *and* colour together are
  what separate him from Kai.
- **Face:** youthful, slim, gentle features. **Locked:** facial hair is only a very thin, tiny,
  sparse patch directly beneath the lower lip, stopping well before the chin. Clean chin.
  No beard, no moustache, no stubble, no jaw shadow.
- **Glasses:** always, thin dark rectangular frame.
- **Build:** slim/average.
- **Palette:** deep purple, near-black, cool grey, **orange accent**, teal accent, light grey.
- **Personal props:** MacBook, black tumbler, over-ear headphones, dark practical backpack,
  notebook, phone, glasses.
- **Behaviour:** thinks before speaking; reacts with small expressions, not exaggerated poses.
  Prefers solving a problem himself before escalating.

### Deerock wardrobe codes
The sheet shows four outfit variations: *Default (Techwear)*, *Casual*, *Office Casual*, *Home Wear*.

| Code | Outfit |
| --- | --- |
| `D-W01` | **Workday default.** Dark hoodie or dark overshirt over a plain dark tee, dark jeans/chinos, dark sneakers, one small orange accent. This is the sheet's "Default" silhouette **with the tactical parts removed** — no chest harness, no utility straps, no buckle rig, no pouches. |
| `D-W02` | **Office casual**, the sheet's *Office Casual* variation as it is drawn: a black collared button-up shirt worn open over a slate blue-grey crew-neck tee, a white undershirt hem just showing, dark taupe-grey cargo trousers, dark sneakers; lanyard at the office. Outfit crop: `characters/outfits/deerock-office-casual.png`. First worn in Episode 02. |
| `D-W03` | Home wear: hoodie or loose tee, relaxed pants. |

> **Canon note (resolved conflict).** The sheet styles Deerock's default look as techwear with
> a harness and katakana patches, but canon forbids tactical costume. `D-W01` keeps the dark
> silhouette and the orange accent — which is what the existing trailer art already shows — and
> drops the harness. To make the full techwear look canon instead, change it here first, then
> regenerate downstream assets.

---

## CHAR-AKI — UI/UX Designer
Reference: `characters/aki.png`

| Field | Canon |
| --- | --- |
| Age / height | 24 · 160 cm |
| MBTI | ENFP |
| Quote | "Bisa dibuat lebih clean?" |
| Likes | Design, art, coffee, music, nice cafés, cute things, clean spaces |
| Dislikes | Rushed work, unclear feedback, messy files, boring UI, negativity |

- **Hair:** warm brown, medium-long, worn in a loose messy **bun** with soft face-framing strands.
- **Glasses:** no.
- **Build:** petite, shortest of the cast.
- **Palette:** warm browns, dusty rose, cream, soft grey.
- **Personal props:** sticker-covered MacBook, iPad + Apple Pencil, cream tote bag, pink tumbler,
  lanyard with a rabbit card holder, compact camera, sticky notes, rabbit keychain.
- **Behaviour:** expressive, big open smiles, gestures while explaining. Detail-oriented and
  collaborative, not scatterbrained.
- **Wardrobe `A-W01`:** cream/off-white loose knitted sweater with no collar, black wide cargo trousers,
  suspender straps, NEXA lanyard, sneakers.
- **Wardrobe `A-W02`:** `A-W01` with her dusty-pink oversized hoodie — the sheet's *Hoodie* variation —
  pulled on over the sweater, because the office AC gets cold. First worn from 10:05 on the Episode 01
  workday; in the trailer that morning she is still in `A-W01`.

---

## CHAR-KAI — Backend Developer
Reference: `characters/kai.png`

| Field | Canon |
| --- | --- |
| Age / height | 28 · 178 cm |
| MBTI | ENTP |
| Quote | "API-nya udah ready." |
| Likes | Good food, music, gaming, tech, coffee, sports, travel |
| Dislikes | Complicated people, repetitive work, overthinking |

- **Hair:** jet **black** and **short** — cropped short at the sides and back, ears and nape
  fully exposed, short spiky tousled top, short fringe off the forehead. Clearly shorter than
  Deerock's: no layered strands, nothing covering the ears, nothing reaching the collar.
  **Never prompt Kai's hair as "messy."** That one word is what pulls him into Deerock's
  silhouette — say "short, spiky, cropped" instead.
- **Glasses:** never.
- **Build:** tallest of the cast, athletic, broader shoulders than Deerock.
- **Palette:** warm charcoal, brown-grey, taupe, dusty blue.
- **Personal props:** over-ear headphones **worn around the neck** (his strongest silhouette
  cue), MacBook, mechanical keyboard, black tumbler, cap, backpack, chibi mascot keychain.
- **Behaviour:** loud open laughs, relaxed posture, leans back in his chair, talks with his hands.
- **Outfit variations on the sheet:** *Default (Hoodie + Jacket)*, *T-Shirt*, *Shirt (Open)*,
  *Sweater*, *Home Wear*.
- **Wardrobe `K-W01`:** dark hoodie under an open dark jacket, **olive-brown** cargo trousers
  (clearly lighter and warmer than Deerock's near-black jeans), headphones around the neck, sneakers.
- **Wardrobe `K-W02`:** the sheet's *Sweater* variation as it is drawn — a light grey oversized
  pullover sweatshirt with a front pocket and the hood down, charcoal-black wide cargo trousers,
  white slip-on sneakers, black headphones around the neck. Outfit crop:
  `characters/outfits/kai-sweater.png`. First worn in Episode 02.

---

## CHAR-RIN — QA Engineer
Reference: `characters/rin.png`

| Field | Canon |
| --- | --- |
| Age / height | 24 · 162 cm |
| MBTI | ISTJ |
| Quote | "Quality isn't a phase, it's a habit." |
| Likes | Testing, tech gadgets, coffee, cats, clean UI, bug-free builds |
| Dislikes | Sloppy work, unclear requirements, last-minute changes, unchecked bugs |

- **Hair:** very dark brown/black, straight, **long — well past the shoulders, down to mid-back**,
  with a full blunt fringe. (Earlier drafts said "shoulder length". That was wrong; the sheet is long.)
- **Glasses:** no.
- **Build:** slim/average.
- **Palette:** black, charcoal, warm taupe, dusty pink.
- **Personal props:** MacBook with a rabbit sticker, iPad + stylus, black tumbler, test-report
  notebook, sticky notes, black backpack, a black-and-white cat plush (**Neko**), lanyard.
- **Behaviour:** calm, still, deadpan. Reacts with a small flat look rather than a retort. Finds
  reproducible issues; she is never the antagonist.
- **Wardrobe `R-W01`:** black oversized hoodie or jacket over a light tee, dark grey wide cargo
  trousers, lanyard, sneakers.

---

## CHAR-MIKA — Project Manager
Reference: `characters/mika.png`

| Field | Canon |
| --- | --- |
| Age / height | 26 · 165 cm |
| MBTI | ENFJ |
| Quote | "Client ada request baru." |
| Likes | Planning, coffee, people, productivity tools, team discussions, nice cafés, travel |
| Dislikes | Disorganisation, unclear communication, last-minute changes, unresponsive people |

- **Hair:** light warm brown, **long and loosely wavy, worn down**, past the shoulder blades.
  Lightest hair in the cast.
- **Glasses:** no.
- **Build:** average.
- **Palette:** warm brown, terracotta, cream, slate blue.
- **Personal props:** sticker MacBook, iPad + stylus, cream tote bag, tumbler, planning notebook,
  sticky notes, structured shoulder bag, lanyard.
- **Behaviour:** warm and direct, keeps eye contact, delivers bad news with an apologetic
  half-smile. Organised, not bossy.
- **Wardrobe `M-W01`:** crisp collared cream blouse with rolled sleeves, black plain wide trousers with no cargo pockets, suspender straps,
  NEXA lanyard, structured bag.

---

## Character separation matrix

Two pairs in this cast collapse into each other if a prompt is lazy. Every multi-character
panel prompt must carry the relevant row.

### Deerock vs Kai — both male, both dark-haired, both in dark hoodies

**This is the pair that actually collapses.** It has happened in generation: Kai came out looking
like Deerock. Hair *length* does the most work — lead with it, then carry the rest anyway.

| | Deerock | Kai |
| --- | --- | --- |
| Hair length | **medium**, layered, covers the ears, reaches the nape | **short**, cropped at the sides and back, ears and nape exposed |
| Hair colour | dark **purple**-black | jet **black** |
| Glasses | **always** | **never** |
| Height / build | 172 cm, slim | 178 cm, athletic, broader |
| Headphones | over-ear, on the desk or on his head | **around the neck**, almost always |
| Trousers | near-black jeans/chinos | **olive-brown** cargo — lighter and warmer |
| Default expression | small, closed-mouth, calm | open grin, teeth showing, eyes crinkled |
| Posture | upright, contained | leaning, sprawling, gesturing |

Outfits change from episode to episode, so clothing is a bonus separator, never the main one. When
both are in frame, give them tops of clearly different tone — in Episode 02, Deerock's dark open
shirt against Kai's light grey sweatshirt.

Never give Kai glasses. Never give Kai purple hair. **Never call Kai's hair "messy"** — use
"short, spiky, cropped". Never give Deerock a wide open laugh in a neutral scene.

### Aki vs Mika — both brown hair, both cream top + black wide trousers + suspenders + lanyard

| | Aki | Mika |
| --- | --- | --- |
| Hair | medium-long, **tied up in a messy bun** | long, **down and wavy** |
| Hair tone | mid warm brown | lighter, more golden brown |
| Height | 160 cm, petite | 165 cm, average |
| Top | loose **knitted sweater**, no collar | crisp **collared blouse**, sleeves rolled |
| Trousers | black **cargo** with pockets | black **plain wide** trousers |
| Signature carry | cream tote bag, iPad + Apple Pencil | structured shoulder bag, planning notebook |
| Register | playful, wink, peace sign | composed, professional warmth |

If both are in frame, keep Aki's bun and Mika's loose hair clearly readable. Both canonically
wear cream tops (`A-W01`, `M-W01`), so colour cannot separate them — the garment has to: Aki's
loose knitted sweater against Mika's collared blouse with rolled sleeves. When Aki wears `A-W02`, the
pink hoodie separates them by colour as well.

---

## Art-style consistency risk

Aki and Mika were generated in a softer, rounder, more *moe* rendering than Deerock, Kai and
Rin, who are drawn with sharper, more grounded anatomy. When they share a panel, pull the two
towards the middle: keep eye size and face proportions consistent within a panel even if that
means departing slightly from an individual sheet's rendering. See `bible/visual-style.md`.

---

## Relationship notes

- Deerock & Aki: close work partners. Chemistry may emerge naturally; no forced romance.
- Deerock & Kai: friendly technical counterparts, FE to BE.
- Deerock & Rin: respectful, dry FE to QA dynamic.
- Kai & Rin: the loudest and the quietest; comedy comes from the gap, never from conflict.
- Mika protects the team while keeping the project moving.
- Nobody is reduced to their job stereotype. Everyone is competent.
