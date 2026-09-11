import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Experience } from "@/components/experience";
import { ShaderBackdrop } from "@/components/shader-backdrop";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Kamwanga Rahiim — RaheemLabs", template: "%s — RaheemLabs" },
  description: "Portfolio of Kamwanga Rahiim, a Ugandan software-engineering student, technology advocate, and community ambassador building useful digital products.",
  applicationName: "RaheemLabs",
  authors: [{ name: "Kamwanga Rahiim" }],
  creator: "Kamwanga Rahiim",
  openGraph: {
    type: "website",
    locale: "en_UG",
    title: "Kamwanga Rahiim — RaheemLabs",
    description: "Useful digital products, technology advocacy, and community work from Uganda.",
    siteName: "RaheemLabs",
    images: [{ url: "/media/raheem-headshot.jpg", width: 1200, height: 1200, alt: "Kamwanga Rahiim" }],
  },
  twitter: { card: "summary_large_image", title: "Kamwanga Rahiim — RaheemLabs", description: "Useful digital products, technology advocacy, and community work from Uganda.", images: ["/media/raheem-headshot.jpg"] },
};

export const viewport: Viewport = { colorScheme: "dark", themeColor: "#101110" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <Experience />
        <ShaderBackdrop />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
