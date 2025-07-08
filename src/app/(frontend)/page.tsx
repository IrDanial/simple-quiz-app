import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
import { fileURLToPath } from 'url'
import { Button } from '@/components/ui/button'

import config from '@/payload.config'
import '../globals.css'
import RegistrationForm from '@/components/registration-form'

export default async function HomePage() {
  // Hanya ada di server
  const payload = await getPayload({ config })

  const res = await payload.find({
    collection: 'users',
  })

  // return res.docs.map((user) => user.email)

  return <RegistrationForm></RegistrationForm>
  // return <SignUpForm></SignUpForm>
}

/* 
TODO PR Server Action
1. Buat server action untuk nerima email, password, dan fullName lalu buat user melalui payload object (payload.create({collection: "users"}))
2. Export server action itu lalu import ke registration form
3. Di registration form, buat fungsi async yang manggil server action itu dan kirimkan input dari user sebagai argumen
4. Coba cek Payload Dashboard (/admin) jika usersnya terbuat atau tidak

// Sumber belajar:
- Next.js Server Action
- Payload CMS auth collections
*/
