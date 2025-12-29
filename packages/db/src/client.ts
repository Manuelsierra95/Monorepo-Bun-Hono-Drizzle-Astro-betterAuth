import { drizzle } from 'drizzle-orm/bun-sqlite'
import { Database } from 'bun:sqlite'
import * as schema from '@/tables'
import { join } from 'path'

const dbPath =
  process.env.DATABASE_URL || join(import.meta.dir, '..', 'local.db')
const sqlite = new Database(dbPath, { create: true })

export const db = drizzle(sqlite, { schema })

export type DB = typeof db
export type DBSchema = typeof schema
