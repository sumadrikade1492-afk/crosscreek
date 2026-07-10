import { NextResponse } from "next/server";

const FALLBACK_WEBHOOK_URL =
  "https://sumadri.app.n8n.cloud/webhook/0ee7a5a8-b35d-42fc-8140-0714d9ea3009";

type QuotePayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  details?: string;
  submittedAt?: string;
  source?: string;
};

export async function POST(request: Request) {
  let payload: QuotePayload;

  try {
    payload = (await request.json()) as QuotePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!payload.name || !payload.email || !payload.details) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL || FALLBACK_WEBHOOK_URL;

  try {
    const webhookResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: "Webhook request failed." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to reach webhook." }, { status: 502 });
  }
}
