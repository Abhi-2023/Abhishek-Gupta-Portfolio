<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<script src="./support.js"></script>
</head>
<body>
<template id="__bundler_thumbnail">
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#08090A"/><text x="100" y="118" text-anchor="middle" font-family="Georgia, serif" font-size="64" fill="#FFB347">AG</text></svg>
</template>
<x-dc>
<helmet>
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Abhishek Gupta — AI Engineer</title>
<link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23FFB347'/%3E%3Ctext x='32' y='33' text-anchor='middle' dominant-baseline='central' font-family='Helvetica,Arial,sans-serif' font-size='34' font-weight='700' letter-spacing='-2' fill='%2308090A'%3EAG%3C/text%3E%3C/svg%3E" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
<style>
  *, *::before, *::after { box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  html { background: #08090A; overflow-x: hidden; }
  body { overflow-x: clip; max-width: 100%; }
  body { margin: 0; background: transparent; color: #EDEAE4; }
  h1, h2, h3, h4, p, blockquote, figure { margin: 0; }
  a { color: #FFB347; text-decoration: none; }
  a:hover { color: #FFD79A; }
  img { display: block; max-width: 100%; }
  ::selection { background: #FFB347; color: #08090A; }
  [data-scroll]::-webkit-scrollbar { display: none; }
  @keyframes agUp { from { transform: translate3d(0, 110%, 0) } to { transform: translate3d(0, 0, 0) } }
  @keyframes agFade { from { opacity: 0 } to { opacity: 1 } }
  @keyframes agMarquee { from { transform: translate3d(0,0,0) } to { transform: translate3d(-50%,0,0) } }
  @keyframes agBlink { 0%,100% { opacity: 1 } 50% { opacity: .25 } }
  @keyframes agFloat { 0%,100% { transform: translate3d(0,0,0) } 50% { transform: translate3d(0,-12px,0) } }
  @keyframes agGlow { 0%,100% { opacity: .5; transform: scale(1) } 50% { opacity: .85; transform: scale(1.08) } }
  @keyframes agRushL { 0% { transform: translate3d(0,0,0) scale(.05); opacity: 0 } 12% { opacity: 1 } 100% { transform: translate3d(-58vw, 26vh, 0) scale(2.4); opacity: 0 } }
  @keyframes agRushR { 0% { transform: translate3d(0,0,0) scale(.05); opacity: 0 } 12% { opacity: 1 } 100% { transform: translate3d(58vw, 26vh, 0) scale(2.4); opacity: 0 } }
  @keyframes agDust { 0% { transform: translate3d(0,0,0); opacity: 0 } 20% { opacity: .7 } 100% { transform: translate3d(-30px, 120px, 0); opacity: 0 } }
  @keyframes agSprocket { from { background-position: 5px 0 } to { background-position: 5px 34px } }
  @keyframes agFlicker { 0% { opacity: .35 } 100% { opacity: .8 } }
  @media (max-width: 900px) { [data-r="two"] { grid-template-columns: 1fr !important; } [data-r="sticky"] { position: static !important; } }
  @media (max-width: 760px) {
    [data-film] { aspect-ratio: 3 / 4 !important; }
    [data-r="proj"] { grid-template-columns: 1fr !important; }
    [data-r="navlinks"] { display: none !important; }
    [data-r="hudlabel"] { display: none !important; }
  }
  @media (prefers-reduced-motion: reduce) { * { animation: none !important; transition: none !important; } }
</style>
</helmet>

  <canvas data-field aria-hidden="true" style="position: fixed; inset: 0; width: 100%; height: 100%; z-index: -1; pointer-events: none; opacity: 1;"></canvas>

<div style="font-family: 'Manrope', system-ui, sans-serif; background: transparent; color: #EDEAE4; overflow: clip;">

  <div style="position: fixed; top: 0; left: 0; right: 0; height: 2px; z-index: 900; background: rgba(237,234,228,.08);">
    <div data-progress style="height: 100%; width: 0%; background: var(--ag-accent, #FFB347);"></div>
  </div>

  <header style="position: fixed; top: 0; left: 0; right: 0; z-index: 800; background: rgba(8,9,10,.72); backdrop-filter: blur(20px) saturate(1.2); border-bottom: 1px solid rgba(237,234,228,.09);">
    <div style="max-width: 1400px; margin: 0 auto; padding: 14px clamp(16px, 4vw, 56px); display: flex; align-items: center; justify-content: space-between; gap: 20px;">
      <a href="#top" style="display: flex; align-items: center; gap: 11px; color: #EDEAE4;">
        <span style="width: 26px; height: 26px; display: grid; place-items: center; border: 1px solid var(--ag-accent, #FFB347); color: var(--ag-accent, #FFB347); font: 500 10px/1 'JetBrains Mono', monospace;">AG</span>
        <span style="font: 800 13.5px/1 'Manrope', sans-serif; letter-spacing: -0.01em;">Abhishek Gupta</span>
      </a>
      <nav data-r="navlinks" style="display: flex; align-items: center; gap: clamp(14px, 2vw, 30px); font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: #8C8D88;">
        <a href="#reel" data-nav="reel" style="color: inherit; padding: 5px 0; border-bottom: 1px solid transparent; transition: color .25s, border-color .25s;">Journey</a>
        <a href="#work" data-nav="work" style="color: inherit; padding: 5px 0; border-bottom: 1px solid transparent; transition: color .25s, border-color .25s;">Work</a>
        <a href="#projects" data-nav="projects" style="color: inherit; padding: 5px 0; border-bottom: 1px solid transparent; transition: color .25s, border-color .25s;">Projects</a>
        <a href="#capabilities" data-nav="capabilities" style="color: inherit; padding: 5px 0; border-bottom: 1px solid transparent; transition: color .25s, border-color .25s;">Capabilities</a>
        <a href="#stack" data-nav="stack" style="color: inherit; padding: 5px 0; border-bottom: 1px solid transparent; transition: color .25s, border-color .25s;">Stack</a>
        <a href="#qualifications" data-nav="qualifications" style="color: inherit; padding: 5px 0; border-bottom: 1px solid transparent; transition: color .25s, border-color .25s;">Qualifications</a>
      </nav>
      <a href="#contact" style="display: inline-flex; align-items: center; gap: 9px; border: 1px solid rgba(237,234,228,.2); color: #EDEAE4; padding: 10px 15px; font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; white-space: nowrap; transition: background .25s, border-color .25s, color .25s;" style-hover="background: var(--ag-accent, #FFB347); border-color: var(--ag-accent, #FFB347); color: #08090A;">
        <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--ag-accent, #FFB347); animation: agBlink 2s ease-in-out infinite;"></span>Open to roles
      </a>
    </div>
  </header>

  <section id="top" style="position: relative; overflow: hidden;">
    <div style="position: absolute; left: 50%; top: -30%; width: 120vw; height: 90vh; transform: translateX(-50%); background: radial-gradient(closest-side, rgba(255,179,71,.14), transparent 72%); pointer-events: none; animation: agGlow 12s ease-in-out infinite;"></div>
    <div style="position: relative; max-width: 1400px; margin: 0 auto; padding: clamp(112px, 16vh, 190px) clamp(16px, 4vw, 56px) clamp(44px, 6vw, 76px);">
      <div data-r="two" style="display: grid; grid-template-columns: minmax(0, 1.5fr) minmax(0, .72fr); gap: clamp(28px, 5vw, 72px); align-items: end;">
        <div>
          <div style="display: flex; flex-wrap: wrap; align-items: center; gap: 12px; font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .18em; text-transform: uppercase; color: #8C8D88; animation: agFade .6s .1s both;">
            <span style="color: var(--ag-accent, #FFB347);">AI / GenAI Engineer</span><span style="opacity: .4;">—</span><span>Backend Foundation</span><span style="opacity: .4;">—</span><span>Ahmedabad, IN</span>
          </div>

          <h1 style="margin-top: clamp(18px, 2.6vw, 30px); font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; font-size: clamp(42px, 7.4vw, 108px); line-height: .96; letter-spacing: -0.025em;">
            <span style="display: block; overflow: hidden;"><span style="display: block; animation: agUp .8s cubic-bezier(.16,1,.3,1) .05s both;">AI systems that</span></span>
            <span style="display: block; overflow: hidden;"><span style="display: block; animation: agUp .8s cubic-bezier(.16,1,.3,1) .16s both;">survive <span style="font-style: italic; color: var(--ag-accent, #FFB347);">production</span>.</span></span>
          </h1>

          <p style="margin-top: clamp(20px, 2.6vw, 30px); max-width: 60ch; font-size: clamp(15px, 1.15vw, 17.5px); line-height: 1.7; font-weight: 400; color: #A8A9A3; text-wrap: pretty; animation: agFade .7s .38s both;">Software engineer with a strong backend foundation and a deep focus on Generative AI, agentic workflows, and Retrieval-Augmented Generation — turning complex business requirements into scalable, reliable, production-grade AI solutions.</p>

          <div style="margin-top: clamp(24px, 3vw, 36px); display: flex; flex-wrap: wrap; gap: 12px; animation: agFade .7s .5s both;">
            <a href="#reel" style="display: inline-flex; align-items: center; gap: 12px; background: var(--ag-accent, #FFB347); color: #08090A; padding: 15px 22px; font: 500 11px/1 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s;" style-hover="transform: translateY(-2px); box-shadow: 0 18px 40px -18px rgba(255,179,71,.7);">▶ Play the journey</a>
            <a href="#projects" style="display: inline-flex; align-items: center; gap: 10px; border: 1px solid rgba(237,234,228,.2); color: #EDEAE4; padding: 15px 22px; font: 400 11px/1 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; white-space: nowrap; transition: border-color .3s, transform .3s cubic-bezier(.16,1,.3,1);" style-hover="border-color: var(--ag-accent, #FFB347); transform: translateY(-2px);">Selected work ↗</a>
          </div>
        </div>

        <div style="position: relative; animation: agFade .9s .3s both;">
          <div style="position: absolute; inset: -10%; background: radial-gradient(closest-side, rgba(255,179,71,.3), transparent 70%); filter: blur(24px); animation: agGlow 9s ease-in-out infinite; pointer-events: none;"></div>
          <div style="position: relative; aspect-ratio: 4 / 5; overflow: hidden; background: #101214; border: 1px solid rgba(237,234,228,.12); animation: agFloat 10s ease-in-out infinite;">
            <img src="uploads/pasted-1788435824163-0.png" alt="Abhishek Gupta" style="width: 100%; height: 100%; object-fit: cover; object-position: 50% 12%; filter: grayscale(1) contrast(1.06) brightness(1.42);" />
            <div style="position: absolute; inset: 0; background: linear-gradient(180deg, rgba(8,9,10,0) 42%, rgba(8,9,10,.72) 80%, rgba(8,9,10,.94)); pointer-events: none;"></div>
            <div style="position: absolute; left: 22px; right: 22px; bottom: 22px; pointer-events: none;">
              <div style="font-family: 'Instrument Serif', serif; font-size: clamp(26px, 2.6vw, 38px); line-height: 1.02; color: #F4F2EE;">Abhishek Gupta</div>
              <div style="margin-top: 9px; display: flex; align-items: center; gap: 10px; font: 400 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: #C6C4BE;">
                <span style="width: 22px; height: 1px; background: var(--ag-accent, #FFB347);"></span>AI Engineer
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style="margin-top: clamp(38px, 5vw, 62px); border-top: 1px solid rgba(237,234,228,.14); display: grid; grid-template-columns: repeat(auto-fit, minmax(168px, 1fr)); animation: agFade .8s .6s both;">
        <div style="padding: 22px 22px 0 0;">
          <div data-count="60" data-suffix="%" style="font-family: 'Instrument Serif', serif; font-size: clamp(32px, 3.8vw, 50px); line-height: 1; color: var(--ag-accent, #FFB347);">60%</div>
          <div style="margin-top: 9px; font: 400 10px/1.5 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: #8C8D88;">Operational risk<br />reduced at Asint</div>
        </div>
        <div style="padding: 22px 22px 0; border-left: 1px solid rgba(237,234,228,.14);">
          <div data-count="80" data-suffix="%" style="font-family: 'Instrument Serif', serif; font-size: clamp(32px, 3.8vw, 50px); line-height: 1;">80%</div>
          <div style="margin-top: 9px; font: 400 10px/1.5 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: #8C8D88;">Faster REST<br />performance</div>
        </div>
        <div style="padding: 22px 22px 0; border-left: 1px solid rgba(237,234,228,.14);">
          <div data-count="3" data-suffix="" style="font-family: 'Instrument Serif', serif; font-size: clamp(32px, 3.8vw, 50px); line-height: 1;">3</div>
          <div style="margin-top: 9px; font: 400 10px/1.5 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: #8C8D88;">Agentic systems<br />built end-to-end</div>
        </div>
        <div style="padding: 22px 0 0 22px; border-left: 1px solid rgba(237,234,228,.14);">
          <div style="font-family: 'Instrument Serif', serif; font-size: clamp(32px, 3.8vw, 50px); line-height: 1;">2+ yrs</div>
          <div style="margin-top: 9px; font: 400 10px/1.5 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: #8C8D88;">Shipping production<br />backends</div>
        </div>
      </div>
    </div>
  </section>

  <div style="border-top: 1px solid rgba(237,234,228,.1); border-bottom: 1px solid rgba(237,234,228,.1); overflow: hidden; padding: 12px 0; background: rgba(11,12,14,.7);">
    <div style="display: flex; width: max-content; animation: agMarquee 26s linear infinite; font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .18em; text-transform: uppercase; color: #A8A9A3;">
      <div style="display: flex; gap: 26px; padding-right: 26px;"><span>LangGraph</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Graph RAG</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Multi-agent orchestration</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Neo4j</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Qdrant</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Model Context Protocol</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>FastAPI</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Spring Boot</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>LangSmith</span><span style="color: var(--ag-accent, #FFB347);">/</span></div>
      <div aria-hidden="true" style="display: flex; gap: 26px; padding-right: 26px;"><span>LangGraph</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Graph RAG</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Multi-agent orchestration</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Neo4j</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Qdrant</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Model Context Protocol</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>FastAPI</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>Spring Boot</span><span style="color: var(--ag-accent, #FFB347);">/</span><span>LangSmith</span><span style="color: var(--ag-accent, #FFB347);">/</span></div>
    </div>
  </div>

  <section id="reel" data-screen-label="Journey reel" style="max-width: 1400px; margin: 0 auto; padding: clamp(58px, 8vw, 120px) clamp(16px, 4vw, 56px);">
    <div style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 20px;">
      <div>
        <div data-reveal style="font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: var(--ag-accent, #FFB347);">The road so far</div>
        <h2 data-reveal style="margin-top: 16px; font-family: 'Instrument Serif', serif; font-weight: 400; font-size: clamp(32px, 5.2vw, 74px); line-height: 1; letter-spacing: -0.02em;">Every summit hands me <span style="font-style: italic; color: var(--ag-accent, #FFB347);">a new road</span>.</h2>
      </div>
      <p data-reveal style="max-width: 34ch; font-size: 14.5px; line-height: 1.65; color: #8C8D88; text-wrap: pretty;">Titles first, then five milestones. Java developer to production AI engineer — the short version, on loop.</p>
    </div>

    <div data-reveal style="margin: clamp(24px, 3vw, 40px) auto 0; max-width: 1000px; border: 1px solid rgba(237,234,228,.14); background: #0B0C0E; overflow: hidden;">
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 11px 14px; border-bottom: 1px solid rgba(237,234,228,.1); font: 400 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .16em; text-transform: uppercase; color: #8C8D88;">
        <span style="display: flex; align-items: center; gap: 9px;"><span style="width: 6px; height: 6px; border-radius: 50%; background: var(--ag-accent, #FFB347); animation: agBlink 1.4s ease-in-out infinite;"></span><span data-r="hudlabel">Milestone</span> <span data-film-num style="color: #EDEAE4;">01</span> / 05</span>
        <span style="display: flex; align-items: center; gap: 14px;">
          <span data-film-speed style="color: #8C8D88;">SPD 000</span>
          <span data-film-tc style="color: #EDEAE4;">0:00 / 0:28</span>
          <button data-film-play type="button" style="background: rgba(237,234,228,.07); border: 1px solid rgba(237,234,228,.2); color: #EDEAE4; font: 400 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; padding: 7px 11px; cursor: pointer; transition: background .25s, border-color .25s;" style-hover="background: rgba(255,179,71,.16); border-color: var(--ag-accent, #FFB347);">Pause</button>
          <button data-film-mute type="button" style="background: transparent; border: 1px solid rgba(237,234,228,.2); color: #EDEAE4; font: 400 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .12em; text-transform: uppercase; padding: 7px 11px; cursor: pointer;">Sound off</button>
          <button data-film-replay type="button" style="background: transparent; border: 1px solid rgba(237,234,228,.2); color: #EDEAE4; font: 400 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; padding: 7px 11px; cursor: pointer; transition: background .25s, border-color .25s;" style-hover="background: rgba(255,179,71,.16); border-color: var(--ag-accent, #FFB347);">↺</button>
        </span>
      </div>

      <div data-film style="position: relative; aspect-ratio: 16 / 9; overflow: hidden; background: #07080A;">
        <div data-scene style="position: absolute; inset: 0; transition: filter .18s linear;">
          <div style="position: absolute; inset: 0; background: linear-gradient(180deg, #07080A 0%, #12100D 38%, #2A1C0D 50%, #0C0B0A 54%, #08090A 100%);"></div>
          <div data-sun style="position: absolute; left: 50%; top: 50%; width: 46%; height: 34%; transform: translate(-50%, -76%); background: radial-gradient(closest-side, rgba(255,179,71,.55), rgba(255,179,71,.06) 62%, transparent 72%); filter: blur(2px);"></div>
          <div style="position: absolute; left: 0; right: 0; top: 50%; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,179,71,.75), transparent);"></div>

          <div style="position: absolute; inset: 0; perspective: 380px; perspective-origin: 50% 50%; overflow: hidden;">
            <div data-road style="position: absolute; left: -45%; right: -45%; top: 50%; height: 340px; transform-origin: 50% 0%; transform: rotateX(72deg); background: linear-gradient(180deg, #33291F 0%, #241D17 45%, #17130F 100%);">
              <div data-grid style="position: absolute; inset: 0; background-image: repeating-linear-gradient(180deg, rgba(255,179,71,.14) 0 3px, transparent 3px 120px); background-position: 0 0;"></div>
              <div data-dash style="position: absolute; left: 50%; top: 0; bottom: 0; width: 22px; margin-left: -11px; background-image: repeating-linear-gradient(180deg, rgba(255,226,178,.98) 0 32px, transparent 32px 88px); background-position: 0 0;"></div>
              <div style="position: absolute; left: 32%; top: 0; bottom: 0; width: 9px; background: linear-gradient(180deg, rgba(237,234,228,.25), rgba(237,234,228,.85));"></div>
              <div style="position: absolute; right: 32%; top: 0; bottom: 0; width: 9px; background: linear-gradient(180deg, rgba(237,234,228,.25), rgba(237,234,228,.85));"></div>
            </div>
          </div>

          <div data-rush style="position: absolute; left: 0; right: 0; top: 50%; height: 0; pointer-events: none;">
            <div style="position: absolute; left: 46%; top: -2px; width: 12px; height: 3px; background: var(--ag-accent, #FFB347); animation: agRushL 1.1s linear infinite;"></div>
            <div style="position: absolute; left: 46%; top: -2px; width: 12px; height: 3px; background: rgba(255,179,71,.8); animation: agRushL 1.1s linear .22s infinite;"></div>
            <div style="position: absolute; left: 46%; top: -2px; width: 12px; height: 3px; background: rgba(237,234,228,.55); animation: agRushL 1.1s linear .46s infinite;"></div>
            <div style="position: absolute; left: 46%; top: -2px; width: 12px; height: 3px; background: rgba(255,179,71,.7); animation: agRushL 1.1s linear .74s infinite;"></div>
            <div style="position: absolute; right: 46%; top: -2px; width: 12px; height: 3px; background: var(--ag-accent, #FFB347); animation: agRushR 1.1s linear .1s infinite;"></div>
            <div style="position: absolute; right: 46%; top: -2px; width: 12px; height: 3px; background: rgba(255,179,71,.8); animation: agRushR 1.1s linear .34s infinite;"></div>
            <div style="position: absolute; right: 46%; top: -2px; width: 12px; height: 3px; background: rgba(237,234,228,.55); animation: agRushR 1.1s linear .6s infinite;"></div>
            <div style="position: absolute; right: 46%; top: -2px; width: 12px; height: 3px; background: rgba(255,179,71,.7); animation: agRushR 1.1s linear .86s infinite;"></div>
          </div>

          <div style="position: absolute; inset: 0; background: radial-gradient(closest-side at 50% 48%, transparent 40%, rgba(7,8,10,.72) 100%); pointer-events: none;"></div>
          <div style="position: absolute; inset: 0; background: repeating-linear-gradient(0deg, rgba(7,8,10,.22) 0 1px, transparent 1px 3px); opacity: .55; pointer-events: none;"></div>
        </div>

        <div data-wipe style="position: absolute; inset: 0; background: linear-gradient(90deg, transparent, rgba(255,214,150,.5), transparent); opacity: 0; transform: translateX(-100%); pointer-events: none;"></div>

        <div data-intro style="position: absolute; inset: 0; z-index: 3; background: #000; display: grid; place-items: center; text-align: center; pointer-events: none; transition: opacity .2s linear;">
          <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 22px; background-image: repeating-linear-gradient(180deg, rgba(255,255,255,.9) 0 14px, transparent 14px 34px); background-size: 12px 34px; background-repeat: repeat-y; background-position: 5px 0; opacity: .5; animation: agSprocket .9s linear infinite;"></div>
          <div style="position: absolute; right: 0; top: 0; bottom: 0; width: 22px; background-image: repeating-linear-gradient(180deg, rgba(255,255,255,.9) 0 14px, transparent 14px 34px); background-size: 12px 34px; background-repeat: repeat-y; background-position: 5px 0; opacity: .5; animation: agSprocket .9s linear infinite;"></div>
          <div style="position: relative; padding: 0 34px;">
            <div style="position: relative; height: clamp(64px, 11vw, 132px); display: grid; place-items: center;">
              <div data-word style="grid-area: 1 / 1; font-family: 'Instrument Serif', serif; font-size: clamp(38px, 8vw, 106px); line-height: .95; color: #FFFFFF; opacity: 0; white-space: nowrap;">Agentic AI</div>
              <div data-word style="grid-area: 1 / 1; font: 500 clamp(13px, 1.9vw, 24px)/1 'JetBrains Mono', monospace; letter-spacing: .26em; text-transform: uppercase; color: #FFFFFF; opacity: 0; white-space: nowrap;">Graph RAG</div>
              <div data-word style="grid-area: 1 / 1; font-family: 'Manrope', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(30px, 6vw, 78px); line-height: .92; letter-spacing: -0.04em; color: #FFFFFF; opacity: 0; white-space: nowrap;">LangGraph</div>
              <div data-word style="grid-area: 1 / 1; font-family: 'Instrument Serif', serif; font-style: italic; font-size: clamp(34px, 7vw, 92px); line-height: .95; color: #FFFFFF; opacity: 0; white-space: nowrap;">Multi-agent</div>
              <div data-word style="grid-area: 1 / 1; font: 500 clamp(12px, 1.6vw, 20px)/1 'JetBrains Mono', monospace; letter-spacing: .3em; text-transform: uppercase; color: #FFFFFF; opacity: 0; white-space: nowrap;">Hybrid retrieval</div>
              <div data-word style="grid-area: 1 / 1; font-family: 'Manrope', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(40px, 8.4vw, 112px); line-height: .9; letter-spacing: -0.045em; color: #FFFFFF; opacity: 0; white-space: nowrap;">MCP</div>
              <div data-word style="grid-area: 1 / 1; font-family: 'Instrument Serif', serif; font-size: clamp(26px, 5vw, 64px); line-height: .95; color: #FFFFFF; opacity: 0; white-space: nowrap;">Vector search</div>
              <div data-word style="grid-area: 1 / 1; font-family: 'Manrope', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(24px, 4.4vw, 58px); line-height: .92; letter-spacing: -0.03em; color: #FFFFFF; opacity: 0; white-space: nowrap;">LLM systems</div>
              <div data-word style="grid-area: 1 / 1; font-family: 'Instrument Serif', serif; font-size: clamp(38px, 7.6vw, 100px); line-height: .95; color: #FFFFFF; opacity: 0; white-space: nowrap;">Transformers</div>
              <div data-word style="grid-area: 1 / 1; font: 500 clamp(12px, 1.7vw, 22px)/1 'JetBrains Mono', monospace; letter-spacing: .28em; text-transform: uppercase; color: #FFFFFF; opacity: 0; white-space: nowrap;">Embeddings</div>
              <div data-word style="grid-area: 1 / 1; font-family: 'Manrope', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(28px, 5.4vw, 72px); line-height: .92; letter-spacing: -0.035em; color: #FFFFFF; opacity: 0; white-space: nowrap;">RAG pipelines</div>
              <div data-word style="grid-area: 1 / 1; font-family: 'Instrument Serif', serif; font-size: clamp(42px, 8.6vw, 116px); line-height: .95; color: #FFFFFF; opacity: 0; white-space: nowrap;">Neo4j</div>
              <div data-word style="grid-area: 1 / 1; font: 500 clamp(13px, 1.9vw, 24px)/1 'JetBrains Mono', monospace; letter-spacing: .26em; text-transform: uppercase; color: #FFFFFF; opacity: 0; white-space: nowrap;">Qdrant</div>
              <div data-word style="grid-area: 1 / 1; font-family: 'Manrope', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(34px, 7vw, 92px); line-height: .9; letter-spacing: -0.04em; color: #FFFFFF; opacity: 0; white-space: nowrap;">FastAPI</div>
              <div data-word style="grid-area: 1 / 1; font-family: 'Instrument Serif', serif; font-style: italic; font-size: clamp(28px, 5.6vw, 74px); line-height: .95; color: #FFFFFF; opacity: 0; white-space: nowrap;">LangSmith</div>
              <div data-word style="grid-area: 1 / 1; font: 500 clamp(12px, 1.6vw, 20px)/1 'JetBrains Mono', monospace; letter-spacing: .3em; text-transform: uppercase; color: #FFFFFF; opacity: 0; white-space: nowrap;">Guardrails</div>
              <div data-word style="grid-area: 1 / 1; font-family: 'Manrope', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(44px, 9vw, 124px); line-height: .88; letter-spacing: -0.05em; color: #FFFFFF; opacity: 0; white-space: nowrap;">In production</div>
            </div>
          </div>
          <div style="position: absolute; inset: 0; background: repeating-linear-gradient(0deg, rgba(255,255,255,.05) 0 1px, transparent 1px 3px); animation: agFlicker .18s steps(2, end) infinite; pointer-events: none;"></div>
        </div>

        <div data-flash style="position: absolute; inset: 0; z-index: 4; background: #FFFFFF; opacity: 0; pointer-events: none;"></div>

        <div style="position: absolute; inset: 0; z-index: 2; padding: clamp(18px, 3.4%, 44px) clamp(16px, 4%, 48px); display: grid; justify-items: center; align-items: start; text-align: center;">
          <div data-chapter="0" style="grid-area: 1 / 1; justify-self: center; align-self: start; max-width: 34ch; will-change: transform, opacity, filter;">
            <div style="display: inline-block; background: var(--ag-accent, #FFB347); color: #08090A; font: 500 11px/1 'JetBrains Mono', monospace; letter-spacing: .18em; text-transform: uppercase; padding: 8px 13px;">Milestone 01 · 2024</div>
            <div style="margin-top: 14px; font-family: 'Manrope', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(32px, 5.8vw, 82px); line-height: .9; letter-spacing: -0.04em; color: #FFFFFF;">Base camp</div>
            <p style="display: inline-block; margin-top: 16px; background: #000000; border: 1px solid rgba(255,255,255,.85); padding: 13px 17px; font-size: clamp(14px, 1.35vw, 19px); font-weight: 500; line-height: 1.5; color: #FFFFFF; text-wrap: pretty;">Java and Spring Boot. Correctness first — make it right, make it fast, keep it standing.</p>
          </div>
          <div data-chapter="1" style="grid-area: 1 / 1; justify-self: center; align-self: start; max-width: 34ch; opacity: 0; will-change: transform, opacity, filter;">
            <div style="display: inline-block; background: var(--ag-accent, #FFB347); color: #08090A; font: 500 11px/1 'JetBrains Mono', monospace; letter-spacing: .18em; text-transform: uppercase; padding: 8px 13px;">Milestone 02 · weeks in</div>
            <div style="margin-top: 14px; font-family: 'Manrope', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(32px, 5.8vw, 82px); line-height: .9; letter-spacing: -0.04em; color: #FFFFFF;">The detour</div>
            <p style="display: inline-block; margin-top: 16px; background: #000000; border: 1px solid rgba(255,255,255,.85); padding: 13px 17px; font-size: clamp(14px, 1.35vw, 19px); font-weight: 500; line-height: 1.5; color: #FFFFFF; text-wrap: pretty;">Reassigned to SAP CDS. No tutorial existed for what I had to deliver, so I read the system until it made sense.</p>
          </div>
          <div data-chapter="2" style="grid-area: 1 / 1; justify-self: center; align-self: start; max-width: 34ch; opacity: 0; will-change: transform, opacity, filter;">
            <div style="display: inline-block; background: var(--ag-accent, #FFB347); color: #08090A; font: 500 11px/1 'JetBrains Mono', monospace; letter-spacing: .18em; text-transform: uppercase; padding: 8px 13px;">Milestone 03 · +4 months</div>
            <div style="margin-top: 14px; font-family: 'Manrope', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(32px, 5.8vw, 82px); line-height: .9; letter-spacing: -0.04em; color: #FFFFFF;">The turn</div>
            <p style="display: inline-block; margin-top: 16px; background: #000000; border: 1px solid rgba(255,255,255,.85); padding: 13px 17px; font-size: clamp(14px, 1.35vw, 19px); font-weight: 500; line-height: 1.5; color: #FFFFFF; text-wrap: pretty;">Just as CDS stopped being scary, the ask changed again: move onto the AI engineering stack.</p>
          </div>
          <div data-chapter="3" style="grid-area: 1 / 1; justify-self: center; align-self: start; max-width: 34ch; opacity: 0; will-change: transform, opacity, filter;">
            <div style="display: inline-block; background: var(--ag-accent, #FFB347); color: #08090A; font: 500 11px/1 'JetBrains Mono', monospace; letter-spacing: .18em; text-transform: uppercase; padding: 8px 13px;">Milestone 04 · steepest</div>
            <div style="margin-top: 14px; font-family: 'Manrope', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(32px, 5.8vw, 82px); line-height: .9; letter-spacing: -0.04em; color: #FFFFFF;">The climb</div>
            <p style="display: inline-block; margin-top: 16px; background: #000000; border: 1px solid rgba(255,255,255,.85); padding: 13px 17px; font-size: clamp(14px, 1.35vw, 19px); font-weight: 500; line-height: 1.5; color: #FFFFFF; text-wrap: pretty;">Shipping production AI in a stack I was still learning. Transformers at night, retrieval pipelines by morning.</p>
          </div>
          <div data-chapter="4" style="grid-area: 1 / 1; justify-self: center; align-self: start; max-width: 34ch; opacity: 0; will-change: transform, opacity, filter;">
            <div style="display: inline-block; background: var(--ag-accent, #FFB347); color: #08090A; font: 500 11px/1 'JetBrains Mono', monospace; letter-spacing: .18em; text-transform: uppercase; padding: 8px 13px;">Milestone 05 · now</div>
            <div style="margin-top: 14px; font-family: 'Manrope', sans-serif; font-weight: 800; text-transform: uppercase; font-size: clamp(32px, 5.8vw, 82px); line-height: .9; letter-spacing: -0.04em; color: #FFFFFF;">This road</div>
            <p style="display: inline-block; margin-top: 16px; background: #000000; border: 1px solid rgba(255,255,255,.85); padding: 13px 17px; font-size: clamp(14px, 1.35vw, 19px); font-weight: 500; line-height: 1.5; color: #FFFFFF; text-wrap: pretty;">Agentic Graph RAG live for real users — and already scouting the next road.</p>
          </div>
        </div>
      </div>

      <div data-film-track style="position: relative; height: 3px; background: rgba(237,234,228,.12); cursor: pointer;">
        <div data-film-bar style="position: absolute; left: 0; top: 0; bottom: 0; width: 0%; background: var(--ag-accent, #FFB347);"></div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); border-top: 1px solid rgba(237,234,228,.1);">
        <button data-jump="0" type="button" style="text-align: left; background: transparent; border: 0; border-right: 1px solid rgba(237,234,228,.1); padding: 12px 12px 14px; cursor: pointer; color: #8C8D88; font-family: inherit; transition: background .25s, color .25s;" style-hover="background: rgba(255,179,71,.08); color: #EDEAE4;">
          <div style="font: 500 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .16em;">01</div>
          <div style="margin-top: 7px; font-size: 12px; font-weight: 500; line-height: 1.3;">Base camp</div>
        </button>
        <button data-jump="1" type="button" style="text-align: left; background: transparent; border: 0; border-right: 1px solid rgba(237,234,228,.1); padding: 12px 12px 14px; cursor: pointer; color: #8C8D88; font-family: inherit; transition: background .25s, color .25s;" style-hover="background: rgba(255,179,71,.08); color: #EDEAE4;">
          <div style="font: 500 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .16em;">02</div>
          <div style="margin-top: 7px; font-size: 12px; font-weight: 500; line-height: 1.3;">The detour</div>
        </button>
        <button data-jump="2" type="button" style="text-align: left; background: transparent; border: 0; border-right: 1px solid rgba(237,234,228,.1); padding: 12px 12px 14px; cursor: pointer; color: #8C8D88; font-family: inherit; transition: background .25s, color .25s;" style-hover="background: rgba(255,179,71,.08); color: #EDEAE4;">
          <div style="font: 500 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .16em;">03</div>
          <div style="margin-top: 7px; font-size: 12px; font-weight: 500; line-height: 1.3;">The turn</div>
        </button>
        <button data-jump="3" type="button" style="text-align: left; background: transparent; border: 0; border-right: 1px solid rgba(237,234,228,.1); padding: 12px 12px 14px; cursor: pointer; color: #8C8D88; font-family: inherit; transition: background .25s, color .25s;" style-hover="background: rgba(255,179,71,.08); color: #EDEAE4;">
          <div style="font: 500 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .16em;">04</div>
          <div style="margin-top: 7px; font-size: 12px; font-weight: 500; line-height: 1.3;">The climb</div>
        </button>
        <button data-jump="4" type="button" style="text-align: left; background: transparent; border: 0; padding: 12px 12px 14px; cursor: pointer; color: #8C8D88; font-family: inherit; transition: background .25s, color .25s;" style-hover="background: rgba(255,179,71,.08); color: #EDEAE4;">
          <div style="font: 500 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .16em;">05</div>
          <div style="margin-top: 7px; font-size: 12px; font-weight: 500; line-height: 1.3;">This road</div>
        </button>
      </div>
    </div>

    <blockquote data-reveal style="margin-top: clamp(40px, 6vw, 82px); max-width: 26ch; font-family: 'Instrument Serif', serif; font-size: clamp(28px, 4.4vw, 62px); line-height: 1.04; letter-spacing: -0.02em; text-wrap: balance;">Restlessness is the point. <span style="font-style: italic; color: var(--ag-accent, #FFB347);">Better</span> is a road, not a summit.</blockquote>
  </section>

  <section id="work" data-screen-label="Experience" style="border-top: 1px solid rgba(237,234,228,.1); background: rgba(11,12,14,.72);">
    <div style="max-width: 1400px; margin: 0 auto; padding: clamp(58px, 8vw, 120px) clamp(16px, 4vw, 56px);">
      <div data-r="two" style="display: grid; grid-template-columns: minmax(0, 250px) minmax(0, 1fr); gap: clamp(26px, 5vw, 76px);">
        <div data-r="sticky" style="position: sticky; top: 92px; align-self: start;">
          <div style="font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: var(--ag-accent, #FFB347);">Experience</div>
          <div style="margin-top: 14px; height: 1px; background: rgba(237,234,228,.2);"></div>
          <div style="margin-top: 14px; font: 400 10.5px/1.7 'JetBrains Mono', monospace; letter-spacing: .1em; text-transform: uppercase; color: #8C8D88;">Asint Pvt. Ltd<br />Ahmedabad, Gujarat<br />Aug 2024 — Present</div>
        </div>
        <div>
          <h2 data-reveal style="font-family: 'Instrument Serif', serif; font-weight: 400; font-size: clamp(30px, 4.6vw, 66px); line-height: 1.02; letter-spacing: -0.02em;">Business problems first, <span style="font-style: italic; color: var(--ag-accent, #FFB347);">models second</span>.</h2>
          <p data-reveal style="margin-top: 18px; max-width: 62ch; font-size: 16px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Software Engineer at Asint — backend ownership across production systems, now applied to the agentic AI stack running for real users.</p>

          <div style="margin-top: clamp(28px, 4vw, 48px);">
            <div data-reveal data-row style="border-top: 1px solid rgba(237,234,228,.14); padding: 20px 0; display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 16px; transition: padding-left .4s cubic-bezier(.16,1,.3,1), background .4s;">
              <span style="font: 500 10.5px/1.9 'JetBrains Mono', monospace; color: var(--ag-accent, #FFB347);">01</span>
              <div>
                <h3 style="font-size: 17px; font-weight: 700; line-height: 1.35;">Agentic Graph RAG assistant, in production</h3>
                <p style="margin-top: 8px; max-width: 68ch; font-size: 15px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Built the retrieval pipeline — Neo4j graph queries wired into LangChain/LangGraph for context retrieval — and contributed the multi-agent orchestration layer's coordination and task-routing logic. Domain experts get grounded answers instead of hunting through systems.</p>
              </div>
            </div>
            <div data-reveal data-row style="border-top: 1px solid rgba(237,234,228,.14); padding: 20px 0; display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 16px; transition: padding-left .4s cubic-bezier(.16,1,.3,1), background .4s;">
              <span style="font: 500 10.5px/1.9 'JetBrains Mono', monospace; color: var(--ag-accent, #FFB347);">02</span>
              <div>
                <h3 style="font-size: 17px; font-weight: 700; line-height: 1.35;">Risk-based inspection APIs — 60% less operational risk</h3>
                <p style="margin-top: 8px; max-width: 68ch; font-size: 15px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Designed and built the APIs behind an analytics-driven reliability platform, applying rule-based scoring so inspection effort lands where failure actually costs money.</p>
              </div>
            </div>
            <div data-reveal data-row style="border-top: 1px solid rgba(237,234,228,.14); padding: 20px 0; display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 16px; transition: padding-left .4s cubic-bezier(.16,1,.3,1), background .4s;">
              <span style="font: 500 10.5px/1.9 'JetBrains Mono', monospace; color: var(--ag-accent, #FFB347);">03</span>
              <div>
                <h3 style="font-size: 17px; font-weight: 700; line-height: 1.35;">80% faster REST performance</h3>
                <p style="margin-top: 8px; max-width: 68ch; font-size: 15px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Query tuning and response-efficiency work across the backend — cheaper infrastructure, and screens that respond fast enough for people to trust them.</p>
              </div>
            </div>
            <div data-reveal data-row style="border-top: 1px solid rgba(237,234,228,.14); border-bottom: 1px solid rgba(237,234,228,.14); padding: 20px 0; display: grid; grid-template-columns: 34px minmax(0, 1fr); gap: 16px; transition: padding-left .4s cubic-bezier(.16,1,.3,1), background .4s;">
              <span style="font: 500 10.5px/1.9 'JetBrains Mono', monospace; color: var(--ag-accent, #FFB347);">04</span>
              <div>
                <h3 style="font-size: 17px; font-weight: 700; line-height: 1.35;">End-to-end ownership</h3>
                <p style="margin-top: 8px; max-width: 68ch; font-size: 15px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Owned backend development across multiple production systems — translating business rules into reliable, scalable REST APIs in Java and Spring Boot, and debugging complex production issues through root-cause analysis and performance tuning.</p>
              </div>
            </div>
          </div>

          <div style="margin-top: 18px; display: flex; flex-wrap: wrap; gap: 7px;">
            <span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 7px 12px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">Java</span>
            <span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 7px 12px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">Spring Boot</span>
            <span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 7px 12px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">Neo4j</span>
            <span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 7px 12px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">LangChain</span>
            <span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 7px 12px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">LangGraph</span>
            <span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 7px 12px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">SAP CDS / HANA</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projects" data-screen-label="Projects" style="max-width: 1400px; margin: 0 auto; padding: clamp(58px, 8vw, 120px) clamp(16px, 4vw, 56px);">
    <div data-reveal style="font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: var(--ag-accent, #FFB347);">Selected work</div>
    <h2 data-reveal style="margin-top: 16px; font-family: 'Instrument Serif', serif; font-weight: 400; font-size: clamp(32px, 5.2vw, 74px); line-height: 1; letter-spacing: -0.02em;">Some of systems <span style="font-style: italic; color: var(--ag-accent, #FFB347);">built end-to-end</span>.</h2>

    <article data-reveal data-proj style="margin-top: clamp(30px, 4vw, 54px); border-top: 1px solid rgba(237,234,228,.16); padding-top: clamp(20px, 3vw, 34px);">
      <div data-r="proj" style="display: grid; grid-template-columns: minmax(0, .78fr) minmax(0, 1.22fr); gap: clamp(20px, 3.4vw, 52px);">
        <div style="position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: #101214; border: 1px solid rgba(237,234,228,.12);">
          <div style="position: absolute; inset: 0; background: radial-gradient(120% 90% at 20% 10%, rgba(255,179,71,.32), transparent 60%), linear-gradient(160deg, #16130F, #0A0B0C);"></div>
          <div style="position: absolute; inset: 0; background-image: repeating-linear-gradient(90deg, rgba(237,234,228,.06) 0 1px, transparent 1px 46px), repeating-linear-gradient(0deg, rgba(237,234,228,.06) 0 1px, transparent 1px 46px);"></div>
          <img src="uploads/pasted-1788405875914-0.png" alt="EquityLens" style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) contrast(1.1) brightness(.8); opacity: .55; transition: transform .8s cubic-bezier(.16,1,.3,1);" data-projimg />
          <div style="position: absolute; left: 14px; top: 12px; font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .18em; color: var(--ag-accent, #FFB347);">01</div>
          <div style="position: absolute; left: 14px; right: 14px; bottom: 12px; font: 400 9.5px/1.5 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: #C6C4BE;">Agentic finance · hybrid RAG</div>
        </div>
        <div>
          <h3 style="font-family: 'Instrument Serif', serif; font-size: clamp(28px, 3.6vw, 48px); line-height: 1; letter-spacing: -0.02em;">EquityLens</h3>
          <div style="margin-top: 10px; font: 400 10.5px/1.6 'JetBrains Mono', monospace; color: #8C8D88;">Agentic market &amp; company research analyst · Jul–Aug 2026</div>
          <p style="margin-top: 14px; max-width: 66ch; font-size: 15px; line-height: 1.72; color: #A8A9A3; text-wrap: pretty;">Turns a research question into a fact-checked brief from SEC filings, live market data, and breaking news — the work an analyst would spend a day on. A LangGraph workflow coordinates planning, parallel research, synthesis, and fact-checking; a bounded correction loop revises unsupported claims, and hybrid RAG returns citation-grounded filing passages. MCP tools supply live financial context, with LangSmith tracing every agent, model, and tool call.</p>
          <div style="margin-top: 18px; display: flex; flex-wrap: wrap; gap: 7px;">
            <span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">Claude API</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">LangGraph</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">MCP</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">FastAPI</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">React</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">Qdrant / pgvector</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">LangSmith</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">AWS</span>
          </div>
          <a href="https://github.com/Abhi-2023/equity-lens" target="_blank" rel="noopener" style="display: inline-block; margin-top: 20px; color: #EDEAE4; border-bottom: 1px solid rgba(237,234,228,.35); padding-bottom: 4px; font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; transition: color .25s, border-color .25s;" style-hover="color: var(--ag-accent, #FFB347); border-color: var(--ag-accent, #FFB347);">View on GitHub ↗</a>
        </div>
      </div>
    </article>

    <article data-reveal data-proj style="margin-top: clamp(30px, 4vw, 54px); border-top: 1px solid rgba(237,234,228,.16); padding-top: clamp(20px, 3vw, 34px);">
      <div data-r="proj" style="display: grid; grid-template-columns: minmax(0, .78fr) minmax(0, 1.22fr); gap: clamp(20px, 3.4vw, 52px);">
        <div style="position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: #101214; border: 1px solid rgba(237,234,228,.12); display: grid; place-items: center;">
          <div style="position: absolute; inset: 0; background: radial-gradient(110% 90% at 80% 15%, rgba(255,179,71,.28), transparent 62%), linear-gradient(160deg, #14120F, #0A0B0C);"></div>
          <div style="position: absolute; inset: 0; background-image: repeating-linear-gradient(90deg, rgba(237,234,228,.06) 0 1px, transparent 1px 46px), repeating-linear-gradient(0deg, rgba(237,234,228,.06) 0 1px, transparent 1px 46px);"></div>
          <img src="uploads/pasted-1788405912529-0.png" alt="Synthr" data-projimg style="position: relative; width: 42%; height: auto; border-radius: 50%; filter: grayscale(1) contrast(1.1) brightness(.9); transition: transform .8s cubic-bezier(.16,1,.3,1);" />
          <div style="position: absolute; left: 14px; top: 12px; font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .18em; color: var(--ag-accent, #FFB347);">02</div>
          <div style="position: absolute; left: 14px; right: 14px; bottom: 12px; font: 400 9.5px/1.5 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: #C6C4BE;">Agentic software engineering</div>
        </div>
        <div>
          <h3 style="font-family: 'Instrument Serif', serif; font-size: clamp(28px, 3.6vw, 48px); line-height: 1; letter-spacing: -0.02em;">Synthr</h3>
          <div style="margin-top: 10px; font: 400 10.5px/1.6 'JetBrains Mono', monospace; color: #8C8D88;">Agentic SWE assistant · May 2026</div>
          <p style="margin-top: 14px; max-width: 66ch; font-size: 15px; line-height: 1.72; color: #A8A9A3; text-wrap: pretty;">Resolves GitHub tickets end-to-end: ingests an issue, classifies intent, retrieves codebase context via hybrid RAG (dense + BM25 with RRF fusion, Cohere reranking, Tree-sitter AST chunking), generates and edits code, validates changes with automated test runs in Docker, and opens a PR. A six-agent LangGraph pipeline carries the workflow with structured Pydantic hand-offs, while webhook-triggered Celery workers keep the vector index in sync with the live repo.</p>
          <div style="margin-top: 18px; display: flex; flex-wrap: wrap; gap: 7px;">
            <span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">LangGraph</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">Claude API</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">Qdrant</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">FastAPI</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">Celery</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">PostgreSQL</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">Docker</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">AWS</span>
          </div>
          <a href="https://github.com/Abhi-2023/SWE-AI-Assistant" target="_blank" rel="noopener" style="display: inline-block; margin-top: 20px; color: #EDEAE4; border-bottom: 1px solid rgba(237,234,228,.35); padding-bottom: 4px; font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; transition: color .25s, border-color .25s;" style-hover="color: var(--ag-accent, #FFB347); border-color: var(--ag-accent, #FFB347);">View on GitHub ↗</a>
        </div>
      </div>
    </article>

    <article data-reveal data-proj style="margin-top: clamp(30px, 4vw, 54px); border-top: 1px solid rgba(237,234,228,.16); border-bottom: 1px solid rgba(237,234,228,.16); padding: clamp(20px, 3vw, 34px) 0 clamp(24px, 3.4vw, 40px);">
      <div data-r="proj" style="display: grid; grid-template-columns: minmax(0, .78fr) minmax(0, 1.22fr); gap: clamp(20px, 3.4vw, 52px);">
        <div style="position: relative; aspect-ratio: 4 / 3; overflow: hidden; background: #101214; border: 1px solid rgba(237,234,228,.12);">
          <div style="position: absolute; inset: 0; background: radial-gradient(110% 90% at 40% 90%, rgba(255,179,71,.26), transparent 60%), linear-gradient(160deg, #14120F, #0A0B0C);"></div>
          <img src="uploads/pasted-1788405971319-0.png" alt="Nexus AI" data-projimg style="position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: grayscale(1) contrast(1.1) brightness(.78); opacity: .6; transition: transform .8s cubic-bezier(.16,1,.3,1);" />
          <div style="position: absolute; left: 14px; top: 12px; font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .18em; color: var(--ag-accent, #FFB347);">03</div>
          <div style="position: absolute; left: 14px; right: 14px; bottom: 12px; font: 400 9.5px/1.5 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; color: #C6C4BE;">Multimodal RAG</div>
        </div>
        <div>
          <h3 style="font-family: 'Instrument Serif', serif; font-size: clamp(28px, 3.6vw, 48px); line-height: 1; letter-spacing: -0.02em;">Nexus AI</h3>
          <div style="margin-top: 10px; font: 400 10.5px/1.6 'JetBrains Mono', monospace; color: #8C8D88;">Multimodal AI assistant · Apr 2026</div>
          <p style="margin-top: 14px; max-width: 66ch; font-size: 15px; line-height: 1.72; color: #A8A9A3; text-wrap: pretty;">A full-stack multimodal assistant: RAG document analysis, image understanding via Claude Vision, and real-time token streaming over SSE. PDF ingestion flows through semantic chunking, MiniLM embeddings, and a ChromaDB vector store into Claude with page-level citations — retrieval scoped per user and per file so answers stay traceable.</p>
          <div style="margin-top: 18px; display: flex; flex-wrap: wrap; gap: 7px;">
            <span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">Python</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">FastAPI</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">Claude Vision</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">ChromaDB</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">MiniLM</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">PostgreSQL</span><span data-chip style="border: 1px solid rgba(237,234,228,.18); padding: 6px 11px; font: 400 10.5px/1 'JetBrains Mono', monospace; color: #A8A9A3; transition: transform .25s, border-color .25s, color .25s;">SSE</span>
          </div>
          <a href="https://github.com/Abhi-2023/QA-Chat-Engine" target="_blank" rel="noopener" style="display: inline-block; margin-top: 20px; color: #EDEAE4; border-bottom: 1px solid rgba(237,234,228,.35); padding-bottom: 4px; font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; transition: color .25s, border-color .25s;" style-hover="color: var(--ag-accent, #FFB347); border-color: var(--ag-accent, #FFB347);">View on GitHub ↗</a>
        </div>
      </div>
    </article>
  </section>

  <section id="capabilities" data-screen-label="Capabilities" style="border-top: 1px solid rgba(237,234,228,.1); background: rgba(11,12,14,.72);">
    <div style="max-width: 1400px; margin: 0 auto; padding: clamp(58px, 8vw, 120px) clamp(16px, 4vw, 56px);">
      <div data-reveal style="font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: var(--ag-accent, #FFB347);">What I build</div>
      <h2 data-reveal style="margin-top: 16px; max-width: 24ch; font-family: 'Instrument Serif', serif; font-weight: 400; font-size: clamp(30px, 4.8vw, 68px); line-height: 1.02; letter-spacing: -0.02em;">Intelligence is the easy half. <span style="font-style: italic; color: var(--ag-accent, #FFB347);">Reliability</span> is the job.</h2>

      <div style="margin-top: clamp(30px, 4vw, 54px); display: grid; grid-template-columns: repeat(auto-fit, minmax(276px, 1fr)); gap: 1px; background: rgba(237,234,228,.12);">
        <div data-reveal data-tile style="background: #0B0C0E; padding: 26px 24px 32px; transition: background .35s, transform .45s cubic-bezier(.16,1,.3,1);">
          <div style="font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .16em; color: var(--ag-accent, #FFB347);">01</div>
          <h3 style="margin-top: 16px; font-size: 19px; font-weight: 700; line-height: 1.25;">Agentic AI systems</h3>
          <p style="margin-top: 10px; font-size: 14.5px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Multi-agent workflows that plan, reason, use tools, retrieve, and finish a task without a human in the loop for every step.</p>
        </div>
        <div data-reveal data-tile style="background: #0B0C0E; padding: 26px 24px 32px; transition: background .35s, transform .45s cubic-bezier(.16,1,.3,1);">
          <div style="font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .16em; color: var(--ag-accent, #FFB347);">02</div>
          <h3 style="margin-top: 16px; font-size: 19px; font-weight: 700; line-height: 1.25;">Retrieval-Augmented Generation</h3>
          <p style="margin-top: 10px; font-size: 14.5px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Context-aware systems that ground answers in enterprise knowledge — hybrid retrieval, reranking, and citations you can check.</p>
        </div>
        <div data-reveal data-tile style="background: #0B0C0E; padding: 26px 24px 32px; transition: background .35s, transform .45s cubic-bezier(.16,1,.3,1);">
          <div style="font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .16em; color: var(--ag-accent, #FFB347);">03</div>
          <h3 style="margin-top: 16px; font-size: 19px; font-weight: 700; line-height: 1.25;">LLM applications</h3>
          <p style="margin-top: 10px; font-size: 14.5px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Chat, automation, and document analysis built on modern language models — streaming, evaluated, and cost-aware.</p>
        </div>
        <div data-reveal data-tile style="background: #0B0C0E; padding: 26px 24px 32px; transition: background .35s, transform .45s cubic-bezier(.16,1,.3,1);">
          <div style="font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .16em; color: var(--ag-accent, #FFB347);">04</div>
          <h3 style="margin-top: 16px; font-size: 19px; font-weight: 700; line-height: 1.25;">Backend &amp; API engineering</h3>
          <p style="margin-top: 10px; font-size: 14.5px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Scalable services and APIs — the substrate that decides whether an AI feature holds up under real traffic.</p>
        </div>
        <div data-reveal data-tile style="background: #0B0C0E; padding: 26px 24px 32px; transition: background .35s, transform .45s cubic-bezier(.16,1,.3,1);">
          <div style="font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .16em; color: var(--ag-accent, #FFB347);">05</div>
          <h3 style="margin-top: 16px; font-size: 19px; font-weight: 700; line-height: 1.25;">AI integration</h3>
          <p style="margin-top: 10px; font-size: 14.5px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Fitting AI into systems and workflows that already exist, without asking the business to rebuild around it.</p>
        </div>
        <div data-reveal data-tile style="background: #0B0C0E; padding: 26px 24px 32px; transition: background .35s, transform .45s cubic-bezier(.16,1,.3,1);">
          <div style="font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .16em; color: var(--ag-accent, #FFB347);">06</div>
          <h3 style="margin-top: 16px; font-size: 19px; font-weight: 700; line-height: 1.25;">ML &amp; NLP solutions</h3>
          <p style="margin-top: 10px; font-size: 14.5px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Classification, prediction, semantic search, and embeddings work where a full LLM is the wrong tool.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="stack" data-screen-label="Stack" style="background-image: linear-gradient(180deg, rgba(228,223,214,0) 0, rgba(228,223,214,.28) 46px, rgba(228,223,214,.92) 150px, rgba(228,223,214,.92) calc(100% - 150px), rgba(228,223,214,.28) calc(100% - 46px), rgba(228,223,214,0) 100%);">
    <div style="max-width: 1400px; margin: 0 auto; padding: clamp(96px, 11vw, 168px) clamp(16px, 4vw, 56px);">
      <div style="display: flex; flex-wrap: wrap; align-items: flex-end; justify-content: space-between; gap: 18px; padding-bottom: clamp(24px, 3vw, 40px);">
        <div>
          <div style="display: inline-block; background: #08090A; color: #E8E4DC; padding: 7px 12px; font: 500 11px/1 'JetBrains Mono', monospace; letter-spacing: .22em; text-transform: uppercase;">Stack</div>
          <h2 data-reveal style="margin-top: 18px; font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(42px, 9vw, 132px); line-height: .84; letter-spacing: -0.045em; text-transform: uppercase; color: #08090A;">Tools I<br />build with</h2>
        </div>
        <div style="max-width: 30ch; border-left: 4px solid #08090A; padding-left: 14px; font: 400 13px/1.55 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A;">Six layers. Everything here has shipped in something real.</div>
      </div>
      <div style="border-top: 4px solid #08090A;">
      <div data-reveal style="display: grid; grid-template-columns: minmax(0, 88px) minmax(0, 260px) minmax(0, 1fr); gap: 20px; align-items: start; padding: 26px 0; border-bottom: 2px solid #08090A;">
        <div style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(38px, 4.4vw, 62px); line-height: .8; letter-spacing: -0.05em; color: #08090A; -webkit-text-stroke: 2px #08090A; color: transparent;">01</div>
        <h3 style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(15px, 1.5vw, 20px); line-height: 1.1; text-transform: uppercase; letter-spacing: -0.01em; color: #08090A;">AI &amp; agents</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;"><span data-bchip style="display: inline-block; background: #FFB347; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">LangChain</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">LangGraph</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">RAG / Graph RAG</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Prompt &amp; context engineering</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Fine-tuning</span><span data-bchip style="display: inline-block; background: #FFB347; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Model Context Protocol</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">FastMCP</span></div>
      </div>
      <div data-reveal style="display: grid; grid-template-columns: minmax(0, 88px) minmax(0, 260px) minmax(0, 1fr); gap: 20px; align-items: start; padding: 26px 0; border-bottom: 2px solid #08090A;">
        <div style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(38px, 4.4vw, 62px); line-height: .8; letter-spacing: -0.05em; color: #08090A; -webkit-text-stroke: 2px #08090A; color: transparent;">02</div>
        <h3 style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(15px, 1.5vw, 20px); line-height: 1.1; text-transform: uppercase; letter-spacing: -0.01em; color: #08090A;">ML, NLP &amp; libraries</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;"><span data-bchip style="display: inline-block; background: #FFB347; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">PyTorch</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">TensorFlow</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Transformers</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Hugging Face</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Scikit-learn</span><span data-bchip style="display: inline-block; background: #FFB347; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">NumPy / Pandas</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Embeddings</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Semantic search</span></div>
      </div>
      <div data-reveal style="display: grid; grid-template-columns: minmax(0, 88px) minmax(0, 260px) minmax(0, 1fr); gap: 20px; align-items: start; padding: 26px 0; border-bottom: 2px solid #08090A;">
        <div style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(38px, 4.4vw, 62px); line-height: .8; letter-spacing: -0.05em; color: #08090A; -webkit-text-stroke: 2px #08090A; color: transparent;">03</div>
        <h3 style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(15px, 1.5vw, 20px); line-height: 1.1; text-transform: uppercase; letter-spacing: -0.01em; color: #08090A;">Languages &amp; data</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;"><span data-bchip style="display: inline-block; background: #FFB347; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Java</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Python</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Spring Boot</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">PostgreSQL</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">MySQL</span><span data-bchip style="display: inline-block; background: #FFB347; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">MongoDB</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">SAP HANA</span></div>
      </div>
      <div data-reveal style="display: grid; grid-template-columns: minmax(0, 88px) minmax(0, 260px) minmax(0, 1fr); gap: 20px; align-items: start; padding: 26px 0; border-bottom: 2px solid #08090A;">
        <div style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(38px, 4.4vw, 62px); line-height: .8; letter-spacing: -0.05em; color: #08090A; -webkit-text-stroke: 2px #08090A; color: transparent;">04</div>
        <h3 style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(15px, 1.5vw, 20px); line-height: 1.1; text-transform: uppercase; letter-spacing: -0.01em; color: #08090A;">Vector &amp; graph stores</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;"><span data-bchip style="display: inline-block; background: #FFB347; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Neo4j</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Qdrant</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">ChromaDB</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">FAISS</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Pinecone</span><span data-bchip style="display: inline-block; background: #FFB347; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">pgvector</span></div>
      </div>
      <div data-reveal style="display: grid; grid-template-columns: minmax(0, 88px) minmax(0, 260px) minmax(0, 1fr); gap: 20px; align-items: start; padding: 26px 0; border-bottom: 2px solid #08090A;">
        <div style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(38px, 4.4vw, 62px); line-height: .8; letter-spacing: -0.05em; color: #08090A; -webkit-text-stroke: 2px #08090A; color: transparent;">05</div>
        <h3 style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(15px, 1.5vw, 20px); line-height: 1.1; text-transform: uppercase; letter-spacing: -0.01em; color: #08090A;">Reliability &amp; guardrails</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;"><span data-bchip style="display: inline-block; background: #FFB347; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">LangSmith</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">AWS Bedrock Guardrails</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Guardrail AI</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Model versioning</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Pipeline monitoring</span></div>
      </div>
      <div data-reveal style="display: grid; grid-template-columns: minmax(0, 88px) minmax(0, 260px) minmax(0, 1fr); gap: 20px; align-items: start; padding: 26px 0; border-bottom: 2px solid #08090A;">
        <div style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(38px, 4.4vw, 62px); line-height: .8; letter-spacing: -0.05em; color: #08090A; -webkit-text-stroke: 2px #08090A; color: transparent;">06</div>
        <h3 style="font-family: 'Manrope', sans-serif; font-weight: 800; font-size: clamp(15px, 1.5vw, 20px); line-height: 1.1; text-transform: uppercase; letter-spacing: -0.01em; color: #08090A;">Cloud &amp; delivery</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;"><span data-bchip style="display: inline-block; background: #FFB347; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Docker</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Docker Compose</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">GitHub Actions</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">AWS EC2 / S3 / Bedrock</span><span data-bchip style="display: inline-block; background: #F4F2EE; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Git &amp; GitHub</span><span data-bchip style="display: inline-block; background: #FFB347; border: 2px solid #08090A; box-shadow: 3px 3px 0 #08090A; padding: 8px 12px; font: 500 12px/1 'JetBrains Mono', monospace; text-transform: uppercase; letter-spacing: .04em; color: #08090A; transition: transform .15s steps(2), box-shadow .15s steps(2);" style-hover="transform: translate(-2px, -2px); box-shadow: 6px 6px 0 #08090A;">Event-driven architecture</span></div>
      </div>
      </div>
    </div>
  </section>

  <section data-screen-label="Why me" style="border-top: 1px solid rgba(237,234,228,.1); background: rgba(11,12,14,.72);">
    <div style="max-width: 1400px; margin: 0 auto; padding: clamp(58px, 8vw, 120px) clamp(16px, 4vw, 56px);">
      <div data-r="two" style="display: grid; grid-template-columns: minmax(0, 250px) minmax(0, 1fr); gap: clamp(26px, 5vw, 76px);">
        <div data-r="sticky" style="position: sticky; top: 92px; align-self: start;">
          <div style="font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: var(--ag-accent, #FFB347);">Why me</div>
          <div style="margin-top: 14px; height: 1px; background: rgba(237,234,228,.2);"></div>
          <p style="margin-top: 14px; font-size: 14px; line-height: 1.7; color: #8C8D88; text-wrap: pretty;">Two perspectives in one engineer: the discipline that keeps software running, and the AI depth that makes it useful.</p>
        </div>
        <div>
          <h2 data-reveal style="font-family: 'Instrument Serif', serif; font-weight: 400; font-size: clamp(30px, 4.6vw, 66px); line-height: 1.02; letter-spacing: -0.02em;">Engineering rigor meets AI capability</h2>
          <div style="margin-top: clamp(26px, 3.4vw, 42px);">
            <div data-reveal data-row style="border-top: 1px solid rgba(237,234,228,.14); padding: 18px 0; transition: padding-left .4s cubic-bezier(.16,1,.3,1), background .4s;">
              <h3 style="font-size: 16.5px; font-weight: 700; line-height: 1.35;">A strong software-engineering foundation</h3>
              <p style="margin-top: 8px; max-width: 68ch; font-size: 15px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Years of backend work mean I understand APIs, data, performance, and system design — the substrate every reliable AI product is built on.</p>
            </div>
            <div data-reveal data-row style="border-top: 1px solid rgba(237,234,228,.14); padding: 18px 0; transition: padding-left .4s cubic-bezier(.16,1,.3,1), background .4s;">
              <h3 style="font-size: 16.5px; font-weight: 700; line-height: 1.35;">Working systems, not demos</h3>
              <p style="margin-top: 8px; max-width: 68ch; font-size: 15px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Agentic workflows, RAG pipelines, and LLM apps built end-to-end, with real retrieval, tooling, tracing, and evaluation behind them.</p>
            </div>
            <div data-reveal data-row style="border-top: 1px solid rgba(237,234,228,.14); padding: 18px 0; transition: padding-left .4s cubic-bezier(.16,1,.3,1), background .4s;">
              <h3 style="font-size: 16.5px; font-weight: 700; line-height: 1.35;">Fluent on both sides</h3>
              <p style="margin-top: 8px; max-width: 68ch; font-size: 15px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">I move comfortably between Spring Boot APIs and LangGraph agents, between SQL schemas and vector stores — two worlds that rarely meet in one engineer.</p>
            </div>
            <div data-reveal data-row style="border-top: 1px solid rgba(237,234,228,.14); border-bottom: 1px solid rgba(237,234,228,.14); padding: 18px 0; transition: padding-left .4s cubic-bezier(.16,1,.3,1), background .4s;">
              <h3 style="font-size: 16.5px; font-weight: 700; line-height: 1.35;">I start from the business problem</h3>
              <p style="margin-top: 8px; max-width: 68ch; font-size: 15px; line-height: 1.7; color: #A8A9A3; text-wrap: pretty;">Not from the model. Then I commit to reliability, scalability, maintainability, and the boring follow-through that keeps value compounding.</p>
            </div>
          </div>

                    </div>
        </div>
      </div>
    </div>
  </section>

<section id="qualifications" data-screen-label="Qualifications" style="border-top: 1px solid rgba(237,234,228,.1);">
    <div style="max-width: 1400px; margin: 0 auto; padding: clamp(52px, 7vw, 100px) clamp(16px, 4vw, 56px);">
      <div data-reveal style="font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: var(--ag-accent, #FFB347);">Qualifications</div>
      <h2 data-reveal style="margin: 16px 0 clamp(26px, 3.5vw, 44px); font-family: 'Instrument Serif', serif; font-weight: 400; font-size: clamp(30px, 4.8vw, 68px); line-height: 1.02; letter-spacing: -0.02em;">Where the training came from</h2>
      <div data-reveal style="display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 1px; background: rgba(237,234,228,.12);">
            <div style="background: rgba(8,9,10,.66); padding: 26px 24px 30px;"><div style="font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .16em; color: var(--ag-accent, #FFB347);">2026</div><div style="margin-top: 12px; font-size: 15.5px; font-weight: 700; line-height: 1.3;">MCA, Data Science</div><div style="margin-top: 6px; font-size: 13.5px; color: #8C8D88;">Lovely Professional University · in progress</div></div>
            <div style="background: rgba(8,9,10,.66); padding: 26px 24px 30px;"><div style="font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .16em; color: var(--ag-accent, #FFB347);">2025</div><div style="margin-top: 12px; font-size: 15.5px; font-weight: 700; line-height: 1.3;">BBA</div><div style="margin-top: 6px; font-size: 13.5px; color: #8C8D88;">Indira Gandhi National Open University</div></div>
            <div style="background: rgba(8,9,10,.66); padding: 26px 24px 30px;"><div style="font: 500 10px/1 'JetBrains Mono', monospace; letter-spacing: .16em; color: var(--ag-accent, #FFB347);">Now</div><div style="margin-top: 12px; font-size: 15.5px; font-weight: 700; line-height: 1.3;">Still learning in public</div><div style="margin-top: 6px; font-size: 13.5px; color: #8C8D88;">Agent evaluation, retrieval quality, cost control</div></div>
    </div>
  </section>

  <section id="contact" data-screen-label="Contact" style="position: relative; overflow: hidden; border-top: 1px solid rgba(237,234,228,.1);">
    <div style="position: absolute; left: 50%; bottom: -40%; width: 110vw; height: 80vh; transform: translateX(-50%); background: radial-gradient(closest-side, rgba(255,179,71,.16), transparent 70%); animation: agGlow 11s ease-in-out infinite; pointer-events: none;"></div>
    <div style="position: relative; max-width: 1400px; margin: 0 auto; padding: clamp(58px, 8vw, 120px) clamp(16px, 4vw, 56px);">
      <div data-reveal style="font: 400 10.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: var(--ag-accent, #FFB347);">Contact</div>
      <h2 data-reveal style="margin-top: 16px; max-width: 20ch; font-family: 'Instrument Serif', serif; font-weight: 400; font-size: clamp(34px, 6vw, 88px); line-height: .98; letter-spacing: -0.025em;">Let's build something that <span style="font-style: italic; color: var(--ag-accent, #FFB347);">holds up</span>.</h2>
      <p data-reveal style="margin-top: 20px; max-width: 58ch; font-size: 16px; line-height: 1.72; color: #A8A9A3; text-wrap: pretty;">AI-powered applications, RAG systems, agentic workflows, or the backend underneath them — I'd be glad to talk.</p>

      <div style="margin-top: clamp(30px, 4vw, 52px); display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 1px; background: rgba(237,234,228,.14);">
        <a href="mailto:abhishekofficials2004@gmail.com?cc=abhishekgupta862004@gmail.com" data-row style="background: #08090A; color: #EDEAE4; padding: 20px 20px 24px; display: block; transition: background .35s, padding-left .4s cubic-bezier(.16,1,.3,1);">
          <div style="font: 400 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: #8C8D88;">Email</div>
          <div style="margin-top: 12px; font-size: clamp(14px, 1.3vw, 17px); word-break: break-word;">abhishekofficials2004@gmail.com</div>
        </a>
        <a href="https://www.linkedin.com/in/abhishek-gupta-7a2040221/" target="_blank" rel="noopener" data-row style="background: #08090A; color: #EDEAE4; padding: 20px 20px 24px; display: block; transition: background .35s, padding-left .4s cubic-bezier(.16,1,.3,1);">
          <div style="font: 400 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: #8C8D88;">LinkedIn</div>
          <div style="margin-top: 12px; font-size: clamp(14px, 1.3vw, 17px);">abhishek-gupta ↗</div>
        </a>
        <a href="https://github.com/Abhi-2023" target="_blank" rel="noopener" data-row style="background: #08090A; color: #EDEAE4; padding: 20px 20px 24px; display: block; transition: background .35s, padding-left .4s cubic-bezier(.16,1,.3,1);">
          <div style="font: 400 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: #8C8D88;">GitHub</div>
          <div style="margin-top: 12px; font-size: clamp(14px, 1.3vw, 17px);">Abhi-2023 ↗</div>
        </a>
      </div>

      <form onSubmit="{{ onSubmit }}" style="margin-top: clamp(34px, 4.5vw, 60px); border-top: 1px solid rgba(237,234,228,.14); padding-top: clamp(24px, 3.4vw, 40px); display: grid; gap: 20px; max-width: 720px;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
          <label style="display: block;">
            <span style="display: block; font: 400 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: #8C8D88;">Name *</span>
            <input name="name" required="required" style="margin-top: 10px; width: 100%; background: transparent; border: 0; border-bottom: 1px solid rgba(237,234,228,.24); color: #EDEAE4; font: 400 16px/1.5 'Manrope', sans-serif; padding: 10px 0; outline: none; transition: border-color .3s;" style-focus="border-color: var(--ag-accent, #FFB347);" />
          </label>
          <label style="display: block;">
            <span style="display: block; font: 400 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: #8C8D88;">Email *</span>
            <input name="email" type="email" required="required" style="margin-top: 10px; width: 100%; background: transparent; border: 0; border-bottom: 1px solid rgba(237,234,228,.24); color: #EDEAE4; font: 400 16px/1.5 'Manrope', sans-serif; padding: 10px 0; outline: none; transition: border-color .3s;" style-focus="border-color: var(--ag-accent, #FFB347);" />
          </label>
        </div>
        <label style="display: block;">
          <span style="display: block; font: 400 9.5px/1 'JetBrains Mono', monospace; letter-spacing: .2em; text-transform: uppercase; color: #8C8D88;">Message *</span>
          <textarea name="message" rows="4" required="required" style="margin-top: 10px; width: 100%; background: transparent; border: 0; border-bottom: 1px solid rgba(237,234,228,.24); color: #EDEAE4; font: 400 16px/1.6 'Manrope', sans-serif; padding: 10px 0; outline: none; resize: vertical; transition: border-color .3s;" style-focus="border-color: var(--ag-accent, #FFB347);"></textarea>
        </label>
        <div style="display: flex; flex-wrap: wrap; gap: 14px; align-items: center;">
          <button type="submit" style="background: var(--ag-accent, #FFB347); color: #08090A; border: 0; padding: 15px 24px; font: 500 11px/1 'JetBrains Mono', monospace; letter-spacing: .14em; text-transform: uppercase; cursor: pointer; transition: transform .3s cubic-bezier(.16,1,.3,1), box-shadow .3s;" style-hover="transform: translateY(-2px); box-shadow: 0 18px 40px -18px rgba(255,179,71,.7);">Send message</button>
        </div>
      </form>
    </div>
  </section>

  <footer style="border-top: 1px solid rgba(237,234,228,.1); background: rgba(11,12,14,.72);">
    <div style="max-width: 1400px; margin: 0 auto; padding: 22px clamp(16px, 4vw, 56px) 30px; display: flex; flex-wrap: wrap; gap: 14px; align-items: center; justify-content: space-between; font: 400 10.5px/1.6 'JetBrains Mono', monospace; letter-spacing: .1em; color: #8C8D88;">
      <div>© 2026 Abhishek Gupta — AI / GenAI Engineer</div>
      <div style="display: flex; gap: 20px;">
        <a href="https://github.com/Abhi-2023" target="_blank" rel="noopener" style="color: inherit;">GitHub</a>
        <a href="https://www.linkedin.com/in/abhishek-gupta-7a2040221/" target="_blank" rel="noopener" style="color: inherit;">LinkedIn</a>
        <a href="#top" style="color: inherit;">Top ↑</a>
      </div>
    </div>
  </footer>
</div>

</x-dc>
<script type="text/x-dc" data-dc-script data-props="{&quot;accentColor&quot;:{&quot;editor&quot;:&quot;color&quot;,&quot;default&quot;:&quot;#FFB347&quot;,&quot;tsType&quot;:&quot;string&quot;,&quot;options&quot;:[&quot;#FFB347&quot;,&quot;#F2F0EA&quot;,&quot;#7FD6FF&quot;,&quot;#FF7A45&quot;],&quot;section&quot;:&quot;Theme&quot;}}">
class Component extends DCLogic {
  renderVals() {
    return {
      onSubmit: (e) => {
        e.preventDefault();
        const f = new FormData(e.target);
        const subject = 'Portfolio enquiry from ' + (f.get('name') || '');
        const body = 'Name: ' + (f.get('name') || '') + '\nEmail: ' + (f.get('email') || '') + '\n\n' + (f.get('message') || '');
        window.location.href = 'mailto:abhishekofficials2004@gmail.com?cc=abhishekgupta862004@gmail.com&subject=' +
          encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      }
    };
  }

  componentDidMount() {
    this.reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.applyTheme();
    this.initReveal();
    this.initHover();
    this.initScroll();
    this.initFilm();
    this.initField();
  }

  initField() {
    const cv = document.querySelector('[data-field]');
    if (!cv) return;
    const ctx = cv.getContext('2d');
    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    const N = 46, nodes = [], edges = [], pulses = [];
    const rand = (a, b) => a + Math.random() * (b - a);
    for (let i = 0; i < N; i++) nodes.push({ x: Math.random(), y: Math.random(), vx: rand(-0.014, 0.014), vy: rand(-0.010, 0.010), r: rand(0.9, 2.3), ph: Math.random() * 6.28 });

    const resize = () => {
      w = cv.clientWidth; h = cv.clientHeight;
      cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    this.onFieldResize = resize;
    window.addEventListener('resize', resize);

    const mouse = { x: -1, y: -1 };
    this.onFieldMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    window.addEventListener('pointermove', this.onFieldMove, { passive: true });

    const LINK = 168;
    let last = performance.now();

    const draw = (t) => {
      const dt = Math.min((t - last) / 1000, 0.05); last = t;
      ctx.clearRect(0, 0, w, h);
      const PAD = 56;
      ctx.save();
      ctx.beginPath(); ctx.rect(PAD, 0, Math.max(0, w - PAD * 2), h); ctx.clip();

      if (!this.reduced) {
        for (const n of nodes) {
          n.x += n.vx * dt; n.y += n.vy * dt;
          if (n.x < -0.02) n.x = 1.02; if (n.x > 1.02) n.x = -0.02;
          if (n.y < -0.02) n.y = 1.02; if (n.y > 1.02) n.y = -0.02;
        }
      }

      edges.length = 0;
      for (let i = 0; i < N; i++) {
        const a = nodes[i], ax = a.x * w, ay = a.y * h;
        for (let j = i + 1; j < N; j++) {
          const b = nodes[j], bx = b.x * w, by = b.y * h;
          const dx = bx - ax, dy = by - ay, d = Math.hypot(dx, dy);
          if (d < LINK) {
            const k = 1 - d / LINK;
            edges.push([ax, ay, bx, by, k]);
            ctx.strokeStyle = 'rgba(255,179,71,' + (k * 0.13).toFixed(3) + ')';
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(bx, by); ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const x = n.x * w, y = n.y * h;
        const near = mouse.x >= 0 ? Math.max(0, 1 - Math.hypot(x - mouse.x, y - mouse.y) / 240) : 0;
        const pulse = 0.42 + 0.28 * Math.sin(t / 900 + n.ph);
        ctx.fillStyle = 'rgba(255,196,120,' + (pulse * (0.30 + near * 0.7)).toFixed(3) + ')';
        ctx.beginPath(); ctx.arc(x, y, n.r * (1 + near * 1.5), 0, 6.2832); ctx.fill();
      }

      if (!this.reduced) {
        if (pulses.length < 7 && edges.length && Math.random() < 0.035) {
          const e = edges[(Math.random() * edges.length) | 0];
          pulses.push({ e: e, p: 0, s: rand(0.5, 1.1) });
        }
        for (let i = pulses.length - 1; i >= 0; i--) {
          const pu = pulses[i]; pu.p += pu.s * dt;
          if (pu.p >= 1) { pulses.splice(i, 1); continue; }
          const e = pu.e, x = e[0] + (e[2] - e[0]) * pu.p, y = e[1] + (e[3] - e[1]) * pu.p;
          const fade = Math.sin(pu.p * 3.1416);
          ctx.fillStyle = 'rgba(255,214,150,' + (fade * 0.75).toFixed(3) + ')';
          ctx.beginPath(); ctx.arc(x, y, 1.7, 0, 6.2832); ctx.fill();
          ctx.fillStyle = 'rgba(255,179,71,' + (fade * 0.12).toFixed(3) + ')';
          ctx.beginPath(); ctx.arc(x, y, 7, 0, 6.2832); ctx.fill();
        }
      }

      ctx.restore();
      this.fieldRaf = requestAnimationFrame(draw);
    };
    this.fieldRaf = requestAnimationFrame(draw);
  }

  componentDidUpdate() { this.applyTheme(); }

  componentWillUnmount() {
    if (this.raf) cancelAnimationFrame(this.raf);
    if (this.fieldRaf) cancelAnimationFrame(this.fieldRaf);
    if (this.revealSafety) clearTimeout(this.revealSafety);
    if (this.onRevealSweep) window.removeEventListener('scroll', this.onRevealSweep);
    if (this.aRumble) { try { this.aRumble.src.stop(); this.aRumble.lfo.stop(); } catch (e) {} this.aRumble = null; }
    if (this.actx) { try { this.actx.close(); } catch (e) {} this.actx = null; }
    if (this.onFieldResize) window.removeEventListener('resize', this.onFieldResize);
    if (this.onFieldMove) window.removeEventListener('pointermove', this.onFieldMove);
    if (this.onScroll) window.removeEventListener('scroll', this.onScroll);
    if (this.io) this.io.disconnect();
    if (this.filmIo) this.filmIo.disconnect();
  }

  applyTheme() {
    const a = this.props.accentColor || '#FFB347';
    document.documentElement.style.setProperty('--ag-accent', a);
  }

  initReveal() {
    const els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    els.forEach((el, i) => {
      if (this.reduced) return;
      el.style.opacity = '0';
      el.style.transform = 'translate3d(0, 22px, 0)';
      el.style.transition = 'opacity .5s cubic-bezier(.16,1,.3,1), transform .55s cubic-bezier(.16,1,.3,1)';
    });
    if (this.reduced) return;
    this.io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target;
        const sibs = Array.prototype.slice.call((el.parentElement || document).querySelectorAll('[data-reveal]'));
        const d = Math.min(sibs.indexOf(el), 5) * 55;
        setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'none'; }, Math.max(0, d));
        this.io.unobserve(el);
        if (el.hasAttribute('data-count') || el.querySelector('[data-count]')) this.countUp(el);
      });
    }, { rootMargin: '0px 0px -4% 0px', threshold: 0 });
    els.forEach((el) => this.io.observe(el));

    // safety net: reveal anything the observer missed, on scroll (no perpetual timer)
    const sweep = () => {
      let stuck = 0;
      els.forEach((el) => {
        if (el.style.opacity !== '0') return;
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight + 200 && r.bottom > -200) {
          el.style.opacity = '1'; el.style.transform = 'none';
          if (this.io) this.io.unobserve(el);
        } else stuck++;
      });
      if (!stuck && this.onRevealSweep) {
        window.removeEventListener('scroll', this.onRevealSweep);
        this.onRevealSweep = null;
      }
    };
    this.onRevealSweep = () => {
      if (this.sweepQueued) return;
      this.sweepQueued = true;
      requestAnimationFrame(() => { this.sweepQueued = false; sweep(); });
    };
    window.addEventListener('scroll', this.onRevealSweep, { passive: true });
    this.revealSafety = setTimeout(sweep, 1200);

    const counters = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
    const cio = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { this.tickCount(en.target); cio.unobserve(en.target); } });
    }, { threshold: 0.4 });
    counters.forEach((c) => cio.observe(c));
  }

  countUp(el) {
    const list = el.hasAttribute('data-count') ? [el] : Array.prototype.slice.call(el.querySelectorAll('[data-count]'));
    list.forEach((n) => this.tickCount(n));
  }

  tickCount(node) {
    if (this.reduced || node.__done) return;
    node.__done = true;
    const target = parseFloat(node.getAttribute('data-count')) || 0;
    const suffix = node.getAttribute('data-suffix') || '';
    const t0 = performance.now();
    const dur = 900;
    const step = (now) => {
      const k = Math.min(1, (now - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      node.textContent = Math.round(target * e) + suffix;
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  initHover() {
    Array.prototype.slice.call(document.querySelectorAll('[data-chip]')).forEach((c) => {
      c.addEventListener('mouseenter', () => {
        c.style.transform = 'translateY(-3px)';
        c.style.borderColor = 'var(--ag-accent, #FFB347)';
        c.style.color = '#EDEAE4';
      });
      c.addEventListener('mouseleave', () => {
        c.style.transform = 'none';
        c.style.borderColor = 'rgba(237,234,228,.18)';
        c.style.color = '#A8A9A3';
      });
    });
    Array.prototype.slice.call(document.querySelectorAll('[data-row]')).forEach((r) => {
      r.addEventListener('mouseenter', () => { r.style.paddingLeft = '16px'; r.style.background = 'rgba(255,179,71,.05)'; });
      r.addEventListener('mouseleave', () => { r.style.paddingLeft = ''; r.style.background = ''; });
    });
    Array.prototype.slice.call(document.querySelectorAll('[data-tile]')).forEach((t) => {
      t.addEventListener('mouseenter', () => { t.style.background = '#101214'; t.style.transform = 'translateY(-4px)'; });
      t.addEventListener('mouseleave', () => { t.style.background = '#0B0C0E'; t.style.transform = 'none'; });
    });
    Array.prototype.slice.call(document.querySelectorAll('[data-proj]')).forEach((p) => {
      const img = p.querySelector('[data-projimg]');
      if (!img) return;
      p.addEventListener('mouseenter', () => { img.style.transform = 'scale(1.06)'; });
      p.addEventListener('mouseleave', () => { img.style.transform = 'none'; });
    });
  }

  initScroll() {
    const bar = document.querySelector('[data-progress]');
    const links = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
    const sections = links.map((l) => document.getElementById(l.getAttribute('data-nav'))).filter(Boolean);
    let queued = false;
    this.onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        if (bar) bar.style.width = (h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0) + '%';
        let active = -1;
        sections.forEach((s, i) => { if (s.getBoundingClientRect().top <= window.innerHeight * 0.35) active = i; });
        links.forEach((l, i) => {
          const on = i === active;
          l.style.color = on ? '#EDEAE4' : '#8C8D88';
          l.style.borderBottomColor = on ? 'var(--ag-accent, #FFB347)' : 'transparent';
        });
      });
    };
    window.addEventListener('scroll', this.onScroll, { passive: true });
    this.onScroll();
  }

  initFilm() {
    const q = (s) => document.querySelector(s);
    this.f = {
      stage: q('[data-film]'),
      scene: q('[data-scene]'),
      road: q('[data-road]'),
      dash: q('[data-dash]'),
      grid: q('[data-grid]'),
      sun: q('[data-sun]'),
      wipe: q('[data-wipe]'),
      bar: q('[data-film-bar]'),
      track: q('[data-film-track]'),
      num: q('[data-film-num]'),
      tc: q('[data-film-tc]'),
      spd: q('[data-film-speed]'),
      play: q('[data-film-play]'),
      replay: q('[data-film-replay]'),
      intro: q('[data-intro]'),
      flash: q('[data-flash]'),
      words: Array.prototype.slice.call(document.querySelectorAll('[data-word]')),
      cards: Array.prototype.slice.call(document.querySelectorAll('[data-chapter]')),
      jumps: Array.prototype.slice.call(document.querySelectorAll('[data-jump]'))
    };
    if (!this.f.stage) return;

    this.N = 5;
    this.intro = 3300;
    this.chDur = 5200;
    this.dur = this.intro + this.N * this.chDur;
    this.ms = 0;
    this.playing = false;
    this.off = 0;
    this.rot = 0;
    this.lastCi = -1;
    this.turns = [0, -5, 4, -7, 1.5];

    this.f.jumps.forEach((b) => {
      b.addEventListener('click', () => {
        this.ms = this.intro + parseInt(b.getAttribute('data-jump'), 10) * this.chDur + 40;
        this.playing = true;
        this.setPlayLabel();
        this.paint(0);
      });
    });
    if (this.f.play) this.f.play.addEventListener('click', () => { this.playing = !this.playing; this.setPlayLabel(); });
    if (this.f.replay) this.f.replay.addEventListener('click', () => { this.ms = 0; this.flashed = false; this.playing = true; this.setPlayLabel(); });
    if (this.f.track) {
      this.f.track.addEventListener('click', (e) => {
        const r = this.f.track.getBoundingClientRect();
        this.ms = Math.max(0, Math.min(0.999, (e.clientX - r.left) / r.width)) * this.dur;
        this.paint(0);
      });
    }

    if (this.reduced) { this.paint(0); return; }

    this.initAudio();

    this.filmIo = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        this.inView = en.isIntersecting;
        if (en.isIntersecting) {
          // restart from the top every time the reel is reached
          this.ms = 0;
          this.flashed = false;
          this.lastWordIdx = -1;
          this.bumped = false;
          this.userPaused = false;
          this.playing = true;
          this.setPlayLabel();
          this.resumeAudio();
        } else {
          this.rumble(false);
        }
      });
    }, { threshold: 0.3 });
    this.filmIo.observe(this.f.stage);

    let last = performance.now();
    const loop = (now) => {
      const dt = Math.min(64, now - last);
      last = now;
      if (this.playing && this.inView) {
        this.ms += dt;
        if (this.ms >= this.dur) { this.ms -= this.dur; this.flashed = false; this.bumped = false; this.lastWordIdx = -1; }
      }
      this.paint(dt);
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }

  initAudio() {
    let saved = null;
    try { saved = localStorage.getItem('ag-reel-sound'); } catch (e) {}
    this.soundOn = saved === 'on';
    this.lastWordIdx = -1;
    const btn = this.f.mute = document.querySelector('[data-film-mute]');
    const paint = () => {
      if (!btn) return;
      btn.textContent = this.soundOn ? '\u25CF Sound on' : 'Sound off';
      btn.style.borderColor = this.soundOn ? 'var(--ag-accent, #FFB347)' : 'rgba(237,234,228,.2)';
      btn.style.color = this.soundOn ? 'var(--ag-accent, #FFB347)' : '#EDEAE4';
    };
    paint();
    if (btn) {
      btn.addEventListener('click', () => {
        this.soundOn = !this.soundOn;
        try { localStorage.setItem('ag-reel-sound', this.soundOn ? 'on' : 'off'); } catch (e) {}
        paint();
        if (this.soundOn) this.resumeAudio(); else this.rumble(false);
      });
    }
  }

  ensureCtx() {
    if (this.actx) return this.actx;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    const ctx = this.actx = new AC();
    const master = this.aMaster = ctx.createGain();
    master.gain.value = 0.9;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -16; comp.ratio.value = 4;
    master.connect(comp); comp.connect(ctx.destination);
    const len = ctx.sampleRate * 2;
    const b = this.aNoise = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return ctx;
  }

  resumeAudio() {
    if (!this.soundOn) return;
    const ctx = this.ensureCtx();
    if (ctx && ctx.state === 'suspended') ctx.resume();
  }

  audioLive() { return this.soundOn && this.inView && this.playing && !this.reduced; }

  // one sharp clack per word in the opening titles
  shutterClack() {
    if (!this.audioLive()) return;
    const ctx = this.ensureCtx();
    if (!ctx || ctx.state !== 'running') return;
    const t0 = ctx.currentTime, out = this.aMaster;
    const clack = (t, amp, freq, dur, q) => {
      const src = ctx.createBufferSource(); src.buffer = this.aNoise;
      src.playbackRate.value = 1 + Math.random() * 0.35;
      const bp = ctx.createBiquadFilter(); bp.type = 'bandpass';
      bp.frequency.value = freq * (0.95 + Math.random() * 0.1); bp.Q.value = q;
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(amp, t + 0.0012);
      g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      src.connect(bp); bp.connect(g); g.connect(out);
      src.start(t); src.stop(t + dur + 0.02);
    };
    const body = (t, amp, f) => {
      const o = ctx.createOscillator(); o.type = 'sine';
      o.frequency.setValueAtTime(f, t);
      o.frequency.exponentialRampToValueAtTime(f * 0.55, t + 0.05);
      const g = ctx.createGain();
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(amp, t + 0.002);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
      o.connect(g); g.connect(out);
      o.start(t); o.stop(t + 0.09);
    };
    clack(t0, 0.30, 3600, 0.014, 2.4);
    clack(t0 + 0.0008, 0.17, 7400, 0.008, 6);
    body(t0, 0.11, 205);
    clack(t0 + 0.003, 0.09, 6400, 0.030, 16);
    clack(t0 + 0.030, 0.22, 4600, 0.012, 3.6);
    body(t0 + 0.030, 0.06, 165);
  }

  // level bump as the titles start, easing back down
  introBump() {
    if (!this.audioLive()) return;
    const ctx = this.ensureCtx();
    if (!ctx || ctx.state !== 'running') return;
    const t = ctx.currentTime, out = this.aMaster;
    out.gain.cancelScheduledValues(t);
    out.gain.setValueAtTime(out.gain.value, t);
    out.gain.linearRampToValueAtTime(1.5, t + 0.12);
    out.gain.setTargetAtTime(0.9, t + 0.35, 1.1);
    const o = ctx.createOscillator(); o.type = 'sine';
    o.frequency.setValueAtTime(96, t);
    o.frequency.exponentialRampToValueAtTime(34, t + 0.7);
    const g = ctx.createGain();
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.42, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 1.1);
    o.connect(g); g.connect(out);
    o.start(t); o.stop(t + 1.15);
    const src = ctx.createBufferSource(); src.buffer = this.aNoise;
    const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.1;
    bp.frequency.setValueAtTime(240, t);
    bp.frequency.exponentialRampToValueAtTime(1800, t + 0.5);
    const ng = ctx.createGain();
    ng.gain.setValueAtTime(0, t);
    ng.gain.linearRampToValueAtTime(0.16, t + 0.06);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.62);
    src.connect(bp); bp.connect(ng); ng.connect(out);
    src.start(t); src.stop(t + 0.7);
  }

  // low bed that rides in while the road is running
  rumble(on, level) {
    if (on && !this.audioLive()) on = false;
    if (on) {
      const ctx = this.ensureCtx();
      if (!ctx || ctx.state !== 'running') return;
      if (!this.aRumble) {
        const src = ctx.createBufferSource(); src.buffer = this.aNoise; src.loop = true;
        const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 30;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 170; lp.Q.value = 0.7;
        const g = ctx.createGain(); g.gain.value = 0;
        const lfo = ctx.createOscillator(); lfo.frequency.value = 0.08;
        const lg = ctx.createGain(); lg.gain.value = 50;
        lfo.connect(lg); lg.connect(lp.frequency);
        src.connect(hp); hp.connect(lp); lp.connect(g); g.connect(this.aMaster);
        src.start(); lfo.start();
        this.aRumble = { src: src, lfo: lfo, gain: g, lp: lp };
      }
      const target = 0.16 + 0.12 * (level == null ? 0.5 : level);
      this.aRumble.gain.gain.setTargetAtTime(target, this.actx.currentTime, 0.5);
      this.pulse(true, level);
    } else if (this.aRumble) {
      this.aRumble.gain.gain.setTargetAtTime(0, this.actx.currentTime, 0.25);
      this.pulse(false);
    } else {
      this.pulse(false);
    }
  }

  // rhythmic pulse: 16th grid, accented downbeats, riding with the road bed
  pulse(on, level) {
    if (on && !this.audioLive()) on = false;
    if (!on) {
      if (this.aPulse) {
        clearInterval(this.aPulse.timer);
        this.aPulse.bus.gain.setTargetAtTime(0, this.actx.currentTime, 0.2);
        const bus = this.aPulse.bus;
        setTimeout(() => { try { bus.disconnect(); } catch (e) {} }, 900);
        this.aPulse = null;
      }
      return;
    }
    const ctx = this.ensureCtx();
    if (!ctx || ctx.state !== 'running') return;
    if (!this.aPulse) {
      const bus = ctx.createGain();
      bus.gain.value = 0;
      bus.connect(this.aMaster);
      bus.gain.setTargetAtTime(1, ctx.currentTime, 0.6);
      const p = this.aPulse = { bus: bus, step: 0, next: ctx.currentTime + 0.06, timer: 0, level: 0.5 };
      // 0 = rest, 1 = tick, 2 = accent
      const PATTERN = [2, 0, 1, 0, 1, 0, 1, 1, 2, 0, 1, 0, 1, 1, 0, 1];
      const hit = (t, kind) => {
        const amp = (kind === 2 ? 0.30 : 0.13) * (0.55 + 0.9 * p.level);
        const src = ctx.createBufferSource();
        src.buffer = this.aNoise;
        src.playbackRate.value = 0.85 + Math.random() * 0.3;
        const bp = ctx.createBiquadFilter();
        bp.type = 'bandpass';
        bp.frequency.value = kind === 2 ? 1500 : 2700 + Math.random() * 900;
        bp.Q.value = kind === 2 ? 1.6 : 4.5;
        const g = ctx.createGain();
        const dur = kind === 2 ? 0.075 : 0.032;
        g.gain.setValueAtTime(0, t);
        g.gain.linearRampToValueAtTime(amp, t + 0.0015);
        g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
        src.connect(bp); bp.connect(g); g.connect(bus);
        src.start(t); src.stop(t + dur + 0.02);
        if (kind === 2) {
          const o = ctx.createOscillator(); o.type = 'sine';
          o.frequency.setValueAtTime(88, t);
          o.frequency.exponentialRampToValueAtTime(46, t + 0.12);
          const og = ctx.createGain();
          og.gain.setValueAtTime(0, t);
          og.gain.linearRampToValueAtTime(amp * 0.9, t + 0.004);
          og.gain.exponentialRampToValueAtTime(0.0001, t + 0.19);
          o.connect(og); og.connect(bus);
          o.start(t); o.stop(t + 0.21);
        }
      };
      p.timer = setInterval(() => {
        if (!this.aPulse) return;
        const spb = 60 / 104, dt = spb / 4;
        while (p.next < ctx.currentTime + 0.12) {
          const kind = PATTERN[p.step % PATTERN.length];
          if (kind) hit(p.next, kind);
          p.step++;
          p.next += dt;
        }
      }, 25);
    }
    this.aPulse.level = level == null ? 0.5 : level;
  }

  setPlayLabel() {
    this.userPaused = !this.playing;
    if (this.f.play) this.f.play.textContent = this.playing ? 'Pause' : 'Play';
  }

  paintIntro(inIntro) {
    const f = this.f;
    if (!f.intro) return;
    if (inIntro) {
      f.intro.style.opacity = '1';
      if (f.scene) f.scene.style.opacity = '0';
      const n = f.words.length;
      const slot = this.intro / n;
      const i = Math.min(n - 1, Math.floor(this.ms / slot));
      const k = (this.ms - i * slot) / slot;
      if (i !== this.lastWordIdx) {
        if (this.lastWordIdx < 0 && !this.bumped) { this.bumped = true; this.introBump(); }
        this.lastWordIdx = i;
        this.shutterClack();
      }
      this.rumble(false);
      f.words.forEach((w, j) => {
        if (j !== i) { w.style.opacity = '0'; return; }
        w.style.opacity = k > 0.84 ? '0' : '1';
        w.style.transform = 'scale(' + (0.96 + 0.07 * k).toFixed(3) + ')';
      });
      this.flashed = false;
      this.lastCi = -1;
      return;
    }
    f.intro.style.opacity = '0';
    if (f.scene) f.scene.style.opacity = '1';
    f.words.forEach((w) => { w.style.opacity = '0'; });
    this.lastWordIdx = -1;
    this.rumble(true, 0.5);
    if (!this.flashed) {
      this.flashed = true;
      const fl = f.flash;
      if (fl) {
        fl.style.transition = 'none';
        fl.style.opacity = '.9';
        requestAnimationFrame(() => {
          fl.style.transition = 'opacity .36s linear';
          fl.style.opacity = '0';
        });
      }
    }
  }

  paint(dt) {
    const f = this.f;
    const N = this.N;
    const inIntro = this.ms < this.intro;
    const ct = Math.max(0, this.ms - this.intro);
    const ci = Math.min(N - 1, Math.floor(ct / this.chDur));
    const held = this.reduced || !this.playing;
    const p = held ? 0.5 : (ct - ci * this.chDur) / this.chDur;
    this.paintIntro(inIntro);
    const v = 0.5 + Math.sin(Math.max(0, Math.min(1, p)) * Math.PI) * 1.15;

    if (!held) this.off += dt * v * 0.42;
    if (f.dash) f.dash.style.backgroundPosition = '0 ' + (this.off % 88) + 'px';
    if (f.grid) f.grid.style.backgroundPosition = '0 ' + ((this.off * 0.62) % 120) + 'px';

    const target = this.turns[ci] || 0;
    this.rot += (target - this.rot) * 0.05;
    if (f.road) f.road.style.transform = 'rotateX(72deg) rotate(' + this.rot.toFixed(2) + 'deg)';
    if (f.sun) f.sun.style.transform = 'translate(' + (-50 - this.rot * 1.6).toFixed(1) + '%, -76%)';

    f.cards.forEach((el, i) => {
      if (i !== ci || inIntro) { el.style.opacity = '0'; el.style.pointerEvents = 'none'; return; }
      let sc = 1, op = 1, bl = 0, y = 0;
      if (p < 0.13) {
        const k = p / 0.13, e = 1 - Math.pow(1 - k, 3);
        sc = 0.74 + 0.26 * e; op = e; bl = (1 - e) * 8; y = (1 - e) * 34;
      } else if (p > 0.9) {
        const k = (p - 0.9) / 0.1, e = k * k;
        sc = 1 + 0.4 * e; op = 1 - e; bl = e * 12; y = -e * 20;
      }
      el.style.pointerEvents = 'auto';
      el.style.opacity = op.toFixed(3);
      el.style.filter = bl > 0.1 ? 'blur(' + bl.toFixed(1) + 'px)' : 'none';
      el.style.transformOrigin = '50% 50%';
      el.style.transform = 'translate3d(0,' + y.toFixed(1) + 'px,0) scale(' + sc.toFixed(3) + ')';
    });

    if (!inIntro && ci !== this.lastCi) {
      this.lastCi = ci;
      if (f.wipe) {
        f.wipe.style.transition = 'none';
        f.wipe.style.opacity = '1';
        f.wipe.style.transform = 'translateX(-100%)';
        requestAnimationFrame(() => {
          f.wipe.style.transition = 'transform .5s cubic-bezier(.16,1,.3,1), opacity .5s';
          f.wipe.style.transform = 'translateX(100%)';
          f.wipe.style.opacity = '0';
        });
      }
      if (f.scene) {
        f.scene.style.filter = 'blur(6px) brightness(1.5) saturate(1.3)';
        setTimeout(() => { if (f.scene) f.scene.style.filter = 'none'; }, 170);
      }
    }

    if (f.bar) f.bar.style.width = ((this.ms / this.dur) * 100).toFixed(2) + '%';
    if (f.num) f.num.textContent = inIntro ? '——' : ('0' + (ci + 1)).slice(-2);
    if (f.spd) f.spd.textContent = inIntro ? 'TITLES' : 'SPD ' + ('00' + Math.round(80 + v * 90)).slice(-3);
    if (f.tc) {
      const fmt = (ms) => { const s = Math.floor(ms / 1000); return Math.floor(s / 60) + ':' + ('0' + (s % 60)).slice(-2); };
      f.tc.textContent = fmt(this.ms) + ' / ' + fmt(this.dur);
    }
    f.jumps.forEach((b, i) => {
      const on = i === ci && !inIntro;
      b.style.color = on ? '#EDEAE4' : '#8C8D88';
      b.style.background = on ? 'rgba(255,179,71,.1)' : 'transparent';
    });
  }
}

</script>
</body>
</html>
