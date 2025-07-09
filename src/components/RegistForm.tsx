'use client'

import type React from 'react'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Eye, EyeOff } from 'lucide-react'
import { createUser } from '@/app/actions/createUser'
import { useRouter } from 'next/navigation'
// import { getPayload } from 'payload'
// import config from '@payload-config'

export default function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false)
  // Removed showConfirmPassword state

  // const createUser = async (data: { fullname: string; email: string; password: string }) => {
  //   const payload = await getPayload({ config })

  //   try {
  //     const newUser = await payload.create({
  //       collection: 'users',
  //       data: {
  //         fullName: data.fullname,
  //         email: data.email,
  //         password: data.password,
  //       },
  //     })

  //     return {
  //       success: true,
  //       user: newUser,
  //     }
  //   } catch (error: any) {
  //     return {
  //       success: false,
  //       error: error.message,
  //     }
  //   }
  // }

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(e.target as HTMLFormElement)
    const data = {
      fullname: formData.get('fullName') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
      //   termsAccepted: formData.get('terms') === 'on',
    }

    await createUser(data)

    router.replace('/')

    // // Log the form data
    // console.log('Registration Form Data:', data)
    // console.log('Full Name:', data.fullname)
    // console.log('Email:', data.email)
    // console.log('Password Length:', data.password.length)
    // // console.log('Terms Accepted:', data.termsAccepted)

    // // You can also log as a formatted table for better readability
    // console.table(data)
    // ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">Create Account</CardTitle>
          <CardDescription className="text-center">
            Enter your information to create your account
          </CardDescription>
        </CardHeader>
        <form id="form" onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" name="fullName" placeholder="John Doe" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">
                    {showPassword ? 'Hide password' : 'Show password'}
                  </span>
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" required />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the{' '}
                <a href="#" className="text-primary underline hover:no-underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-primary underline hover:no-underline">
                  Privacy Policy
                </a>
              </Label>
            </div>
          </CardContent>

          <CardFooter className="flex flex-col space-y-4">
            <Button id="button" type="submit" className="w-full">
              Create Account
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <a href="#" className="text-primary underline hover:no-underline">
                Sign in
              </a>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
