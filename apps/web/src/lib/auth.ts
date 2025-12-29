import { createAuthClient } from 'better-auth/client'
import { clientEnv } from 'env/client'
import { apiFetch } from '@/lib/api/client'

const CALLBACKURL = clientEnv.PUBLIC_FRONTEND_URI
const AUTHURL = clientEnv.PUBLIC_API_URI + '/auth'

export const authClient: any = createAuthClient({
  baseURL: AUTHURL,
  credentials: 'include',
})

export const signInWithGoogle = async () =>
  await authClient.signIn.social({
    provider: 'google',
    callbackURL: CALLBACKURL,
  })

export const signInWithCredentials = async (email: string, password: string) =>
  await authClient.signIn.email({
    email,
    password,
    callbackURL: CALLBACKURL,
  })

export const getSession = async () => {
  return await apiFetch('/auth/get-session')
}

export const signOut = async () => {
  await authClient.signOut({
    callbackURL: CALLBACKURL,
  })
}
