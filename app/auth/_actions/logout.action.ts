'use server'

import { redirect } from 'next/navigation'

export async function logout(): Promise<never> {
  redirect('/auth/sign-in')
}
