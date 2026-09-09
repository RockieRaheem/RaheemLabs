import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journey",
  description: "The ongoing journey of Kamwanga Rahiim: learning software engineering, building useful products, sharing technology through RaheemLabs, and growing through disciplined practice.",
};

const chapters = [
  { number: "01", marker: "FOUNDATION", title: "Curiosity became a practice.", body: "My journey is still being written. As a software-engineering student in Uganda, I learn by moving between study and practice: understanding an idea, building with it, testing the result, and returning with better questions.", note: "Software engineering / Uganda", image: "/media/raheem-headshot.jpg", alt: "Portrait of Kamwanga Rahiim", href: "/about", link: "More about me", external: false },
  { number: "02", marker: "BUILDING", title: "Useful technology starts with people.", body: "SisterCare explores private, multilingual wellbeing support for girls and women. The work has deepened how I think about responsible AI, safety boundaries, accessibility, and the human consequences behind technical decisions.", note: "SisterCare / Digital health", image: "/media/sistercare-supported.png", alt: "SisterCare support experience", href: "/work/sistercare", link: "Read the case study", external: false },
  { number: "03", marker: "SYSTEMS", title: "Complex operations can feel clear.", body: "RentiHub brings property records, tenants, payments, maintenance, reporting, and data integrity into one connected system. Building it sharpened my interest in full-stack products that turn fragmented work into understandable workflows.", note: "RentiHub / Property technology", image: "/media/rentihub-dashboard.png", alt: "RentiHub property dashboard", href: "/work/rentihub", link: "Explore the project", external: false },
  { number: "04", marker: "SHARING", title: "Learning grows when it is shared.", body: "RaheemLabs is where I share technology conversations, podcast-style ideas, and observations from the process. It is not a claim to have every answer; it is a commitment to think openly and make technical ideas easier to approach.", note: "RaheemLabs / Technology creator", image: "/media/technology-lab.png", alt: "Technology workspace representing RaheemLabs", href: "https://www.tiktok.com/@raheemlabs", link: "Visit RaheemLabs", external: true },
  { number: "05", marker: "DISCIPLINE", title: "Progress is built beyond the screen.", body: "Boxing teaches patience, composure, and repetition. Soccer, TEDx talks, music, movies, comedy, and novels widen the perspective I bring back to the work. Together, they keep the journey human.", note: "Practice / Perspective / Life", image: "/media/my boxing image.PNG", alt: "Raheem training in boxing", href: "/hobbies", link: "Discover my hobbies", external: false },
] as const;

export default function Journey() {
  return <main id="main" className="page-shell journey-page">
    <header className="journey-hero">
      <div className="journey-hero__index" aria-hidden="true">04</div>
      <div className="journey-hero__copy"><p className="eyebrow">The journey / Still unfolding</p><h1 className="display">No finished story.<br /><em>Just forward motion.</em></h1><p>A living record of how curiosity, useful work, public learning, and disciplined practice are shaping the person and builder I am becoming.</p></div>
      <div className="journey-hero__signal"><i /><span>UGANDA</span><span>LEARNING / BUILDING / SHARING</span></div>
    </header>
    <section className="journey-intro section" data-reveal><p className="eyebrow">A note on the record</p><blockquote>“I would rather show the work in progress than manufacture a perfect timeline.”</blockquote><p>This page records what can be said honestly today. The milestones are not endpoints; they are evidence of a practice that continues to evolve.</p></section>
    <section className="journey-chapters" aria-label="Journey chapters">
      {chapters.map((chapter) => <article className="journey-chapter" key={chapter.number} data-reveal>
        <div className="journey-chapter__rail"><span>{chapter.number}</span><i /></div>
        <div className="journey-chapter__copy"><p className="eyebrow">{chapter.marker}</p><h2>{chapter.title}</h2><p>{chapter.body}</p><small>{chapter.note}</small><Link href={chapter.href} target={chapter.external ? "_blank" : undefined} rel={chapter.external ? "noreferrer" : undefined}>{chapter.link} <span aria-hidden="true">↗</span></Link></div>
        <div className="journey-chapter__visual"><Image src={chapter.image} alt={chapter.alt} fill sizes="(max-width: 760px) 100vw, 42vw" /></div>
      </article>)}
    </section>
    <section className="journey-next section" data-reveal><p className="eyebrow">The next chapter</p><h2>There is room for<br /><em>something meaningful.</em></h2><p>If you are building thoughtful technology, shaping a community, or exploring an idea worth testing, I would be glad to hear the context.</p><Link className="button" href="/contact">Start a conversation ↗</Link></section>
  </main>;
}
