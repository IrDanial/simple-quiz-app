import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Multichoice } from '@/payload-types'
// import { notFound } from 'next/navigation'

interface QuizPageProps {
  params: {
    id: string
  }
}

async function fetchQuizById(id: string): Promise<Multichoice | null> {
  try {
    const payload = await getPayload({ config: configPromise })
    const quiz = await payload.findById({
      collection: 'multichoices',
      id: id,
    })

    return quiz
  } catch (error) {
    console.error('Error fetching quiz:', error)
    return null
  }
}

export default 