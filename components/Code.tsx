import Link from 'next/link'

export const CodeFeature = () => {
  return (
    <div className='px-10 pb-20 mt-14'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        <div>
          {/* Simple code example */}
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
        <div className='px-4 mb:px-0 mt-1 animate-fade-in'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
              Crafting
              <span
                className='px-3 underline  decoration-green-500 
                hover:decoration-blue-600 underline-offset-8
                '
              >
                Code
              </span>
              with AI
            </h2>
            <ul className='list-disc list-inside text-base text-gray-300 leading-6'>
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='font-semibold dark:text-green-500 text-green-600 pr-2'>
                  Efficient Code Generation:
                </span>
                VaryGens AI can help you generate clean, efficient code for your
                projects in seconds.
              </li>

              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='font-semibold dark:text-green-500 text-green-600 pr-2'>
                  Personalized to Your Needs:
                </span>
                Our AI crafts code tailored to your specific requirements and
                coding standards.
              </li>
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='font-semibold dark:text-green-500 text-green-600 pr-2'>
                  AI-Enhanced Development:
                </span>
                Supercharge your coding process with our AI-powered code
                generation capabilities.
              </li>
            </ul>

            <div className='mt-8 items-center'>
              <Link
                href='/code'
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
                    bg-gradient-to-r from-green-400 to-blue-600
                    hover:from-green-500 hover:to-blue-700
                    text-white
                    '
              >
                Generate Your First Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeFeature
