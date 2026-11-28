---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: []
---

# Home page — surface brief

**Scope:** the home page (`/`), in Persuade mode. It's the club's first official website, serving freshers, event participants, members, faculty, sponsors and coders.
**Job:** say who TeamCodeLocked is, show proof (real events, people and BitByBit), and get visitors to **Join the club**. While applications are closed, that becomes **Follow on Instagram**. **See events** is the secondary action.
**Section order** (confirmed by the user):
1. Hero
2. What we do
3. Past events (the cases)
4. BitByBit
5. The people
6. Join (with tear-off slips)
7. Footer

**Constraints:** follow `PRODUCT.md` and `WEBSITE_PROMPT.md` §6 (motion), §7.1 (page spec) and §10 (anti-slop). Nav labels are plain words (About · Events · Team · BitByBit · Join · Contact). Never invent facts.
**Open questions:** who can join, current BitByBit prices, and the 2026–27 committees (see `OPEN_QUESTIONS.md`).

## Direction contract

THESIS: Every event is a case, and the club is the team that sets them. The home page is the club's open case file: a real filing system you can read. It refuses the dark tech-club template (a centred headline over a photo, then a row of equal cards).

OWN-WORLD: A navy-blue folder (#1F3B6B) as the main surface, on a darker desk (#0A1322). Paper (#F6F1E4) only on labels, tags and slips. Light (#F2F4F8) heavy condensed display type (Archivo, around 70% width, weight 900, uppercase) for case titles. Typewriter labels (Courier Prime) only on file labels, exhibit tags and stamps. Hanken Grotesk for body text. Real paperclips, exhibit tags and redaction bars. Each case owns one flat colour at full strength: The Last Block red, Mind Snap orange, The Challenge Room black. Teal (#4FD1DB) for focus rings and links. Folder tabs are the navigation. No detective props: no magnifying glasses, no hats, no caution tape outside the posters themselves.

STORY: The visitor understands this is BMSCE's tech club that sets puzzle events and runs BitByBit. They believe it because real events, people and dates are filed as evidence. They then join, or follow for updates, and open the cases.

FIRST VIEWPORT: An open navy folder fills the screen inside the desk margin, with folder tabs on top as the nav and "TCLD /" at the left. The left page holds only the h1 "TEAM [CODELOCKED]" in very large condensed caps, where the club name starts redacted and declassifies. Below it, one line ("The tech club of BMS College of Engineering."), then **Join the club** (light button) and **See events →**. The right page shows the Mind Snap group photo, paperclipped, with a small paper tag, and the three case folders peeking up from the bottom edge. Keep the text minimal: no case label, no long paragraph.

FORM: Escape-room case file. It was position 5 on my ordered list of 7. seed:81fb1b9eeac4ea15. Raises kept from the declined challengers:
- Rounds are ordered stations with marked points (darkroom).
- One flat colour field per case (session sleeve).
- Facts at one size, ranked by weight, case and reversal (timetable).
- Every case shows its state: open, solved or archived (plankton).
- Every fact traces to its exhibit (jacquard).
- Tear-off contact slips on Join and Contact, carried over from The Noticeboard at the user's request.

SIGNATURE INTERACTION AND MOTION:
- **Declassify:** the redaction bar scales away from its right edge in 420ms with ease-in-out. It happens once after the entrance, and any redacted word toggles on click.
- **Case folders:** each rests 40px low and slides up on hover in 260ms with ease-out, showing its state stamp.
- **Entrance:** once per session, lead first, with shrinking gaps (0, 110, 190, 250ms).
- **Tear-off slips:** a slip copies its contact, then tears and falls.
- **Reduced motion:** fades only.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
