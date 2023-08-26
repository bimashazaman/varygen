import { Facebook, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className=' mt-12 py-8'>
      <div className='container mx-auto p-6 md:p-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0'>
        {/* Links */}
        <ul className='w-full md:w-auto text-center md:text-left mb-6 md:mb-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8'>
          <li>
            <a
              href='#'
              className='hover:text-blue-300 transition-colors duration-300'
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:text-blue-300 transition-colors duration-300'
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              href='#'
              className='hover:text-blue-300 transition-colors duration-300'
            >
              Privacy Policy
            </a>
          </li>
        </ul>

        {/* Call to Action */}
        <div className='mb-6 md:mb-0'>
          <Link href='/sign-up'>
            <div className='bg-gradient-to-r from-purple-500 to-pink-600 dark:from-purple-800 dark:to-pink-500 text-white font-semibold py-2 md:py-3 rounded-md shadow-lg hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600  px-6 inline-flex items-cente transition-all duration-300'>
              Join VaryGen Today!
              <i className='fas fa-arrow-right ml-2'></i>
            </div>
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className='w-full md:w-auto text-center md:text-right space-x-6 flex'>
          <Facebook className='hover:text-blue-300 transition-colors duration-300' />

          <Linkedin className='hover:text-blue-300 transition-colors duration-300' />
          <Twitter className='hover:text-blue-300 transition-colors duration-300' />
        </div>
      </div>

      {/* Copyright */}
      <div className=' py-3 mt-8'>
        <div className='container mx-auto text-center'>
          <p>&copy; {new Date().getFullYear()} VaryGen. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
