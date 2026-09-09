import type { Metadata } from "next";
import { ContactTerminal } from "@/components/contact-terminal";
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
      <p>Have a product idea, collaboration, podcast conversation, or community opportunity? Send the essentials and I&apos;ll respond by email.</p>
      <div className="contact-presence"><i /><span>AVAILABLE FOR THOUGHTFUL WORK</span><span>KAMPALA / EAT</span></div>
    </header>
    <section className="contact-grid">
      <div className="contact-form-panel">
        <div className="contact-panel-head"><span>START A CONVERSATION</span><span>01</span></div>
        <ContactTerminal />
      </div>
      <aside className="contact-directory" aria-labelledby="contact-directory-title">
        <div className="contact-panel-head"><h2 id="contact-directory-title">Find me online</h2><span>02</span></div>
        <p>Professional work first, then the channels where I share, train, and stay connected.</p>
        <div className="social-list">{profile.links.map((link, index) => <a
          href={link.href}
          target={link.href.startsWith("http") ? "_blank" : undefined}
          rel={link.href.startsWith("http") ? "noreferrer" : undefined}
          key={link.label}
          className={index < 2 ? "social-link social-link--primary" : "social-link"}
        >
          <span className="social-rank">{String(index + 1).padStart(2, "0")}</span>
          <span><b>{link.label}</b><small>{link.category}</small></span>
          <span className="social-handle">{link.handle}</span>
          <i aria-hidden="true">↗</i>
        </a>)}</div>
      </aside>
    </section>
  </main>;
}
