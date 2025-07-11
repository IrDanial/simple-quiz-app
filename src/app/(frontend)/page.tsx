import React from 'react'

import SignOut from '@/components/SignOut'
import { authorizeUser } from '../actions/AuthorizeUser'
import { redirect } from 'next/navigation'
import QuizList from '@/components/QuizList'
// import { Multichoices } from '@/collections/Multichoices'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

async function fetchQuizzes() {
  const payload = await getPayload({ config: configPromise })

  const quizzes = await payload.find({
    collection: 'multichoices',
  })

  return quizzes.docs
}

export default async function HomePage() {
  const result = await authorizeUser()
  const quizzesData = await fetchQuizzes()
  // const myQuiz = await Multichoices.find({ subject: 'Bahasa Indonesia' })
  if (result.user) {
    return (
      <div>
        <SignOut user={result.user}></SignOut>
        <QuizList quizzes={quizzesData}></QuizList>
      </div>
    )
  } else {
    redirect('/auth/login')
  }
}
