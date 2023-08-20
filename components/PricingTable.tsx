import { tools } from '@/constants'
import { cn } from '@/lib/utils'
import { Banner } from './Banner'
import Link from 'next/link'

interface Tool {
  label: string
  bgColor: string
  color: string
  description: string
  icon: any
}

interface ToolCardProps {
  tool: Tool
}

// const ToolCard: React.FC<ToolCardProps> = ({ tool }) => (
//   <div
//     key={tool.label}
//     className='text-center p-4 md:p-5 lg:p-7 space-y-4 font-medium border bg-gradient-to-r from-gray-100 to-white rounded-lg shadow-lg dark:from-black dark:to-blue-980 hover:shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105'
//   >
//     <div className='flex flex-col md:flex-row items-center justify-center gap-x-4 mb-4'>
//       <div className={cn('p-3 w-fit rounded-full animate-pulse', tool.bgColor)}>
//         <tool.icon className={cn('w-6 h-6 md:w-8 md:h-8', tool.color)} />
//       </div>
//       <h3 className='font-semibold text-lg md:text-xl tracking-tight'>
//         Unlock {tool.label}
//       </h3>
//     </div>
//     <p className='text-gray-700 dark:text-gray-300 text-sm mb-6 px-4'>
//       {tool.description}
//     </p>
//   </div>
// )

const PricingDeal: React.FC = () => (
  <div className='flex justify-center mt-8'>
    <div className='bg-gradient-to-br from-gray-50 to-gray-200 dark:from-black dark:to-blue-950 shadow-lg p-4 md:p-8 rounded-xl border border-gray-200 dark:border-indigo-800 transform hover:scale-105 transition-transform duration-300'>
      <div className='my-6'>
        <span className='font-bold text-2xl md:text-3xl dark:text-gray-200'>
          Limited Time: $14.99/month!
        </span>
        <p className='text-sm dark:text-gray-400 mt-2'>
          Explore the zenith of our toolset. Transparent pricing. Freedom to
          leave anytime.
        </p>
        <p className='text-red-600 mt-2 font-semibold'>
          ⚠️ Price will increase by $200/month soon. Lock in your rate now!
        </p>
      </div>
      <Link href='/dashboard'>
        <button className='mt-4 w-full flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800 text-white font-semibold py-2 md:py-3 rounded-full shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 transition-all duration-300'>
          Claim Offer Before It is Too Late!{' '}
          <span className='ml-2 animate-bounce'>➔</span>
        </button>
      </Link>
    </div>
  </div>
)

const Testimonials: React.FC = () => (
  <div className='mt-10 py-6 px-4 bg-gradient-to-r from-gray-50 to-gray-200 dark:from-gray-900 dark:to-black rounded-xl'>
    <h4 className='text-xl md:text-2xl font-bold dark:text-gray-200'>
      What Our Users Say
    </h4>
    <p className='mt-2 italic dark:text-gray-400'>
      “I have never been more satisfied. These tools have boosted my
      productivity by 200%.” - Alex D.
    </p>
  </div>
)

const PricingTable: React.FC = () => {
  return (
    <div className='px-5'>
      <br />
      <br />

      <Banner message='Dive in risk-free: Generate 5 tasks without a dime!' />
      <br />
      <br />
      <h2 className='text-center text-4xl md:text-5xl dark:text-white font-bold my-8 text-gray-900'>
        Unrivaled Quality at Unbeatable Prices
      </h2>
      <p className='text-center mb-10 dark:text-gray-400 text-md md:text-lg'>
        Supercharge your work with unparalleled tools. Embrace excellence
        without emptying your pockets.
      </p>
      {/* <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 justify-center'>
        {tools.map((tool) => (
          <ToolCard key={tool.label} tool={tool} />
        ))}
      </div> */}
      <br />
      <br />
      <PricingDeal />
      <Testimonials />
    </div>
  )
}

export default PricingTable
