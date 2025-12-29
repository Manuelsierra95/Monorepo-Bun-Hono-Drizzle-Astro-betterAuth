import honoFactory from '@/hono-factory'
import { handleServiceResponse } from '@/handlers/responseHandler'
import { requireAuth } from '@/middlewares/auth'
import { getAllFiles } from '@/services/files'

export const filesRoutes = honoFactory
  .createApp()
  .use(requireAuth)
  .get('/all', async (c) => {
    const userId = c.get('user')!.id
    const res = await getAllFiles(userId)
    return handleServiceResponse(c, res)
  })
