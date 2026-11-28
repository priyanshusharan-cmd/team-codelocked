# TeamCodeLocked Website — Build Prompt

> **How to use this file:** open a fresh Claude Code session in this repo and say:
> *"Read `WEBSITE_PROMPT.md`, `TEAM_DETAILS.md` and `DEMO_SITE_REFERENCE.md`, then run Phase 0."*
> Work one phase at a time. At the end of each phase, stop, show what you made, and wait for a go-ahead.

---

## 0. The job in one paragraph

Build the official website for **TeamCodeLocked**, the tech club of **B.M.S. College of Engineering (BMSCE), Bengaluru**. It has to feel **made by people, for people**: real faces, real events, a voice that sounds like a student who's proud of their club rather than a SaaS landing page. It should also look **professional enough** that a sponsor, a faculty member or a recruiter takes the club seriously. It should **breathe**, with generous space, calm rhythm and one idea per screen. It should **move with intent**: a few authored moments and crisp micro-interactions, never motion for its own sake. It must not look AI-generated. The other team's demo (see `DEMO_SITE_REFERENCE.md`) is the "before" picture: a dark page, a mint accent, a serif headline and generic cards. Do better, and do something different.

---

## 1. Sources of truth (read before anything else)

| File | What it holds | Rule |
|------|---------------|------|
| `TEAM_DETAILS.md` | Club facts, links, 2026–27 heads and their emails, events, BitByBit, committees, still-needed list | **The only source of facts.** Never invent a fact, number, quote, sponsor, testimonial or stat. |
| `DEMO_SITE_REFERENCE.md` | Content, page copy and every image link from the demo site | Use it for **content and assets only**. Never copy its design, layout, code, palette or fonts (Geist + Instrument Serif, mint `#95dacb`). |
| `WEBSITE_PROMPT.md` (this file) | Direction, design system, motion spec, phases | Overrides skill defaults where they conflict (see §13). |

**Facts you can use right away:**
- **Club:** TeamCodeLocked (logo text "TCLD"). The tech team of BMSCE, Bengaluru.
- **Email:** teamcodelocked@gmail.com
- **Social:** Instagram `@teamcodelocked` and LinkedIn `company/teamcodelocked`
- **BitByBit:** https://bitbybit-9h8e.vercel.app/
- **Faculty Coordinator:** Dr. Namratha M
- **2026–27 heads, with emails:**
  - Team Heads: Pannag, Aakanshya
  - Event Management: Niyati Jain
  - Marketing: Dhruv
  - Social Media: Anagha Avinash
  - Design: Priya
  - Tech: Amitrakshar
  - BitByBit: Dhruv G Nayak, Omkrish
- **Utsav 2026 events:**
  - The Last Block (17 Apr)
  - Mind Snap (18 Apr)
  - The Challenge Room (19 Apr)

  Each has a write-up, a venue, a team size and a prize pool.
- **Earlier events:** Club Orientation '26 (1 Oct 2026), CodeLocked Orientation Day (Oct 2026), BitByBit 2.0 (from 8 Jun 2026)
- **Teams that recruit:** Tech, Design, Event Management, Marketing, Sponsorship & Social Media
- **Brand evidence:**
  - A hexagonal cyan/teal "C" logo on dark navy
  - Instagram posts use black, **blue diagonal stripes** and **torn-paper textures**

**Facts that are still missing** (design a slot for each, never fake it):
- High-res logo and exact brand colours
- Photos of Niyati, Dhruv (Marketing) and Anagha
- The 2026–27 OC and volunteer lists
- Event gallery photos
- A real WhatsApp community link
- Founding year
- The canonical domain

**Consent:** before launch, confirm that every person shown agrees to their **photo and college email** appearing on a public page. Keep a `CONSENT.md` checklist.

---

## 2. Skills to use, and when

All of these are installed in `~/.claude/skills/`. Call them by name.

| Skill | Use it for | Phase |
|-------|------------|-------|
| `/impeccable init` | Write `PRODUCT.md`: audience, goals, voice, brand commitments | 1 |
| `/impeccable shape` | Plan the UX and information architecture before code | 2 |
| `/impeccable` (new work) | Lock the visual world; it reads its `craft-floor.md` before every UI edit | 2–5 |
| `/design-taste-frontend` (taste skill) | Build the marketing pages to a professional standard. Use its copy-lint, its layout checker and its finish gate. | 4–5, 8 |
| `/impeccable typeset`, `layout`, `colorize` | Tune type, spacing rhythm and colour strategy | 3, 9 |
| `/find-animation-opportunities` | A read-only list of where motion helps and where it doesn't | 6 |
| `/animate` | Build each motion piece: purpose, curve, duration, interrupt behaviour, exit | 6 |
| `/choreograph` | Hero entrance and any group that moves together | 6 |
| `/emil-design-eng` | Interaction polish: press, hover, popovers, transitions vs keyframes | 6, 9 |
| `/apple-design` | Springs, interruptible motion, depth and typography details | 6 |
| `/animation-performance` | Make sure nothing drops frames | 6, 8 |
| `/mobile-native` | Make the phone experience feel like an app, not a website | 7 |
| `/break-ui` | Stress-test team cards, event cards and contact rows with worst-case data | 7 |
| `/impeccable harden`, `adapt` | Edge cases, empty and error states, responsive layouts | 7 |
| `/impeccable audit`, `critique` | Technical and UX review | 8 |
| `/review-animations`, `/improve-animations` | Strict motion review and audit | 8 |
| `/remove-animations` | Cut anything that feels over-animated | 8 |
| `/impeccable polish` | The final pass | 9 |
| `/learn-taste` | Save every design correction as a rule in `DESIGN.md` | End of every phase |

**When the skills disagree, follow §13.**

---

## 3. Audience and goals

| Who | Arrives from | Wants to | Win condition |
|-----|--------------|----------|---------------|
| **Freshers and juniors** (largest group, mostly on phones) | Instagram bio, orientation QR code, WhatsApp | See what the club does and whether they fit | They tap **Join** or follow on Instagram |
| **Event participants** | Event poster QR code | Date, venue, team size, prize, rules, how to register | They find all of that within 5 seconds |
| **Current members** | Bookmark | Team page, BitByBit, contacts | They reach the page in one tap |
| **Sponsors, faculty, recruiters** | LinkedIn, an email signature | Credibility: real events, real people, scale | It feels like a serious, organised club |
| **Competitive coders** | BitByBit | Contests and practice | They tap through to BitByBit |

**The one main action** on the home page is **Join the club**. If registrations are closed, it's **Follow for updates**. The secondary action is **See events**.

---

## 4. Creative direction: "The Case File" (chosen 2026-11-28)

The user chose between two animated prototypes (`.impeccable/mocks/motion/`) and left the final call to Claude. The Case File won, and The Noticeboard's tear-off slips carry over. **The direction contract in `.impeccable/surfaces/src-pages-index-astro.md` is binding.** Reload it before every build session.

### 4.1 The idea

Every event is a **case**, and the club is the team that sets them. TeamCodeLocked's events are puzzles and mysteries:
- The Last Block: a Jenga murder mystery
- Mind Snap: memory trials and a photo treasure hunt
- The Challenge Room: blindfold trials, QR chains and a digital escape room

So the site is the club's **open case file**: a real filing system you can read.
- A **navy-blue folder** (changed from manila on 2026-11-28: the user disliked the yellow) is the main surface, lying on a darker desk.
- **Folder tabs** are the navigation, with plain labels: About · Events · Team · BitByBit · Join · Contact.
- **Every event is a colour-coded case folder** with an exhibit photo, typed labels, the facts at one size, and a state stamp (`OPEN`, `SOLVED`, `ARCHIVED`).
- **Real photos are filed as evidence**, paperclipped, with exhibit tags ("Exhibit A: Mind Snap · 18 Apr 2026 · PJ Block").
- **Redaction bars** hide one word at a time and **declassify**. This is the signature interaction.
- **Tear-off contact slips** on the Join and Contact sections (from The Noticeboard).

