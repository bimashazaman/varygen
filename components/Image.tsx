import Link from 'next/link'

export const ImageFeature = () => {
  return (
    <div className='px-10 pb-20 mt-14'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        <div className='px-4 mb:px-0 mt-1 animate-fade-in'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600'>
              Generate
              <span
                className='px-3 underline  decoration-orange-500 
                hover:decoration-red-600 underline-offset-8
                '
              >
                Images
              </span>
              with AI
            </h2>
            <ul className='list-disc list-inside text-base text-gray-300 leading-6'>
              <li className='mb-6'>
                <span className='font-semibold text-yellow-500'>
                  High-Resolution Image Generation:
                </span>
                Our AI model creates high-quality images that are visually
                stunning.
              </li>
              <li className='mb-6'>
                <span className='font-semibold text-yellow-500'>
                  One-Click Downloads:
                </span>
                Easily download your AI-generated images with a single click.
              </li>

              <li className='mb-6'>
                <span className='font-semibold text-yellow-500'>
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
                    bg-gradient-to-r from-orange-400 to-red-600
                    hover:from-orange-500 hover:to-red-700
                    text-white
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
