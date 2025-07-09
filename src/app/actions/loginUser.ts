'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
import { cookies } from 'next/headers'
// import swal from 'sweetalert';

export const loginUser = async (data: { email: string; password: string }) => {
  const payload = await getPayload({ config })
  const cookieStore = await cookies()

  try {
    const newUser = await payload.login({
      collection: 'users',
      data: {
        email: data.email,
        password: data.password,
      },
    })

    if (newUser.token) {
      cookieStore.set('payload-token', newUser.token)
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
