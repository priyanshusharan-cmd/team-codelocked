# Contact page

Static HTML/CSS/JS, no build step.

```bash
python3 -m http.server 5173 --directory contact
```

## Images

Swap the placeholders in `assets/placeholders/` (`team`, `orientation`, `utsav`, `bitbybit`) for real photos and update the `src` in `index.html`. Images are cropped to fit.

## Scroll effect

Cards sit in their grid slots. `script.js` offsets them to the scattered spots in `SCATTER` and brings them back as you scroll through `.scrolly`.

## To do

- [ ] Real photos
- [ ] Official club email
- [ ] Connect the form to a form service (static site)
