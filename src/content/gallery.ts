export type GalleryEntry = {
  id: string;
  title: string;
  caption: string;
  category: "Life" | "Building" | "RaheemLabs";
  image: string;
  alt: string;
  format: "portrait" | "landscape" | "square";
};

const galleryEntries: readonly GalleryEntry[] = [
  { id: "motion-001", title: "Between rounds", caption: "A visual study of motion, focus, and the atmosphere around training.", category: "Life", image: "/media/boxing-hero.png", alt: "Atmospheric boxing training scene", format: "square" },
  { id: "practice-001", title: "The tools of practice", caption: "A still-life study of the equipment behind the routine.", category: "Life", image: "/media/boxing-still-life.png", alt: "Boxing gloves and training equipment", format: "landscape" },
  { id: "systems-001", title: "Systems as living structures", caption: "A visual study of technology, connection, and organic growth.", category: "Building", image: "/media/organic-systems.png", alt: "Abstract organic technology system", format: "portrait" },
];

export function getGalleryEntries(): readonly GalleryEntry[] { return galleryEntries; }
