// Import necessary types and functions
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import MultipleChoiceOptions from '@/components/MultipleChoiceOptions'

interface QuizPageProps {
  params: {
    id: string
  }
}

async function fetchQuizById(id: string) {
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

  console.log(quiz)

  return (
    <div className="container mx-auto p-6 flex flex-col gap-y-4">
      <h1 className="text-4xl font-bold mb-4">{quiz.title}</h1>
      <h1 className="text-4xl font-bold mb-4">{quiz.subject}</h1>
      <RichText data={quiz.question} />
      <MultipleChoiceOptions answer={quiz.answer} />
    </div>
  )
}
