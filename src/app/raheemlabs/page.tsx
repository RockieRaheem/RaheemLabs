import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { RoundLabel } from "@/components/round-label";
import { getPublishedJournalEntries } from "@/content/journal";

export const metadata: Metadata = {
  title: "Technology field notes",
  description: "Technology conversations and lessons from RaheemLabs.",
};

export default function RaheemLabsPage() {
  const entries = getPublishedJournalEntries();
  return (
    <main id="main-content" className="page-shell inner-page">
      <header className="page-intro page-intro--copper">
        <RoundLabel index="02" tone="copper">The broadcaster</RoundLabel>
        <h1 className="display display--medium">Ideas from inside the lab.</h1>
        <p className="lead">Technology conversations, podcast moments, and notes from learning in public.</p>
      </header>
      <section className="section journal-index" aria-labelledby="journal-heading">
        <div><p className="eyebrow">Archive / {String(entries.length).padStart(2, "0")}</p><h2 id="journal-heading" className="section-title">The archive starts with truth.</h2></div>
        {entries.length === 0 ? (
          <div className="empty-state"><span aria-hidden="true">00:00</span><p className="lead">The first field notes are being prepared. Nothing is published here until its source, context, and transcript are ready.</p><Link className="text-link" href="/contact">Suggest a conversation <ArrowIcon /></Link></div>
        ) : (
          <ol>{entries.map((entry) => <li key={entry.slug}>{entry.title}</li>)}</ol>
        )}
      </section>
    </main>
  );
}

