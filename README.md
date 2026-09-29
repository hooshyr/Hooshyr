# Hooshyr

Personal portfolio of Alireza Hooshyar — [hooshyr.com](https://hooshyr.com).

Built with [Next.js](https://nextjs.org/) (App Router), React, Tailwind CSS and Swiper, and exported as a static site to GitHub Pages.

## Requirements

- Node.js 20.9 or newer
- [pnpm](https://pnpm.io/) (the version is pinned in `package.json`, so `corepack enable` picks it up)

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description                                                   |
| -------------- | ------------------------------------------------------------- |
| `pnpm dev`     | Start the development server                                  |
| `pnpm build`   | Build the static site into `out/`                             |
| `pnpm preview` | Serve `out/` locally                                          |
| `pnpm export`  | Build and copy the site into `docs/` (served by GitHub Pages) |
| `pnpm lint`    | Run ESLint                                                    |

## Project structure

```
src/
  app/          layout (metadata, fonts, analytics), page and global styles
  assets/       images and Lottie animations imported by components
  components/
    pages/      page sections (intro, achievements, projects, …)
    typography/ headings and text effects
    ui/         reusable UI components
  data/         content: experiences, projects, skills, social links
public/         static files copied as-is (project screenshots, CNAME, …)
```

Most content edits happen in `src/data/`.
