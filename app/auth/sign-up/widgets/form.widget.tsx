'use client'

import type { SyntheticEvent } from 'react'
import { useState } from 'react'
import { redirect } from 'next/navigation'

import { sleep } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'

export const FormWidget = ({ actionText }: { actionText: string }) => {
  const [isPending, setIsPending] = useState<boolean>(false)

  const onSubmit = async (e: SyntheticEvent<HTMLFormElement, Event>) => {
    e.preventDefault()
    setIsPending(true)
    const { currentTarget } = e

    await sleep(2500)
    setIsPending(false)
    currentTarget?.reset()

    redirect('./sign-in')
  }

  return (
    <form onSubmit={onSubmit}>
      <FieldSet className="mb-8">
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="name">Имя пользователя</FieldLabel>
            <Input id="name" autoComplete="off" placeholder="Evil Rabbit" />
          </Field>
          <Field>
            <FieldLabel htmlFor="username" className="w-full flex justify-between">
              <span>Пароль</span>
            </FieldLabel>
            <Input id="username" autoComplete="off" type="password" placeholder="*******" />
          </Field>
          <Field>
            <FieldLabel htmlFor="username" className="w-full flex justify-between">
              <span>Повторить пароль</span>
            </FieldLabel>
            <Input id="username" autoComplete="off" type="password" placeholder="*******" />
          </Field>
        </FieldGroup>
      </FieldSet>
      <Button size="lg" className="w-full" type="submit" disabled={isPending}>{isPending ? 'Отправка...' : actionText}</Button>
    </form>
  )
}
