import React from 'react'
import NavBar from '../NavBar'
import TextIcon from './Hero/TextIcon'
import Logo from './Logo/Logo'
import Map from './Map/MapPage'

function ContactUs() {
  return (
    <div className='w-full h-auto'>
      <div className='w-full h-50 bg-zinc-900'>
        <NavBar />
        <h1 className='text-5xl font-bold text-center mt-8 text-white opacity-95'>Contact Us...!</h1>
      </div>
      <TextIcon />
      <Map />
      <Logo />
    </div>
  )
}

export default ContactUs