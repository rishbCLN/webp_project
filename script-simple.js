'use strict';

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
    description: 'Join Zerodha\'s product engineering team to build India\'s most-used trading platform.',
    requirements: [
      '5+ years of production React/TypeScript experience',
      'Deep understanding of browser rendering and performance',
      'Experience building real-time data-heavy UIs',
      'Strong product instinct',
    ],
    about: 'Zerodha is India\'s largest stock broker by active clients.',
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
    description: 'Shape the visual language of India\'s leading payments platform.',
    requirements: [
      '3–5 years of product design experience',
      'Expert-level Figma skills',
      'Understanding of front-end constraints',
      'Portfolio demonstrating systems thinking',
    ],
    about: 'Razorpay is India\'s leading full-stack financial solutions company.',
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
    description: 'Use data to optimize delivery ETAs and improve recommendations.',
    requirements: [
      'PhD or 4+ years of ML experience',
      'Python (pandas, scikit-learn)',
      'SQL proficiency',
      'Experience deploying ML models',
    ],
    about: 'Swiggy is India\'s leading on-demand delivery platform.',
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
    description: 'Own the reliability and scalability of a payments platform.',
    requirements: [
      '7+ years in DevOps/SRE roles',
      'Deep Kubernetes expertise',
      'Infrastructure as Code: Terraform',
      'Multi-region architecture experience',
    ],
    about: 'PhonePe is India\'s leading digital payments platform.',
  },
  {
    id: 5,
    title: 'Backend Engineer',
    company: 'Flipkart',
    companyInitial: 'FL',
    companyColor: '#2874F0',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Mid',
    salary: '₹ 30–50 LPA',
    salaryMin: 30,
    salaryMax: 50,
    daysAgo: 5,
    tags: ['Java', 'Spring', 'Microservices'],
    description: 'Build scalable backend systems for e-commerce platform.',
    requirements: [
      '3+ years Java/Spring experience',
      'Microservices architecture',
      'Database design skills',
      'API development',
    ],
    about: 'Flipkart is India\'s leading e-commerce marketplace.',
  },
  {
    id: 6,
    title: 'Mobile Developer',
    company: 'Paytm',
    companyInitial: 'PT',
    companyColor: '#00BAF2',
    location: 'Noida',
    type: 'Full-time',
    experience: 'Junior',
    salary: '₹ 15–25 LPA',
    salaryMin: 15,
    salaryMax: 25,
    daysAgo: 6,
    tags: ['React Native', 'iOS', 'Android'],
    description: 'Develop mobile applications for payments platform.',
    requirements: [
      '2+ years mobile development',
      'React Native or native experience',
      'Understanding of mobile UX',
      'API integration skills',
    ],
    about: 'Paytm is a leading digital payments company.',
  },
  {
    id: 7,
    title: 'Full Stack Developer',
    company: 'CRED',
    companyInitial: 'CR',
    companyColor: '#0F1419',
    location: 'Remote',
    type: 'Remote',
    experience: 'Mid',
    salary: '₹ 35–55 LPA',
    salaryMin: 35,
    salaryMax: 55,
    daysAgo: 7,
    tags: ['Node.js', 'React', 'PostgreSQL'],
    description: 'Build end-to-end features for credit card payment app.',
    requirements: [
      '3+ years full stack experience',
      'Node.js and React proficiency',
      'Database design',
      'RESTful API development',
    ],
    about: 'CRED is a members-only credit card payment platform.',
  },
  {
    id: 8,
    title: 'QA Engineer',
    company: 'Zomato',
    companyInitial: 'ZO',
    companyColor: '#E23744',
    location: 'Mumbai',
    type: 'Full-time',
    experience: 'Junior',
    salary: '₹ 18–28 LPA',
    salaryMin: 18,
    salaryMax: 28,
    daysAgo: 8,
    tags: ['Selenium', 'Automation', 'Testing'],
    description: 'Ensure quality of food delivery platform.',
    requirements: [
      '2+ years QA experience',
      'Automation testing skills',
      'Test case design',
      'Bug tracking',
    ],
    about: 'Zomato is India\'s leading food delivery platform.',
  },
  {
    id: 9,
    title: 'UI/UX Designer',
    company: 'Dream11',
    companyInitial: 'D11',
    companyColor: '#FF4F4F',
    location: 'Mumbai',
    type: 'Part-time',
    experience: 'Junior',
    salary: '₹ 12–20 LPA',
    salaryMin: 12,
    salaryMax: 20,
    daysAgo: 9,
    tags: ['Figma', 'UI Design', 'Prototyping'],
    description: 'Design user interfaces for fantasy sports app.',
    requirements: [
      '1-3 years design experience',
      'Figma proficiency',
      'Mobile-first design',
      'User research skills',
    ],
    about: 'Dream11 is India\'s biggest fantasy sports platform.',
  },
  {
    id: 10,
    title: 'Python Developer',
    company: 'Freshworks',
    companyInitial: 'FW',
    companyColor: '#2DB88D',
    location: 'Hyderabad',
    type: 'Contract',
    experience: 'Mid',
    salary: '₹ 25–40 LPA',
    salaryMin: 25,
    salaryMax: 40,
    daysAgo: 10,
    tags: ['Python', 'Django', 'REST API'],
    description: 'Build backend services for SaaS products.',
    requirements: [
      '3+ years Python experience',
      'Django framework',
      'API development',
      'Cloud services',
    ],
    about: 'Freshworks provides business software solutions.',
  },
  {
    id: 11,
    title: 'Content Writer',
    company: 'Unacademy',
    companyInitial: 'UN',
    companyColor: '#08BD80',
    location: 'Remote',
    type: 'Part-time',
    experience: 'Junior',
    salary: '₹ 8–15 LPA',
    salaryMin: 8,
    salaryMax: 15,
    daysAgo: 11,
    tags: ['Content', 'Writing', 'EdTech'],
    description: 'Create educational content for learning platform.',
    requirements: [
      '1-2 years writing experience',
      'Strong communication skills',
      'Research abilities',
      'EdTech interest',
    ],
    about: 'Unacademy is India\'s largest learning platform.',
  },
  {
    id: 12,
    title: 'Security Engineer',
    company: 'BrowserStack',
    companyInitial: 'BS',
    companyColor: '#F66639',
    location: 'Bengaluru',
    type: 'Full-time',
    experience: 'Senior',
    salary: '₹ 40–65 LPA',
    salaryMin: 40,
    salaryMax: 65,
    daysAgo: 12,
    tags: ['Security', 'Penetration Testing', 'DevSecOps'],
    description: 'Secure testing infrastructure and applications.',
    requirements: [
      '5+ years security experience',
      'Penetration testing skills',
      'Security audits',
      'DevSecOps practices',
    ],
    about: 'BrowserStack provides web testing infrastructure.',
  },
];

