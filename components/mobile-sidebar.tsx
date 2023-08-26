'use client'

import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Sidebar from './ui/sidebar'

export const MobileSidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number
  isPro: boolean
}) => {
  const [isMounted, setIsMounted] = useState(false)
  return (
    <Sheet>
      <SheetTrigger>
        <div className='flex items-center'>
          <Menu className='w-6 h-6 text-gray-600 md:hidden' />
        </div>
      </SheetTrigger>
      <SheetContent
        side='left'
        className='p-0  bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white'
      >
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
