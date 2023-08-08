'use client'

import TypewriterComponent from 'typewriter-effect'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'

import { Button } from '@/components/ui/button'

export const LandingHero = () => {
  const { isSignedIn } = useAuth()

  return (
    <div className='text-white font-bold py-36 text-center space-y-5'>
      <div className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
        <h1>The Best AI Tool for</h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          <TypewriterComponent
            options={{
              strings: [
                'Chatbot.',
                'Photo Generation.',
                'Blog Writing.',
                'Mail Writing.',
                'Code Generation.',
                'Video Generation.',
                'Audio Generation.',
              ],
              autoStart: true,
              loop: true,

              delay: 50,
            }}
          />
        </div>
      </div>
      <div className='text-sm md:text-xl font-semibold text-zinc-400 my-4'>
        <span className='text-indigo-600'>Revolutionize</span> your content
        creation with <span className='font-bold text-purple-600'>VaryGen</span>
        , the ultimate AI-powered solution for your business.{' '}
        <span className='underline'>Supercharge your productivity</span> and
        unlock unparalleled efficiency with our advanced AI tools.
      </div>

      <div>
        <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button
            variant='premium'
            className='md:text-lg p-4 md:p-6 rounded-full font-semibold'
          >
            Start Generating For Free
          </Button>
        </Link>
      </div>
      <div className='text-zinc-400 text-xs md:text-sm font-normal'>
        No credit card required.
      </div>
    </div>
  )
}
