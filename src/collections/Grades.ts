import type { CollectionConfig } from 'payload'

export const Grades: CollectionConfig = {
  slug: 'grades',
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'Student',
  },

  fields: [
    {
      name: 'Student',
      type: 'text',
      required: true,
    },
    {
      name: 'grade',
      type: 'number',
      required: true,
    },
  ],
  // upload: true,
}
