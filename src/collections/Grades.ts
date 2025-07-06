import type { CollectionConfig } from 'payload'

export const Grades: CollectionConfig = {
  slug: 'grades',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'birtdate',
      type: 'text',
    },
  ],
  //   upload: true,
}
