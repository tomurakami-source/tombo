import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const gasUrl = process.env.GAS_WEBHOOK_URL;

  if (!gasUrl) {
    return NextResponse.json({ status: "ok" });
  }

  try {
    await fetch(gasUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch (error) {
    console.error("GAS notification failed:", error);
  }

  return NextResponse.json({ status: "ok" });
}
