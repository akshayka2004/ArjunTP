# Arjun T P — Personal Portfolio Website

A modern, responsive, and recruiter-focused developer portfolio built for **Arjun T P**, an MCA student at Saintgits College of Engineering and aspiring software developer / AI-ML enthusiast.

---

## 🎨 Design Aesthetic & Approach

- **Premium Editorial-Tech Aesthetic**: Clean off-white canvas (`#FAFAF9`), high-contrast dark typography (`#0D1117`), refined cobalt blue accents (`#1D4ED8`), and subtle grid patterns.
- **Source-of-Truth Compliance**: Built strictly from verified details in `arjun_portfolio (1).html` and `arjun_resume.html`.
  - Discrepancy handling: CGPA is deliberately omitted from public hero and education stats until confirmed.
  - Features all 4 verified industrial internships from the resume.
  - DOB and nationality are kept private.
- **Visual Rhythm**: Avoids generic card grids by providing varied section layouts:
  - **Hero**: Editorial headline, monogram badge (`ATP`), and verified metrics (2027 expected grad, 4 internships, 6 certifications).
  - **About**: Split editorial layout with structured profile facts and developer philosophy code fragment.
  - **Experience**: Clean timeline with connecting line, verified company endorsements, and skill tags.
  - **Projects**: Large editorial feature panels for *Big Days* and *Code Nexus* with interactive overview drawer/modal.
  - **Skills**: Categorized interactive competency chips (no fake progress bars or percentages).
  - **Education**: Saintgits College of Engineering MCA timeline node.
  - **Certifications**: Filterable credential cards with verification tags (Infosys, IBM, IIT Bombay).
  - **Contact**: Oversized closing statement with 1-click email and phone copying.
  - **Footer**: Minimalist editorial sign-off.

---

## 📂 Project Architecture

```
d:/Arjun T P Portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css         # Design tokens, custom scrollbars, editorial grid
│   │   ├── layout.tsx          # Google Fonts (Plus Jakarta Sans, Outfit, JetBrains Mono) & SEO
│   │   └── page.tsx            # Semantic page composition
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation with scroll spy & mobile menu
│   │   ├── Hero.tsx            # Hero with stats & monogram showcase
│   │   ├── About.tsx           # Split narrative & quick facts
│   │   ├── Experience.tsx      # 4 internships timeline
│   │   ├── Projects.tsx        # Editorial panels & project details modal
│   │   ├── Skills.tsx          # Categorized competency tags
│   │   ├── Education.tsx       # Saintgits College credential card
│   │   ├── Certifications.tsx  # Accredited certifications with issuer filter
│   │   ├── Contact.tsx         # Direct contact with 1-click copy
│   │   └── Footer.tsx          # Minimal signature
│   └── data/
│       └── portfolio.ts        # Central single source of truth for all content & links
├── out/                        # Pre-rendered static export ready for hosting
├── arjun_portfolio (1).html    # Original source portfolio file
├── arjun_resume.html           # Original source resume file
├── package.json
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

---

## 🛠️ Modifying Content & Links

All personal details, URLs, and projects are centralized in [`src/data/portfolio.ts`](file:///d:/Arjun%20T%20P%20Portfolio/src/data/portfolio.ts):

- **Update LinkedIn / GitHub URLs**: edit `profile.socials.linkedin` and `profile.socials.github`.
- **Add Project Live Demo or Repository**: edit `demoUrl` or `githubUrl` inside `projects`.
- **Add New Skills or Certifications**: add items to `skills` or `certifications` arrays.

---

## 🚀 Running Locally

```bash
# Start local development server on port 3000
npm run dev

# Build optimized static export to /out folder
npm run build
```
