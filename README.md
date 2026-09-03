# Abhishek Gupta — AI Engineer Portfolio

Live: https://abhi-2023.github.io/Abhishek-Gupta-Portfolio/

Single-page portfolio. Dark, hard-edged, one accent colour (#FFB347). The centrepiece
is the "journey reel" — a 28-second animated film sequence built entirely from CSS
transforms and a requestAnimationFrame loop, with all sound synthesised live via the
Web Audio API (no audio files).

## Stack

Plain HTML, inline styles, vanilla JS. No build step, no dependencies to install.
Fonts (Instrument Serif, Manrope, JetBrains Mono) load from Google Fonts.

## Running locally

Serve the folder over HTTP and open it:

    python3 -m http.server 8000

Then visit http://localhost:8000

Opening index.html directly from the filesystem also works.

## Deploying

GitHub Pages, from the root of the default branch. The .nojekyll file is required —
without it Jekyll processes the repo and breaks asset paths.

## Notes

- The contact form has no backend. It validates client-side but does not send.
  Wire it to a form service or serverless function before relying on it.
- Sound is off by default and the preference persists in localStorage
  (key: ag-reel-sound).
- All motion respects prefers-reduced-motion: the reel renders one static frame
  and stays silent.
- There is no mobile nav below 760px — the header links are hidden and navigation
  is scroll-only.

© 2026 Abhishek Gupta
