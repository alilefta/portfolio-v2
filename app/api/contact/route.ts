import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(80),
  email: z.email().max(254),
  projectType: z.enum(["Product", "Workflow", "Review", "Other"]),
  message: z.string().trim().min(20).max(5000),
  website: z.string().max(200).optional(),
});

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const recentRequests = new Map<string, number[]>();

function isRateLimited(key: string) {
  const now = Date.now();
  const attempts = (recentRequests.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (attempts.length >= RATE_LIMIT_MAX_REQUESTS) {
    recentRequests.set(key, attempts);
    return true;
  }

  recentRequests.set(key, [...attempts, now]);
  return false;
}

function getClientKey(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return (
    forwardedFor?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function hasValidOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) return true;

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!hasValidOrigin(request)) {
    return Response.json(
      { ok: false, code: "invalid_origin" },
      { status: 403 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > 12_000) {
    return Response.json(
      { ok: false, code: "payload_too_large" },
      { status: 413 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return Response.json(
      { ok: false, code: "invalid_request" },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return Response.json(
      { ok: false, code: "validation_failed" },
      { status: 422 },
    );
  }

  if (parsed.data.website) {
    return Response.json({ ok: true });
  }

  if (isRateLimited(getClientKey(request))) {
    return Response.json({ ok: false, code: "rate_limited" }, { status: 429 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return Response.json(
      { ok: false, code: "delivery_unconfigured" },
      { status: 503 },
    );
  }

  const projectLabels: Record<typeof parsed.data.projectType, string> = {
    Product: "Product or SaaS platform",
    Workflow: "Internal workflow",
    Review: "Architecture or frontend review",
    Other: "Other project",
  };
  const text = [
    `Name: ${parsed.data.name}`,
    `Email: ${parsed.data.email}`,
    `Project type: ${projectLabels[parsed.data.projectType]}`,
    "",
    parsed.data.message,
  ].join("\n");

  try {
    const providerResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": crypto.randomUUID(),
        "User-Agent": "Ali-Lefta-Portfolio/1.0",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: parsed.data.email,
        subject: `Portfolio inquiry — ${projectLabels[parsed.data.projectType]}`,
        text,
      }),
      cache: "no-store",
    });

    if (!providerResponse.ok) {
      console.error("Contact delivery failed", {
        status: providerResponse.status,
        requestId: providerResponse.headers.get("x-request-id"),
      });
      return Response.json(
        { ok: false, code: "delivery_failed" },
        { status: 502 },
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact delivery request failed", error);
    return Response.json(
      { ok: false, code: "delivery_failed" },
      { status: 502 },
    );
  }
}
