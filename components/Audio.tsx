'use client'

export const AudioFeature = () => {
  return (
    <div className='bg-gradient-to-b from-gray-200/10 to-pink-100 dark:from-gray-900 dark:to-gray-850 shadow hover:border-1 hover:border-pink-400 dark:hover:border-gray-500 rounded-3xl lg:m-8 m-4'>
      <div className=' gap-4'>
        <div>
          <video
            loop
            muted
            controls
            playsInline
            preload='metadata'
            className='w-full aspect-video'
          >
            <source src='/conversation.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='lg:px-6 px-1 pt-4 animate-fade-in'>
          <div className='px-6 pt-4'>
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
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='font-semibold text-pink-500 pr-2'>
                  Unmatched Soundscapes:
                </span>
                With Our AI, create unique, immersive soundscapes that add depth
                to your projects.
              </li>
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='font-semibold text-pink-500 pr-2'>
                  Hassle-Free Downloads:
                </span>
                Your AI-constructed audio files are instantly downloadable with
                just a click.
              </li>
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='font-semibold text-pink-500 pr-2'>
                  Precision Tuning:
                </span>
                We ensure each audio piece is fine-tuned to your exact
                preferences and project requirements.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AudioFeature
