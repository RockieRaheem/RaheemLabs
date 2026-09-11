"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

const capabilities = [
  { name: "Website design", note: "Clear, responsive digital experiences", orbit: "inner", angle: "0deg", duration: "24s" },
  { name: "System development", note: "Useful products built around real needs", orbit: "inner", angle: "180deg", duration: "24s" },
  { name: "Data analysis", note: "Information shaped into useful insight", orbit: "middle", angle: "20deg", duration: "34s" },
  { name: "Software setup", note: "Installation, configuration, and support", orbit: "middle", angle: "140deg", duration: "34s" },
  { name: "Tech education", note: "Practical ideas made approachable", orbit: "middle", angle: "260deg", duration: "34s" },
  { name: "AI prototyping", note: "Responsible experiments for real problems", orbit: "outer", angle: "55deg", duration: "46s" },
  { name: "Product thinking", note: "From early question to usable direction", orbit: "outer", angle: "175deg", duration: "46s" },
  { name: "Community mentoring", note: "Learning, sharing, and growing together", orbit: "outer", angle: "295deg", duration: "46s" },
] as const;

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    let frame = 0;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stars = Array.from({ length: 54 }, (_, index) => ({ x: ((index * 37) % 101) / 101, y: ((index * 61 + 17) % 103) / 103, phase: index * .7, size: index % 9 === 0 ? 2.4 : 1.1 }));
    const resize = () => { const ratio = Math.min(devicePixelRatio, 2); canvas.width = canvas.clientWidth * ratio; canvas.height = canvas.clientHeight * ratio; context.setTransform(ratio, 0, 0, ratio, 0, 0); };
    const draw = (time = 0) => {
      context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      stars.forEach((star) => {
        const glow = reducedMotion ? .55 : .35 + Math.sin(time * .0015 + star.phase) * .25;
        context.fillStyle = `rgba(78,222,163,${glow})`;
        context.beginPath();
        context.arc(star.x * canvas.clientWidth, star.y * canvas.clientHeight, star.size, 0, Math.PI * 2);
        context.fill();
      });
      if (!reducedMotion) frame = requestAnimationFrame(draw);
    };
    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); };
  }, []);

  return <div className="constellation-system capability-system">
    <canvas className="constellation" ref={canvasRef} aria-hidden="true" />
    <div className="orbit-ring orbit-ring--inner" aria-hidden="true" />
    <div className="orbit-ring orbit-ring--middle" aria-hidden="true" />
    <div className="orbit-ring orbit-ring--outer" aria-hidden="true" />
    <div className="constellation-core capability-core"><span>RAHEEMLABS</span><strong>Build<br />Teach<br />Analyse</strong><i>UG / EAST AFRICA</i></div>
    <div className="capability-planets">
      {capabilities.map((capability, index) => <article
        className={`capability-planet capability-planet--${capability.orbit}`}
        style={{ "--angle": capability.angle, "--duration": capability.duration } as CSSProperties}
        key={capability.name}
        tabIndex={0}
      ><span aria-hidden="true">0{index + 1}</span><strong>{capability.name}</strong><small>{capability.note}</small></article>)}
    </div>
  </div>;
}
