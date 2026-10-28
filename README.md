# Sanket Jadhao — Portfolio

Personal portfolio and resume site for Sanket Jadhao, Software Engineer.

**Live site:** https://sanketjadhao.netlify.app/

## Overview

A fast, fully static site that presents my experience, projects, skills, education, and research. It uses a dark visual design with looping 3D renders, scroll-driven animation, and a layout built separately for desktop and mobile.

- **Home (`/`)**: hero, about, experience, projects, skills, education and research, and contact.
- **Resume (`/resume`)**: a web version of my resume with a download of the one-page PDF.

## Tech Stack

| Area        | Tools                                                      |
| ----------- | ---------------------------------------------------------- |
| Framework   | Astro 5 (static output)                                    |
| UI          | React 19 components hydrated as Astro islands              |
| Styling     | Tailwind CSS 4                                             |
| Animation   | Framer Motion                                              |
| 3D renders  | Blender (exported as looping MP4)                          |
| Hosting     | Netlify                                                    |

## Highlights

- **Looping 3D hero**: a pre-rendered glass phone that loops seamlessly, with separate landscape and portrait cuts that switch with the screen shape.
- **Project visuals**: each project card has its own short looping render, played only while it is on screen.
- **Mobile layout**: centred hero, stacked project cards, and a pinned resume button on phones.
- **Accessibility**: keyboard-operable screenshot gallery, reduced-motion support (still images instead of video), and content that stays visible without JavaScript.
- **Data-driven content**: the homepage and resume page read from the same data files, so they stay in sync.

## Project Structure

```text
src/
  components/   Page sections (Hero, About, Experience, Projects, ...) and shared pieces
  data/         Experience, education, projects, and skills content
  layouts/      Base page layout
  pages/        index, resume, and the app privacy policy page
  styles/       Global styles and theme colours
public/
  videos/       Hero and project-card renders
  Sanket_Jadhao_Resume.pdf
```

## Getting Started

Requires Node.js 22 or later.

```bash
npm ci
npm run dev       # local development at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the production build locally
```

## Updating Content

Text content lives in `src/data/`:

- `experience.ts` for roles and responsibilities
- `projects.ts` for projects, tags, screenshots, and which render each card uses
- `education.ts` for degrees and the research paper
- `skills.ts` for skill groups

The downloadable resume is `public/Sanket_Jadhao_Resume.pdf`; replace that file to update it.

## Contact

- Email: sanketjadhao2002@gmail.com
- LinkedIn: https://www.linkedin.com/in/sanket-jadhao/
