import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { ProjectVisual } from "@/components/project-visual";
import type { Project } from "@/content/types";

type ProjectCardProps = { project: Project };

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link className="project-card__visual-link" href={`/work/${project.slug}`}><ProjectVisual project={project} /></Link>
      <div className="project-card__content">
        <div><p className="eyebrow">{project.kicker}</p><h3>{project.title}</h3></div>
        <p className="project-card__summary">{project.summary}</p>
        <Link className="project-card__link" href={`/work/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
          View case study <ArrowIcon />
        </Link>
      </div>
    </article>
  );
}

