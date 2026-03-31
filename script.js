/* ============================================================
   VOID TERMINAL — script.js
   ============================================================ */

'use strict';

/* ── Job Data ──────────────────────────────────────────────── */
const JOBS = [
  {
    id: 1,
    title: 'Senior Frontend Engineer',
    company: 'Zerodha',
    companyInitial: 'ZE',
    companyColor: '#387ED1',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Senior',
    salary: '₹ 40–60 LPA',
    salaryMin: 40,
    salaryMax: 60,
    daysAgo: 1,
    tags: ['React', 'TypeScript', 'GraphQL'],
    description: 'Join Zerodha\'s product engineering team to build India\'s most-used trading platform. You\'ll own critical UI surfaces used by over 14 million traders — from the Kite web terminal to real-time order management interfaces.',
    requirements: [
      '5+ years of production React/TypeScript experience',
      'Deep understanding of browser rendering and performance profiling',
      'Experience building real-time data-heavy UIs (WebSockets)',
      'Strong product instinct — you care about pixels as much as perf',
      'Prior experience in fintech or high-frequency data products preferred',
    ],
    about: 'Zerodha is India\'s largest stock broker by active clients, processing over 15% of all retail trading volumes in the country. We build in-house and open-source everything.',
  },
  {
    id: 2,
    title: 'Product Designer',
    company: 'Razorpay',
    companyInitial: 'RZ',
    companyColor: '#2EB5C9',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Mid',
    salary: '₹ 28–42 LPA',
    salaryMin: 28,
    salaryMax: 42,
    daysAgo: 2,
    tags: ['Figma', 'Design Systems', 'Motion'],
    description: 'Shape the visual language of India\'s leading payments platform. You\'ll design across the full product — from merchant dashboards and checkout flows to internal tooling and the RazorpayX neobanking suite.',
    requirements: [
      '3–5 years of product design experience, preferably in fintech or B2B SaaS',
      'Expert-level Figma skilllls; ability to prototype complex interactions',
      'Understanding of front-end constraints; basic HTML/CSS knowledge',
      'Portfolio demonstrating systems thinking and high visual craft',
      'Experience contributing to or owning a design system at scale',
    ],
    about: 'Razorpay is India\'s leading full-stack financial solutions company. We enable businesses of all sizes to accept, process, and disburse payments with ease.',
  },
  {
    id: 3,
    title: 'Data Scientist',
    company: 'Swiggy',
    companyInitial: 'SW',
    companyColor: '#FC8019',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Senior',
    salary: '₹ 45–70 LPA',
    salaryMin: 45,
    salaryMax: 70,
    daysAgo: 3,
    tags: ['Python', 'ML', 'SQL', 'Spark'],
    description: 'Use data to optimise delivery ETAs, improve restaurant recommendations, and reduce food waste across Swiggy\'s hyperlocal network. You\'ll work with massive datasets to build predictive models that directly impact millions of orders daily.',
    requirements: [
      'PhD or 4+ years of applied ML/data science experience',
      'Python (pandas, scikit-learn, PyTorch or TensorFlow)',
      'SQL proficiency; experience with large distributed datasets (Spark, Hive)',
      'Experience deploying ML models to production at scale',
      'Strong communication — you present insights to senior leadership',
    ],
    about: 'Swiggy is India\'s leading on-demand delivery platform, serving 500+ cities with food, grocery, and instant commerce. We process millions of hyperlocal transactions every day.',
  },
  {
    id: 4,
    title: 'DevOps Lead',
    company: 'PhonePe',
    companyInitial: 'PP',
    companyColor: '#5F259F',
    location: 'Remote',
    type: 'Remote',
    experience: 'Lead',
    salary: '₹ 55–85 LPA',
    salaryMin: 55,
    salaryMax: 85,
    daysAgo: 4,
    tags: ['Kubernetes', 'Terraform', 'Go', 'AWS'],
    description: 'Own the reliability and scalability of a payments platform handling 5 billion+ transactions annually. You\'ll lead a platform engineering team, setting standards for how we deploy, monitor, and scale across multi-region infrastructure in India and Southeast Asia.',
    requirements: [
      '7+ years in infrastructure/DevOps/SRE roles',
      'Deep Kubernetes expertise (operators, custom controllers)',
      'Infrastructure as Code: Terraform or Pulumi',
      'Experience with multi-region, high-availability architectures',
      'Leadership experience managing or mentoring engineers',
    ],
    about: 'PhonePe is India\'s leading UPI-based payments app with 500 million+ registered users. We process more UPI transactions than any other platform in the country.',
  },
  {
    id: 5,
    title: 'Backend Engineer',
    company: 'CRED',
    companyInitial: 'CR',
    companyColor: '#1C1C1E',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Mid',
    salary: '₹ 30–50 LPA',
    salaryMin: 30,
    salaryMax: 50,
    daysAgo: 5,
    tags: ['Kotlin', 'Spring Boot', 'PostgreSQL'],
    description: 'Build the financial infrastructure behind CRED\'s credit card management, rent pay, and lending products. You\'ll work on high-throughput services that process crores of rupees in transactions daily with near-zero downtime.',
    requirements: [
      '3+ years of backend experience with Kotlin or Java/Spring Boot',
      'Experience building high-throughput, event-driven financial systems',
      'PostgreSQL and Redis expertise; strong database schema design skills',
      'Familiarity with payment rails (NACH, UPI, NEFT)',
      'Strong understanding of distributed systems and fault tolerance',
    ],
    about: 'CRED is a members-only financial wellness platform rewarding creditworthy Indians. We manage credit card payments for over 12 million high-trust members.',
  },
  {
    id: 6,
    title: 'Android Engineer',
    company: 'Meesho',
    companyInitial: 'ME',
    companyColor: '#9B2FDA',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Mid',
    salary: '₹ 25–40 LPA',
    salaryMin: 25,
    salaryMax: 40,
    daysAgo: 6,
    tags: ['Kotlin', 'Jetpack Compose', 'MVVM'],
    description: 'Build the Android app used by 150 million+ shoppers and 1 crore+ suppliers across Tier 2 and Tier 3 India. You\'ll work on performance-critical features for low-end devices and patchy network conditions — a uniquely challenging engineering problem.',
    requirements: [
      '3+ years of professional Android/Kotlin development',
      'Jetpack Compose and modern Android architecture expertise',
      'Experience optimising apps for low-memory, low-bandwidth environments',
      'Proficiency in writing unit and UI tests (JUnit, Espresso)',
      'Understanding of offline-first architecture and local databases (Room)',
    ],
    about: 'Meesho is India\'s fastest-growing e-commerce platform, enabling small businesses and individuals to start and grow their online stores with zero investment.',
  },
  {
    id: 7,
    title: 'Staff Engineer, Platform',
    company: 'Flipkart',
    companyInitial: 'FL',
    companyColor: '#2874F0',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Lead',
    salary: '₹ 80–120 LPA',
    salaryMin: 80,
    salaryMax: 120,
    daysAgo: 7,
    tags: ['Java', 'Microservices', 'Distributed Systems'],
    description: 'Set technical direction for the platform that powers India\'s largest e-commerce operation. You\'ll architect services for catalogue, search, and inventory — ensuring systems scale gracefully during Big Billion Days traffic surges.',
    requirements: [
      '10+ years of software engineering experience',
      'Track record of designing and shipping large-scale distributed systems',
      'Experience with high-traffic e-commerce platforms during peak events',
      'Strong mentorship skills — you elevate those around you',
      'Cross-functional influence — you work closely with Product and Data',
    ],
    about: 'Flipkart is India\'s leading e-commerce marketplace, serving 500 million+ registered customers. We process lakhs of orders daily and run India\'s largest logistics network.',
  },
  {
    id: 8,
    title: 'Growth Marketing Manager',
    company: 'Nykaa',
    companyInitial: 'NY',
    companyColor: '#FC2779',
    location: 'Mumbai',
    type: 'Full-time',
    experience: 'Mid',
    salary: '₹ 20–35 LPA',
    salaryMin: 20,
    salaryMax: 35,
    daysAgo: 8,
    tags: ['SEO', 'Analytics', 'A/B Testing'],
    description: 'Drive user acquisition and activation for India\'s leading beauty and fashion platform. You\'ll run experiments across paid, organic, influencer, and PLG channels — building a systematic, data-driven growth machine for the next 100 million users.',
    requirements: [
      '4+ years in growth marketing or performance marketing roles',
      'Deep familiarity with Meta Ads, Google Ads, and influencer platforms',
      'Analytics tool proficiency (Clevertap, Mixpanel, or Amplitude)',
      'Experience with D2C and social commerce growth motions',
      'Understanding of vernacular and regional India audiences',
    ],
    about: 'Nykaa is India\'s most loved omnichannel beauty and lifestyle platform, serving 35 million+ customers with 4,000+ brands across beauty, fashion, and wellness.',
  },
  {
    id: 9,
    title: 'Machine Learning Engineer',
    company: 'Ola',
    companyInitial: 'OL',
    companyColor: '#EE3124',
    location: 'Hyderabad',
    type: 'Remote',
    experience: 'Senior',
    salary: '₹ 42–65 LPA',
    salaryMin: 42,
    salaryMax: 65,
    daysAgo: 9,
    tags: ['Python', 'PyTorch', 'MLOps', 'Spark'],
    description: 'Build ML systems that power intelligent ride matching, dynamic pricing, and ETA prediction across Ola\'s cab and electric vehicle networks. Your models run in products used by 150 million users across India and international markets.',
    requirements: [
      '4+ years of ML engineering in production, ideally in mobility or logistics',
      'Deep PyTorch/TensorFlow expertise; experience with model serving at scale',
      'MLOps tooling (MLflow, Kubeflow, or similar)',
      'Understanding of geospatial ML and time-series forecasting',
      'Strong research sensibility — you implement and adapt cutting-edge papers',
    ],
    about: 'Ola is India\'s largest mobility platform, connecting millions of drivers and riders across India and international markets. We are building India\'s EV revolution with Ola Electric.',
  },
  {
    id: 10,
    title: 'Technical Writer',
    company: 'Hasura',
    companyInitial: 'HS',
    companyColor: '#1EB4D4',
    location: 'Remote',
    type: 'Part-time',
    experience: 'Junior',
    salary: '₹ 10–18 LPA',
    salaryMin: 10,
    salaryMax: 18,
    daysAgo: 10,
    tags: ['GraphQL', 'Developer Docs', 'Postgres'],
    description: 'Write docs that developers around the world actually enjoy reading. You\'ll create tutorials, API references, and guides for Hasura — the Bengaluru-based GraphQL engine used by thousands of developers globally.',
    requirements: [
      '2+ years of technical writing for developer-focused products',
      'Comfort with JavaScript/TypeScript, GraphQL, and SQL fundamentals',
      'Strong portfolio of clear, well-structured documentation',
      'Experience with docs-as-code workflows (MDX, GitHub, CI)',
      'Bonus: contributions to open-source documentation projects',
    ],
    about: 'Hasura is a Bengaluru-founded, globally distributed company building the world\'s most powerful instant GraphQL API engine. We\'re proudly open-source with 30,000+ GitHub stars.',
  },
  {
    id: 11,
    title: 'Security Engineer',
    company: 'Paytm',
    companyInitial: 'PT',
    companyColor: '#00B9F5',
    location: 'Noida',
    type: 'Full-time',
    experience: 'Senior',
    salary: '₹ 38–58 LPA',
    salaryMin: 38,
    salaryMax: 58,
    daysAgo: 12,
    tags: ['AppSec', 'VAPT', 'Network Security'],
    description: 'Protect the financial infrastructure of India\'s most widely used payments super-app. You\'ll work on application security, vulnerability assessments, and securing the PCI-DSS compliant systems that handle hundreds of crores in daily transactions.',
    requirements: [
      '5+ years in application or infrastructure security',
      'Strong understanding of OWASP Top 10, API security, and mobile security',
      'Experience with VAPT, red-teaming, and penetration testing',
      'Knowledge of PCI-DSS, RBI guidelines, and CERT-In compliance frameworks',
      'Security certifications (OSCP, CEH, CISSP) a plus',
    ],
    about: 'Paytm is India\'s pioneering digital payments and financial services company, with 350 million+ registered users. We enable payments, banking, lending, and insurance.',
  },
  {
    id: 12,
    title: 'Frontend Engineer (Contract)',
    company: 'Browserstack',
    companyInitial: 'BS',
    companyColor: '#E86B2C',
    location: 'Mumbai',
    type: 'Contract',
    experience: 'Mid',
    salary: '₹ 4,000–6,000/day',
    salaryMin: 20,
    salaryMax: 35,
    daysAgo: 14,
    tags: ['Vue.js', 'TypeScript', 'Cypress'],
    description: 'Build the testing dashboard and developer tooling for the world\'s largest cloud web and mobile testing platform. You\'ll work on a Vue.js-based interface used by 50,000+ organisations including Microsoft, Twitter, and Wipro.',
    requirements: [
      '3+ years of production Vue.js or equivalent SPA framework experience',
      'Experience building complex data-heavy dashboards and developer tools',
      'TypeScript proficiency; strong component architecture skills',
      'Remote-first, async-friendly work style',
      'Available for a minimum 6-month contract engagement',
    ],
    about: 'BrowserStack is a Mumbai-born, global developer testing platform used by 50,000+ companies. We run the world\'s largest real device cloud for web and app testing.',
  },
];

