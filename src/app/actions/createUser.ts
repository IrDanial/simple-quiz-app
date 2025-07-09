'use server'

import { getPayload } from 'payload'
import config from '@payload-config'
// import swal from 'sweetalert';

export const createUser = async (data: { fullname: string; email: string; password?: string }) => {
  const payload = await getPayload({ config })

  try {
    const newUser = await payload.create({
      collection: 'users',
      data: {
        fullName: data.fullname,
        email: data.email,
        password: data.password,
      },
    })

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
