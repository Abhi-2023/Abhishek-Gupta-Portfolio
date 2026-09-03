# Handoff: AI Engineer Portfolio (Abhishek Gupta)

## Overview

A single-page personal portfolio site for Abhishek Gupta, an AI / GenAI engineer. The page positions him for AI engineering roles: it opens with a headline claim, plays an animated "journey reel" (a driving-down-a-road film sequence with five career milestones), then lays out experience, three selected projects, six capability areas, a tech-stack index, qualifications, and a contact section with a form.

The signature element is the reel — a self-contained, autoplaying, scrubbable animation built entirely from CSS transforms and a `requestAnimationFrame` loop, with synthesized Web Audio sound. It is the piece most likely to need care during reimplementation.

## About the Design Files

**The files in this bundle are design references created in HTML.** They are prototypes that demonstrate the intended look, motion, and behavior — not production code to lift wholesale.

The task is to **recreate these designs in the target codebase's existing environment** (React, Vue, Svelte, Astro, plain static HTML — whatever is already in use), following its established component patterns, styling approach, and libraries. If no codebase exists yet, choose the framework most appropriate for a content-driven marketing/portfolio page (a static site generator such as Astro or Next.js in static-export mode is a good fit) and implement there.

Two specifics about the prototype format worth knowing:

- The prototype is a "Design Component" — an HTML file with a `<x-dc>` template and a `class Component extends DCLogic` logic class, driven by the bundled `support.js` runtime. **`support.js` is prototype scaffolding. Do not port it.** Read the logic class as a specification of behavior and rewrite it in the target framework's idiom.
- All styling in the prototype is **inline `style` attributes**, including pseudo-state attributes like `style-hover`, `style-focus`, and `style-active`. This is a constraint of the prototyping tool, not a design recommendation. Convert these to the codebase's normal styling layer (CSS modules, Tailwind, styled-components, etc.). The `style-hover` / `style-focus` values map directly to `:hover` / `:focus` rules.

## Fidelity

**High-fidelity (hifi).** Colors, typography, spacing, motion timings, and copy are final. Recreate the UI pixel-perfectly using the codebase's existing libraries and patterns. All copy in the prototype is the client's own text and should be reproduced verbatim.

## Design Tokens

### Colors

| Token | Value | Use |
|---|---|---|
| Page background | `#08090A` | Body, dark sections, footer text-on-accent |
| Panel background | `#0B0C0E` | Reel shell, capability tiles |
| Reel interior | `#07080A` | Inside the film frame |
| Surface tint | `rgba(11,12,14,.72)` | Alternating section backgrounds, marquee, footer |
| Image placeholder bg | `#101214` | Behind portrait and project images |
| Accent | `#FFB347` | Primary accent. Exposed as CSS var `--ag-accent` with `#FFB347` fallback |
| Accent light | `#FFD79A` | Link hover |
| Text primary | `#EDEAE4` | Body text, nav |
| Text bright | `#F4F2EE` | Portrait caption name |
| Text secondary | `#A8A9A3` | Paragraph body copy |
| Text muted | `#8C8D88` | Labels, meta, footer, nav rest state |
| Text on light | `#C6C4BE` | Captions over imagery |
| Light section bg | `rgba(228,223,214,.92)` | The "Stack" section (inverted, light-on-dark break) |
| Light section text | `#08090A` | Text inside the Stack section |
| Hairline | `rgba(237,234,228,.1)` | Section dividers |
| Hairline strong | `rgba(237,234,228,.14)` | Row dividers, card borders |
| Border subtle | `rgba(237,234,228,.12)` | Image frame borders |
| Button border | `rgba(237,234,228,.2)` | Secondary/ghost button borders |
| Input border | `rgba(237,234,228,.24)` | Form field underlines |
| Accent wash | `rgba(255,179,71,.08)` | Row and tile hover fill |
| Accent glow | `rgba(255,179,71,.14)` – `rgba(255,179,71,.32)` | Radial ambient glows |
| Selection | bg `#FFB347`, text `#08090A` | `::selection` |

The accent is the only chromatic color in the palette. Everything else is a warm near-black / warm off-white neutral ramp. Do not add a second hue.

### Typography

Three families, loaded from Google Fonts:

```
Instrument Serif — ital 0;1 (regular + italic only, weight 400)
Manrope         — 400, 500, 700, 800
JetBrains Mono  — 400, 500
```

Roles:

- **Instrument Serif 400** — display headlines (`h1`, `h2`), the portrait caption name, project titles, the pull quote, and hero stat numerals. Italic + accent color is used for the emphasized clause in nearly every headline (e.g. "survive *production*.").
- **Manrope 800 uppercase** — heavy poster type. Used for reel chapter titles, the Stack section's giant wordmark, and stack row numerals/labels. Tight negative tracking (`-0.03em` to `-0.05em`).
- **Manrope 400/500/700** — body copy (400), `h3` subheads (700), UI labels (500).
- **JetBrains Mono 400/500** — every label, eyebrow, nav item, button, HUD readout, and meta line. Always uppercase with wide tracking (`.1em`–`.3em`), sizes 9.5–13px.

Key type sizes (all `clamp()`-fluid unless noted):

| Element | Size | Line height | Tracking |
|---|---|---|---|
| Hero `h1` | `clamp(42px, 7.4vw, 108px)` | `.96` | `-0.025em` |
| Section `h2` | `clamp(32px, 5.2vw, 74px)` | `1` | `-0.02em` |
| Work / Capabilities `h2` | `clamp(30px, 4.6vw, 66px)` | `1.02` | `-0.02em` |
| Contact `h2` | `clamp(34px, 6vw, 88px)` | `.98` | `-0.025em` |
| Stack wordmark | `clamp(42px, 9vw, 132px)` | `.84` | `-0.045em` |
| Pull quote | `clamp(28px, 4.4vw, 62px)` | `1.04` | `-0.02em` |
| Reel chapter title | `clamp(32px, 5.8vw, 82px)` | `.9` | `-0.04em` |
| Project `h3` | `clamp(28px, 3.6vw, 48px)` | `1` | `-0.02em` |
| Hero stat numeral | `clamp(32px, 3.8vw, 50px)` | `1` | — |
| `h3` subhead (work rows) | `17px` / weight 700 | `1.35` | — |
| `h3` subhead (tiles) | `19px` / weight 700 | `1.25` | — |
| Body paragraph (hero) | `clamp(15px, 1.15vw, 17.5px)` | `1.7` | — |
| Body paragraph (sections) | `15–16px` | `1.7` | — |
| Small body (tiles, meta) | `14.5px` | `1.65–1.7` | — |
| Mono label | `9.5–11px` | `1` | `.1em`–`.22em` |

