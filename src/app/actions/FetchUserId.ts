import { getPayload } from 'payload'
import config from '@payload-config'

export default async function FetchUserId(req: any, res: any) {
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: req.headers })
  if (!user) {
    return res.status(401).json({ error: 'unauthenticated' })
  }
  const userId = user.id
  return userId
}
