// storage-adapter-import-placeholder
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Essays } from './collections/Essays'
import { Classroom } from './collections/Classroom'
import { Schedules } from './collections/Schedules'
import { Teachers } from './collections/Teachers'
import { Students } from './collections/Students'
import { Trials } from './collections/Trials'
import { Answers } from './collections/Answers'
import { Grades } from './collections/Grades'
import { Multichoices } from './collections/Multichoices'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Essays,
    Classroom,
    Schedules,
    Teachers,
    Students,
    Trials,
    Answers,
    Grades,
    Multichoices,
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || '',
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    // storage-adapter-placeholder
  ],
})
