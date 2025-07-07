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
      name: 'answer', // The name of the field
      type: 'select', // The field type
      required: true,
      defaultValue: 'draft',
      options: [
        // The predefined choices
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Pending Review',
          value: 'review',
        },
        {
          label: 'Published',
          value: 'published',
        },
      ],
    },
  ],
  //   upload: true,
}
