'use client'

import TypewriterComponent from 'typewriter-effect'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'

export const LandingHero = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className='text-gray-800 font-bold lg:py-36 py-24 space-y-5 flex flex-col lg:flex-row items-center lg:items-start'>
      <div className='w-full text-center lg:text-left'>
        <div className='space-y-5 font-extrabold text-4xl md:text-4xl lg:text-6xl'>
          <h1 className='text-gray-900 dark:text-gray-100'>
            Build. Grow. Scale.
          </h1>
          <div className='bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent text-2xl md:text-3xl lg:text-5xl'>
            <TypewriterComponent
              options={{
                strings: [
                  'with custom software solutions',
                  'with innovative web experiences',
                  'with seamless system integrations',
                  'with scalable digital platforms',
                  'with cutting-edge technology',
                  'with modern, intuitive design',
                  'with robust, secure applications',
                  'with powerful, efficient tools',
                  'with user-centric interfaces',
                  'with responsive, adaptive layouts',
                  'with engaging, dynamic content',
                ],
                autoStart: true,
                loop: true,
                delay: 50,
              }}
            />
          </div>
        </div>

        <div className='mt-8 flex justify-center lg:justify-start'>
          <Link href='#contact-us' passHref>
            <Button
              variant='premium'
              className='text-base md:text-lg p-3 md:p-4 lg:p-6 rounded-full font-semibold bg-indigo-100 hover:bg-indigo-200 dark:text-white'
            >
              Get started with us
            </Button>
          </Link>
        </div>
      </div>

      <div className='hidden lg:block w-[60%]'></div>
      {/* Optional Note */}
      {/* <div className="text-gray-500 dark:text-gray-300 text-xs md:text-sm font-normal">
        No credit card required.
      </div> */}
    </div>
  )
}
