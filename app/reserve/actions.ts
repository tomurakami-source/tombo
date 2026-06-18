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

  if (!name || !name.trim()) {
    return { success: false, error: "お名前を入力してください" };
  }
  if (!count || count < 1 || count > 6) {
    return { success: false, error: "枚数が不正です" };
  }

  const encodedName = encodeURIComponent(name.trim());
  redirect(`/reserve/complete?name=${encodedName}&count=${count}`);
}
