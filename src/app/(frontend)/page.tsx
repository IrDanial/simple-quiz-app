import React from 'react'
// import { headers as nextHeaders } from 'next/headers'
// import { getPayload } from 'payload'
// import config from '@payload-config'
import SignOut from '@/components/SignOut'
import { authorizeUser } from '../actions/AuthorizeUser'
import { redirect } from 'next/navigation'

export default async function HomePage() {
  // const payload = await getPayload({ config })
  // const headers = await nextHeaders()
  // const result = await payload.auth({ headers, canSetHeaders: false })
  const result = await authorizeUser()

  if (result.user) {
    return <SignOut user={result.user}></SignOut>
  } else {
    redirect('/auth/login')
  }
}
