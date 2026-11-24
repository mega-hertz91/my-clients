import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { PageTemplate } from "../_components/"
import { HorizontalLineWithText } from "@/components/ui/horizontal-line"

export default async function SignIngPage() {
  return (
    <PageTemplate title="Вход в аккаунт">
      <form>
        <FieldSet className="mb-8">
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Имя пользователя или email</FieldLabel>
              <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
            </Field>
            <Field>
              <FieldLabel htmlFor="username" className="w-full flex justify-between">
                <span>Пароль</span>
                <Link href="./recovery" className="underline font-light">Забыли пароль?</Link>
              </FieldLabel>
              <Input id="username" autoComplete="off" type="password" placeholder="*******" />
            </Field>
          </FieldGroup>
        </FieldSet>
        <Button size="lg" className="w-full">Войти</Button>
      </form>
      <HorizontalLineWithText text="или" />
      <Button size="lg" variant="outline" className="w-full" nativeButton={false} render={
        <Link href="./sign-up">Создать аккаунт</Link>
      } />
    </PageTemplate>
  )
}
