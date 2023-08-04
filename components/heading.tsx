import { LucideIcon } from 'lucide-react'

interface HeadingProps {
  title: string
  description: string
  Icon: LucideIcon
  iconColor?: string
  iconBgColor?: string
}

const Heading = ({
  title,
  description,
  Icon,
  iconColor,
  iconBgColor,
}: HeadingProps) => {
  return (
    <>
      <div className='flex items-center space-x-4 lg:px-8 px-4 mb-5'>
        <div
          className={`flex items-center justify-center rounded-full w-12 h-12 ${iconBgColor}`}
        >
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
        <div className='flex flex-col'>
          <h3 className=' text-lg font-bold text-gray-600 dark:text-white'>
            {title}
          </h3>
          <div className=' text-gray-400 dark:text-gray-400'>{description}</div>
        </div>
      </div>
      <hr className='my-4' />
    </>
  )
}

export default Heading
