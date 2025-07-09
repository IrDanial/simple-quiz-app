import React from 'react'

// import { headers as nextHeaders } from 'next/headers'
// import { getPayload } from 'payload'
// import config from '@payload-config'
import SignOut from '@/components/SignOut'
import { authorizeUser } from '../actions/AuthorizeUser'
import { redirect } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default async function HomePage() {
  const result = await authorizeUser()

  if (result.user) {
    return (
      <div>
        <Navbar user={result.user}></Navbar>
        <SignOut user={result.user}></SignOut>
      </div>
    )
  } else {
    redirect('/auth/login')
  }
}