/* ── State ─────────────────────────────────────────────────── */
const state = {
  query: '',
  type: 'All',
  location: '',
  jobTypes: [],
  experience: 'All',
  salaryMin: 5,
  salaryMax: 120,
  savedIds: new Set(JSON.parse(localStorage.getItem('voidjobs_saved') || '[]')),
  currentView: 'listings',   // 'listings' | 'saved'
  filteredJobs: [...JOBS],
};

function savePersist() {
  localStorage.setItem('voidjobs_saved', JSON.stringify([...state.savedIds]));
}

/* ── DOM Refs ──────────────────────────────────────────────── */
const cursor         = document.getElementById('cursor');
const cursorRing     = document.getElementById('cursorRing');
const navbar         = document.getElementById('navbar');
const searchInput    = document.getElementById('searchInput');
const searchBox      = document.getElementById('searchBox');
const searchSubmit   = document.getElementById('searchSubmit');
const jobGrid        = document.getElementById('jobGrid');
const emptyState     = document.getElementById('emptyState');
const savedView      = document.getElementById('savedView');
const savedGrid      = document.getElementById('savedGrid');
const savedEmptyState= document.getElementById('savedEmptyState');
const savedCountEl   = document.getElementById('savedCount');
const mainContent    = document.getElementById('mainContent');
const pillBarWrapper = document.getElementById('pillBarWrapper');
const pillHighlight  = document.getElementById('pillHighlight');
const counterDisplay = document.getElementById('counterDisplay');
const modalBackdrop  = document.getElementById('modalBackdrop');
const modal          = document.getElementById('modal');
const modalClose     = document.getElementById('modalClose');
const modalInner     = document.getElementById('modalInner');
const clearFiltersBtn= document.getElementById('clearFilters');
const locationFilter = document.getElementById('locationFilter');
const rangeMin       = document.getElementById('rangeMin');
const rangeMax       = document.getElementById('rangeMax');
const rangeFill      = document.getElementById('rangeFill');
const salaryMinEl    = document.getElementById('salaryMin');
const salaryMaxEl    = document.getElementById('salaryMax');
const logoBtn        = document.getElementById('logoBtn');
const navHamburger   = document.getElementById('navHamburger');
const particleCanvas = document.getElementById('particleCanvas');