### 4.2 The rut, so stay out of it

- ❌ **The demo's world:** an all-dark page, mint accent, italic serif headline, rounded cards, pill nav.
- ❌ **Hacker costume:** green-on-black terminals, Matrix rain, glitch text, monospace everywhere, neon glow.
- ❌ **Generic SaaS:** gradient blobs, glassmorphism, a centred hero, three icon cards.
- ❌ **Detective kitsch:** magnifying glasses, deerstalker hats, trench coats, fingerprints, caution tape, film-noir smoke, "CLASSIFIED" splashed everywhere. Those props appear only inside the club's own posters, never in the site's design. The file is a **working filing system**, not a costume.
- ❌ **Themed nav labels:** never "Case files" or "Evidence". Nav labels are plain words; the theme lives in the styling.

### 4.3 Discipline: a filing system, not a collage

- **Everything sits on the grid. Nothing tilts.** Folders, labels, tags and stamps are straight.
- **Paperclips:** one per exhibit photo, drawn as a real clip shape (an SVG of an actual clip), never a CSS circle hack.
- **Typed labels** (Courier Prime) appear **only** on file labels, exhibit tags, case numbers and stamps. That's the world's own voice, not "techy" decoration. Headlines are the heavy condensed display face, and body text is Hanken Grotesk.
- **Redaction:** at most one redacted phrase per screen. It always declassifies (after the entrance, or on click or tap), and the real text is in the DOM, so screen readers read it.
- **Case colours** (one flat field per case, at full strength):
  - The Last Block red `#B3171B`
  - Mind Snap orange `#E9582B`
  - The Challenge Room black `#15161D`
  - Each new event gets its own colour from the poster.
- **Facts at one size**, ranked by weight, case and reversal (date · venue · team · prize pool).
- **Every fact traces to its evidence:** a case's date, venue and prize link to or sit beside the poster.
- **Rounds are stations:** event rounds are numbered and walked in order, each with a marked point.
- **Paper grain:** static noise at about 8% soft-light on the folder only. Never on text, never animated.

### 4.4 Dark, deliberately: a navy folder on a darker desk

- **The navy folder** is the reading surface for every section. Paper labels, tags and slips give the light contrast.
- **The navy desk** shows at the margins and carries the "night" sections: BitByBit (as a dark terminal-free screen inside a folder), the footer, and the mobile menu.
- **No light/dark toggle in v1.** Contrast is checked on manila, navy and every case colour.

### 4.5 Voice

**Superseded by `copy/voice.md`:** facts first (register 1), with a conversational student edge in the microcopy (register 12). Specific, never corporate. The examples below still apply.

| Do | Don't |
|----|-------|
| "We run puzzle events at Utsav, weekly coding contests on BitByBit, and a lot of late-night building." | "We are a dynamic platform fostering innovation and excellence." |
| "The Challenge Room: four rounds, blindfolds included." | "An exciting, engaging event experience." |
| "Applications open at the start of the year. Follow us so you don't miss it." | "Unlock your potential and embark on a journey." |
| Real numbers from `TEAM_DETAILS.md` | Made-up stats ("500+ members", "50+ events") |

**Banned words:** unlock your potential, empower, cutting-edge, innovate/innovation (as filler), seamless, journey, elevate, leverage, synergy, dynamic, passionate, world-class, revolutionize, "Let's dive in", "Join us as we", "Together, let's", "In today's fast-paced world".

The LinkedIn overview in `TEAM_DETAILS.md` is full of these, so **don't reuse it word for word**. Rewrite the facts in the club's own voice.

**One pun budget for the whole site:** you may use "unlock" or "locked in" **once**. Make it count.

---

## 5. Design system

Write all of this into `DESIGN.md` in Phase 3, as tokens in `src/styles/tokens.css`.

### 5.1 Colour

The hex values below are placeholders. **Sample the real values** from the high-res logo and the Instagram posts, then replace these before Phase 4.

| Token | Value | Role |
|-------|-------|------|
| `--desk` | `#0A1322` | The desk: page margins, footer, mobile menu |
| `--folder` / `--folder-2` / `--folder-3` | `#1F3B6B` / `#18315B` / `#152A4E` | Navy-blue folder: main page / facing page / tab rail |
| `--text` / `--text-soft` | `#F2F4F8` / `#B9C6DC` | Text on the folder |
| `--paper` / `--paper-ink` | `#F6F1E4` / `#14110C` | Typed labels, exhibit tags and slips only (small areas) |
| `--redact` | `#0A1322` | Redaction bars |
| `--teal` | `#4FD1DB` | Links and focus on navy |
| `--stamp` / `--stamp-on-paper` | `#FF7A6B` / `#B42F25` | Status stamps only |
| `--case-lb` / `--case-ms` / `--case-cr` | `#B3171B` / `#E9582B` / `#15161D` | One flat field per case |

**Colour strategy:** Committed. The navy folder carries most of every section, the darker desk frames it, and paper appears only as small labels and tags. Case colours own whole folder faces, never small accents.

**Rules:**
- **Never violet or lavender.**
- **No gradient text** and **no neon glows.**
- Secondary text is tinted from the surface's own hue, never a flat grey.
- Contrast: body text ≥ 4.5:1, large text ≥ 3:1. Check every pairing.
- Theme the parts of the browser you didn't draw:
  - `::selection` is ink on teal
  - `caret-color`
  - `accent-color`
  - scrollbars (thin, ink thumb on manila)
  - focus rings
  - `text-underline-offset`

### 5.2 Type

Pick faces with character that don't match the demo. **Self-host** them as subset `woff2` with `font-display: swap`. Preload the display face only.

| Role | Face (first choice) | Alternatives | Use |
|------|---------------------|--------------|-----|
| Display | **Archivo** (variable: width 62–75%, weight 800–900, uppercase) | Big Shoulders Display, Anton | h1, h2, case titles, exhibit tag titles |
| Text | **Hanken Grotesk** | Public Sans, Figtree | Body, UI, buttons |
| Typed labels | **Courier Prime** | Special Elite (no) | **Only** for file labels, exhibit tags, case numbers and stamps: the case file's own voice |
| Code | **JetBrains Mono** | IBM Plex Mono | **Only** for real code in BitByBit fragments |

Confirm the pairing with `/impeccable typeset` in Phase 3. If you change it, record why in `DESIGN.md`.

**Scale** (fluid, `clamp()`):

| Token | Size | Line height | Tracking |
|-------|------|-------------|----------|
| `--t-display` | `clamp(3.25rem, 7vw, 6.25rem)` (Archivo at 72% width) | 0.88 | 0 (condensed caps need no negative tracking) |
| `--t-h2` | `clamp(2.25rem, 4.5vw, 4rem)` (Archivo caps) | 0.92 | 0 |
| `--t-h3` | `clamp(1.375rem, 2vw, 1.75rem)` | 1.15 | -0.015em |
| `--t-body-l` | `1.1875rem` | 1.55 | 0 |
| `--t-body` | `1.0625rem` | 1.6 | 0 |
| `--t-small` | `0.875rem` | 1.45 | 0.005em |
| `--t-label` | `0.875rem` (Courier Prime bold) | 1.35 | 0.05em, uppercase |

**Rules:**
- Body text runs 65–75 characters wide.
- Use `text-wrap: balance` on headings and `pretty` on paragraphs.
- There's always more space above a heading than below it.
- **No eyebrow or kicker labels above headings.** The heading carries its own weight.
- Number things (01/02/03) **only** when the order matters, such as the rounds of an event.
- Use tabular numerals for dates, prize pools and times.

### 5.3 Space, grid and breathing room

- **Spacing scale (4px base):** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 160
- **Section padding:**
  - Desktop: `clamp(96px, 11vw, 160px)` top and bottom
  - Phone: 64–80px
- **Container:** max 1200px of content, centred, with **equal left and right edges** everywhere
  - Gutters: 24px desktop, 20px tablet, 16px phone
- **Grid:**
  - 12 columns desktop (≥1024px)
  - 8 columns tablet (768–1023px)
  - 4 columns phone
  - Every block snaps to the columns
- **One idea per screen** on the marketing pages (Home, BitByBit, Join):
  - At 1440×900, each section is one or two screens tall
  - The hero has the first screen to itself
  - No half-empty sections
  - The next section's heading never peeks in
- **Spacing within and between groups:** related items sit tight (8–16px). Unrelated groups get real separation (48–96px).
- **Breakpoints to check:** 1440, 1280, 1024, 820, 768, 390 and 320.

### 5.4 Shape, depth and texture

- **Radius:**
  - Folders: 6px on the outer corners, 8px on top of the tabs
  - Labels, tags, posters and photos: 0–2px (paper has corners)
  - Buttons and inputs: 4px (stamped, not pill-shaped)
  - No pills anywhere
  - One radius scale across the site
- **Shadows:** real shadows with an offset and a soft blur, used to show something is pinned or raised:
  - Rest: `0 1px 2px rgb(14 26 46 / .08), 0 4px 12px -4px rgb(14 26 46 / .12)`
  - Raised: `0 2px 4px rgb(14 26 46 / .10), 0 12px 28px -8px rgb(14 26 46 / .22)`
  - **No** hard offset "brutalist" shadows, **no** coloured halos.
- **Never use:**
  - Glassmorphism
  - A coloured bar down one side of a box
  - Cards inside cards
  - Same-size cards of icon + heading + text as the page structure

### 5.5 Iconography and imagery

- **Icons:** one library. **Phosphor** (regular weight) or **Lucide** at a 1.75 stroke. Brand marks (Instagram, LinkedIn, WhatsApp, Gmail) come from **Simple Icons** in their real shapes. **Never** use emoji or Unicode symbols as icons.
- **Photos are real and come first:**
  - The Utsav group photo
  - The event posters
  - Member portraits
  - Event gallery shots (once the team supplies them)
- **Portraits:**
  - Crop all to **4:5**
  - Faces at the same height
  - One consistent colour grade (slight warmth, lifted blacks)
- **Missing portrait:** a designed placeholder. An empty evidence photo: the person's initials in the display face on `--label`, paperclipped like the real photos, with a tag that reads "Photo to come". **Never** a stock face or an AI-generated person.
- **Posters:** show them whole and uncropped, filed inside their case folder as the main exhibit.
- **No captions** that describe a picture ("Students enjoying the event"). A name and role on a person card is content, not a caption.
- **Optional:** one handwritten note per page at most, scanned from a real member's handwriting, never a handwriting font.

### 5.6 Components (one of each, used everywhere)

| Component | Spec |
|-----------|------|
| **Button, primary** | Ink fill with manila text on manila (or manila fill on the desk). 48px tall, 4px radius, label is a verb plus a noun ("Join the club", "See events"). Hover: lifts 1px and the background shifts 6%. Press: `scale(0.97)`. |
| **Button, secondary** | Text link with an arrow. The underline draws from left to right on hover, and the arrow nudges 2px. |
| **Nav (folder tabs)** | Desktop: "TCLD /" at the left, then six folder tabs: About · Events · Team · BitByBit · Join · Contact. The active tab is `--manila` and joins the folder below it; inactive tabs are `--manila-2` and lift 4px on hover. When you scroll, the tabs stick to the top on the navy desk. "Join the club" appears as an ink button at the right of the tab row once the hero has scrolled away. Phone: "TCLD /" plus a Menu button that opens a full-screen navy sheet (§6.5). |
| **Case folder (event card)** | A folder face in the case colour with a typed case number and date ("No. 02 · 18 Apr"), the title in display caps, the poster as an exhibit, and a facts row at one size (date · venue · team size · prize pool, tabular). It carries a state stamp: `OPEN`, `REGISTRATIONS OPEN`, `FULL`, `SOLVED` (past) or `ARCHIVED`. It rests 40px low in a stack and slides up on hover. The whole folder is one link. |
| **Person card (personnel file)** | A paperclipped 4:5 portrait, a typed label with the role, the name in display caps, and for heads a copy-email button. No bio text. |
| **Stamp** | Courier Prime bold, uppercase, 2–4px border in `--stamp` (or `currentColor` on a case colour), slight ink texture. Status only. Straight, never rotated. |
| **Tear-off slips** | A typed contact sheet clipped into the folder, with 4–6 perforated slips: email, Instagram, LinkedIn, WhatsApp (only once a real link exists), BitByBit. Tapping a tab copies the value or opens the link (see §6.4). |
| **Copy button** | Icon plus label. On success, the icon crossfades to a check with a 150ms blur morph, and an `aria-live` region says "Email copied". It resets after 2s. |
| **Segmented control** | The team year switch (2026–27 · 2025–26) and the event filter. A sliding pill indicator moves at 220ms with `--ease-out`. |
| **Footer** | The navy desk, with the folder's bottom edge closing above it. Club name, the line "Students, projects and shared curiosity." (rewrite it if the team prefers), BMSCE, links, socials, email, `© 2026 TeamCodeLocked`, and one credits line. |

**Every interactive element has all of these states:** default, hover (pointer devices only), focus-visible (a 2px teal ring, 3px offset, never hidden under the sticky nav), active/pressed, disabled, loading and error, plus an empty state where it applies.

---

## 6. Motion system

Motion has three jobs here: **feedback** (the UI heard you), **continuity** (where things came from) and **a few authored moments** that give the club personality. Everything else stays still.

### 6.1 Motion tokens (from Emil's rules)

```css
:root {
  --ease-out:    cubic-bezier(0.23, 1, 0.32, 1);    /* enters, hovers, presses: the default */
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);   /* things moving or morphing on screen */
  --ease-drawer: cubic-bezier(0.32, 0.72, 0, 1);    /* sheets, the mobile menu */
  --dur-press: 140ms;
  --dur-hover: 180ms;
  --dur-small: 200ms;   /* tooltips, copy feedback, chips */
  --dur-ui:    240ms;   /* segmented control, filters, dropdowns */
  --dur-sheet: 380ms;   /* mobile menu, dialogs (500ms max) */
  --dur-page:  260ms;   /* view transitions */
  --dur-hero:  600ms;   /* once-per-visit entrance steps */
}
```

### 6.2 Hard rules

1. **Never use `ease-in`** on UI. Enters and exits use `--ease-out`. Things moving on screen use `--ease-in-out`.
2. **UI animations stay under 300ms.** Sheets and dialogs can take up to 500ms. Only the hero entrance runs longer, and only once per session.
3. **Never animate from `scale(0)`.** Start from `scale(0.95)` or more, combined with opacity.
4. **Only animate** `transform`, `opacity`, `clip-path` and `filter: blur()` (blur sparingly, kept small). Never animate width, height, top, left or `box-shadow`. Fake a shadow change with a pseudo-element's opacity.
5. **Name properties in transitions.** Never write `transition: all`.
6. **Use transitions, not keyframes,** for interactive state, so it can be interrupted cleanly. Keyframes are for one-shot entrances only.
7. **Hover effects only on real pointers:** `@media (hover: hover) and (pointer: fine)`.
8. **Every press gives feedback:** `:active { transform: scale(0.97) }` on buttons and tappable cards.
9. **No fade-in on scroll** for sections, cards or rows. No parallax on text, no scroll-jacking, no smooth-scroll libraries, no tilt, no carousels, no auto-rotating tabs.
10. **Nothing animates for keyboard actions** (Tab focus, arrow keys). Focus rings appear instantly.
11. **One entrance per container.** If a sheet slides in, its links are already there. Don't stagger the children too.
12. **Stagger:**
    - Interface parts: 30–80ms between items, with the whole group done in under 300ms
    - The hero: 100–150ms steps, with gaps that **shrink** (for example 0 / 110 / 190 / 250ms), never equal ones
    - Order follows importance
