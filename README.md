# Khosbayar — Portfolio

Personal portfolio site built with **React 19**, **TypeScript**, **Tailwind CSS v4**, **Framer Motion** and **Vite**.

## Getting started

```bash
pnpm install
pnpm dev       # start the dev server
pnpm build     # type-check and build for production (outputs to dist/)
pnpm preview   # preview the production build
pnpm lint
```

## Project structure

```
src/
├── data/                 # ✏️  All site content lives here — edit these to update the site
│   ├── profile.ts        #     name, role, tagline, bio, email, social links
│   ├── skills.ts         #     skill groups shown in "Skills & tools"
│   ├── projects.ts       #     project cards (title, description, tech, links, image)
│   └── navigation.ts     #     navbar links / section ids
├── components/
│   ├── layout/           # Navbar, Footer, Background
│   ├── sections/         # Hero, About, Skills, Projects, Contact
│   └── ui/               # Reusable building blocks (Section, Reveal, Tag, ButtonLink, SocialLinks)
├── hooks/
│   └── useActiveSection.ts  # scroll-spy used to highlight the current nav link
├── App.tsx               # page composition
├── main.tsx
└── index.css             # Tailwind import + design tokens (@theme)
```

## Customizing

- **Content** — edit the files in `src/data/`. Sections render whatever is there; project links are only shown when `github` / `demo` are set, and an `image` replaces the default icon cover.
- **Colors & fonts** — change the tokens in the `@theme` block in `src/index.css`. Utilities such as `bg-panel`, `border-line/40`, `text-muted` and `text-accent` are generated from them.
- **Add a section** — create a component in `components/sections/` wrapped in `<Section id="..." />`, add it to `App.tsx`, and add its id to `data/navigation.ts`.

## Deploying to GitHub Pages

Deployment is automated by [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml): every push to `main` builds the site and publishes it to **https://githubxoc.github.io/portfolio/**. It can also be run manually from the repository's **Actions** tab ("Deploy to GitHub Pages" → "Run workflow").

One-time setup: in the repository on GitHub, open **Settings → Pages** and set **Source** to **GitHub Actions**.

GitHub Pages serves project sites from `/<repo-name>/`, so the workflow builds with `BASE_PATH=/<repo-name>/`. Locally and on hosts that serve from the domain root, `BASE_PATH` is unset and the base stays `/`. To test the Pages build locally:

```bash
BASE_PATH=/portfolio/ pnpm build
BASE_PATH=/portfolio/ pnpm preview   # open http://localhost:4173/portfolio/
```

If you rename the repository the URL changes with it automatically; for a user site (`<user>.github.io` repo) or a custom domain, set `BASE_PATH: /` in the workflow.
