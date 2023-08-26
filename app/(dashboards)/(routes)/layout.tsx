import Navbar from '@/components/ui/navbar'
import Sidebar from '@/components/ui/sidebar'

import { checkSubscription } from '@/lib/subscription'
import { getApiLimitCount } from '@/lib/api-limit'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()
  return (
    <div className=' relative h-full'>
      <div
        className={`
    hidden md:flex h-full md:flex-col md:fixed md:inset-y-0 
    bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
    text-gray-100 w-64 px-4 overflow-y-auto md:w-72 md:px-8 drop-shadow-xl min-vh-full
  `}
      >
        <div>
          <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
        </div>
      </div>

      <div className='md:pl-72 h-[100%] bg-gradient-to-b dark:from-gray-900 dark:to-gray-800'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
