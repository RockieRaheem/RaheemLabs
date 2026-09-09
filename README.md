# RaheemLabs Portfolio

An interactive cinematic portfolio for Kamwanga Rahiim, built around the idea:

> Built to go beyond limits.

The site presents verified project stories, RaheemLabs, and boxing as a personal discipline through the "Cinematic Technical Athlete" system in `REAL DESIGNS`. The full product definition is in [docs/PRD.md](docs/PRD.md).

## Stack

- Next.js App Router
- React
- TypeScript in strict mode
- CSS with progressive enhancement and reduced-motion support
- Vercel Blob-backed gallery publishing with a private mobile studio

## Local development

Copy the environment example and replace the URL when deploying:

```powershell
Copy-Item .env.example .env.local
npm.cmd install
npm.cmd run dev
```

Then open `http://localhost:3000`.

Available checks:

```powershell
npm.cmd run typecheck
npm.cmd run lint
npm.cmd run build
```

## Content architecture

Content lives outside page components:

- `src/content/projects.ts` contains project entries.
- `src/content/journal.ts` contains future articles, videos, podcasts, boxing notes, and event entries.
- `src/content/profile.ts` contains public identity and contact details.
- `src/content/types.ts` defines the publishing contracts.

### Publish gallery stories from a phone

1. Connect a Blob store to the project in the Vercel dashboard. Vercel adds `BLOB_READ_WRITE_TOKEN` automatically.
2. Add a strong `GALLERY_ADMIN_PASSWORD` and a random `GALLERY_SESSION_SECRET` of at least 24 characters to the project environment variables.
3. Redeploy, then open `/gallery/manage` on your phone and sign in.
4. Choose an image, add its title, short story, type, date, and optional location, then publish.

The studio accepts JPG, PNG, WebP, and AVIF images up to 10 MB. Its session cookie is HTTP-only, same-site, and secure in production. The management route and APIs are excluded from search indexing. Without the three gallery variables, the public page safely shows the bundled starter collection and the studio displays setup instructions instead of accepting uploads.

### Add a project

1. Add a new object to the `projects` collection in `src/content/projects.ts`.
2. Give it a unique, stable `slug` and `order`.
3. Keep `status` as `draft` while facts, credits, links, and results are being checked.
4. Provide the required case-study sections and evidence.
5. Change `status` to `published` only after the owner and collaborators approve the claims.

The work index, dynamic case-study route, sitemap, and next-project navigation update automatically.

### Add a RaheemLabs entry

Add an entry matching `JournalEntry` to `src/content/journal.ts`. Supported types are article, podcast, video, boxing note, and event. Draft entries never appear publicly.

## Content integrity

SisterCare and RentiHub use only details supported by currently available public evidence. Empty technology lists, external links, and unconfirmed contribution details are deliberate. Replace them only with primary information from Kamwanga or the relevant collaborators.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the canonical production origin before building. It controls metadata, structured data, `robots.txt`, and the generated sitemap. No production domain is assumed in the repository.
