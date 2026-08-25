import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/raheemlabs", label: "RaheemLabs" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="site-header__brand" href="/">
        <BrandMark />
      </Link>

      <nav className="site-header__nav" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <Link className="button button--compact" href="/contact">
        Let&apos;s talk
        <span aria-hidden="true">↗</span>
      </Link>
    </header>
  );
}

