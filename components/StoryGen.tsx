export const StoryGen = () => {
  return (
    <div className='bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-850 shadow-xl border-2 hover:border-yellow-500 dark:hover:border-orange-500 rounded-xl lg:m-12 m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden'>
      <div className='px-4 py-4 lg:px-10 lg:py-10 space-y-4 lg:space-y-8'>
        <header className='mb-4 lg:mb-8'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-600 dark:from-yellow-400 dark:to-orange-500'>
            <span className='inline-block hover:bg-yellow-500 hover:text-white dark:hover:bg-orange-400 dark:hover:text-white transition-colors duration-300 ease-in-out rounded-md px-1 py-1'>
              Spin Tales with AI
            </span>
            <br className='hidden md:block' />
            Create Stories Instantly
          </h2>
        </header>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 text-gray-700 dark:text-gray-300'>
          {/* Key Benefits with Icons */}
          {[
            {
              title: 'Infinite Creativity',
              description:
                'Generate unique and captivating stories every time.',
              icon: '📖',
            },
            {
              title: 'Your Story, Your Way',
              description: 'Customize your story with your own ideas.',
              icon: '🎭',
            },
            {
              title: 'Language Flexibility',
              description: 'Generate stories in any language you want.',
              icon: '🌌',
            },
            {
              title: 'Add Charecters and theme',
              description: 'Add charecters and theme to your story.',
              icon: '💡',
            },
            {
              title: 'Choose your story length',
              description: 'Generate stories of any length you want.',
              icon: '📏',
            },
            {
              title: 'Easy to use',
              description: 'Just select the options and generate your story.',
              icon: '🤖',
            },
            {
              title: 'No Coding Required',
              description: 'Just select the options and generate your story.',
              icon: '🧩',
            },
            {
              title: 'Unlimited Stories',
              description: 'Generate unlimited stories.',
              icon: '🔥',
            },
          ].map((feature, index) => (
            <li key={index} className='flex items-start space-x-2 lg:space-x-4'>
              <span className='text-2xl lg:text-3xl'>{feature.icon}</span>
              <div>
                <h3 className='text-sm lg:text-md font-semibold text-yellow-600 dark:text-orange-500 mb-1 lg:mb-2'>
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

export default StoryGen
