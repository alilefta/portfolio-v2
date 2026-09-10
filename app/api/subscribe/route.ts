import { z } from "zod";

const subscribeSchema = z.object({ email: z.email().max(254), consent: z.string().min(1), website: z.string().max(200).optional(), locale: z.enum(["en", "ar"]).optional() });
const recentRequests = new Map<string, number[]>(); const WINDOW = 10 * 60 * 1000; const MAX = 5;
function key(request: Request) { return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown"; }
function limited(value: string) { const now = Date.now(); const current = (recentRequests.get(value) ?? []).filter((time) => now - time < WINDOW); if (current.length >= MAX) { recentRequests.set(value, current); return true; } recentRequests.set(value, [...current, now]); return false; }
function redirectResponse(request: Request, locale: string | undefined, result: string) { const url = new URL(`/${locale === "ar" ? "ar" : "en"}/blog`, request.url); url.searchParams.set("subscribe", result); url.hash = "subscribe"; return Response.redirect(url, 303); }

export async function POST(request: Request) {
  const wantsHtml = request.headers.get("accept")?.includes("text/html");
  if (request.headers.get("origin") && request.headers.get("host")) { try { if (new URL(request.headers.get("origin")!).host !== request.headers.get("host")) return Response.json({ ok: false, code: "invalid_origin" }, { status: 403 }); } catch { return Response.json({ ok: false, code: "invalid_origin" }, { status: 403 }); } }
  if (Number(request.headers.get("content-length") ?? 0) > 12_000) return Response.json({ ok: false, code: "payload_too_large" }, { status: 413 });
  let raw: Record<string, unknown>;
  try { const contentType = request.headers.get("content-type") ?? ""; if (contentType.includes("application/json")) raw = await request.json(); else raw = Object.fromEntries(await (await request.formData()).entries()); } catch { return Response.json({ ok: false, code: "invalid_request" }, { status: 400 }); }
  const parsed = subscribeSchema.safeParse(raw); if (!parsed.success || parsed.data.consent !== "yes") return Response.json({ ok: false, code: "validation_failed" }, { status: 422 });
  if (parsed.data.website) return wantsHtml ? redirectResponse(request, parsed.data.locale, "success") : Response.json({ ok: true });
  if (limited(`${key(request)}:${parsed.data.email.toLowerCase()}`)) return Response.json({ ok: false, code: "rate_limited" }, { status: 429 });
  const apiKey = process.env.RESEND_API_KEY; if (!apiKey) return wantsHtml ? redirectResponse(request, parsed.data.locale, "configuration") : Response.json({ ok: false, code: "configuration" }, { status: 503 });
  const segmentId = process.env.RESEND_SUBSCRIBER_SEGMENT_ID; const body: Record<string, unknown> = { email: parsed.data.email, unsubscribed: false }; if (segmentId) body.segments = [{ id: segmentId }];
  try { const provider = await fetch("https://api.resend.com/contacts", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": crypto.randomUUID() }, body: JSON.stringify(body), cache: "no-store" }); if (!provider.ok && provider.status !== 409) { console.error("Newsletter subscription failed", { status: provider.status }); return wantsHtml ? redirectResponse(request, parsed.data.locale, "error") : Response.json({ ok: false, code: "provider_failed" }, { status: 502 }); } return wantsHtml ? redirectResponse(request, parsed.data.locale, "success") : Response.json({ ok: true }); } catch (error) { console.error("Newsletter subscription request failed", error); return wantsHtml ? redirectResponse(request, parsed.data.locale, "error") : Response.json({ ok: false, code: "provider_failed" }, { status: 502 }); }
}
