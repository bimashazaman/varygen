'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth()

  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
      <Link href='/' className='flex items-center'>
        <div className='relative h-20 w-20 mr-4 animate-spin hover:animate-none'>
          <Image fill alt='Logo' src='/logo/logo.png' />
        </div>
        <h1 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-400'>
          VaryGen
        </h1>
      </Link>
      <div className='flex items-center gap-x-2'>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
            variant='outline'
            className='rounded-full px-7 py-3 text-gray-900 hover:bg-gray-100 shadow-green-300 shadow-md border-yellow-600 border-2'
          >
            <span className='mr-3'>Get Started</span>
            <span className='relative flex h-4 w-4'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-4 w-4 bg-green-500'></span>
            </span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}