let currentFilters = {
  search: '',
  type: 'All',
  location: '',
  jobTypes: [],
  experience: 'All',
  salaryMin: 5,
  salaryMax: 120,
};

let currentView = 'browse';

document.addEventListener('DOMContentLoaded', () => {
  initializeEventListeners();
  renderJobs();
  updateCounter();
  initializeSalarySlider();
});

function initializeEventListeners() {
  document.getElementById('searchInput')?.addEventListener('input', (e) => {
    currentFilters.search = e.target.value.toLowerCase();
    renderJobs();
  });

  document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentFilters.type = pill.dataset.type;
      renderJobs();
    });
  });

  document.querySelectorAll('.search-tag').forEach(tag => {
    tag.addEventListener('click', () => {
      currentFilters.type = tag.dataset.type;
      document.querySelectorAll('.pill').forEach(p => {
        if (p.dataset.type === tag.dataset.type) {
          p.click();
        }
      });
    });
  });

  document.getElementById('locationFilter')?.addEventListener('input', (e) => {
    currentFilters.location = e.target.value.toLowerCase();
    renderJobs();
  });

  document.querySelectorAll('.loc-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const loc = chip.dataset.loc;
      document.querySelectorAll('.loc-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentFilters.location = loc.toLowerCase();
      document.getElementById('locationFilter').value = loc;
      renderJobs();
    });
  });

  document.querySelectorAll('.job-type-check').forEach(checkbox => {
    checkbox.addEventListener('change', () => {
      currentFilters.jobTypes = Array.from(document.querySelectorAll('.job-type-check:checked'))
        .map(cb => cb.value);
      renderJobs();
    });
  });

  document.querySelectorAll('.exp-radio').forEach(radio => {
    radio.addEventListener('change', () => {
      currentFilters.experience = radio.value;
      renderJobs();
    });
  });

  document.getElementById('clearFilters')?.addEventListener('click', () => {
    currentFilters = {
      search: '',
      type: 'All',
      location: '',
      jobTypes: [],
      experience: 'All',
      salaryMin: 5,
      salaryMax: 120,
    };
    document.getElementById('searchInput').value = '';
    document.getElementById('locationFilter').value = '';
    document.querySelectorAll('.job-type-check').forEach(cb => cb.checked = false);
    document.querySelectorAll('.exp-radio').forEach(r => {
      r.checked = r.value === 'All';
    });
    document.querySelectorAll('.loc-chip').forEach(c => c.classList.remove('active'));
    document.querySelectorAll('.pill').forEach(p => {
      p.classList.toggle('active', p.dataset.type === 'All');
    });
    document.getElementById('rangeMin').value = 5;
    document.getElementById('rangeMax').value = 120;
    updateSalaryDisplay();
    renderJobs();
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const page = link.dataset.page;
      
      if (page === 'browse') {
        e.preventDefault();
      }
    });
  });

  document.getElementById('modalBackdrop')?.addEventListener('click', (e) => {
    if (e.target.id === 'modalBackdrop') {
      closeModal();
    }
  });

  document.getElementById('modalClose')?.addEventListener('click', closeModal);

  document.querySelectorAll('.filter-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const filterSection = toggle.closest('.filter-section');
      const filterBody = filterSection.querySelector('.filter-body');
      const isOpen = filterBody.classList.contains('open');
      
      filterBody.classList.toggle('open');
      toggle.setAttribute('aria-expanded', !isOpen);
    });
  });
}

