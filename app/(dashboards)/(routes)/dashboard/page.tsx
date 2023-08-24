'use client'

import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'

import {
  MessageSquare,
  ArrowRight,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
} from 'lucide-react'

const tools = [
  {
    label: 'Conversation',
    icon: MessageSquare,
    color: 'text-violet-500',
    bColor: 'bg-violet-500/10',
    href: '/conversation',
  },
  {
    label: 'Image Genaration',
    icon: ImageIcon,
    color: 'text-pink-600',
    bColor: 'bg-pink-600/10',
    href: '/image',
  },

  // {
  //   label: 'Video Genaration',
  //   icon: VideoIcon,
  //   color: 'text-orange-700',
  //   bColor: 'bg-orange-700/10',
  //   href: '/video',
  // },

  // {
  //   label: 'Music Genaration',
  //   icon: Music,
  //   color: 'text-emerald-500',
  //   bColor: 'bg-emerald-500/10',
  //   href: '/music',
  // },

  {
    label: 'Code Genaration',
    icon: Code,
    color: 'text-yellow-500',
    bColor: 'bg-yellow-500/10',
    href: '/code',
  },
]

const DashboardPage = () => {
  const router = useRouter()

  return (
    <div className=' mb-8 space-y-4 px-2'>
      <h2 className=' text-2xl font-bold text-gray-600 dark:text-white mb-6 text-center md:text-4xl'>
        Explore the world of AI
      </h2>

      <div className=' text-gray-400 dark:text-gray-400 text-center max-w-2xl mx-auto'>
        VaryGen cover the most popular and useful AI tools.
      </div>

      <br />

      <div className='px-4 md:px-20 lg:px-32 space-y-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {tools.map((tool) => (
            <Card key={tool.href} onClick={() => router.push(tool.href)}>
              <div className='p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer'>
                <div className='flex items-center gap-x-4'>
                  <tool.icon
                    className={
                      'w-10 h-10 rounded-xl p-2 bg-violet-100 ' + tool.color
                    }
                  />

                  <div className='flex flex-col'>
                    <h3 className=' text-lg font-bold text-gray-600 dark:text-white'>
                      {tool.label}
                    </h3>
                  </div>
                </div>
                <ArrowRight className='w-6 h-6 text-gray-400 dark:text-gray-400' />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
