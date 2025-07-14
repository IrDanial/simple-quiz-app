import { authorizeUser } from '@/app/actions/AuthorizeUser'
import { redirect } from 'next/navigation'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface QuizPageProps {
  params: {
    id: string
  }
}

export default async function Result({ params }: QuizPageProps) {
  const userID = await authorizeUser()
  const userId = userID.user?.id
  const { id } = params

  if (!userId) {
    redirect('/')
  }

  const payload = await getPayload({ config: configPromise })

  const existingGrade = await payload.find({
    collection: 'grades',
    where: {
      user: {
        equals: userId,
      },
      Question: {
        equals: id,
      },
    },
    select: {
      totalScore: true,
      answers: true,
    },
  })
  const firstData = existingGrade.docs[0]
  console.log(firstData)

  return (
    <section className="container mx-auto flex items-center justify-center h-screen flex-col gap-y-4">
      <p>totalScore: {firstData?.totalScore}</p>
      <Link href="/">
        <Button>Go to Homepage</Button>
      </Link>
    </section>
  )
}
