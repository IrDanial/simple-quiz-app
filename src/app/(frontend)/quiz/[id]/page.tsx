// Import necessary types and functions
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Multichoice } from '@/payload-types'
import { notFound } from 'next/navigation'

interface QuizPageProps {
  params: {
    id: string
  }
}

async function fetchQuizById(id: string): Promise<Omit<Multichoice, 'question'> | null> {
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
      select: {
        id: true,
        title: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    if (quizData.docs.length === 0) {
      return null
    }

    return quizData.docs[0]
  } catch (error) {
    console.error('Error fetching quiz by ID:', error)
    return null
  }
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { id } = params
  const quiz = await fetchQuizById(id)

  if (!quiz) {
    return notFound()
  }

  return (
    <html>
      <body>
        <div className="container mx-auto p-6">
          {/* <h1 className="text-4xl font-bold mb-4">{quiz.title}</h1> */}
          <h1 className="text-4xl font-bold mb-4">{quiz.subject}</h1>
          <h1 className="text-4xl font-bold mb-4">{quiz.id}</h1>
          <p className="text-lg text-muted-foreground mb-8">Test</p>
        </div>
      </body>
    </html>
  )
}
