import type { CollectionConfig } from 'payload'

export const Students: CollectionConfig = {
  slug: 'students',
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
      name: 'birthdate',
      type: 'date',
      required: true,
    },
  ],
  //   upload: true,
}
