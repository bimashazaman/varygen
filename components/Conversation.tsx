import Link from 'next/link'

export const Conversation = () => {
  return (
    <div className='px-10 pb-20'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
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

        <div className='px-4 mb:px-0 mt-1 animate-fade-in'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r dark:from-yellow-300 dark:to-yellow-500 from-blue-400 to-green-600'>
              Generate
              <span className='px-3 underline decoration-pink-500 hover:decoration-sky-600 underline-offset-8 dark:text-indigo-400'>
                Conversations
              </span>
              with AI
            </h2>
            <ul className='list-disc list-inside text-base dark:text-gray-300 leading-6'>
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='pr-2 dark:text-green-400 text-green-700 font-bold'>
                  Innovative Text Generation:
                </span>
                Our AI model creates content that is contextually relevant and
                meaningful.
              </li>
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='pr-2 dark:text-green-400 text-green-700 font-bold'>
                  Personalized Output:
                </span>
                Our AI tailors its text generation to your specific needs, going
                beyond standard templates.
              </li>
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='pr-2 dark:text-green-400 text-green-700 font-bold'>
                  AI-Powered Excellence:
                </span>
                We harness artificial intelligence to revolutionize the way you
                generate and convert text.
              </li>
              <li className='mb-6 text-gray-800 dark:text-gray-200 font-medium'>
                <span className='pr-2 dark:text-green-400 text-green-700 font-bold'>
                  Break Content Boundaries:
                </span>
                VaryGen transforms simple text inputs into comprehensive,
                engaging outputs that deliver results.
              </li>
            </ul>

            <div className='mt-8 items-center'>
              <Link
                href='/conversation'
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
                    bg-gradient-to-r dark:from-indigo-400 dark:to-indigo-600 from-purple-400 to-pink-600
                    hover:from-purple-500 hover:to-pink-700
                    dark:hover:from-indigo-500 dark:hover:to-indigo-700
                    text-white
                    '
              >
                Try Free Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
