# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

**Delegated to Claude: Astro, with static output.** The user noted that React/Next.js is the most common stack and asked for whatever is easiest and gives the best design.
- **Why Astro:** it's built for content sites. Pages are plain HTML and CSS that Claude can art-direct precisely, and it ships the least JavaScript.
- **Easy to update:** events and people live in JSON and markdown files that any member can edit.
- **Deploys anywhere:** one static `dist/` build works on all three targets the user named: Vercel, Render (Static Site) and GitHub Pages.
- **Rules:** no SSR, API routes or server features, because GitHub Pages can't run them. React components can be added inside Astro later if contributors want them.

## Users

This is the club's **first official website**, and it has to serve everyone who looks the club up (the user confirmed it "has to do everything"):

- **BMSCE students, freshers and juniors especially**, mostly on phones. They arrive from Instagram, orientation, posters and WhatsApp, and want to know what the club does, what's coming up, and how to get involved.
- **Event participants**, who want an event's date, venue, team size, prize pool, rounds and registration.
- **Current members**, who want the team list, BitByBit and contacts.
- **Faculty, sponsors and recruiters**, who are judging whether this is an organised, credible club.
- **Competitive coders**, who want BitByBit's contests and practice.

## Product Purpose

One home for everything TeamCodeLocked does: who the club is, its events (upcoming and past), its people, BitByBit, how to join and how to get in touch.

**Success means:**
- A student finds out what the club does, what's coming up, how to join and who to contact within seconds.
- An outsider leaves convinced it's a real, active, well-run club.

## Positioning

All four of these are confirmed true by the user. Together they're something no other BMSCE club can claim:

1. **Puzzle and mystery events that nobody else runs.** At Utsav 2026 the club ran:
   - **The Last Block:** a Jenga mystery
   - **Mind Snap:** memory trials and a photo treasure hunt
   - **The Challenge Room:** blindfold trials, sensory puzzles, QR chains and a digital escape room
2. **Its own coding platform: BitByBit**, built and run by the club, with curated DSA problems, live contests, a leaderboard, an AI code coach, streaks and certificates.
3. **The tech team of BMSCE.** Confirmed scope: it **runs its own events** and **builds tools and products**. It is *not* confirmed that the club handles tech for college fests, so don't claim it.
4. **Members build real projects together.**

## Operating Context

- **Instagram (`@teamcodelocked`) is the main channel:** announcements, recruitment and committee reveals. LinkedIn is secondary.
- **Event posters** are made for each event, often in collaboration with Utsav and sponsors such as Craveman, whose logo appears on the Mind Snap poster.
- **The yearly rhythm:**
  - Club Orientation (start of the academic year, around October), when recruitment happens
  - Utsav, the college fest (April)
  - BitByBit contest seasons (for example, BitByBit 2.0 weekly contests from June 2026)
- **Campus venues:** PJ Block, BMSCE, Basavanagudi, Bengaluru.
- **Committee structure:** Faculty Coordinator, Club Coordinators or Team Heads, Core Committee, Organising Committee and Volunteering Committee.
- **Teams:** Tech, Design, Event Management, Marketing, and Sponsorship & Social Media.

## Capabilities and Constraints

- **A static site with no backend.** Content is stored as data files, and the site must work on Vercel, Render and GitHub Pages.
- **No contact form** unless the team sets up a form service (Formspree or Web3Forms). The site must never show a form that doesn't actually send.
- **Registrations open or closed** is controlled by one content flag.
- **Not decided or not known yet** (the site must not guess):
  - **Who can join** (any branch, or mainly CSE). The user is checking.
  - The 2026–27 Organising and Volunteering Committees
  - The WhatsApp community link
  - The application form
  - The founding year
  - The domain
  - Exact brand colours and the logo file
  - Whether the BitByBit 2.0 prices and prizes are still current
  - Full names for some heads
  - Whether "Dhruv" (Marketing Head) is Dhruv Kumar Sharma

  The full list is in `OPEN_QUESTIONS.md`.
- **Workflow:** work on the local `website` branch, and don't commit or push until the user says so. Commits are authored as `priyanshusharan-cmd`, with no AI co-author lines.

## Brand Commitments

- **Name:** TeamCodeLocked. Short form: **TCLD**.
- **Logo:** a hexagon "C" outlined in navy, blue and cyan, with notched corners. It appears on the event posters. The high-res source file is still needed.
- **Existing brand material** (evidence for direction, not yet a pinned visual rule):
  - Instagram posts use black, blue diagonal stripes and torn-paper textures.
  - The Utsav 2026 posters use heavy bold sans lettering, grainy orange-to-red-to-violet gradients, and cut-out photo objects.
- **The user's binding requirement for the design:** *"the best and most beautiful design… it should feel like a human made it, not like AI slop."* It must also feel professional, breathable and animated with purpose. The user will choose between design directions in Phase 2.
- **Never copy the other team's demo site** (`club-website-demo-v2.vercel.app`): not its design, layout, code, palette or fonts. Only its content and assets may be reused, as temporary stand-ins.
- **Voice** (delegated to Claude; see `copy/voice.md`): facts first, with a conversational student edge. No corporate filler, and none of the default model voice.

## Evidence on Hand

- **`TEAM_DETAILS.md`:**
  - Club facts, links and the official email teamcodelocked@gmail.com
  - Faculty Coordinator Dr. Namratha M
  - The 2026–27 heads and their emails
  - Events, BitByBit details, and the 2025–26 committees
- **`DEMO_SITE_REFERENCE.md`:** page copy, the round-by-round write-ups for the three Utsav 2026 events, the 2025–26 team list, and image links.
- **`public/images/events/`:** the 3 Utsav 2026 posters and a group photo taken at Mind Snap. These are temporary copies from the demo.
- **`public/images/team/`:** 12 temporary portraits: the faculty coordinator, 6 heads, a probable Marketing Head, and 4 members of the 2025–26 core committee. They're casual and framed inconsistently; see that folder's `README.md`.
- **Absent, so never make these up:**
  - Testimonials or quotes
  - Member counts or other stats
  - A sponsor list (beyond logos printed on posters)
  - Event gallery photos
  - Awards
  - The founding year
  - Photos of Niyati Jain and Anagha Avinash

## Product Principles

1. **Real beats impressive.** Use only true facts, real people and real photos. A designed empty state is always better than an invented number, quote or sponsor.
2. **Everything findable in seconds.** Event details in five seconds, any contact in one tap, the way to join from any page.
3. **Made by students, for students.** It should read and look like the club made it with care, specific and personal, and never like a template or an AI tool.
4. **Credible to outsiders.** The same site has to reassure a faculty member, a sponsor and a recruiter that this is an organised, active club.
5. **Easy to keep alive.** Any member can add an event, a person or a photo by editing a content file, without touching the layout.

## Accessibility & Inclusion

- **Target:** WCAG 2.2 AA, as set in `WEBSITE_PROMPT.md`.
- **Most visitors are on phones,** often outdoors on campus, so contrast and tap sizes matter.
- Respect `prefers-reduced-motion`.
- The site must work with a keyboard and a screen reader.
