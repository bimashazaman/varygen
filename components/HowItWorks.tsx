import Link from 'next/link'
import { Button } from './ui/button'

const HowItWorks = () => {
  return (
    <section className='px-10 lg:mx-8 py-20 bg-gradient-to-br  dark:to-gray-850 rounded-xl shadow-2xl transition-transform transform hover:scale-105'>
      <h2 className='text-center text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10'>
        Discover the Simplicity
      </h2>
      <p className='text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto'>
        Experience all in one place. Its super easy to use. Create your account
        for free and start using it right now.
      </p>
      <div className='items-center flex justify-center mt-12'>
        <Link href='/sign-up'>
          <Button className='bg-gradient-to-br from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 dark:from-green-400 dark:to-cyan-500 dark:hover:from-green-500 dark:hover:to-cyan-600'>
            Free Sign Up
          </Button>
        </Link>
        {/* no credit card required */}
      </div>
      <div className=' text-center items-center justify-center text-gray-500 dark:text-gray-400 ml-4'>
        No credit card required
      </div>
    </section>
  )
}

export default HowItWorks
