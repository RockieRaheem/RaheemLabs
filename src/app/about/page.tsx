import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { RoundLabel } from "@/components/round-label";
import { profile } from "@/content/profile";

export const metadata: Metadata = { title: "About Kamwanga", description: profile.shortBio };

export default function AboutPage() {
  return (
    <main id="main-content" className="page-shell inner-page">
      <header className="page-intro about-intro">
        <RoundLabel index="00" tone="copper">About Kamwanga</RoundLabel>
        <h1 className="display display--medium">Still learning. Already building.</h1>
        <p className="lead">{profile.shortBio}</p>
      </header>
      <section className="about-block section">
        <p className="eyebrow">The practice / Software</p>
        <div><h2 className="section-title">Build to understand.</h2><p className="body-copy">I am developing my craft through collaborative products, hackathons, developer events, and the habit of explaining what I learn. The goal is not to look finished; it is to make each round of work more thoughtful than the last.</p></div>
      </section>
      <section id="boxing" className="about-block about-block--canvas section">
        <p className="eyebrow">The practice / Boxing</p>
        <div><h2 className="section-title">Discipline made physical.</h2><p className="body-copy">Boxing is part of my hobby and lifestyle. It teaches me to respect fundamentals, notice weak habits, and keep working when progress is quiet. This site treats that practice honestly—it does not present me as a professional fighter.</p></div>
      </section>
      <section className="about-block section">
        <p className="eyebrow">The practice / Community</p>
        <div><h2 className="section-title">Share the way in.</h2><p className="body-copy">Technology communities gave me places to learn, ask questions, and contribute. RaheemLabs is my way of keeping that door open by sharing conversations and discoveries with other curious builders.</p><Link className="text-link" href="/contact">Start a conversation <ArrowIcon /></Link></div>
      </section>
    </main>
  );
}

