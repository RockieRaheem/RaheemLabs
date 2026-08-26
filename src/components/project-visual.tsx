import Image from "next/image";
import type { Project } from "@/content/types";

type ProjectVisualProps = {
  project: Project;
};

export function ProjectVisual({ project }: ProjectVisualProps) {
  const isSisterCare = project.slug === "sistercare";
  const image = isSisterCare
    ? "/media/sistercare-cover.png"
    : "/media/rentihub-cover.png";

  return (
    <div className={`project-visual project-visual--${project.tone}`} aria-label={`Abstract visual identity for ${project.title}`} role="img">
      <Image
        className="project-visual__image"
        src={image}
        alt=""
        fill
        sizes="(max-width: 48rem) 100vw, 66vw"
      />
      <span className="project-visual__index" aria-hidden="true">{String(project.order).padStart(2, "0")}</span>
      <div className="project-visual__orbit" aria-hidden="true"><span /><span /><span /></div>
      <div className="project-visual__core" aria-hidden="true">{isSisterCare ? "SC" : "RH"}</div>
      <p className="project-visual__signal" aria-hidden="true">{isSisterCare ? "Care / Clarity / Connection" : "Build / Test / Learn"}</p>
    </div>
  );
}
