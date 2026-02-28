'use strict';

/* ═══════════════════════════════════════════════════════════════
   SALARIES PAGE — salaries.js
   ═══════════════════════════════════════════════════════════════ */

initParticleCanvas('particleCanvas', 45, 110, 0.45, 0.13);

// ─── Data ────────────────────────────────────────────────────
const SAL_DATA = {
  Engineering: [
    { role: 'Frontend Engineer',   city_mult: true, levels: { Junior: [8,12,16],  Mid: [18,26,36], Senior: [36,52,72], Lead: [60,85,115] } },
    { role: 'Backend Engineer',    city_mult: true, levels: { Junior: [9,14,19],  Mid: [20,30,42], Senior: [40,58,80], Lead: [65,90,120] } },
    { role: 'Full Stack Engineer', city_mult: true, levels: { Junior: [8,13,18],  Mid: [20,28,40], Senior: [38,55,75], Lead: [62,88,112] } },
    { role: 'DevOps / SRE',        city_mult: true, levels: { Junior: [10,15,20], Mid: [22,32,45], Senior: [42,60,85], Lead: [68,92,120] } },
    { role: 'iOS / Android',       city_mult: true, levels: { Junior: [9,13,18],  Mid: [18,28,40], Senior: [38,54,75], Lead: [60,84,110] } },
    { role: 'Security Engineer',   city_mult: true, levels: { Junior: [10,16,22], Mid: [24,35,48], Senior: [44,64,88], Lead: [70,96,125] } },
    { role: 'QA / SDET',           city_mult: true, levels: { Junior: [6,10,14],  Mid: [14,22,32], Senior: [28,42,58], Lead: [45,65,88]  } },
  ],
  'Data & AI': [
    { role: 'Data Analyst',        city_mult: true, levels: { Junior: [7,11,15],  Mid: [16,24,34], Senior: [32,46,62], Lead: [52,72,98]  } },
    { role: 'Data Scientist',      city_mult: true, levels: { Junior: [10,16,22], Mid: [24,36,50], Senior: [46,68,94], Lead: [72,100,135] } },
    { role: 'ML Engineer',         city_mult: true, levels: { Junior: [12,18,24], Mid: [26,40,56], Senior: [50,75,105],Lead: [80,110,145] } },
    { role: 'Data Engineer',       city_mult: true, levels: { Junior: [9,14,19],  Mid: [20,30,44], Senior: [40,58,80], Lead: [62,88,115] } },
  ],
  Design: [
    { role: 'Product Designer',    city_mult: true, levels: { Junior: [7,11,15],  Mid: [16,24,34], Senior: [32,46,64], Lead: [52,72,95]  } },
    { role: 'UX Researcher',       city_mult: true, levels: { Junior: [7,10,14],  Mid: [14,22,30], Senior: [28,40,55], Lead: [46,64,86]  } },
    { role: 'Motion Designer',     city_mult: true, levels: { Junior: [6,9,12],   Mid: [12,18,26], Senior: [24,36,50], Lead: [40,56,76]  } },
  ],
  Product: [
    { role: 'Product Manager',     city_mult: true, levels: { Junior: [12,18,25], Mid: [24,36,52], Senior: [46,68,96], Lead: [78,110,145] } },
    { role: 'Growth Manager',      city_mult: true, levels: { Junior: [10,15,20], Mid: [20,30,44], Senior: [38,56,78], Lead: [60,85,112] } },
  ],
  Marketing: [
    { role: 'Performance Marketer',city_mult: true, levels: { Junior: [6,9,12],   Mid: [12,18,26], Senior: [24,36,52], Lead: [42,62,86]  } },
    { role: 'Content Strategist',  city_mult: true, levels: { Junior: [5,8,11],   Mid: [10,15,22], Senior: [20,30,44], Lead: [36,52,72]  } },
  ],
};

const CITY_MULT = {
  Bengaluru: 1.00,
  Mumbai:    0.95,
  Hyderabad: 0.90,
  Noida:     0.88,
  Remote:    1.08,
};

