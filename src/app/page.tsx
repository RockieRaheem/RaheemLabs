import Image from "next/image";
import Link from "next/link";
import { Constellation } from "@/components/constellation";
import { getFeaturedProjects } from "@/content/projects";

export default function Home() {
  const projects = getFeaturedProjects();
  return <main id="main" className="page-shell">
    <section className="home-hero">
      <div className="hero-status eyebrow"><span>UGANDA / EAST AFRICA</span><span>ENGINEER / CREATOR / BOXER</span></div>
      <div className="hero-orbit" aria-hidden="true"><i /><i /><i /><span>RL</span></div>
      <figure className="hero-portrait" aria-label="Portrait of Kamwanga Rahiim">
        <Image src="/media/raheem-headshot.jpg" alt="Kamwanga Rahiim" fill priority sizes="(max-width: 760px) 100vw, 52vw" />
        <figcaption><span>PORTRAIT / 001</span><span>KAMPALA, UG</span></figcaption>
      </figure>
      <div className="hero-copy">
        <p className="eyebrow" data-glitch>Kamwanga Rahiim / System online</p>
        <h1 className="display"><span>Build technology</span><br />for <em>problems worth</em><br /><span className="outline">solving.</span></h1>
        <p>I engineer useful products, document what I learn through RaheemLabs, and train with the discipline of a boxer.</p>
        <div className="hero-actions"><Link className="button" data-magnetic href="/work">Explore the work <span>↗</span></Link><Link className="button button--ghost" data-magnetic href="/about">About me</Link></div>
      </div>
      <div className="hero-index"><b>01</b><span>PERSONAL OPERATING SYSTEM</span></div>
      <a className="scroll-cue" href="#work" data-glitch>SCROLL TO EXPLORE ↓</a>
    </section>

    <section className="manifest section" data-reveal>
      <p className="eyebrow">01 / Operating principle</p>
      <h2 className="section-title">Technology should feel<br />precise. <em>Human.</em> Useful.</h2>
      <div className="manifest-grid"><div className="manifest-story"><p className="copy">I am a Ugandan software-engineering student exploring thoughtful digital products, developer communities, and technology storytelling. The ring keeps the process honest: repetition, composure, and progress earned one round at a time.</p><Link className="journey-link" href="/journey">Follow the journey <span aria-hidden="true">↗</span></Link></div><div className="manifest-stat"><span>BUILD</span><span>SHARE</span><span>TRAIN</span></div></div>
    </section>

    <section className="work-section section" id="work">
      <div className="section-head" data-reveal><div><p className="eyebrow">02 / Selected systems</p><h2 className="section-title">Work with a pulse.</h2></div><Link href="/work">VIEW ALL PROJECTS ↗</Link></div>
      <div className="project-list">
        {projects.map((project,index)=><Link className="project-row" href={`/work/${project.slug}`} key={project.slug} data-reveal>
          <span className="project-no">0{index+1}</span><div><p className="eyebrow">{project.kicker} / {project.year}</p><h3>{project.title}</h3><p>{project.summary}</p></div><div className={`project-art project-art--${project.tone}`}><Image src={project.cover} alt={`${project.title} project preview`} fill sizes="(max-width: 760px) 100vw, 42vw" /></div><span className="project-arrow">↗</span>
        </Link>)}
      </div>
    </section>

    <section className="dual-life section">
      <div data-reveal><p className="eyebrow">03 / Beyond the build</p><h2 className="section-title">Work needs<br />a life <em>around it.</em></h2><p className="copy">Boxing, soccer, stories, music, ideas, and laughter keep curiosity alive away from the screen.</p><Link className="button" href="/hobbies">Explore my hobbies ↗</Link></div>
      <div className="ring-frame" data-reveal><Image src="/media/boxing-ring.png" alt="Low-angle geometry of a boxing ring" fill sizes="(max-width: 760px) 100vw, 44vw" /><span>DISCIPLINE // 04:30 EAT</span></div>
    </section>

    <section className="skills section" data-reveal><p className="eyebrow">04 / Technical constellation</p><h2 className="section-title">Connected by curiosity.</h2><p className="copy">A living map of the technologies and practices I continue to explore—not a scoreboard, but a record of direction.</p><div className="constellation-wrap"><Constellation /></div></section>
  </main>;
}
