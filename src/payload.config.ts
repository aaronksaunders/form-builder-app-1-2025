// storage-adapter-import-placeholder
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { payloadCloudPlugin } from '@payloadcms/payload-cloud'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { formBuilderPlugin } from '@payloadcms/plugin-form-builder'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    payloadCloudPlugin(),
    formBuilderPlugin({
      formOverrides: {
        fields: ({ defaultFields }) => {
          return [
            ...defaultFields,
            {
              name: 'hasAttachment',
              type: 'checkbox',
            },
            {
              name: 'hasAttachmentLabel',
              type: 'text',
            },
          ]
        },
      },
      formSubmissionOverrides: {
        fields: ({ defaultFields }) => {
          return [
            ...defaultFields,
            {
              name: 'file',
              type: 'upload',
              relationTo: 'media',
              admin: {
                allowCreate: true,
                allowEdit: true,
              },
            },
          ]
        },
      },
    }),
    // storage-adapter-placeholder
  ],
})
