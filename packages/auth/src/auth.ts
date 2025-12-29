import { betterAuth } from 'better-auth'
import type { Auth, Session, User } from 'better-auth'
import { openAPI } from 'better-auth/plugins'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import { serverEnv } from 'env/server'

import { client } from 'db'

export const auth = betterAuth({
  advanced: {
    defaultCookieAttributes: {
      sameSite: 'lax',
      secure: serverEnv.NODE_ENV === 'production' ? true : false,
      domain: serverEnv.NODE_ENV === 'production' ? '.mydomain.com' : undefined,
    },
  },
  trustedOrigins: serverEnv.ORIGINS,
  secret: serverEnv.BETTER_AUTH_SECRET,
  baseURL: serverEnv.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    google: {
      clientId: serverEnv.GOOGLE_CLIENT_ID!,
      clientSecret: serverEnv.GOOGLE_CLIENT_SECRET!,
    },
  },
  plugins: [openAPI()],
  database: drizzleAdapter(client, {
    provider: 'sqlite',
    usePlural: true,
  }),
})

export type { Auth, Session, User }
