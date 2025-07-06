import type { CollectionConfig } from 'payload'

export const Classroom: CollectionConfig = {
  slug: 'classroom',
  //   access: {
  //     read: () => true,
  //   },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'Student Count',
      type: 'number',
      required: true,
    },
  ],
  //   upload: true,
}
