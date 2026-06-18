import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const gasUrl = process.env.GAS_WEBHOOK_URL;

  console.log("[reserve] gasUrl:", gasUrl ? "set" : "NOT SET");
  console.log("[reserve] body:", JSON.stringify(body));

  if (!gasUrl) {
    console.log("[reserve] GAS_WEBHOOK_URL is not set, skipping");
    return NextResponse.json({ status: "ok", note: "no gasUrl" });
  }

  try {
    const res = await fetch(gasUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    console.log("[reserve] GAS response:", res.status, text);
    return NextResponse.json({ status: "ok", gasStatus: res.status });
  } catch (error) {
    console.error("[reserve] GAS fetch error:", error);
    return NextResponse.json({ status: "ok", error: String(error) });
  }
}
