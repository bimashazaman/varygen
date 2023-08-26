'use client'

import { Card } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import { ArrowRight } from 'lucide-react'
import { tools } from '@/constants'

const DashboardPage = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-6 bg-gray-200 dark:bg-gray-900 transition-colors duration-500'>
      <h2 className='text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-6 md:text-5xl animate__animated animate__fadeInDown'>
        Explore AI Tools for Your Needs
      </h2>

      <p className='text-lg text-gray-600 dark:text-gray-300 text-center max-w-3xl mb-12 animate__animated animate__fadeIn'>
        VaryGen offers a curated collection of AI tools designed to amplify your
        creativity and productivity. Dive in below.
      </p>

      <div className='w-full space-y-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 animate__animated animate__fadeInUp'>
          {tools.map((tool) => (
            <Card
              key={tool.href}
              onClick={() => router.push(tool.href)}
              className='transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl'
            >
              <div className='p-6 flex items-center justify-between border-2 border-gray-300 rounded-xl transition cursor-pointer hover:border-indigo-600 dark:border-gray-700 hover:bg-indigo-50 dark:hover:bg-gray-800'>
                <div className='flex items-center space-x-5'>
                  <tool.icon
                    className={`w-12 h-12 rounded-full p-2 transition-all duration-300 ${tool.color} hover:scale-110`}
                  />

                  <h3 className='text-xl font-bold text-gray-800 dark:text-gray-100'>
                    {tool.label}
                  </h3>
                </div>
                <ArrowRight className='w-8 h-8 text-gray-600 dark:text-gray-400 transform transition-transform duration-300 hover:rotate-90 hover:text-indigo-500' />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
