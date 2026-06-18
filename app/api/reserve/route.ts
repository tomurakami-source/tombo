import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const gasUrl = process.env.GAS_WEBHOOK_URL;

    if (!gasUrl) {
      return NextResponse.json({ status: "ok" });
    }

    await fetch(gasUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("API reserve error:", error);
    return NextResponse.json({ status: "ok" });
  }
}
