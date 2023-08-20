import { LandingNavbar } from '@/components/landing-navbar'
import { LandingHero } from '@/components/landing-hero'
import { CodeFeature } from '@/components/Code'
import { Conversation } from '@/components/Conversation'
import { ImageFeature } from '@/components/Image'
import { VideoFeature } from '@/components/Video'
import { AudioFeature } from '@/components/Audio'
import HowItWorks from '@/components/HowItWorks'
import PricingTable from '@/components/PricingTable'
import { FAQS } from '@/components/FAQS'
import UserJoinedToast from '@/components/UserJoinedToast'
import Footer from '@/components/Footer'

const LandingPage = () => {
  return (
    <div className='h-full'>
      {/* Header Section */}
      <LandingNavbar />
      <LandingHero />
      <UserJoinedToast />

      {/* Features Section */}
      <section className='my-12'>
        <h2 className='text-center text-4xl font-extrabold mb-10 text-gray-800 dark:text-white'>
          Unlock the Power of Next-Gen Features
        </h2>
        <p className='text-center text-gray-600 dark:text-gray-300 mb-8'>
          Empower your projects with cutting-edge AI solutions. Experience
          efficiency like never before.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-8'>
          <Conversation />
          <ImageFeature />
          <VideoFeature />
          <AudioFeature />
          <CodeFeature />
        </div>
      </section>

      {/* Pricing Section */}
      <PricingTable />

      {/* Frequently Asked Questions */}
      <section className='my-12'>
        <FAQS />
      </section>

      {/* How It Works Section */}
      <section className='my-12'>
        <h2 className='text-center text-4xl font-extrabold mb-6 text-gray-800 dark:text-white'>
          Seamless Integration, Simple Execution
        </h2>
        <p className='text-center text-gray-600 dark:text-gray-300 mb-8'>
          Discover how easy it is to leverage AI in your workflows with just a
          few steps.
        </p>
        <HowItWorks />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default LandingPage