/* ── Custom Cursor ─────────────────────────────────────────── */
let mouseX = -200, mouseY = -200;
let ringX = -200, ringY = -200;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.left = mouseX + 'px';
  cursor.style.top  = mouseY + 'px';
});

function animateCursorRing() {
  ringX += (mouseX - ringX) * 0.14;
  ringY += (mouseY - ringY) * 0.14;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
  requestAnimationFrame(animateCursorRing);
}
animateCursorRing();

const hoverEls = 'a, button, input, label, .job-card, .search-tag, .loc-chip, .pill, .custom-checkbox, .custom-radio, [role="button"]';
document.addEventListener('mouseover', e => {
  if (e.target.matches(hoverEls) || e.target.closest(hoverEls)) {
    document.body.classList.add('cursor-hover');
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.matches(hoverEls) || e.target.closest(hoverEls)) {
    document.body.classList.remove('cursor-hover');
  }
});

/* ── Navbar Scroll ─────────────────────────────────────────── */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 80);
}, { passive: true });

/* ── Particle Canvas ───────────────────────────────────────── */
(function initParticles() {
  const ctx = particleCanvas.getContext('2d');
  let W, H, particles = [];

  function resize() {
    W = particleCanvas.width  = particleCanvas.offsetWidth;
    H = particleCanvas.height = particleCanvas.offsetHeight;
  }

  resize();
  window.addEventListener('resize', resize, { passive: true });

  const COUNT = 60;
  const MAX_DIST = 130;

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x: Math.random() * (W || window.innerWidth),
      y: Math.random() * (H || window.innerHeight),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.5 + 0.5,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MAX_DIST) {
          const alpha = (1 - dist / MAX_DIST) * 0.18;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(245,166,35,${alpha})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }

    // Dots
    for (const p of particles) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(245,166,35,0.55)';
      ctx.fill();
    }

    // Update positions
    for (const p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    }

    requestAnimationFrame(draw);
  }

  draw();
})();

