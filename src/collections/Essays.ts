import type { CollectionConfig } from 'payload'

export const Essays: CollectionConfig = {
  slug: 'essays',
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
      name: 'answer',
      type: 'textarea',
      defaultValue: 'undefined',
      // required: true,
    },
  ],
  //   upload: true,
}
