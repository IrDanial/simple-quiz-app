import type { CollectionConfig } from 'payload'

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
  ],
}
