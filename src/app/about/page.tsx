import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { profile } from "@/content/profile";

export const metadata: Metadata = { title: "About", description: "Meet Kamwanga Rahiim, a Ugandan software-engineering student, builder, data and AI enthusiast, and creator behind RaheemLabs." };

const capabilities = [
  ["01", "Full-stack systems", "Building user-focused web products across frontend, backend, databases, and deployment."],
  ["02", "Data and analytics", "Exploring how clear dashboards and responsible analysis can turn information into useful decisions."],
  ["03", "AI and machine learning", "Learning and applying intelligent systems where they can address practical, real-world needs."],
  ["04", "Technology storytelling", "Sharing conversations, podcast-style ideas, and the process of learning through RaheemLabs."],
];

export default function About() {
  const linkedIn = profile.links.find((link) => link.label === "LinkedIn")!;
  const github = profile.links.find((link) => link.label === "GitHub")!;
  return <main id="main" className="page-shell about-page">
    <header className="about-hero">
      <div className="about-hero__copy"><p className="eyebrow">About / Kamwanga Rahiim</p><h1 className="display">Building with<br /><em>curiosity and intent.</em></h1><p>I&apos;m a Ugandan software-engineering student, technology creator, and aspiring data professional interested in products that solve real problems for real people.</p><div className="about-actions"><Link className="button" href="/work">Explore my work ↗</Link><Link className="button button--ghost" href="/contact">Start a conversation</Link></div></div>
      <figure className="about-portrait"><Image src="/media/technology-lab.png" alt="Technology workspace representing the RaheemLabs practice" fill priority sizes="(max-width:760px) 100vw,44vw" /><figcaption><span>RAHEEMLABS / PRACTICE</span><span>UGANDA / EAST AFRICA</span></figcaption></figure>
    </header>
    <section className="about-ledger" aria-label="Profile summary"><span>SOFTWARE ENGINEERING</span><span>DATA + AI</span><span>RAHEEMLABS</span><span>UGANDA</span></section>
    <section className="about-story section"><div data-reveal><p className="eyebrow">The person behind the work</p><h2 className="section-title">Learning in public.<br />Building for use.</h2></div><div data-reveal><p>My work sits across software engineering, full-stack development, data analytics, and emerging AI applications. I care about clean, maintainable systems, but the real measure is whether a product feels clear and valuable to the person using it.</p><p>Through <strong>RaheemLabs</strong>, I share technology conversations and podcast-style content while documenting what I continue to learn. It is both a public notebook and a space for making technical ideas more approachable.</p><p>I am still a student and describe that honestly. The aim is not to perform expertise—it is to keep building, testing, listening, and improving.</p></div></section>
    <section className="about-capabilities section"><div className="section-head" data-reveal><div><p className="eyebrow">How I contribute</p><h2 className="section-title">A connected practice.</h2></div><span>ENGINEERING / DATA / STORY</span></div><div className="capability-list">{capabilities.map(([number, title, description]) => <article key={number} data-reveal><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>
    <section className="about-connect section" data-reveal><p className="eyebrow">Continue the conversation</p><h2>Find the work.<br /><em>Meet the person.</em></h2><div><a href={linkedIn.href} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={github.href} target="_blank" rel="noreferrer">GitHub ↗</a><Link href="/contact">Contact ↗</Link></div></section>
  </main>;
}
