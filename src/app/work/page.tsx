import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { getPublishedProjects } from "@/content/projects";
export const metadata:Metadata={title:"Selected work"};
export default function WorkPage(){return <main id="main" className="page-shell"><PageHero index="01" label="Selected systems" title={<>Work built with<br/><em>purpose.</em></>} description="Verified projects, honest constraints, and the thinking that shaped each decision."/><section className="case-grid section">{getPublishedProjects().map((p,i)=><Link href={`/work/${p.slug}`} className="case-card" key={p.slug} data-reveal><div className="case-card__image"><Image src={p.slug==="sistercare"?"/media/organic-systems.png":"/media/technology-lab.png"} alt="" fill sizes="(max-width:760px) 100vw,50vw"/><span>CASE_0{i+1} / {p.year}</span></div><p className="eyebrow">{p.disciplines.join(" / ")}</p><h2>{p.title}</h2><p>{p.summary}</p><b>READ SYSTEM LOG ↗</b></Link>)}</section></main>}
