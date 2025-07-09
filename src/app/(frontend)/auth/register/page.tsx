import { authorizeUser } from '@/app/actions/AuthorizeUser'
import RegistrationForm from '@/components/RegistForm'
import { redirect } from 'next/navigation'
import React from 'react'

// import '../globals.css'

export default async function HomePage() {
  const result = await authorizeUser()

  if (result.user) {
    redirect('/')
  } else {
    return <RegistrationForm></RegistrationForm>
  }
}