Body paragraphs are capped by `ch` measure, not px: `60ch` (hero), `62ch`, `66ch`, `68ch`, `34ch` (reel chapter copy), `26ch` (pull quote), `24ch` / `20ch` (short headlines). Use `text-wrap: pretty` on paragraphs and `text-wrap: balance` on the pull quote.

### Spacing & layout

- Content container: `max-width: 1400px`, centered.
- Horizontal gutter: `clamp(16px, 4vw, 56px)` — used on every section and the header.
- Standard vertical section padding: `clamp(58px, 8vw, 120px)`.
- Hero top padding: `clamp(112px, 16vh, 190px)`; bottom `clamp(44px, 6vw, 76px)`.
- Stack section padding: `clamp(96px, 11vw, 168px)` (extra, because of the gradient transition into light).
- Qualifications padding: `clamp(52px, 7vw, 100px)`.
- Common inter-block rhythm: `clamp(24px, 3vw, 40px)`, `clamp(30px, 4vw, 54px)`, `clamp(38px, 5vw, 62px)`.
- Grid gaps: `clamp(26px, 5vw, 76px)` (two-column splits), `1px` for hairline-separated grids (tiles, contact cards — the parent's background color shows through as the divider).

### Borders, radius, shadows

- **Border radius is effectively zero everywhere.** The design is deliberately hard-edged. The only exceptions: `border-radius: 50%` on small status dots and on the circular Synthr project image.
- Borders are `1px solid` hairlines from the neutral ramp. In the light Stack section they become `2px solid #08090A`.
- One shadow style, on primary-button hover only: `0 18px 40px -18px rgba(255,179,71,.7)`.
- Stack section chips use a hard offset shadow: `3px 3px 0 #08090A` with a `2px solid #08090A` border — an intentionally "sticker" treatment scoped to that section.

### Motion

Easing: `cubic-bezier(.16,1,.3,1)` for everything with character (entrances, hovers, lifts). Linear for continuous loops. Transitions on interactive elements are `.25s`–`.4s`.

Named keyframes (all defined in the prototype's `<style>` block):

| Name | Effect | Timing |
|---|---|---|
| `agUp` | translateY 110% → 0 (masked line reveal) | `.8s` cubic-bezier(.16,1,.3,1) |
| `agFade` | opacity 0 → 1 | `.6s`–`.9s`, staggered `.1s`–`.6s` |
| `agMarquee` | translateX 0 → -50% | `26s` linear infinite |
| `agBlink` | opacity 1 → .25 → 1 | `1.4s` / `2s` ease-in-out infinite |
| `agFloat` | translateY 0 → -12px → 0 | `10s` ease-in-out infinite |
| `agGlow` | opacity .5 → .85, scale 1 → 1.08 | `9s`–`12s` ease-in-out infinite |
| `agRushL` / `agRushR` | dash streaks flying from the vanishing point outward, scale .05 → 2.4 | `1.1s` linear infinite, 4 staggered instances per side |
| `agDust` | drifting particle | — |
| `agSprocket` | film-perforation strip scroll, background-position 0 → 34px | `.9s` linear infinite |
| `agFlicker` | opacity .35 → .8, `steps(2, end)` | `.18s` infinite |

`@media (prefers-reduced-motion: reduce)` kills all animations and transitions globally. The reel's JS also checks this and renders a single static frame instead of running its loop — replicate both.

## Screens / Views

One page, nine stacked regions. Anchor ids are used for nav.

### 1. Global chrome

**Scroll progress bar** — fixed, full width, `2px` tall, `z-index: 900`, track `rgba(237,234,228,.08)`, fill accent. Width is set from scroll position as a percentage.

**Header** — fixed, `z-index: 800`, `background: rgba(8,9,10,.72)` with `backdrop-filter: blur(20px) saturate(1.2)`, bottom hairline. Inner row: `max-width: 1400px`, `padding: 14px <gutter>`, flex with `justify-content: space-between`, `gap: 20px`.

- Left: monogram + name. Monogram is a `26×26` square, `1px` accent border, accent text, JetBrains Mono 500 10px, reading `AG`. Name is Manrope 800 13.5px, `-0.01em`.
- Center: nav — JetBrains Mono 400 10.5px, `.14em` tracking, uppercase, color `#8C8D88`, `gap: clamp(14px, 2vw, 30px)`. Each item has `padding: 5px 0` and a transparent `1px` bottom border that becomes accent on the active section (scroll-spy). Hidden below 760px.
- Right: "Open to roles" pill — ghost button (`1px rgba(237,234,228,.2)` border, transparent bg, `#EDEAE4` text, `padding: 10px 15px`, mono 10.5px `.12em` uppercase) with a `6px` accent dot running `agBlink 2s`. Hover fills accent with `#08090A` text.

**Ambient canvas** — a `position: fixed; inset: 0; z-index: -1` full-viewport `<canvas>` behind everything, drawing a slow drifting particle field. Decorative, `aria-hidden`, `pointer-events: none`.

### 2. Hero (`#top`)

Purpose: state who he is and the core claim, immediately.

Layout: `max-width: 1400px`; two-column grid `minmax(0, 1.5fr) minmax(0, .72fr)`, `gap: clamp(28px, 5vw, 72px)`, `align-items: end`. Collapses to one column below 900px. A radial accent glow (`120vw × 90vh`, `top: -30%`, centered, `agGlow 12s`) sits behind, `pointer-events: none`.

Left column, top to bottom:

1. **Eyebrow row** — flex, wrap, `gap: 12px`, mono 10.5px `.18em` uppercase, `#8C8D88`. Content: `AI / GenAI Engineer` (accent) · `—` (40% opacity) · `Backend Foundation` · `—` · `Ahmedabad, IN`. Animates in with `agFade .6s .1s`.
2. **`h1`** — two masked lines, each an `overflow: hidden` block wrapping an inner block that runs `agUp` (delays `.05s` and `.16s`). Text: "AI systems that" / "survive *production*." — with "production" in Instrument Serif italic, accent color.
3. **Lede paragraph** — `max-width: 60ch`, `#A8A9A3`, `agFade .7s .38s`. Verbatim: "Software engineer with a strong backend foundation and a deep focus on Generative AI, agentic workflows, and Retrieval-Augmented Generation — turning complex business requirements into scalable, reliable, production-grade AI solutions."
4. **Button row** — flex, wrap, `gap: 12px`, `agFade .7s .5s`.
   - Primary: accent bg, `#08090A` text, `padding: 15px 22px`, mono 500 11px `.12em` uppercase, label `▶ Play the journey`, links to `#reel`. Hover: `translateY(-2px)` + the accent glow shadow.
   - Secondary: ghost border, label `Selected work ↗`, links to `#projects`. Hover: accent border + `translateY(-2px)`.

Right column: **portrait card** — `aspect-ratio: 4 / 5`, `overflow: hidden`, `#101214` bg, `1px rgba(237,234,228,.12)` border, running `agFloat 10s`. Behind it, a blurred (`blur(24px)`) accent radial at `inset: -10%` with `agGlow 9s`. Inside:

- Portrait image, `object-fit: cover`, `object-position: 50% 12%`, filtered `grayscale(1) contrast(1.06) brightness(1.42)`.
- A bottom scrim: `linear-gradient(180deg, rgba(8,9,10,0) 42%, rgba(8,9,10,.72) 80%, rgba(8,9,10,.94))`.
- Caption at `left/right/bottom: 22px` — name in Instrument Serif `clamp(26px, 2.6vw, 38px)` color `#F4F2EE`, then a mono 9.5px `.2em` uppercase line "AI Engineer" preceded by a `22×1px` accent rule.

Below the grid: **stat strip** — top hairline `rgba(237,234,228,.14)`, `grid-template-columns: repeat(auto-fit, minmax(168px, 1fr))`, `agFade .8s .6s`. Four cells, each with a `1px` left hairline except the first, `padding: 22px`. Numeral in Instrument Serif `clamp(32px, 3.8vw, 50px)`; label in mono 10px `.14em` uppercase `#8C8D88` with an explicit `<br>`.

| Value | Label | Notes |
|---|---|---|
| `60%` | Operational risk reduced at Asint | Accent-colored numeral; count-up from 0 |
| `80%` | Faster REST performance | Count-up |
| `3` | Agentic systems built end-to-end | Count-up |
| `2+ yrs` | Shipping production backends | Static (not animated) |

The first three use a count-up animation driven by `data-count` and `data-suffix` attributes, triggered when the strip enters the viewport.

### 3. Marquee

A full-width band between hero and reel: top and bottom hairlines, `background: rgba(11,12,14,.7)`, `padding: 12px 0`, `overflow: hidden`. Inside, a `width: max-content` flex row running `agMarquee 26s linear infinite`, containing the token list twice (the second copy `aria-hidden`) so the -50% translate loops seamlessly.

Tokens, separated by accent-colored `/`: LangGraph, Graph RAG, Multi-agent orchestration, Neo4j, Qdrant, Model Context Protocol, FastAPI, Spring Boot, LangSmith. Mono 10.5px `.18em` uppercase `#A8A9A3`, `gap: 26px`.

### 4. Journey reel (`#reel`)

Purpose: tell the career story as a short film. This is the most involved component.

**Header row** — flex, wrap, `align-items: flex-end`, `justify-content: space-between`, `gap: 20px`.
- Eyebrow "The road so far" (accent mono).
- `h2`: "Every summit hands me *a new road*."
- Right paragraph, `max-width: 34ch`, `#8C8D88` 14.5px: "Titles first, then five milestones. Java developer to production AI engineer — the short version, on loop."

**Reel shell** — `max-width: 1000px`, centered, `margin-top: clamp(24px, 3vw, 40px)`, `1px rgba(237,234,228,.14)` border, `background: #0B0C0E`, `overflow: hidden`. Four stacked parts:

**(a) HUD bar** — `padding: 11px 14px`, bottom hairline, mono 9.5px `.16em` uppercase `#8C8D88`, flex space-between.
- Left: a `6px` accent dot on `agBlink 1.4s`, the word "Milestone" (hidden below 760px), the current index in `#EDEAE4`, then `/ 05`.
- Right: `SPD 000` speed readout, timecode `0:00 / 0:28`, and three buttons — Pause/Play (filled `rgba(237,234,228,.07)`), the sound toggle, and a `↺` replay. All mono 9.5px uppercase, `padding: 7px 11px`, `1px rgba(237,234,228,.2)` borders. Hover: `rgba(255,179,71,.16)` fill + accent border.
- The sound button is stateful: reads `Sound off` (neutral border/text) or `● Sound on` (accent border and text).

**(b) Film frame** — `aspect-ratio: 16 / 9` (becomes `3 / 4` below 760px), `overflow: hidden`, `background: #07080A`. Layered, back to front:

1. *Sky/ground gradient*: `linear-gradient(180deg, #07080A 0%, #12100D 38%, #2A1C0D 50%, #0C0B0A 54%, #08090A 100%)` — the hard band at 50% is the horizon.
2. *Sun*: radial `rgba(255,179,71,.55)` → transparent, `46% × 34%`, centered at 50%/50% then `translate(-50%, -76%)`, `blur(2px)`.
3. *Horizon line*: 1px, `linear-gradient(90deg, transparent, rgba(255,179,71,.75), transparent)`.
4. *Road*: a `perspective: 380px` wrapper containing a plane at `top: 50%`, `left/right: -45%`, `height: 340px`, `transform-origin: 50% 0%`, `transform: rotateX(72deg)`, filled `linear-gradient(180deg, #33291F, #241D17 45%, #17130F)`. On it:
   - Cross-ticks: `repeating-linear-gradient(180deg, rgba(255,179,71,.14) 0 3px, transparent 3px 120px)`, `background-position` animated by JS for forward motion.
   - Center dashes: `22px` wide, centered, `repeating-linear-gradient(180deg, rgba(255,226,178,.98) 0 32px, transparent 32px 88px)`, also JS-scrolled.
   - Two edge lines at `left: 32%` / `right: 32%`, `9px` wide, `linear-gradient(180deg, rgba(237,234,228,.25), rgba(237,234,228,.85))`.
5. *Rush streaks*: eight `12×3px` bars at the vanishing point — four on each side, alternating accent / `rgba(255,179,71,.8)` / `rgba(237,234,228,.55)` / `rgba(255,179,71,.7)` — running `agRushL` / `agRushR` at `1.1s` with staggered delays (`0`, `.22s`, `.46s`, `.74s` and `.1s`, `.34s`, `.6s`, `.86s`).
6. *Vignette*: `radial-gradient(closest-side at 50% 48%, transparent 40%, rgba(7,8,10,.72) 100%)`.
7. *Scanlines*: `repeating-linear-gradient(0deg, rgba(7,8,10,.22) 0 1px, transparent 1px 3px)` at `.55` opacity.
8. *Wipe* (`z-index` above scene): `linear-gradient(90deg, transparent, rgba(255,214,150,.5), transparent)`, `opacity: 0`, `translateX(-100%)` — JS sweeps it across on chapter changes.
9. *Intro title card* (`z-index: 3`): solid `#000`, centered grid. Film perforation strips down both edges (`22px` wide, `repeating-linear-gradient` white dashes, `background-size: 12px 34px`, `.5` opacity, `agSprocket .9s`). In the center, a `clamp(64px, 11vw, 132px)` tall grid stack of 17 words all at `grid-area: 1 / 1`, `opacity: 0`, `white-space: nowrap`, cycling one at a time. A flickering scanline overlay (`agFlicker .18s steps(2, end)`) sits on top.

   The 17 title words, in order, each with its own typographic treatment (this variety is the point — do not normalize them):

   | # | Word | Treatment |
   |---|---|---|
   | 1 | Agentic AI | Instrument Serif, `clamp(38px, 8vw, 106px)` |
   | 2 | Graph RAG | JetBrains Mono 500, `clamp(13px, 1.9vw, 24px)`, `.26em` |
   | 3 | LangGraph | Manrope 800 upper, `clamp(30px, 6vw, 78px)`, `-0.04em` |
   | 4 | Multi-agent | Instrument Serif *italic*, `clamp(34px, 7vw, 92px)` |
   | 5 | Hybrid retrieval | Mono 500, `clamp(12px, 1.6vw, 20px)`, `.3em` |
   | 6 | MCP | Manrope 800 upper, `clamp(40px, 8.4vw, 112px)`, `-0.045em` |
   | 7 | Vector search | Instrument Serif, `clamp(26px, 5vw, 64px)` |
   | 8 | LLM systems | Manrope 800 upper, `clamp(24px, 4.4vw, 58px)`, `-0.03em` |
   | 9 | Transformers | Instrument Serif, `clamp(38px, 7.6vw, 100px)` |
   | 10 | Embeddings | Mono 500, `clamp(12px, 1.7vw, 22px)`, `.28em` |
   | 11 | RAG pipelines | Manrope 800 upper, `clamp(28px, 5.4vw, 72px)`, `-0.035em` |
   | 12 | Neo4j | Instrument Serif, `clamp(42px, 8.6vw, 116px)` |
   | 13 | Qdrant | Mono 500, `clamp(13px, 1.9vw, 24px)`, `.26em` |
   | 14 | FastAPI | Manrope 800 upper, `clamp(34px, 7vw, 92px)`, `-0.04em` |
   | 15 | LangSmith | Instrument Serif *italic*, `clamp(28px, 5.6vw, 74px)` |
   | 16 | Guardrails | Mono 500, `clamp(12px, 1.6vw, 20px)`, `.3em` |
   | 17 | In production | Manrope 800 upper, `clamp(44px, 9vw, 124px)`, `-0.05em` |

   All are `#FFFFFF`. Each word gets one synthesized shutter-clack sound as it appears.

10. *Flash* (`z-index: 4`): full-bleed `#FFFFFF` at `opacity: 0`, punched briefly when the intro hands off to the road.
11. *Chapter layer* (`z-index: 2`): `padding: clamp(18px, 3.4%, 44px) clamp(16px, 4%, 48px)`, grid with `justify-items: center; align-items: start`, centered text. Five chapters all at `grid-area: 1 / 1`, `max-width: 34ch`, `will-change: transform, opacity, filter`; only chapter 0 starts at `opacity: 1`.

    Each chapter has three parts: an accent-filled badge (`#08090A` text, mono 500 11px `.18em` uppercase, `padding: 8px 13px`), a Manrope 800 uppercase title (`clamp(32px, 5.8vw, 82px)`, `.9`, `-0.04em`, white), and a paragraph in an inline-block box with `background: #000000`, `1px solid rgba(255,255,255,.85)` border, `padding: 13px 17px`, `clamp(14px, 1.35vw, 19px)` weight 500 white text. The solid black box exists for legibility over the moving road — keep it.

    | # | Badge | Title | Copy |
    |---|---|---|---|
    | 01 | `Milestone 01 · 2024` | Base camp | Java and Spring Boot. Correctness first — make it right, make it fast, keep it standing. |
    | 02 | `Milestone 02 · weeks in` | The detour | Reassigned to SAP CDS. No tutorial existed for what I had to deliver, so I read the system until it made sense. |
    | 03 | `Milestone 03 · +4 months` | The turn | Just as CDS stopped being scary, the ask changed again: move onto the AI engineering stack. |
    | 04 | `Milestone 04 · steepest` | The climb | Shipping production AI in a stack I was still learning. Transformers at night, retrieval pipelines by morning. |
    | 05 | `Milestone 05 · now` | This road | Agentic Graph RAG live for real users — and already scouting the next road. |

**(c) Scrub track** — `height: 3px`, `background: rgba(237,234,228,.12)`, `cursor: pointer`. Inner fill bar, accent, width set from playback progress. Clicking seeks.

**(d) Chapter tabs** — `grid-template-columns: repeat(5, minmax(0, 1fr))`, top hairline, each a borderless button with a `1px` right hairline (last has none), `padding: 12px 12px 14px`, left-aligned, `#8C8D88`. Inside: a mono 500 9.5px `.16em` index, then a 12px weight-500 label. Hover: `rgba(255,179,71,.08)` bg, `#EDEAE4` text. Labels: `01 Base camp`, `02 The detour`, `03 The turn`, `04 The climb`, `05 This road`. Clicking jumps to that chapter.

**Pull quote** — below the shell, `margin-top: clamp(40px, 6vw, 82px)`, `max-width: 26ch`, Instrument Serif `clamp(28px, 4.4vw, 62px)`, `text-wrap: balance`: "Restlessness is the point. *Better* is a road, not a summit." ("Better" italic + accent.)

### 5. Experience (`#work`)

Layout: `background: rgba(11,12,14,.72)`, top hairline. Grid `minmax(0, 250px) minmax(0, 1fr)`, `gap: clamp(26px, 5vw, 76px)`; single column below 900px.

Left rail is `position: sticky; top: 92px; align-self: start` (becomes `static` below 900px): accent mono eyebrow "Experience", a `1px rgba(237,234,228,.2)` rule, then a mono 10.5px `.1em` uppercase `#8C8D88` block with `<br>` line breaks — "Asint Pvt. Ltd / Ahmedabad, Gujarat / Aug 2024 — Present".

Right column: `h2` "Business problems first, *models second*."; lede paragraph (`62ch`, 16px, `#A8A9A3`): "Software Engineer at Asint — backend ownership across production systems, now applied to the agentic AI stack running for real users."

Then four numbered rows, `margin-top: clamp(28px, 4vw, 48px)`. Each row: top hairline (`rgba(237,234,228,.14)`, plus a bottom hairline on the last), `padding: 20px 0`, grid `34px minmax(0, 1fr)` with `gap: 16px`, transitioning `padding-left .4s cubic-bezier(.16,1,.3,1)` and `background .4s`. The index is mono 500 10.5px accent; then a 17px/700 `h3` and a `68ch` 15px `#A8A9A3` paragraph. On hover, the row indents (padding-left animates) and picks up a faint accent wash.

1. **Agentic Graph RAG assistant, in production** — Built the retrieval pipeline — Neo4j graph queries wired into LangChain/LangGraph for context retrieval — and contributed the multi-agent orchestration layer's coordination and task-routing logic. Domain experts get grounded answers instead of hunting through systems.
2. **Risk-based inspection APIs — 60% less operational risk** — Designed and built the APIs behind an analytics-driven reliability platform, applying rule-based scoring so inspection effort lands where failure actually costs money.
3. **80% faster REST performance** — Query tuning and response-efficiency work across the backend — cheaper infrastructure, and screens that respond fast enough for people to trust them.
4. **End-to-end ownership** — Owned backend development across multiple production systems — translating business rules into reliable, scalable REST APIs in Java and Spring Boot, and debugging complex production issues through root-cause analysis and performance tuning.

### 6. Projects (`#projects`)

Accent mono eyebrow "Selected work"; `h2` "Some of systems …" (see file for the exact italic clause).

Three `<article>` blocks, each `margin-top: clamp(30px, 4vw, 54px)`, top hairline `rgba(237,234,228,.16)`, `padding-top: clamp(20px, 3vw, 34px)`. Inside, a two-column grid (`data-r="proj"`) that collapses to one column below 760px: a media panel and a text column.

Media panel: `aspect-ratio: 4 / 3`, `overflow: hidden`, `#101214` bg, `1px rgba(237,234,228,.12)` border. Layered — a radial accent wash plus a `linear-gradient(160deg, …)` base, a fine technical grid (`repeating-linear-gradient` at 1px/46px on both axes, `rgba(237,234,228,.06)`), the screenshot filtered `grayscale(1) contrast(1.1) brightness(…)`, an index numeral top-left (mono 500 10px `.18em`, accent), and a mono 9.5px `.14em` uppercase caption strip along the bottom in `#C6C4BE`.

Text column: Instrument Serif `h3` `clamp(28px, 3.6vw, 48px)`; a mono 10.5px `#8C8D88` meta line; a `66ch` 15px `#A8A9A3` description.

| # | Title | Meta | Media note |
|---|---|---|---|
| 01 | EquityLens | Agentic market & company research analyst · Jul–Aug 2026 | Full-bleed cover screenshot |
| 02 | Synthr | Agentic SWE assistant · May 2026 | Image is `width: 42%`, centered, `border-radius: 50%` — a circular logo mark, not a screenshot |
| 03 | Nexus AI | Multimodal AI assistant · Apr 2026 | Full-bleed cover screenshot |

Descriptions in the file are final copy; reproduce verbatim.

### 7. Capabilities (`#capabilities`)

`background: rgba(11,12,14,.72)`, top hairline. Accent mono eyebrow "What I build"; `h2` at `max-width: 24ch`.

Tile grid: `margin-top: clamp(30px, 4vw, 54px)`, `grid-template-columns: repeat(auto-fit, minmax(276px, 1fr))`, `gap: 1px`, `background: rgba(237,234,228,.12)` — the gap *is* the hairline grid. Each tile: `background: #0B0C0E`, `padding: 26px 24px 32px`, transitions `background .35s` and `transform .45s cubic-bezier(.16,1,.3,1)` (lifts slightly on hover). Content: mono 500 10px `.16em` accent index, a 19px/700 `h3`, and a 14.5px `#A8A9A3` paragraph.

1. **Agentic AI systems** — Multi-agent workflows that plan, reason, use tools, retrieve, and finish a task without a human in the loop for every step.
2. **Retrieval-Augmented Generation** — Context-aware systems that ground answers in enterprise knowledge — hybrid retrieval, reranking, and citations.
3. **LLM applications** — Chat, automation, and document analysis built on modern language models — streaming, evals, and guardrails included.
4. **Backend & API engineering** — Scalable services and APIs — the substrate that decides whether an AI feature holds up in production.
5. **AI integration** — Fitting AI into systems and workflows that already exist, without asking the business to rebuild around it.
6. **ML & NLP solutions** — Classification, prediction, semantic search, and embeddings work where a full LLM is the wrong tool.

(Check the source for the exact tail of each sentence.)

### 8. Stack (`#stack`) — the inverted break

The one light section, and a deliberate rhythm break in an otherwise dark page. Its background is a vertical gradient that fades the dark page into paper:

```
linear-gradient(180deg,
  rgba(228,223,214,0) 0,
  rgba(228,223,214,.28) 46px,
  rgba(228,223,214,.92) 150px,
  rgba(228,223,214,.92) calc(100% - …), …)
```

Padding `clamp(96px, 11vw, 168px)` vertical. All type flips to `#08090A`.

Header: a `#08090A` chip with `#E8E4DC` mono 500 11px `.22em` uppercase text reading "Stack"; below it a Manrope 800 uppercase wordmark at `clamp(42px, 9vw, 132px)`, `.84`, `-0.045em`. To the right, a `max-width: 30ch` note with a `4px solid #08090A` left border, `padding-left: 14px`, mono 13px uppercase `.04em`.

Then a series of rows, each `grid-template-columns: minmax(0, 88px) minmax(0, 260px) minmax(0, 1fr)`, `gap: 20px`, `align-items: start`, `padding: 26px 0`, `border-bottom: 2px solid #08090A`:

- Column 1: a huge outlined numeral — Manrope 800 `clamp(38px, 4.4vw, 62px)`, `.8`, `-0.05em`, `-webkit-text-stroke: 2px #08090A` (transparent fill).
- Column 2: category `h3` — Manrope 800 uppercase `clamp(15px, 1.5vw, 20px)`.
- Column 3: chip cloud — flex wrap, `gap: 10px`. Each chip: `background: #FFB347`, `border: 2px solid #08090A`, `box-shadow: 3px 3px 0 #08090A`, `padding: 8px …`. Categories start with "AI …" — read the source for the full row set and chip lists.

### 9. Qualifications (`#qualifications`)

Top hairline, `padding: clamp(52px, 7vw, 100px)` vertical. Accent mono eyebrow "Qualifications", then education / certification entries. Back to the dark palette.

### 10. Contact (`#contact`)

Top hairline, `overflow: hidden`, with a bottom-anchored radial accent glow (`110vw × 80vh`, `bottom: -40%`, `agGlow 11s`).

Accent mono eyebrow "Contact"; `h2` at `max-width: 20ch`: "Let's build something that *holds up*."; paragraph (`58ch`, 16px, `#A8A9A3`): "AI-powered applications, RAG systems, agentic workflows, or the backend underneath them — I'd be glad to talk."

**Contact cards** — `grid-template-columns: repeat(auto-fit, minmax(240px, 1fr))`, `gap: 1px`, `background: rgba(237,234,228,.14)`. Each card is an `<a>` with `background: #08090A`, `padding: 20px 20px 24px`, transitioning `background .35s` and `padding-left .4s`:

| Label | Display | Target |
|---|---|---|
| Email | `abhishekofficials2004@gmail.com` | `mailto:abhishekofficials2004@gmail.com?cc=abhishekgupta862004@gmail.com` |
| LinkedIn | `abhishek-gupta ↗` | `https://www.linkedin.com/in/abhishek-gupta-7a2040221/` (new tab, `rel="noopener"`) |
| GitHub | `Abhi-2023 ↗` | `https://github.com/Abhi-2023` (new tab, `rel="noopener"`) |

Label is mono 9.5px `.2em` uppercase `#8C8D88`; value is `clamp(14px, 1.3vw, 17px)` with `word-break: break-word` on the email.

**Contact form** — `margin-top: clamp(34px, 4.5vw, 60px)`, top hairline, `padding-top: clamp(24px, 3.4vw, 40px)`, `display: grid; gap: 20px`, `max-width: 720px`.

- Name and Email sit in a nested `repeat(auto-fit, minmax(220px, 1fr))` grid with `gap: 20px`; Message is full width.
- Fields are underline-only: transparent background, no border except `border-bottom: 1px solid rgba(237,234,228,.24)`, `#EDEAE4` text, Manrope 400 16px, `padding: 10px 0`, `outline: none`. On focus the underline goes accent (`transition: border-color .3s`).
- Labels above each field: mono 9.5px `.2em` uppercase `#8C8D88`, reading `Name *`, `Email *`, `Message *`. All three are `required`.
- Textarea: `rows="4"`, `resize: vertical`, `line-height: 1.6`.
- Submit: accent fill, `#08090A` text, no border, `padding: 15px 24px`, mono 500 11px `.14em` uppercase, label "Send message". Hover: `translateY(-2px)` + accent glow shadow.

### 11. Footer

Top hairline, `background: rgba(11,12,14,.72)`, `padding: 22px <gutter> 30px`, flex wrap space-between, mono 10.5px `.1em` `#8C8D88`. Left: `© 2026 Abhishek Gupta — AI / GenAI Engineer`. Right: `GitHub`, `LinkedIn`, `Top ↑` with `gap: 20px`.

## Interactions & Behavior

### Reel playback

The reel is a 28-second loop driven by a single `requestAnimationFrame` clock (`this.ms`), not by CSS animation timing.

- **Structure**: an intro title-card phase (17 words cycling through equal time slots), then five chapters across the remainder. The HUD timecode reads `m:ss / 0:28`.
- **Autoplay gating**: an `IntersectionObserver` on the film frame starts playback when it scrolls into view and pauses when it leaves. A user-initiated pause (`this.userPaused`) is respected — re-entering the viewport does not override it.
- **Road motion**: JS advances the `background-position` of the road's tick and dash layers each frame, at a speed that ramps per chapter. The `SPD nnn` HUD readout displays the current value.
- **Chapter transitions**: the active chapter fades/transforms in while the previous one leaves; the wipe element sweeps across; the flash element punches once at intro→road handoff.
- **Scrub track**: click to seek. Sets playback time from click position as a fraction of duration.
- **Chapter tabs**: click to jump to that chapter's start time.
- **Replay `↺`**: resets to zero and plays from the top.
- **Pause/Play**: toggles the loop; button label swaps between `Pause` and `Play`.
- **Reduced motion**: if `prefers-reduced-motion: reduce`, the loop never starts — a single static frame is painted and audio is disabled entirely.

### Audio (synthesized, no audio files)

All sound is generated with the Web Audio API. **There are no audio assets** — earlier versions referenced an MP3; it was removed deliberately for licensing reasons. Do not reintroduce a sound file.

Signal chain: `AudioContext` → master `GainNode` (0.9) → `DynamicsCompressor` (`threshold: -16`, `ratio: 4`) → destination. A 2-second white-noise buffer is generated once at init and reused as the source for all percussive elements.

Four sound elements:

1. **Shutter clack** — one per intro title word. Layered bandpassed noise bursts (3600 Hz / Q 2.4, 7400 Hz / Q 6, 6400 Hz / Q 16) plus short sine "body" tones at 205 Hz and 165 Hz, with a second clack offset `+30ms` to read as a mirror-and-shutter pair. Total length ~50 ms.
2. **Intro bump** — fires once as the titles start. Momentarily pushes master gain to 1.5 then eases back to 0.9 over ~1.1 s; adds a sine sweeping 96 → 34 Hz and a bandpassed noise sweep 240 → 1800 Hz.
3. **Rumble** — a continuous low bed while the road runs. Looping noise → highpass 30 Hz → lowpass 170 Hz (Q 0.7), with an LFO at 0.08 Hz modulating the lowpass cutoff by ±50 Hz. Gain target is `0.16 + 0.12 × level`, where `level` tracks road speed. Ramped with `setTargetAtTime` (0.5 s in, 0.25 s out).
4. **Rhythmic pulse** — a percussion pattern riding with the rumble. 104 BPM on a 16th-note grid, scheduled with a 25 ms lookahead interval (not `setTimeout` per hit, so timing does not drift). 16-step pattern `[2,0,1,0,1,0,1,1,2,0,1,0,1,1,0,1]` where `0` = rest, `1` = tick, `2` = accent. Ticks are bandpassed noise (2700–3600 Hz, Q 4.5, 32 ms). Accents are lower and wider (1500 Hz, Q 1.6, 75 ms) plus a sine thump sweeping 88 → 46 Hz over 120 ms. Amplitude scales with road level: `(accent ? 0.30 : 0.13) × (0.55 + 0.9 × level)`.

**Gating** — all audio is muted unless *all* of: the user has enabled sound, the reel is in the viewport, playback is running, and reduced-motion is off. The toggle state persists in `localStorage` under key `ag-reel-sound` with values `'on'` / `'off'`; default is off (browsers block unprompted audio, and unrequested sound on a portfolio is hostile).

### Scroll behaviors

- **Progress bar**: width = `scrollY / (scrollHeight - innerHeight)` as a percentage.
- **Scroll-spy nav**: the nav item matching the section currently in view gets accent text and an accent bottom border.
- **Reveal-on-enter**: elements marked `data-reveal` start translated down and transparent, then animate to rest when they cross into the viewport (`IntersectionObserver`, one-shot). Applied to eyebrows, headings, paragraphs, work rows, tiles, project articles, and stack rows.
- **Count-up stats**: the three `data-count` numerals tick from 0 to their target with the `data-suffix` appended, triggered on entry.
- **Smooth scroll**: `html { scroll-behavior: smooth }` handles all anchor navigation. Note that the fixed header requires `scroll-margin-top` on section targets (or equivalent) so headings are not hidden underneath it.

### Hover states

- Nav links: `#8C8D88` → accent, transparent bottom border → accent.
- Primary buttons: `translateY(-2px)` + `0 18px 40px -18px rgba(255,179,71,.7)`.
- Ghost buttons: border → accent, `translateY(-2px)`.
- Header CTA: fills accent with `#08090A` text.
- Work rows and contact cards: animated `padding-left` indent + faint accent wash.
- Capability tiles: slight lift + background shift.
- HUD buttons: `rgba(255,179,71,.16)` fill + accent border.
- Chapter tabs: `rgba(255,179,71,.08)` fill, text → `#EDEAE4`.

### Form behavior

The prototype's submit handler is a stub — there is no backend. **This needs a real implementation.** Decide with the client between a form service (Formspree, Basin), a serverless function, or a plain `mailto:` fallback. Required: HTML5 validation on all three fields (Name, Email as `type="email"`, Message), plus a success state and an error state — neither exists in the prototype and both need designing to match (mono uppercase label styling is the obvious fit).

### Responsive behavior

Three breakpoints:

- **≤ 900px**: two-column grids (`[data-r="two"]`) collapse to one; the sticky experience rail becomes `position: static`.
- **≤ 760px**: the reel frame switches from `16 / 9` to `3 / 4`; project grids collapse to one column; the header nav is hidden; the reel HUD's "Milestone" word is hidden.
- **`prefers-reduced-motion: reduce`**: all animations and transitions disabled globally; the reel renders one static frame and stays silent.

Note that hiding the nav below 760px leaves **no mobile navigation** — there is no hamburger or drawer in the prototype. Either add one or confirm with the client that scroll-only is acceptable on mobile.

## State Management

Nothing needs a global store. All state is local to the reel component plus a couple of page-level scroll listeners.

Reel state:

| State | Type | Purpose |
|---|---|---|
| `ms` | number | Playback position in ms within the 28 s loop |
| `playing` | boolean | Whether the RAF loop is advancing |
| `userPaused` | boolean | Distinguishes a manual pause from a viewport pause |
| `inView` | boolean | Set by `IntersectionObserver` on the film frame |
| `soundOn` | boolean | Persisted to `localStorage['ag-reel-sound']` |
| `reduced` | boolean | `prefers-reduced-motion` match, read once at mount |
| `lastWordIdx` | number | Which intro word is showing; changing it fires a clack |
| `bumped` | boolean | One-shot guard for the intro bump sound |
| `flashed` | boolean | One-shot guard for the white flash |
| `speed` | number | Current road speed, drives HUD readout and audio level |

Page state: scroll progress (number), active nav section (string), and a per-element "has revealed" flag for the reveal observer.

Audio nodes (`AudioContext`, master gain, noise buffer, rumble chain, pulse bus and scheduler interval) are held as instance refs, not reactive state — they must survive re-renders. In React, use `useRef`, and tear down the interval and disconnect nodes on unmount. **The prototype leaks the pulse scheduler interval on unmount; fix this in the port.**

There is no data fetching. All content is static and can be hardcoded or moved into a content collection / CMS if the client wants to edit copy without a deploy — worth raising with them, since portfolio copy changes often.

Content worth extracting into structured data during the port: the 5 reel chapters, the 17 intro words with their type treatments, the 4 experience rows, the 3 projects, the 6 capabilities, the stack categories and chips, and the 3 contact links.

## Assets

### Fonts

Google Fonts, single request:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

Consider self-hosting these for performance and to remove the third-party request.

### Images

All four are client-supplied and included under `uploads/`. Filenames are prototype artifacts — rename them meaningfully during the port.

| File | Used as | Notes |
|---|---|---|
| `uploads/pasted-1788435824163-0.png` | Hero portrait | Rendered `grayscale(1) contrast(1.06) brightness(1.42)`, `object-position: 50% 12%` |
| `uploads/pasted-1788405875914-0.png` | EquityLens project cover | `grayscale(1) contrast(1.1)`, full-bleed cover |
| `uploads/pasted-1788405912529-0.png` | Synthr logo mark | Rendered circular at 42% width |
| `uploads/pasted-1788405971319-0.png` | Nexus AI project cover | Full-bleed cover |

The grayscale filter is a deliberate design decision — it keeps the accent as the page's only color. Preserve it. Add real `alt` text and explicit `width`/`height` (or `aspect-ratio`) to avoid layout shift; the prototype relies on aspect-ratio containers.

### Favicon

An inline SVG data URI: accent `#FFB347` square with `#08090A` "AG" in Helvetica/Arial 700 at 34px, `letter-spacing: -2`. Reproducible as a real `.svg` file.

### Audio

**None.** All sound is synthesized at runtime. See the Audio section above.

### Icons

**None.** Every glyph in the design is a text character: `▶`, `↗`, `↺`, `↑`, `●`, `■`, `—`, `·`, `/`. Using text rather than an icon library is intentional and keeps the payload at zero — but note that bare arrow glyphs inside links should be `aria-hidden` and paired with real accessible labels.

## Accessibility Notes

Gaps in the prototype that should be closed in the port:

- The reel HUD buttons rely on visible text (good) but the `↺` replay button needs an `aria-label`.
- Chapter tabs should be a `tablist`/`tab` pattern, or at minimum expose the active chapter with `aria-current`.
- The scrub track is a click-only `div`. Give it a keyboard-operable role (`slider` with arrow-key handling) or provide the chapter tabs as the accessible equivalent.
- Muted `#8C8D88` on `#08090A` is roughly 5.3:1 — passes AA for normal text, but it is used at 9.5–10px in several places, which is below comfortable reading size regardless of contrast. Consider a floor of 11px for mono labels.
- The autoplaying reel needs its pause control reachable by keyboard before the animation (it currently is, in DOM order — preserve that).
- Section anchors need `scroll-margin-top` clearing the fixed header.

## Files

Everything in this bundle:

| File | What it is |
|---|---|
| `AI Engineer Portfolio.dc.html` | The full design prototype. Open directly in a browser. Template markup first, logic class at the bottom after the `<x-dc>` close. |
| `support.js` | Prototype runtime. **Reference only — do not port.** |
| `uploads/*.png` | The four client-supplied images. |
| `README.md` | This document. |

Where to look in the prototype for each thing:

- Global resets, keyframes, and media queries: the `<style>` block inside `<helmet>` near the top.
- Markup for each section: in document order, `#top` → `#reel` → `#work` → `#projects` → `#capabilities` → `#stack` → `#qualifications` → `#contact` → footer.
- All JS behavior: the `class Component extends DCLogic` block after `</x-dc>`. Key methods: `componentDidMount` (observers, RAF start), `initAudio`, `ensureCtx`, `shutterClack`, `introBump`, `rumble`, `pulse`, `paintIntro`, `setPlayLabel`.
- The accent color is exposed as a tweakable prop (`accentColor`, default `#FFB347`) on the `data-props` attribute of the script tag. Treat `#FFB347` as the real value; the prop exists so the client could preview alternatives.
