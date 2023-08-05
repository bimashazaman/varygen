import Navbar from '@/components/ui/navbar'
import Sidebar from '@/components/ui/sidebar'

const ConversationLayout = ({ children }: { children: React.ReactNode }) => {
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
        bg-gradient-to-b from-black to-blue-950
        text-gray-100   
        w-64
        px-4
        overflow-y-auto
        md:w-72
        md:px-8
        drop-shadow-xl
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

export default ConversationLayout
