import { serviceWrapper } from '@/handlers/serviceWrapper'
import { eq } from 'drizzle-orm'
import { client, files } from 'db'

export async function getAllFiles(userId: string) {
  return serviceWrapper({
    operation: async () => {
      const userFiles = await client
        .select()
        .from(files)
        .where(eq(files.userId, userId))
      return userFiles
    },
    success: {
      message: 'Files retrieved successfully',
    },
    error: {
      message: 'Failed to retrieve files',
    },
    onNotFound: {
      condition: (result) => Array.isArray(result) && result.length === 0,
      message: 'No files found for the user',
      details: `The user with ID ${userId} has no files.`,
    },
  })
}
