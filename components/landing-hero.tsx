'use client'

import TypewriterComponent from 'typewriter-effect'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'

export const LandingHero = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className='text-gray-800 font-bold lg:py-36 py-24  space-y-5 flex'>
      <div className=' w-full'>
        <div className=' sm:text-xl md:text-6xl space-y-5 font-extrabold '>
          <h1 className='text-gray-900 dark:text-gray-100'>
            Build. Grow. Scale.
          </h1>
          <div className='text-transparent bg-clip-text sm:text-xl md:text-4xl bg-gradient-to-r from-purple-400 to-pink-600'>
            <TypewriterComponent
              options={{
                strings: [
                  'with custom software',
                  'with innovative websites',
                  'with seamless integrations',
                  'with scalable solutions',
                  'with cutting-edge technology',
                  'with modern design',
                  'with robust applications',
                  'with powerful tools',
                  'with user-friendly interfaces',
                  'with responsive layouts',
                  'with dynamic content',
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </div>
        </div>

        <br />
        <div className='my-6'>
          <Link href='#contact-us' passHref>
            <Button
              variant='premium'
              className='md:text-lg p-4 md:p-6 rounded-full font-semibold bg-indigo-100 hover:bg-indigo-200 dark:text-white'
            >
              Get started with us
            </Button>
          </Link>
        </div>
      </div>

      <div className='w-[60%] '></div>
      {/* <div className="text-gray-500 dark:text-gray-300 text-xs md:text-sm font-normal">
        No credit card required.
      </div> */}
    </div>
  )
}
