import { z } from 'zod'

export const createSchema = z.object({
  username: z.string().min(3, 'Имя пользователя должно быть не менее 3 символов'),
  password: z.string().min(8, 'Пароль должен быть не менее 8 символов'),
  confirmPassword: z.string().min(8, 'Пароль должен быть не менее 8 символов'),
})

export const updateSchema = createSchema.extend({
  id: z.string(),
})

export const validationSchema = createSchema.refine(
  ({ password, confirmPassword }) => password === confirmPassword,
  {
    message: 'Пароли должны совпадать',
    path: ['confirmPassword'],
  },
)
