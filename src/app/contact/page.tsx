import type { Metadata } from "next";
import { ContactTerminal } from "@/components/contact-terminal";
import { SocialIcon } from "@/components/social-icon";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Kamwanga Rahiim about software projects, collaborations, technology conversations, and community opportunities.",
};

export default function Contact() {
  return <main id="main" className="page-shell contact-page">
    <header className="contact-hero">
      <p className="eyebrow">05 / Open channel</p>
      <h1 className="display">Let&apos;s make<br /><em>something useful.</em></h1>
      <p>Have a product idea, collaboration, podcast conversation, or community opportunity? Send the essentials and let&apos;s find the useful next step.</p>
      <div className="contact-presence"><i /><span>AVAILABLE FOR THOUGHTFUL WORK</span><span>KAMPALA / EAT</span></div>
    </header>
    <section className="contact-grid contact-grid--compact">
      <div className="contact-form-panel">
        <div className="contact-panel-head"><span>WRITE TO RAHEEM</span><span>01 / SECURE CHANNEL</span></div>
        <div className="contact-form-intro"><h2>Tell me what<br />you&apos;re building.</h2><p>Share enough context for a thoughtful reply. Your message is delivered directly to my inbox.</p></div>
        <ContactTerminal />
        <div className="contact-socials" aria-label="Social and direct contact links">
          <div className="social-dock">{profile.links.map((link, index) => <a
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            key={link.label}
            className={index < 2 ? "social-dock__link social-dock__link--primary" : "social-dock__link"}
            aria-label={`${link.label}: ${link.handle}`}
            title={`${link.label} — ${link.handle}`}
          ><SocialIcon name={link.label} /><span>{link.label}</span></a>)}</div>
        </div>
      </div>
    </section>
  </main>;
}
