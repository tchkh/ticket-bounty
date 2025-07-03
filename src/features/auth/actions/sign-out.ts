'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { lucia } from '@/lib/lucia'
import { signInPath } from '@/paths'
import { getAuth } from '../queries/get-auth'

export const signOut = async () => {
  const authResult = await getAuth()
  const session = 'session' in authResult ? authResult.session : null

  if (!session) {
    redirect(signInPath())
  }

  await lucia.invalidateSession(session.id)

  const sessionCookie = lucia.createBlankSessionCookie()

  ;(await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  redirect(signInPath())
}
