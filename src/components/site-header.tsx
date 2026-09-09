"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  ["Work", "/work"],
  ["About", "/about"],
  ["Hobbies", "/hobbies"],
  ["Journey", "/journey"],
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const frame = requestAnimationFrame(() => setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark"));
    return () => cancelAnimationFrame(frame);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("raheemlabs-theme", nextTheme);
    setTheme(nextTheme);
  };
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" onClick={() => setOpen(false)} aria-label="RaheemLabs home"><span>R</span>RAHEEM_LABS</Link>
      <nav className={open ? "nav is-open" : "nav"} aria-label="Primary navigation">
        {links.map(([label, href]) => <Link className={pathname.startsWith(href) ? "active" : ""} href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="nav-contact" href="/contact" data-magnetic onClick={() => setOpen(false)}>Connect ↗</Link>
      </nav>
      <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} aria-pressed={theme === "light"}>
        <span aria-hidden="true">{theme === "dark" ? "☼" : "◐"}</span><b>{theme === "dark" ? "Light" : "Dark"}</b>
      </button>
      <button className="menu" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span /><span /></button>
    </header>
  );
}
