import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { PageTemplate } from '../_components/'
import { HorizontalLineWithText } from '@/components/ui/horizontal-line'
import { Form } from '@/components/form'
import { signUp } from '../_actions'
import { scheme } from '../_config/sign-up-form.config'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: scheme.title,
  description: 'Создание аккаунта в системе',
}

export default function SignUpPage() {
  return (
    <PageTemplate title={scheme.title ?? ''}>
      <Form schema={scheme} action={signUp} />
      <HorizontalLineWithText text="или" />
      <Button size="lg" variant="outline" className="w-full" nativeButton={false} render={
        <Link href="/auth/sign-in">Войти</Link>
      } />
    </PageTemplate>
  )
}
