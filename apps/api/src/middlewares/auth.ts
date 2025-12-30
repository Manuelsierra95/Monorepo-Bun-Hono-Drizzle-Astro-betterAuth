import honoFactory from '@/hono-factory'

/**
 * Middleware to protect routes that require authentication
 * Checks that the user has an active session
 */
export const requireAuth = honoFactory.createMiddleware(async (c, next) => {
  const user = c.get('user')
  const session = c.get('session')

  if (!user || !session) {
    return c.json(
      {
        success: false,
        error: 'Not authenticated',
        message: 'You must log in to access this resource',
      },
      401
    )
  }

  await next()
})
