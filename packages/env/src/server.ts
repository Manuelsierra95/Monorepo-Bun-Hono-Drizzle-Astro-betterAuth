import { z } from 'zod'

const serverEnvSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  CACHE_MAX_AGE: z.coerce.number().default(3600),
  CACHE_STALE_WHILE_REVALIDATE: z.coerce.number().default(86400),
  ORIGINS: z
    .string()
    .default('http://localhost:4321')
    .transform((val) => val.split(',').map((v) => v.trim())),
  CORS_MAX_AGE: z.coerce.number().default(86400),
  BETTER_AUTH_SECRET: z.string().min(1),
  BETTER_AUTH_URL: z.string().url(),
  GOOGLE_CLIENT_ID: z.string().min(1),
  GOOGLE_CLIENT_SECRET: z.string().min(1),
})

export type ServerEnv = z.infer<typeof serverEnvSchema>

export const serverEnv = serverEnvSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  CACHE_MAX_AGE: process.env.CACHE_MAX_AGE,
  CACHE_STALE_WHILE_REVALIDATE: process.env.CACHE_STALE_WHILE_REVALIDATE,
  ORIGINS: process.env.ORIGINS,
  CORS_MAX_AGE: process.env.CORS_MAX_AGE,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
})
