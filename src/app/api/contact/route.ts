import { NextResponse } from "next/server";

const recipient = "kamwangaraheem2050@gmail.com";
const deliveryEndpoint = `https://formsubmit.co/ajax/${recipient}`;

function text(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
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

    const response = await fetch(deliveryEndpoint, {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        enquiry,
        message,
        _subject: `RaheemLabs enquiry: ${enquiry}`,
        _template: "table",
      }),
      signal: AbortSignal.timeout(12_000),
      cache: "no-store",
    });

    const result = await response.json().catch(() => null) as { success?: boolean | string } | null;
    const delivered = response.ok && (result?.success === true || result?.success === "true");
    if (!delivered) return NextResponse.json({ success: false, message: "Email delivery is temporarily unavailable." }, { status: 502 });

    return NextResponse.json({ success: true });
  } catch (error) {
    const timedOut = error instanceof Error && error.name === "TimeoutError";
    return NextResponse.json(
      { success: false, message: timedOut ? "Email delivery timed out. Please try again." : "The message could not be delivered." },
      { status: 502 },
    );
  }
}
