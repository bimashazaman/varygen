import { LandingNavbar } from '@/components/landing-navbar'
import { LandingHero } from '@/components/landing-hero'
import { CodeFeature } from '@/components/Code'
import { Conversation } from '@/components/Conversation'
import { ImageFeature } from '@/components/Image'
import { FAQS } from '@/components/FAQS'
import HowItWorks from '@/components/HowItWorks'
import PricingTable from '@/components/PricingTable'
import UserJoinedToast from '@/components/UserJoinedToast'
import Footer from '@/components/Footer'
import Summurize from '@/components/Summurize'
import CoverLetterGen from '@/components/CoverLetterGen'
import StoryGen from '@/components/StoryGen'
import MeetTheFounder from '@/components/MeetTheFounder'
import ContactForm from '@/components/ContactForm' // Import ContactForm
import Testimonials from '@/components/Testimonials'

const LandingPage = () => {
  return (
    <div className='h-full'>
      {/* Header Section */}
      <LandingNavbar />
      <LandingHero />
      {/* <UserJoinedToast /> */}
      {/* Features Section */}
      <section className='my-5'>
        <h2 className='text-center text-4xl font-extrabold mb-10 text-gray-800 dark:text-white'>
          Software Development is essential…
        </h2>
        <p className='text-center text-gray-600 dark:text-gray-300 mb-8'>
          But so are the countless other tasks on your list. With every project
          deadline, client request, and technical hurdle, it’s tough to manage
          everything at once.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3 '>
          <Conversation />
          <ImageFeature />
          <Summurize />
        </div>
      </section>
      <br />
      <br />
      <section className='my-12'>
        <h2 className='text-center text-4xl font-extrabold mb-10 text-gray-800 dark:text-white'>
          OK... So What Makes
          <br />
          You So Different?
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-10 p-8 lg:p-12 '>
          {[
            {
              title: 'GUARANTEED',
              description: (
                <>
                  Your success drives our success. <br />
                  We believe in partnerships where risks are shared. <br />
                  <br />
                  When you work with us, you’re not carrying all the weight—
                  <br />
                  we’re in this together.
                </>
              ),
            },
            {
              title: 'RESULTS',
              description: (
                <>
                  Focused on delivering, not just promising. <br />
                  <br />
                  Our priority is clear: get you the results you need.
                </>
              ),
            },
            {
              title: 'SPECIALIZED',
              description: (
                <>
                  Experts in our field. <br />
                  We don’t spread ourselves thin. <br />
                  <br />
                  Instead, we focus on industries we understand deeply, <br />
                  allowing us to deliver exceptional results time after time.
                </>
              ),
            },
            {
              title: 'TRANSPARENCY',
              description: (
                <>
                  No surprises, just clarity. <br />
                  <br />
                  We’re upfront about our capabilities and limitations. <br />
                  No hidden costs or agendas—just an honest commitment to your
                  project’s success.
                </>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className='transform hover:-translate-y-2 transition-transform duration-300 border-4 border-gray-200 dark:border-gray-700 rounded-xl shadow-xl hover:shadow-2xl bg-white dark:bg-gray-800'
            >
              <div className='p-10 text-center'>
                <h3 className='text-2xl font-extrabold text-gray-800 dark:text-white mb-4'>
                  {item.title}
                </h3>
                <p className='text-gray-600 dark:text-gray-300'>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Testimonials */}
      <section className='my-12 px-3' id='contact'>
        <h2 className='text-center text-4xl font-extrabold mb-10 text-gray-800 dark:text-white'>
          What Our Clients Say
        </h2>
        <Testimonials /> {/* Add ContactForm here */}
      </section>
      {/* How It Works Section */}
      <section className='my-12' id='contact'>
        <ContactForm /> {/* Add ContactForm here */}
      </section>
      <footer
        className='bg-gray-800 text-white text-center p-4 mx-0 w-full'
        style={{ marginTop: 'auto' }}
      >
        <p>&copy; 2021 All rights reserved.</p>
      </footer>
    </div>
  )
}

export default LandingPage
