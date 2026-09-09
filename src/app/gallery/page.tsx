import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { getGalleryEntries } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A visual journal of events, technology, projects, and life through the lens of Kamwanga Rahiim and RaheemLabs.",
};

export default function Gallery() {
  const entries = getGalleryEntries();
  return <main id="main" className="page-shell gallery-page">
    <header className="gallery-hero"><div><p className="eyebrow">Visual journal / Archive 001</p><h1 className="display">Moments worth<br /><em>keeping.</em></h1></div><p>Events, ideas, builds, people, and the life around the work—collected as the journey unfolds.</p><span aria-hidden="true">{String(entries.length).padStart(2, "0")} FRAMES</span></header>
    <section className="gallery-index"><span>ALL MOMENTS</span><span>EVENTS</span><span>BUILDING</span><span>LIFE</span><span>RAHEEMLABS</span></section>
    <section className="gallery-feed section"><div className="gallery-feed__head"><p className="eyebrow">Current collection</p><p>New moments will join this archive over time.</p></div><GalleryGrid entries={entries} /></section>
  </main>;
}
