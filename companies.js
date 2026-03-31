'use strict';

const COMPANIES = [
  {
    id: 1,
    name: 'Zero',
    initial: 'ZE',
    color: '#387ED1',
    industry: 'Fintech',
    stage: 'Bootstrapped',
    hq: 'Bengaluru',
    founded: 2010,
    openRoles: 4,
    employees: '1,200+',
    tagline: 'India\'s largest stock broker by active clients. They built it without a single rupee of external funding — and process 15% of all retail trades.',
  },
  {
    id: 2,
    name: 'Razorpay',
    initial: 'RZ',
    color: '#2EB5C9',
    industry: 'Fintech',
    stage: 'Series F',
    hq: 'Bengaluru',
    founded: 2014,
    openRoles: 7,
    employees: '3,000+',
    tagline: 'India\'s leading full-stack payments & neobanking platform powering millions of businesses — from D2C startups to enterprise giants.',
  },
  {
    id: 3,
    name: 'Swiggy',
    initial: 'SW',
    color: '#FC8019',
    industry: 'E-Commerce',
    stage: 'Public',
    hq: 'Bengaluru',
    founded: 2014,
    openRoles: 6,
    employees: '5,000+',
    tagline: 'Invented hyperlocal delivery in India. Today 500+ cities, food, groceries, instant commerce — all at the tap of a button.',
  },
  {
    id: 4,
    name: 'PhonePe',
    initial: 'PP',
    color: '#5F259F',
    industry: 'Fintech',
    stage: 'Pre-IPO',
    hq: 'Bengaluru',
    founded: 2015,
    openRoles: 9,
    employees: '4,500+',
    tagline: 'The UPI payments pioneer with 500M+ registered users. Owns the largest market share in the world\'s fastest-growing digital payments ecosystem.',
  },
  {
    id: 5,
    name: 'CRED',
    initial: 'CR',
    color: '#1C1C1E',
    industry: 'Fintech',
    stage: 'Series F',
    hq: 'Bengaluru',
    founded: 2018,
    openRoles: 5,
    employees: '1,800+',
    tagline: 'The members-only platform rewarding India\'s creditworthy. Think Amex Black meets a tech product — obsessively crafted for 12M high-trust members.',
  },
  {
    id: 6,
    name: 'Meesho',
    initial: 'ME',
    color: '#9B2FDA',
    industry: 'E-Commerce',
    stage: 'Series F',
    hq: 'Bengaluru',
    founded: 2015,
    openRoles: 8,
    employees: '4,000+',
    tagline: 'Building commerce for the next 500M Indians. Their reseller-first model opened e-commerce to Tier 2/3 India — 150M+ shoppers and counting.',
  },
  {
    id: 7,
    name: 'Flipkart',
    initial: 'FL',
    color: '#2874F0',
    industry: 'E-Commerce',
    stage: 'Pre-IPO',
    hq: 'Bengaluru',
    founded: 2007,
    openRoles: 12,
    employees: '40,000+',
    tagline: 'India\'s homegrown e-commerce giant. 500M+ customers, India\'s largest logistics network, and the Big Billion Days that shakes the entire internet.',
  },
  {
    id: 8,
    name: 'Nykaa',
    initial: 'NY',
    color: '#FC2779',
    industry: 'D2C',
    stage: 'Public',
    hq: 'Mumbai',
    founded: 2012,
    openRoles: 5,
    employees: '2,800+',
    tagline: 'India\'s beauty and lifestyle authority, serving 35M+ customers. Pioneered the omnichannel model in beauty — 4,000+ brands, online and in-store.',
  },
  {
    id: 9,
    name: 'Ola',
    initial: 'OL',
    color: '#EE3124',
    industry: 'Mobility',
    stage: 'Pre-IPO',
    hq: 'Bengaluru',
    founded: 2010,
    openRoles: 6,
    employees: '5,000+',
    tagline: 'India\'s ride-hailing pioneer now leading the EV revolution. Ola Electric makes more electric scooters than anyone else in India.',
  },
  {
    id: 10,
    name: 'Hasura',
    initial: 'HS',
    color: '#1EB4D4',
    industry: 'Dev Tools',
    stage: 'Series C',
    hq: 'Bengaluru',
    founded: 2017,
    openRoles: 3,
    employees: '300+',
    tagline: 'Bengaluru-born, globally distributed. Their instant GraphQL API engine (30K+ GitHub stars) is the fastest way to build a production backend.',
  },
  {
    id: 11,
    name: 'Paytm',
    initial: 'PT',
    color: '#00B9F5',
    industry: 'Fintech',
    stage: 'Public',
    hq: 'Noida',
    founded: 2010,
    openRoles: 7,
    employees: '8,000+',
    tagline: 'India\'s pioneering payments super-app. 350M+ registered users, powering payments, banking, lending, insurance, and commerce under one roof.',
  },
  {
    id: 12,
    name: 'BrowserStack',
    initial: 'BS',
    color: '#E86B2C',
    industry: 'SaaS',
    stage: 'Series B',
    hq: 'Mumbai',
    founded: 2011,
    openRoles: 4,
    employees: '1,200+',
    tagline: 'Mumbai-born, world-class. The largest real device cloud for testing — trusted by Google, Twitter, Amazon, and 50,000+ other organisations globally.',
  },
];

const state = {
  query:    '',
  industry: 'All',
  sort:     'default',
  filtered: [...COMPANIES],
};

const coGrid       = document.getElementById('coGrid');
const coEmpty      = document.getElementById('coEmpty');
const coSearch     = document.getElementById('coSearch');
const coSearchBox  = document.getElementById('coSearchBox');
const visibleCount = document.getElementById('visibleCount');
const coSort       = document.getElementById('coSort');
const coPillHighlight = document.getElementById('coPillHighlight');
const coPillBar       = document.getElementById('coPillBar');

