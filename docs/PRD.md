# RaheemLabs Personal Portfolio — Product Requirements Document

| Field | Value |
| --- | --- |
| Product | RaheemLabs Personal Portfolio |
| Owner | Kamwanga Rahiim |
| Version | 1.0 |
| Status | Approved foundation for implementation |
| Initial projects | SisterCare and RentiHub |
| Working concept | Built in the Lab. Forged in the Ring. |

## 1. Product summary

RaheemLabs is an editorial, interactive personal portfolio for Kamwanga Rahiim: a Ugandan software-engineering student, technology creator, community contributor, and boxing enthusiast.

The portfolio will unite technology and boxing through a truthful shared idea: meaningful progress comes from experimentation, repetition, discipline, and reflection. It must feel like Kamwanga's personal documentary rather than a generic developer template with boxing decoration.

The initial release will feature two projects—SisterCare and RentiHub—but its content architecture must allow projects, articles, podcast or short-form media, events, and boxing journal entries to be added later without rebuilding page layouts.

## 2. Product vision

Create an award-calibre portfolio that is memorable enough for a design jury and clear enough for a recruiter, collaborator, event organizer, or potential client.

The experience should leave visitors with three ideas:

1. Kamwanga builds thoughtful technology around real human needs.
2. RaheemLabs makes his learning and ideas public.
3. Boxing reflects the discipline behind how he works.

### Positioning statement

> Kamwanga Rahiim is a Ugandan software engineer and creator who builds useful technology, shares what he learns through RaheemLabs, and trains in boxing as a practice of discipline and growth.

### Creative statement

> Built in the Lab. Forged in the Ring.

## 3. Goals and success criteria

### Primary goals

- Establish a distinctive and credible personal identity.
- Present SisterCare and RentiHub through compelling, honest case studies.
- Convert qualified visitors into conversations about work, collaboration, speaking, and community.
- Demonstrate frontend craft through the website itself.
- Create a maintainable publishing foundation for future content.
- Be competitive for recognition from Awwwards and similar galleries without compromising usability.

### Product success signals

- A visitor can identify Kamwanga, his location, and his work within five seconds.
- Projects and contact details are reachable without completing an intro animation.
- Each project clearly communicates the problem, Kamwanga's role, process, outcome, and evidence.
- A new project or content entry can be published by adding structured data and assets, without changing page components.
- The complete experience works on mobile, keyboard, touch, and reduced-motion settings.
- Key pages are crawlable and shareable with useful metadata.

### Initial measurable targets

- Lighthouse targets on production: Performance 90+, Accessibility 95+, Best Practices 95+, SEO 95+.
- Largest Contentful Paint at or below 2.5 seconds at the 75th percentile.
- Cumulative Layout Shift at or below 0.1.
- Interaction to Next Paint at or below 200 milliseconds.
- No autoplay audio.
- No critical content dependent on WebGL or JavaScript-only rendering.

## 4. Audience

### Recruiters and engineering teams

They need a fast understanding of skills, ownership, project quality, and contact details. They should be able to skip expressive sequences and inspect case studies directly.

### Collaborators and startup teams

They need evidence of product thinking, technical execution, communication, and reliability.

### Technology communities and event organizers

They need evidence of public communication, community involvement, subject interests, and a clear invitation to connect.

### RaheemLabs followers

They need a durable home for technology content, podcast clips, personal reflections, and links beyond a social-media feed.

### Design juries and creative developers

They will evaluate concept, art direction, interaction quality, implementation detail, accessibility, responsiveness, performance, and originality.

## 5. Experience principles

### Authentic before spectacular

Every visual and interaction should connect to Kamwanga's real work, environment, voice, or training. Effects that could belong to any developer portfolio should be removed.

### One concept, consistently expressed

The lab and ring metaphor should guide pacing, language, motion, and structure. It must not become a collection of unrelated boxing gimmicks.

### Content remains in control

Motion introduces hierarchy and rhythm but never blocks navigation, reading, or conversion.

### Uganda as a lived place

Ugandan identity should appear through real locations, community stories, photography, light, language, and context—not superficial motifs.

### Progressive enhancement

The essential portfolio must remain usable on slower connections and devices without advanced graphics.

## 6. Creative direction

### Narrative device: rounds

