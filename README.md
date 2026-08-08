# baustcse-portfolio

BAUST CSE Portfolio — Complete Build Prompt

> **Project**: Official website for the Department of Computer Science & Engineering, Bangladesh Army University of Science and Technology (BAUST), Saidpur.
> **Live URL target**: `baustcse.github.io`
Added logo of both university and department logo

> **Tone**: Premium academic institution with a tech-forward, military-disciplined identity.

---

## 1. Project Overview & Identity

Build a **modern, fully animated, single-codebase website** for the Department of Computer Science and Engineering at BAUST — the first technical university under the Bangladesh Armed Forces, established February 15, 2015, in Saidpur Cantonment.


- **Academic Excellence** — IEB-BAETE accredited, Washington Accord recognized


### Key Credibility Markers (must be visually prominent)
- ✅ IEB-BAETE Accredited
- ✅ Washington Accord Recognized
- ✅Bangladesh Army Welfare Trust
- ✅ Established 2015

---

## 2. Design System & Visual Language

### 2.1 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--primary` | `#0A1628` | Deep navy — hero backgrounds, navbars |
| `--primary-light` | `#112240` | Card backgrounds, sections |
| `--accent` | `#00D4AA` | Mint/teal — CTAs, highlights, glowing accents |
| `--accent-secondary` | `#6C63FF` | Purple — secondary buttons, badges |
| `--gold` | `#F5A623` | Military gold — accreditation badges, awards |
| `--text-primary` | `#E6F1FF` | Light text on dark backgrounds |
| `--text-secondary` | `#8892B0` | Muted body text |
| `--surface` | `#0D1B2A` | Surface/card color |
| `--glass` | `rgba(255,255,255,0.05)` | Glassmorphism panels |
| `--gradient-hero` | `linear-gradient(135deg, #0A1628 0%, #1B2A4A 50%, #0D2137 100%)` | Hero section |
| `--gradient-accent` | `linear-gradient(135deg, #00D4AA, #6C63FF)` | Accent gradient for borders/text |



> **Theme**: Never be dark mode 
##### Focus on CSE Department Logos color theme #######


### 2.2 Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Display/Hero | **Space Grotesk** | 700 | 56–72px |
| Headings | **Inter** | 600–700 | 28–40px |
| Body | **Inter** | 400 | 16–18px |
| Code/Tech labels | **JetBrains Mono** | 400 | 14px |
| Accent/Labels | **Inter** | 500 | 12–14px, uppercase, letter-spacing 2px |

Load from Google Fonts. Use `font-display: swap`.

### 2.3 Spacing & Grid

- Base unit: `8px`
- Max content width: `1200px`, centered
- Section padding: `100px 0` (desktop), `60px 0` (mobile)
- Card gap: `24px`
- Use CSS Grid for page layouts, Flexbox for component internals
- Fully responsive: mobile-first with breakpoints at `768px`, `1024px`, `1440px`

### 2.4 Glassmorphism & Depth

```css
.glass-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

### 2.5 Micro-Animations (Global)

- **Scroll-triggered reveals**: Elements fade-up + slide-in using Intersection Observer (or a library like AOS / GSAP ScrollTrigger). Stagger children by `100ms`.
- **Hover states**: All interactive elements must have smooth hover transitions (`transform: translateY(-4px)`, glow effects, border-color shifts) — `transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`.
- **Gradient borders on hover**: Cards get an animated gradient border on hover.
- **Typing effect**: Used for the hero tagline.
- **Counter animations**: Stat numbers count up when scrolled into view.
- **Parallax**: Subtle parallax on hero background elements.
- **Floating particles**: A subtle particle canvas or CSS dot grid in the hero section (not heavy — think constellation lines, not confetti).
- **Smooth scroll**: `scroll-behavior: smooth` globally with anchor offsets.
- **Page transitions**: Fade-in on route change if using a framework.
- **Loading state**: A brief branded loading screen with the department logo + progress bar on initial load.

---

## 3. Page Structure & Content

### 3.1 🏠 Hero / Landing Section

**Layout**: Full-viewport height. Dark gradient background with animated particle/constellation canvas overlay.

**Content**:
- **Top-left**: BAUST logo + "Department of Computer Science & Engineering" wordmark
- **Center**:
  - Small uppercase label: `ESTABLISHED 2015 · SAIDPUR CANTONMENT`
  - Main headline (typing animation): `Producing Tomorrow's Computer Specialists`
  - Sub-headline (fade-in): `The first technical university under the Bangladesh Armed Forces — IEB-BAETE accredited and Washington Accord recognized.`
  - Two CTA buttons:
    - Primary (teal glow): `Explore Programs →`
    - Secondary (outline): `Meet Our Achievers`
