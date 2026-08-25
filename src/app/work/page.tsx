import type { Metadata } from "next";
import { ProjectCard } from "@/components/project-card";
import { RoundLabel } from "@/components/round-label";
import { getPublishedProjects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Selected work",
  description: "Explore verified project stories from Kamwanga Rahiim.",
};

export default function WorkPage() {
  const projects = getPublishedProjects();

  return (
    <main id="main-content" className="page-shell inner-page">
      <header className="page-intro">
        <RoundLabel index="01" tone="green">The builder</RoundLabel>
        <h1 className="display display--medium">Work with a reason to exist.</h1>
        <p className="lead">Selected collaborative products documented through the problem, the decisions, and the evidence available today.</p>
      </header>
      <section className="section" aria-label="Projects">
        <div className="project-list">{projects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
      </section>
    </main>
  );
}

