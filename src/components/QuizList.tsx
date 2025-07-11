'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Multichoice } from '@/payload-types'

interface QuizListProps {
  quizzes: Multichoice[]
}

export default function QuizList({ quizzes }: QuizListProps) {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Available Quizzes</h1>
        <p className="text-muted-foreground">Choose a quiz to test your knowledge</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <Link key={quiz.id} href={`/quiz/${quiz.id}`} className="block">
            <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-center">{quiz.title}</h3>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

// homepage diubah menjadi quiz list (fetch quizlist kemudian render)
// bikin page baru di next js yang berada di quiz/quizId (pakai konsep dynamic route segments)
// di page quizpage fetch data quiz menggunakan payload.findbyId yang dimana Id diambil dari dynamic route segment