function initializeSalarySlider() {
  const rangeMin = document.getElementById('rangeMin');
  const rangeMax = document.getElementById('rangeMax');
  const rangeFill = document.getElementById('rangeFill');

  function updateSlider() {
    let min = parseInt(rangeMin.value);
    let max = parseInt(rangeMax.value);

    if (min > max - 5) {
      min = max - 5;
      rangeMin.value = min;
    }
    if (max < min + 5) {
      max = min + 5;
      rangeMax.value = max;
    }

    currentFilters.salaryMin = min;
    currentFilters.salaryMax = max;

    updateSalaryDisplay();
    updateFillBar();
    renderJobs();
  }

  function updateFillBar() {
    const min = parseInt(rangeMin.value);
    const max = parseInt(rangeMax.value);
    const rangeMinVal = parseInt(rangeMin.min);
    const rangeMaxVal = parseInt(rangeMin.max);

    const leftPercent = ((min - rangeMinVal) / (rangeMaxVal - rangeMinVal)) * 100;
    const rightPercent = ((max - rangeMinVal) / (rangeMaxVal - rangeMinVal)) * 100;

    rangeFill.style.left = leftPercent + '%';
    rangeFill.style.width = (rightPercent - leftPercent) + '%';
  }

  rangeMin?.addEventListener('input', updateSlider);
  rangeMax?.addEventListener('input', updateSlider);

  updateFillBar();
}

function updateSalaryDisplay() {
  document.getElementById('salaryMin').textContent = `₹${currentFilters.salaryMin} L`;
  document.getElementById('salaryMax').textContent = `₹${currentFilters.salaryMax} L`;
}

