export const CodeFeature = () => {
  return (
    <div className='bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 shadow-2xl border-2 hover:border-teal-400 dark:hover:border-blue-600 rounded-xl lg:m-12 m-8 transition-transform transform hover:scale-105 overflow-hidden'>
      <div className='p-10 space-y-8'>
        <div className='flex items-center justify-between space-x-4 animate-fade-in-up'>
          {/* Title and Icon */}
          <h2 className='flex items-center text-4xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r dark:from-blue-400 dark:to-blue-600 from-teal-400 to-teal-600'>
            <svg
              className='h-10 w-10 mr-4 text-teal-500 dark:text-blue-500'
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
            <span className='px-3 py-1 hover:bg-teal-400 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 rounded-md transition-colors'>
              Elevate Projects with AI-Crafted Code
            </span>
          </h2>
        </div>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300'>
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
            <li key={index} className='flex items-start space-x-4'>
              <span className='text-3xl'>💡</span>
              <div>
                <h3 className='font-semibold text-teal-600 dark:text-blue-500 mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400'>
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Code Snippet Plate */}
        <div className='mt-8 p-6 bg-gray-900 rounded-lg relative'>
          {/* Copy Button */}
          <button className='absolute top-2 right-2 text-xs text-white bg-teal-500 hover:bg-teal-600 rounded px-2 py-1 focus:outline-none'>
            Copy
          </button>
          <pre className='text-xs text-teal-400'>
            <code>
              <span className='opacity-60'>1 | </span>
              {`function AIgeneratedCode() {`}
              <br />
              <span className='opacity-60'>2 | </span>
              {`  return 'Hello, World!';`}
              <br />
              <span className='opacity-60'>3 | </span>
              {`}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  )
}

export default CodeFeature