- **Accreditation ribbon**: A horizontal strip below the hero fold with animated badge icons:
  - `IEB-BAETE Accredited` | `Washington Accord` | `Est. 2015` | `BSc in CSE`
  - Each badge has a subtle shimmer/pulse animation
- **Scroll indicator**: Animated chevron bouncing at the bottom

**Animations**:
- Particle canvas renders on mount (lightweight, canvas-based)
- Headline types in character by character
- Sub-headline fades in after typing completes
- CTAs slide up with stagger
- Accreditation badges slide in from bottom with stagger

---

### 3.2 📖 About Section

**Layout**: Two-column — text left, visual right (or stacked on mobile).

**Content (Left)**:
- Section label: `ABOUT THE DEPARTMENT`
- Heading: `A Legacy of Excellence Since 2015`
- Body: The department is one of the founding departments of BAUST, operating since February 15, 2015. It produces "computer specialists" for the national economy's thrust sector, combining qualified faculty with cutting-edge lab infrastructure.
- Bullet highlights (with animated icons):
  - 🎖️ Founded under the Bangladesh Armed Forces
  - 🎓 IEB-BAETE accredited BSc in CSE
  - 🌍 Washington Accord recognized globally
  - 💻 5+ specialized laboratories

**Content (Right)**:
- A stylized image or 3D-ish illustration of campus/building (use a placeholder if no photo is available, or an abstract geometric pattern representing technology + military structure)
- Alternatively: An animated infographic showing a timeline from 2015 to present

**Animations**: Fade-up on scroll. Icons animate in with a bounce effect. Stats count up.

---

### 3.3 🔭 Vision & Mission Section

**Layout**: Full-width section with a slightly different background shade for contrast.

**Content**:
- **Vision Card** (centered, glass card, larger):
  - Icon: 🔭 or a custom telescope/star icon
  - Heading: `Our Vision`
  - Text: *"To produce highly competent, skilled graduates who excel in research and innovation for sustainable development."*
  - Subtle gradient border animation

- **Mission Cards** (3-column grid below):
  Each card is a glass card with an icon, number badge (01, 02, 03), and text:
  1. **Innovative Problem-Solving** — Preparing students for evolving challenges in CS & IT through innovative approaches.
  2. **Research & Knowledge Sharing** — Generating and sharing knowledge through basic and applied research.
  3. **Skilled Human Resources** — Contributing competent professionals to society in a sustainable way.

- **Program Educational Objectives** (horizontal scroll or tabbed):
  - 🚀 Career Progression
  - 🤝 Ethics, Professionalism & Teamwork
  - 💡 Applying Evolving Technologies

**Animations**: Vision card scales up from 0.95 on scroll. Mission cards stagger in from bottom. PEO items slide in horizontally.

---

### 3.4 🎓 Academic Program Section

**Layout**: Split — left has program info, right has a tabbed syllabus viewer.

**Content**:
- Heading: `Academic Program`
- Subheading: `BSc in Computer Science and Engineering`
- Program description paragraph
- **Curriculum Timeline** (interactive horizontal timeline):
  - `2015` → Foundation Syllabus
  - `2019` → Revised Syllabus
  - `2021` → Outcome-Based Education (OBE) Curriculum ← highlighted as current
  - Each node is clickable, showing details in a side panel or modal
- **Download buttons**: Each syllabus has a download PDF button (placeholder links for now, e.g., `#syllabus-2015`, `#syllabus-2019`, `#syllabus-2021`)
- **Credit hours / semester count** if available (use placeholder: `160 credits · 8 semesters`)

**Animations**: Timeline draws itself on scroll (line animates left-to-right, nodes pop in). Cards flip or expand on click.

