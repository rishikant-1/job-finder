import React from 'react'
import NavBar from '../NavBar'
import InfoBlock from './Info-block/InfoBlock'
import HowItWork from './How-it-work/HowItWork'
import Faq from './FAQ/Faq'
import Blog from '../HomePage/Blog/Blog'
import InfoBlock2 from './info-block2/InfoBlock2'
import VideoBanner from './VideoBanner/VideoBanner'

function AboutPage() {
  return (
    <div className='w-full h-auto'>
      <div className='w-full h-50 bg-zinc-900'>
        <NavBar />
        <h1 className='text-5xl font-bold text-center mt-8 text-white opacity-95'>About Us...!</h1>
      </div>
      <InfoBlock />
      <HowItWork />
      <VideoBanner />
      <Faq />
      <InfoBlock2 />
      <Blog />
    </div>
  )
}

export default AboutPage