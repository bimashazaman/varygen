import Link from 'next/link'

const HotDealBadge: React.FC = () => (
  <span className='absolute top-0 left-0 px-3 py-1 bg-red-600 text-white text-xs font-bold tracking-wider transform -translate-y-1/2 rounded-md'>
    HOT DEAL
  </span>
)

const PricingInfo: React.FC = () => (
  <div className='relative mb-10'>
    <HotDealBadge />
    <span className='block font-extrabold text-4xl md:text-5xl dark:text-gray-200 mb-3'>
      Only $14.99/month!
    </span>
    <p className='text-md dark:text-gray-400 mb-4'>
      Harness the pinnacle of our toolkit. Transparent, fair pricing. No strings
      attached.
    </p>
    <p className='text-red-700 text-xl font-bold'>
      ⚠️ Rates will jump to $99/month soon. Secure your discount today!
    </p>
  </div>
)

const ActionButton: React.FC = () => (
  <Link href='/dashboard' passHref>
    <button
      role='button'
      aria-label='Grab a Free Trial'
      className='w-full flex items-center justify-center bg-gradient-to-r from-purple-700 to-pink-700 dark:from-purple-900 dark:to-pink-900 text-white font-bold py-4 md:py-5 rounded-full shadow-2xl hover:shadow-3xl hover:bg-gradient-to-r hover:from-pink-700 hover:to-purple-700 transition-all duration-300'
    >
      Grab a Free Trial
      <span className='ml-4 animate-bounce text-2xl'>➔</span>
    </button>
  </Link>
)

export const PricingDeal: React.FC = () => (
  <div className='flex justify-center mt-14'>
    <div className='bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-blue-950 shadow-2xl p-8 md:p-12 rounded-2xl border border-gray-200 dark:border-indigo-800 transform hover:scale-105 transition-transform duration-300'>
      <PricingInfo />
      <ActionButton />
    </div>
  </div>
)
