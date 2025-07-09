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
      type: 'text',
      required: true,
    },
    {
      name: 'Answer',
      type: 'text',
      required: true,
    },
  ],
}
