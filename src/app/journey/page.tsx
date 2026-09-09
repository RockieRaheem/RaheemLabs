import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Journey",
  description: "How Kamwanga Rahiim turns curiosity into learning, experiments, responsible decisions, and shared knowledge.",
};

const phases = [
  { number: "01", verb: "QUESTION", title: "Start with what is unclear.", body: "Curiosity gives the work a direction. I begin by understanding the person, the context, and the real constraint before deciding what technology belongs in the solution.", signal: "LISTEN / FRAME / ASK" },
  { number: "02", verb: "LEARN", title: "Build the foundation first.", body: "Study creates the vocabulary for better decisions. I move between documentation, examples, discussion, and deliberate practice until an unfamiliar idea becomes something I can use responsibly.", signal: "READ / TEST / UNDERSTAND" },
  { number: "03", verb: "MAKE", title: "Turn thought into evidence.", body: "A working prototype reveals more than a perfect plan. I shape the smallest useful version, connect its parts, and let real behavior expose the assumptions that need another pass.", signal: "PROTOTYPE / CONNECT / SHIP" },
  { number: "04", verb: "REFINE", title: "Let feedback change the work.", body: "Good systems improve through attention. I revisit clarity, reliability, accessibility, and maintainability instead of treating the first working version as the finished answer.", signal: "OBSERVE / CORRECT / IMPROVE" },
  { number: "05", verb: "SHARE", title: "Leave a trail others can use.", body: "Explaining the process sharpens my own understanding. Notes, conversations, and demonstrations turn private learning into something that can invite questions and help another person begin.", signal: "DOCUMENT / SPEAK / EXCHANGE" },
] as const;

export default function Journey() {
  return <main id="main" className="page-shell journey-page">
    <header className="journey-hero">
      <div className="journey-hero__index" aria-hidden="true">04</div>
      <div className="journey-hero__copy"><p className="eyebrow">Journey / The working method</p><h1 className="display">Progress has<br /><em>a rhythm.</em></h1><p>This is not another biography or project list. It is the process I return to while learning, making, and improving.</p></div>
      <div className="journey-hero__signal"><i /><span>PROCESS ACTIVE</span><span>QUESTION → LEARN → MAKE</span></div>
    </header>
    <section className="journey-intro section" data-reveal><p className="eyebrow">How movement happens</p><blockquote>“Direction matters more than pretending the path was always clear.”</blockquote><p>Each pass creates new information. The cycle continues with better questions, stronger judgment, and work that is more useful than the version before it.</p></section>
    <section className="journey-process" aria-label="Five-part working process">{phases.map((phase) => <article key={phase.number} data-reveal><div className="journey-process__number"><span>{phase.number}</span><i /></div><div><p className="eyebrow">{phase.verb}</p><h2>{phase.title}</h2></div><p>{phase.body}</p><small>{phase.signal}</small></article>)}</section>
    <section className="journey-next section" data-reveal><p className="eyebrow">See the process applied</p><h2>The method becomes<br /><em>real in the work.</em></h2><p>The project case studies show the decisions, constraints, and systems produced by this ongoing practice.</p><Link className="button" href="/work">Explore the work ↗</Link></section>
  </main>;
}
