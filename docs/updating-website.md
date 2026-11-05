# Updating krister.ee

Plain static HTML on GitHub Pages (`CNAME` → krister.ee). No build step: edit, commit, push to `master`, live in a minute.

## Files

- `index.html` — the whole site in Estonian. One page, no menu.
- `en/index.html` — English mirror. **Keep the two in sync**: same sections, same order, same links.
- `styles/site.css` — shared styles (black & white, Merriweather).
- `img/profile1.jpg` — photo in the hero.

Other files in the root (`games/`, `toolbox.html`, `piano.html`, …) are separate little tools, not part of the main page.

## Page structure

1. Hero — name, photo, one paragraph on what I'm up to.
2. Kontakt / Contact — call (cal.com), email, LinkedIn/Discord/interview, IBAN.
3. Koolitused / Trainings — topics I talk about + the list of trainings.
4. Vaibkoodijate sõber / A friend of vibe coders.
5. Millega praegu tegelen / What I'm up to now — current gigs, then "Varem / Before".

No prices or service packages on the page. The call is free.

## Adding a training

Add an `<li>` to `<ul id="events">` in **both** files. Order in the HTML doesn't matter — a script sorts them:
upcoming (soonest first) → past (latest first, dimmed, labelled "toimunud"/"past") → items without a date (recordings).

```html
<li data-date="2026-11-18">
  <span class="when">18. nov<small>K 17:00–20:00</small></span>
  <span class="what"><a href="https://fienta.com/et/...">Title</a><span class="where">Place · tasuta · Eesti.ai</span></span>
</li>
```

- `data-date` — start date, `YYYY-MM-DD`. Leave it out for recordings (always shown last, not dimmed).
- `data-end` — optional; for multi-day/multi-week things it stays "upcoming" until this date.
- English page: translate title and place, keep the Estonian Fienta link.

Where to find my dates:
- Eesti.ai events: https://fienta.com/et/o/eestiai — the list loads with JS, so open it in a browser. Search each event page for "Viirsaar".
- Veebikool: https://veebikool.ee/koolituskalender/ and https://veebikool.ee/koolitused/

Past trainings can stay in the list. Delete them once the list gets too long.

## Other common edits

- **Gigs/projects**: the `itemlist` under "Millega praegu tegelen" / "What I'm up to now". Move finished things to "Varem" / "Before".
- **Booking link**: `https://cal.com/krister-viirsaar-zho32l/1h`. Only used in the Kontakt section.
- **Language switch**: the `lang-corner` link at the top of each page (`en/` ↔ `../`).

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000 and http://localhost:8000/en/
```

Sections fade in on scroll (`.reveal`), so a full-page screenshot may show blank sections. Scroll through or run
`document.querySelectorAll('.reveal').forEach(e => e.classList.add('in'))` in the console.
