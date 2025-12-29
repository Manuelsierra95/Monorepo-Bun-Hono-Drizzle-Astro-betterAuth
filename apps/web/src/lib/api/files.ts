import { apiFetch } from '@/lib/api/client'
import type { File } from 'schemas'

const prefix = '/files'

export async function getFiles() {
  return apiFetch<{ files: File[] }>(prefix + '/all').then((r) => r.files)
}
