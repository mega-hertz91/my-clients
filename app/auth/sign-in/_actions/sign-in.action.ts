"use server";

import { sleep, parseFormData } from "@/lib/utils";
import { FormState } from "@/lib/interfaces";
import { validationScheme } from "../_config";
import { redirect } from "next/navigation";

export async function signIn(
  prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await sleep(350);

  const { success, state } = parseFormData(validationScheme, formData)
  if (!success) return state

  redirect('/')
}
