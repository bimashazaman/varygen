import Image from 'next/image'

export const Conversation = () => {
  return (
    <div className='conversation bg-gradient-to-b from-gray-200/10 to-pink-100 dark:from-gray-900 dark:to-gray-850 shadow hover:border-1 hover:border-pink-400 dark:hover:border-gray-500 rounded-3xl lg:m-8 m-4'>
      <figure className='conversation__media'>
        <Image src={'/conversation.png'} alt='image' width={600} height={300} />
      </figure>

      <div className='conversation__content lg:px-6 px-1 pt-4'>
        <header className='conversation__header px-6 pt-4'>
          <h2 className='text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r dark:from-yellow-300 dark:to-yellow-500 from-blue-400 to-green-600'>
            Experience
            <span className='px-3 underline decoration-pink-500 hover:decoration-sky-600 underline-offset-8 dark:text-indigo-400'>
              AI Conversations
            </span>
            like never before
          </h2>
        </header>

        <ul className='conversation__list list-disc list-inside text-base dark:text-gray-300 leading-6'>
          <li className='mb-6 text-gray-800 dark:text-gray-200/70 font-medium'>
            <span className='highlighted-text dark:text-green-400 text-green-700 font-bold pr-2'>
              Innovative Text Generation:
            </span>
            Dive into a world where AI crafts context-rich and insightful
            content.
          </li>
          <li className='mb-6 text-gray-800 dark:text-gray-200/70 font-medium'>
            <span className='highlighted-text dark:text-green-400 text-green-700 font-bold pr-2'>
              Personalized Output:
            </span>
            Every generation is meticulously tailored to echo your unique needs.
          </li>
          <li className='mb-6 text-gray-800 dark:text-gray-200/70 font-medium'>
            <span className='highlighted-text dark:text-green-400 text-green-700 font-bold pr-2'>
              AI-Powered Excellence:
            </span>
            Experience a paradigm shift in text generation and conversion
            powered by AI.
          </li>
          <li className='mb-6 text-gray-800 dark:text-gray-200/70 font-medium'>
            <span className='highlighted-text dark:text-green-400 text-green-700 font-bold pr-2'>
              Break Content Boundaries:
            </span>
            With VaryGen, transform raw inputs into compelling narratives that
            captivate.
          </li>
        </ul>
      </div>
    </div>
  )
}
