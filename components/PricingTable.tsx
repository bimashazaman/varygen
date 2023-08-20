import { PricingDeal } from './PricingDeal'
import { Testimonials } from './Testimonials'

const PricingTable: React.FC = () => {
  return (
    <div className='px-5'>
      <br />
      <h2 className='text-center text-4xl md:text-5xl dark:text-white font-bold my-8 text-gray-900'>
        Unrivaled Quality at Unbeatable Prices
      </h2>
      <p className='text-center mb-10 dark:text-gray-400 text-md md:text-lg'>
        Supercharge your work with unparalleled tools. Embrace excellence
        without emptying your pockets.
      </p>

      <PricingDeal />
      <br />
      <Testimonials />
    </div>
  )
}

export default PricingTable
