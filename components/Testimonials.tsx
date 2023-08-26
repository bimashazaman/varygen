const reviews = [
  {
    name: 'Ethan White',
    comment:
      'The code generator is a revelation. I was able to prototype faster and more efficiently. The code snippets it provided were spot-on and required minimal tweaking.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Amelia Wilson',
    comment:
      'As a marketing specialist, visuals are crucial for my campaigns. The image generator has allowed me to tailor graphics that resonate with my target audience.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Liam Taylor',
    comment:
      'The text generation tool is now a staple in my content strategy. It’s like having a co-writer that understands my audience’s needs. The content suggestions have been invaluable.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Benjamin Lee',
    comment:
      'For someone who’s not a natural storyteller, the story generator has been a boon. My content is richer, and my audience engagement has seen a noticeable bump.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Jane Smith',
    comment:
      'As a content creator, the text generation feature is a game-changer for me. The output is coherent and well-structured.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Robert Brown',
    comment:
      'I was initially skeptical about the story generator, but after trying it out, I was amazed by the quality of the output.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Aisha Patel',
    comment:
      'Creating a cover letter has never been this easy. I landed an interview using a cover letter generated from here!',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Leo Martinez',
    comment:
      'As a developer, the code generation tool saved me countless hours. It understands context really well and offers efficient solutions.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Sophie Lee',
    comment:
      'Using this platform has elevated the quality of my work. The generated texts are seamless, and the images align well with my requirements.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Lucas Fernandez',
    comment:
      'The versatility of this tool is its strong suit. I can use it for a variety of purposes, and it never fails to impress me.',
    imgSrc: '/logo/logo.png',
  },

  {
    name: 'Ava Lee',
    comment:
      'The story generator is a hidden gem! Perfect for brainstorming sessions, it gave me diverse perspectives on storytelling.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Jackson Tan',
    comment:
      'From conceptualizing to execution, this platform supports every creative endeavor. A must-have tool in my toolkit now!',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Noah Kim',
    comment:
      'The cover letter tool helped me secure my dream job! The generated content was professional and apt for the role I applied for.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Emma Garcia',
    comment:
      'As a non-tech founder, the code generator is a boon. It gave me quick solutions, enabling me to communicate effectively with my tech team.',
    imgSrc: '/logo/logo.png',
  },
  //more unique testimonials
  {
    name: 'Olivia Smith',
    comment:
      'The image generation tool blew me away! Never thought AI could produce such high-quality images.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Sophia Johnson',
    comment:
      'As a content creator, the text generation feature is a game-changer for me. The output is coherent and well-structured.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Isabella Williams',
    comment:
      'I was initially skeptical about the story generator, but after trying it out, I was amazed by the quality of the output.',
    imgSrc: '/logo/logo.png',
  },
  {
    name: 'Mia Brown',
    comment:
      'Creating a cover letter has never been this easy. I landed an interview using a cover letter generated from here!',
    imgSrc: '/logo/logo.png',
  },
]

export const Testimonials: React.FC = () => (
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 '>
    {reviews.map((review, index) => (
      <div
        key={index}
        className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md transform hover:scale-105 transition-all ease-in-out duration-300 hover:shadow-lg'
      >
        <div className='flex-row items-center md:items-start'>
          <div className='flex items-center'>
            <svg
              className='w-4 h-4 fill-current text-yellow-500'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.69l1.902 5.832h6.142l-4.972 3.617 1.902 5.832-4.972-3.617-4.972 3.617 1.902-5.832-4.972-3.617h6.142z' />
            </svg>{' '}
            <svg
              className='w-4 h-4 fill-current text-yellow-500'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.69l1.902 5.832h6.142l-4.972 3.617 1.902 5.832-4.972-3.617-4.972 3.617 1.902-5.832-4.972-3.617h6.142z' />
            </svg>
            <svg
              className='w-4 h-4 fill-current text-yellow-500'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.69l1.902 5.832h6.142l-4.972 3.617 1.902 5.832-4.972-3.617-4.972 3.617 1.902-5.832-4.972-3.617h6.142z' />
            </svg>
            <svg
              className='w-4 h-4 fill-current text-yellow-500'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.69l1.902 5.832h6.142l-4.972 3.617 1.902 5.832-4.972-3.617-4.972 3.617 1.902-5.832-4.972-3.617h6.142z' />
            </svg>
            <svg
              className='w-4 h-4 fill-current text-yellow-500'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.69l1.902 5.832h6.142l-4.972 3.617 1.902 5.832-4.972-3.617-4.972 3.617 1.902-5.832-4.972-3.617h6.142z' />
            </svg>
          </div>
          <div className='flex-1'>
            <p className='text-lg font-semibold text-gray-800 dark:text-white mb-2'>
              {review.name}
            </p>
            <p className='text-base text-gray-600 dark:text-gray-400'>
              {review.comment}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default Testimonials
