"use client";

import Image from "next/image";
import type { PointerEvent } from "react";

export function HeroMedia() {
  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    event.currentTarget.style.setProperty("--pointer-x", `${x * 2.2}rem`);
    event.currentTarget.style.setProperty("--pointer-y", `${y * 1.4}rem`);
  };

  return (
    <figure className="hero-media" onPointerMove={handlePointerMove}>
      <Image
        src="/media/hero-lab-ring.png"
        alt="An editorial still life pairing a laptop and podcast microphone with boxing gloves, wraps, and a skipping rope."
        fill
        priority
        sizes="100vw"
      />
      <figcaption><span>Visual study 01</span>Lab discipline / Ring discipline</figcaption>
    </figure>
  );
}

