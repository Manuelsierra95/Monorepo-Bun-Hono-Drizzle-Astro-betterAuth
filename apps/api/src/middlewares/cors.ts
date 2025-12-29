import honoFactory from '@/hono-factory'
import { cors } from 'hono/cors'

export const corsMiddleware = honoFactory.createMiddleware(async (c, next) => {
  const { CORS_MAX_AGE: maxAge, ORIGINS: origins } = c.get('env')

  return cors({
    origin: origins,
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: [
      'Content-Type',
      'Authorization',
      'X-Requested-With',
      'Cookie',
      'Set-Cookie',
    ],
    exposeHeaders: ['Set-Cookie', 'X-CSRF-Token'],
    credentials: true,
    maxAge,
  })(c, next)
})