13. **Exits are faster and happen all at once.** Never reverse-stagger on the way out.
14. **Never block interaction.** Everything is clickable the moment it's visible.
15. **Anything that loops past 5 seconds gets a pause control.**
16. **`prefers-reduced-motion: reduce`:** keep opacity and colour fades (≤200ms). Remove all movement, scaling, blur and the unlock spin. Nothing stays hidden.
17. **Asymmetric timing:** slow where the user is deciding (hold-to-confirm), fast where the system responds (release in 200ms).

### 6.3 The hover layer (site-wide)

| Element | Hover (pointer only) | Press |
|---------|----------------------|-------|
| Primary button | `translateY(-1px)`, background shifts 6%, 180ms `--ease-out` | `scale(0.97)`, 140ms |
| Text link | The underline draws left to right (animate `background-size`, or `scaleX` on a pseudo-element), 200ms | none |
| Arrow link | The arrow moves `translateX(2px)`, 180ms | none |
| Event card | The card lifts `translateY(-2px)`, the shadow pseudo-element goes to the raised opacity, the poster zooms `scale(1.025)` **inside its frame** (`overflow: hidden`), 220ms | `scale(0.985)` |
| Person card | The portrait zooms `scale(1.03)` inside its frame; the copy-email button's opacity goes 0.7 → 1 | none |
| Tape strip | Static. Tape doesn't move. | none |
| Nav link | The colour shifts; the diagonal underline grows `scaleX(0 → 1)` from the left, 200ms | none |

### 6.4 Authored moments: at most one or two per page

Before building each one, run it through `/animate` (and `/choreograph` for groups) and write its timeline table into `DESIGN.md`.

**A. Open the file + Declassify (home hero, once per session)**
- **Purpose:** introduce the club as "the team that sets the puzzles". The one redacted word proves it in the first two seconds.

| Time | Element | Role | Motion |
|------|---------|------|--------|
| 0ms | Folder (both pages and tabs) | Lead | Fades in and rises 24px, 700ms `--ease-out` |
| 180ms | Case label | Support | Fades in and rises 14px, 600ms |
| 260ms | Exhibit photo with paperclip | Support | Drops 10px from `scale(.985)`, 620ms. It's visible straight away, never held back. |
| 300 / 410 / 490 / 550ms | h1 lines | Lead | Fade in and rise 14px, 600ms each, with shrinking gaps |
| 640ms | Subline | Support | Fades in and rises 10px |
| 720ms | Buttons | Support | Fade in and rise 8px, together |
| 620 / 700 / 760ms | Case folders | Support | Rise from 120px to their resting 40px-low position, 560ms |
| about 1350ms | Redaction bar over "puzzles." | Accent | `scaleX(1 → 0)` from the right edge, 420ms `--ease-in-out`. Click or tap toggles it afterwards. |

- Total time is about 1.8s, and nothing blocks a click.
- Store `sessionStorage.tcld_opened=1`. After the first play in a session, the hero renders already open and declassified.
- **Reduced motion:** a 200ms fade only, and the word shows uncovered.
- **Screen readers** always get the real word. The bar is `aria-hidden`.
- The working reference is `.impeccable/mocks/motion/case-file.html`.

**B. Tear-off slips (Join section and Contact page)**
- A typed contact sheet is clipped inside the folder, with perforated vertical slips. Tapping one copies the contact or opens the link. The working reference is `.impeccable/mocks/motion/noticeboard.html`.
- **Motion:**
  - The tab rotates up to 3° from its top corner
  - It moves `translateY(6px)`, then fades out and falls 24px over 260ms, ending with `--ease-in-out`
  - A perforated stub stays behind
  - A toast says "Copied teamcodelocked@gmail.com"
  - The tab grows back after 4s with a 200ms fade (no movement)
