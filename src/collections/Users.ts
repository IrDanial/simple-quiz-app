import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: () => true,
    read: () => true,
  },
  auth: true,
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    // Email added by default
    // Add more fields as needed
  ],
}
