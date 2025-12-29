import honoFactory from '@/hono-factory'
import { auth } from 'auth'
import { logger } from 'hono/logger'
import { corsMiddleware, sessionMiddleware } from '@/middlewares'
import { filesRoutes } from '@/routes/files'

const routes = honoFactory
  .createApp()
  .use(logger())
  .use(corsMiddleware)
  .use(sessionMiddleware)
  .get('/', (c) => {
    return c.json({
      message: 'API',
      version: '1.0.0',
      endpoints: {
        files: '/files',
      },
    })
  })
  .basePath('/api')
  .on(['POST', 'GET'], '/auth/*', (c) => auth.handler(c.req.raw))
  .route('/files', filesRoutes)

export default {
  port: process.env.PORT || 3000,
  fetch: routes.fetch,
}
