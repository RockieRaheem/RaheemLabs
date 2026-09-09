"use client";

import { FormEvent, useState } from "react";

const endpoint = "/api/contact";

export function ContactTerminal() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json() as { success?: boolean | string };
      if (!response.ok || (result.success !== true && result.success !== "true")) throw new Error("Submission failed");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") return <div className="contact-success" role="status">
    <span>✓</span>
    <p className="eyebrow">Message received</p>
    <h2>Thank you for reaching out.</h2>
    <p>Your note has been submitted to Kamwanga. Expect a reply at the email address you provided.</p>
    <button type="button" onClick={() => setStatus("idle")}>Send another message</button>
  </div>;

  return <form className="contact-form" onSubmit={submit}>
    <input className="contact-honey" type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <div className="contact-fields-row">
      <label><span>Your name</span><input name="name" required autoComplete="name" placeholder="How should I address you?" /></label>
      <label><span>Email address</span><input type="email" name="email" required autoComplete="email" placeholder="you@company.com" /></label>
    </div>
    <label><span>What would you like to discuss?</span><select name="enquiry" defaultValue="Project collaboration"><option>Project collaboration</option><option>Work opportunity</option><option>Podcast or interview</option><option>Community or event</option><option>Something else</option></select></label>
    <label><span>Your message</span><textarea name="message" required minLength={20} rows={7} placeholder="Share the context, goal, timeline, and the best way to continue the conversation." /></label>
    {status === "error" && <p className="form-error" role="alert">The message could not be sent. Please try again or <a href="mailto:kamwangaraheem2050@gmail.com">email me directly</a>.</p>}
    <div className="contact-submit"><p>By sending this form, your details are used only to respond to your enquiry.</p><button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}<b aria-hidden="true">↗</b></button></div>
  </form>;
}
