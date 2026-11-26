import { z } from 'zod'

export const validationSchema = z.object({
  login: z.email('Введите корректный email'),
})
