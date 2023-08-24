export const CodeFeature = () => {
  return (
    <div className='code-feature bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-2xl border-2 hover:border-teal-400 dark:hover:border-blue-600 rounded-xl lg:m-12 m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden'>
      <div className='code-feature__content p-4 lg:p-10 space-y-4 lg:space-y-8'>
        <div className='code-feature__header flex items-center justify-between space-x-2 lg:space-x-4 animate-fade-in-up'>
          {/* Title and Icon */}
          <h2 className='code-feature__title flex items-center text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-400 dark:to-blue-600 from-teal-400 to-teal-600'>
            <svg
              className='code-feature__icon h-8 w-8 lg:h-10 lg:w-10 mr-2 lg:mr-4 text-teal-500 dark:text-blue-500'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
              <path d='M12 14l9-5-9-5-9 5 9 5z' opacity='.1'></path>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M12 14l9-5-9-5-9 5 9 5z'
                opacity='.2'
              ></path>
              <path d='M12 20l9-5.5V10l-9-5-9 5v4.5L12 20z'></path>
            </svg>
            <span className='code-feature__text hover:bg-teal-400 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 px-2 py-1 lg:px-3 lg:py-1 rounded-md transition-colors duration-300 ease-in-out'>
              Elevate Projects with AI-Crafted Code
            </span>
          </h2>
        </div>

        <ul className='code-feature__list grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 text-gray-700 dark:text-gray-300'>
          {/* Key Benefits */}
          {[
            {
              title: 'Rapid Code Generation',
              description:
                'Streamline your workflow with AI-generated code snippets.',
            },
            {
              title: 'Precision & Personalization',
              description: 'Get code tailored to your requirements.',
            },
            {
              title: 'AI-Driven Development',
              description: 'Enhance your coding journey with AI at every step.',
            },
            {
              title: 'Adaptive Learning',
              description:
                'The AI learns your preferences for even better suggestions over time.',
            },
          ].map((feature, index) => (
            <li
              key={index}
              className='code-feature__item flex items-start space-x-2 lg:space-x-4'
            >
              <span className='code-feature__item-icon text-2xl lg:text-3xl'>
                💡
              </span>
              <div>
                <h3 className='code-feature__item-title text-sm lg:text-md font-semibold text-teal-600 dark:text-blue-500 mb-1 lg:mb-2'>
                  {feature.title}
                </h3>
                <p className='code-feature__item-description text-xs lg:text-sm text-gray-600 dark:text-gray-400'>
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Code Snippet Plate */}
        <div className='code-feature__snippet mt-4 lg:mt-8 p-4 lg:p-6 bg-gray-900 rounded-lg relative'>
          {/* Copy Button */}
          <button className='code-feature__copy-btn absolute top-2 right-2 text-xs text-white bg-teal-500 hover:bg-teal-600 rounded px-2 py-1 focus:outline-none transition-colors duration-300'>
            Copy
          </button>
          <pre className='code-feature__code-block text-xs sm:text-sm'>
            <code className='text-teal-400'>
              <span className='opacity-60'>1 | </span>
              <span className='text-teal-500'>def</span>
              {' AI_generated_code():'}
              <br />
              <span className='opacity-60'>2 | </span>
              <span className='text-white'> return</span> {'Hello, World!'}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default CodeFeature
