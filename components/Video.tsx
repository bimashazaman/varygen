import Link from 'next/link'

export const VideoFeature = () => {
  return (
    <div className='px-10 pb-20 mt-14'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        <div>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload='metadata'
            className='w-full aspect-video mt-8 rounded-lg shadow-lg dark:shadow-white'
          >
            <source src='/conversation.mp4' type='video/mp4' />
          </video>
        </div>
        <div className='px-4 mb:px-0 mt-1 animate-fade-in'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500'>
              Experience AI-Powered
              <span className='px-3 underline decoration-teal-500 hover:decoration-cyan-600 underline-offset-8 dark:decoration-teal-300 dark:hover:decoration-cyan-400'>
                Video Generation
              </span>
            </h2>
            <ul className='list-disc list-inside text-base text-gray-700 dark:text-gray-200 leading-6'>
              <li className='mb-6 font-medium'>
                <span className='font-semibold text-teal-600 dark:text-teal-400 pr-2'>
                  Next-Level Video Quality:
                </span>
                With VaryGen, experience the magic of AI as it crafts visually
                stunning and immersive videos for you.
              </li>
              <li className='mb-6 font-medium'>
                <span className='font-semibold text-teal-600 dark:text-teal-400 pr-2'>
                  Instant Downloads:
                </span>
                Say goodbye to waiting. Access and download your AI-rendered
                videos at the touch of a button.
              </li>
              <li className='mb-6 font-medium'>
                <span className='font-semibold text-teal-600 dark:text-teal-400 pr-2'>
                  Tailored to Your Needs:
                </span>
                Every video we produce is uniquely molded to your specific
                preferences and requirements.
              </li>
            </ul>

            <div className='mt-8 items-center'>
              <Link
                href='/video'
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
                    bg-gradient-to-r from-teal-500 to-cyan-600
                    hover:from-teal-600 hover:to-cyan-700
                    text-white
                    dark:bg-gradient-to-r dark:from-teal-400 dark:to-cyan-500 dark:hover:from-teal-500 dark:hover:to-cyan-600
                    '
              >
                Create Your Free First Video
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoFeature
