import { Grade } from '@/payload-types'
import type { CollectionConfig } from 'payload'
import { BeforeChangeHook } from 'node_modules/payload/dist/collections/config/types'

const calculateTotalScore: BeforeChangeHook<Grade> = async ({ data, req }) => {
  let totalScore = 0

  // req
  // buat fungsi asinkron
  // gunakan field payload.find filter pake where

  // belajar filter di payload
  // coba fetch data answer menggunakan object payload yang ada di atas tapi filter supaya fetch answer yang disebut siblingData.answers
  // loop berdasarkan data yang difetch untuk nambah data di totalscore

  const answers = await req.payload.find({
    collection: 'answers',
    where: {
      id: {
        in: data.answers?.join(','),
      },
    },

    depth: 0,
    limit: data.answers?.length,
  })

  answers.docs.forEach((answer) => {
    if (typeof answer.score === 'number') {
      totalScore += answer.score
    }
  })

  return {
    ...data,
    totalScore,
  }
}

export const Grades: CollectionConfig = {
  slug: 'grades',
  access: {
    read: () => true,
  },
  admin: {},
  hooks: {
    beforeChange: [calculateTotalScore],
  },
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
      type: 'relationship',
      relationTo: 'answers',
      hasMany: true,
    },
    {
      name: 'totalScore',
      type: 'number',
      required: true,
      defaultValue: 0,
    },
  ],
  // upload: true,
}
