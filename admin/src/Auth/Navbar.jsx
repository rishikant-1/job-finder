import React from 'react'
import { LuHandshake } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='py-4 flex lg:px-20 md:px-10 px-4 items-center justify-between w-full z-10'>
      <div className="flex items-center gap-2">
        <LuHandshake className="text-2xl" />
        <span className="text-xl font-bold">StackHire</span>
      </div>
      <div className='flex items-center gap-2'>
        <Link className='py-1 px-3 rounded-md hover:underline' to='/login'>Login</Link>
        <Link className='py-1 px-3 rounded-sm text-white bg-[#309689]' to='/register'>Register</Link>
      </div>
    </div>
  )
}

export default Navbar