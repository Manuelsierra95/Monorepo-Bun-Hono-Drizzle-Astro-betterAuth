import { clientEnv } from 'env/client'
import { getRequestHeaders } from '@/lib/api/request-context'

export async function apiFetch<T>(path: string, options: RequestInit = {}) {
  const headers = getRequestHeaders()
  const cookie = headers?.get('cookie')

  const res = await fetch(`${clientEnv.PUBLIC_API_URI}${path}`, {
    credentials: 'include',
    headers: cookie ? { cookie } : {},
    ...options,
  })

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`)
  }

  return res.json() as Promise<T>
}
