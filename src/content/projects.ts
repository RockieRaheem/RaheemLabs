import type { Project } from "@/content/types";

const projects = [
  {
    slug: "sistercare",
    title: "SisterCare",
    kicker: "Technology with empathy",
    summary:
      "A supportive digital-health concept designed to make menstrual-health information and emotional support easier to approach.",
    status: "published",
    year: "2026",
    disciplines: ["Digital health", "Product thinking", "AI"],
    technologies: [],
    role: "Team contributor",
    teamNote:
      "Built collaboratively for AI Fest. Individual responsibilities and technical details will be expanded after the team record is confirmed.",
    tone: "green",
    featured: true,
    order: 1,
    sections: [
      {
        id: "context",
        label: "The context",
        title: "Sensitive questions need safer spaces.",
        paragraphs: [
          "SisterCare began with a human observation: girls and women can struggle silently with menstrual health and emotional wellbeing when trusted, private support is difficult to reach.",
          "The team explored how a digital experience could lower the barrier to asking questions while still recognizing that technology cannot replace appropriate human care.",
        ],
      },
      {
        id: "concept",
        label: "The concept",
        title: "Support before complexity.",
        paragraphs: [
          "The product concept brings cycle tracking, a conversational assistant called SisterAI, and access to human counsellors into one supportive experience.",
          "The interface direction prioritizes privacy, plain language, calm feedback, and clear boundaries between informational assistance and human guidance.",
        ],
        points: [
          "Cycle tracking for preparation and personal awareness",
          "A judgment-free conversational starting point",
          "A route to human counsellors when real support is needed",
        ],
      },
      {
        id: "reflection",
        label: "The reflection",
        title: "Technology becomes useful when people feel seen.",
        paragraphs: [
          "Presenting SisterCare reinforced an important principle: responsible products begin by listening to the people behind the problem.",
          "The next case-study revision will document the team's validated research, implementation decisions, safeguards, and Kamwanga's exact contribution rather than filling gaps with assumptions.",
        ],
      },
    ],
    evidence: [
      {
        label: "Recognition",
        value: "Top 10",
        note: "Presented among the Top 10 projects at AI Fest.",
      },
      {
        label: "Product pillars",
        value: "03",
        note: "Tracking, conversational support, and human guidance.",
      },
    ],
    links: [],
    seo: {
      title: "SisterCare case study",
      description:
        "Explore SisterCare, a collaborative digital-health concept presented by Kamwanga Rahiim and his team at AI Fest.",
    },
  },
  {
    slug: "rentihub",
    title: "RentiHub",
    kicker: "A product shaped under pressure",
    summary:
      "A collaborative hackathon project recognized as first runner-up at UTAMU Student Developer Day.",
    status: "published",
    year: "2026",
    disciplines: ["Hackathon", "Product development", "Collaboration"],
    technologies: [],
    role: "Team member",
    teamNote:
      "Developed with Sunday Emmanuel Lugai. Product features and individual technical responsibilities are intentionally withheld until confirmed.",
    tone: "copper",
    featured: true,
    order: 2,
    sections: [
      {
        id: "context",
        label: "The context",
        title: "Build, decide, and communicate under a deadline.",
        paragraphs: [
          "RentiHub was developed as a team project during UTAMU Student Developer Day, an environment built around rapid problem-solving, collaboration, and presentation.",
          "The project is included here for its verified team result and the learning represented by the process. Its product claims will remain deliberately limited until the original brief and implementation are documented.",
        ],
      },
      {
        id: "process",
        label: "The process",
        title: "A clear decision beats an impressive assumption.",
        paragraphs: [
          "Hackathons compress research, scope, construction, and communication into a short window. The useful lesson is not to pretend every idea reached production, but to show how a team made decisions with limited time.",
          "A future revision of this case study will include the problem statement, user journey, architecture, screenshots, responsibilities, and what the team would change with another iteration.",
        ],
      },
      {
        id: "reflection",
        label: "The result",
        title: "Evidence first. Detail next.",
        paragraphs: [
          "RentiHub was named first runner-up at the event. That result is public; the missing product details are not invented here.",
          "This transparent draft demonstrates how RaheemLabs will treat every future case study: publish what can be supported and clearly identify what still needs primary evidence.",
        ],
      },
    ],
    evidence: [
      {
        label: "Recognition",
        value: "02",
        note: "First runner-up at UTAMU Student Developer Day.",
      },
      {
        label: "Team",
        value: "02",
        note: "Kamwanga Rahiim and Sunday Emmanuel Lugai.",
      },
    ],
    links: [],
    seo: {
      title: "RentiHub case study",
      description:
        "Read the verified foundation of RentiHub, a first-runner-up project at UTAMU Student Developer Day.",
    },
  },
] as const satisfies readonly Project[];

export function getPublishedProjects(): readonly Project[] {
  return projects
    .filter((project) => project.status === "published")
    .sort((a, b) => a.order - b.order);
}

export function getFeaturedProjects(): readonly Project[] {
  return getPublishedProjects().filter((project) => project.featured);
}

export function getProject(slug: string): Project | undefined {
  return getPublishedProjects().find((project) => project.slug === slug);
}

export function getAdjacentProject(slug: string): Project | undefined {
  const published = getPublishedProjects();
  const currentIndex = published.findIndex((project) => project.slug === slug);

  if (currentIndex === -1) {
    return undefined;
  }

  return published[(currentIndex + 1) % published.length];
}

