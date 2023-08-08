import Link from 'next/link'

export const CodeFeature = () => {
  const codeString = `const greet = (name) => {
  console.log("Hello, " + name + "!");
};

greet("World");`

  return (
    <div className='px-10 pb-20 mt-14'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4'>
        <div>
          {/* Placeholder for code example or related visual element */}
          <div className='p-6 mt-8 rounded-lg shadow-lg shadow-black bg-gray-800 text-gray-200'>
            {/* Simple code example */}
            <pre>
  <code>
    <span style={{color: '#dcdcaa'}}>const</span> greet = (<span style={{color: '#9cdcfe'}}>name</span>) => {'{'}
    <br />
    <span style={{color: '#569cd6'}}>console</span>.log(<span style={{color: '#ce9178'}}>"Hello, "</span> + <span style={{color: '#9cdcfe'}}>name</span> + <span style={{color: '#ce9178'}}>"!"</span>);
    <br />
    {'}'};
    <br />
    greet(<span style={{color: '#ce9178'}}>"World"</span>);
  </code>
</pre>

          </div>
        </div>
        <div className='px-4 mb:px-0 mt-1 animate-fade-in'>
          <div className='px-6 py-4'>
            <h2 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
              Crafting
              <span
                className='px-3 underline  decoration-green-500 
                hover:decoration-blue-600 underline-offset-8
                '
              >
                Code
              </span>
              with AI
            </h2>
            <ul className='list-disc list-inside text-base text-gray-300 leading-6'>
              <li className='mb-6'>
                <span className='font-semibold text-green-500'>
                  Efficient Code Generation:
                </span>{' '}
                VaryGen's AI can help you generate clean, efficient code for
                your projects in seconds.
              </li>
              <li className='mb-6'>
                <span className='font-semibold text-green-500'>
                  Immediate Access:
                </span>{' '}
                Get your AI-generated code instantly, ready for download or
                integration.
              </li>
              <li className='mb-6'>
                <span className='font-semibold text-green-500'>
                  Personalized to Your Needs:
                </span>{' '}
                Our AI crafts code tailored to your specific requirements and
                coding standards.
              </li>
              <li className='mb-6'>
                <span className='font-semibold text-green-500'>
                  AI-Enhanced Development:
                </span>{' '}
                Supercharge your coding process with our AI-powered code
                generation capabilities.
              </li>
              <li className='mb-6'>
                <span className='font-semibold text-green-500'>
                  Break Through Complexity:
                </span>{' '}
                With VaryGen, tackle complex coding tasks with ease and
                efficiency.
              </li>
            </ul>

            <div className='mt-8 items-center'>
              <Link
                href='/code'
                className='
                    inline-flex 
                    items-center
                    justify-center
                    px-5
                    py-3
                    border border-transparent
                    text-base
                    font-medium
                    rounded-full
                    bg-gradient-to-r from-green-400 to-blue-600
                    hover:from-green-500 hover:to-blue-700
                    text-white
                    '
              >
                Generate Your First Code
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeFeature
