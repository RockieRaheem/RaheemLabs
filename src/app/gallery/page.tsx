import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { getGalleryEntries } from "@/lib/gallery-store";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Gallery", description: "A verified visual journal of Kamwanga Rahiim’s talks, leadership, technology work, and community milestones." };
export default async function Gallery() { const entries = await getGalleryEntries(); return <main id="main" className="page-shell gallery-page"><header className="gallery-hero gallery-hero--journal"><div><p className="eyebrow">Field notes / Verified visual journal</p><h1 className="display">Ideas in motion.<br /><em>Impact in frame.</em></h1></div><p>First-hand notes from the rooms where I learn, speak, build, and contribute—from Uganda to Kenya. Every story links to its original post.</p><span aria-hidden="true">{String(entries.length).padStart(2, "0")} STORIES</span></header><GalleryGrid entries={entries} /></main>; }
