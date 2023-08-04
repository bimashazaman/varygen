import { UserButton } from '@clerk/nextjs'
import React from 'react'
import MobileSidebar from '../mobile-sidebar'

const Navbar = () => {
  return (
    <div>
      <div className='flex items-center p-4'>
        <div className='flex items-center justify-between w-full px-5'>
          <MobileSidebar />
          <div>
            <UserButton afterSignOutURL='/' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