const TOP_COMPANIES = [
  { name: 'Google India',  pay: '₹ 120L' },
  { name: 'Meesho',        pay: '₹ 105L' },
  { name: 'CRED',          pay: '₹ 98L'  },
  { name: 'Razorpay',      pay: '₹ 92L'  },
  { name: 'PhonePe',       pay: '₹ 88L'  },
  { name: 'Swiggy',        pay: '₹ 85L'  },
  { name: 'Hasura',        pay: '₹ 82L'  },
  { name: 'Flipkart',      pay: '₹ 78L'  },
];

const CITY_BENCHMARKS = [
  { city: 'Bengaluru', median: 36 },
  { city: 'Remote',    median: 34 },
  { city: 'Mumbai',    median: 32 },
  { city: 'Hyderabad', median: 30 },
  { city: 'Noida',     median: 28 },
];

// ─── State ───────────────────────────────────────────────────
const state = { category: 'Engineering', exp: 'All', city: 'All' };

// ─── Hero tag pills ──────────────────────────────────────────
document.querySelectorAll('.sal-hero-tags .search-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    document.querySelectorAll('.sal-hero-tags .search-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    state.category = tag.dataset.role;
    document.getElementById('salRoleCategory').textContent = tag.dataset.role;
    renderBars();
  });
});

// ─── Pill bars (experience + city) ──────────────────────────
function initPillBar(barId, hlId, dataAttr, stateKey, cb) {
  const bar  = document.getElementById(barId);
  const hl   = document.getElementById(hlId);
  const pills = bar.querySelectorAll('.pill');

  function moveTo(pill) {
    const bRect = bar.getBoundingClientRect();
    const pRect = pill.getBoundingClientRect();
    hl.style.width  = pRect.width + 'px';
    hl.style.left   = (pRect.left - bRect.left) + 'px';
  }

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      pills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      moveTo(pill);
      state[stateKey] = pill.dataset[dataAttr];
      if (cb) cb();
    });
  });

  // init position
  requestAnimationFrame(() => {
    const active = bar.querySelector('.pill.active') || pills[0];
    moveTo(active);
  });
}

initPillBar('expPillBar',  'expPillHl',  'exp',  'exp',  renderBars);
initPillBar('cityPillBar', 'cityPillHl', 'city', 'city', renderBars);

// ─── Salary Bar Renderer ─────────────────────────────────────
function applyMult(val, city) {
  if (city === 'All') return val;
  return Math.round(val * (CITY_MULT[city] || 1));
}

function renderBars() {
  const container = document.getElementById('salBars');
  const rows = SAL_DATA[state.category] || [];
  const maxVal = 150; // scale reference in LPA

  // exit old rows
  container.querySelectorAll('.sal-bar-row').forEach(r => {
    r.classList.remove('revealed');
  });

  setTimeout(() => {
    container.innerHTML = '';

    rows.forEach((row, i) => {
      const levels = row.levels;
      let lo, mid, hi;

      if (state.exp === 'All') {
        lo  = Math.min(...Object.values(levels).map(v => v[0]));
        mid = Math.round(Object.values(levels).reduce((s, v) => s + v[1], 0) / Object.keys(levels).length);
        hi  = Math.max(...Object.values(levels).map(v => v[2]));
      } else {
        const lvl = levels[state.exp] || levels.Mid;
        lo = lvl[0]; mid = lvl[1]; hi = lvl[2];
      }

      lo  = applyMult(lo,  state.city);
      mid = applyMult(mid, state.city);
      hi  = applyMult(hi,  state.city);

      const fillPct = (hi / maxVal) * 100;
      const dotPct  = (mid / maxVal) * 100;

      const el = document.createElement('div');
      el.className = 'sal-bar-row';
      el.innerHTML = `
        <span class="sal-bar-label">${row.role}</span>
        <div class="sal-bar-track">
          <div class="sal-bar-fill" data-fill="${fillPct.toFixed(1)}"></div>
          <div class="sal-bar-dot"  data-dot="${dotPct.toFixed(1)}"></div>
        </div>
        <span class="sal-bar-range">₹${lo}L – ${hi}L</span>`;
      container.appendChild(el);

      // staggered reveal
      setTimeout(() => {
        el.classList.add('revealed');
        const fill = el.querySelector('.sal-bar-fill');
        const dot  = el.querySelector('.sal-bar-dot');
        fill.style.width = fill.dataset.fill + '%';
        dot.style.left   = dot.dataset.dot  + '%';
      }, 60 + i * 70);
    });
  }, 200);
}

