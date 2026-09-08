import Link from "next/link";
import { profile } from "@/content/profile";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="footer-call">Let&apos;s build something<br /><em>that matters.</em></p>
      <div className="footer-meta"><span>© {new Date().getFullYear()} {profile.brand}</span><span>UG / EAST AFRICA</span><Link href="/contact">OPEN CHANNEL ↗</Link></div>
    </footer>
  );
}
