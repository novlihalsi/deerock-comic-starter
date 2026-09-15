# Consistency Guide

Consistency is more important than novelty.

## 1. Character IDs
Use stable IDs:
- CHAR-DEEROCK
- CHAR-AKI
- CHAR-KAI
- CHAR-RIN
- CHAR-MIKA

Do not describe a character only as 'a developer' when generating an image. Always include the character ID and the relevant canonical traits.

## 2. Reference images
Maintain one approved reference sheet per character:
`characters/<id>/reference-front.png`
`reference-side.png`
`reference-expressions.png`
`reference-wardrobe.png`

Maintain environment sheets:
`locations/home/reference.png`
`locations/krl/reference.png`
`locations/office/reference.png`
`locations/cafe/reference.png`

The reference sheet is the visual source of truth. If a generated image drifts, edit/retry against the reference instead of accepting the drift.

## 3. Character separation
Deerock vs Kai is a priority:
- Deerock: glasses, medium messy dark-purple hair, slim build.
- Kai: no glasses, short neat black side-part hair, broader build, relaxed posture.
Never give Kai Deerock's hairstyle or glasses.

## 4. Wardrobe continuity
Each episode gets a wardrobe code:
- D-W01: Deerock office outfit
- A-W01: Aki office outfit
- K-W01: Kai office outfit
- R-W01: Rin office outfit
- M-W01: Mika office outfit

Do not change outfits between adjacent panels unless the story says they changed.

## 5. Environment continuity
Create a location sheet before repeated use. Record:
- layout
- dominant furniture
- windows/doors
- desk positions
- plants
- signage
- lighting direction
- time of day
- recurring props

For KRL, record carriage type, door/pole arrangement, seat layout and typical crowd density.

## 6. Panel continuity
For every panel record:
- time
- location
- characters
- wardrobe code
- camera angle
- character pose/expression
- props
- previous/next panel relationship

## 7. Generation workflow
A. Establish reference sheet.
B. Generate rough scene.
C. Compare against reference.
D. Fix character identity/background geometry.
E. Approve.
F. Add dialogue/typesetting.
G. Assemble page.

Do not generate a whole 3-page episode in one shot when character/location consistency is a priority. Generate at panel/scene level and assemble afterward.

## 8. Versioning
Never overwrite approved assets.
Use:
`v001`, `v002`, `v003`...
Mark approval in a small text manifest:
`assets/approved/manifest.md`

## 9. Canon change protocol
If the user changes a canonical trait, update the bible first, then update affected reference sheets, then regenerate downstream assets.
