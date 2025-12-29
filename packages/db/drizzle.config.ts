import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dialect: 'sqlite',
  schema: 'src/tables/index.ts',
  out: 'drizzle/migrations',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'file:local.db',
  },
})
