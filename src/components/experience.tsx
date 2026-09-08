"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function Experience() {
  const cursor = useRef<HTMLDivElement>(null);
  const [sound, setSound] = useState(false);
  const audio = useRef<AudioContext | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const update = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--mx", `${event.clientX}px`);
      document.documentElement.style.setProperty("--my", `${event.clientY}px`);
      cursor.current?.style.setProperty("transform", `translate3d(${event.clientX}px,${event.clientY}px,0)`);
    };
    const scroll = () => document.documentElement.style.setProperty("--progress", `${(scrollY / Math.max(1, document.documentElement.scrollHeight - innerHeight)) * 100}%`);
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}}), { threshold: 0.1 });
    document.querySelectorAll("[data-reveal]").forEach((node) => observer.observe(node));
    const magnetic = [...document.querySelectorAll<HTMLElement>("[data-magnetic]")];
    const enter=()=>document.body.classList.add("is-hovering");
    const leave=(event:Event)=>{document.body.classList.remove("is-hovering");(event.currentTarget as HTMLElement).style.transform=""};
    const magnet=(event:PointerEvent)=>{const element=event.currentTarget as HTMLElement;const box=element.getBoundingClientRect();element.style.transform=`translate(${(event.clientX-box.left-box.width/2)*.14}px,${(event.clientY-box.top-box.height/2)*.14}px)`};
    magnetic.forEach(element=>{element.addEventListener("pointerenter",enter);element.addEventListener("pointerleave",leave);element.addEventListener("pointermove",magnet)});
    const glitchTargets=[...document.querySelectorAll<HTMLElement>("[data-glitch]")];
    const originals=glitchTargets.map(element=>element.textContent??"");
    const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_/-";
    const glitch=()=>{if(!glitchTargets.length||matchMedia("(prefers-reduced-motion: reduce)").matches)return;const index=Math.floor(Math.random()*glitchTargets.length),element=glitchTargets[index],original=originals[index];element.textContent=[...original].map(char=>char===" "?" ":Math.random()>.58?chars[Math.floor(Math.random()*chars.length)]:char).join("");element.classList.add("is-glitching");setTimeout(()=>{element.textContent=original;element.classList.remove("is-glitching")},80)};
    const glitchTimer=setInterval(glitch,1300);
    document.body.classList.add("route-enter");const routeTimer=setTimeout(()=>document.body.classList.remove("route-enter"),650);
    addEventListener("pointermove", update);
    addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => { removeEventListener("pointermove", update); removeEventListener("scroll", scroll); observer.disconnect();magnetic.forEach(element=>{element.removeEventListener("pointerenter",enter);element.removeEventListener("pointerleave",leave);element.removeEventListener("pointermove",magnet)});clearInterval(glitchTimer);clearTimeout(routeTimer); };
  }, [pathname]);

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
