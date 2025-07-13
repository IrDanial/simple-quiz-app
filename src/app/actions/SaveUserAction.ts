'use server'

import { Multichoice } from '@/payload-types'
import { getPayload } from 'payload'
import config from '@payload-config'

export const saveUserAction = async (
  data: Multichoice['answer'][number],
  questionId: string,
  userId: string,
) => {
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
  })
  return update
}