---

### 3.5 🧪 Facilities / Labs Section

**Layout**: Card grid (2×3 or 3×2) with each lab as a hoverable glass card.

**Content** — Each card has:
- An icon (custom or emoji-based)
- Lab name
- One-line description
- Hover: card lifts, shows a subtle glow, reveals a "Learn More" prompt

| # | Lab | Icon | Description |
|---|-----|------|-------------|
| 1 | Computer Programming & OS Lab | 💻 | Core programming and operating system concepts |
| 2 | Database & Data Warehouse Lab | 🗄️ | DBMS, data warehousing, and analytics |
| 3 | Digital & Embedded System Lab | ⚡ | Digital logic design and embedded systems |
| 4 | Network & Hardware Lab | 🌐 | Computer networking and hardware engineering |
| 5 | Microprocessor & Interfacing Lab | 🔧 | Microprocessor architecture and peripheral interfacing |
| 6 | Multimedia Smart Classrooms | 📽️ | Interactive smart boards and multimedia-equipped rooms |

**Animations**: Cards stagger-reveal on scroll. Hover lifts card with `translateY(-8px)` and adds a gradient border glow. Icons animate with a gentle rotation or pulse.

---

### 3.6 🏆 Achievements / Student Success Section

**Layout**: Full-width, slightly different background. Use a "bento grid" or masonry-style layout.

**Content**:
- Section label: `STUDENT SUCCESS`
- Heading: `Champions Across Disciplines`
- Subheading: *Our students consistently prove their excellence on the national stage.*

**Achievement Cards** (each is a large, visually distinct card):

| Achievement | Event | Year | Badge |
|------------|-------|------|-------|
| 🤖 Robotics Championship | GPH Ispat *Esho Robot Banai* (TV) | — | 🥇 |
| 🏆 National Champion | bdapps National Hackathon — Team HAKO | 2022 | 🥇 |
| 💡 Championship | Innovative Idea Contest — a2i Program | 2022 | 🥇 |
| 👩‍💻 Championship | Digital Innovation Challenge for Women | 2023 | 🥇 |

Each card should feel like a "trophy case" item:
- Gold accent border or badge
- Event logo/icon area
- Title, event name, year
- Optional: "Read Story →" link

**Animations**: Cards reveal with a gold shimmer effect. Trophy/medal icons have a subtle rotating shine. The entire section has a faint golden glow overlay.

---

### 3.7 🛠️ What We're Building — Tech Stack Section

**Layout**: Dark section with floating tech logos and a code-editor aesthetic.

**Content**:
- Section label: `CURRENT FOCUS`
- Heading: `What We're Building`
- Subheading: *Bridging classroom learning with industry-relevant tools.*
- Descriptive paragraph: Students and faculty are actively building real-world projects across desktop, mobile, and web platforms — the same tools our alumni use professionally in the industry.

**Tech Cards** (interactive, with logo + description):

| Technology | Category | Description |
|-----------|----------|-------------|
| Electron | 🖥️ Desktop | Cross-platform desktop apps with web technologies |
| JavaFX | 🖥️ Desktop | Rich desktop applications on the JVM |
| Flutter | 📱 Mobile | Beautiful cross-platform mobile apps from a single codebase |
| React | 🌐 Web | Component-based UIs for modern web applications |
| Angular | 🌐 Web | Enterprise-grade web application framework |

**Visual treatment**:
- Each tech card shows the official logo (use shields.io badges or inline SVGs)
- Cards are arranged in a horizontal scrollable row or a pentagon/circular layout
- Background: faint code-rain or matrix-style animation (very subtle, low opacity)
- A "terminal window" UI element showing a mock command: `$ baust-cse init --stack react,flutter,electron ✓`

**Alumni Bridge callout** (glass card, highlighted):
> 💼 **From Classroom to Career** — A 3rd-batch graduate is now working as a Full-Stack Software Engineer building production systems with React, Next.js, Node.js, and TypeScript.

**Animations**: Tech logos float with a gentle hover animation. Cards tilt on mouse movement (3D tilt effect via CSS perspective). The terminal line types itself out.

---

### 3.8 📣 Recent Activity / News Feed Section

