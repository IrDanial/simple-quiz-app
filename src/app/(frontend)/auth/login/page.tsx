import { authorizeUser } from '@/app/actions/AuthorizeUser'
import LoginForm from '@/components/LoginForm'
import { redirect } from 'next/navigation'
import React from 'react'

// import '../globals.css'

export default async function HomePage() {
  const result = await authorizeUser()

  if (result.user) {
    redirect('/')
  } else {
    return <LoginForm></LoginForm>
  }
}
