const WhyVarygen = () => {
  return (
    <section className='why-varygen-section py-20 '>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>Why Varygen?</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
          {/* All-In-One Platform */}
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl font-semibold mb-4'>All-In-One Platform</h3>
            <p>
              Varygen is your one-stop solution for all your needs. From design
              to deployment, we offer a comprehensive suite of tools,
              streamlining your workflow.
            </p>
          </div>

          {/* Innovation */}
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl font-semibold mb-4'>Innovation</h3>
            <p>
              We constantly push the boundaries. Our team is dedicated to
              introducing groundbreaking solutions for modern challenges.
            </p>
          </div>

          {/* Quality Assurance */}
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl font-semibold mb-4'>Quality Assurance</h3>
            <p>
              Quality is at the heart of our brand. We ensure each product
              undergoes rigorous testing, ensuring reliability and excellence.
            </p>
          </div>

          {/* Unparalleled Support */}
          <div className='flex flex-col items-center'>
            <h3 className='text-2xl font-semibold mb-4'>
              Unparalleled Support
            </h3>
            <p>
              Our customer support team is here for you 24/7. Your satisfaction
              is our top priority, and we're always here to help.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyVarygen
