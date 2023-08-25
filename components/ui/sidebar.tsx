'use client'

import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  Code,
  Settings,
  Newspaper,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { usePathname } from 'next/navigation'
import { FreeCounter } from '../free-counter'

export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,
}: {
  apiLimitCount: number
  isPro: boolean
}) => {
  const routes = [
    {
      name: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
      color: 'text-sky-500',
    },
    {
      name: 'Conversation',
      path: '/conversation',
      icon: MessageSquare,
      color: 'text-violet-500',
    },

    {
      name: 'Image Genaration',
      path: '/image',
      icon: ImageIcon,
      color: 'text-pink-600',
    },

    //cover letter
    {
      name: 'Cover Letter',
      path: '/letter',
      icon: Newspaper,
      color: 'text-orange-500',
    },

    {
      name: 'Code Genaration',
      path: '/code',
      icon: Code,
      color: 'text-yellow-500',
    },

    {
      name: 'Settings',
      path: '/settings',
      icon: Settings,
      color: 'text-violet-200',
    },
  ]

  const pathname = usePathname()

  return (
    <div className=' space-y-4 flex flex-col h-full  text-white'>
      <div className='  flex-1'>
        <Link href='/dashboard'>
          <div className='flex items-center space-x-4 mb-8 hover:opacity-90 transition'>
            <Image src='/logo/logo.png' alt='logo' width={60} height={60} />
            <h1 className='text-2xl font-extrabold text-white'>VaryGen</h1>
          </div>
        </Link>

        <div className='flex flex-col space-y-4'>
          {routes.map((route, index) => (
            <div
              key={index}
              className={
                'flex items-center space-x-4 hover:bg-gray-700 rounded-md p-2 cursor-pointer ' +
                (pathname === route.path ? 'bg-gray-700' : '') +
                ''
              }
            >
              <Link
                href={route.path}
                className='flex items-center space-x-4 hover:bg-gray-700 rounded-md p-2 cursor-pointer'
              >
                <route.icon className={`w-6 h-6 ${route.color}`} />
                <div className='text-sm font-medium'>{route.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
    </div>
  )
}

export default Sidebar

// author: @Bimasha Zaman
