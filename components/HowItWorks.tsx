import Link from 'next/link'
import { Button } from './ui/button'

const HowItWorks = () => {
  return (
    <section className='px-10 lg:mx-8 py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-850 rounded-xl shadow-2xl transition-transform transform hover:scale-105'>
      <h2 className='text-center text-4xl font-bold text-gray-800 dark:text-gray-100 mb-10'>
        Discover VaryGen's Simplicity
      </h2>
      <p className='text-center text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto'>
        Experience effortless elevation of your projects with VaryGen. In just a
        few intuitive steps, our cutting-edge AI brings your creative visions to
        life.
      </p>
      <div className='flex justify-center mt-12'>
        <Link href='/sign-up'>
          <Button
            className='text-xl p-5 rounded-full font-bold bg-gradient-to-r 
        from-teal-500 to-indigo-600 text-white hover:shadow-xl transition-shadow transform hover:scale-105 hover:from-teal-400 hover:to-indigo-500'
          >
            Embark on Your Free Journey
          </Button>
        </Link>
      </div>
    </section>
  )
}

export default HowItWorks