The experience is organized into editorial “rounds”:

- Opening — Introduction
- Round 01 — The Builder
- Round 02 — The Broadcaster
- Round 03 — The Fighter
- Round 04 — The Community
- Final Round — Contact

The round device provides structure, but conventional navigation remains available at all times.

### Signature interaction: Rhythm Engine

A restrained motion system connects coding, recording, and boxing:

- Section transitions follow a measured visual cadence.
- A subtle round indicator communicates reading progress.
- Project diagrams may use training-note annotations.
- Motion becomes more energetic in expressive sections and settles around long-form text.
- Optional sound design may be explored after launch, but it must be off by default.

The first release should prioritize excellent typography and purposeful 2D motion. WebGL should only be introduced if a prototype proves it improves the central story without harming performance or access.

### Visual language

- Palette: carbon black, warm canvas, steel grey, copper-orange accent, and a restrained secondary green.
- Typography: condensed display face for major statements, highly legible sans-serif for reading, and monospace for technical metadata.
- Photography: original, high-contrast documentary images with natural grain.
- Texture: athletic tape, canvas, marked-up paper, screen noise, and worn training surfaces used sparingly.
- Layout: disciplined editorial grid with intentional breaks at key narrative moments.
- Motion: physical, sharp, rhythmic, and responsive rather than weightless or ornamental.

## 7. Information architecture

### Primary navigation

- Home
- Work
- RaheemLabs
- About
- Contact

“Boxing” may initially live within About and the homepage narrative. It can become a standalone journal section once enough substantial content exists.

### Routes

| Route | Purpose | Initial release |
| --- | --- | --- |
| `/` | Narrative homepage and primary conversion surface | Required |
| `/work` | Filterable project index | Required |
| `/work/[slug]` | Structured project case study | Required |
| `/raheemlabs` | Technology media and publishing index | Foundation required; entries optional |
| `/about` | Biography, values, skills, boxing, and community | Required |
| `/contact` | Contact methods and collaboration prompts | Required |
| `/journal/[slug]` | Future articles, media notes, or boxing entries | Data model only for first release |

### Homepage sequence

1. Hero with identity, positioning, location, and direct navigation.
2. Current round: a concise statement of present focus.
3. Selected work: SisterCare and RentiHub.
4. RaheemLabs: technology content teaser or “coming into focus” state.
5. Outside the lab: boxing as a practice of discipline.
6. Community: selected events, collaborators, and contributions.
7. About summary and capabilities.
8. Final invitation and contact methods.

## 8. Project requirements

### Initial project: SisterCare

The case study should explain:

- The problem around safe access to menstrual-health and emotional-wellbeing support.
- The intended users and relevant context.
- The team and Kamwanga's exact role.
- Cycle tracking, SisterAI, and access to human counsellors.
- Research, design, technical decisions, challenges, and responsible-AI considerations.
- The AI Fest Top 10 result, once supporting evidence and precise wording are confirmed.
- Live product and repository links, if publicly available and approved.

No health outcome, user count, or technical claim may be published without verification.

### Initial project: RentiHub

The case study should explain:

- The housing or rental problem being addressed.
- Target users and geographic context.
- The team and Kamwanga's exact role.
- Product flow and key features.
- Technical architecture and implementation decisions.
- Hackathon process, result, and lessons.
- First-runner-up recognition at the UTAMU Student Developer Day, once exact event details are confirmed.
- Live product and repository links, if publicly available and approved.

RentiHub currently has less verified public detail than SisterCare. The page must use explicit placeholders in preview environments and remain unpublished until the core facts are supplied.

### Project case-study template

Every project uses the same durable schema while allowing optional custom sections:

1. Project title and one-line outcome
2. Hero media
3. Overview metadata
4. Problem and context
5. Role and team
6. Process
7. Solution and key features
8. Technical approach
9. Challenges and decisions
10. Outcome and evidence
11. Reflection and next steps
12. Credits and external links
13. Next project

## 9. Extensible content model

Content must be separate from presentation. The initial implementation may use typed local content files, provided the schema can later be connected to a headless CMS without changing route or component contracts.

### Project entity

