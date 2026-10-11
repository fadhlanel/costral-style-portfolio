# Coastal Portfolio Template

Interactive portfolio starter built with React, TypeScript, Vite, and Tailwind CSS. Coastal visuals meet neo-brutalist UI, playful physics, and practical portfolio sections.

[English](README.md) · [Bahasa Indonesia](README.id.md)

## Preview

A single-page portfolio for developers, designers, students, and digital builders. Replace demo content with your own profile without rebuilding the component structure.

## Highlights

- Interactive ocean canvas with waves, bubbles, fish, and click ripples
- Draggable rubber duck, beach crab, and flying seagull
- Project showcase with filters, case-study modal, metrics, and custom artwork
- Tech-stack pipeline connected to portfolio projects
- Scroll-aware milestone timeline
- GitHub contribution activity section
- Bento-style contact area with interactive cards
- Responsive neo-brutalist coastal design
- Local SVG demo assets with no external image dependency

## Built with

| Layer | Tools |
| --- | --- |
| UI | React 19, TypeScript |
| Build | Vite 8 |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Scroll | Lenis |
| Icons | Lucide React, Simple Icons |

## Quick start

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Customize

Most portfolio content lives in `src/data/portfolioData.ts`.

1. Replace `NAMA ANDA`, bio, education, interests, and contact links.
2. Replace demo projects, metrics, milestones, and tech relationships.
3. Put profile and project images inside `public/`.
4. Update `avatarUrl` and project `imageUrl` values.
5. Add your own CV and update the download link in `src/components/hero/HeroSection.tsx`.
6. Update the GitHub username in the contact data so activity cards show your profile.

Do not commit passwords, API keys, tokens, private documents, or personal data you do not want public.

## Commands

```bash
npm run dev       # development server
npm run build     # type-check and production build
npm run preview   # preview production build
npm run lint      # ESLint check
```

## Deploy

Deploy the generated `dist/` folder to GitHub Pages, Vercel, Netlify, or another static host.

For GitHub Pages under a repository subpath, configure `base` in `vite.config.ts` before building.

## Project map

```text
public/                 static assets and project artwork
src/components/         reusable page sections
src/data/               portfolio content
src/hooks/               interaction and scroll hooks
src/types/               TypeScript models
src/App.tsx              page composition
src/index.css            global styles and Tailwind setup
```

## License

MIT. See [LICENSE](LICENSE).

---

[Read this README in Bahasa Indonesia](README.id.md)
