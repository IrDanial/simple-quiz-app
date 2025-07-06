import type { CollectionConfig } from 'payload'

export const Schedules: CollectionConfig = {
  slug: 'schedules',
  // access: {
  //   read: () => true,
  // },
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
      name: 'Date',
      type: 'date',
      required: true,
    },
  ],
  //   upload: true,
}
