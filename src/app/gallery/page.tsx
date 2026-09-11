import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { getGalleryEntries } from "@/lib/gallery-store";
export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Gallery", description: "Events, talks, projects, and moments documented by Kamwanga Rahiim and RaheemLabs." };
export default async function Gallery() { const entries = await getGalleryEntries(); return <main id="main" className="page-shell gallery-page"><header className="gallery-hero gallery-hero--journal"><div><p className="eyebrow">Field notes / Visual journal</p><h1 className="display">Life,<br className="gallery-mobile-break" /> through<br /><em>my lens.</em></h1></div><p>A growing record of events I attend, talks I give, things I build, and moments worth remembering.</p><span aria-hidden="true">{String(entries.length).padStart(2, "0")} STORIES</span></header><GalleryGrid entries={entries} /></main>; }
