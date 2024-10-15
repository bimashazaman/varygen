const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className='h-[100%] min-h-full bg-gradient-to-b from-blue-200 to-green-100  dark:from-gray-900 dark:to-black  
    overflow-auto bg-no-repeat bg-fixed dark:text-white'
    >
      <div className='mx-auto max-w-screen-xl h-full w-full'>{children}</div>
    </main>
  )
}

export default LandingLayout
