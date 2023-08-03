import { UserButton } from '@clerk/nextjs'
import { Menu } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center p-4'>
        <div className='flex items-center justify-between w-full px-4'>
          <div className='flex items-center'>
            <Menu className='w-6 h-6 text-gray-600 md:hidden' />
          </div>
          <div>
            <UserButton afterSignOutURL='/' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
