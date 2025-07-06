import type { CollectionConfig } from 'payload'

export const Teachers: CollectionConfig = {
  slug: 'teachers',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'richText',
      required: true,
    },
  ],
  //   upload: true,
}
