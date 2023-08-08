import Link from 'next/link'
import { Button } from './ui/button'

const HowItWorks = () => {
  return (
    <div className='px-10 pb-20 mt-14'>
      <div className='text-center'>
        <h2 className='text-3xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600'>
          How VaryGen Works
        </h2>
        <p className='text-lg text-gray-300 leading-6'>
          Getting started with VaryGen is simple. Click on get started, and let
          our AI work its magic. Watch as your ideas transform into reality, all
          at the click of a button. Its that easy.
        </p>
      </div>
      <div className='flex justify-center mt-8'>
        <Link href='/sign-up'>
          <Button
            className='md:text-lg p-4 md:p-6 rounded-full font-semibold bg-gradient-to-r from-red-500 to-blue-700 
        hover:from-red-600 hover:to-blue-800 text-white'
          >
            Get Started Now
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default HowItWorks
