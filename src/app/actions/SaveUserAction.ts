'use server'

import { Multichoice } from '@/payload-types'
import { getPayload } from 'payload'
import config from '@payload-config'
import { authorizeUser } from './AuthorizeUser'

export const saveUserAction = async (data: Multichoice['answer'][number], questionId: string) => {
  const userID = await authorizeUser()
  const userId = userID.user?.id
  console.log('User ID:', userId)

  if (!userId) {
    console.error('Missing answer or user ID.')
  }
  const payload = await getPayload({ config })

  const update = await payload.create({
    collection: 'answers',
    data: {
      isCorrect: data.isCorrect,
      score: data.score,
      AnswerId: data.id ?? '', // Kalau data.id null atau undefined, kita pake ""
      Question: questionId,
      user: userId,
    },
    overrideAccess: true,
  })
  return update
}