```ts
type Project = {
  slug: string;
  title: string;
  summary: string;
  status: "draft" | "published";
  year: number;
  disciplines: string[];
  technologies: string[];
  role: string;
  team: Credit[];
  hero: MediaAsset;
  thumbnail: MediaAsset;
  problem: RichContent;
  solution: RichContent;
  sections: ContentSection[];
  outcomes: EvidenceItem[];
  links: ExternalLink[];
  featured: boolean;
  order: number;
  seo: SeoFields;
};
```

### Journal entity

```ts
type JournalEntry = {
  slug: string;
  title: string;
  excerpt: string;
  type: "article" | "podcast" | "video" | "boxing-note" | "event";
  status: "draft" | "published";
  publishedAt: string;
  topics: string[];
  cover: MediaAsset;
  body: RichContent;
  transcript?: RichContent;
  externalUrl?: string;
  seo: SeoFields;
};
```

### Shared rules

- Slugs are stable and human-readable.
- Draft content is excluded from production builds.
- Optional fields degrade cleanly without empty interface elements.
- Media requires alt text, dimensions, focal point, and attribution where applicable.
- Outcomes distinguish measured facts from personal reflections.
- Credits identify collaborators and avoid overstating individual ownership.

## 10. Functional requirements

### Global

- Responsive navigation with persistent access to work and contact.
- Route-aware transitions that preserve browser history and expected back-button behavior.
- Keyboard-accessible controls and visible focus states.
- Reduced-motion experience that preserves hierarchy without major animation.
- Share metadata and social preview image for every public page.
- Custom 404 page that retains primary navigation.
- Privacy-respecting analytics, if analytics are enabled.

### Work

- Project cards generated from published project data.
- Featured-project ordering controlled through content fields.
- Project detail routes generated from project slugs.
- Optional filters must only appear when the collection is large enough to justify them.
- Related or next-project navigation generated automatically.

### RaheemLabs and journal

- Mixed content types rendered from a shared index.
- Type, topic, and publication date displayed consistently.
- Video and podcast entries support transcripts.
- External media opens without trapping visitors inside an embed.
- Empty initial states must feel intentional and never imply nonexistent content.

### Contact

- Clearly displayed email or approved contact method.
- Links for relevant public social and developer profiles.
- Intent-based prompts for collaboration, speaking, and conversation.
- A form is optional and should only ship with reliable delivery, validation, spam protection, and a clear privacy statement.

## 11. Accessibility requirements

- Target WCAG 2.2 AA.
- All text and meaningful controls meet contrast requirements.
- Complete keyboard operation without traps.
- Semantic headings and landmarks.
- Descriptive alternative text for meaningful imagery; decorative texture ignored by assistive technology.
- Captions and transcripts for meaningful video and audio.
- Pause controls for long or repeating motion.
- Respect `prefers-reduced-motion` and browser zoom.
- Do not communicate project status or navigation state using color alone.
- Canvas or WebGL experiences require equivalent HTML content and controls.

## 12. Performance and engineering requirements

- Render essential text as semantic HTML.
- Use responsive AVIF or WebP images with declared dimensions.
- Use poster images and explicit user initiation for nonessential video.
- Split animation and graphics code away from the critical rendering path.
- Avoid a blocking global preloader.
- Limit font families and weights; subset and self-host where licensing permits.
- Test on mid-range Android hardware and constrained mobile bandwidth.
- Preserve content when JavaScript fails.
- Validate structured data, metadata, sitemap, and robots configuration.
- Establish automated linting, type checking, unit tests, and critical browser tests.

## 13. SEO and discoverability

- Use “Kamwanga Rahiim” consistently as the canonical name.
- Associate RaheemLabs clearly with Kamwanga in titles and descriptions.
- Provide Person and CreativeWork structured data where accurate.
- Use descriptive case-study titles rather than slogan-only page titles.
- Generate canonical URLs, sitemap, Open Graph data, and share images.
- Make transcripts and project narratives indexable.
- Link approved LinkedIn, GitHub, TikTok, and other profiles bidirectionally where possible.

## 14. Content and asset requirements

Implementation can begin with structured placeholders, but public launch requires:

- Confirmed short and long biographies.
- Original portrait, workspace, recording, community, and boxing photography.
- Short video sequences for the opening experience.
- Verified project roles, contributors, dates, technologies, results, links, and screenshots.
- Approved descriptions for SisterCare and RentiHub.
- Current contact and social links.
- At least one concise personal statement written in Kamwanga's natural voice.
- Permission to publish identifiable collaborators and event photography.

