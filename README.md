# RaheemLabs Portfolio

An editorial personal portfolio for Kamwanga Rahiim, built around the idea:

> Built in the Lab. Forged in the Ring.

The site presents verified project stories, the future RaheemLabs publishing archive, community learning, and boxing as a personal discipline. The full product definition is in [docs/PRD.md](docs/PRD.md).

## Stack

- Next.js App Router
- React
- TypeScript in strict mode
- CSS with progressive enhancement and reduced-motion support
- Structured local content that can be migrated to a headless CMS later

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

