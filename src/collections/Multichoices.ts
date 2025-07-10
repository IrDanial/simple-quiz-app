import type { CollectionConfig } from 'payload'

export const Multichoices: CollectionConfig = {
  slug: 'multichoices',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'subject',
      type: 'text',
      required: true,
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'question',
      type: 'richText',
      required: true,
    },
    {
      name: 'answer',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'jawaban',
          type: 'text',
          required: true,
        },
        {
          name: 'isCorrect',
          type: 'checkbox',
          required: true,
        },
      ],
    },
  ],
  //   upload: true,
}