**Layout**: 3-column card grid (or carousel on mobile).

**Content**:
- Section label: `LATEST UPDATES`
- Heading: `What's Happening`
- Pull from categories:
  - 🎓 **Alumni Spotlights** — Graduates thriving in the tech industry
  - 📢 **Seminars & Workshops** — e.g., "Explainability in Machine Learning"
  - 🏫 **Events & Observances** — National day celebrations, department events
- Each card: thumbnail image area, category tag, title, date, short excerpt, "Read More →" link
- **"Follow us on Facebook" CTA** button linking to the Facebook page

**Animations**: Cards slide in from bottom with stagger. Category tags have colored pill backgrounds. Hover reveals full excerpt.

---

### 3.9 📊 Stats / By the Numbers Section

**Layout**: Full-width banner with 4–6 stat counters in a row.

**Content** (use real numbers where known, placeholders otherwise):

| Stat | Value | Label |
|------|-------|-------|
| 🎓 | `8+` | Years of Excellence |
| 👨‍🎓 | `500+` | Graduates Produced |
| 🏆 | `4+` | National Championships |
| 🧪 | `5` | Specialized Labs |
| 👨‍🏫 | `15+` | Faculty Members |
| 🌍 | `1` | Washington Accord Recognition |

**Animations**: Numbers count up from 0 when scrolled into view (use `countUp.js` or custom Intersection Observer + `requestAnimationFrame`). Each counter has a circular progress ring or a bar that fills up.

---

### 3.10 📬 Contact Section

**Layout**: Two-column — contact info left, embedded map or contact form right.

**Content (Left)**:
- Heading: `Get in Touch`
- **Address**: Saidpur Cantonment, Saidpur, Bangladesh
- **Phone (Admission)**: +88-01769675588
- **Phone (General)**: 01769-675560
- **Email**: hdcse@baust.edu.bd
- **Social Links** (icon buttons with hover glow):
  - Facebook: `https://www.facebook.com/cse.baust.official/`
  - Email: `hdcse@baust.edu.bd`
  - Portfolio: `https://baustcse.github.io`
  - Official: `https://baust.edu.bd/cse`

**Content (Right)**:
- Option A: Embedded Google Maps iframe showing Saidpur Cantonment
- Option B: A styled contact form (Name, Email, Subject, Message, Submit) — even if non-functional, it looks professional
- Option C: Both (map above, form below)

**Animations**: Contact items slide in from left, map/form fades in from right. Social icons have a ripple effect on hover.

---

### 3.11 🦶 Footer

**Layout**: Multi-column footer with dark background.

**Content**:
- **Column 1**: Department logo + short tagline + social icons
- **Column 2**: Quick Links — Home, About, Program, Facilities, Achievements, Contact
- **Column 3**: Resources — Syllabus Downloads, Lab Info, Faculty (placeholder)
- **Column 4**: Contact — Address, Phone, Email
- **Bottom bar**: `© 2025 Department of CSE, BAUST, Saidpur. All rights reserved.` + `Made with ❤️ by CSE students`

---

## 4. Global Navigation

### Navbar
- **Style**: Fixed top, glass effect (`backdrop-filter: blur`), transparent on hero → solid on scroll
- **Logo**: Left-aligned — BAUST CSE logo/wordmark
- **Links**: Home | About | Program | Facilities | Achievements | Tech Stack | Contact
- **CTA button**: `Apply Now` (accent color, pill-shaped)
- **Mobile**: Hamburger menu → full-screen overlay with staggered link animations
- **Active state**: Underline with gradient accent, updates on scroll-spy

### Scroll Progress
- A thin gradient progress bar at the very top of the viewport showing scroll percentage

### Back to Top
- Floating circular button (bottom-right) that appears after scrolling past the hero. Smooth scrolls to top. Has a subtle pulse animation.

---

## 5. Technical Implementation

