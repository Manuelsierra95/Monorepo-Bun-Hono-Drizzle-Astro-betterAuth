import { createFactory } from 'hono/factory'
import type { CustomContext } from 'globals'

import { auth } from 'auth'
import { client } from 'db'
import { serverEnv } from 'env/server'

export default createFactory<CustomContext>({
  initApp: (app) => {
    app.use(async (c, next) => {
      c.set('db', client)
      await next()
    })
    app.use(async (c, next) => {
      c.set('auth', auth)
      await next()
    })
    app.use(async (c, next) => {
      c.set('env', serverEnv)
      await next()
    })
  },
})
