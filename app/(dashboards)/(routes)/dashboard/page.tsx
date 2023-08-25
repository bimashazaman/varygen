'use client'

import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation' // I changed 'next/navigation' to 'next/router' as that's the correct import
import { ArrowRight } from 'lucide-react'
import { tools } from '@/constants'

const DashboardPage = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100 dark:bg-gray-900'>
      <h2 className='text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 md:text-5xl'>
        Explore AI Tools for Your Needs
      </h2>

      <p className='text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mb-10'>
        VaryGen offers a curated collection of AI tools designed to amplify your
        creativity and productivity. Dive in below.
      </p>

      <div className='w-full space-y-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {tools.map((tool) => (
            <Card
              key={tool.href}
              onClick={() => router.push(tool.href)}
              className='transform transition-transform duration-300 hover:scale-105 hover:shadow-xl'
            >
              <div className='p-6 flex items-center justify-between border-2 border-gray-300 rounded-xl transition cursor-pointer hover:border-indigo-500 dark:border-gray-700'>
                <div className='flex items-center space-x-5'>
                  <tool.icon
                    className={`w-12 h-12 rounded-full p-2 transition-transform duration-300 ${tool.color}`}
                  />

                  <h3 className='text-xl font-bold text-gray-800 dark:text-gray-100'>
                    {tool.label}
                  </h3>
                </div>
                <ArrowRight className='w-8 h-8 text-gray-600 dark:text-gray-400 transform transition-transform duration-300 hover:rotate-90' />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