## 15. Scope

### Version 1

- Complete visual identity and design system.
- Responsive narrative homepage.
- Work index.
- SisterCare and RentiHub case-study foundations.
- About and contact pages.
- Typed, extensible local content layer.
- RaheemLabs index foundation.
- Core motion system and reduced-motion alternative.
- SEO, accessibility, performance, and analytics foundations.

### Later versions

- Headless CMS editing interface.
- Published RaheemLabs articles, podcast clips, and transcripts.
- Boxing journal.
- Event archive and speaking materials.
- Opt-in sound design.
- More ambitious real-time graphics if performance testing supports them.
- Awards submission materials and behind-the-scenes case study.

### Explicit non-goals for Version 1

- A mandatory game before reaching content.
- A full 3D virtual gym or laboratory.
- Autoplay sound.
- A large generic skills-progress section.
- Publishing unverified achievements or project metrics.
- Building filters for a two-project collection.
- A bespoke admin interface before the publishing workflow requires one.

## 16. Delivery phases

### Phase 1 — Discovery and truth gathering

- Interview Kamwanga.
- Verify biographies, project facts, roles, and public links.
- Audit available photography and footage.
- Write the content brief and asset shot list.

### Phase 2 — Content and visual direction

- Write SisterCare and RentiHub case-study drafts.
- Develop identity, typography, palette, texture, and motion studies.
- Produce low-fidelity information architecture and homepage narrative.

### Phase 3 — Experience prototype

- Prototype hero and Rhythm Engine.
- Test mobile performance and reduced motion early.
- Conduct rapid comprehension and navigation testing.

### Phase 4 — Production

- Build the design system, content layer, routes, and reusable blocks.
- Integrate verified content and optimized media.
- Add SEO, accessibility, analytics, and error states.

### Phase 5 — Quality and launch

- Test browsers, devices, keyboard, assistive technology, motion settings, and slow connections.
- Complete content and attribution review.
- Establish performance budgets and production monitoring.

### Phase 6 — Awards readiness

- Refine motion and interaction from real-user evidence.
- Prepare a concise jury narrative and technical case study.
- Capture high-quality desktop and mobile presentation media.
- Submit only after the public experience is stable and complete.

## 17. Risks and mitigations

| Risk | Mitigation |
| --- | --- |
| The boxing metaphor feels artificial | Base it on original interviews, routines, photography, and language. |
| Visual ambition slows mobile devices | Progressive enhancement, strict budgets, poster states, and device testing. |
| Animation harms usability | Persistent navigation, skip controls, reduced motion, and no blocked content. |
| Thin initial content makes sections feel empty | Launch with focused sections and reveal indexes only when useful. |
| Team projects overstate individual ownership | Publish explicit roles and full credits. |
| Project claims cannot be verified | Keep entries in draft and label placeholders in preview environments. |
| The site chases awards instead of opportunities | Evaluate every creative choice against comprehension, evidence, and contact conversion. |

## 18. Open content questions

These questions do not block initial scaffolding, but they block final case-study publication:

- What was Kamwanga's exact role and contribution on SisterCare?
- Who were the SisterCare collaborators, and what may be publicly credited?
- Which SisterCare features were fully implemented versus proposed?
- What problem does RentiHub solve, and who are its primary users?
- What was Kamwanga's exact role and technical contribution on RentiHub?
- Are public repositories, deployments, screenshots, metrics, and event results available for both projects?
- Which RaheemLabs and boxing media may be republished outside TikTok?
- What contact methods and professional opportunities should the site prioritize?

## 19. Definition of done for Version 1

Version 1 is complete when:

- All required routes and content states work across supported screen sizes.
- SisterCare and RentiHub use verified content or remain clearly unpublished drafts.
- New projects and journal entries can be added through the documented content schema.
- Essential content is accessible without animation, WebGL, sound, or client-side JavaScript.
- Accessibility, performance, SEO, and browser checks meet the agreed targets or have documented exceptions.
- Kamwanga approves the biography, project roles, credits, imagery, and contact information.
- Production monitoring and a repeatable deployment process are in place.

