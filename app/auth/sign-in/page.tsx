'use server'

import Link from "next/link"

import { Button } from "@/components/ui/button"

import { HorizontalLineWithText } from "@/components/ui/horizontal-line"
import { Form } from "@/components/form"

import { PageTemplate } from "../_components/"
import { scheme } from "./_config"
import { signIn } from './_actions/'


export default async function SignIngPage() {
  return (
    <PageTemplate key={ scheme.id } title={ scheme.title ? scheme.title : '' }>
      <Form schema={scheme} action={signIn} />
      <HorizontalLineWithText text="или" />
      <ul className="flex justify-between gap-x-4 [&>li]:w-6/12">
        <li> <Button size="lg" variant="outline" className="w-full" nativeButton={false} render={
          <Link href="./sign-up">Создать аккаунт</Link>
        } /></li>
        <li>
          <Button size="lg" variant="outline" className="w-full" nativeButton={false} render={
            <Link href="./recovery">Восстановить пароль</Link>
          } />
        </li>
      </ul>
    </PageTemplate>
  )
}
