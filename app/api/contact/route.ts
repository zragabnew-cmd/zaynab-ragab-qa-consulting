import { NextResponse } from "next/server";
import { validateContact, type ContactInput } from "@/lib/validation";

export const runtime = "nodejs";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  let body: Partial<ContactInput> & { website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing
  if (body.website) return NextResponse.json({ ok: true });

  const errors = validateContact(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const lead = {
    name: body.name!.trim(),
    email: body.email!.trim(),
    company: body.company!.trim(),
    role: body.role!.trim(),
    companySize: body.companySize!,
    improve: body.improve!,
    challenge: body.challenge!.trim(),
    receivedAt: new Date().toISOString(),
  };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  try {
    if (webhook) {
      const r = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(lead),
      });
      if (!r.ok) throw new Error(`Webhook responded ${r.status}`);
    } else if (resendKey && to && from) {
      const r = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from,
          to,
          reply_to: lead.email,
          subject: `New QA consulting lead: ${lead.name} (${lead.company})`,
          html: `<h2>New lead</h2><ul>
            <li><b>Name:</b> ${esc(lead.name)}</li>
            <li><b>Email:</b> ${esc(lead.email)}</li>
            <li><b>Company:</b> ${esc(lead.company)} (${esc(lead.companySize)})</li>
            <li><b>Role:</b> ${esc(lead.role)}</li>
            <li><b>Wants to improve:</b> ${esc(lead.improve)}</li></ul>
            <p><b>Biggest QA challenge:</b><br/>${esc(lead.challenge).replace(/\n/g, "<br/>")}</p>`,
        }),
      });
      if (!r.ok) throw new Error(`Resend responded ${r.status}`);
    } else {
      // No delivery configured: log server-side so nothing is silently lost in development
      console.warn("[contact] No CONTACT_WEBHOOK_URL or Resend config set. Lead:", lead);
    }
  } catch (err) {
    console.error("[contact] delivery failed", err);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
