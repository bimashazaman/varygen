import Image from 'next/image'
import Link from 'next/link'

export const CodeFeature = () => {
  return (
    <div className='bg-gradient-to-b from-gray-200/10 to-pink-100 dark:from-gray-900 dark:to-gray-850 shadow hover:border-1 hover:border-pink-400 dark:hover:border-gray-500 rounded-3xl lg:m-8 m-4'>
      <div className=' gap-4'>
        <div>
          <div>
            {/* <video
              controls
              loop
              muted
              playsInline
              preload='metadata'
              className='w-full aspect-video'
            >
              <source src='/conversation.mp4' type='video/mp4' />
            </video> */}
            <Image src={'/code.png'} alt='image' width={600} height={300} />
          </div>
        </div>
        <div className='lg:px-6 px-1 pt-4 animate-fade-in'>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeFeature
