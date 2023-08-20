export const VideoFeature = () => {
  return (
    <div className='bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-850 shadow-xl border-2 hover:border-teal-400 dark:hover:border-cyan-400 rounded-xl lg:m-12 m-8 transition-transform transform hover:scale-105 overflow-hidden'>
      <div className='px-10 py-10 space-y-8'>
        <h2 className='text-4xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 dark:from-teal-400 dark:to-cyan-500 mb-8'>
          <span className='hover:bg-teal-500 hover:text-teal-100 dark:hover:bg-cyan-400 dark:hover:text-white rounded-md px-2 py-1 transition-colors'>
            Unlock the Future of
          </span>{' '}
          <br />
          AI Video Generation
        </h2>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300'>
          {/* Key Benefits with Icons */}
          {[
            {
              title: 'Stellar Video Quality',
              description:
                "Dive into a world where VaryGen's AI creates impeccable, audience-grabbing videos.",
              icon: '🎥',
            },
            {
              title: 'Instant Downloads',
              description:
                'Your captivating AI-rendered videos are ready at a click, no delays.',
              icon: '⚡',
            },
          ].map((feature, index) => (
            <li key={index} className='flex items-start space-x-4'>
              <span className='text-3xl'>{feature.icon}</span>
              <div>
                <h3 className='font-semibold text-teal-600 dark:text-cyan-500 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default VideoFeature
