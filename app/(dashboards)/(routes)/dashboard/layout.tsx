import Navbar from '@/components/ui/navbar'
import Sidebar from '@/components/ui/sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=' relative h-full'>
      <div
        className='
        hidden
        md:flex
        h-full
        md:flex-col
        md:fixed
        md:inset-y-0
        z-[80]
        bg-gray-900
        text-gray-100
        w-64
        px-4
        py-8
        overflow-y-auto
        md:w-72
        md:px-8
        md:py-12
        '
      >
        <div>
          <Sidebar />
        </div>
      </div>
      <div className='md:pl-72'>
        <Navbar />
        {children}
      </div>
    </div>
  )
}

export default DashboardLayout