/* ── Typewriter Effect ─────────────────────────────────────── */
(function initTypewriter() {
  const phrases = [
    'Search for your next role...',
    'Find remote opportunities...',
    'Discover design jobs...',
    'Browse engineering roles...',
    'Explore data science openings...',
  ];

  let phraseIdx = 0, charIdx = 0, deleting = false, paused = false;

  function tick() {
    if (document.activeElement === searchInput) {
      setTimeout(tick, 400);
      return;
    }

    const phrase = phrases[phraseIdx];

    if (!deleting && charIdx <= phrase.length) {
      searchInput.placeholder = phrase.slice(0, charIdx);
      charIdx++;
      if (charIdx > phrase.length) {
        paused = true;
        setTimeout(() => { paused = false; deleting = true; tick(); }, 2200);
        return;
      }
    } else if (deleting && charIdx >= 0) {
      searchInput.placeholder = phrase.slice(0, charIdx);
      charIdx--;
      if (charIdx < 0) {
        deleting = false;
        phraseIdx = (phraseIdx + 1) % phrases.length;
        charIdx = 0;
        setTimeout(tick, 400);
        return;
      }
    }

    const speed = deleting ? 45 : 75;
    setTimeout(tick, speed);
  }

  setTimeout(tick, 1000);
})();

/* ── Search Box Focus ──────────────────────────────────────── */
searchInput.addEventListener('focus', () => {
  searchBox.classList.add('focused');
});
searchInput.addEventListener('blur', () => {
  searchBox.classList.remove('focused');
});

searchInput.addEventListener('input', () => {
  state.query = searchInput.value.toLowerCase().trim();
  scheduleFilter();
});

searchSubmit.addEventListener('click', () => {
  const icon = searchSubmit.querySelector('svg');
  icon.style.transition = 'transform 0.4s cubic-bezier(0.22,1,0.36,1)';
  icon.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    icon.style.transition = 'none';
    icon.style.transform = 'rotate(0deg)';
  }, 450);
  scheduleFilter();
});

/* ── Pill Bar (Liquid Effect) ──────────────────────────────── */
const pills = document.querySelectorAll('.pill');

