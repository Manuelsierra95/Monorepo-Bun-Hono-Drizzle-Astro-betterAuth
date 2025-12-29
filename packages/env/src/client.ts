import { z } from 'zod'

const clientEnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  PUBLIC_FRONTEND_URI: z.string().url().default('http://localhost:4321'),
  PUBLIC_API_URI: z.string().url().default('http://localhost:3000/api'),
})

export type ClientEnv = z.infer<typeof clientEnvSchema>

export const clientEnv = clientEnvSchema.parse({
  NODE_ENV: import.meta.env.NODE_ENV,
  PUBLIC_FRONTEND_URI: import.meta.env.PUBLIC_FRONTEND_URI,
  PUBLIC_API_URI: import.meta.env.PUBLIC_API_URI,
})
