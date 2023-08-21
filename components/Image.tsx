export const ImageFeature = () => {
  return (
    <div className='image-feature bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-850 shadow-xl border-2 hover:border-blue-400 dark:hover:border-indigo-400 rounded-xl lg:m-12 m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 overflow-hidden'>
      <div className='image-feature__content px-4 py-4 lg:px-10 lg:py-10 space-y-4 lg:space-y-8'>
        <header className='image-feature__header mb-4 lg:mb-8'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-indigo-400 dark:to-blue-500'>
            <span className='inline-block hover:bg-blue-500 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-white transition-colors duration-300 ease-in-out rounded-md px-1 py-1'>
              Elevate Your Image Creations
            </span>
            with AI
          </h2>
        </header>

        <ul className='grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 text-gray-700 dark:text-gray-300'>
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
            <li
              key={index}
              className='image-feature__item flex items-start space-x-2 lg:space-x-4'
            >
              <span className='image-feature__item-icon text-2xl lg:text-3xl'>
                {feature.icon}
              </span>
              <div>
                <h3 className='image-feature__item-title text-sm lg:text-md font-semibold text-blue-600 dark:text-indigo-500 mb-1 lg:mb-2'>
                  {feature.title}
                </h3>
                <p className='image-feature__item-description text-xs lg:text-sm text-gray-600 dark:text-gray-400'>
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
