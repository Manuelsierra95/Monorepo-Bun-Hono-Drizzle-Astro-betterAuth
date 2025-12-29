import { z } from 'zod'

export const selectUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  emailVerified: z.boolean(),
  image: z.string().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
export type SelectUser = z.infer<typeof selectUserSchema>

export const insertUserSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido'),
  email: z.string().email('Email inválido'),
  emailVerified: z.boolean().optional(),
  image: z.string().optional(),
})
export type InsertUser = z.infer<typeof insertUserSchema>

export const updateUserSchema = z.object({
  name: z.string().min(1, 'El nombre es requerido').optional(),
  email: z.string().email('Email inválido').optional(),
  emailVerified: z.boolean().optional(),
  image: z.string().optional(),
})
export type UpdateUser = z.infer<typeof updateUserSchema>
