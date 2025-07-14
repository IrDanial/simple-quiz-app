import { Grade } from '@/payload-types'
import type { CollectionConfig, FieldHook } from 'payload'

const calculateTotalScore: FieldHook<Grade, number, Grade> = async ({ data, req }) => {
  let totalScore = 0

  if (data?.answers) {
    const answers = await req.payload.find({
      collection: 'answers',
      where: {
        id: {
          in: data.answers?.docs?.join(','),
        },
      },

      depth: 0,
      limit: data.answers?.docs?.length,
      select: {
        score: true,
      },
    })

    answers.docs.forEach((answer) => {
      totalScore += answer.score
    })

    return totalScore
  }

  return 0
}

export const Grades: CollectionConfig = {
  slug: 'grades',
  access: {
    read: () => true,
  },
  admin: {},
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      filterOptions: {
        role: {
          equals: 'Student',
        },
      },
    },
    {
      name: 'Question',
      type: 'relationship',
      required: true,
      relationTo: 'multichoices',
    },
    {
      name: 'answers',
      type: 'join',
      collection: 'answers',
      on: 'grade',
    },
    {
      name: 'totalScore',
      type: 'number',
      hooks: {
        afterRead: [calculateTotalScore],
      },
      defaultValue: 0,
      virtual: true,
    },
  ],
  // upload: true,
}

/* 
1. buat afterChange hooks
2. ketika membuat grade, cek apakah grade sudah ada?
3. kalau belum ada, buat grade baru
4. kalau sudah ada, update field answers
*/
