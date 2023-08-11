interface BannerProps {
  message: string
}

export const Banner: React.FC<BannerProps> = ({ message }) => (
  <div
    className='bg-yellow-200 border-l-4 border-yellow-500 text-yellow-700 p-4 mb-6'
    role='alert'
  >
    <p className='font-bold'>Notice:</p>
    <p>{message}</p>
  </div>
)
