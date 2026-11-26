'use server'

import { redirect } from 'next/navigation'

import { FormState } from '@/lib/interfaces'
import { parseFormData, sleep } from '@/lib/utils'

import { validationSchema } from '../_config/recovery-form.schema'

export async function recovery(
  _prevState: FormState,
  formData: FormData,
): Promise<FormState> {
  await sleep(350)

  const { success, state } = parseFormData(validationSchema, formData)
  if (!success) return state

  redirect('/auth/sign-in')
}
