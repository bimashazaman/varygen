import Link from 'next/link'

export const ImageFeature = () => {
  return (
    <div className='px-10 pb-20 mt-14 '>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='px-4 mb:px-0 mt-1 animate-fade-in'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-indigo-300 dark:to-blue-400'>
              Generate
              <span className='px-3 underline decoration-indigo-500 hover:decoration-indigo-600 underline-offset-8 dark:decoration-blue-400 dark:hover:decoration-blue-500'>
                Images
              </span>
              with AI
            </h2>
            <ul className='list-disc list-inside text-base text-gray-700 dark:text-gray-300 leading-6'>
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='font-semibold text-blue-600 pr-2 dark:text-indigo-400'>
                  High-Resolution Image Generation:
                </span>
                Our AI model creates high-quality images that are visually
                stunning.
              </li>
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='font-semibold text-blue-600 pr-2 dark:text-indigo-400'>
                  One-Click Downloads:
                </span>
                Easily download your AI-generated images with a single click.
              </li>
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='font-semibold text-blue-600 pr-2 dark:text-indigo-400'>
                  Shatter Visual Boundaries:
                </span>
                VaryGen transforms simple image concepts into captivating
                visuals that impress your audience.
              </li>
            </ul>

            <div className='mt-8 items-center'>
              <Link
                href='/image'
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
                    bg-gradient-to-r from-blue-500 to-indigo-600
                    hover:from-blue-600 hover:to-indigo-700
                    text-white
                    dark:bg-gradient-to-r dark:from-indigo-300 dark:to-blue-400 dark:hover:from-indigo-400 dark:hover:to-blue-500
                    '
              >
                Generate Free Images
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
