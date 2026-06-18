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
  try {
    const { name, count } = input;

    if (!name || !name.trim()) {
      return { success: false, error: "お名前を入力してください" };
    }
    if (!count || count < 1 || count > 6) {
      return { success: false, error: "枚数が不正です" };
    }

    const encodedName = encodeURIComponent(name.trim());
    const redirectUrl = `/reserve/complete?name=${encodedName}&count=${count}`;

    redirect(redirectUrl);
  } catch (error) {
    console.error("Reservation error:", error);
    if (error instanceof Error && error.message.includes("NEXT_REDIRECT")) {
      throw error;
    }
    return { success: false, error: "予約処理に失敗しました" };
  }
}
