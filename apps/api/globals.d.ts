import type { DB } from 'db'
import type { DBSchema } from 'db'
import type { Auth, Session, User } from 'auth'
import type { ServerEnv } from 'env/server'

export type CustomContext = {
  Variables: {
    db: DB
    user: User | null
    session: Session | null
    auth: Auth
    env: ServerEnv
  }
}