function updatePillHighlight(target) {
  const barRect = document.getElementById('pillBar').getBoundingClientRect();
  const pillRect = target.getBoundingClientRect();
  pillHighlight.style.left  = (pillRect.left - barRect.left) + 'px';
  pillHighlight.style.width = pillRect.width + 'px';
}

pills.forEach(pill => {
  pill.addEventListener('click', () => {
    pills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    state.type = pill.dataset.type;
    updatePillHighlight(pill);
    scheduleFilter();
  });
});

// Init pill highlight position
window.addEventListener('load', () => {
  const activePill = document.querySelector('.pill.active');
  if (activePill) updatePillHighlight(activePill);
});
// Also set after fonts load
document.fonts.ready.then(() => {
  const activePill = document.querySelector('.pill.active');
  if (activePill) updatePillHighlight(activePill);
});

/* ── Search Tags (Quick Type) ──────────────────────────────── */
document.querySelectorAll('.search-tag').forEach(tag => {
  tag.addEventListener('click', () => {
    const type = tag.dataset.type;
    document.querySelectorAll('.search-tag').forEach(t => t.classList.remove('active'));
    tag.classList.add('active');
    // Find matching pill and activate
    pills.forEach(pill => {
      if (pill.dataset.type === type) {
        pill.click();
      }
    });
  });
});

/* ── Filter Sidebar Accordions ─────────────────────────────── */
document.querySelectorAll('.filter-toggle').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const body = toggle.nextElementSibling;
    const isOpen = body.classList.contains('open');

    if (isOpen) {
      body.style.maxHeight = body.scrollHeight + 'px';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          body.style.maxHeight = '0';
          body.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    } else {
      body.classList.add('open');
      body.style.maxHeight = body.scrollHeight + 'px';
      toggle.setAttribute('aria-expanded', 'true');
      // Remove fixed height after transition completes
      body.addEventListener('transitionend', function handler() {
        body.style.maxHeight = '400px'; // allow dynamic content
        body.removeEventListener('transitionend', handler);
      }, { once: true });
    }
  });
});

/* ── Location Filter ───────────────────────────────────────── */
locationFilter.addEventListener('input', () => {
  state.location = locationFilter.value.toLowerCase().trim();
  scheduleFilter();
});

document.querySelectorAll('.loc-chip').forEach(chip => {
  chip.addEventListener('click', () => {
    const loc = chip.dataset.loc;
    const isActive = chip.classList.contains('active');

    document.querySelectorAll('.loc-chip').forEach(c => c.classList.remove('active'));

    if (!isActive) {
      chip.classList.add('active');
      state.location = loc.toLowerCase();
      locationFilter.value = loc;
    } else {
      state.location = '';
      locationFilter.value = '';
    }
    scheduleFilter();
  });
});

/* ── Job Type Checkboxes ───────────────────────────────────── */
document.querySelectorAll('.job-type-check').forEach(cb => {
  cb.addEventListener('change', () => {
    state.jobTypes = [...document.querySelectorAll('.job-type-check:checked')].map(c => c.value);
    scheduleFilter();
  });
});

/* ── Experience Radio ──────────────────────────────────────── */
document.querySelectorAll('.exp-radio').forEach(radio => {
  radio.addEventListener('change', () => {
    state.experience = radio.value;
    scheduleFilter();
  });
});

/* ── Salary Range ──────────────────────────────────────────── */
function updateRangeUI() {
  const min = parseInt(rangeMin.value);
  const max = parseInt(rangeMax.value);
  const total = 120 - 5;
  const leftPct  = ((min - 5) / total) * 100;
  const rightPct = ((120 - max) / total) * 100;
  rangeFill.style.left  = leftPct  + '%';
  rangeFill.style.right = rightPct + '%';
  salaryMinEl.textContent = '₹' + min + ' L';
  salaryMaxEl.textContent = '₹' + max + ' L';
}

rangeMin.addEventListener('input', () => {
  if (parseInt(rangeMin.value) > parseInt(rangeMax.value) - 10) {
    rangeMin.value = parseInt(rangeMax.value) - 10;
  }
  state.salaryMin = parseInt(rangeMin.value);
  updateRangeUI();
  scheduleFilter();
});

rangeMax.addEventListener('input', () => {
  if (parseInt(rangeMax.value) < parseInt(rangeMin.value) + 10) {
    rangeMax.value = parseInt(rangeMin.value) + 10;
  }
  state.salaryMax = parseInt(rangeMax.value);
  updateRangeUI();
  scheduleFilter();
});

[rangeMin, rangeMax].forEach(r => {
  r.addEventListener('mousedown', () => r.classList.add('dragging'));
  r.addEventListener('mouseup',   () => r.classList.remove('dragging'));
  r.addEventListener('touchstart',() => r.classList.add('dragging'));
  r.addEventListener('touchend',  () => r.classList.remove('dragging'));
});

updateRangeUI();