// ─── Top Companies ───────────────────────────────────────────
function renderTopCompanies() {
  const container = document.getElementById('topCompanies');
  TOP_COMPANIES.forEach((co, i) => {
    const el = document.createElement('div');
    el.className = 'sal-co-row';
    el.innerHTML = `
      <span class="sal-co-rank">#${i+1}</span>
      <span class="sal-co-name">${co.name}</span>
      <span class="sal-co-pay">${co.pay}</span>`;
    container.appendChild(el);
    setTimeout(() => el.classList.add('revealed'), 100 + i * 80);
  });
}

// ─── City Bars ───────────────────────────────────────────────
function renderCityBars() {
  const container = document.getElementById('cityBars');
  const maxCity = Math.max(...CITY_BENCHMARKS.map(c => c.median));
  CITY_BENCHMARKS.forEach((item, i) => {
    const pct = ((item.median / maxCity) * 100).toFixed(1);
    const el = document.createElement('div');
    el.className = 'sal-city-bar-row';
    el.innerHTML = `
      <span class="sal-city-label">${item.city}</span>
      <div class="sal-city-track">
        <div class="sal-city-fill" data-fill="${pct}%" style="width:0%"></div>
      </div>
      <span class="sal-city-val">₹${item.median}L</span>`;
    container.appendChild(el);
    setTimeout(() => {
      el.classList.add('revealed');
      el.querySelector('.sal-city-fill').style.width = pct + '%';
    }, 150 + i * 100);
  });
}

// ─── Salary Calculator ───────────────────────────────────────
document.getElementById('calcBtn').addEventListener('click', () => {
  const role   = document.getElementById('calcRole').value;
  const expKey = document.getElementById('calcExp').value;
  const city   = document.getElementById('calcCity').value;

  // find role in data
  let found = null;
  for (const cat of Object.values(SAL_DATA)) {
    found = cat.find(r => r.role === role);
    if (found) break;
  }
  if (!found) return;

  const lvl = found.levels[expKey] || found.levels.Mid;
  const mult = CITY_MULT[city] || 1;
  const lo  = Math.round(lvl[0] * mult);
  const mid = Math.round(lvl[1] * mult);
  const hi  = Math.round(lvl[2] * mult);

  const result = document.getElementById('calcResult');
  result.style.display = 'block';
  document.getElementById('resLow').textContent  = `₹${lo}L`;
  document.getElementById('resMid').textContent  = `₹${mid}L`;
  document.getElementById('resHigh').textContent = `₹${hi}L`;

  const maxRef = 150;
  const fillW  = ((hi  / maxRef) * 100).toFixed(1) + '%';
  const midPos = ((mid / maxRef) * 100).toFixed(1) + '%';

  setTimeout(() => {
    document.getElementById('resBarFill').style.width = fillW;
    document.getElementById('resBarMid').style.left   = midPos;
  }, 30);

  document.getElementById('resNote').textContent =
    `Based on ${expKey === 'Junior' ? '0–2' : expKey === 'Mid' ? '2–5' : expKey === 'Senior' ? '5–8' : '8+'} yrs experience as a ${role} in ${city}. Numbers reflect total compensation (base + RSU + bonus).`;
});

// ─── Init ────────────────────────────────────────────────────
renderBars();
renderTopCompanies();
renderCityBars();