### 5.1 Recommended Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | **Next.js 14+** (App Router) or **Vite + React** | SSG for GitHub Pages, React for components |
| Styling | **Vanilla CSS** (CSS Modules or global) | Full control, no dependency bloat |
| Animations | **GSAP** + **ScrollTrigger** or **AOS** + custom CSS | Scroll-based reveals, typing effects, counters |
| Particles | **tsParticles** (lightweight) or **Canvas API** | Hero background constellation effect |
| Icons | **Lucide React** or **Phosphor Icons** | Clean, modern icon set |
| Fonts | **Google Fonts** (Space Grotesk, Inter, JetBrains Mono) | Typography system |
| Deployment | **GitHub Pages** via `gh-pages` branch | Target: `baustcse.github.io` |

### 5.2 Performance Targets

- Lighthouse score: **90+** across all categories
- First Contentful Paint: **< 1.5s**
- Largest Contentful Paint: **< 2.5s**
- Cumulative Layout Shift: **< 0.1**
- Total bundle size: **< 500KB** gzipped
- All images: WebP format, lazy-loaded
- Fonts: preloaded, `font-display: swap`
- Animations: use `will-change`, `transform`, and `opacity` only for GPU-accelerated properties. Respect `prefers-reduced-motion`.

### 5.3 SEO

- Unique `<title>` and `<meta name="description">` per page/section
- Single `<h1>` per page
- Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Open Graph and Twitter Card meta tags
- `robots.txt` and `sitemap.xml`
- Structured data (JSON-LD) for `EducationalOrganization`

### 5.4 Accessibility

- WCAG 2.1 AA compliance target
- Color contrast ratios ≥ 4.5:1 for text
- All interactive elements keyboard-navigable
- ARIA labels on icon buttons and decorative elements
- Skip-to-content link
- `prefers-reduced-motion` media query disables all animations
- `prefers-color-scheme` support (optional light mode toggle)

---

## 6. File / Component Structure

```
src/
├── app/                        # Next.js App Router (or pages/)
│   ├── layout.jsx              # Root layout with navbar + footer
│   ├── page.jsx                # Home (all sections composed here)
│   └── globals.css             # Design tokens + global styles
├── components/
│   ├── Navbar/
│   │   ├── Navbar.jsx
│   │   └── Navbar.module.css
│   ├── Hero/
│   │   ├── Hero.jsx
│   │   ├── Hero.module.css
│   │   └── ParticleCanvas.jsx
│   ├── About/
│   │   ├── About.jsx
│   │   └── About.module.css
│   ├── VisionMission/
│   │   ├── VisionMission.jsx
│   │   └── VisionMission.module.css
│   ├── AcademicProgram/
│   │   ├── AcademicProgram.jsx
│   │   ├── AcademicProgram.module.css
│   │   └── Timeline.jsx
│   ├── Facilities/
│   │   ├── Facilities.jsx
│   │   └── Facilities.module.css
│   ├── Achievements/
│   │   ├── Achievements.jsx
│   │   └── Achievements.module.css
│   ├── TechStack/
│   │   ├── TechStack.jsx
│   │   ├── TechStack.module.css
│   │   └── Terminal.jsx
│   ├── RecentActivity/
│   │   ├── RecentActivity.jsx
│   │   └── RecentActivity.module.css
│   ├── Stats/
│   │   ├── Stats.jsx
│   │   ├── Stats.module.css
│   │   └── CountUp.jsx
│   ├── Contact/
│   │   ├── Contact.jsx
│   │   └── Contact.module.css
│   ├── Footer/
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   └── shared/
│       ├── GlassCard.jsx
│       ├── SectionHeader.jsx
│       ├── AnimatedReveal.jsx
│       ├── GradientButton.jsx
│       └── Badge.jsx
├── hooks/
│   ├── useScrollReveal.js
│   ├── useCountUp.js
│   └── useTypingEffect.js
├── data/
│   ├── achievements.json
│   ├── labs.json
│   ├── techStack.json
│   └── stats.json
├── assets/
│   ├── images/
│   └── icons/
└── utils/
    └── animations.js
```

---

## 7. Key Animation Implementations

### 7.1 Typing Effect (Hero)

```js
// useTypingEffect.js
const phrases = [
  "Producing Tomorrow's Computer Specialists",
  "Building the Digital Future of Bangladesh",
  "Where Military Discipline Meets Tech Innovation"
];
// Type → pause → delete → type next phrase → loop
```

### 7.2 Scroll Reveal

