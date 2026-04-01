# VoidJobs — Terminal-Grade Job Board

A modern, terminal-inspired job board platform featuring a dark theme and sleek UI. VoidJobs is a multi-page web application showcasing job listings, company profiles, and salary intelligence for India's top tech companies.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Installation & Setup](#installation--setup)
- [Browser Compatibility](#browser-compatibility)
- [Design System](#design-system)
- [Contributing](#contributing)

---

## 🎯 Overview

VoidJobs is a static web application built with vanilla HTML, CSS, and JavaScript. It simulates a job board platform with advanced filtering, search capabilities, and interactive UI elements. The design is heavily inspired by terminal/CLI aesthetics with a modern twist.

**Key Highlights:**
- 🌑 Dark theme with amber/teal accent colors
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🔍 Real-time search and filtering
- 🎨 Custom UI components (checkboxes, radio buttons, sliders)
- ⚡ Lightweight and fast (no frameworks)
- ♿ Accessible (ARIA labels, semantic HTML)

---

## ✨ Features

### Browse Jobs Page (`index.html`)
- **Real-time search** across job titles, companies, and tags
- **Advanced filters**:
  - Location (with quick-select chips)
  - Job type (Full-time, Part-time, Remote, Contract)
  - Experience level (Junior, Mid, Senior, Lead)
  - Salary range (dual-handle slider: ₹5L - ₹120L)
- **Job type pills** for quick filtering
- **Job cards** with hover effects
- **Modal view** for detailed job descriptions
- **Dynamic counter** showing filtered results
- **Sticky navigation** and filter bar

### Companies Page (`companies.html`)
- **Company grid** with 12+ featured companies
- **Industry filters** (Fintech, E-Commerce, SaaS, Mobility, etc.)
- **Sorting options**:
  - Featured
  - Alphabetical (A → Z)
  - Most open roles
  - Newest first
- **Company cards** with:
  - Logo/initial badge
  - Industry tags
  - Funding stage
  - Open roles count
  - Employee count
- **Animated reveal** on scroll
- **CTA banner** for employers

### Salaries Page (`salaries.html`)
- **Salary distribution visualization**
- **Role-based salary ranges**
- **Experience-level breakdown**
- **Company-wise compensation data**
- **Interactive salary explorer**

---

## 🛠️ Technologies Used

### Core Technologies
- **HTML5** — Semantic markup with ARIA accessibility
- **CSS3** — Modern styling with custom properties (CSS variables)
- **JavaScript (ES6+)** — Vanilla JS (no frameworks)

### Libraries & Fonts
- **Google Fonts**:
  - **Syne** (400, 600, 700, 800) — Primary UI font
  - **JetBrains Mono** (300, 400, 500, 700) — Monospace for labels/code
  - **DM Serif Display** (Regular, Italic) — Headlines and emphasis

### CSS Features Used
- **CSS Custom Properties** (Variables) for theming
- **CSS Grid** for layouts
- **Flexbox** for component alignment
- **CSS Transitions & Transforms** for animations
- **Media Queries** for responsive design
- **Backdrop Filter** for glassmorphism effects
- **CSS Pseudo-elements** (::before, ::after) for decorative elements

### JavaScript Features Used
- **ES6+ Syntax** (arrow functions, template literals, destructuring)
- **Array Methods** (filter, map, forEach, find, some)
- **DOM Manipulation** (querySelector, addEventListener, classList)
- **Event Delegation** for dynamic elements
- **Local State Management** with objects

---

## 📁 Project Structure

```
webp_project/
├── index.html              # Main job browse page
├── companies.html          # Company directory page
├── salaries.html           # Salary intelligence page
├── style-simple.css        # Global/shared styles
├── companies.css           # Companies page-specific styles
├── salaries.css            # Salaries page-specific styles
├── script-simple.js        # Job browse page logic
├── companies.js            # Companies page logic
├── salaries.js             # Salaries page logic
├── server.log              # Server log file (if applicable)
└── README.md               # This file
```

---

## 📄 Pages

### 1. **Browse Jobs** (`index.html`)
The main landing page featuring job listings with comprehensive filtering.

**Components:**
- Navbar (sticky)
- Hero section with search
- Pill bar (job type filters)
- Sidebar filters (location, job type, experience, salary)
- Job grid with cards
- Job detail modal
- Footer

### 2. **Companies** (`companies.html`)
A directory of featured companies hiring on the platform.

**Components:**
- Hero section
- Stats strip (companies, avg salary, locations)
- Industry filter pills + sort dropdown
- Company cards grid
- Employer CTA banner
- Footer

### 3. **Salaries** (`salaries.html`)
Salary intelligence and compensation insights.

**Components:**
- Hero section
- Salary data visualization
- Role-based breakdowns
- Experience level comparisons
- Footer

---

## 🚀 Installation & Setup

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: A local web server (Live Server, Python HTTP server, etc.)

### Steps

1. **Clone or download** the project:
   ```bash
   git clone <repository-url>
   cd webp_project
   ```

2. **Open with a browser**:
   - **Option A**: Double-click `index.html`
   - **Option B**: Use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (http-server)
     npx http-server
     
     # VS Code Live Server extension
     Right-click index.html → "Open with Live Server"
     ```

3. **Navigate**:
   - Browse Jobs: `index.html`
   - Companies: `companies.html`
   - Salaries: `salaries.html`

---

## 🌐 Browser Compatibility

| Browser | Version | Status |
|---------|---------|--------|
| Chrome  | 90+     | ✅ Full support |
| Firefox | 88+     | ✅ Full support |
| Safari  | 14+     | ✅ Full support |
| Edge    | 90+     | ✅ Full support |

**Note**: The app uses modern CSS features like `backdrop-filter` and CSS Grid. Older browsers may have degraded styling.

---

## 🎨 Design System

### Color Palette

```css
/* Core Colors */
--bg:          #0a0e1a    /* Background */
--card:        #1a1f2e    /* Card background */
--card-hover:  #22293a    /* Card hover state */
--border:      rgba(255,255,255,0.1)  /* Borders */

/* Accent Colors */
--amber:       #F5A623    /* Primary accent */
--teal:        #00C9A7    /* Secondary accent */
--red:         #FF4D4D    /* Alerts/errors */

/* Text Colors */
--text:        #E8EAF0    /* Primary text */
--text-mid:    #8892A4    /* Secondary text */
--text-dim:    #4A5568    /* Tertiary text */
```

### Typography

- **Headings**: Syne (700–800 weight)
- **Body**: Syne (400–600 weight)
- **Labels/Meta**: JetBrains Mono (300–700 weight)
- **Display/Emphasis**: DM Serif Display (Regular, Italic)

### Spacing

- Base unit: `1rem` (16px)
- Card padding: `1.5rem` - `2rem`
- Section gaps: `2rem` - `4rem`

---

## 🗂️ Data Structure

### Jobs Data (`script-simple.js`)

```javascript
{
  id: 1,
  title: 'Senior Frontend Engineer',
  company: 'Zerodha',
  location: 'Bengaluru',
  type: 'Full-time',
  experience: 'Senior',
  salary: '₹ 40–60 LPA',
  salaryMin: 40,
  salaryMax: 60,
  tags: ['React', 'TypeScript', 'GraphQL'],
  description: '...',
  requirements: ['...'],
  about: '...'
}
```

### Companies Data (`companies.js`)

```javascript
{
  id: 1,
  name: 'Zerodha',
  initial: 'ZE',
  color: '#387ED1',
  industry: 'Fintech',
  stage: 'Bootstrapped',
  hq: 'Bengaluru',
  founded: 2010,
  openRoles: 4,
  employees: '1,200+',
  tagline: '...'
}
```

---

## 🔧 Customization

### Adding New Jobs

Edit `script-simple.js` and add to the `JOBS` array:

```javascript
JOBS.push({
  id: 13,
  title: 'Your Job Title',
  company: 'Company Name',
  // ... other fields
});
```

### Adding New Companies

Edit `companies.js` and add to the `COMPANIES` array.

### Changing Colors

Modify CSS variables in `style-simple.css`:

```css
:root {
  --amber: #YOUR_COLOR;
  --teal: #YOUR_COLOR;
}
```

---

## 📱 Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) { ... }

/* Mobile */
@media (max-width: 768px) { ... }

/* Small Mobile */
@media (max-width: 600px) { ... }
```

---

## ♿ Accessibility Features

- ✅ Semantic HTML5 elements
- ✅ ARIA labels on interactive elements
- ✅ ARIA expanded states on filter toggles
- ✅ Focus states on all interactive elements
- ✅ Keyboard navigation support
- ✅ Color contrast compliance (WCAG AA)
- ✅ Screen reader friendly

---

## 🐛 Known Issues

- Custom cursor styling removed due to compatibility issues
- Range slider may have minor styling differences across browsers
- Some company names abbreviated in `companies.js` (data placeholder)

---

## 🚧 Future Enhancements

- [ ] Backend API integration
- [ ] User authentication
- [ ] Save/bookmark jobs
- [ ] Application tracking
- [ ] Email notifications
- [ ] Company review system
- [ ] Advanced salary filters
- [ ] Map view for location-based search

---

## 📜 License

This project is for educational/portfolio purposes. Feel free to use and modify.

---

## 👨‍💻 Author

**VoidJobs** — A modern job board demo project

---

## 🙏 Acknowledgments

- Inspired by terminal/CLI aesthetics
- Color palette inspired by developer tools
- Font choices optimized for readability and modern UI

---

**Built with ❤️ using vanilla HTML, CSS, and JavaScript**
