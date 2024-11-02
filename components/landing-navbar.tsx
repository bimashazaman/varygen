'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { ModeToggle } from '@/components/ModeToggle'

export const LandingNavbar = () => {
  const { isSignedIn } = useAuth()

  return (
    <nav className='shadow-md flex items-center justify-between transition-all duration-300 bg-blue-900/10 dark:bg-gray-900 h-24 px-3'>
      <Link href='/'>
        <div className='flex items-center cursor-pointer'>
          <div className='relative w-[18rem] h-[18rem] '>
            <Image
              src='/logo/varygen.png'
              alt='Logo'
              layout='fill'
              className='object-contain'
            />
          </div>
        </div>
      </Link>
      <div className='flex items-center gap-x-3 lg:gap-x-5'>
        {/* Mode Toggle */}
        <div className='hidden md:block'>
          <ModeToggle />
        </div>
        {/* Get Started Button */}
        {/* <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
            variant='outline'
            className='transition-transform transform hover:scale-105 active:scale-100 rounded-full lg:px-8 px-4 py-2 border-2 text-gray-800 dark:text-gray-200 dark:border-gray-500 dark:hover:bg-gray-700 hover:bg-gray-200 shadow-lg'
          >
            <span className='mr-2'>Get Started</span>
            <span className='relative flex h-4 w-4'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-4 w-4 bg-purple-600'></span>
            </span>
          </Button>
        </Link> */}
      </div>
    </nav>
  )
}
