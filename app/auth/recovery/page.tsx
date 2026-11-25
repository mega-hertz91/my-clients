import Link from 'next/link'

import { Button } from "@/components/ui/button"
import { Form } from '@/components/form'

import { PageTemplate } from "../_components"
import { HorizontalLineWithText } from "@/components/ui/horizontal-line"
import { recovery } from '../_actions'
import { scheme } from '../_config/recovery-form.config'

export default function RecoveryPassword() {
  return (
    <PageTemplate title={scheme.title ?? ''}>
      <Form schema={scheme} action={recovery} />
      <HorizontalLineWithText text="или" />
      <ul className='flex justify-between [&>li]:w-6/12 [&>li]:text-center w-full gap-x-4'>
        <li>
          <Button render={
            <Link href="/auth/sign-in">Войти</Link>
          } variant="outline" nativeButton={false} className="w-full" />
        </li>
        <li>
          <Button render={
            <Link href="/auth/sign-up">Создать аккаунт</Link>
          } variant="outline" nativeButton={false} className="w-full" />
        </li>
      </ul>
    </PageTemplate>
  )
}
