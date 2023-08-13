import Image from 'next/image'

export const ImageFeature = () => {
  return (
    <div className='bg-gradient-to-b from-gray-200/10 to-pink-100 dark:from-gray-900 dark:to-gray-850 shadow hover:border-1 hover:border-pink-400 dark:hover:border-gray-500 rounded-3xl lg:m-8 m-4'>
      <div className=' gap-4'>
        <div>
          {/* <video
            loop
            muted
            controls
            playsInline
            preload='metadata'
            className='w-full aspect-video'
          >
            <source src='/conversation.mp4' type='video/mp4' />
          </video> */}
          <Image src={'/image.png'} alt='image' width={600} height={300} />
        </div>
        <div className='lg:px-6 px-1 pt-4 animate-fade-in'>
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
          </div>
        </div>
      </div>
    </div>
  )
}