/* ── Clear Filters ─────────────────────────────────────────── */
clearFiltersBtn.addEventListener('click', () => {
  clearFiltersBtn.classList.add('glitching');
  setTimeout(() => clearFiltersBtn.classList.remove('glitching'), 420);

  state.query      = '';
  state.type       = 'All';
  state.location   = '';
  state.jobTypes   = [];
  state.experience = 'All';
  state.salaryMin  = 5;
  state.salaryMax  = 120;

  searchInput.value   = '';
  locationFilter.value = '';
  rangeMin.value = 5;
  rangeMax.value = 120;
  updateRangeUI();

  document.querySelectorAll('.job-type-check').forEach(c => c.checked = false);
  document.querySelector('.exp-radio[value="All"]').checked = true;
  document.querySelectorAll('.loc-chip').forEach(c => c.classList.remove('active'));
  document.querySelectorAll('.search-tag').forEach(t => t.classList.remove('active'));

  pills.forEach(p => {
    p.classList.toggle('active', p.dataset.type === 'All');
    if (p.dataset.type === 'All') updatePillHighlight(p);
  });

  scheduleFilter();
});

/* ── Filter Logic ──────────────────────────────────────────── */
let filterTimeout = null;

function scheduleFilter() {
  clearTimeout(filterTimeout);
  filterTimeout = setTimeout(applyFilters, 80);
}

function applyFilters() {
  const results = JOBS.filter(job => {
    // Search query
    if (state.query) {
      const q = state.query;
      if (!job.title.toLowerCase().includes(q) &&
          !job.company.toLowerCase().includes(q) &&
          !job.tags.some(t => t.toLowerCase().includes(q)) &&
          !job.location.toLowerCase().includes(q)) {
        return false;
      }
    }

    // Pill type filter
    if (state.type !== 'All' && job.type !== state.type) return false;

    // Location
    if (state.location && !job.location.toLowerCase().includes(state.location)) return false;

    // Checkbox job types
    if (state.jobTypes.length && !state.jobTypes.includes(job.type)) return false;

    // Experience
    if (state.experience !== 'All' && job.experience !== state.experience) return false;

    // Salary
    if (job.salaryMin > state.salaryMax || job.salaryMax < state.salaryMin) return false;

    return true;
  });

  state.filteredJobs = results;
  renderCards(results);
}

/* ── Counter Roll ──────────────────────────────────────────── */
let lastCount = JOBS.length;

function animateCounter(newCount) {
  if (newCount === lastCount) return;
  const slot = counterDisplay;
  slot.classList.add('rolling-out');
  setTimeout(() => {
    slot.textContent = newCount;
    slot.classList.remove('rolling-out');
    slot.classList.add('rolling-in');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        slot.classList.remove('rolling-in');
      });
    });
    slot.style.transform = 'translateY(0)';
    slot.style.opacity = '1';
  }, 300);
  lastCount = newCount;
}

/* ── Card Rendering ────────────────────────────────────────── */
let isFirstRender = true;

function renderCards(jobs, container = jobGrid, isEmpty = emptyState) {
  animateCounter(jobs.length);

  if (container === jobGrid && !isFirstRender) {
    // Animate existing cards out
    const existingCards = [...container.querySelectorAll('.job-card:not(.exiting)')];
    existingCards.forEach((card, i) => {
      card.style.transitionDelay = (i * 30) + 'ms';
      card.classList.add('exiting');
    });

    setTimeout(() => {
      container.innerHTML = '';
      if (jobs.length === 0) {
        isEmpty.style.display = 'flex';
      } else {
        isEmpty.style.display = 'none';
        jobs.forEach((job, i) => {
          const card = createCard(job);
          container.appendChild(card);
          setTimeout(() => {
            card.classList.add('entering');
            card.style.opacity = '1';
          }, i * 60 + 20);
        });
      }
    }, Math.min(existingCards.length * 30 + 200, 350));

  } else {
    // First render — stagger reveal
    container.innerHTML = '';
    if (jobs.length === 0) {
      isEmpty.style.display = 'flex';
    } else {
      isEmpty.style.display = 'none';
      jobs.forEach((job, i) => {
        const card = createCard(job);
        container.appendChild(card);
        setTimeout(() => {
          card.classList.add('revealed');
        }, i * 80 + 100);
      });
    }
    isFirstRender = false;
  }
}

