import type { CollectionConfig } from 'payload'

export const Questions: CollectionConfig = {
  slug: 'questions',
  //   access: {
  //     read: () => true,
  //   },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
  ],
  //   upload: true,
}