- It's rare and delightful, which is exactly where delight belongs.
- **Keyboard:** tabs are buttons. Enter or Space copies with the same feedback, minus the fall animation (keyboard actions don't animate).
- **Reduced motion:** just a fade and the toast.

**C. Poster → event page (View Transitions)**
- Use cross-document view transitions: `@view-transition { navigation: auto; }`.
- Each event card's poster gets `view-transition-name: poster-<slug>`, so it morphs into the hero poster on the detail page. 260ms `--ease-in-out`.
- The rest of the page crossfades in 200ms.
- **Reduced motion:** turn view transitions off.
- **Older browsers:** a normal page load. This is progressive enhancement.

**D. Photos develop (event galleries; Mind Snap's photo hunt inspired it)**
- Only once real gallery photos exist.
- When a gallery row first enters the viewport (`IntersectionObserver`, once), each photo animates from `filter: grayscale(1) contrast(1.1) blur(2px)` to normal over 700ms `--ease-out`, staggered 60ms, with the first 6 only.
- This is the **one** scroll-triggered moment on the site, and it stays inside its own section.
- **Reduced motion:** photos show normally.

**E. Team filter (team page)**
- The segmented control filters by team (All · Tech · Design · Event Management · Marketing · Social & Sponsorship) and switches the year (2026–27 · 2025–26).
- Grid items reflow with FLIP:
  - Measure, then animate `transform` from the old position to the new one, 240ms `--ease-out`
  - Leaving items fade and scale to `0.96` over 160ms
  - Entering items fade in from `scale(0.96)` over 200ms
- No stagger, because people use this filter a lot.
- The URL updates (`?team=tech&year=2025-26`) so filtered views can be shared.

**F. 404: a locked case (optional, fun)**
- The 404 page is a tiny puzzle: "This room is locked." It shows a 4-digit combination lock, with a hint drawn from real event facts (for example, the Utsav event dates).
- The right code plays a small unlock (the same family as moment A, at 70% scale) and shows links back to the site.
- The links are **always** visible as well. Never trap the user.

### 6.5 Mobile menu

- A full-screen sheet that slides down from the nav at 380ms with `--ease-drawer`. Links are already in place (one entrance per container).
- The backdrop fades in 200ms. Swipe up or tap ✕ to close, and closing takes 240ms.
- Lock body scroll while it's open, trap focus inside it, close it with Esc, and keep the toggle's `aria-expanded` state in sync.

---

## 7. Information architecture and page specs

Every page uses `main > section`, one h1, and headings that go one level at a time.

### 7.1 Home `/` (Persuade)

One idea per screen.

1. **Hero (night):**
   - **h1** says what the club is and who it's for, in the club's voice. Starting drafts (write the final one in Phase 4):
     - "The tech club of BMS College of Engineering."
     - "Puzzles, contests and code, made at BMSCE."
   - **One hard fact** on the first screen, for example: *"Weekly coding contests on BitByBit. Puzzle events at Utsav."*
   - **Buttons:** Join the club (primary) · See events (secondary)
   - **Visual:** the open case file, with the group photo paperclipped as Exhibit A, the redacted word, and the three case folders peeking up (§6.4 A and the direction contract)
2. **What we actually do (paper):** three things, laid out **asymmetrically**, not as three equal cards:
   - **Events:** a big poster collage built from real posters
   - **BitByBit:** a small live UI fragment
   - **Teams you can join:** Tech, Design, Event Management, Marketing, Sponsorship & Social Media, shown as stamped labels
3. **Past events, "case files" (paper):** The Last Block · Mind Snap · The Challenge Room as event cards, plus "All events →".
4. **BitByBit (night):**
   - What it is, in plain words: curated DSA problems, a daily sprint, live contests, an AI code coach, streaks and certificates
   - A **live HTML fragment** of the interface (a problem card with difficulty and tag chips), not a screenshot
   - **Button:** Open BitByBit ↗
   - Show prices or prize figures only after confirming they're current. The BitByBit 2.0 numbers in `TEAM_DETAILS.md` are from June–July 2026.
5. **The people (paper):**
   - The 2026–27 heads as a row of portraits (8–10 people)
   - Faculty Coordinator Dr. Namratha M
   - "Meet the whole team →"
6. **Join (a recruitment form clipped into the folder):**
   - The recruiting teams, when applications open (the start of the academic year, at Club Orientation)
   - The current status as a stamp
   - The tear-off tabs (§6.4 B)
   - **Button:** Join the club (when open) or Follow on Instagram (when closed)
7. **Footer (night).**

### 7.2 Events `/events` (Read, with a little Persuade)

- **Upcoming:**
  - When there are events: cards that show the registration state
  - When there are none: a designed empty state. A blank pinned card that says "Nothing on the board right now. Follow @teamcodelocked for the next one."
- **Past:** event cards grouped by season (Utsav 2026, then Orientation 2026, then BitByBit 2.0) and sorted newest first.
- **Filter:** All · Utsav · Contests · Orientation, using the segmented control.

### 7.3 Event detail `/events/[slug]` (Read)

- **Hero:**
  - The poster (the view transition target), the title, and the meta stamps: date · venue · team size · prize pool
  - A status stamp
  - A register button, but only for upcoming events with a real link
- **About:** the write-up from `DEMO_SITE_REFERENCE.md`, rewritten in the club's voice and keeping every fact.
- **Rounds:** a numbered sequence (the order matters here), each round with a name and one or two sentences.
  - The Last Block: Clue Extraction → Connect the Dots → Final Reveal
  - Mind Snap: Memory Blackout → Capture the Clue → 1-Minute Challenge
  - The Challenge Room: Blindfold Memory Mayhem → Sensory Showdown → QR Chaos → The Pivot Challenge
- **Gallery:**
  - With photos: the develop moment (§6.4 D)
  - With none: a designed empty slot that says "Photos coming soon. Were you there? Send yours to teamcodelocked@gmail.com."
- **Navigation:** previous and next event, plus Back to events.
- **Structured data:** JSON-LD `Event` schema.

### 7.4 Team `/team` (Experience and Read)

1. **Faculty Coordinator:** Dr. Namratha M, with her portrait.
2. **Team Heads 2026–27:** large portraits, name, role, copy-email button. Use the emails from `TEAM_DETAILS.md`.
3. **Committees:** the year switch (2026–27 · 2025–26) and the team filter (§6.4 E).
   - 2026–27 OC and volunteers aren't known yet. Show a designed "Lineup coming soon" panel.
   - 2025–26 shows the full archive from `DEMO_SITE_REFERENCE.md`, with its photos.
4. **Data cleanup:**
   - Remove duplicates (Hrishikesh, Parichit, Anish).
   - Replace "Team Member" with the real names after the team confirms them.
   - Write names in proper case ("Praneeth K Kulkarni", not "PRANEETH K KULKARNI").

### 7.5 BitByBit `/bitbybit` (Persuade)

- What it is and who it's for
- Features, shown as real UI fragments rather than icon cards
- How weekly contests work
- The contacts: Dhruv G Nayak and Omkrish, with their emails
- **Button:** Open BitByBit ↗

### 7.6 Join `/join` (Persuade, and an Operate form later)

**Two designed states.** Which one shows is controlled by a single flag in `src/content/site.json`.

- **Closed:**
  - A `CLOSED` stamp
  - When applications usually open (the start of the academic year)
  - What each team does: one honest line per team
  - **Buttons:** Follow on Instagram, or the tear-off tabs
- **Open:**
  - The same team list
  - A link to the real application form (Google Form, or whatever the club uses), with its deadline as a date stamp

### 7.7 Contact `/contact` (Operate)

- **Club email** with a copy button and a `mailto:` link
- **Instagram, LinkedIn and BitByBit**
- **2026–27 heads** in a compact table: role · name · copy email. Keep each email on one line where it fits. The long ones, like `aakanshyaagarwalla.cs24@bmsce.ac.in`, must wrap cleanly with `overflow-wrap: anywhere` and never overflow at 320px.
- **Location:** BMS College of Engineering, Bull Temple Road, Basavanagudi, Bengaluru. Use street and area only, with a "See on Maps" link.
- **Contact form:** none in v1, unless the team sets up a real form service (Formspree or Web3Forms). Never show a form that doesn't actually send.

### 7.8 Journal `/journal` (Read; optional, Phase 9)

- A designed empty state until the team writes posts.
- Post template: a 68ch measure, generous leading, and code blocks that use the mono face.

### 7.9 404 (§6.4 F)

---

## 8. Technical plan

- **Stack:** **Astro 5** (static output) with vanilla CSS (custom properties and `@layer`) and a little TypeScript. No CSS framework, no animation library by default. CSS transitions, the Web Animations API (WAAPI) and View Transitions cover everything above. Add `motion` (motion.dev, a small import) **only** if a spring can't be done well with CSS `linear()` easing.
- **Images:** `astro:assets` producing AVIF/WebP at several sizes (`srcset`), always with `width` and `height`. Lazy-load everything below the fold. The hero photo uses `fetchpriority="high"`.
- **Content as data:** non-developers on the team should be able to update the site by editing files.
  ```
  src/content/
    site.json             # email, socials, BitByBit URL, WhatsApp (null until real), registrationsOpen flag
    team/2026-27.json     # [{ name, role, team, email?, photo?, order }]
    team/2025-26.json     # the archive from DEMO_SITE_REFERENCE.md
    events/*.md           # frontmatter: title, slug, date, venue, teamSize, prizePool, status, season, poster, rounds[], gallery[]
  ```
  Validate them with Astro content collection schemas (zod), so a typo breaks the build instead of the page.
- **Folders:**
  ```
  src/pages/        index, events/index, events/[slug], team, bitbybit, join, contact, journal/index, 404
  src/components/   FolderTabs, Folder, Footer, Button, CaseFolder, Exhibit, PersonFile, Stamp, Redacted, TearOffSlips, CopyButton, Segmented
  src/styles/       tokens.css, base.css, motion.css, textures.css
  public/brand/     logo.svg, paperclip.svg, grain.webp, perforation.svg
  public/images/    team/, events/
  ```
- **Assets from the demo:** download the posters, the group photo and the team portraits listed in `DEMO_SITE_REFERENCE.md`. **Ask the user before downloading.** Better still, get the originals from the demo team. Rename files to `firstname-lastname.webp`.
- **Performance budget** (mid-range Android, 4G):
  - LCP under 2.0s
  - CLS under 0.05
  - INP under 200ms
  - Home JS under 40KB gzipped
  - Total home weight under 1.2MB
  - Fonts: at most 3 files preloaded
- **SEO and sharing:**
  - Title template `Page · TeamCodeLocked`
  - A meta description on every page
  - An OG image per event (the poster on a paper ground)
  - `Organization` and `Event` JSON-LD
  - `sitemap.xml`, `robots.txt`
  - A canonical URL (the domain is to be decided)
  - Theme colour `--ink`
  - A favicon and app icons from the real logo (not the default Vite logo)
- **Accessibility, WCAG 2.2 AA:**
  - A skip link, landmarks, alt text for every image (names for portraits)
  - Visible labels and 44px tap targets
  - Focus that is always visible
  - `aria-live` for copy feedback
  - The menu announces its state
  - `lang="en"`
  - The site works fully without JavaScript, apart from the moments
- **Deploy:** the output is a plain static `dist/` folder, so it works on **Vercel, Render (Static Site) and GitHub Pages** with no code changes:
  - **Vercel:** auto-detects Astro. Preview deploys per branch.
  - **Render:** Static Site, build command `npm run build`, publish directory `dist`.
  - **GitHub Pages:** the official `withastro/action` workflow. If it's served from `<user>.github.io/team-codelocked/`, set `site` and `base: '/team-codelocked'` in `astro.config.mjs` from an env var, and use `import.meta.env.BASE_URL` for every internal link and asset path, so one build works on every host.
  - Never use server-only features (SSR, API routes, middleware), or the site stops working on GitHub Pages.
- **Git:**
  - Work on a branch called `website`
  - Commit after each phase
  - Commits are authored as **priyanshusharan-cmd**, with **no AI co-author trailers**

---

## 9. Inspiration: study these, copy nothing

Study each one for **what it does well**. Don't take its layout, art, palette, code or signature effect.

| Site | Study it for | Leave behind |
|------|--------------|--------------|
| [Hack Club](https://hackclub.com) | A student community that feels human: warm, specific copy, real members, playful but credible | Its red palette and illustration style |
| [Hack the North](https://hackthenorth.com) | A handmade physical world as the hero: crafted objects on a path, so the event feels like a place | The illustrated diorama itself |
| [The Recurse Center](https://www.recurse.com) | Restraint: one confident sentence, real photos, quiet layout, plain-spoken copy | Its minimalism taken to the point of blandness |
| [MIT Mystery Hunt / Puzzle Club](https://puzzles.mit.edu) | Genuine puzzle culture: the countdown, the ritual, the in-joke | The wood skeuomorphism |
| [Cal Hacks](https://calhacks.io) | Each event gets its own typographic lockup | Its glowing type |
| [Supabase Launch Week](https://supabase.com/launch-week) | Presenting a series of events as a season, day by day | The SaaS-dark styling |
| [Emil Kowalski](https://emilkowal.ski) · [animations.dev](https://animations.dev) | The bar for motion: easing, timing, interruptibility | n/a |
| [Rauno Freiberg](https://rauno.me) | Micro-interaction detail, and the parts of the browser you didn't draw | His personal aesthetic |
| [Linear](https://linear.app) | Typographic precision and restrained, purposeful motion | The dark-gradient product look |
| [Teenage Engineering](https://teenage.engineering) | Precise but playful: labels, grids, mono used for real data | The product-catalogue structure |
| [Are.na](https://www.are.na) · [Cosmos](https://www.cosmos.so) | Boards and collections that feel organised, not messy | Their minimal greyscale |
| [MLH](https://mlh.io) | The conventions of student-hacker event listings | The corporate-league feel |
| [The Sensemakers Club](https://www.designrush.com/best-designs/websites/the-sensemakers-club-website-design) | Member photos unified by one colour treatment, so a group reads as a community | Its red overlay |

**Galleries to browse during Phase 2** (search "community", "club", "event", "festival", "paper", "collage", "editorial"):
- [godly.website](https://godly.website)
- [Awwwards](https://www.awwwards.com)
- [Minimal Gallery](https://minimal.gallery)
- [SiteInspire](https://www.siteinspire.com)

Save 5–8 references into `.impeccable/inspiration.md`, each with one line on **what quality** to borrow.

---

## 10. Anti-slop checklist (any one of these fails a page)

**Layout:**
- [ ] No three equal icon + heading + text cards as the page structure
- [ ] No hero-metric template (big number, small label)
- [ ] No eyebrow or kicker labels above headings
- [ ] No 01/02/03 numbering unless the order matters
- [ ] No cards inside cards
- [ ] No tilted, scattered or rotated elements
- [ ] No uneven left and right edges
- [ ] No sideways scrolling at 320px

**Surface:**
- [ ] No gradient text
- [ ] No glassmorphism
- [ ] No neon glows
- [ ] No coloured bar down one side of a box
- [ ] No hard offset shadows
- [ ] No violet
- [ ] No generic gradient blobs
- [ ] No hex-pattern wallpaper
- [ ] No terminal or Matrix costume
- [ ] No monospace used as decoration
- [ ] No emoji icons
- [ ] No zig-zag polygons faking torn paper

**Content:**
- [ ] No invented stats, testimonials, sponsors, quotes or member counts
- [ ] No stock photos, no AI-generated people
- [ ] No lorem ipsum
- [ ] No banned words (§4.5)
- [ ] No descriptive captions under photos
- [ ] Never more than two hero buttons

**Motion:**
- [ ] No fade-in-on-scroll everywhere
- [ ] No parallax text, no scroll-jacking
- [ ] No `transition: all`
- [ ] No `ease-in`
- [ ] No `scale(0)`
- [ ] No staggers on menus or filters
- [ ] No entrance animation that delays a click
- [ ] No hover effects on touch devices

**The human test:**
- [ ] Show the home page to someone who doesn't know the club. Ask, "Did a student club make this, or an AI tool?" If they hesitate, it isn't done.

---

## 11. Phases

Each phase lists its goal, steps, the skills it uses, what it produces, and when it counts as done. **Stop at the end of each phase for review.** Run `/learn-taste` at every phase end.

### Phase 0: Set up and gather sources
**Goal:** a clean start with every input in hand.
1. Create the `website` branch from the current branch. Confirm the git author is `priyanshusharan-cmd`.
2. Read `TEAM_DETAILS.md`, `DEMO_SITE_REFERENCE.md` and this file in full.
3. Make `OPEN_QUESTIONS.md` from the "still missing" list in §1, plus:
   - Exact brand colours and the logo SVG
   - A real WhatsApp link
   - The application form URL and dates
   - Whether the BitByBit prices are current
   - Consent for photos and emails
   - Names for the "Team Member" photos
   - The domain
4. **Ask the user for permission** to download the demo's posters, group photo and portraits, or get them from the demo team. Save them under `public/images/` with clean names.

**Produces:** the branch, `OPEN_QUESTIONS.md`, the `CONSENT.md` checklist, and the assets (or a plan to get them).
**Done when:** everything the build needs is either in hand or marked as an open question.

### Phase 1: Product context
**Goal:** a shared understanding of who the site serves and how it sounds.
1. Run `/impeccable init` and give it §3 (audience) and §4.5 (voice). It writes `PRODUCT.md`.
2. Record as brand commitments: the chosen direction (§4), the banned words, "never invent facts", and the pun budget.
3. Draft a one-line **voice card** and a **fact sheet** (taste skill, `copy-voice.md`).

**Produces:** `PRODUCT.md`.
**Done when:** the user agrees `PRODUCT.md` sounds like the club.

### Phase 2: UX shape and visual world
**Goal:** a locked information architecture and visual direction before any page code.
1. Run `/impeccable shape` on the home page and the site map in §7. Confirm the section order, the main action, and each page's mode.
2. **(Done 2026-11-28: The Case File was locked; see §4 and §12a.) The visual world:** the user asked for "the best and most beautiful design… like a human made it" and wants to choose. Run Impeccable's direction round (`concept-seed`) and present 2–3 strong, fully realised directions, with "The Noticeboard" (§4) as one candidate. Show each as a real first-screen preview of the home page, using real content and the real group photo and posters, not mood boards. The user picks, then lock the choice into `PRODUCT.md` and `DESIGN.md`. If another direction wins, update §4–§5 of this file to match before Phase 3. The motion rules (§6), the anti-slop checklist (§10) and the page specs (§7) apply whichever direction is chosen.
3. Browse the inspiration in §9 and save 5–8 references to `.impeccable/inspiration.md`.
4. Make the textures: a paperclip SVG (traced from a real clip), the manila paper grain, and the perforation edge for the slips. Check licences for anything sourced.

**Produces:** a section-by-section plan for every page, the inspiration notes, and the texture assets.
**Done when:** the user approves the plan and direction (the page plans list each section's one idea, its picture and its screen count).

### Phase 3: The design system
**Goal:** tokens and components that make every page consistent.
1. Sample the real colours from the logo and Instagram, and replace the placeholders in §5.1. Check every text and background pairing for contrast.
2. Confirm the type with `/impeccable typeset`. Self-host and subset the fonts.
3. Write `tokens.css` (colour, type, space, radius, shadow, motion), `base.css` (reset, the browser parts from §5.1, focus rings, selection) and `motion.css` (§6.1–6.3, including the reduced-motion block).
4. Build the components from §5.6 on a hidden `/_lab` page that shows every state. Delete it before launch, or exclude it from the build.
5. Write `DESIGN.md`: tokens, components, the motion spec and the do/don't lists.

**Produces:** the token files, the components, `/_lab` and `DESIGN.md`.
**Done when:** every component works with mouse, touch and keyboard at 390 and 1440, and contrast passes.

### Phase 4: Content and copy
**Goal:** every word written before the layout fills up.
1. Fill `src/content/` from the sources of truth: `site.json`, both team files and three event files.
2. Write all the page copy into `copy/*.md` in the club's voice. Each heading has a noun, each button is a verb plus an object, and the hero has one hard fact.
3. Lint it with the taste skill's `copy-lint.mjs` on the drafts. Fix every FAIL, and every WARN unless there's a stated reason. Read each page aloud.
4. Check every fact against `TEAM_DETAILS.md`. Mark anything uncertain with `data-assumed` and list it in `OPEN_QUESTIONS.md`.

**Produces:** the content files, the copy drafts, and a clean lint.
**Done when:** the user approves the copy.

### Phase 5: Build the pages
**Goal:** every page built, responsive and accessible, with the hover layer but without the authored moments yet.
Build in this order, checking each at 1440 and 390 before moving on:
1. Layout shell: Nav, Footer, skip link, page template, view-transition setup
2. Home (§7.1)
3. Events list and event detail (§7.2, §7.3)
4. Team (§7.4)
5. BitByBit (§7.5)
6. Join, both states (§7.6)
7. Contact (§7.7)
8. 404 (the plain version first)

**Skills:**
- `/design-taste-frontend` for the marketing pages (Home, BitByBit, Join). Run its checker and finish gate:
  - Pass `--kind software` for the club
  - Use the gate's `--start http://localhost:4321/` for the Astro dev server
- `/impeccable`, which reads `craft-floor.md` before every UI edit.

**Produces:** all pages, linked up, using real content.
**Done when:**
- Every page renders at every breakpoint from 1440 down to 320, with no sideways scroll and no overlaps
- Every link works
- The taste gate reports `GATE: PASS` or `OPEN` on the marketing pages

### Phase 6: Motion
**Goal:** the authored moments and a refined hover layer, built to Emil's standard.
1. Run `/find-animation-opportunities` across the site (read-only). Compare its list with §6.4, and drop anything that doesn't have a clear purpose.
2. For each moment (A–F), use `/animate` to set the purpose, properties, curve, duration, interruption and exit, and `/choreograph` where several elements move together. Write each timeline table into `DESIGN.md`.
3. Build the moments in this order:
   1. The hover and press layer (§6.3)
   2. The mobile menu (§6.5)
   3. The copy button
   4. The segmented control and team filter (E)
   5. View transitions (C)
   6. Tear-off tabs (B)
   7. Open the file + Declassify (A)
   8. Photos develop (D, once photos exist)
   9. The 404 puzzle (F)
4. Check the details with `/emil-design-eng` and `/apple-design`: where popovers grow from, how springs settle, what happens when you interrupt.
5. Run `/animation-performance`. Everything should run at 60fps on a mid-range Android, using only compositor-friendly properties.
6. **Reduced motion:** turn on the OS setting and walk the whole site. Nothing moves, and nothing stays hidden.
7. **Slow motion:** play each moment at 5× the duration and look for jumps, flashes of the final state, or uneven timing.

**Produces:** the motion built, and the timelines documented.
**Done when:** `/review-animations` has no major findings.

### Phase 7: Mobile, edge cases and hardening
**Goal:** it holds up on real phones and with messy data.
1. Run `/mobile-native`:
   - Use `100dvh`, not `100vh`
   - Inputs are 16px or larger, so iOS doesn't zoom
   - Set `-webkit-tap-highlight-color`
   - Respect safe areas
   - Hover stays off on touch
   - Stop overscroll on the menu
2. Run `/break-ui` on the person cards, event cards, contact table and tear-off tabs, with:
   - The longest real name ("U. Md. Muzammil Shaik")
   - The longest email (`aakanshyaagarwalla.cs24@bmsce.ac.in`)
   - A one-letter name
   - A missing photo
   - Zero upcoming events
   - Twelve upcoming events
   - A very long event title
   - Missing venue or prize
   Fix each breakage, and show a "worst case" toggle on `/_lab`.
3. Run `/impeccable harden` and `/impeccable adapt`:
   - Empty, error and loading states
   - The no-JavaScript fallback
   - What happens when images fail
   - Print styles for event pages
4. Test on at least one real Android phone and one real iPhone (or Safari).

**Produces:** fixes and a working worst-case view.
**Done when:** nothing breaks at 320px, and both phones feel native.

### Phase 8: Quality checks
**Goal:** measured quality, not "looks fine to me".
1. Run `/impeccable audit` (accessibility, performance, responsive) and fix everything.
2. Run `/impeccable critique` (a heuristic UX review). Fix anything rated high, or explain why not.
3. Run the taste skill checks: `copy-lint`, `consistency.mjs`, the layout `check.mjs`, `perf.mjs` and `gate.mjs` on Home, BitByBit and Join.
4. Run Lighthouse on every page (mobile). Aim for 95+ in Performance, Accessibility, Best Practices and SEO, and meet the budgets in §8.
5. Run `/review-animations` and `/improve-animations` for a final motion audit. Use `/remove-animations` if anything feels like too much.
6. Accessibility by hand:
   - Use the whole site with the keyboard only
   - Spot-check with a screen reader (VoiceOver)
   - Zoom to 200%
7. Do the human test from §10 with three people outside the team.

**Produces:** an audit report with everything fixed or waived (with reasons).
**Done when:** every check passes or its waiver is written down.

### Phase 9: Polish and launch
**Goal:** finish the craft details and launch.
1. Run `/impeccable polish` on every page.
2. Look again the next day with fresh eyes. Emil's rule: you see timing problems the next day that you missed while building.
3. Optional: the Journal page (§7.8) and its post template.
4. Remove `/_lab` (or exclude it from the build), fill in the final meta and OG images, and replace the favicon with the real logo.
5. Run `/learn-taste` to save every design correction as a rule in `DESIGN.md`.
6. Commit and push the `website` branch, open a pull request, and deploy a Vercel preview. Ship to production after the team signs off.
7. Update `OPEN_QUESTIONS.md` with whatever is still missing, and write `HANDOFF.md`: how to add an event, add a person, or open registrations, by editing the content files.

**Produces:** the live site, `HANDOFF.md`, and an updated `DESIGN.md`.
**Done when:** the team signs off and the site is live.

---

## 12. Definition of done (the whole site)

- [ ] Every page in §7 is built from real content; nothing is invented
- [ ] Desktop and phone layouts are deliberate, not just squeezed; no sideways scroll at 320px
- [ ] The motion follows §6 exactly, the moments are documented, and reduced motion is respected
- [ ] Contrast meets AA, the site works by keyboard, and screen-reader labels are in place
- [ ] Lighthouse is 95+ on mobile, and the budgets in §8 are met
- [ ] The taste gate passes or is open on the marketing pages, and the Impeccable audit is clean
- [ ] Photo and email consent is confirmed
- [ ] `DESIGN.md`, `PRODUCT.md`, `HANDOFF.md` and `OPEN_QUESTIONS.md` are up to date
- [ ] It passes the human test (§10)

---

## 12a. Decisions log

| Date | Decision | Source |
|------|----------|--------|
| 2026-11-28 | Work on a local `website` branch. **Don't commit or push** until the user says so. | User |
| 2026-11-28 | **Images:** the 3 event posters and the group photo are taken from the demo site as temporary stand-ins, saved in `public/images/events/`. **All portraits are designed placeholders** (initials) until real photos arrive. Replace every stand-in once the originals come in. | User ("Mix") |
| 2026-11-28 | **Portraits, revised:** at the user's request, 12 portraits were copied from the demo as temporary stand-ins: the faculty coordinator, the 6 heads who appear on the demo, Dhruv Kumar Sharma (probably the Marketing Head, unconfirmed), and the 4 named 2025–26 core-committee members. Everyone else gets an initials placeholder. The photos are casual and framed inconsistently (some full-body, mostly 360px), so the portrait design must hold up with mixed photos until matching headshots arrive. Details are in `public/images/team/README.md`. | User |
| 2026-11-28 | The group photo (`utsav-2026-group.jpeg`) was taken at **Mind Snap**: the Mind Snap poster is on the screen behind the group. Use it for the home hero and the Mind Snap page. | Seen in the photo |
| 2026-11-28 | **Show the 2025–26 team archive** with names, behind the year switch. Use placeholders until photos and consent arrive. | User |
| 2026-11-28 | **Stack:** Astro, static output, deployable to Vercel, Render and GitHub Pages (§8). The user left the choice to Claude. Design quality comes first. | User → Claude |
| 2026-11-28 | **The visual direction is not pinned.** Phase 2 presents 2–3 directions, including the Noticeboard, and the user picks. The goal is the most beautiful, human-made-feeling design possible. | User |
| 2026-11-28 | **The site does everything:** it's the club's first official website, so it serves recruiting, events, credibility and BitByBit equally. The home page's primary action is decided in Phase 2 (`/impeccable shape`). | User |
| 2026-11-28 | **What makes the club different (all confirmed):** puzzle and mystery events, its own coding platform (BitByBit), being the tech team of BMSCE, and members building real projects. The tech-team scope is limited to **running its own events and building tools**; tech for college fests is unconfirmed. | User |
| 2026-11-28 | **Voice** (delegated): facts first (copy register 1), with a conversational student edge in the microcopy (register 12). This replaces the "friendly senior" wording in §4.5, because the taste skill flags that warm, wry voice as the model default. The full voice card is in `copy/voice.md`. | User → Claude |
| 2026-11-28 | **Stack confirmed:** Astro, delegated after the user asked for whatever is "easy and has the best design". Recorded in `PRODUCT.md`. | User → Claude |
| 2026-11-28 | **Impeccable's launcher** needs to download a program from GitHub (`impeccable-darwin-arm64` v0.1.31, checksum-verified) for `concept-seed`, `shot` and `detect`. It hasn't been run; ask the user before Phase 2. | Claude |
| 2026-11-28 | **Nav labels are plain and professional** in every direction: About · Events · Team · BitByBit · Join · Contact. Themed names like "Case files" are never used as nav labels; the theme lives in the styling (for example, folder tabs), not the words. | User |
| 2026-11-28 | **The direction round is narrowed to The Case File and The Noticeboard.** Both were built as animated first-screen prototypes in `.impeccable/mocks/motion/` for the user to try before choosing. | User |
| 2026-11-28 | **Direction locked: The Case File.** The user liked both finalists, then left the choice to Claude, who picked The Case File as more distinctive and grounded in the club's mystery events. The Noticeboard's tear-off slips carry over to Join and Contact. The direction contract is in `.impeccable/surfaces/src-pages-index-astro.md`, and §4–§5 and §6.4 were rewritten to match. | User → Claude |
| 2026-11-28 | **Colour changed to a navy-blue folder.** The user said the manila yellow "feels like vomit" and picked navy blue from three options (steel grey, off-white, navy). Paper (`#F6F1E4`) survives only on labels, tags and slips. | User |
| 2026-11-28 | **Less text, and the club name is the headline.** The hero is now just "TEAM CODELOCKED" (with "CODELOCKED" as the redacted word that declassifies), one line ("The tech club of BMS College of Engineering."), and two buttons. "We set the puzzles" is gone. Keep this low text level on every page. | User |
| 2026-11-28 | **The component test page (`/lab`) was removed**, because the user found it unprofessional and empty. Components are now checked on the real **home page** (`src/pages/index.astro`), which was built early with short text. Person cards show the email as a plain link, with **no copy button**. Aakanshya's photo was sideways and is now rotated upright. | User |
| 2026-11-28 | **Pages built:** Home, Events, the 3 event pages, Team (year switch plus a team filter with FLIP reflow), Join, Contact and 404 (a locked-case puzzle). The hero facts line was removed and the buttons moved lower. **The BitByBit nav tab links straight to https://bitbybit-9h8e.vercel.app/** (it opens in a new tab), so there is no separate /bitbybit page. Inner page headers animate on every visit; the home hero animates once per session. | User |
| 2026-11-28 | **Scatter-to-place motion (user request):** on the team boards (home and Team page), photos start scattered across the screen (up to about 60vw and 78vh away, tilted up to 22°, at 82% size) and settle into the grid as the section scrolls in. It is scroll-driven CSS (`animation-timeline`), uses transform only, and each photo lands slightly after the previous one. It is off under reduced motion, and in browsers without support the grid simply renders in place. This is the brief overriding the default "no scroll-linked motion" rule. Team layout: the faculty coordinator as a large feature card, and the heads in a 3×3 grid. In "What we do", "Puzzle events" became "Events" and the "Five crews" block became "The team" (member photos linking to /team). | User |
| 2026-11-28 | **Team motion toned down:** the user found the full-screen scatter too dramatic. The home team board is back to the faculty feature card plus the 3×3 heads. The heads drift in gently (±12vw, up to 10vh, ≤8° tilt, 92% size) and settle as the section scrolls in, while the faculty card stays the calm anchor. **No team animation on the Team page.** "Utsav 2026" was renamed **"Past events"**, which on desktop is now a pinned strip that slides left to right as you scroll down (scroll-driven); on phones it is a swipeable row. | User |
| 2026-11-28 | **Past events became an endless drifting strip.** The cards are back to the original size, and the strip moves on its own in a loop (about 27px/s). You can move it yourself with the trackpad, a sideways scroll, a drag or the arrow keys, and it pauses for about 2s after you touch it. It also pauses on hover and keyboard focus, and doesn't move at all under reduced motion. **No pause button** (the user asked for it to be removed; hover and focus pausing covers it). **Team scatter, final:** every photo, faculty included, starts about a quarter-screen away and tilted 9–14°, then settles as you scroll, with the faculty card landing last. | User |
| 2026-11-28 | **Interaction fixes:** the "What we do" blocks are all links (Events → /events, BitByBit → the BitByBit site, The team → /team). Tear-off slips no longer disappear: Email copies and says "Copied to clipboard", and the others are real links that open in a new tab. The footer is tighter. **Team filter motion, relaxed:** non-matching cards slide out to the right (480ms); staying cards glide to their new spots (560ms); returning cards slide back in from the right; new cards (after a year switch) rise from the bottom (600ms, 45ms stagger). | User |
| 2026-11-28 | **Brand evidence from the posters:** the logo is a hexagon "C" outlined in navy, blue and cyan, with notched corners. The Utsav 2026 posters use bold heavy sans lettering, grainy orange-to-red-to-violet gradients and cut-out photo objects (a camera, an eye, a stopwatch). Those are the fest posters' palette, not necessarily the club's brand colours. Note: the poster violet conflicts with the taste skill's "no violet" rule; the posters are shown as-is, as content, but the site's own design never uses violet. | Seen in the posters |

---

## 13. When rules conflict

Higher in the list wins:
1. **Facts** in `TEAM_DETAILS.md`, and the user's own instructions
2. **This prompt's pinned decisions**: the Case File direction (and its direction contract), the motion spec and the page specs
3. **Impeccable's craft-floor bans** (no eyebrow labels, no gradient text and so on) and its accessibility floor
4. **Emil's motion rules** (`emil-design-eng`, `animate`, `choreograph`)
5. **The taste skill's house rules and gate.** These apply fully to Home, BitByBit and Join. On Team, Events, event detail and Contact (reading and task pages), its "one section per screen" rule relaxes, because those pages are as long as their content needs.

**Known conflicts, already settled:**
- **Taste's "no tilt":** nothing tilts. Folders, labels, tags and stamps are all straight (§4.3).
- **Taste's "no captions" vs person cards:** a name and role are content, so they stay. Descriptive photo captions are still banned.
- **Taste's "effects only on tech pages":** this is a tech club, so one effect is allowed. It's Declassify (A). There are **no** shader backgrounds; the manila world doesn't need them.
- **Emil's tear-off slip fall vs "never animate keyboard actions":** a keyboard press copies without the fall animation, and a pointer gets the fall.
