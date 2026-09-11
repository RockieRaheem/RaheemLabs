"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Homepage", "/"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Gallery", "/gallery"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", close);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", close); };
  }, [open]);

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="RaheemLabs home"><span>R</span>RAHEEM_LABS</Link>
      <nav id="primary-navigation" className={open ? "nav is-open" : "nav"} aria-label="Primary navigation">
        {links.map(([label, href]) => { const active = pathname === href || (href !== "/" && pathname.startsWith(href)); return <Link className={`${href === "/" ? "nav-home" : ""} ${active ? "active" : ""}`.trim()} href={href} key={href} onClick={() => setOpen(false)} aria-current={active ? "page" : undefined}>{label}</Link>; })}
        <Link className="nav-contact" href="/contact" data-magnetic onClick={() => setOpen(false)}>Connect ↗</Link>
      </nav>
      <button className="menu" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close navigation" : "Open navigation"}><span /><span /></button>
    </header>
  );
}
