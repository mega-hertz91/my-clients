import Link from 'next/link'

import { Button } from '@/components/ui/button'

import { PageTemplate } from '../_components/'
import { HorizontalLineWithText } from '@/components/ui/horizontal-line'
import { type Metadata } from 'next'
import { FormWidget } from './widgets'

const Meta = {
  TITLE: 'Создать аккаунт',
  DESCRIPTION: 'Создание аккаунта в системе',
  ACTION_TEXT: 'Отправить заявку',
}

export const metadata: Metadata = {
  title: Meta.TITLE,
  description: Meta.DESCRIPTION,
}

export default async function SignUpPage() {
  return (
    <PageTemplate title={Meta.TITLE}>
      <FormWidget actionText={Meta.ACTION_TEXT} />
      <HorizontalLineWithText text="или" />
      <Button size="lg" variant="outline" className="w-full" nativeButton={false} render={
        <Link href="./sign-in">Войти</Link>
      } />
    </PageTemplate>
  )
}
