"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { GalleryEntry } from "@/content/gallery";

export function GalleryGrid({ entries }: { entries: readonly GalleryEntry[] }) {
  const [active, setActive] = useState<number | null>(null);
  useEffect(() => {
    if (active === null) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") setActive((active + 1) % entries.length);
      if (event.key === "ArrowLeft") setActive((active - 1 + entries.length) % entries.length);
    };
    document.body.style.overflow = "hidden";
    addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; removeEventListener("keydown", close); };
  }, [active, entries.length]);

  return <>
    <div className="gallery-grid">{entries.map((entry, index) => <button className={`gallery-card gallery-card--${entry.format}`} type="button" key={entry.id} onClick={() => setActive(index)} data-reveal aria-label={`Open ${entry.title}`}>
      <span className="gallery-card__image"><Image src={entry.image} alt={entry.alt} fill sizes="(max-width:760px) 100vw,45vw" /></span>
      <span className="gallery-card__meta"><span><small>{entry.category} / {String(index + 1).padStart(2, "0")}</small><strong>{entry.title}</strong></span><i aria-hidden="true">＋</i></span>
    </button>)}</div>
    {active !== null && <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={entries[active].title} onClick={() => setActive(null)}>
      <button className="gallery-lightbox__close" type="button" onClick={() => setActive(null)} aria-label="Close image">CLOSE ×</button>
      <button className="gallery-lightbox__nav gallery-lightbox__nav--prev" type="button" onClick={(event) => { event.stopPropagation(); setActive((active - 1 + entries.length) % entries.length); }} aria-label="Previous image">←</button>
      <figure onClick={(event) => event.stopPropagation()}><div><Image src={entries[active].image} alt={entries[active].alt} fill sizes="90vw" priority /></div><figcaption><span>{entries[active].category}</span><h2>{entries[active].title}</h2><p>{entries[active].caption}</p></figcaption></figure>
      <button className="gallery-lightbox__nav gallery-lightbox__nav--next" type="button" onClick={(event) => { event.stopPropagation(); setActive((active + 1) % entries.length); }} aria-label="Next image">→</button>
    </div>}
  </>;
}
