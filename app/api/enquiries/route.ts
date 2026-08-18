import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Enquiry = {
  name?: string; company?: string; phone?: string; email?: string; type?: string;
  location?: string; machine?: string; urgency?: string; dates?: string;
  environment?: string; brands?: string; preferredContact?: string; message?: string;
  sourcePage?: string; referrer?: string; utmSource?: string; utmMedium?: string;
  utmCampaign?: string; website?: string;
};

function clean(value: unknown, max = 2000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Enquiry;

    // Honeypot for basic bot protection.
    if (clean(body.website, 200)) return NextResponse.json({ ok: true });

    const reference = `MAS-${new Date().toISOString().slice(0,10).replaceAll("-","")}-${randomUUID().slice(0,6).toUpperCase()}`;
    const enquiry = {
      reference,
      source: "mcateeragservices.co.uk",
      submittedAt: new Date().toISOString(),
      name: clean(body.name, 120),
      company: clean(body.company, 160),
      phone: clean(body.phone, 80),
      email: clean(body.email, 180),
      type: clean(body.type, 120),
      location: clean(body.location, 180),
      machine: clean(body.machine, 260),
      urgency: clean(body.urgency, 120),
      dates: clean(body.dates, 180),
      environment: clean(body.environment, 120),
      brands: clean(body.brands, 260),
      preferredContact: clean(body.preferredContact, 80),
      message: clean(body.message, 3000),
      attribution: {
        sourcePage: clean(body.sourcePage, 300),
        referrer: clean(body.referrer, 500),
        utmSource: clean(body.utmSource, 160),
        utmMedium: clean(body.utmMedium, 160),
        utmCampaign: clean(body.utmCampaign, 200),
      },
    };

    if (!enquiry.name || !enquiry.phone || !enquiry.location || !enquiry.message) {
      return NextResponse.json(
        { ok: false, error: "Name, phone, location and enquiry details are required." },
        { status: 400 },
      );
    }

    const webhook = process.env.AGRICORE_ENQUIRY_WEBHOOK_URL;
    const webhookToken = process.env.AGRICORE_ENQUIRY_WEBHOOK_TOKEN;

    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          ...(webhookToken ? { authorization: `Bearer ${webhookToken}` } : {}),
        },
        body: JSON.stringify(enquiry),
        cache: "no-store",
      });

      if (!response.ok) {
        console.error("AgriCore enquiry handoff failed", response.status, reference);
        return NextResponse.json(
          { ok: false, error: "We could not send your enquiry. Please call or WhatsApp us." },
          { status: 502 },
        );
      }
    } else {
      // Development fallback. Configure email delivery or the AgriCore webhook before launch.
      console.info("McAteer website enquiry", enquiry);
    }

    return NextResponse.json({ ok: true, reference });
  } catch (error) {
    console.error("Enquiry submission error", error);
    return NextResponse.json(
      { ok: false, error: "Unable to submit enquiry." },
      { status: 500 },
    );
  }
}
