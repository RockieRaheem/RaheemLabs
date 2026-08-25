import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__statement">
        <p>The bell ends the round.</p>
        <p>The work continues.</p>
      </div>

      <div className="site-footer__base">
        <Link href="/" aria-label="RaheemLabs home">
          <BrandMark compact />
        </Link>
        <p>© {year} Kamwanga Rahiim</p>
        <div className="site-footer__links">
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

