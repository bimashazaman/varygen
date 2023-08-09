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

const LandingPage = () => {
  return (
    <div className='h-full '>
      <LandingNavbar />
      <LandingHero />
      <h2 className='text-center text-4xl dark:text-white font-extrabold mb-10 text-gray-800'>
        Features
      </h2>
      <Conversation />
      <ImageFeature />
      <VideoFeature />
      <AudioFeature />
      <CodeFeature />
      <PricingTable />
      <FAQS />
      <HowItWorks />
    </div>
  )
}

export default LandingPage
