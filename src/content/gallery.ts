export const galleryKinds = ["Event", "Talk", "Building", "Life", "RaheemLabs"] as const;
export type GalleryKind = typeof galleryKinds[number];
export type GalleryEntry = { id: string; title: string; caption: string; category: GalleryKind; image: string; alt: string; date: string; location?: string; format: "portrait" | "landscape" | "square"; };
export const seedGalleryEntries: readonly GalleryEntry[] = [
  { id: "motion-001", title: "Between rounds", caption: "A visual study of motion, focus, and the atmosphere around training.", category: "Life", image: "/media/boxing-hero.png", alt: "Atmospheric boxing training scene", date: "Ongoing", format: "square" },
  { id: "practice-001", title: "The tools of practice", caption: "A still-life study of the equipment behind the routine.", category: "Life", image: "/media/boxing-still-life.png", alt: "Boxing gloves and training equipment", date: "Ongoing", format: "landscape" },
  { id: "systems-001", title: "Systems as living structures", caption: "A visual study of technology, connection, and organic growth.", category: "Building", image: "/media/organic-systems.png", alt: "Abstract organic technology system", date: "Ongoing", format: "portrait" },
];
