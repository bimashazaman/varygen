'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ModeToggle'

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth()

  return (
    <nav className='p-4 bg-transparent flex items-center justify-between'>
      <Link href='/'>
        <div className='flex items-center'>
          <div className='relative h-20 w-20 mr-4 animate-bounce hover:animate-none'>
            <Image fill alt='Logo' src='/logo/logo.png' />
          </div>
          <h1
            className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400
 dark:from-blue-400 dark:to-indigo-600 hidden lg:flex'
          >
            VaryGen
          </h1>
        </div>
      </Link>
      <div className='flex items-center gap-x-2'>
        <div className='px-5'>
          <ModeToggle />
        </div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
            variant='outline'
            className='transition-transform transform hover:scale-105 active:scale-100 rounded-full lg:px-8 px-3 py-3 border-2 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 dark:border-gray-400 shadow-md'
          >
            <span className='mr-3'>Get Started</span>
            <span className='relative flex h-5 w-5'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-5 w-5 bg-indigo-500'></span>
            </span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}
