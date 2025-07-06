import type { CollectionConfig } from 'payload'

export const Schedules: CollectionConfig = {
  slug: 'schedules',
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
