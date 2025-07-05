import type { CollectionConfig } from 'payload'

export const Classroom: CollectionConfig = {
  slug: 'classroom',
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
