export { cn } from "cn";
import { z, flattenError } from "zod";
import { FormState } from "@/lib/interfaces";

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

const DEFAULT_EXCLUDE = ["password", "confirmPassword", "newPassword"];

/**
 * Метод для общей валидации форм. Всегда возращает **state** и возвращает **data** (поля, прошедшие проверку) в случае успешной валидации
 * @param schema
 * @param formData
 * @param excludeFields
 * @returns
 */
export function parseFormData<T extends z.ZodRawShape>(
  schema: z.ZodObject<T>,
  formData: FormData,
  excludeFields: string[] = DEFAULT_EXCLUDE,
):
  | { success: true; state: FormState; data: z.infer<z.ZodObject<T>> }
  | { success: false; state: FormState } {
  const rawData: Record<string, unknown> = {};

  for (const key of Object.keys(schema.shape)) {
    rawData[key] = formData.get(key);
  }

  const { success, error, data } = schema.safeParse(rawData);
  const timestamp = Date.now();

  const safeValues: Record<string, string> = {};

  if (!success) {
    //TODO: оптимизировать до O(n)
    for (const [key, value] of Object.entries(rawData)) {
      if (!excludeFields.includes(key) && typeof value === "string") {
        safeValues[key] = value;
      }
    }

    return {
      success: false,
      state: {
        message: "Ошибка валидации",
        errors: flattenError(error)?.fieldErrors as Record<string, string[]>,
        values: safeValues,
        timestamp,
      },
    };
  } else {
    return {
      success: true,
      state: {
        message: "Валидация прошла успешно",
        errors: {},
        timestamp,
      },
      data,
    };
  }
}
