# Agent Guide: PixelOS Xaga Site

Welcome! This document provides an overview of the codebase, project structure, routing mechanism, styling patterns, and development guidelines for the **PixelOS Xaga Site** (`pixelos-xaga-site`). It is intended to help AI agents and developers quickly onboard and maintain the project.

---

## 1. Project Overview
The PixelOS Xaga Site is a premium, single-page web application that serves as the download and installation portal for PixelOS (an Android custom ROM) for the **Redmi Note 11T Pro / Pro+ / POCO X4 GT / Redmi K50i** (codenamed **`xaga`**).

### Core Stack
- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 8](https://vite.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Package Manager:** [Bun](https://bun.sh/) (indicated by `bun.lock`)
- **Styling:** CSS Modules (`*.module.css`) + CSS Custom Properties (Variables)
- **Deployment Platform:** Vercel (incorporating `@vercel/analytics` and `@vercel/speed-insights`)

---

## 2. Directory Structure

```
pixelos-xaga-site/
├── index.html                 # HTML template and font pre-connects
├── package.json               # Dependencies and scripts
├── bun.lock                   # Bun lockfile
├── vite.config.ts             # Vite configuration
├── vercel.json                # Vercel routing / hosting configuration
├── src/
│   ├── main.tsx               # Application entrypoint
│   ├── App.tsx                # Main App component (wraps sections & layout)
│   ├── App.module.css         # Layout styling for the main container
│   ├── index.css              # Global styles, scrollbars, and keyframes
│   ├── assets/                # Statics (icons, SVGs, etc.)
│   ├── styles/
│   │   └── variables.css      # Core theme (colors, fonts, sizes, transitions)
│   ├── utils/
│   │   └── sectionNavigation.ts # Custom URL-to-Section router
│   ├── data/
│   │   └── downloads.ts       # ROM and tool release data configuration
│   └── components/
│       ├── layout/            # Layout wrappers
│       │   ├── Navbar.tsx     # Navigation header with scroll indicators
│       │   └── Footer.tsx     # Footer containing support/XDA links
│       ├── sections/          # Content sections
│       │   ├── Hero.tsx       # Branding and quick download links
│       │   ├── Downloads.tsx  # Grid of links to ROM ZIPs, tools, and drivers
│       │   ├── FlashGuide.tsx # Stepper instructions for installation
│       │   └── FAQ.tsx        # Toggleable FAQ accordion
│       └── ui/                # Small reusable components
│           ├── Card.tsx       # Glassmorphic card utility
│           ├── CodeBlock.tsx  # Copyable shell command utility
│           └── Icons.tsx      # SVG icons used throughout the project
```

---

## 3. Development Commands

Use the following commands (preferably with Bun) to manage the codebase:

```bash
# Install dependencies
bun install

# Start the local development server
bun run dev

# Update Packages
bun update
```

---

## 4. Architectural Patterns

### A. Centralized Configuration (`src/data/downloads.ts`)
All download URLs, build dates, version numbers, filenames, platform-tool commands, and community resources are kept in [downloads.ts](file:///Users/angad/Code/pixelos-xaga-site/src/data/downloads.ts).
- **Rule:** **Never hardcode download URLs or version numbers directly in components.** Always update this data module.

### B. Custom Router & Scrolling (`src/utils/sectionNavigation.ts`)
The site uses a custom location-to-section navigation helper instead of a third-party router (like React Router):
- **Clean URLs:** Routes like `/downloads`, `/instructions`, and `/support` are mapped to page section IDs (`#downloads`, `#guide`, `#troubleshooting`).
- **Scroll Alignment:** The utility triggers smooth-scrolling to the active section with a custom offset (`SECTION_SCROLL_OFFSET = 96px`) to account for the sticky Navbar.
- **Handling Nav Actions:** Components that link to sections should utilize the helper functions:
  - `scrollToSection(sectionId, { path, history })`
  - `getSectionPath(sectionId)`
  - `syncLocationToSection()` (usually run on `popstate` / `hashchange` in `App.tsx`'s `useEffect`)

### C. Styling & Theme Variables (`src/styles/variables.css`)
Styling utilizes vanilla CSS modules to guarantee layout isolation and maximum modularity.
- **Colors:** Primary is Google Blue (`#4285F4`), Accent is Green (`#34A853`), and the theme relies on glassmorphism (`rgba(255, 255, 255, 0.05)`).
- **Rule:** Prefer using variables defined in [variables.css](file:///Users/angad/Code/pixelos-xaga-site/src/styles/variables.css) (`var(--color-primary)`, `var(--spacing-md)`, etc.) rather than introducing ad-hoc hex values or hardcoded margins.

---

## 5. Important Design and Code Conventions

1. **Accessibility (a11y):** Maintain clean HTML markup. Interactive elements must have proper keyboard focus rings, hover effects, and unique descriptive `id` properties.
3. **Vercel Deployments:** Standard hosting routes, headers, and SPA redirects are specified in [vercel.json](file:///Users/angad/Code/pixelos-xaga-site/vercel.json). If you change URL redirects or alias rules in `sectionNavigation.ts`, ensure they match the routes configured in `vercel.json`.
