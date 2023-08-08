'use client'

import Link from 'next/link'

export const AudioFeature = () => {
  return (
    <div className='px-10 pb-20 mt-14'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='px-4 mb:px-0 mt-1 animate-fade-in'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-600'>
              Crafting Sounds with
              <span
                className='px-3 underline  decoration-pink-500 
                hover:decoration-blue-600 underline-offset-8
                '
              >
                AI Magic
              </span>
            </h2>
            <ul className='list-disc list-inside text-base text-gray-300 leading-6'>
              <li className='mb-6'>
                <span className='font-semibold text-pink-500'>
                  Unmatched Soundscapes:
                </span>
                With Our AI, create unique, immersive soundscapes that add
                depth to your projects.
              </li>
              <li className='mb-6'>
                <span className='font-semibold text-pink-500'>
                  Hassle-Free Downloads:
                </span>
                Your AI-constructed audio files are instantly downloadable with
                just a click.
              </li>
              <li className='mb-6'>
                <span className='font-semibold text-pink-500'>
                  Precision Tuning:
                </span>
                We ensure each audio piece is fine-tuned to your exact
                preferences and project requirements.
              </li>
              <li className='mb-6'>
                <span className='font-semibold text-pink-500'>
                  AI-Accelerated Creativity:
                </span>
                Amplify your creative process with our AI-powered audio
                generation tool.
              </li>
              <li className='mb-6'>
                <span className='font-semibold text-pink-500'>
                  Elevate Your Sonic Experience:
                </span>
                VaryGen leverages AI to create captivating audio experiences
                that engage and inspire.
              </li>
            </ul>

            <div className='mt-8 items-center'>
              <Link
                href='/music'
                className='
                    inline-flex 
                    items-center
                    justify-center
                    px-5
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-full
                    bg-gradient-to-r from-pink-400 to-blue-600
                    hover:from-pink-500 hover:to-blue-700
                    text-white
                    '
              >
                Compose Your First Soundscape
              </Link>
            </div>
          </div>
        </div>
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload='metadata'
            className='w-full aspect-video mt-8 rounded-lg shadow-lg shadow-black'
          >
            <source src='/conversation.mp4' type='video/mp4' />
          </video>
        </div>
      </div>
    </div>
  )
}

export default AudioFeature
