const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='h-full bg-gradient-to-b from-black to-blue-950 overflow-auto bg-no-repeat bg-fixed'>
      <div className='mx-auto max-w-screen-xl h-full w-full'>{children}</div>
    </main>
  )
}

export default LandingLayout