function filterJobs() {
  return JOBS.filter(job => {
    if (currentFilters.search) {
      const searchLower = currentFilters.search;
      const matchesSearch = 
        job.title.toLowerCase().includes(searchLower) ||
        job.company.toLowerCase().includes(searchLower) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchLower));
      if (!matchesSearch) return false;
    }

    if (currentFilters.type !== 'All' && job.type !== currentFilters.type) {
      return false;
    }

    if (currentFilters.location) {
      if (!job.location.toLowerCase().includes(currentFilters.location)) {
        return false;
      }
    }

    if (currentFilters.jobTypes.length > 0) {
      if (!currentFilters.jobTypes.includes(job.type)) {
        return false;
      }
    }

    if (currentFilters.experience !== 'All' && job.experience !== currentFilters.experience) {
      return false;
    }

    if (job.salaryMin < currentFilters.salaryMin || job.salaryMax > currentFilters.salaryMax) {
      return false;
    }

    return true;
  });
}

function renderJobs() {
  const filteredJobs = filterJobs();
  const jobGrid = document.getElementById('jobGrid');
  const emptyState = document.getElementById('emptyState');

  if (filteredJobs.length === 0) {
    jobGrid.innerHTML = '';
    emptyState.style.display = 'block';
  } else {
    emptyState.style.display = 'none';
    jobGrid.innerHTML = filteredJobs.map(job => createJobCard(job)).join('');
    attachJobCardListeners();
  }

  updateCounter(filteredJobs.length);
}

function createJobCard(job) {
  return `
    <div class="job-card" data-job-id="${job.id}">
      <div class="job-card-header">
        <div class="job-card-left">
          <div class="company-icon" style="background: ${job.companyColor}; color: white;">
            ${job.companyInitial}
          </div>
          <div class="job-info">
            <h3 class="job-title">${job.title}</h3>
            <p class="company-name">${job.company}</p>
          </div>
        </div>
      </div>
      <div class="job-meta">
        <span class="meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          ${job.location}
        </span>
        <span class="meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
          ${job.type}
        </span>
        <span class="meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
          </svg>
          ${job.daysAgo}d ago
        </span>
      </div>
      <div class="job-tags">
        ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
      </div>
      <div class="job-card-footer">
        <span class="job-salary">${job.salary}</span>
        <span class="job-posted">${job.experience} level</span>
      </div>
    </div>
  `;
}

function attachJobCardListeners() {
  document.querySelectorAll('.job-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const jobId = parseInt(card.dataset.jobId);
      showJobModal(jobId);
    });
  });
}

function updateCounter(count) {
  const counter = document.getElementById('counterDisplay');
  if (counter) {
    counter.textContent = count !== undefined ? count : filterJobs().length;
  }
}

function showJobModal(jobId) {
  const job = JOBS.find(j => j.id === jobId);
  if (!job) return;

  const modal = document.getElementById('modal');
  const modalInner = document.getElementById('modalInner');

  modalInner.innerHTML = `
    <div class="modal-header">
      <div class="modal-company">
        <div class="company-icon" style="background: ${job.companyColor}; color: white; width: 60px; height: 60px; font-size: 1.3rem;">
          ${job.companyInitial}
        </div>
        <div>
          <h2 class="company-name" style="font-size: 1.1rem; margin-bottom: 0.3rem;">${job.company}</h2>
          <p style="color: var(--text-dim); font-size: 0.9rem;">${job.about}</p>
        </div>
      </div>
      <h1 class="modal-title">${job.title}</h1>
      <div class="modal-meta">
        <span class="meta-item">${job.location}</span>
        <span class="meta-item">${job.type}</span>
        <span class="meta-item">${job.experience} level</span>
        <span class="meta-item" style="color: var(--teal); font-weight: 600;">${job.salary}</span>
      </div>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">About the Role</h3>
      <p>${job.description}</p>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Requirements</h3>
      <ul>
        ${job.requirements.map(req => `<li>${req}</li>`).join('')}
      </ul>
    </div>

    <div class="modal-section">
      <h3 class="modal-section-title">Skills</h3>
      <div class="job-tags">
        ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
      </div>
    </div>

    <div class="modal-actions">
      <button class="btn-apply">Apply Now</button>
    </div>
  `;

  modal.querySelector('.btn-apply').addEventListener('click', () => {
    alert(`Application process for ${job.title} at ${job.company} would start here!`);
  });

  document.getElementById('modalBackdrop').classList.add('show');
}

function closeModal() {
  document.getElementById('modalBackdrop').classList.remove('show');
}