function updatePillHL(target) {
  const barRect  = coPillBar.getBoundingClientRect();
  const pillRect = target.getBoundingClientRect();
  coPillHighlight.style.left  = (pillRect.left - barRect.left) + 'px';
  coPillHighlight.style.width = pillRect.width + 'px';
}

const pills = document.querySelectorAll('#coPillBar .pill');
pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.industry = pill.dataset.industry;
    updatePillHL(pill);
    applyFilters();
  });
});

document.fonts.ready.then(() => {
  const active = document.querySelector('#coPillBar .pill.active');
  if (active) updatePillHL(active);
});
window.addEventListener('resize', () => {
  const active = document.querySelector('#coPillBar .pill.active');
  if (active) updatePillHL(active);
}, { passive: true });

coSearch.addEventListener('input', () => {
  state.query = coSearch.value.toLowerCase().trim();
  applyFilters();
});

coSearch.addEventListener('focus', () => coSearchBox.classList.add('focused'));
coSearch.addEventListener('blur',  () => coSearchBox.classList.remove('focused'));

coSort.addEventListener('change', () => {
  state.sort = coSort.value;
  applyFilters();
});

function applyFilters() {
  let results = COMPANIES.filter(co => {
    if (state.query && !co.name.toLowerCase().includes(state.query) &&
        !co.tagline.toLowerCase().includes(state.query) &&
        !co.industry.toLowerCase().includes(state.query) &&
        !co.hq.toLowerCase().includes(state.query)) return false;
    if (state.industry !== 'All' && co.industry !== state.industry) return false;
    return true;
  });

  if (state.sort === 'name')    results = results.slice().sort((a,b) => a.name.localeCompare(b.name));
  if (state.sort === 'jobs')    results = results.slice().sort((a,b) => b.openRoles - a.openRoles);
  if (state.sort === 'founded') results = results.slice().sort((a,b) => b.founded - a.founded);

  state.filtered = results;
  renderCards(results);
}

let firstRender = true;

function renderCards(companies) {
  if (visibleCount) visibleCount.textContent = companies.length;

  if (!firstRender) {
    const existing = [...coGrid.querySelectorAll('.company-card')];
    existing.forEach((c, i) => {
      c.style.transitionDelay = (i * 25) + 'ms';
      c.style.opacity = '0';
      c.style.transform = 'translateY(-10px) scaleY(0.9)';
    });

    setTimeout(() => {
      coGrid.innerHTML = '';
      if (!companies.length) {
        coEmpty.style.display = 'flex';
      } else {
        coEmpty.style.display = 'none';
        companies.forEach((co, i) => {
          const card = createCard(co);
          coGrid.appendChild(card);
          setTimeout(() => card.classList.add('revealed'), i * 65 + 30);
        });
      }
    }, Math.min(existing.length * 25 + 160, 320));
  } else {
    firstRender = false;
    coGrid.innerHTML = '';
    if (!companies.length) {
      coEmpty.style.display = 'flex';
    } else {
      coEmpty.style.display = 'none';
      companies.forEach((co, i) => {
        const card = createCard(co);
        coGrid.appendChild(card);
        setTimeout(() => card.classList.add('revealed'), i * 75 + 120);
      });
    }
  }
}

function getIndustryBadgeClass(industry) {
  const map = {
    'Fintech':    'cc-badge-fintech',
    'E-Commerce': 'cc-badge-ecomm',
    'Mobility':   'cc-badge-mobility',
    'SaaS':       'cc-badge-saas',
    'Dev Tools':  'cc-badge-devtools',
    'D2C':        'cc-badge-d2c',
  };
  return map[industry] || 'cc-badge-saas';
}

function createCard(co) {
  const card = document.createElement('div');
  card.className = 'company-card';
  card.setAttribute('data-id', co.id);

  card.innerHTML = `
    <div class="cc-top">
      <div class="cc-logo" style="background:${co.color};">${co.initial}</div>
      <div class="cc-info">
        <p class="cc-name">${co.name}</p>
        <div class="cc-meta-row">
          <span class="cc-industry-badge ${getIndustryBadgeClass(co.industry)}">${co.industry}</span>
          <span class="cc-stage">${co.stage}</span>
          <span class="cc-hiring-dot">Hiring</span>
        </div>
      </div>
    </div>
    <p class="cc-tagline">${co.tagline}</p>
    <div class="cc-footer">
      <div class="cc-stats">
        <div class="cc-stat-item">
          <span class="cc-stat-val">${co.openRoles}</span>
          <span class="cc-stat-key">open roles</span>
        </div>
        <div class="cc-stat-item">
          <span class="cc-stat-val">${co.employees}</span>
          <span class="cc-stat-key">team size</span>
        </div>
        <div class="cc-stat-item">
          <span class="cc-stat-val">${co.hq}</span>
          <span class="cc-stat-key">HQ</span>
        </div>
      </div>
      <button class="cc-view-btn" data-company="${co.id}">View Jobs →</button>
    </div>
  `;

  card.querySelector('.cc-view-btn').addEventListener('click', () => {
    sessionStorage.setItem('vt_nav', '1');
    sessionStorage.setItem('vt_company_filter', co.name);
    window.location.href = 'index.html';
  });

  card.addEventListener('click', e => {
    if (e.target.classList.contains('cc-view-btn')) return;
    sessionStorage.setItem('vt_nav', '1');
    sessionStorage.setItem('vt_company_filter', co.name);
    window.location.href = 'index.html';
  });

  return card;
}

renderCards(COMPANIES);
