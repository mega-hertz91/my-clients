import { FormSchema } from "@/lib/interfaces";
import { z } from 'zod'

export const scheme: FormSchema = {
  id: 'sign-in',
  title: 'Вход в аккаунт',
  fields: [
    {
      label: "Имя пользователя или email",
      type: "email",
      name: "login",
      placeholder: 'example@example.com'
    },
    {
      label: "Пароль",
      type: "password",
      name: 'password',
      placeholder: '******'
    },
  ],
  submitLabel: 'Войти'
}

export const validationScheme = z.object({
  login: z.string().min(3, 'Имя пользователя должно быть не менее 3 символов'),
  password: z.string().min(8, 'Пароль должен быть не менее 8 символов')
})
