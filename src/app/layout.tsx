import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Kamwanga Rahiim — RaheemLabs",
    template: "%s — RaheemLabs",
  },
  description:
    "Kamwanga Rahiim is a Ugandan software engineer and creator building useful technology and sharing what he learns through RaheemLabs.",
  applicationName: "RaheemLabs",
  authors: [{ name: "Kamwanga Rahiim" }],
  creator: "Kamwanga Rahiim",
  keywords: [
    "Kamwanga Rahiim",
    "RaheemLabs",
    "Ugandan software engineer",
    "technology creator",
    "developer portfolio",
  ],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: siteConfig.url,
    siteName: "RaheemLabs",
    title: "Kamwanga Rahiim — RaheemLabs",
    description: "Built in the Lab. Forged in the Ring.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamwanga Rahiim — RaheemLabs",
    description: "Built in the Lab. Forged in the Ring.",
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0c0c0b",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kamwanga Rahiim",
    url: siteConfig.url,
    address: { "@type": "PostalAddress", addressCountry: "UG" },
    sameAs: ["https://www.linkedin.com/in/kamwanga-raheem-b1b055271"],
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
