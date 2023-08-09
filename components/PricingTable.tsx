const PricingTable = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      features: ['Generate 5 AI Features', 'Community Support'],
    },
    {
      name: 'Pro',
      price: '$20',
      features: [
        'Generate Unlimited AI Features',
        'Access to Advanced AI Models',
        'Priority Email Support',
        'No Rate Limiting',
      ],
    },
  ]

  return (
    <>
      <h2 className='text-center text-4xl dark:text-white font-bold mb-10 text-gray-800'>
        Pricing
      </h2>
      <div className='flex justify-center mt-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl'>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className='bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-blue-950 shadow-xl p-6 rounded-lg border-2 border-gray-200 dark:border-indigo-800 transform hover:scale-105 transition-transform duration-300'
            >
              <h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100'>
                {plan.name}
              </h3>
              <h4 className='text-4xl font-bold mb-5 text-indigo-600 dark:text-indigo-400'>
                {plan.price}
              </h4>
              <ul className='mb-5 space-y-2'>
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className='text-gray-700 dark:text-gray-300'
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <button className='w-full bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-700 dark:to-pink-700 text-white font-semibold py-2 rounded-full shadow-md hover:shadow-lg'>
                Subscribe
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default PricingTable
