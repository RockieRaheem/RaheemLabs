import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://raheemlabs.com"),
  title: {
    default: "Kamwanga Rahiim — RaheemLabs",
    template: "%s — RaheemLabs",
  },
  description:
    "Kamwanga Rahiim is a Ugandan software engineer and creator building useful technology and sharing what he learns through RaheemLabs.",
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0c0c0b",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
