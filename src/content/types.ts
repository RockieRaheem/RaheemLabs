export type ContentStatus = "draft" | "published";

export type ProjectTone = "copper" | "green";

export type ProjectSection = {
  id: string;
  label: string;
  title: string;
  paragraphs: readonly string[];
  points?: readonly string[];
};

export type ProjectEvidence = {
  label: string;
  value: string;
  note: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  status: ContentStatus;
  year: string;
  disciplines: readonly string[];
  technologies: readonly string[];
  role: string;
  teamNote: string;
  tone: ProjectTone;
  featured: boolean;
  order: number;
  cover: string;
  gallery: readonly string[];
  sections: readonly ProjectSection[];
  evidence: readonly ProjectEvidence[];
  links: readonly ProjectLink[];
  seo: {
    title: string;
    description: string;
  };
};
