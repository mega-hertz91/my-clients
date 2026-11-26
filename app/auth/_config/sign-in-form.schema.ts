import { z } from 'zod'

export const validationSchema = z.object({
  login: z.string().min(3, 'Имя пользователя должно быть не менее 3 символов'),
  password: z.string().min(8, 'Пароль должен быть не менее 8 символов'),
})
