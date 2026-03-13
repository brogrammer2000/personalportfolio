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
  contexts/
    LanguageContext.tsx
  translations/
    en.json
    fi.json
```

### i18n / Translation system

- `src/contexts/LanguageContext.tsx` — `LanguageProvider` wraps the whole app and provides `useLanguage()` hook
- Translations: `src/translations/en.json` and `src/translations/fi.json`
- `t("dotted.key")` returns a string; `getTranslation("dotted.key")` returns any value (used for arrays like `projects.items`, `experience.items`, etc.)
- Language persists in `localStorage` under key `portfolio-language`; auto-detects Finnish browser locale

### Content data

- **Profile info, skills array, `appliedAiApps` array** — exported from `src/data/index.ts`
- **Projects, Experience, Education, Volunteering** — data lives in the translation JSON files under their respective keys (e.g., `projects.items[]`). Adding/editing these sections means editing both `en.json` and `fi.json`.
- Project GitHub links and tech tags are separate lookup objects (`projectRepos`, `projectTags`) in `src/data/index.ts`, keyed by project title

### External integrations

- **Contact form** — POSTs to Formspree (`FORMSPREE_URL` constant in `App.tsx`)
- **Medium articles** — fetched via `src/api/medium.js` and rendered by `src/components/MediumSection.tsx`; prefetched articles cached in `src/utils/fetchedMediumArticles.js`

### Theme

MUI dark theme defined inline in `App.tsx`: primary `#7c4dff`, secondary `#00e5ff`, background `#0b1220` / `#0f172a`.

### Snake Game

Fully self-contained `Game` component in `App.tsx`. Uses a `canvas` element with a `setInterval` game loop. State is tracked via `useRef` (mutable game state) + `useState` (score/UI). Controls: WASD keyboard + mobile D-pad overlay. High score stored in `localStorage` under `snakeHigh`.

## File mix: JSX vs TSX

`main.jsx` and `src/api/medium.js`/`src/utils/fetchedMediumArticles.js` are plain JS; `App.tsx`, `MediumSection.tsx`, and `LanguageContext.tsx` are TypeScript. Vite handles both without a separate tsconfig (uses `@vitejs/plugin-react`).
