import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/arrow-icon";
import { ProjectVisual } from "@/components/project-visual";
import { getAdjacentProject, getProject, getPublishedProjects } from "@/content/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getPublishedProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.seo.title, description: project.seo.description };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const nextProject = getAdjacentProject(project.slug);

  return (
    <main id="main-content" className={`page-shell case-study case-study--${project.tone}`}>
      <header className="case-study__hero">
        <div className="case-study__heading">
          <p className="eyebrow">Case study / {project.year}</p>
          <h1 className="display display--medium">{project.title}</h1>
          <p className="lead">{project.summary}</p>
        </div>
        <ProjectVisual project={project} />
      </header>

      <section className="case-meta" aria-label="Project overview">
        <div><p className="eyebrow">Role</p><p>{project.role}</p></div>
        <div><p className="eyebrow">Disciplines</p><p>{project.disciplines.join(" / ")}</p></div>
        <div><p className="eyebrow">Team note</p><p>{project.teamNote}</p></div>
      </section>

      <section className="evidence-grid" aria-label="Project evidence">
        {project.evidence.map((item) => (
          <article key={item.label}><p className="eyebrow">{item.label}</p><strong>{item.value}</strong><p>{item.note}</p></article>
        ))}
      </section>

      <div className="case-sections">
        {project.sections.map((section, index) => (
          <section key={section.id} id={section.id} className="case-section">
            <div className="case-section__label"><span>{String(index + 1).padStart(2, "0")}</span><p className="eyebrow">{section.label}</p></div>
            <div className="case-section__body">
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points && <ul>{section.points.map((point) => <li key={point}>{point}</li>)}</ul>}
            </div>
          </section>
        ))}
      </div>

      {nextProject && (
        <aside className="next-project">
          <p className="eyebrow">Next case study</p>
          <Link href={`/work/${nextProject.slug}`}><span>{nextProject.title}</span><ArrowIcon /></Link>
        </aside>
      )}
    </main>
  );
}

