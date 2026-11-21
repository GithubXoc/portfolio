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
- **Colors & fonts** — change the tokens in the `@theme` block in `src/index.css`. Utilities such as `bg-surface`, `text-muted` and `text-accent` are generated from them.
- **Add a section** — create a component in `components/sections/` wrapped in `<Section id="..." />`, add it to `App.tsx`, and add its id to `data/navigation.ts`.