/* ── Card Factory ──────────────────────────────────────────── */
function createCard(job) {
  const isSaved = state.savedIds.has(job.id);
  const badgeClass = getBadgeClass(job.type);

  const card = document.createElement('div');
  card.className = 'job-card';
  card.setAttribute('data-id', job.id);
  card.setAttribute('role', 'article');
  card.setAttribute('tabindex', '0');

  card.innerHTML = `
    <div class="card-header">
      <div class="company-logo" style="background:${job.companyColor};" aria-hidden="true">
        ${job.companyInitial}
      </div>
      <div class="card-titles">
        <p class="card-company">${job.company}</p>
        <h2 class="card-title">${job.title}</h2>
      </div>
      <button class="bookmark-btn${isSaved ? ' saved' : ''}" data-id="${job.id}" aria-label="${isSaved ? 'Remove bookmark' : 'Save job'}">
        <svg width="18" height="18" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
          <path class="bookmark-fill" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
        </svg>
      </button>
    </div>
    <div class="card-meta">
      <span class="meta-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        ${job.location}
      </span>
      <span class="job-type-badge ${badgeClass}">${job.type}</span>
      <span class="exp-badge">${job.experience}</span>
    </div>
    <div class="card-footer">
      <span class="card-salary">${job.salary}</span>
      <span class="card-time">${job.daysAgo === 1 ? '1 day ago' : job.daysAgo + ' days ago'}</span>
    </div>
  `;

  // Card click → open modal
  card.addEventListener('click', e => {
    if (e.target.closest('.bookmark-btn')) return;
    openModal(job, card);
  });

  card.addEventListener('keydown', e => {
    if ((e.key === 'Enter' || e.key === ' ') && !e.target.closest('.bookmark-btn')) {
      e.preventDefault();
      openModal(job, card);
    }
  });

  // Bookmark
  const bookmarkBtn = card.querySelector('.bookmark-btn');
  bookmarkBtn.addEventListener('click', e => {
    e.stopPropagation();
    toggleBookmark(job.id, bookmarkBtn);
  });

  return card;
}

function getBadgeClass(type) {
  const map = { 'Full-time': 'badge-full', 'Part-time': 'badge-part', 'Remote': 'badge-remote', 'Contract': 'badge-contract' };
  return map[type] || 'badge-full';
}

/* ── Bookmark ──────────────────────────────────────────────── */
function toggleBookmark(id, btn) {
  const isSaved = state.savedIds.has(id);

  if (isSaved) {
    state.savedIds.delete(id);
    btn.classList.remove('saved');
    btn.setAttribute('aria-label', 'Save job');
    burstParticles(btn, false);
  } else {
    state.savedIds.add(id);
    btn.classList.add('saved');
    btn.setAttribute('aria-label', 'Remove bookmark');
    burstParticles(btn, true);
  }

  // Also update all other instances of same card bookmark
  document.querySelectorAll(`.bookmark-btn[data-id="${id}"]`).forEach(b => {
    if (b !== btn) {
      b.classList.toggle('saved', !isSaved);
    }
  });

  savePersist();

  // Refresh saved view if open
  if (state.currentView === 'saved') renderSavedView();
}

function burstParticles(btn, gold) {
  const rect = btn.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  for (let i = 0; i < 6; i++) {
    const p = document.createElement('div');
    p.className = 'bookmark-particle' + (gold ? '' : ' grey');
    const angle = (i / 6) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
    const dist  = 18 + Math.random() * 14;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;
    p.style.cssText = `
      left: ${cx - 2.5}px;
      top: ${cy - 2.5}px;
      position: fixed;
      z-index: 9999;
      --dx: ${dx}px;
      --dy: ${dy}px;
    `;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 700);
  }
}

/* ── Modal ─────────────────────────────────────────────────── */
function openModal(job, cardEl) {
  const isSaved = state.savedIds.has(job.id);
  const badgeClass = getBadgeClass(job.type);

  // Set transform origin based on card position
  if (cardEl) {
    const rect = cardEl.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    modal.style.transformOrigin = `${(centerX / vw) * 100}% ${(centerY / vh) * 100}%`;
  }

  modalInner.innerHTML = `
    <div class="modal-logo-row">
      <div class="modal-company-logo" style="background:${job.companyColor};">${job.companyInitial}</div>
      <div>
        <p class="modal-company-name">${job.company} · ${job.location}</p>
        <h2 class="modal-job-title" id="modalTitle">${job.title}</h2>
      </div>
    </div>

    <div class="modal-meta-row">
      <span class="job-type-badge ${badgeClass}">${job.type}</span>
      <span class="exp-badge">${job.experience}</span>
      <span class="meta-item">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        ${job.salary}
      </span>
      <span class="meta-item">${job.daysAgo === 1 ? 'Posted today' : 'Posted ' + job.daysAgo + ' days ago'}</span>
    </div>

    <p class="modal-section-label">About the role</p>
    <p class="modal-text">${job.description}</p>

    <p class="modal-section-label">Requirements</p>
    <ul class="modal-requirements">
      ${job.requirements.map(r => `<li>${r}</li>`).join('')}
    </ul>

    <p class="modal-section-label">About ${job.company}</p>
    <div class="modal-company-panel">
      <h4>${job.company}</h4>
      <p>${job.about}</p>
    </div>

    <div class="modal-apply-row">
      <button class="btn-apply" id="modalApplyBtn">
        <span class="btn-apply-text">Apply Now</span>
        <div class="apply-progress" id="applyProgress"></div>
      </button>
      <button class="btn-save-modal" id="modalSaveBtn">
        ${isSaved ? '★ Saved' : '☆ Save Job'}
      </button>
    </div>
  `;

  modalBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Apply button
  const applyBtn      = document.getElementById('modalApplyBtn');
  const applyProgress = document.getElementById('applyProgress');
  let applied = false;

  applyBtn.addEventListener('click', () => {
    if (applied) return;
    applied = true;
    applyBtn.classList.add('loading');

    // Reset and trigger progress
    applyProgress.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        applyProgress.style.width = '100%';
      });
    });

    setTimeout(() => {
      applyBtn.classList.remove('loading');
      applyBtn.classList.add('done');
      applyBtn.querySelector('.btn-apply-text').textContent = 'Application Sent ✓';
      applyBtn.querySelector('.btn-apply-text').style.opacity = '1';
    }, 1550);
  });

  // Modal save button
  const modalSaveBtn = document.getElementById('modalSaveBtn');
  modalSaveBtn.addEventListener('click', () => {
    const nowSaved = state.savedIds.has(job.id);
    if (nowSaved) {
      state.savedIds.delete(job.id);
      modalSaveBtn.textContent = '☆ Save Job';
    } else {
      state.savedIds.add(job.id);
      modalSaveBtn.textContent = '★ Saved';
      burstParticles(modalSaveBtn, true);
    }
    // Update card bookmarks
    document.querySelectorAll(`.bookmark-btn[data-id="${job.id}"]`).forEach(b => {
      b.classList.toggle('saved', !nowSaved);
    });
    savePersist();
    if (state.currentView === 'saved') renderSavedView();
  });
}

