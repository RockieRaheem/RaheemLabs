import type { Metadata } from "next";
import { ArrowIcon } from "@/components/arrow-icon";
import { RoundLabel } from "@/components/round-label";
import { profile } from "@/content/profile";

export const metadata: Metadata = { title: "Contact", description: "Start a thoughtful conversation with Kamwanga Rahiim." };

export default function ContactPage() {
  return (
    <main id="main-content" className="page-shell inner-page contact-page">
      <header className="page-intro">
        <RoundLabel index="05" tone="copper">Your move</RoundLabel>
        <h1 className="display display--medium">Bring a real problem. Let&apos;s talk.</h1>
        <p className="lead">{profile.availability}</p>
      </header>
      <section className="contact-grid section" aria-label="Ways to connect">
        <div className="contact-grid__intro"><p className="eyebrow">Contact / Uganda</p><p className="body-copy">For now, LinkedIn is the verified public route to reach me. Additional contact channels will appear only after they are confirmed.</p></div>
        <div className="contact-links">{profile.links.map((link, index) => <a key={link.href} href={link.href} target="_blank" rel="noreferrer"><span>0{index + 1}</span><strong>{link.label}</strong><ArrowIcon /></a>)}</div>
      </section>
    </main>
  );
}

