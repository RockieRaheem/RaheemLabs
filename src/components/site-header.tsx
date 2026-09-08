"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["Work", "/work"],
  ["Ethos", "/ethos"],
  ["Boxing", "/boxing"],
  ["Journey", "/journey"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="RaheemLabs home"><span>R</span>RAHEEM_LABS</Link>
      <nav className={open ? "nav is-open" : "nav"} aria-label="Primary navigation">
        {links.map(([label, href]) => <Link className={pathname.startsWith(href) ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="nav-contact" href="/contact" data-magnetic onClick={() => setOpen(false)}>Connect ↗</Link>
      </nav>
      <button className="menu" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span /><span /></button>
    </header>
  );
}
