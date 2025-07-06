import type { CollectionConfig } from 'payload'

export const Teachers: CollectionConfig = {
  slug: 'teachers',
  // access: {
  //   read: () => true,
  // },
  admin: {
    useAsTitle: 'Name',
  },
  fields: [
    {
      name: 'Name',
      type: 'text',
      required: true,
    },
    {
      name: 'Email',
      type: 'email',
      required: true,
    },
  ],
  //   upload: true,
}
