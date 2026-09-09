import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]!);
}

export async function POST(request: Request) {
  try {
    const payload = await request.json() as Record<string, unknown>;
    const name = text(payload.name, 100);
    const email = text(payload.email, 254);
    const enquiry = text(payload.enquiry, 80);
    const message = text(payload.message, 5000);
    const honey = text(payload.website, 200);
    const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (honey) return NextResponse.json({ success: true });
    if (!name || !validEmail || !enquiry || message.length < 20) {
      return NextResponse.json({ success: false, message: "Please complete every field correctly." }, { status: 400 });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s/g, "");
    if (!gmailUser || !gmailPassword) {
      console.error("Contact delivery is missing Gmail credentials");
      return NextResponse.json({ success: false, message: "Email delivery is not configured." }, { status: 503 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPassword },
    });

    const reference = crypto.randomUUID().slice(0, 8).toUpperCase();
    const delivery = await transporter.sendMail({
      from: `"RaheemLabs Portfolio" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `RaheemLabs enquiry [${reference}]: ${enquiry}`,
      text: `Reference: ${reference}\nName: ${name}\nEmail: ${email}\nEnquiry: ${enquiry}\n\n${message}`,
      html: `<h2>New RaheemLabs portfolio enquiry</h2><p><strong>Reference:</strong> ${reference}</p><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Enquiry:</strong> ${escapeHtml(enquiry)}</p><hr><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
    });

    const accepted = delivery.accepted.map(String).some((address) => address.toLowerCase() === gmailUser.toLowerCase());
    if (!accepted || delivery.rejected.length > 0) {
      console.error("Contact email was not accepted by Gmail", { accepted: delivery.accepted, rejected: delivery.rejected });
      return NextResponse.json({ success: false, message: "Gmail did not accept the message." }, { status: 502 });
    }

    return NextResponse.json({ success: true, reference });
  } catch (error) {
    console.error("Contact email delivery failed", error instanceof Error ? error.message : "Unknown error");
    return NextResponse.json(
      { success: false, message: "The message could not be delivered." },
      { status: 502 },
    );
  }
}
