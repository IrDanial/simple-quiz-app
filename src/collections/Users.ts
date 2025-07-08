import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // SHould be object
    // camelCase
    {
      name: 'fullName',
      type: 'text',
      required: true,
    },
    // Email added by default
    // Add more fields as needed
  ],
}
