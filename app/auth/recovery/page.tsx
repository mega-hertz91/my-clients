import Link from 'next/link'

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { PageTemplate } from "../_components"
import { HorizontalLineWithText } from "@/components/ui/horizontal-line"

export default async function RecoveryPassword() {
  return (
    <PageTemplate title="Восстановление пароля">
      <form>
        <FieldGroup className="pb-8">
          <Field>
            <FieldLabel htmlFor="name">Email</FieldLabel>
            <Input id="name" autoComplete="off" placeholder="example@mail.com" />
            <FieldDescription>Введите ваш email для идентификации аккаунта</FieldDescription>
          </Field>
        </FieldGroup>
        <Button size="lg" className="w-full">Отправить</Button>
      </form>
      <HorizontalLineWithText text="или" />
      <ul className='flex justify-between [&>li]:w-6/12 [&>li]:text-center w-full gap-x-4'>
        <li>
          <Button render={
            <Link href="./sign-in">Войти</Link>
          } variant="outline" nativeButton={false} className="w-full" />
        </li>
        <li>
          <Button render={
            <Link href="./sign-up">Создать аккаунт</Link>
          } nativeButton={false} className="w-full" />
        </li>
      </ul>
    </PageTemplate>
  )
}
