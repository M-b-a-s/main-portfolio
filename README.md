# Ikwukala-Mbas Ifechimenim — Portfolio

A multi-page software engineering portfolio presenting my work, services, experience, engineering principles, and approach to building reliable products.

The site combines an editorial visual system with Apple-inspired spacing and bento layouts. Motion is handled with GSAP and includes entrance animations, counters, a scrolling ticker, magnetic interactions, and subtle parallax effects.

## Pages

- `/` — Portfolio overview, featured projects, services, about, process, and contact sections.
- `/work/` — Dedicated project showcase and company experience.
- `/services/` — Full-stack development, quality assurance, system design, DevOps, and team leadership.
- `/about/` — Personal introduction, engineering principles, working approach, and technical stack.

## Featured projects

- Internal Developer Platform
- Observability Platform
- Workflow Automation Platform

The project URLs currently use placeholders and can be replaced in `src/data/portfolio.ts` when live applications or repositories are available.

## Technology

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- GSAP and ScrollTrigger
- `@gsap/react`

## Getting started

### Requirements

- Node.js 20 or newer
- npm

### Installation

```bash
git clone <repository-url>
cd mbas
npm install
```

### Development

```bash
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

### Production build

```bash
npm run build
```

The production output is generated in `dist/`.

### Preview the production build

```bash
npm run preview
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server. |
| `npm run build` | Type-check and create a production build. |
| `npm run preview` | Preview the production build locally. |
| `npm run lint` | Run ESLint when an ESLint configuration is present. |

## Project structure

```text
public/
  my-photo.jpg                 Profile image
src/
  components/
    about/                     Dedicated About page sections
    sections/                  Shared homepage and layout sections
    ui.tsx                     Shared typography and UI helpers
  data/
    portfolio.ts               Projects, services, and process content
  hooks/
    usePortfolioAnimations.ts  GSAP and ScrollTrigger animations
  pages/
    AboutPage.tsx
    HomePage.tsx
    ServicesPage.tsx
    WorkPage.tsx
  App.tsx                      Page selection and shared layout
  styles.css                   Theme, global styles, and keyframes
```

## Updating content

- Update projects, services, tags, statuses, and project links in `src/data/portfolio.ts`.
- Update company experience in `src/pages/WorkPage.tsx`.
- Update About page content in `src/components/about/`.
- Update contact details and social links in `src/components/sections/`.
- Replace `public/my-photo.jpg` to change the profile image while keeping the existing path.
- Adjust colors and font variables in the `@theme` block in `src/styles.css`.

## Routing and deployment

This project selects pages from `window.location.pathname` rather than using a routing library. When deploying to a static host, configure fallback rewrites so `/work/`, `/services/`, and `/about/` serve `index.html`.

## Accessibility and motion

- Includes a keyboard-accessible skip link.
- Uses semantic sections, headings, lists, and descriptive image text.
- Honors `prefers-reduced-motion` by disabling or minimizing animation.
- Supports responsive layouts from mobile through wide desktop screens.

## Contact

- Email: [mbasernest@outlook.com](mailto:mbasernest@outlook.com)
- GitHub: [M-b-a-s](https://github.com/M-b-a-s)
- LinkedIn: [ifechimenim](https://www.linkedin.com/in/ifechimenim)

## License

This portfolio and its source code are provided for personal portfolio use. Add a license file if you intend to distribute or reuse the project publicly.
