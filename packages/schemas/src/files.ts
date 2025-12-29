import { z } from 'zod'

export const FileSchema = z.object({
  id: z.string(),
  userId: z.string(),
  filename: z.string(),
  filepath: z.string(),
  filesize: z.number().int(),
  filetype: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
export type File = z.infer<typeof FileSchema>

export const insertFileSchema = z.object({
  userId: z.string().min(1, 'El user ID es requerido'),
  filename: z.string().min(1, 'El nombre del archivo es requerido'),
  filepath: z.string().min(1, 'El filepath es requerido'),
  filesize: z.number().int().min(0, 'El tamaño debe ser positivo'),
  filetype: z.string().min(1, 'El tipo de archivo es requerido'),
})
export type InsertFile = z.infer<typeof insertFileSchema>

export const updateFileSchema = z.object({
  filename: z.string().min(1, 'El nombre del archivo es requerido').optional(),
  filepath: z.string().min(1, 'El filepath es requerido').optional(),
  filesize: z.number().int().min(0, 'El tamaño debe ser positivo').optional(),
  filetype: z.string().min(1, 'El tipo de archivo es requerido').optional(),
})
export type UpdateFile = z.infer<typeof updateFileSchema>
