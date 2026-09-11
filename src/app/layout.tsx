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
  description: "Ugandan software engineer and technology creator building useful systems and sharing the process.",
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
