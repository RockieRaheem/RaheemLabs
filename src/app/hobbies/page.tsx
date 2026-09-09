import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Hobbies and interests",
  description: "The sports, stories, ideas, and laughter that keep Raheem curious beyond technology.",
};

const hobbies = [
  { number: "02", name: "Soccer", note: "The movement, teamwork, and shared tension of the beautiful game.", mark: "90′" },
  { number: "03", name: "TEDx", note: "Fresh perspectives from people willing to share one idea clearly.", mark: "IDEA" },
  { number: "04", name: "Music", note: "A soundtrack for deep work, recovery, travel, and everything between.", mark: "♪" },
  { number: "05", name: "Movies", note: "Worlds built through character, atmosphere, pacing, and imagination.", mark: "24 FPS" },
  { number: "06", name: "Comedy", note: "Good timing, sharp observation, and the freedom to laugh at life.", mark: ":)" },
  { number: "07", name: "Novels", note: "Long-form stories that make unfamiliar lives and places feel close.", mark: "A—Z" },
];

export default function Hobbies() {
  return <main id="main" className="page-shell hobbies-page">
    <header className="hobbies-hero">
      <div className="hobbies-hero__copy">
        <p className="eyebrow">Beyond the build</p>
        <h1 className="display">Things that keep<br /><em>life in motion.</em></h1>
        <p>Simple interests that help me reset, stay curious, and return to technology with a wider view of people and the world.</p>
      </div>
      <div className="hobby-ticker" aria-label="Raheem's hobbies"><span>BOXING</span><span>SOCCER</span><span>TEDx</span><span>MUSIC</span><span>MOVIES</span><span>COMEDY</span><span>NOVELS</span></div>
    </header>

    <section className="hobby-feature section">
      <div className="hobby-feature__image" data-reveal>
        <Image src="/media/my boxing image.PNG" alt="Raheem in his boxing gloves" fill priority sizes="(max-width:760px) 100vw,48vw" />
        <span>01 / BOXING</span>
      </div>
      <div className="hobby-feature__copy" data-reveal>
        <p className="eyebrow">The practice</p>
        <h2 className="section-title">A place to be<br />fully present.</h2>
        <p className="copy">Boxing gives me a clear rhythm: prepare, move, breathe, respond. I enjoy the discipline and honest feedback of training, but it is simply one part of a life shaped by many interests.</p>
      </div>
    </section>

    <section className="hobby-collection section">
      <div className="section-head" data-reveal><div><p className="eyebrow">The collection</p><h2 className="section-title">What I enjoy.</h2></div><span>07 INTERESTS / ONE CURIOUS LIFE</span></div>
      <div className="hobby-grid">{hobbies.map((hobby) => <article className="hobby-card" key={hobby.name} data-reveal>
        <span className="hobby-card__number">{hobby.number}</span><b className="hobby-card__mark" aria-hidden="true">{hobby.mark}</b><h3>{hobby.name}</h3><p>{hobby.note}</p>
      </article>)}</div>
    </section>

    <section className="hobbies-closing section" data-reveal><p className="eyebrow">Offline matters</p><h2>Curiosity needs<br /><em>room to play.</em></h2></section>
  </main>;
}
