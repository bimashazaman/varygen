import Image from 'next/image'

export const MeetTheFounder: React.FC = () => (
  <div className='bg-white dark:bg-gray-800 p-6 mt-10 rounded-3xl shadow'>
    <div className='flex flex-col md:flex-row items-center'>
      <div className='w-48 h-48 md:w-48 md:h-48 rounded-full overflow-hidden'>
        <Image src='/bimasha.png' alt='Founder Name' width={250} height={250} />
      </div>
      <div className='flex-1 ml-0 md:ml-8 mt-4 md:mt-0'>
        <h2 className='font-bold text-xl'>Bimasha Zaman</h2>
        <h3 className='font-semibold text-gray-600 dark:text-gray-400 mb-4'>
          Founder &amp; CEO of VaryGen
        </h3>
        <p className='leading-relaxed mt-4 text-gray-600 dark:text-gray-400'>
          Once, there was a 13-year-old girl, eyes wide with wonder, discovering
          a universe within lines of code. That little girl, Bimasha, faced
          countless nights questioning, dreaming, and daring. Today, as the
          fearless Founder and CEO of VaryGen, her name gleams amongst the elite
          0.73% of developers on GitHub.
        </p>
        <p className='leading-relaxed mt-4 text-gray-600 dark:text-gray-400'>
          It&apos;s not just about the glowing screens or lines of code;
          it&apos;s about a heartbeat that believed in more, a spirit unyielding
          to challenges, and a passion that bridged dreams to reality. Every
          piece of software she touched holds a fragment of her soul, every
          project a piece of her heart&apos;s tale.
        </p>
        <p className='leading-relaxed mt-4 text-gray-600 dark:text-gray-400'>
          Embrace her essence, be part of her narrative, and let&apos;s together
          shape the luminous tapestry of tomorrow. 🌟
        </p>
      </div>
    </div>
  </div>
)

export default MeetTheFounder
