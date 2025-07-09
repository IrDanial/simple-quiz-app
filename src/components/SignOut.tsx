'use client'

import { signOut } from '@/app/actions/signOut'
import { Button } from './ui/button'
import { User } from '@/payload-types'
import { useRouter } from 'next/navigation'

export default function SignOut(props: { user: User }) {
  const router = useRouter()
  return (
    <div className="flex-col flex">
      <p>{props.user.email}</p>{' '}
      <Button
        onClick={async () => {
          await signOut()
          router.refresh()
        }}
      >
        Sign Out
      </Button>
    </div>
  )
}
