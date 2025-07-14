'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { cookies } from 'next/headers'
import { loginUser } from './loginUser'

export const createUser = async (data: { fullname: string; email: string; password: string }) => {
  const payload = await getPayload({ config })
  const cookieStore = await cookies()

  try {
    const newUser = await payload.create({
      collection: 'users',
      data: {
        fullName: data.fullname,
        email: data.email,
        password: data.password,
        role: 'Student',
      },
    })

    const result = await loginUser({ email: data.email, password: data.password })

    if (result.user?.token) {
      cookieStore.set('payload-token', result.user?.token)
    }

    return {
      success: true,
      user: newUser,
    }
  } catch (error: any) {
    return {
      success: false,
      error: error.message,
    }
  }
}
