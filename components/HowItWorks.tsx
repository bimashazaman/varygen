import Link from 'next/link'
import { Button } from './ui/button'

const HowItWorks = () => {
  return (
    <div className='px-10 pb-20 mt-14 '>
      <br />
      <br />
      <div className='text-center'>
        <h2 className='text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 dark:from-teal-300 dark:to-indigo-400'>
          How VaryGen Works
        </h2>
        <br />
        <p className='text-lg text-gray-600 dark:text-gray-300 leading-6'>
          Getting started with VaryGen is simple. Click on get started, and let
          our AI work its magic. Watch as your ideas transform into reality, all
          at the click of a button.
        </p>
      </div>
      <div className='flex justify-center mt-8'>
        <Link href='/sign-up'>
          <Button
            className='md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-r 
        from-teal-500 to-indigo-600 text-white dark:bg-gradient-to-r  hover:from-teal-400 hover:to-indigo-500'
          >
            Get Started Free
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HowItWorks
