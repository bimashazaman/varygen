export const Summurize = () => {
  return (
    <div className=' bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-850 shadow-xl border-2 hover:border-green-400 dark:hover:border-cyan-400 rounded-xl lg:m-12 m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden'>
      <div className=' px-4 py-4 lg:px-10 lg:py-10 space-y-4 lg:space-y-8'>
        <header className=' mb-4 lg:mb-8'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-cyan-600 dark:from-green-400 dark:to-cyan-500'>
            <span className='inline-block hover:bg-green-500 hover:text-green-100 dark:hover:bg-cyan-400 dark:hover:text-white transition-colors duration-300 ease-in-out rounded-md px-1 py-1'>
              Summurize your content
            </span>
            <br className='hidden md:block' />
            with AI
          </h2>
        </header>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 text-gray-700 dark:text-gray-300'>
          {/* Key Benefits with Icons */}
          {[
            {
              title: 'Summurize your content',
              description: 'Summurize your content with AI',
              icon: '🎥',
            },
            {
              title: 'Creative Summurization',
              description: 'The AI will create creative summurization for you',
              icon: '⚡',
            },
            {
              title: 'Super Fast Summurization',
              description:
                'The AI will create summurization for you in seconds',
              icon: '🚀',
            },
            {
              title: 'Unlimited Summurization',
              description: 'You can create unlimited summurization',
              icon: '🔥',
            },
          ].map((feature, index) => (
            <li
              key={index}
              className=' flex items-start space-x-2 lg:space-x-4'
            >
              <span className=' text-2xl lg:text-3xl'>{feature.icon}</span>
              <div>
                <h3 className=' text-sm lg:text-md font-semibold text-green-600 dark:text-cyan-500 mb-1 lg:mb-2'>
                  {feature.title}
                </h3>
                <p className=' text-xs lg:text-sm text-gray-600 dark:text-gray-400'>
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

export default Summurize
