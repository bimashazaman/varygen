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
    <div className='h-full '>
      <LandingNavbar />
      <LandingHero />
      <UserJoinedToast />
      <h2 className='text-center text-4xl dark:text-white font-extrabold mb-10 text-gray-800'>
        Features
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2'>
        <Conversation />
        <ImageFeature />
        <VideoFeature />
        <AudioFeature />
        <CodeFeature />
      </div>
      <PricingTable />
      <FAQS />
      <HowItWorks />
      <Footer />
    </div>
  )
}

export default LandingPage
