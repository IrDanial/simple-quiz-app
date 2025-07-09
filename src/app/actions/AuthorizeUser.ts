'use server'

import { headers as nextHeaders } from 'next/headers'
import config from '@payload-config'
import { getPayload } from 'payload'

export const authorizeUser = async () => {
  const payload = await getPayload({ config })
  const headers = await nextHeaders()
  const result = await payload.auth({ headers, canSetHeaders: false })

  return result
}
