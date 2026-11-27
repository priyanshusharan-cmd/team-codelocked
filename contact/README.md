# Contact page

Contact page for the TeamCodeLocked website. Plain HTML, CSS and JS with no build step, so it can be ported into whatever stack the main site uses.

## Run it

```bash
python3 -m http.server 5173 --directory contact
```

Then open http://localhost:5173.

## How the scroll effect works

- `.scrolly` is a tall section (260vh) with a sticky, full-screen `.stage` inside.
- The cards sit in their final CSS grid slots. On load, `script.js` measures each slot and moves each card with a transform to a scattered spot around the hero. The spots are set in the `SCATTER` object, with separate desktop and mobile layouts.
- As you scroll through the section, each card moves from its scattered spot back to its slot. The hero fades out, and then the frame, the header and the quick-contact dock fade in.
- With `prefers-reduced-motion`, the animation is skipped and the page shows the hero followed by the grid.

## Swapping in real images

Placeholder images are in `assets/placeholders/`:

| File | Card |
|------|------|
| `team.svg` | Core team (top left) |
| `orientation.svg` | Club Orientation '26 (wide, top) |
| `utsav.svg` | Utsav '25 (tall, right) |
| `instagram-thumb.svg` | Instagram link card thumbnail |
| `bitbybit.svg` | BitByBit 2.0 |

Add the real photos (for example `assets/team.jpg`) and update the `src` and caption in `index.html`. The cards crop images to fit (`object-fit: cover`), so any aspect ratio works.

## Still to do

- [ ] Real photos for the cards
- [ ] Official club email (the "Official email coming soon" line)
- [ ] Hook up the form to a backend or form service (see `TODO` in `script.js`)
- [ ] Confirm the 2026–27 contact names
- [ ] Point the nav links at the real pages
