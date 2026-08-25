import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { ProjectCard } from "@/components/project-card";
import { RhythmLine } from "@/components/rhythm-line";
import { RoundLabel } from "@/components/round-label";
import { profile } from "@/content/profile";
import { getFeaturedProjects } from "@/content/projects";

export default function HomePage() {
  const projects = getFeaturedProjects();

  return (
    <main id="main-content" className="page-shell home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__meta">
          <p className="eyebrow">{profile.location} / East Africa</p>
          <p className="eyebrow">Software / Stories / Discipline</p>
        </div>
        <div className="hero__title-wrap">
          <p className="hero__pretitle">Kamwanga Rahiim presents</p>
          <h1 id="hero-title" className="display hero__title">
            Built in the <span>Lab.</span><br />Forged in the <em>Ring.</em>
          </h1>
          <div className="hero__stamp" aria-hidden="true"><span>RL</span><small>Est. UG</small></div>
        </div>
        <div className="hero__footer">
          <p className="lead">{profile.statement}</p>
          <Link className="scroll-cue" href="#work">Scroll to enter <ArrowIcon direction="down" /></Link>
        </div>
        <RhythmLine />
      </section>

      <section className="manifesto section" aria-labelledby="manifesto-title">
        <RoundLabel index="00" tone="copper">Current round</RoundLabel>
        <div className="manifesto__content">
          <h2 id="manifesto-title" className="section-title">Progress is a practice.</h2>
          <div className="manifesto__copy">
            <p className="lead">I am learning how to turn real problems into useful products—and useful lessons into stories worth sharing.</p>
            <p className="body-copy">RaheemLabs is the public record of that practice: software, community, technology conversations, and the discipline I carry from boxing into every build.</p>
          </div>
        </div>
      </section>

      <section id="work" className="work-section section" aria-labelledby="work-title">
        <div className="section-heading">
          <RoundLabel index="01" tone="green">The builder</RoundLabel>
          <div><h2 id="work-title" className="section-title">Selected work. Honest process.</h2><p className="body-copy">Two collaborative projects, documented without inflated roles or invented results.</p></div>
        </div>
        <div className="project-list">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        <Link className="text-link" href="/work">Explore all work <ArrowIcon /></Link>
      </section>

      <section className="dual-section section" aria-labelledby="voice-title">
        <div className="dual-section__panel dual-section__panel--lab">
          <RoundLabel index="02" tone="copper">The broadcaster</RoundLabel>
          <div><p className="eyebrow">RaheemLabs / Field notes</p><h2 id="voice-title">Learning becomes clearer when shared.</h2><p>Technology conversations, podcast moments, and ideas in progress. The archive is being prepared for thoughtful publishing.</p></div>
          <Link className="text-link" href="/raheemlabs">Enter RaheemLabs <ArrowIcon /></Link>
        </div>
        <div className="dual-section__panel dual-section__panel--ring">
          <RoundLabel index="03">The fighter</RoundLabel>
          <div><p className="eyebrow">Outside the lab / Boxing</p><h2>Footwork before power. Fundamentals before frameworks.</h2><p>Boxing is a hobby and a discipline—not a claim of professional competition. It is where patience, repetition, and honest feedback become physical.</p></div>
          <Link className="text-link" href="/about#boxing">Read my story <ArrowIcon /></Link>
        </div>
      </section>

      <section className="community section" aria-labelledby="community-title">
        <div className="community__intro"><RoundLabel index="04" tone="green">The community</RoundLabel><h2 id="community-title" className="section-title">Growth is rarely a solo path.</h2></div>
        <div className="community__body">
          <p className="lead">Learning alongside Uganda&apos;s student developers has shown me how one conversation can become a community—and one opportunity can become a beginning.</p>
          <ul className="community__list" aria-label="Community focus areas">
            <li><span>01</span>Developer learning</li><li><span>02</span>Hackathon collaboration</li><li><span>03</span>Technology storytelling</li>
          </ul>
        </div>
      </section>

      <section className="closing-round section" aria-labelledby="closing-title">
        <p className="eyebrow">Final round / Your move</p>
        <h2 id="closing-title" className="display display--medium">Let&apos;s build something that matters.</h2>
        <div className="closing-round__actions"><p className="body-copy">{profile.availability}</p><Link className="button button--copper" href="/contact">Start a conversation <ArrowIcon /></Link></div>
      </section>
    </main>
  );
}

