const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main
      className='h-full bg-gradient-to-b from-pink-100 to-yellow-100 dark:from-black dark:to-blue-950 
    overflow-auto bg-no-repeat bg-fixed dark:text-white'
    >
      <div className='mx-auto max-w-screen-xl h-full w-full'>{children}</div>
    </main>
  )
}

export default LandingLayout
