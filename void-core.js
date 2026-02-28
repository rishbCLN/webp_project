/* ============================================================
   VOID TERMINAL — void-core.js
   Shared: Custom Cursor · Navbar Scroll · Particle Canvas
           Page Transition Engine · Mobile Menu
   ============================================================ */

'use strict';

/* ── PAGE TRANSITION ENGINE ────────────────────────────────── */
(function VoidTransitions() {

  // Build the overlay DOM
  const overlay = document.createElement('div');
  overlay.id = 'voidTransition';
  overlay.innerHTML = `
    <div class="vt-beam" id="vtBeam"></div>
    <div class="vt-panel vt-panel-top" id="vtPanelTop">
      <div class="vt-scanlines"></div>
    </div>
    <div class="vt-panel vt-panel-bot" id="vtPanelBot">
      <div class="vt-scanlines"></div>
    </div>
    <div class="vt-terminal-line" id="vtTermLine">
      <span class="vt-prompt">void@jobs:~$</span>
      <span class="vt-cmd" id="vtCmd"></span><span class="vt-blink">█</span>
    </div>
  `;
  document.body.appendChild(overlay);

  const vtBeam     = document.getElementById('vtBeam');
  const vtPanelTop = document.getElementById('vtPanelTop');
  const vtPanelBot = document.getElementById('vtPanelBot');
  const vtTermLine = document.getElementById('vtTermLine');
  const vtCmd      = document.getElementById('vtCmd');

  // ── Enter animation (runs on every page load) ────────────
  function playEnter() {
    // Panels start covering the screen (set by CSS .vt-enter-start)
    overlay.classList.add('vt-enter-start');
    vtBeam.classList.add('vt-beam-enter');
    vtTermLine.style.opacity = '0';

    // Small delay then sweep open
    setTimeout(() => {
      overlay.classList.add('vt-entering');
    }, 80);

    // Cleanup
    setTimeout(() => {
      overlay.classList.remove('vt-enter-start', 'vt-entering');
      vtBeam.classList.remove('vt-beam-enter');
    }, 900);
  }

  // ── Exit animation → then navigate ───────────────────────
  function playExit(pageName, href) {
    // Panels collapse to center
    overlay.classList.add('vt-exiting');

    // Type the command
    setTimeout(() => {
      vtTermLine.style.opacity = '1';
      typeCmd(pageName);
    }, 120);

    // Beam flash at mid-point
    setTimeout(() => {
      vtBeam.classList.add('vt-beam-exit');
    }, 340);

    // Navigate
    setTimeout(() => {
      sessionStorage.setItem('vt_nav', '1');
      window.location.href = href;
    }, 640);
  }

  function typeCmd(text) {
    vtCmd.textContent = '';
    const full = ' cd /' + text.toLowerCase().replace(/[\s/]+/g, '-');
    let i = 0;
    const iv = setInterval(() => {
      if (i < full.length) { vtCmd.textContent += full[i++]; }
      else clearInterval(iv);
    }, 22);
  }

  // Intercept nav link clicks
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[data-page]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href === '#' || href === window.location.pathname.split('/').pop()) return;
    e.preventDefault();
    playExit(link.dataset.page, href);
  });

  // Run enter animation on page load if we just navigated
  if (sessionStorage.getItem('vt_nav')) {
    sessionStorage.removeItem('vt_nav');
    // tiny delay to ensure DOM is painted
    requestAnimationFrame(() => requestAnimationFrame(playEnter));
  }

})();


/* ── CUSTOM CURSOR ─────────────────────────────────────────── */
(function VoidCursor() {
  const cursor    = document.getElementById('cursor');
  const cursorRing= document.getElementById('cursorRing');
  if (!cursor || !cursorRing) return;

  let mouseX = -200, mouseY = -200, ringX = -200, ringY = -200;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    cursor.style.left = mouseX + 'px';
    cursor.style.top  = mouseY + 'px';
  });

  (function animRing() {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animRing);
  })();

  const sel = 'a, button, input, label, .job-card, .company-card, .sal-bar-row, .search-tag, .loc-chip, .pill, .custom-checkbox, .custom-radio, [role="button"], [tabindex]';
  document.addEventListener('mouseover', e => {
    if (e.target.matches(sel) || e.target.closest(sel))
      document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.matches(sel) || e.target.closest(sel))
      document.body.classList.remove('cursor-hover');
  });
})();


/* ── NAVBAR SCROLL ─────────────────────────────────────────── */
(function VoidNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 80);
  }, { passive: true });
})();


/* ── MOBILE HAMBURGER ──────────────────────────────────────── */
(function VoidHamburger() {
  const btn = document.getElementById('navHamburger');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const links  = document.querySelector('.nav-links');
    const postBtn= document.querySelector('.btn-post-job');
    const show   = links.style.display !== 'flex';

    links.style.cssText = show
      ? 'display:flex;flex-direction:column;position:absolute;top:64px;left:0;right:0;background:rgba(13,17,23,0.98);border-bottom:1px solid rgba(255,255,255,0.08);padding:1rem 2rem;gap:0;backdrop-filter:blur(12px);z-index:999;'
      : '';
    if (postBtn) postBtn.style.cssText = show ? 'display:flex;margin:0.75rem 2rem 1rem;' : '';

    btn.querySelectorAll('span').forEach((s, i) => {
      s.style.transform = show
        ? i === 0 ? 'translateY(7px) rotate(45deg)'
        : i === 1 ? 'scaleX(0)'
        : 'translateY(-7px) rotate(-45deg)' : '';
      s.style.opacity = (show && i === 1) ? '0' : '1';
    });
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const links = document.querySelector('.nav-links');
      const post  = document.querySelector('.btn-post-job');
      if (links) links.style.display = '';
      if (post)  post.style.display  = '';
      btn.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
})();


/* ── PARTICLE CANVAS ───────────────────────────────────────── */
function initParticleCanvas(canvasId, count, maxDist, dotAlpha, lineAlpha) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];

  count    = count    || 60;
  maxDist  = maxDist  || 130;
  dotAlpha = dotAlpha || 0.55;
  lineAlpha= lineAlpha|| 0.18;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * (W || window.innerWidth),
      y: Math.random() * (H || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r:  Math.random() * 1.5 + 0.5,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < maxDist) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(245,166,35,${(1 - d/maxDist) * lineAlpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(245,166,35,${dotAlpha})`;
      ctx.fill();
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    }
    requestAnimationFrame(draw);
  }
  draw();
}
