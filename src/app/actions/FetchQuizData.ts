import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function fetchQuizById(id: string) {
  try {
    const payload = await getPayload({ config: configPromise })

    const quizData = await payload.find({
      collection: 'multichoices',
      where: {
        id: {
          equals: id,
        },
      },
      limit: 1,
    })

    if (quizData.docs.length === 0) {
      return null
    }

    return quizData.docs[0]
  } catch (error) {
    console.error(error)
    return null
  }
}
