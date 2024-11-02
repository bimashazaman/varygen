const reviews = [
  {
    name: 'Ewan McBride',
    comment:
      'Their attention to detail and commitment to understanding our needs were impressive. The software they delivered exceeded our expectations in both performance and usability.',
  },
  {
    name: 'Felicity Meadows',
    comment:
      'Our app had complex requirements, but this team handled everything with expertise. The final product was robust, well-optimized, and the support we received was outstanding.',
  },

  {
    name: 'Liora Baines',
    comment:
      'The team’s approach to agile development made all the difference for us. We saw progress at every stage, and they were responsive to our feedback, delivering a product we’re proud of.',
  },
  {
    name: 'Tobias Ellery',
    comment:
      'We needed a solution that could handle high traffic, and they delivered just that. Our platform runs smoothly even during peak hours, and the performance is impressive.',
  },
  {
    name: 'Neela Fernandes',
    comment:
      'Their UX/UI expertise made our application incredibly user-friendly. We’ve received fantastic feedback from our clients on how intuitive the interface is.',
  },

  {
    name: 'Jonas Lindstrom',
    comment:
      'Their technical support after deployment has been fantastic. Any minor issues were quickly resolved, and they were proactive in optimizing our system.',
  },
  {
    name: 'Anya Malik',
    comment:
      'Our SaaS platform needed high reliability, and this team delivered. The uptime has been excellent, and our users appreciate the reliability.',
  },
  {
    name: 'Magnus O’Donnell',
    comment:
      'From idea to launch, they guided us through each phase with transparency and skill. Their technical insights helped us make decisions that saved time and costs.',
  },
  {
    name: 'Lina Brunner',
    comment:
      'I’m a non-technical founder, and they made everything easy to understand. They kept us informed and involved, which was key to achieving a product that aligns with our vision.',
  },

  {
    name: 'Viktorija Petrović',
    comment:
      'The web app they delivered was beyond our expectations. It’s scalable, secure, and aligns perfectly with our business goals.',
  },
  {
    name: 'Sinead Ó Murchadha',
    comment:
      'Their approach to security and data privacy was crucial for our healthcare project. They ensured compliance and built a system we trust.',
  },
  {
    name: 'Kiran Gupta',
    comment:
      'Their project management was top-notch, and they kept us updated throughout. The final product was delivered on time and functions flawlessly.',
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
          <div className='flex items-center mb-2'>
            <svg
              className='w-6 h-6 fill-current text-yellow-500'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.69l1.902 5.832h6.142l-4.972 3.617 1.902 5.832-4.972-3.617-4.972 3.617 1.902-5.832-4.972-3.617h6.142z' />
            </svg>{' '}
            <svg
              className='w-6 h-6 fill-current text-yellow-500'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.69l1.902 5.832h6.142l-4.972 3.617 1.902 5.832-4.972-3.617-4.972 3.617 1.902-5.832-4.972-3.617h6.142z' />
            </svg>
            <svg
              className='w-6 h-6 fill-current text-yellow-500'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.69l1.902 5.832h6.142l-4.972 3.617 1.902 5.832-4.972-3.617-4.972 3.617 1.902-5.832-4.972-3.617h6.142z' />
            </svg>
            <svg
              className='w-6 h-6 fill-current text-yellow-500'
              viewBox='0 0 24 24'
            >
              <path d='M12 2.69l1.902 5.832h6.142l-4.972 3.617 1.902 5.832-4.972-3.617-4.972 3.617 1.902-5.832-4.972-3.617h6.142z' />
            </svg>
            <svg
              className='w-6 h-6 fill-current text-yellow-500'
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
