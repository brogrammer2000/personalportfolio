# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (Vite, localhost:5173)
npm run build     # Production build
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

No test suite is configured.

## Architecture

Single-page React portfolio app. `src/App.tsx` is the theme/provider wrapper and composes all sections via `PortfolioContent`. Each section is its own component in `src/components/`. Shared data lives in `src/data/index.ts`.

### Project structure

```
src/
  App.tsx                  # Theme/provider wrapper + section composition only
  data/index.ts            # All shared constants (profile, skills, appliedAiApps, projectTags, projectRepos, FORMSPREE_URL)
  lib/utils.ts             # cn() helper — clsx + tailwind-merge
  components/              # One file per section
    Header.tsx
    Hero.tsx
    Projects.tsx
    AppliedAIApps.tsx
    MediumSection.tsx
    Experience.tsx
    Education.tsx
    Volunteering.tsx
    Skills.tsx
    Contact.tsx
    Game.tsx
    Footer.tsx
    ScrollReveal.tsx        # Framer Motion scroll-triggered reveal wrapper
    hooks/
      use-debounced-dimensions.ts
      use-screen-size.ts
    ui/                     # Decorative/visual primitives
      background-beams.tsx
      input.tsx
      pixel-trail.tsx
      wave-background.tsx
  contexts/
    LanguageContext.tsx
  translations/
    en.json
    fi.json
```

### Styling: dual MUI + Tailwind

The project uses **MUI v7** for layout and section components, and **Tailwind CSS v4** for utility classes in decorative `src/components/ui/` components. The `@/` path alias points to `src/`. `src/lib/utils.ts` exports `cn()` (clsx + tailwind-merge) used by `ui/` components. Don't mix the two systems inside a single component — MUI components use `sx` props; `ui/` primitives use Tailwind classes.

### Theme

MUI dark theme defined inline in `App.tsx`: primary `#3b82f6`, secondary `#0ea5e9`, background `#030712` / `rgba(15,23,42,0.4)`, font `Outfit`. Cards have glassmorphism defaults (blur, semi-transparent bg, subtle border).

### Animations

- **`ScrollReveal`** — wraps sections in `PortfolioContent` for `framer-motion` `useInView`-triggered entrance animations. Props: `direction` (`up`/`down`/`left`/`right`/`none`), `delay`, `duration`.
- **`BackgroundBeams`** — `React.memo` animated SVG placed absolutely behind all sections below Hero. Wrapped in a shared `position:relative overflow:hidden` Box in `PortfolioContent`.
- A `framer-motion` scroll progress bar is fixed at the top of the page (via `useScroll` + `useSpring`).

### i18n / Translation system

- `src/contexts/LanguageContext.tsx` — `LanguageProvider` wraps the whole app and provides `useLanguage()` hook
- Translations: `src/translations/en.json` and `src/translations/fi.json`
- `t("dotted.key")` returns a string; `getTranslation("dotted.key")` returns any value (used for arrays like `projects.items`, `experience.items`, etc.)
- Language persists in `localStorage` under key `portfolio-language`; auto-detects Finnish browser locale

### Content data

- **Profile info, skills array, `appliedAiApps` array, `FORMSPREE_URL`** — exported from `src/data/index.ts`
- **Projects, Experience, Education, Volunteering** — data lives in the translation JSON files under their respective keys (e.g., `projects.items[]`). Adding/editing these sections means editing both `en.json` and `fi.json`.
- Project GitHub links and tech tags are separate lookup objects (`projectRepos`, `projectTags`) in `src/data/index.ts`, keyed by project title

### External integrations

- **Contact form** — POSTs to Formspree (`FORMSPREE_URL` in `src/data/index.ts`)
- **Medium articles** — fetched via `src/api/medium.js` and rendered by `MediumSection.tsx`; prefetched articles cached in `src/utils/fetchedMediumArticles.js`

### Snake Game

Fully self-contained `Game` component in `src/components/Game.tsx`. Uses a `canvas` element with a `setInterval` game loop. State tracked via `useRef` (mutable game state) + `useState` (score/UI). Controls: WASD + mobile D-pad overlay. High score stored in `localStorage` under `snakeHigh`.

## File mix: JSX vs TSX

`main.jsx` and `src/api/medium.js`/`src/utils/fetchedMediumArticles.js` are plain JS; everything else is TypeScript. Vite handles both without a separate tsconfig.
