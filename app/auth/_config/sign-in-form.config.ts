import { FormSchema } from '@/lib/interfaces'

export const scheme: FormSchema = {
  id: 'sign-in',
  title: 'Вход в аккаунт',
  fields: [
    {
      label: 'Имя пользователя или email',
      type: 'text',
      name: 'login',
      placeholder: 'Имя пользователя или example@example.com',
    },
    {
      label: 'Пароль',
      type: 'password',
      name: 'password',
      placeholder: '******',
    },
  ],
  submitLabel: 'Войти',
}
