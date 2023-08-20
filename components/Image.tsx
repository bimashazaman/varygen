export const ImageFeature = () => {
  return (
    <div className='bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-850 shadow-xl border-2 hover:border-blue-400 dark:hover:border-indigo-400 rounded-xl lg:m-12 m-8 transition-transform transform hover:scale-105 overflow-hidden'>
      <div className='px-10 py-10 space-y-8'>
        <h2 className='text-4xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-indigo-400 dark:to-blue-500 mb-8'>
          <span className='hover:bg-blue-500 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-white rounded-md px-2 py-1 transition-colors'>
            Elevate Your Image Creations
          </span>
          with AI
        </h2>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-300'>
          {/* Key Benefits with Icons */}
          {[
            {
              title: 'High-Resolution Output',
              description:
                'Experience AI-crafted images that are second to none in quality.',
              icon: '🖼️',
            },
            {
              title: 'One-Click Downloads',
              description:
                'Get your AI-generated visuals in a single, effortless click.',
              icon: '⬇️',
            },
          ].map((feature, index) => (
            <li key={index} className='flex items-start space-x-4'>
              <span className='text-3xl'>{feature.icon}</span>
              <div>
                <h3 className='font-semibold text-blue-600 dark:text-indigo-500 mb-2'>
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

export default ImageFeature
