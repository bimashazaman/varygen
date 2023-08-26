export const Conversation = () => {
  return (
    <div className='conversation bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-xl border-2 hover:border-blue-400 dark:hover:border-yellow-400 rounded-xl lg:m-12 m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden'>
      <div className='conversation__content px-4 py-4 lg:px-10 lg:py-10 space-y-4 lg:space-y-8'>
        <header className='conversation__header mb-4 lg:mb-8'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r dark:from-yellow-400 dark:to-yellow-600 from-blue-400 to-green-500'>
            <span className='inline-block hover:bg-blue-400 hover:text-white dark:hover:bg-yellow-400 dark:hover:text-gray-900 transition-colors duration-300 ease-in-out rounded-md px-1 py-1'>
              Elevate Your AI Conversations
            </span>
            Journey
          </h2>
        </header>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 text-gray-700 dark:text-gray-300'>
          {/* Key Benefits with Icons */}
          {[
            {
              title: 'Conversation AI Assistant',
              description:
                'An AI assistant that can help you with all your needs.',
              icon: '🤖',
            },
            {
              title: 'AI Virtual Assistant for All',
              description:
                'A virtual assistant that can help you with all your needs.',
              icon: '👥',
            },
            {
              title: 'Question Answering AI Assistant',
              description:
                'Ask questions and get answers from the AI assistant.',
              icon: '❓',
            },
            {
              title: 'Complicated Tasks Made Easy',
              description:
                'Simplify your life with AI-powered tools that do the work for you.',
              icon: '🚀',
            },
          ].map((feature, index) => (
            <li
              key={index}
              className='conversation__feature flex items-start space-x-2 lg:space-x-4'
            >
              <span className='conversation__feature-icon text-2xl lg:text-3xl'>
                {feature.icon}
              </span>
              <div>
                <h3 className='conversation__feature-title text-sm lg:text-md font-semibold text-blue-600 dark:text-yellow-500 mb-1 lg:mb-2'>
                  {feature.title}
                </h3>
                <p className='conversation__feature-description text-xs lg:text-sm text-gray-600 dark:text-gray-400'>
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
