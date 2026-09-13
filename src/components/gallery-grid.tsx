"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import type { GalleryEntry } from "@/content/gallery";

const readableDate = (date: string) => new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));

export function GalleryGrid({ entries }: { entries: readonly GalleryEntry[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const visible = useMemo(() => [...entries].sort((a, b) => b.date.localeCompare(a.date)), [entries]);
  const activeIndex = visible.findIndex((entry) => entry.id === activeId);
  const active = activeIndex >= 0 ? visible[activeIndex] : null;

  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
      if (event.key === "ArrowRight") setActiveId(visible[(activeIndex + 1) % visible.length].id);
      if (event.key === "ArrowLeft") setActiveId(visible[(activeIndex - 1 + visible.length) % visible.length].id);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKeyDown); };
  }, [active, activeIndex, visible]);

  return <>
    <section className="gallery-wall" aria-label="Gallery stories">
      {visible.map((entry, index) => <article className={`gallery-story gallery-story--${entry.format}`} key={entry.id} data-reveal>
        <button type="button" className="gallery-story__image" onClick={() => setActiveId(entry.id)} aria-label={`Open story: ${entry.title}`}>
          <Image src={entry.image} alt={entry.alt} fill sizes="(max-width: 760px) 100vw, (max-width: 1200px) 50vw, 34vw" />
          <span><b>{String(index + 1).padStart(2, "0")}</b> View story</span>
        </button>
        <div className="gallery-story__copy">
          <p><span>{entry.category}</span><time dateTime={entry.date}>{readableDate(entry.date)}</time></p>
          <h2>{entry.title}</h2>
          <p>{entry.caption}</p>
          <footer><span>{entry.location ?? "Uganda"}</span><button type="button" onClick={() => setActiveId(entry.id)}>Read story <span aria-hidden="true">↗</span></button></footer>
        </div>
      </article>)}
    </section>
    {active && <div className="gallery-lightbox gallery-lightbox--story" role="dialog" aria-modal="true" aria-label={active.title} onClick={() => setActiveId(null)}>
      <button className="gallery-lightbox__close" type="button" onClick={() => setActiveId(null)} aria-label="Close story">Close <span aria-hidden="true">×</span></button>
      <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" type="button" onClick={(event) => { event.stopPropagation(); setActiveId(visible[(activeIndex - 1 + visible.length) % visible.length].id); }} aria-label="Previous story">←</button>
      <figure onClick={(event) => event.stopPropagation()}>
        <div><Image src={active.image} alt={active.alt} fill sizes="(max-width: 900px) 100vw, 68vw" priority /></div>
        <figcaption>
          <span>{active.category} · {readableDate(active.date)}</span>
          <h2>{active.title}</h2>
          <p>{active.caption}</p>
          {active.location && <small>{active.location}</small>}
          {active.sourceUrl && <a className="gallery-source" href={active.sourceUrl} target="_blank" rel="noreferrer">Read the original post <span aria-hidden="true">↗</span></a>}
        </figcaption>
      </figure>
      <button className="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" onClick={(event) => { event.stopPropagation(); setActiveId(visible[(activeIndex + 1) % visible.length].id); }} aria-label="Next story">→</button>
    </div>}
  </>;
}