```js
// useScrollReveal.js — Intersection Observer
// Observe elements with [data-reveal] attribute
// Add class .revealed → triggers CSS transition
// Supports: fade-up, fade-left, fade-right, scale-in
// Stagger children with --delay custom property
```

### 7.3 Counter Animation

```js
// useCountUp.js
// On intersection: animate from 0 → target over 2 seconds
// Use easeOutExpo easing for a satisfying deceleration
// Format: add "+" suffix for numbers like "500+"
```

### 7.4 3D Card Tilt

```css
/* On mousemove over card: calculate rotateX/rotateY based on cursor position */
/* perspective: 1000px on parent */
/* transition: transform 0.1s ease on card */
/* Reset to 0,0 on mouseleave */
```

### 7.5 Navbar Glass Transition

```css
.navbar { background: transparent; transition: background 0.3s, backdrop-filter 0.3s; }
.navbar.scrolled { background: rgba(10, 22, 40, 0.85); backdrop-filter: blur(16px); }
```

---

## 8. Content Assets Needed

| Asset | Source / Action |
|-------|----------------|
| BAUST Logo | Extract from official site or request from department |
| Campus / Department Photos | Request from department or use from Facebook page |
| Lab Photos | Request or capture |
| Achievement Event Photos | Pull from Facebook posts (with permission) |
| Student / Alumni Photos | From alumni spotlights on Facebook |
| Tech Logos (Electron, React, etc.) | Official SVGs from each project's brand page |
| Syllabus PDFs | Download from official BAUST site |
| Faculty Photos | If needed later for credibility (Head of Dept) |

> **Fallback**: Where photos are unavailable, use abstract geometric illustrations, gradient blobs, or subtle patterns. Never use generic stock photos — they undermine credibility.

---

## 9. Social & External Links

| Platform | URL |
|----------|-----|
| Facebook | https://www.facebook.com/cse.baust.official/ |
| Email | hdcse@baust.edu.bd |
| Portfolio / GitHub Pages | https://baustcse.github.io |
| Official Website | https://baust.edu.bd/cse |
| Phone (Admission) | +88-01769675588 |
| Phone (General) | 01769-675560 |

---

## 10. Deployment Checklist

- [ ] All sections implemented with responsive layouts
- [ ] All animations working (scroll reveals, counters, typing, parallax)
- [ ] Navbar scroll behavior (transparent → glass)
- [ ] Mobile hamburger menu functional
- [ ] All external links open in new tabs (`target="_blank" rel="noopener"`)
- [ ] Favicon and Open Graph image set
- [ ] `robots.txt` and `sitemap.xml` generated
- [ ] Lighthouse audit ≥ 90 across all categories
- [ ] `prefers-reduced-motion` respects user preference
- [ ] Deployed to `baustcse.github.io` via `gh-pages`
- [ ] Custom domain configured (if applicable)
- [ ] Cross-browser tested (Chrome, Firefox, Safari, Edge)
- [ ] Mobile tested (iOS Safari, Android Chrome)

---

## 11. Stretch Goals (Phase 2)

| Feature | Description |
|---------|-------------|
| 🌗 Light/Dark Mode Toggle | Add a theme switcher in the navbar |
| 📰 Blog / News CMS | Markdown-based blog for announcements |
| 👨‍🏫 Faculty Directory | Photo grid with modal detail views |
| 📸 Photo Gallery | Lightbox gallery from events and campus life |
| 🎮 Interactive Campus Tour | 360° virtual tour of labs |
| 📊 Student Dashboard | Login-gated area for current students |
| 🌐 Bangla Language Toggle | Bilingual support (EN/BN) |
| 📱 PWA Support | Installable as mobile app, offline-capable |

---

> **Summary**: This prompt describes a premium, dark-themed, animation-rich single-page website for the BAUST CSE department. It should feel like a blend of a top-tier tech company landing page and an elite academic institution portal — with scroll-triggered reveals, glassmorphism cards, particle effects, counting stats, typing animations, and 3D card interactions. Every section maps directly to real department content: accreditation, vision/mission, curriculum, labs, achievements, current tech focus, alumni success, and contact information.

Also added the syllabus on a link to view pdf file using browser

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/1e9f64ee-45db-4975-ab3a-b43221bc200e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
