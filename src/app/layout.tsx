import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Experience } from "@/components/experience";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Kamwanga Rahiim — RaheemLabs", template: "%s — RaheemLabs" },
  description: "Ugandan software engineer, technology creator, and boxer building useful systems and sharing the process.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Experience />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
