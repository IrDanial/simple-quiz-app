import React from 'react'
import { headers as nextHeaders } from 'next/headers'
import { getPayload } from 'payload'
import config from '@payload-config'
import { email } from 'payload/shared'
import { Button } from '@/components/ui/button'
import { signOut } from '../actions/signOut'
import SignOut from '@/components/SignOut'

// import '../globals.css'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const headers = await nextHeaders()
  const result = await payload.auth({ headers, canSetHeaders: false })

  if (result.user) {
    return <SignOut user={result.user}></SignOut>
  }

  return <p>Home</p>
}
