export const AudioFeature = () => {
  return (
    <div className='bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-2xl border-2 hover:border-purple-400 dark:hover:border-blue-600 rounded-xl lg:m-12 m-8 transition-transform transform hover:scale-105 overflow-hidden'>
      <div className='p-10 space-y-8'>
        <div className='animate-fade-in-up flex items-center justify-between space-x-4'>
          {/* Title and Icon */}
          <h2 className='flex items-center text-4xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-400 dark:to-blue-600 from-purple-400 to-purple-600'>
            <svg
              className='h-10 w-10 mr-4 text-purple-500 dark:text-blue-500'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M9 2v20m0 0l-5-5 5 5 5-5M9 2l5 5-5-5-5 5'></path>
            </svg>
            <span className='px-3 py-1 hover:bg-purple-400 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-md transition-colors'>
              Elevate Your Ears with AI-Crafted Sound
            </span>
          </h2>
        </div>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300'>
          {/* Key Benefits */}
          {[
            {
              title: 'Dynamic Soundscapes',
              description:
                'Delve into the art of AI-created audioscapes that breathe life into your projects.',
            },

            {
              title: 'Perfectly Tuned',
              description:
                "Soundtracks calibrated perfectly to harmonize with your project's essence.",
            },
          ].map((feature, index) => (
            <li key={index} className='flex items-start space-x-4'>
              <span className='text-3xl'>🎵</span>
              <div>
                <h3 className='font-semibold text-purple-600 dark:text-blue-500 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Audio Wave Visual */}
        <div className='mt-8 p-6 bg-gray-900 dark:bg-gray-700 rounded-lg flex items-center justify-center animate-pulse'>
          <div className='h-2 w-24 bg-purple-500 rounded-full'></div>
          <div className='h-2 w-20 bg-purple-500 rounded-full ml-2'></div>
          <div className='h-2 w-16 bg-purple-500 rounded-full ml-2'></div>
        </div>
      </div>
    </div>
  )
}

export default AudioFeature
