import type { CollectionConfig, FieldHook } from 'payload'

const selectGrade: FieldHook = async ({ data, req }) => {
  if (data && data.user && data.Question) {
    const existingGrade = await req.payload.find({
      collection: 'grades',
      where: {
        user: {
          equals: data.user,
        },
        Question: {
          equals: data.Question,
        },
      },
    })
    const firstData = existingGrade.docs[0]
    if (firstData) {
      return firstData.id
    }

    const newGrade = await req.payload.create({
      collection: 'grades',
      data: {
        user: data.user,
        Question: data.Question,
      },
    })
    return newGrade.id
  }
  return ''
}

export const Answers: CollectionConfig = {
  slug: 'answers',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'Question',
  },

  fields: [
    {
      name: 'Question',
      type: 'relationship',
      required: true,
      relationTo: 'multichoices',
    },
    {
      name: 'AnswerId',
      type: 'text',
      required: true,
    },
    {
      name: 'isCorrect',
      type: 'checkbox',
      required: true,
    },
    {
      name: 'score',
      type: 'number',
      defaultValue: 0,
      required: true,
    },
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
      name: 'grade',
      type: 'relationship',
      relationTo: 'grades',
      hooks: {
        beforeChange: [selectGrade],
      },
    },
  ],
}
