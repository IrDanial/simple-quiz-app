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
  return <RegistrationForm></RegistrationForm>
}
