"use server";

import { redirect } from "next/navigation";

export type ReservationInput = {
  name: string;
  count: number;
};

export type ReservationResult =
  | { success: true }
  | { success: false; error: string };

export async function submitReservation(
  input: ReservationInput
): Promise<ReservationResult> {
  const { name, count } = input;

  if (!name.trim()) {
    return { success: false, error: "お名前を入力してください" };
  }
  if (count < 1 || count > 6) {
    return { success: false, error: "枚数が不正です" };
  }

  // GAS エンドポイントへ通知
  const gasUrl = process.env.GAS_WEBHOOK_URL;
  if (gasUrl) {
    try {
      await fetch(gasUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          count,
          date: "2026年5月24日（日）",
          venue: "新大久保 CLUB Voice",
          submittedAt: new Date().toLocaleString("ja-JP", {
            timeZone: "Asia/Tokyo",
          }),
        }),
      });
    } catch (e) {
      // 通知失敗は予約フローを止めない（ログのみ）
      console.error("GAS notification failed:", e);
    }
  }

  // 完了ページへリダイレクト（URLパラメータで名前と枚数を渡す）
  const params = new URLSearchParams({
    name: name.trim(),
    count: String(count),
  });
  redirect(`/reserve/complete?${params.toString()}`);
}
