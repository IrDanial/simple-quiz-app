'use client'

import React from 'react'
// Assuming your User type and SignOut component are in these locations
import { User } from '@/payload-types'
import Link from 'next/link'
import { Button } from './ui/button'
import { signOut } from '@/app/actions/signOut'
import { useRouter } from 'next/navigation'

// SVG component for the Home icon
const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="mr-2 h-5 w-5"
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
)

/**
 * @param {{ user: User }} props - The props for the component, including the user object.
 * @returns {JSX.Element} The rendered navbar component.
 */
const Navbar = () => {
  const router = useRouter()
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="inline-flex items-center px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-colors duration-200"
              aria-label="Home"
            >
              <HomeIcon />
              <span className="hidden sm:inline">Home</span>
            </Link>
          </div>

          <div className="flex items-center">
            <Button
              onClick={async () => {
                await signOut()
                router.refresh()
              }}
            >
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