function closeModal() {
  modalBackdrop.classList.remove('open');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', e => {
  if (e.target === modalBackdrop) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

/* ── Saved Jobs View ───────────────────────────────────────── */
function renderSavedView() {
  const savedJobs = JOBS.filter(j => state.savedIds.has(j.id));
  savedCountEl.textContent = savedJobs.length + (savedJobs.length === 1 ? ' bookmarked position' : ' bookmarked positions');

  savedGrid.innerHTML = '';
  savedEmptyState.style.display = savedJobs.length ? 'none' : 'flex';

  if (savedJobs.length) {
    savedJobs.forEach((job, i) => {
      const card = createCard(job);
      savedGrid.appendChild(card);
      setTimeout(() => card.classList.add('revealed'), i * 80 + 80);
    });
  }
}

function switchView(view) {
  state.currentView = view;

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.view === view);
  });

  if (view === 'saved') {
    mainContent.style.display    = 'none';
    pillBarWrapper.style.display = 'none';
    savedView.style.display      = 'block';
    renderSavedView();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    mainContent.style.display    = 'grid';
    pillBarWrapper.style.display = 'flex';
    savedView.style.display      = 'none';
  }
}

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const view = link.dataset.view;
    if (view) switchView(view);
  });
});

logoBtn.addEventListener('click', e => {
  e.preventDefault();
  switchView('listings');
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ── Initial Render ────────────────────────────────────────── */
renderCards(JOBS);
updateRangeUI();

/* ── Hamburger (Mobile) ────────────────────────────────────── */
navHamburger.addEventListener('click', () => {
  // Simple toggle of nav links visibility on mobile
  const links = document.querySelector('.nav-links');
  const postBtn = document.querySelector('.btn-post-job');
  const show = links.style.display !== 'flex';
  if (show) {
    links.style.cssText = 'display:flex; flex-direction:column; position:absolute; top:64px; left:0; right:0; background:rgba(13,17,23,0.98); border-bottom:1px solid rgba(255,255,255,0.08); padding:1rem 2rem; gap:0; backdrop-filter:blur(12px); z-index:999;';
    postBtn.style.cssText = 'display:flex; margin:0.75rem 2rem 1rem;';
  } else {
    links.style.display = 'none';
    postBtn.style.display = 'none';
  }
  navHamburger.querySelectorAll('span').forEach((s, i) => {
    s.style.transform = show
      ? i === 0 ? 'translateY(7px) rotate(45deg)' : i === 1 ? 'scaleX(0)' : 'translateY(-7px) rotate(-45deg)'
      : '';
    s.style.opacity = show && i === 1 ? '0' : '1';
  });
});

// Close mobile menu on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    links.style.display = '';
    document.querySelector('.btn-post-job').style.display = '';
    navHamburger.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity = '';
    });
  });
});

/* ── Resize pill highlight ─────────────────────────────────── */
window.addEventListener('resize', () => {
  const activePill = document.querySelector('.pill.active');
  if (activePill) updatePillHighlight(activePill);
}, { passive: true });

/* ── Company filter from Companies page ────────────────────── */
const _companyFilter = sessionStorage.getItem('vt_company_filter');
if (_companyFilter) {
  sessionStorage.removeItem('vt_company_filter');
  state.query = _companyFilter.toLowerCase();
  searchInput.value = _companyFilter;
  searchInput.dispatchEvent(new Event('input'));
  // small delay so the enter-animation finishes before the grid updates
  setTimeout(() => {
    applyFilters();
    // flash the search bar to draw attention
    searchInput.classList.add('focused');
    setTimeout(() => searchInput.classList.remove('focused'), 1200);
  }, 800);
}
