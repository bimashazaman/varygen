import { LandingNavbar } from '@/components/landing-navbar'
import { LandingHero } from '@/components/landing-hero'
import { CodeFeature } from '@/components/Code'
import { Conversation } from '@/components/Conversation'
import { ImageFeature } from '@/components/Image'
import { VideoFeature } from '@/components/Video'
import { AudioFeature } from '@/components/Audio'
import HowItWorks from '@/components/HowItWorks'

const LandingPage = () => {
  return (
    <div className='h-full '>
      <LandingNavbar />
      <LandingHero />
      <h2 className='text-center text-4xl text-white font-extrabold mb-10'>
        Features
      </h2>
      <Conversation />
      <ImageFeature />
      <VideoFeature />
      <AudioFeature />
      <CodeFeature />
      <HowItWorks />
    </div>
  )
}

export default LandingPage
