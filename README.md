# Bheka Nyoni — Developer Portfolio

Single-page portfolio (dark, glassmorphism) built with React, TypeScript, TanStack Start, Vite and Tailwind CSS v4.

## Editing content

All content lives in typed data files — components contain no copy:

| File | What it holds |
| --- | --- |
| `src/data/site.ts` | Name, email, social URLs, hero text, **About bio** (marked `EDIT ME`), contact copy, nav |
| `src/data/projects.ts` | Projects, filter categories, GitHub URLs, optional `image` / `liveUrl` |
| `src/data/experience.ts` | Work timeline and education |
| `src/data/skills.ts` | Skill groups |
| `src/data/certifications.ts` | Certifications |

Placeholders to replace:
- GitHub / LinkedIn URLs in `site.ts` and each project's `githubUrl` (`https://github.com/YOUR-USERNAME/REPO`).
- `public/Bheka-Nyoni-CV.pdf` — replace with the real CV (keep the file name).
- About photo: set `site.about.photo` to an image URL.
- Project screenshots: set `image` on a project to replace the diagram header.

Do not add a phone number anywhere — a test (`src/test/portfolio.test.ts`) fails if one appears in content.

## Environment variables

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_FORM_ENDPOINT` | Yes, for the contact form | Either a **Formspree** endpoint URL (`https://formspree.io/f/xxxxxx`) or a **Web3Forms** access key. Point the service at `bhekanyoni87@gmail.com`. |

Without it, the form shows an error with a direct email link.

## Scripts

```bash
npm install
npm run dev      # local dev
npm run build    # production build
npm test         # filter, validation and no-phone-number checks
```

## Deployment

Publishes from Lovable out of the box. For Vercel, set `VITE_FORM_ENDPOINT` in the project's Environment Variables; the build uses Nitro, so configure the Vercel preset if deploying outside Lovable.
