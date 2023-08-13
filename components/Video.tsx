import Image from 'next/image'
import Link from 'next/link'

export const VideoFeature = () => {
  return (
    <div className='bg-gradient-to-b from-gray-200/10 to-pink-100 dark:from-gray-900 dark:to-gray-850 shadow hover:border-1 hover:border-pink-400 dark:hover:border-gray-500 rounded-3xl lg:m-8 m-4'>
      <div className=' gap-4'>
        <div>
          {/* <video controls muted playsInline preload='metadata'>
            <source src='/conversation.mp4' type='video/mp4' />
          </video> */}
          <Image src={'/video.png'} alt='image' width={600} height={300} />
        </div>
        <div className='lg:px-6 px-1 pt-4 animate-fade-in'>
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoFeature
