'use client'

import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Sidebar from './ui/sidebar'

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <div className='flex items-center'>
          <Menu className='w-6 h-6 text-gray-600 md:hidden' />
        </div>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='p-0  bg-gradient-to-b from-black to-blue-950 text-white'
      >
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
