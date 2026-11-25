import { FormSchema } from '@/lib/interfaces'

export const scheme: FormSchema = {
  id: 'recovery',
  title: 'Восстановление пароля',
  fields: [
    {
      label: 'Email',
      type: 'email',
      name: 'login',
      placeholder: 'example@example.com',
    },
  ],
  submitLabel: 'Восстановить пароль',
}
