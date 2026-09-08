"use client";

import { useEffect, useRef, useState } from "react";

export function Experience() {
  const cursor = useRef<HTMLDivElement>(null);
  const [sound, setSound] = useState(false);
  const audio = useRef<AudioContext | null>(null);

  useEffect(() => {
    const update = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
      cursor.current?.style.setProperty("transform", `translate3d(${event.clientX}px,${event.clientY}px,0)`);
    };
    const scroll = () => document.documentElement.style.setProperty("--progress", `${(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)) * 100}%`);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting)), { threshold: 0.12 });
    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    addEventListener("pointermove", update);
    addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => { removeEventListener("pointermove", update); removeEventListener("scroll", scroll); observer.disconnect(); audio.current?.close(); };
  }, []);

  const toggleSound = () => {
    if (sound) { audio.current?.close(); audio.current = null; setSound(false); return; }
    const Context = window.AudioContext || window.webkitAudioContext;
    const context = new Context();
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine"; oscillator.frequency.value = 52;
    gain.gain.value = 0.018;
    oscillator.connect(gain).connect(context.destination); oscillator.start();
    audio.current = context; setSound(true);
  };

  return <><div className="scroll-progress" /><div className="cursor" ref={cursor} aria-hidden="true" /><div className="grain" aria-hidden="true" /><button className="sound" onClick={toggleSound} type="button" aria-pressed={sound}><i>{sound ? "▥" : "▤"}</i> Sound {sound ? "on" : "off"}</button></>;
}

declare global { interface Window { webkitAudioContext: typeof AudioContext } }
