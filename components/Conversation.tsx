export const Conversation = () => {
  return (
    <div className='  bg-gradient-to-b from-gray-200/10 to-pink-100 dark:from-gray-900 dark:to-gray-850 shadow hover:border-1 hover:border-pink-400 dark:hover:border-gray-500 rounded-3xl lg:m-8 m-4'>
      <div className='  gap-4'>
        <div>
          <video controls muted playsInline preload='metadata'>
            <source src='/conversation.mp4' type='video/mp4' />
          </video>
        </div>

        <div className='lg:px-6 px-1 pt-4'>
          <div className='px-6 pt-4'>
            <h2 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r dark:from-yellow-300 dark:to-yellow-500 from-blue-400 to-green-600'>
              Generate
              <span className='px-3 underline decoration-pink-500 hover:decoration-sky-600 underline-offset-8 dark:text-indigo-400'>
                Conversations
              </span>
              with AI
            </h2>
            <ul className='list-disc list-inside text-base dark:text-gray-300 leading-6'>
              <li className='mb-6 text-gray-800 dark:text-gray-200/70 font-medium'>
                <span className='pr-2 dark:text-green-400 text-green-700 font-bold'>
                  Innovative Text Generation:
                </span>
                Our AI model creates content that is contextually relevant and
                meaningful.
              </li>
              <li className='mb-6 text-gray-800 dark:text-gray-200/70 font-medium'>
                <span className='pr-2 dark:text-green-400 text-green-700 font-bold'>
                  Personalized Output:
                </span>
                Our AI tailors its text generation to your specific needs, going
                beyond standard templates.
              </li>
              <li className='mb-6 text-gray-800 dark:text-gray-200/70 font-medium'>
                <span className='pr-2 dark:text-green-400 text-green-700 font-bold'>
                  AI-Powered Excellence:
                </span>
                We harness artificial intelligence to revolutionize the way you
                generate and convert text.
              </li>
              <li className='mb-6 text-gray-800 dark:text-gray-200/70 font-medium'>
                <span className='pr-2 dark:text-green-400 text-green-700 font-bold'>
                  Break Content Boundaries:
                </span>
                VaryGen transforms simple text inputs into comprehensive,
                engaging outputs that deliver results.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
