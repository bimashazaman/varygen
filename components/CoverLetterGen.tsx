export const CoverLetterGen = () => {
  return (
    <div className='bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-850 shadow-xl border-2 hover:border-purple-400 dark:hover:border-blue-400 rounded-xl lg:m-12 m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden'>
      <div className='px-4 py-4 lg:px-10 lg:py-10 space-y-4 lg:space-y-8'>
        <header className='mb-4 lg:mb-8'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-600 dark:from-purple-400 dark:to-blue-500'>
            <span className='inline-block hover:bg-purple-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-white transition-colors duration-300 ease-in-out rounded-md px-1 py-1'>
              Craft Your Perfect Cover Letter
            </span>
            <br className='hidden md:block' />
            with AI
          </h2>
        </header>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 text-gray-700 dark:text-gray-300'>
          {/* Key Benefits with Icons */}
          {[
            {
              title: 'Tailored For You',
              description:
                'Generate cover letters specifically tailored to your needs.',
              icon: '📝',
            },
            {
              title: 'AI-powered Insights',
              description:
                'Leverage AI insights to craft compelling narratives.',
              icon: '🤖',
            },
            {
              title: 'Quick Turnaround',
              description: 'Get your cover letter ready in seconds.',
              icon: '⏲️',
            },
            {
              title: 'Limitless Edits',
              description: 'Generate and edit as many versions as you like.',
              icon: '🔄',
            },
          ].map((feature, index) => (
            <li key={index} className='flex items-start space-x-2 lg:space-x-4'>
              <span className='text-2xl lg:text-3xl'>{feature.icon}</span>
              <div>
                <h3 className='text-sm lg:text-md font-semibold text-purple-600 dark:text-blue-500 mb-1 lg:mb-2'>
                  {feature.title}
                </h3>
                <p className='text-xs lg:text-sm text-gray-600 dark:text-gray-400'>
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

export default CoverLetterGen
