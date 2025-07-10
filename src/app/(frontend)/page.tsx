import React from 'react'

import SignOut from '@/components/SignOut'
import { authorizeUser } from '../actions/AuthorizeUser'
import { redirect } from 'next/navigation'
import Navbar from '@/components/Navbar'

export default async function HomePage() {
  const result = await authorizeUser()

  if (result.user) {
    return (
      <div>
        <SignOut user={result.user}></SignOut>
      </div>
    )
  } else {
    redirect('/auth/login')
  }
}
