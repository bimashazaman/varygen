'use client'

import TypewriterComponent from 'typewriter-effect'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'

export const LandingHero = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className='text-gray-800 font-bold lg:py-36 py-24 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1 className='text-gray-900 dark:text-gray-100'>
          Empower Every Moment With
        </h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          <TypewriterComponent
            options={{
              strings: [
                'Conversational AI.',
                'Text Generation.',
                'Text Summarization.',
                'Image Generation.',
                'Code Generation.',
                'Summarization.',
                'Cover Letter Generation.',
                'Content Generation.',
                'Story Generation.',
                'Resume Generation.',
                'Translation.',
                'And More...',
              ],
              autoStart: true,
              loop: true,
              delay: 50,
            }}
          />
        </div>
      </div>

      <div className='text-sm md:text-xl font-semibold text-gray-600 dark:text-gray-200/60 px-4'>
        <span className='text-purple-600 dark:text-purple-400'>
          Transform & Simplify
        </span>{' '}
        daily tasks with{' '}
        <span className='font-bold text-indigo-600 dark:text-blue-300 px-1'>
          VaryGen
        </span>
        . For businesses, for hobbies, for life.
      </div>

      <div className='my-6'>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
            variant='premium'
            className='md:text-lg p-4 md:p-6 rounded-full font-semibold bg-indigo-100 hover:bg-indigo-200 dark:text-white'
          >
            Explore Today - No Cost!
          </Button>
        </Link>
      </div>

      <div className='text-gray-500 dark:text-gray-300 text-xs md:text-sm font-normal'>
        No credit card required.
      </div>
    </div>
  )
}
