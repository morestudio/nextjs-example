"use server";

import { delay } from "@/lib/utils";

export async function loginAction(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  console.log("login with:", data);
  const email = formData.get("email");
  const password = formData.get("password");

  return { email, password };
}

export async function loginActionParams(email: string, password: string) {
  console.log("login with params:", { email, password });

  return { email, password };
}

export async function loginActionState(
  previousState: unknown,
  formData: FormData
) {
  await delay(1000);
  const data = Object.fromEntries(formData.entries());
  console.log("login with:", data);
  const email = formData.get("email");
  const password = formData.get("password");

  return { data: { email, password }, message: "success" };
}
