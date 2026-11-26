import { FormSchema } from '@/lib/interfaces'

export const scheme: FormSchema = {
  id: 'sign-up',
  title: 'Создать аккаунт',
  fields: [
    {
      label: 'Имя пользователя',
      type: 'text',
      name: 'username',
      placeholder: 'Имя пользователя',
    },
    {
      label: 'Пароль',
      type: 'password',
      name: 'password',
      placeholder: '*******',
    },
    {
      label: 'Повторить пароль',
      type: 'password',
      name: 'confirmPassword',
      placeholder: '*******',
    },
  ],
  submitLabel: 'Отправить заявку',
}
