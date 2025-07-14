import { notFound } from 'next/navigation'
import { RichText } from '@payloadcms/richtext-lexical/react'
import MultipleChoiceOptions from '@/components/MultipleChoiceOptions'
import fetchQuizById from '@/app/actions/FetchQuizData'

interface QuizPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { id } = await params
  const quiz = await fetchQuizById(id)
  // const userId = await FetchUserId(session, 'ss')

  if (!quiz) {
    return notFound()
  }

  console.log(quiz)

  return (
    <div className="container mx-auto p-6 flex flex-col gap-y-4">
      <h1 className="text-4xl font-bold mb-4">{quiz.title}</h1>
      <h1 className="text-4xl font-bold mb-4">{quiz.subject}</h1>
      <h1 className="text-4xl font-bold mb-4">{quiz.id}</h1>
      <RichText data={quiz.question} />
      <MultipleChoiceOptions answer={quiz.answer} questionId={quiz.id} />
    </div>
  )
}
