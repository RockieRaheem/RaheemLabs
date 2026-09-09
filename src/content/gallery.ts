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
  { id: "portrait-001", title: "The person behind the work", caption: "A portrait from the current RaheemLabs identity.", category: "RaheemLabs", image: "/media/raheem-headshot.jpg", alt: "Portrait of Kamwanga Rahiim", format: "portrait" },
  { id: "sistercare-001", title: "Designing support with care", caption: "A view of the SisterCare support experience.", category: "Building", image: "/media/sistercare-supported.png", alt: "SisterCare support interface", format: "landscape" },
  { id: "boxing-001", title: "Work beyond the screen", caption: "Training is part of the discipline behind how I learn and build.", category: "Life", image: "/media/my boxing image.PNG", alt: "Raheem during boxing training", format: "portrait" },
  { id: "rentihub-001", title: "Making operations visible", caption: "The RentiHub dashboard brings property activity into one view.", category: "Building", image: "/media/rentihub-dashboard.png", alt: "RentiHub property-management dashboard", format: "landscape" },
  { id: "lab-001", title: "Ideas in motion", caption: "A visual from the technology and storytelling world of RaheemLabs.", category: "RaheemLabs", image: "/media/technology-lab.png", alt: "Technology workspace representing RaheemLabs", format: "square" },
  { id: "boxing-002", title: "The tools of practice", caption: "A still-life study of the equipment behind the routine.", category: "Life", image: "/media/boxing-still-life.png", alt: "Boxing gloves and training equipment", format: "landscape" },
];

export function getGalleryEntries(): readonly GalleryEntry[] { return galleryEntries; }
