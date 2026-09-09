"use client";

import { useEffect, useRef } from "react";

const clusters = [
  { id: "frontend", label: "Frontend", skills: ["React", "Next.js", "Vue.js", "Tailwind CSS"] },
  { id: "backend", label: "Backend", skills: ["Node.js", "Express", "FastAPI", "Django"] },
  { id: "data", label: "Data systems", skills: ["PostgreSQL", "MySQL", "MongoDB", "Pandas"] },
  { id: "analytics", label: "Analytics", skills: ["Power BI", "Tableau", "Data analytics"] },
  { id: "intelligence", label: "AI + ML", skills: ["Python", "TensorFlow", "scikit-learn", "AI systems"] },
  { id: "infrastructure", label: "Infrastructure", skills: ["Docker", "AWS", "Linux", "Git"] },
  { id: "practice", label: "Practice", skills: ["Full-stack development", "Product thinking", "Technology storytelling", "Community"] },
] as const;

export function Constellation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let pointer = { x: -1000, y: -1000 };
    const nodes = Array.from({ length: 42 }, (_, index) => ({ x: ((index * 37) % 101) / 101, y: ((index * 61 + 17) % 103) / 103, vx: ((index % 5) - 2) * .00012, vy: (((index * 3) % 5) - 2) * .00012, r: index % 8 === 0 ? 3 : 1.5 }));
    const resize = () => { const ratio = Math.min(devicePixelRatio, 2); canvas.width = canvas.clientWidth * ratio; canvas.height = canvas.clientHeight * ratio; context.setTransform(ratio, 0, 0, ratio, 0, 0); };
    const move = (event: PointerEvent) => { const box = canvas.getBoundingClientRect(); pointer = { x: event.clientX - box.left, y: event.clientY - box.top }; };
    const draw = () => {
      const w = canvas.clientWidth, h = canvas.clientHeight;
      context.clearRect(0, 0, w, h);
      nodes.forEach((node) => { node.x += node.vx; node.y += node.vy; if (node.x < 0 || node.x > 1) node.vx *= -1; if (node.y < 0 || node.y > 1) node.vy *= -1; const x = node.x * w, y = node.y * h; const dx = x - pointer.x, dy = y - pointer.y, distance = Math.hypot(dx, dy); if (distance < 120) { node.x += (dx / Math.max(distance, 1)) * .002; node.y += (dy / Math.max(distance, 1)) * .002; } });
      nodes.forEach((a, index) => nodes.slice(index + 1).forEach((b) => { const ax = a.x*w, ay = a.y*h, bx = b.x*w, by = b.y*h, distance = Math.hypot(ax-bx, ay-by); if (distance < 145) { context.strokeStyle = `rgba(78,222,163,${(1-distance/145)*.25})`; context.beginPath(); context.moveTo(ax, ay); context.lineTo(bx, by); context.stroke(); } }));
      nodes.forEach((node) => { context.fillStyle = "#4edea3"; context.beginPath(); context.arc(node.x*w, node.y*h, node.r, 0, Math.PI*2); context.fill(); });
      frame = requestAnimationFrame(draw);
    };
    resize(); draw(); addEventListener("resize", resize); canvas.addEventListener("pointermove", move);
    return () => { cancelAnimationFrame(frame); removeEventListener("resize", resize); canvas.removeEventListener("pointermove", move); };
  }, []);

  return <div className="constellation-system">
    <canvas className="constellation" ref={canvasRef} aria-hidden="true" />
    <svg className="constellation-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M50 50L16 18M50 50L50 13M50 50L84 18M50 50L14 52M50 50L86 52M50 50L20 84M50 50L80 84" /></svg>
    <div className="constellation-core"><span>CORE</span><strong>Software<br />Engineering</strong><i>UG / 001</i></div>
    <div className="constellation-clusters">
      {clusters.map((cluster, index) => <article className={`skill-cluster skill-cluster--${index + 1}`} key={cluster.id}><span>0{index + 1} / {cluster.label}</span><div>{cluster.skills.map((skill) => <b key={skill}>{skill}</b>)}</div></article>)}
    </div>
  </div>;
}
